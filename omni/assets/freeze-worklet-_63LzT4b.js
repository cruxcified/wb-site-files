// Freeze: keeps the last few seconds of its input in a ring buffer. When
// frozen, it stops listening and plays that moment back forever as soft,
// overlapping grains taken from its loudest parts, so a swell becomes an
// endless, slowly shifting drone. Messages: { freeze: true | false }.
const SECONDS = 6;
const BLOCK = 2048;
const OVERLAP = 4;
const MAX_GRAINS = 12;

class FreezeProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.size = Math.floor(SECONDS * sampleRate);
    this.buffer = new Float32Array(this.size);
    this.head = 0;
    this.frozen = false;
    this.grains = [];
    this.untilNext = 0;
    this.starts = [];
    this.port.onmessage = ({ data }) => {
      if (data.freeze && !this.frozen) this.capture();
      this.frozen = Boolean(data.freeze);
    };
  }

  // Finds where the captured audio is loud enough to be worth repeating.
  capture() {
    const blocks = Math.floor(this.size / BLOCK);
    const levels = [];
    for (let b = 0; b < blocks; b++) {
      let sum = 0;
      for (let i = 0; i < BLOCK; i++) {
        const v = this.buffer[(this.head + b * BLOCK + i) % this.size];
        sum += v * v;
      }
      levels.push(Math.sqrt(sum / BLOCK));
    }
    const loudest = Math.max(...levels, 1e-6);
    // Offsets from the oldest sample, so grains never run over the seam
    // where the newest audio meets the oldest.
    this.starts = levels.flatMap((level, b) => (level > loudest * 0.35 ? [b * BLOCK] : []));
    this.origin = this.head;
  }

  spawn() {
    const length = Math.floor((0.5 + Math.random() * 0.7) * sampleRate);
    const latest = this.size - length - BLOCK - 1;
    const candidates = this.starts.filter((s) => s < latest);
    if (!candidates.length) {
      this.untilNext = BLOCK;
      return;
    }
    const pan = Math.random();
    this.grains.push({
      start: candidates[Math.floor(Math.random() * candidates.length)] + Math.floor(Math.random() * BLOCK),
      length,
      position: 0,
      // A few cents either way, so repeats shimmer instead of looping.
      rate: 1 + (Math.random() - 0.5) * 0.004,
      // Equal-power pan, worked out once per grain rather than per sample.
      left: Math.cos(pan * Math.PI * 0.5),
      right: Math.sin(pan * Math.PI * 0.5),
    });
    this.untilNext = Math.floor(length / OVERLAP);
  }

  // Runs on the audio thread, so it must never allocate: any garbage here
  // makes the browser pause this thread now and then to clean up, and the
  // whole mix skips. Plain index loops only, and grains are removed in place.
  process(inputs, outputs) {
    const channels = inputs[0];
    const input = channels.length ? channels[0] : null;
    const out = outputs[0];
    const left = out[0];
    const right = out.length > 1 ? out[1] : null;
    const frames = left.length;
    const buffer = this.buffer;
    const size = this.size;

    if (!this.frozen && input) {
      let head = this.head;
      for (let i = 0; i < frames; i++) {
        buffer[head] = input[i];
        head = head + 1 === size ? 0 : head + 1;
      }
      this.head = head;
    }

    // Nothing playing back: leave the output silent and skip the grain work.
    if (!this.frozen && this.grains.length === 0) return true;

    const grains = this.grains;
    const origin = this.origin;
    for (let i = 0; i < frames; i++) {
      if (this.frozen && grains.length < MAX_GRAINS && --this.untilNext <= 0) this.spawn();
      let l = 0;
      let r = 0;
      for (let g = 0; g < grains.length; g++) {
        const grain = grains[g];
        const t = grain.position / grain.length;
        const window = 0.5 - 0.5 * Math.cos(2 * Math.PI * t);
        const at = grain.start + grain.position * grain.rate;
        const index = Math.floor(at);
        const frac = at - index;
        const a = buffer[(origin + index) % size];
        const b = buffer[(origin + index + 1) % size];
        const v = (a + (b - a) * frac) * window;
        l += v * grain.left;
        r += v * grain.right;
        grain.position++;
      }
      left[i] = l * 0.75;
      if (right) right[i] = r * 0.75;
      for (let g = grains.length - 1; g >= 0; g--) {
        if (grains[g].position >= grains[g].length) grains.splice(g, 1);
      }
    }
    return true;
  }
}

registerProcessor('freeze-processor', FreezeProcessor);
