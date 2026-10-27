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
    this.grains.push({
      start: candidates[Math.floor(Math.random() * candidates.length)] + Math.floor(Math.random() * BLOCK),
      length,
      position: 0,
      // A few cents either way, so repeats shimmer instead of looping.
      rate: 1 + (Math.random() - 0.5) * 0.004,
      pan: Math.random(),
    });
    this.untilNext = Math.floor(length / OVERLAP);
  }

  process(inputs, outputs) {
    const input = inputs[0][0];
    const [left, right] = outputs[0];
    const frames = left.length;

    if (!this.frozen && input) {
      for (let i = 0; i < frames; i++) {
        this.buffer[this.head] = input[i];
        this.head = (this.head + 1) % this.size;
      }
    }

    for (let i = 0; i < frames; i++) {
      if (this.frozen && this.grains.length < MAX_GRAINS && --this.untilNext <= 0) this.spawn();
      let l = 0;
      let r = 0;
      for (const grain of this.grains) {
        const t = grain.position / grain.length;
        const window = 0.5 - 0.5 * Math.cos(2 * Math.PI * t);
        const at = grain.start + grain.position * grain.rate;
        const index = Math.floor(at);
        const frac = at - index;
        const a = this.buffer[(this.origin + index) % this.size];
        const b = this.buffer[(this.origin + index + 1) % this.size];
        const v = (a + (b - a) * frac) * window;
        l += v * Math.cos(grain.pan * Math.PI * 0.5);
        r += v * Math.sin(grain.pan * Math.PI * 0.5);
        grain.position++;
      }
      left[i] = l * 0.75;
      if (right) right[i] = r * 0.75;
      if (this.grains.length && this.grains[0].position >= this.grains[0].length) {
        this.grains = this.grains.filter((g) => g.position < g.length);
      }
    }
    return true;
  }
}

registerProcessor('freeze-processor', FreezeProcessor);
