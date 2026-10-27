var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=`15.1.22`,n=e(((e,t)=>{function n(e){if(Array.isArray(e))return e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),r=e(((e,t)=>{function n(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),i=e(((e,t)=>{function n(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),a=e(((e,t)=>{var n=i();function r(e,t){if(e){if(typeof e==`string`)return n(e,t);var r={}.toString.call(e).slice(8,-1);return r===`Object`&&e.constructor&&(r=e.constructor.name),r===`Map`||r===`Set`?Array.from(e):r===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),o=e(((e,t)=>{function n(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),s=e(((e,t)=>{var i=n(),s=r(),c=a(),l=o();function u(e,t){return i(e)||s(e,t)||c(e,t)||l()}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports})),c=e(((e,t)=>{function n(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),l=e(((e,t)=>{function n(e){"@babel/helpers - typeof";return t.exports=n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),u=e(((e,t)=>{var n=l().default;function r(e,t){if(n(e)!=`object`||!e)return e;var r;if(typeof Symbol<`u`&&(r=e[Symbol.toPrimitive])!==void 0){var i=r.call(e,t||`default`);if(n(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),d=e(((e,t)=>{var n=l().default,r=u();function i(e){var t=r(e,`string`);return n(t)==`symbol`?t:t+``}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),f=e(((e,t)=>{var n=d();function r(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,`value`in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),p=e(((e,t,n)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e,s(),c(),f()):typeof define==`function`&&define.amd?define([`exports`,`@babel/runtime/helpers/slicedToArray`,`@babel/runtime/helpers/classCallCheck`,`@babel/runtime/helpers/createClass`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.automationEvents={},n._slicedToArray,n._classCallCheck,n._createClass))})(n,(function(e,t,n,r){var i=function(e,t,n){return{endTime:t,insertTime:n,type:`exponentialRampToValue`,value:e}},a=function(e,t,n){return{endTime:t,insertTime:n,type:`linearRampToValue`,value:e}},o=function(e,t){return{startTime:t,type:`setValue`,value:e}},s=function(e,t,n){return{duration:n,startTime:t,type:`setValueCurve`,values:e}},c=function(e,t,n){var r=n.startTime,i=n.target,a=n.timeConstant;return i+(t-i)*Math.exp((r-e)/a)},l=function(e){return e.type===`exponentialRampToValue`},u=function(e){return e.type===`linearRampToValue`},d=function(e){return l(e)||u(e)},f=function(e){return e.type===`setValue`},p=function(e){return e.type===`setValueCurve`},m=function(e,t,n,r){var i=e[t];return i===void 0?r:d(i)||f(i)?i.value:p(i)?i.values[i.values.length-1]:c(n,m(e,t-1,i.startTime,r),i)},h=function(e,t,n,r,i){return n===void 0?[r.insertTime,i]:d(n)?[n.endTime,n.value]:f(n)?[n.startTime,n.value]:p(n)?[n.startTime+n.duration,n.values[n.values.length-1]]:[n.startTime,m(e,t-1,n.startTime,i)]},g=function(e){return e.type===`cancelAndHold`},_=function(e){return e.type===`cancelScheduledValues`},v=function(e){return g(e)||_(e)?e.cancelTime:l(e)||u(e)?e.endTime:e.startTime},y=function(e,t,n,r){var i=r.endTime,a=r.value;return n===a?a:0<n&&0<a||n<0&&a<0?n*(a/n)**+((e-t)/(i-t)):e<i?n:a},b=function(e,t,n,r){var i=r.endTime,a=r.value;return n+(e-t)/(i-t)*(a-n)},x=function(e,t){var n=Math.floor(t);if(n===t)return e[n];var r=Math.ceil(t);return(1-(t-n))*e[n]+(1-(r-t))*e[r]},S=function(e,t){var n=t.duration,r=t.startTime,i=t.values;return x(i,(e-r)/n*(i.length-1))},C=function(e,t,n){for(var r=e.length,i=Math.max(1,Math.floor(n/t*r))+1,a=e instanceof Float32Array?new Float32Array(i):e.slice(0,i),o=0;o<i;o+=1){var s=o/(i-1)*n/t*(r-1);a[o]=x(e,s)}return a},w=function(e){return e.type===`setTarget`};e.AutomationEventList=function(){function e(t){n(this,e),this._automationEvents=[],this._currenTime=0,this._defaultValue=t}return r(e,[{key:Symbol.iterator,value:function(){return this._automationEvents[Symbol.iterator]()}},{key:`add`,value:function(e){var t=v(e);if(g(e)||_(e)){var n=this._automationEvents.findIndex(function(n){return _(e)&&p(n)?n.startTime+n.duration>=t:v(n)>=t}),r=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),g(e)){var c=this._automationEvents[this._automationEvents.length-1];if(r!==void 0&&d(r)){if(c!==void 0&&w(c))throw Error(`The internal list is malformed.`);var f=c===void 0?r.insertTime:p(c)?c.startTime+c.duration:v(c),m=c===void 0?this._defaultValue:p(c)?c.values[c.values.length-1]:c.value,h=l(r)?y(t,f,m,r):b(t,f,m,r),x=l(r)?i(h,t,this._currenTime):a(h,t,this._currenTime);this._automationEvents.push(x)}if(c!==void 0&&w(c)&&this._automationEvents.push(o(this.getValue(t),t)),c!==void 0&&p(c)&&c.startTime+c.duration>t){var S=t-c.startTime;this._automationEvents[this._automationEvents.length-1]=s(C(c.values,c.duration,S),c.startTime,S)}}}else{var T=this._automationEvents.findIndex(function(e){return v(e)>t}),E=T===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[T-1];if(E!==void 0&&p(E)&&v(E)+E.duration>t)return!1;var D=l(e)?i(e.value,e.endTime,this._currenTime):u(e)?a(e.value,t,this._currenTime):e;if(T===-1)this._automationEvents.push(D);else{if(p(e)&&t+e.duration>v(this._automationEvents[T]))return!1;this._automationEvents.splice(T,0,D)}}return!0}},{key:`flush`,value:function(e){var t=this._automationEvents.findIndex(function(t){return v(t)>e});if(t>1){var n=this._automationEvents.slice(t-1),r=n[0];w(r)&&n.unshift(o(m(this._automationEvents,t-2,r.startTime,this._defaultValue),r.startTime)),this._automationEvents=n}}},{key:`getValue`,value:function(e){if(this._automationEvents.length===0)return this._defaultValue;var n=this._automationEvents.findIndex(function(t){return v(t)>e}),r=this._automationEvents[n],i=(n===-1?this._automationEvents.length:n)-1,a=this._automationEvents[i];if(a!==void 0&&w(a)&&(r===void 0||!d(r)||r.insertTime>e))return c(e,m(this._automationEvents,i-1,a.startTime,this._defaultValue),a);if(a!==void 0&&f(a)&&(r===void 0||!d(r)))return a.value;if(a!==void 0&&p(a)&&(r===void 0||!d(r)||a.startTime+a.duration>e))return e<a.startTime+a.duration?S(e,a):a.values[a.values.length-1];if(a!==void 0&&d(a)&&(r===void 0||!d(r)))return a.value;if(r!==void 0&&l(r)){var o=t(h(this._automationEvents,i,a,r,this._defaultValue),2),s=o[0],g=o[1];return y(e,s,g,r)}if(r!==void 0&&u(r)){var _=t(h(this._automationEvents,i,a,r,this._defaultValue),2),x=_[0],C=_[1];return b(e,x,C,r)}return this._defaultValue}}])}(),e.createCancelAndHoldAutomationEvent=function(e){return{cancelTime:e,type:`cancelAndHold`}},e.createCancelScheduledValuesAutomationEvent=function(e){return{cancelTime:e,type:`cancelScheduledValues`}},e.createExponentialRampToValueAutomationEvent=function(e,t){return{endTime:t,type:`exponentialRampToValue`,value:e}},e.createLinearRampToValueAutomationEvent=function(e,t){return{endTime:t,type:`linearRampToValue`,value:e}},e.createSetTargetAutomationEvent=function(e,t,n){return{startTime:t,target:e,timeConstant:n,type:`setTarget`}},e.createSetValueAutomationEvent=o,e.createSetValueCurveAutomationEvent=s}))}))(),m=()=>new DOMException(``,`AbortError`),h=e=>(t,n,[r,i,a],o)=>{e(t[i],[n,r,a],e=>e[0]===n&&e[1]===r,o)},g=e=>(t,n,r)=>{let i=[];for(let e=0;e<r.numberOfInputs;e+=1)i.push(new Set);e.set(t,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:n})},_=e=>(t,n)=>{e.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:n})},v=new WeakSet,y=new WeakMap,b=new WeakMap,x=new WeakMap,S=new WeakMap,C=new WeakMap,w=new WeakMap,T=new WeakMap,E=new WeakMap,D=new WeakMap,O={construct(){return O}},k=e=>{try{new new Proxy(e,O)}catch{return!1}return!0},A=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,j=(e,t)=>{let n=[],r=e.replace(/^[\s]+/,``),i=r.match(A);for(;i!==null;){let e=i[1].slice(1,-1),a=i[0].replace(/([\s]+)?;?$/,``).replace(e,new URL(e,t).toString());n.push(a),r=r.slice(i[0].length).replace(/^[\s]+/,``),i=r.match(A)}return[n.join(`;`),r]},ee=e=>{if(e!==void 0&&!Array.isArray(e))throw TypeError(`The parameterDescriptors property of given value for processorCtor is not an array.`)},M=e=>{if(!k(e))throw TypeError(`The given value for processorCtor should be a constructor.`);if(e.prototype===null||typeof e.prototype!=`object`)throw TypeError(`The given value for processorCtor should have a prototype.`)},N=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>{let p=0;return(m,h,g={credentials:`omit`})=>{let _=u.get(m);if(_!==void 0&&_.has(h))return Promise.resolve();let v=l.get(m);if(v!==void 0){let e=v.get(h);if(e!==void 0)return e}let y=a(m),b=y.audioWorklet===void 0?i(h).then(([e,t])=>{let[r,i]=j(e,t);return n(`${r};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}
})})(window,'_AWGS')`)}).then(()=>{let e=f._AWGS.pop();if(e===void 0)throw SyntaxError();r(y.currentTime,y.sampleRate,()=>e(class{},void 0,(e,n)=>{if(e.trim()===``)throw t();let r=E.get(y);if(r!==void 0){if(r.has(e))throw t();M(n),ee(n.parameterDescriptors),r.set(e,n)}else M(n),ee(n.parameterDescriptors),E.set(y,new Map([[e,n]]))},y.sampleRate,void 0,void 0))}):Promise.all([i(h),Promise.resolve(e(d,d))]).then(([[e,t],n])=>{let r=p+1;p=r;let[i,a]=j(e,t),l=`${i};((AudioWorkletProcessor,registerProcessor)=>{${a}
})(${n?`AudioWorkletProcessor`:`class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}`},(n,p)=>registerProcessor(n,class extends p{${n?``:`__c = (a) => a.forEach(e=>this.__b.add(e.buffer));`}process(i,o,p){${n?``:`i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));`}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${r}',class extends AudioWorkletProcessor{process(){return !1}})`,u=new Blob([l],{type:`application/javascript; charset=utf-8`}),d=URL.createObjectURL(u);return y.audioWorklet.addModule(d,g).then(()=>{if(s(y))return y;let e=o(y);return e.audioWorklet.addModule(d,g).then(()=>e)}).then(e=>{if(c===null)throw SyntaxError();try{new c(e,`__sac${r}`)}catch{throw SyntaxError()}}).finally(()=>URL.revokeObjectURL(d))});return v===void 0?l.set(m,new Map([[h,b]])):v.set(h,b),b.then(()=>{let e=u.get(m);e===void 0?u.set(m,new Set([h])):e.add(h)}).finally(()=>{let e=l.get(m);e!==void 0&&e.delete(h)}),b}},P=(e,t)=>{let n=e.get(t);if(n===void 0)throw Error(`A value with the given key could not be found.`);return n},F=(e,t)=>{let n=Array.from(e).filter(t);if(n.length>1)throw Error(`More than one element was found.`);if(n.length===0)throw Error(`No element was found.`);let[r]=n;return e.delete(r),r},te=(e,t,n,r)=>{let i=P(e,t),a=F(i,e=>e[0]===n&&e[1]===r);return i.size===0&&e.delete(t),a},ne=e=>P(w,e),re=e=>{if(v.has(e))throw Error(`The AudioNode is already stored.`);v.add(e),ne(e).forEach(e=>e(!0))},ie=e=>`port`in e,I=e=>{if(!v.has(e))throw Error(`The AudioNode is not stored.`);v.delete(e),ne(e).forEach(e=>e(!1))},ae=(e,t)=>{!ie(e)&&t.every(e=>e.size===0)&&I(e)},oe=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>{let p=new WeakMap;return(m,h,g,_,v)=>{let{activeInputs:y,passiveInputs:b}=a(h),{outputs:x}=a(m),S=s(m),C=a=>{let s=c(h),l=c(m);if(a){let t=te(b,m,g,_);e(y,m,t,!1),!v&&!d(m)&&n(l,s,g,_),f(h)&&re(h)}else{let e=r(y,m,g,_);t(b,_,e,!1),!v&&!d(m)&&i(l,s,g,_);let n=o(h);if(n===0)u(h)&&ae(h,y);else{let e=p.get(h);e!==void 0&&clearTimeout(e),p.set(h,setTimeout(()=>{u(h)&&ae(h,y)},n*1e3))}}};return l(x,[h,g,_],e=>e[0]===h&&e[1]===g&&e[2]===_,!0)?(S.add(C),u(m)?e(y,m,[g,_,C],!0):t(b,_,[m,g,C],!0),!0):!1}},se=e=>(t,n,[r,i,a],o)=>{let s=t.get(r);s===void 0?t.set(r,new Set([[i,n,a]])):e(s,[i,n,a],e=>e[0]===i&&e[1]===n,o)},ce=e=>(t,n)=>{let r=e(t,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});n.connect(r).connect(t.destination);let i=()=>{n.removeEventListener(`ended`,i),n.disconnect(r),r.disconnect()};n.addEventListener(`ended`,i)},le=e=>(t,n)=>{e(t).add(n)},ue={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},de=(e,t,n,r,i,a)=>class extends e{constructor(e,n){let o=i(e),s=r(o,{...ue,...n}),c=a(o)?t():null;super(e,!1,s,c),this._nativeAnalyserNode=s}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(e){this._nativeAnalyserNode.fftSize=e}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(e){let t=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=e,!(e>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=t,n()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(e){let t=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=e,!(this._nativeAnalyserNode.maxDecibels>e))throw this._nativeAnalyserNode.minDecibels=t,n()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(e){this._nativeAnalyserNode.smoothingTimeConstant=e}getByteFrequencyData(e){this._nativeAnalyserNode.getByteFrequencyData(e)}getByteTimeDomainData(e){this._nativeAnalyserNode.getByteTimeDomainData(e)}getFloatFrequencyData(e){this._nativeAnalyserNode.getFloatFrequencyData(e)}getFloatTimeDomainData(e){this._nativeAnalyserNode.getFloatTimeDomainData(e)}},fe=(e,t)=>e.context===t,pe=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return fe(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant})),r.set(a,o),await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},me=e=>{try{e.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},he=()=>new DOMException(``,`IndexSizeError`),ge=e=>{e.getChannelData=(t=>n=>{try{return t.call(e,n)}catch(e){throw e.code===12?he():e}})(e.getChannelData)},_e={numberOfChannels:1},ve=(e,t,n,r,i,a,o,s)=>{let c=null;return class l{constructor(l){if(i===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let{length:u,numberOfChannels:d,sampleRate:f}={..._e,...l};c===null&&(c=new i(1,1,44100));let p=r!==null&&t(a,a)?new r({length:u,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,u,f);if(p.numberOfChannels===0)throw n();return typeof p.copyFromChannel==`function`?t(me,()=>me(p))||s(p):(o(p),ge(p)),e.add(p),p}static[Symbol.hasInstance](t){return typeof t==`object`&&!!t&&Object.getPrototypeOf(t)===l.prototype||e.has(t)}}},ye=-34028234663852886e22,be=34028234663852886e22,L=e=>v.has(e),xe={buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1},Se=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,r){let s=a(e),c={...xe,...r},l=i(s,c),u=o(s),d=u?t():null;super(e,!1,l,d),this._audioBufferSourceNodeRenderer=d,this._isBufferNullified=!1,this._isBufferSet=c.buffer!==null,this._nativeAudioBufferSourceNode=l,this._onended=null,this._playbackRate=n(this,u,l.playbackRate,be,ye)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(e){if(this._nativeAudioBufferSourceNode.buffer=e,e!==null){if(this._isBufferSet)throw r();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(e){this._nativeAudioBufferSourceNode.loop=e}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(e){this._nativeAudioBufferSourceNode.loopEnd=e}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(e){this._nativeAudioBufferSourceNode.loopStart=e}get onended(){return this._onended}set onended(e){let t=typeof e==`function`?s(this,e):null;this._nativeAudioBufferSourceNode.onended=t;let n=this._nativeAudioBufferSourceNode.onended;this._onended=n!==null&&n===t?e:n}get playbackRate(){return this._playbackRate}start(e=0,t=0,n){if(this._nativeAudioBufferSourceNode.start(e,t,n),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=n===void 0?[e,t]:[e,t,n]),this.context.state!==`closed`){re(this);let e=()=>{this._nativeAudioBufferSourceNode.removeEventListener(`ended`,e),L(this)&&I(this)};this._nativeAudioBufferSourceNode.addEventListener(`ended`,e)}}stop(e=0){this._nativeAudioBufferSourceNode.stop(e),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=e)}},Ce=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=null,s=null,c=async(c,l)=>{let u=n(c),d=fe(u,l);return d||(u=t(l,{buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,loop:u.loop,loopEnd:u.loopEnd,loopStart:u.loopStart,playbackRate:u.playbackRate.value}),o!==null&&u.start(...o),s!==null&&u.stop(s)),a.set(l,u),d?await e(l,c.playbackRate,u.playbackRate):await r(l,c.playbackRate,u.playbackRate),await i(c,l,u),u};return{set start(e){o=e},set stop(e){s=e},render(e,t){let n=a.get(t);return n===void 0?c(e,t):Promise.resolve(n)}}},R=e=>`playbackRate`in e,we=e=>`frequency`in e&&`gain`in e,z=e=>`offset`in e,B=e=>!(`frequency`in e)&&`gain`in e,Te=e=>`detune`in e&&`frequency`in e&&!(`gain`in e),Ee=e=>`pan`in e,De=e=>P(y,e),Oe=e=>P(x,e),ke=(e,t)=>{let{activeInputs:n}=De(e);n.forEach(n=>n.forEach(([n])=>{t.includes(e)||ke(n,[...t,e])}));let r=R(e)?[e.playbackRate]:ie(e)?Array.from(e.parameters.values()):we(e)?[e.Q,e.detune,e.frequency,e.gain]:z(e)?[e.offset]:B(e)?[e.gain]:Te(e)?[e.detune,e.frequency]:Ee(e)?[e.pan]:[];for(let e of r){let n=Oe(e);n!==void 0&&n.activeInputs.forEach(([e])=>ke(e,t))}L(e)&&I(e)},Ae=e=>{ke(e.destination,[])},je=e=>e===void 0||typeof e==`number`||typeof e==`string`&&(e===`balanced`||e===`interactive`||e===`playback`),Me=(e,t,n,r,i,a,o,s,c)=>class extends e{constructor(e={}){if(c===null)throw Error(`Missing the native AudioContext constructor.`);let t;try{t=new c(e)}catch(e){throw e.code===12&&e.message===`sampleRate is not in range`?n():e}if(t===null)throw r();if(!je(e.latencyHint))throw TypeError(`The provided value '${e.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(e.sampleRate!==void 0&&t.sampleRate!==e.sampleRate)throw n();super(t,2);let{latencyHint:i}=e,{sampleRate:a}=t;if(this._baseLatency=typeof t.baseLatency==`number`?t.baseLatency:i===`balanced`?512/a:i===`interactive`||i===void 0?256/a:i===`playback`?1024/a:Math.max(2,Math.min(128,Math.round(i*a/128)))*128/a,this._nativeAudioContext=t,c.name===`webkitAudioContext`?(this._nativeGainNode=t.createGain(),this._nativeOscillatorNode=t.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(t.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,t.state===`running`){this._state=`suspended`;let e=()=>{this._state===`suspended`&&(this._state=null),t.removeEventListener(`statechange`,e)};t.addEventListener(`statechange`,e)}}get baseLatency(){return this._baseLatency}get state(){return this._state===null?this._nativeAudioContext.state:this._state}close(){return this.state===`closed`?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state===`suspended`&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Ae(this)}))}createMediaElementSource(e){return new i(this,{mediaElement:e})}createMediaStreamDestination(){return new a(this)}createMediaStreamSource(e){return new o(this,{mediaStream:e})}createMediaStreamTrackSource(e){return new s(this,{mediaStreamTrack:e})}resume(){return this._state===`suspended`?new Promise((e,t)=>{let n=()=>{this._nativeAudioContext.removeEventListener(`statechange`,n),this._nativeAudioContext.state===`running`?e():this.resume().then(e,t)};this._nativeAudioContext.addEventListener(`statechange`,n)}):this._nativeAudioContext.resume().catch(e=>{throw e===void 0||e.code===15?t():e})}suspend(){return this._nativeAudioContext.suspend().catch(e=>{throw e===void 0?t():e})}},Ne=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,n){let r=a(e),c=o(r),l=i(r,n,c),u=c?t(s):null;super(e,!1,l,u),this._isNodeOfNativeOfflineAudioContext=c,this._nativeAudioDestinationNode=l}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(e){if(this._isNodeOfNativeOfflineAudioContext)throw r();if(e>this._nativeAudioDestinationNode.maxChannelCount)throw n();this._nativeAudioDestinationNode.channelCount=e}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(e){if(this._isNodeOfNativeOfflineAudioContext)throw r();this._nativeAudioDestinationNode.channelCountMode=e}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},Pe=e=>{let t=new WeakMap,n=async(n,r)=>{let i=r.destination;return t.set(r,i),await e(n,r,i),i};return{render(e,r){let i=t.get(r);return i===void 0?n(e,r):Promise.resolve(i)}}},Fe=(e,t,n,r,i,a,o,s)=>(c,l)=>{let u=l.listener,{forwardX:d,forwardY:f,forwardZ:p,positionX:m,positionY:h,positionZ:g,upX:_,upY:v,upZ:y}=u.forwardX===void 0?(()=>{let d=new Float32Array(1),f=t(l,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:9}),p=o(l),m=!1,h=[0,0,-1,0,1,0],g=[0,0,0],_=()=>{if(m)return;m=!0;let e=r(l,256,9,0);e.onaudioprocess=({inputBuffer:e})=>{let t=[a(e,d,0),a(e,d,1),a(e,d,2),a(e,d,3),a(e,d,4),a(e,d,5)];t.some((e,t)=>e!==h[t])&&(u.setOrientation(...t),h=t);let n=[a(e,d,6),a(e,d,7),a(e,d,8)];n.some((e,t)=>e!==g[t])&&(u.setPosition(...n),g=n)},f.connect(e)},v=e=>t=>{t!==h[e]&&(h[e]=t,u.setOrientation(...h))},y=e=>t=>{t!==g[e]&&(g[e]=t,u.setPosition(...g))},b=(t,r,a)=>{let o=n(l,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:r});o.connect(f,0,t),o.start(),Object.defineProperty(o.offset,"defaultValue",{get(){return r}});let u=e({context:c},p,o.offset,be,ye);return s(u,`value`,e=>()=>e.call(u),e=>t=>{try{e.call(u,t)}catch(e){if(e.code!==9)throw e}_(),p&&a(t)}),u.cancelAndHoldAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.cancelAndHoldAtTime),u.cancelScheduledValues=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.cancelScheduledValues),u.exponentialRampToValueAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.exponentialRampToValueAtTime),u.linearRampToValueAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.linearRampToValueAtTime),u.setTargetAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.setTargetAtTime),u.setValueAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.setValueAtTime),u.setValueCurveAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.setValueCurveAtTime),u};return{forwardX:b(0,0,v(0)),forwardY:b(1,0,v(1)),forwardZ:b(2,-1,v(2)),positionX:b(6,0,y(0)),positionY:b(7,0,y(1)),positionZ:b(8,0,y(2)),upX:b(3,0,v(3)),upY:b(4,1,v(4)),upZ:b(5,0,v(5))}})():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return p},get positionX(){return m},get positionY(){return h},get positionZ(){return g},get upX(){return _},get upY(){return v},get upZ(){return y}}},Ie=e=>`context`in e,Le=e=>Ie(e[0]),Re=(e,t,n,r)=>{for(let t of e)if(n(t)){if(r)return!1;throw Error(`The set contains at least one similar element.`)}return e.add(t),!0},ze=(e,t,[n,r],i)=>{Re(e,[t,n,r],e=>e[0]===t&&e[1]===n,i)},Be=(e,[t,n,r],i)=>{let a=e.get(t);a===void 0?e.set(t,new Set([[n,r]])):Re(a,[n,r],e=>e[0]===n,i)},Ve=e=>`inputs`in e,He=(e,t,n,r)=>{if(Ve(t)){let i=t.inputs[r];return e.connect(i,n,0),[i,n,0]}return e.connect(t,n,r),[t,n,r]},Ue=(e,t,n)=>{for(let r of e)if(r[0]===t&&r[1]===n)return e.delete(r),r;return null},We=(e,t,n)=>F(e,e=>e[0]===t&&e[1]===n),Ge=(e,t)=>{if(!ne(e).delete(t))throw Error(`Missing the expected event listener.`)},Ke=(e,t,n)=>{let r=P(e,t),i=F(r,e=>e[0]===n);return r.size===0&&e.delete(t),i},qe=(e,t,n,r)=>{Ve(t)?e.disconnect(t.inputs[r],n,0):e.disconnect(t,n,r)},Je=e=>P(b,e),Ye=e=>P(S,e),Xe=e=>T.has(e),Ze=e=>!v.has(e),Qe=(e,t)=>new Promise(n=>{if(t!==null)n(!0);else{let t=e.createScriptProcessor(256,1,1),r=e.createGain(),i=e.createBuffer(1,2,44100),a=i.getChannelData(0);a[0]=1,a[1]=1;let o=e.createBufferSource();o.buffer=i,o.loop=!0,o.connect(t).connect(e.destination),o.connect(r),o.disconnect(r),t.onaudioprocess=r=>{let i=r.inputBuffer.getChannelData(0);Array.prototype.some.call(i,e=>e===1)?n(!0):n(!1),o.stop(),t.onaudioprocess=null,o.disconnect(t),t.disconnect(e.destination)},o.start()}}),$e=(e,t)=>{let n=new Map;for(let t of e)for(let e of t){let t=n.get(e);n.set(e,t===void 0?1:t+1)}n.forEach((e,n)=>t(n,e))},et=e=>`context`in e,tt=e=>{let t=new Map;e.connect=(e=>(n,r=0,i=0)=>{let a=et(n)?e(n,r,i):e(n,r),o=t.get(n);return o===void 0?t.set(n,[{input:i,output:r}]):o.every(e=>e.input!==i||e.output!==r)&&o.push({input:i,output:r}),a})(e.connect.bind(e)),e.disconnect=(n=>(r,i,a)=>{if(n.apply(e),r===void 0)t.clear();else if(typeof r==`number`)for(let[e,n]of t){let i=n.filter(e=>e.output!==r);i.length===0?t.delete(e):t.set(e,i)}else if(t.has(r)){if(i===void 0)t.delete(r);else{let e=t.get(r);if(e!==void 0){let n=e.filter(e=>e.output!==i&&(e.input!==a||a===void 0));n.length===0?t.delete(r):t.set(r,n)}}}for(let[n,r]of t)r.forEach(t=>{et(n)?e.connect(n,t.output,t.input):e.connect(n,t.output)})})(e.disconnect)},nt=(e,t,n,r)=>{let{activeInputs:i,passiveInputs:a}=Oe(t),{outputs:o}=De(e),s=ne(e),c=o=>{let s=Je(e),c=Ye(t);if(o){let t=Ke(a,e,n);ze(i,e,t,!1),!r&&!Xe(e)&&s.connect(c,n)}else{let t=We(i,e,n);Be(a,t,!1),!r&&!Xe(e)&&s.disconnect(c,n)}};return Re(o,[t,n],e=>e[0]===t&&e[1]===n,!0)?(s.add(c),L(e)?ze(i,e,[n,c],!0):Be(a,[e,n,c],!0),!0):!1},rt=(e,t,n,r)=>{let{activeInputs:i,passiveInputs:a}=De(t),o=Ue(i[r],e,n);return o===null?[te(a,e,n,r)[2],!1]:[o[2],!0]},it=(e,t,n)=>{let{activeInputs:r,passiveInputs:i}=Oe(t),a=Ue(r,e,n);return a===null?[Ke(i,e,n)[1],!1]:[a[2],!0]},at=(e,t,n,r,i)=>{let[a,o]=rt(e,n,r,i);if(a!==null&&(Ge(e,a),o&&!t&&!Xe(e)&&qe(Je(e),Je(n),r,i)),L(n)){let{activeInputs:e}=De(n);ae(n,e)}},ot=(e,t,n,r)=>{let[i,a]=it(e,n,r);i!==null&&(Ge(e,i),a&&!t&&!Xe(e)&&Je(e).disconnect(Ye(n),r))},st=(e,t)=>{let n=De(e),r=[];for(let i of n.outputs)Le(i)?at(e,t,...i):ot(e,t,...i),r.push(i[0]);return n.outputs.clear(),r},ct=(e,t,n)=>{let r=De(e),i=[];for(let a of r.outputs)a[1]===n&&(Le(a)?at(e,t,...a):ot(e,t,...a),i.push(a[0]),r.outputs.delete(a));return i},lt=(e,t,n,r,i)=>{let a=De(e);return Array.from(a.outputs).filter(e=>e[0]===n&&(r===void 0||e[1]===r)&&(i===void 0||e[2]===i)).map(n=>(Le(n)?at(e,t,...n):ot(e,t,...n),a.outputs.delete(n),n[0]))},ut=(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>class extends l{constructor(t,r,i,a){super(i),this._context=t,this._nativeAudioNode=i;let o=u(t);d(o)&&!0!==n(Qe,()=>Qe(o,h))&&tt(i),b.set(this,i),w.set(this,new Set),t.state!==`closed`&&r&&re(this),e(this,a,i)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(e){this._nativeAudioNode.channelCount=e}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(e){this._nativeAudioNode.channelCountMode=e}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(e){this._nativeAudioNode.channelInterpretation=e}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(e,n=0,s=0){if(n<0||n>=this._nativeAudioNode.numberOfOutputs)throw i();let l=m(u(this._context));if(f(e)||p(e))throw a();if(Ie(e)){let i=Je(e);try{let t=He(this._nativeAudioNode,i,n,s),r=Ze(this);(l||r)&&this._nativeAudioNode.disconnect(...t),this.context.state!==`closed`&&!r&&Ze(e)&&re(e)}catch(e){throw e.code===12?a():e}return t(this,e,n,s,l)&&$e(c([this],e),r(l)),e}let d=Ye(e);if(d.name===`playbackRate`&&d.maxValue===1024)throw o();try{this._nativeAudioNode.connect(d,n),(l||Ze(this))&&this._nativeAudioNode.disconnect(d,n)}catch(e){throw e.code===12?a():e}nt(this,e,n,l)&&$e(c([this],e),r(l))}disconnect(e,t,n){let r,o=m(u(this._context));if(e===void 0)r=st(this,o);else if(typeof e==`number`){if(e<0||e>=this.numberOfOutputs)throw i();r=ct(this,o,e)}else{if(t!==void 0&&(t<0||t>=this.numberOfOutputs)||Ie(e)&&n!==void 0&&(n<0||n>=e.numberOfInputs))throw i();if(r=lt(this,o,e,t,n),r.length===0)throw a()}for(let e of r)$e(c([this],e),s)}},dt=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>(m,h,g,_=null,v=null)=>{let y=g.value,b=new p.AutomationEventList(y),x=h?r(b):null,S={get defaultValue(){return y},get maxValue(){return _===null?g.maxValue:_},get minValue(){return v===null?g.minValue:v},get value(){return g.value},set value(e){g.value=e,S.setValueAtTime(e,m.context.currentTime)},cancelAndHoldAtTime(e){if(typeof g.cancelAndHoldAtTime==`function`)x===null&&b.flush(m.context.currentTime),b.add(i(e)),g.cancelAndHoldAtTime(e);else{let t=Array.from(b).pop();x===null&&b.flush(m.context.currentTime),b.add(i(e));let n=Array.from(b).pop();g.cancelScheduledValues(e),t!==n&&n!==void 0&&(n.type===`exponentialRampToValue`?g.exponentialRampToValueAtTime(n.value,n.endTime):n.type===`linearRampToValue`?g.linearRampToValueAtTime(n.value,n.endTime):n.type===`setValue`?g.setValueAtTime(n.value,n.startTime):n.type===`setValueCurve`&&g.setValueCurveAtTime(n.values,n.startTime,n.duration))}return S},cancelScheduledValues(e){return x===null&&b.flush(m.context.currentTime),b.add(a(e)),g.cancelScheduledValues(e),S},exponentialRampToValueAtTime(e,t){if(e===0||!Number.isFinite(t)||t<0)throw RangeError();let n=m.context.currentTime;return x===null&&b.flush(n),Array.from(b).length===0&&(b.add(l(y,n)),g.setValueAtTime(y,n)),b.add(o(e,t)),g.exponentialRampToValueAtTime(e,t),S},linearRampToValueAtTime(e,t){let n=m.context.currentTime;return x===null&&b.flush(n),Array.from(b).length===0&&(b.add(l(y,n)),g.setValueAtTime(y,n)),b.add(s(e,t)),g.linearRampToValueAtTime(e,t),S},setTargetAtTime(e,t,n){return x===null&&b.flush(m.context.currentTime),b.add(c(e,t,n)),g.setTargetAtTime(e,t,n),S},setValueAtTime(e,t){return x===null&&b.flush(m.context.currentTime),b.add(l(e,t)),g.setValueAtTime(e,t),S},setValueCurveAtTime(e,t,n){let r=e instanceof Float32Array?e:new Float32Array(e);if(d!==null&&d.name===`webkitAudioContext`){let e=t+n,i=m.context.sampleRate,a=Math.ceil(t*i),o=Math.floor(e*i),s=o-a,c=new Float32Array(s);for(let e=0;e<s;e+=1){let o=(r.length-1)/n*((a+e)/i-t),s=Math.floor(o),l=Math.ceil(o);c[e]=s===l?r[s]:(1-(o-s))*r[s]+(1-(l-o))*r[l]}x===null&&b.flush(m.context.currentTime),b.add(u(c,t,n)),g.setValueCurveAtTime(c,t,n);let l=o/i;l<e&&f(S,c[c.length-1],l),f(S,r[r.length-1],e)}else x===null&&b.flush(m.context.currentTime),b.add(u(r,t,n)),g.setValueCurveAtTime(r,t,n);return S}};return n.set(S,g),t.set(S,m),e(S,x),S},ft=e=>({replay(t){for(let n of e)if(n.type===`exponentialRampToValue`){let{endTime:e,value:r}=n;t.exponentialRampToValueAtTime(r,e)}else if(n.type===`linearRampToValue`){let{endTime:e,value:r}=n;t.linearRampToValueAtTime(r,e)}else if(n.type===`setTarget`){let{startTime:e,target:r,timeConstant:i}=n;t.setTargetAtTime(r,e,i)}else if(n.type===`setValue`){let{startTime:e,value:r}=n;t.setValueAtTime(r,e)}else if(n.type===`setValueCurve`){let{duration:e,startTime:r,values:i}=n;t.setValueCurveAtTime(i,r,e)}else throw Error(`Can't apply an unknown automation.`)}}),pt=class{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,r)=>e.call(t,n,r,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}},mt={channelCount:2,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},ht=(e,t,n,r,i,a,o,s,c,l,u,d,f,p)=>class extends t{constructor(t,p,m){let h=s(t),g=c(h),_=u({...mt,...m});f(_);let v=E.get(h)?.get(p),y=i(g||h.state!==`closed`?h:o(h)??h,g?null:t.baseLatency,l,p,v,_),b=g?r(p,_,v):null;super(t,!0,y,b);let x=[];y.parameters.forEach((e,t)=>{let r=n(this,g,e);x.push([t,r])}),this._nativeAudioWorkletNode=y,this._onprocessorerror=null,this._parameters=new pt(x),g&&e(h,this);let{activeInputs:S}=a(this);d(y,S)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(e){let t=typeof e==`function`?p(this,e):null;this._nativeAudioWorkletNode.onprocessorerror=t;let n=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=n!==null&&n===t?e:n}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function gt(e,t,n,r,i){if(typeof e.copyFromChannel==`function`)t[n].byteLength===0&&(t[n]=new Float32Array(128)),e.copyFromChannel(t[n],r,i);else{let a=e.getChannelData(r);if(t[n].byteLength===0)t[n]=a.slice(i,i+128);else{let e=new Float32Array(a.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);t[n].set(e)}}}var _t=(e,t,n,r,i)=>{typeof e.copyToChannel==`function`?t[n].byteLength!==0&&e.copyToChannel(t[n],r,i):t[n].byteLength!==0&&e.getChannelData(r).set(t[n],i)},vt=(e,t)=>{let n=[];for(let r=0;r<e;r+=1){let e=[],i=typeof t==`number`?t:t[r];for(let t=0;t<i;t+=1)e.push(new Float32Array(128));n.push(e)}return n},yt=(e,t)=>P(P(D,e),Je(t)),bt=async(e,t,n,r,i,a,o)=>{let s=t===null?Math.ceil(e.context.length/128)*128:t.length,c=r.channelCount*r.numberOfInputs,l=i.reduce((e,t)=>e+t,0),u=l===0?null:n.createBuffer(l,s,n.sampleRate);if(a===void 0)throw Error(`Missing the processor constructor.`);let d=De(e),f=await yt(n,e),p=vt(r.numberOfInputs,r.channelCount),m=vt(r.numberOfOutputs,i),h=Array.from(e.parameters.keys()).reduce((e,t)=>({...e,[t]:new Float32Array(128)}),{});for(let l=0;l<s;l+=128){if(r.numberOfInputs>0&&t!==null)for(let e=0;e<r.numberOfInputs;e+=1)for(let n=0;n<r.channelCount;n+=1)gt(t,p[e],n,n,l);a.parameterDescriptors!==void 0&&t!==null&&a.parameterDescriptors.forEach(({name:e},n)=>{gt(t,h,e,c+n,l)});for(let e=0;e<r.numberOfInputs;e+=1)for(let t=0;t<i[e];t+=1)m[e][t].byteLength===0&&(m[e][t]=new Float32Array(128));try{let e=p.map((e,t)=>d.activeInputs[t].size===0?[]:e),t=o(l/n.sampleRate,n.sampleRate,()=>f.process(e,m,h));if(u!==null)for(let e=0,t=0;e<r.numberOfOutputs;e+=1){for(let n=0;n<i[e];n+=1)_t(u,m[e],n,t+n,l);t+=i[e]}if(!t)break}catch(t){e.dispatchEvent(new ErrorEvent(`processorerror`,{colno:t.colno,filename:t.filename,lineno:t.lineno,message:t.message}));break}}return u},xt=(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>(g,_,v)=>{let y=new WeakMap,b=null,x=async(s,x)=>{let S=u(s),C=null,w=fe(S,x),T=Array.isArray(_.outputChannelCount)?_.outputChannelCount:Array.from(_.outputChannelCount);if(d===null){let e=T.reduce((e,t)=>e+t,0),n=i(x,{channelCount:Math.max(1,e),channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:Math.max(1,e)}),a=[];for(let e=0;e<s.numberOfOutputs;e+=1)a.push(r(x,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:T[e]}));let l=o(x,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1});l.connect=t.bind(null,a),l.disconnect=c.bind(null,a),C=[n,a,l]}else w||(S=new d(x,g));if(y.set(x,C===null?S:C[2]),C!==null){if(b===null){if(v===void 0)throw Error(`Missing the processor constructor.`);if(f===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let e=s.channelCount*s.numberOfInputs,t=v.parameterDescriptors===void 0?0:v.parameterDescriptors.length,n=e+t;b=bt(s,n===0?null:await(async()=>{let c=new f(n,Math.ceil(s.context.length/128)*128,x.sampleRate),l=[],u=[];for(let e=0;e<_.numberOfInputs;e+=1)l.push(o(c,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1})),u.push(i(c,{channelCount:_.channelCount,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:_.channelCount}));let d=await Promise.all(Array.from(s.parameters.values()).map(async e=>{let t=a(c,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:e.value});return await p(c,e,t.offset),t})),g=r(c,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:Math.max(1,e+t)});for(let e=0;e<_.numberOfInputs;e+=1){l[e].connect(u[e]);for(let t=0;t<_.channelCount;t+=1)u[e].connect(g,t,e*_.channelCount+t)}for(let[t,n]of d.entries())n.connect(g,0,e+t),n.start(0);return g.connect(c.destination),await Promise.all(l.map(e=>m(s,c,e))),h(c)})(),x,_,T,v,l)}let e=await b,t=n(x,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[c,u,d]=C;e!==null&&(t.buffer=e,t.start(0)),t.connect(c);for(let e=0,t=0;e<s.numberOfOutputs;e+=1){let n=u[e];for(let r=0;r<T[e];r+=1)c.connect(n,t+r,r);t+=T[e]}return d}if(w)for(let[t,n]of s.parameters.entries())await e(x,n,S.parameters.get(t));else for(let[e,t]of s.parameters.entries())await p(x,t,S.parameters.get(e));return await m(s,x,S),S};return{render(e,t){s(t,e);let n=y.get(t);return n===void 0?x(e,t):Promise.resolve(n)}}},St=(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)=>class extends m{constructor(t,n){super(t,n),this._nativeContext=t,this._audioWorklet=e===void 0?void 0:{addModule:(t,n)=>e(this,t,n)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new i(this)}createBuffer(e,t,r){return new n({length:t,numberOfChannels:e,sampleRate:r})}createBufferSource(){return new r(this)}createChannelMerger(e=6){return new a(this,{numberOfInputs:e})}createChannelSplitter(e=6){return new o(this,{numberOfOutputs:e})}createConstantSource(){return new s(this)}createConvolver(){return new c(this)}createDelay(e=1){return new u(this,{maxDelayTime:e})}createDynamicsCompressor(){return new d(this)}createGain(){return new f(this)}createIIRFilter(e,t){return new p(this,{feedback:t,feedforward:e})}createOscillator(){return new h(this)}createPanner(){return new g(this)}createPeriodicWave(e,t,n={disableNormalization:!1}){return new _(this,{...n,imag:t,real:e})}createStereoPanner(){return new v(this)}createWaveShaper(){return new y(this)}decodeAudioData(e,t,n){return l(this._nativeContext,e).then(e=>(typeof t==`function`&&t(e),e),e=>{throw typeof n==`function`&&n(e),e})}},Ct={Q:1,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,detune:0,frequency:350,gain:0,type:`lowpass`},wt=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,r){let c=a(e),l=i(c,{...Ct,...r}),u=o(c),d=u?n():null;super(e,!1,l,d),this._Q=t(this,u,l.Q,be,ye),this._detune=t(this,u,l.detune,1200*Math.log2(be),-1200*Math.log2(be)),this._frequency=t(this,u,l.frequency,e.sampleRate/2,0),this._gain=t(this,u,l.gain,40*Math.log10(be),ye),this._nativeBiquadFilterNode=l,s(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(e){this._nativeBiquadFilterNode.type=e}getFrequencyResponse(e,t,n){try{this._nativeBiquadFilterNode.getFrequencyResponse(e,t,n)}catch(e){throw e.code===11?r():e}if(e.length!==t.length||t.length!==n.length)throw r()}},Tt=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=fe(c,s);return l||(c=t(s,{Q:c.Q.value,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,detune:c.detune.value,frequency:c.frequency.value,gain:c.gain.value,type:c.type})),a.set(s,c),l?(await e(s,o.Q,c.Q),await e(s,o.detune,c.detune),await e(s,o.frequency,c.frequency),await e(s,o.gain,c.gain)):(await r(s,o.Q,c.Q),await r(s,o.detune,c.detune),await r(s,o.frequency,c.frequency),await r(s,o.gain,c.gain)),await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},Et=(e,t)=>(n,r)=>{let i=t.get(n);if(i!==void 0)return i;let a=e.get(n);if(a!==void 0)return a;try{let i=r();return i instanceof Promise?(e.set(n,i),i.catch(()=>!1).then(r=>(e.delete(n),t.set(n,r),r))):(t.set(n,i),i)}catch{return t.set(n,!1),!1}},Dt={channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:6},Ot=(e,t,n,r,i)=>class extends e{constructor(e,a){let o=r(e),s=n(o,{...Dt,...a}),c=i(o)?t():null;super(e,!1,s,c)}},kt=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return fe(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs})),r.set(a,o),await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},At={channelCount:6,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:6},jt=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=r(e),c=n(s,a({...At,...o})),l=i(s)?t():null;super(e,!1,c,l)}},Mt=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return fe(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs})),r.set(a,o),await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},Nt=e=>(t,n,r)=>e(n,t,r),Pt=e=>(t,n,r=0,i=0)=>{let a=t[r];if(a===void 0)throw e();return et(n)?a.connect(n,0,i):a.connect(n,0)},Ft=e=>(t,n)=>{let r=e(t,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1});return r.buffer=t.createBuffer(1,2,44100),r.loop=!0,r.connect(n),r.start(),()=>{r.stop(),r.disconnect(n)}},It={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,offset:1},Lt=(e,t,n,r,i,a,o)=>class extends e{constructor(e,o){let s=i(e),c=r(s,{...It,...o}),l=a(s),u=l?n():null;super(e,!1,c,u),this._constantSourceNodeRenderer=u,this._nativeConstantSourceNode=c,this._offset=t(this,l,c.offset,be,ye),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(e){let t=typeof e==`function`?o(this,e):null;this._nativeConstantSourceNode.onended=t;let n=this._nativeConstantSourceNode.onended;this._onended=n!==null&&n===t?e:n}start(e=0){if(this._nativeConstantSourceNode.start(e),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=e),this.context.state!==`closed`){re(this);let e=()=>{this._nativeConstantSourceNode.removeEventListener(`ended`,e),L(this)&&I(this)};this._nativeConstantSourceNode.addEventListener(`ended`,e)}}stop(e=0){this._nativeConstantSourceNode.stop(e),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=e)}},Rt=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=null,s=null,c=async(c,l)=>{let u=n(c),d=fe(u,l);return d||(u=t(l,{channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,offset:u.offset.value}),o!==null&&u.start(o),s!==null&&u.stop(s)),a.set(l,u),d?await e(l,c.offset,u.offset):await r(l,c.offset,u.offset),await i(c,l,u),u};return{set start(e){o=e},set stop(e){s=e},render(e,t){let n=a.get(t);return n===void 0?c(e,t):Promise.resolve(n)}}},zt=e=>t=>(e[0]=t,e[0]),Bt={buffer:null,channelCount:2,channelCountMode:`clamped-max`,channelInterpretation:`speakers`,disableNormalization:!1},Vt=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=r(e),c={...Bt,...o},l=n(s,c),u=i(s)?t():null;super(e,!1,l,u),this._isBufferNullified=!1,this._nativeConvolverNode=l,c.buffer!==null&&a(this,c.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(e){if(this._nativeConvolverNode.buffer=e,e===null&&this._nativeConvolverNode.buffer!==null){let e=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=e.createBuffer(1,1,e.sampleRate),this._isBufferNullified=!0,a(this,0)}else this._isBufferNullified=!1,a(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(e){this._nativeConvolverNode.normalize=e}},Ht=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return fe(o,a)||(o=e(a,{buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize})),r.set(a,o),Ve(o)?await n(i,a,o.inputs[0]):await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},Ut=(e,t)=>(n,r,i)=>{if(t===null)throw Error(`Missing the native OfflineAudioContext constructor.`);try{return new t(n,r,i)}catch(t){throw t.name===`SyntaxError`?e():t}},Wt=()=>new DOMException(``,`DataCloneError`),Gt=e=>{let{port1:t,port2:n}=new MessageChannel;return new Promise(r=>{let i=()=>{n.onmessage=null,t.close(),n.close(),r()};n.onmessage=()=>i();try{t.postMessage(e,[e])}catch{}finally{i()}})},Kt=(e,t,n,r,i,a,o,s,c,l,u)=>(d,f)=>{let p=o(d)?d:a(d);if(i.has(f)){let e=n();return Promise.reject(e)}try{i.add(f)}catch{}return t(c,()=>c(p))?p.decodeAudioData(f).then(n=>(Gt(f).catch(()=>{}),t(s,()=>s(n))||u(n),e.add(n),n)):new Promise((t,n)=>{let i=async()=>{try{await Gt(f)}catch{}},a=e=>{n(e),i()};try{p.decodeAudioData(f,n=>{typeof n.copyFromChannel!=`function`&&(l(n),ge(n)),e.add(n),i().then(()=>t(n))},e=>{a(e===null?r():e)})}catch(e){a(e)}})},qt=(e,t,n,r,i,a,o,s)=>(c,l)=>{let u=t.get(c);if(u===void 0)throw Error(`Missing the expected cycle count.`);let d=s(a(c.context));if(u===l){if(t.delete(c),!d&&o(c)){let t=r(c),{outputs:a}=n(c);for(let n of a)if(Le(n))e(t,r(n[0]),n[1],n[2]);else{let e=i(n[0]);t.connect(e,n[1])}}}else t.set(c,u-l)},Jt={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,delayTime:0,maxDelayTime:1},Yt=(e,t,n,r,i,a,o)=>class extends e{constructor(e,s){let c=i(e),l={...Jt,...s},u=r(c,l),d=a(c),f=d?n(l.maxDelayTime):null;super(e,!1,u,f),this._delayTime=t(this,d,u.delayTime),o(this,l.maxDelayTime)}get delayTime(){return this._delayTime}},Xt=(e,t,n,r,i)=>a=>{let o=new WeakMap,s=async(s,c)=>{let l=n(s),u=fe(l,c);return u||(l=t(c,{channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,delayTime:l.delayTime.value,maxDelayTime:a})),o.set(c,l),u?await e(c,s.delayTime,l.delayTime):await r(c,s.delayTime,l.delayTime),await i(s,c,l),l};return{render(e,t){let n=o.get(t);return n===void 0?s(e,t):Promise.resolve(n)}}},Zt=e=>(t,n,r,i)=>e(t[i],e=>e[0]===n&&e[1]===r),Qt=e=>(t,n)=>{e(t).delete(n)},$t=e=>`delayTime`in e,en=(e,t,n)=>function r(i,a){let o=Ie(a)?a:n(e,a);if($t(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];let{outputs:s}=t(o);return Array.from(s).map(e=>r([...i,o],e[0])).reduce((e,t)=>e.concat(t),[])},tn=(e,t,n)=>{let r=t[n];if(r===void 0)throw e();return r},nn=e=>(t,n=void 0,r=void 0,i=0)=>n===void 0?t.forEach(e=>e.disconnect()):typeof n==`number`?tn(e,t,n).disconnect():et(n)?r===void 0?t.forEach(e=>e.disconnect(n)):i===void 0?tn(e,t,r).disconnect(n,0):tn(e,t,r).disconnect(n,0,i):r===void 0?t.forEach(e=>e.disconnect(n)):tn(e,t,r).disconnect(n,0),rn={attack:.003,channelCount:2,channelCountMode:`clamped-max`,channelInterpretation:`speakers`,knee:30,ratio:12,release:.25,threshold:-24},an=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,i){let c=a(e),l=r(c,{...rn,...i}),u=o(c),d=u?n():null;super(e,!1,l,d),this._attack=t(this,u,l.attack),this._knee=t(this,u,l.knee),this._nativeDynamicsCompressorNode=l,this._ratio=t(this,u,l.ratio),this._release=t(this,u,l.release),this._threshold=t(this,u,l.threshold),s(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(e){let t=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=e,e>2)throw this._nativeDynamicsCompressorNode.channelCount=t,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(e){let t=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=e,e===`max`)throw this._nativeDynamicsCompressorNode.channelCountMode=t,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value==`number`?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},on=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=fe(c,s);return l||(c=t(s,{attack:c.attack.value,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,knee:c.knee.value,ratio:c.ratio.value,release:c.release.value,threshold:c.threshold.value})),a.set(s,c),l?(await e(s,o.attack,c.attack),await e(s,o.knee,c.knee),await e(s,o.ratio,c.ratio),await e(s,o.release,c.release),await e(s,o.threshold,c.threshold)):(await r(s,o.attack,c.attack),await r(s,o.knee,c.knee),await r(s,o.ratio,c.ratio),await r(s,o.release,c.release),await r(s,o.threshold,c.threshold)),await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},sn=()=>new DOMException(``,`EncodingError`),cn=e=>t=>new Promise((n,r)=>{if(e===null){r(SyntaxError());return}let i=e.document.head;if(i===null)r(SyntaxError());else{let a=e.document.createElement(`script`),o=new Blob([t],{type:`application/javascript`}),s=URL.createObjectURL(o),c=e.onerror,l=()=>{e.onerror=c,URL.revokeObjectURL(s)};e.onerror=(t,n,i,a,o)=>{if(n===s||n===e.location.href&&i===1&&a===1)return l(),r(o),!1;if(c!==null)return c(t,n,i,a,o)},a.onerror=()=>{l(),r(SyntaxError())},a.onload=()=>{l(),n()},a.src=s,a.type=`module`,i.appendChild(a)}}),ln=e=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(t,n,r){if(n!==null){let i=this._listeners.get(n);i===void 0&&(i=e(this,n),typeof n==`function`&&this._listeners.set(n,i)),this._nativeEventTarget.addEventListener(t,i,r)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,t,n){let r=t===null?void 0:this._listeners.get(t);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,n)}},un=e=>(t,n,r)=>{Object.defineProperties(e,{currentFrame:{configurable:!0,get(){return Math.round(t*n)}},currentTime:{configurable:!0,get(){return t}}});try{return r()}finally{e!==null&&(delete e.currentFrame,delete e.currentTime)}},dn=e=>async t=>{try{let e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw e()},fn={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,gain:1},pn=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=i(e),c=r(s,{...fn,...o}),l=a(s),u=l?n():null;super(e,!1,c,u),this._gain=t(this,l,c.gain,be,ye)}get gain(){return this._gain}},mn=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=fe(c,s);return l||(c=t(s,{channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,gain:c.gain.value})),a.set(s,c),l?await e(s,o.gain,c.gain):await r(s,o.gain,c.gain),await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},hn=(e,t)=>n=>t(e,n),gn=e=>t=>{let n=e(t);if(n.renderer===null)throw Error(`Missing the renderer of the given AudioNode in the audio graph.`);return n.renderer},_n=e=>t=>e.get(t)??0,vn=e=>t=>{let n=e(t);if(n.renderer===null)throw Error(`Missing the renderer of the given AudioParam in the audio graph.`);return n.renderer},yn=e=>t=>e.get(t),bn=()=>new DOMException(``,`InvalidStateError`),xn=e=>t=>{let n=e.get(t);if(n===void 0)throw bn();return n},Sn=(e,t)=>n=>{let r=e.get(n);if(r!==void 0)return r;if(t===null)throw Error(`Missing the native OfflineAudioContext constructor.`);return r=new t(1,1,44100),e.set(n,r),r},Cn=e=>t=>{let n=e.get(t);if(n===void 0)throw Error(`The context has no set of AudioWorkletNodes.`);return n},wn=()=>new DOMException(``,`InvalidAccessError`),Tn=e=>{e.getFrequencyResponse=(t=>(n,r,i)=>{if(n.length!==r.length||r.length!==i.length)throw wn();return t.call(e,n,r,i)})(e.getFrequencyResponse)},En={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`},Dn=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=r(e),c=i(s),l={...En,...o},u=t(s,c?null:e.baseLatency,l),d=c?n(l.feedback,l.feedforward):null;super(e,!1,u,d),Tn(u),this._nativeIIRFilterNode=u,a(this,1)}getFrequencyResponse(e,t,n){return this._nativeIIRFilterNode.getFrequencyResponse(e,t,n)}},On=(e,t,n,r,i,a,o,s,c,l,u)=>{let d=l.length,f=s;for(let s=0;s<d;s+=1){let d=n[0]*l[s];for(let t=1;t<i;t+=1){let r=f-t&c-1;d+=n[t]*a[r],d-=e[t]*o[r]}for(let e=i;e<r;e+=1)d+=n[e]*a[f-e&c-1];for(let n=i;n<t;n+=1)d-=e[n]*o[f-n&c-1];a[f]=l[s],o[f]=d,f=f+1&c-1,u[s]=d}return f},kn=(e,t,n,r)=>{let i=n instanceof Float64Array?n:new Float64Array(n),a=r instanceof Float64Array?r:new Float64Array(r),o=i.length,s=a.length,c=Math.min(o,s);if(i[0]!==1){for(let e=0;e<o;e+=1)a[e]/=i[0];for(let e=1;e<s;e+=1)i[e]/=i[0]}let l=new Float32Array(32),u=new Float32Array(32),d=t.createBuffer(e.numberOfChannels,e.length,e.sampleRate),f=e.numberOfChannels;for(let t=0;t<f;t+=1){let n=e.getChannelData(t),r=d.getChannelData(t);l.fill(0),u.fill(0),On(i,o,a,s,c,l,u,0,32,n,r)}return d},An=(e,t,n,r,i)=>(a,o)=>{let s=new WeakMap,c=null,l=async(l,u)=>{let d=null,f=t(l),p=fe(f,u);if(u.createIIRFilter===void 0?d=e(u,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(f=u.createIIRFilter(o,a)),s.set(u,d===null?f:d),d!==null){if(c===null){if(n===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let e=new n(l.context.destination.channelCount,l.context.length,u.sampleRate);c=(async()=>(await r(l,e,e.destination),kn(await i(e),u,a,o)))()}let e=await c;return d.buffer=e,d.start(0),d}return await r(l,u,f),f};return{render(e,t){let n=s.get(t);return n===void 0?l(e,t):Promise.resolve(n)}}},jn=(e,t,n,r,i,a)=>o=>(s,c)=>{let l=e.get(s);if(l===void 0){if(!o&&a(s)){let e=r(s),{outputs:a}=n(s);for(let n of a)if(Le(n))t(e,r(n[0]),n[1],n[2]);else{let t=i(n[0]);e.disconnect(t,n[1])}}e.set(s,c)}else e.set(s,l+c)},Mn=(e,t)=>n=>t(e.get(n))||t(n),Nn=(e,t)=>n=>e.has(n)||t(n),Pn=(e,t)=>n=>e.has(n)||t(n),Fn=(e,t)=>n=>t(e.get(n))||t(n),In=e=>t=>e!==null&&t instanceof e,Ln=e=>t=>e!==null&&typeof e.AudioNode==`function`&&t instanceof e.AudioNode,Rn=e=>t=>e!==null&&typeof e.AudioParam==`function`&&t instanceof e.AudioParam,zn=(e,t)=>n=>e(n)||t(n),Bn=e=>t=>e!==null&&t instanceof e,Vn=e=>e!==null&&e.isSecureContext,Hn=(e,t,n,r)=>class extends e{constructor(e,i){let a=n(e),o=t(a,i);if(r(a))throw TypeError();super(e,!0,o,null),this._nativeMediaElementAudioSourceNode=o}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Un={channelCount:2,channelCountMode:`explicit`,channelInterpretation:`speakers`},Wn=(e,t,n,r)=>class extends e{constructor(e,i){let a=n(e);if(r(a))throw TypeError();let o=t(a,{...Un,...i});super(e,!1,o,null),this._nativeMediaStreamAudioDestinationNode=o}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Gn=(e,t,n,r)=>class extends e{constructor(e,i){let a=n(e),o=t(a,i);if(r(a))throw TypeError();super(e,!0,o,null),this._nativeMediaStreamAudioSourceNode=o}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Kn=(e,t,n)=>class extends e{constructor(e,r){let i=t(n(e),r);super(e,!0,i,null)}},qn=(e,t,n,r,i,a)=>class extends n{constructor(n,a){super(n),this._nativeContext=n,C.set(this,n),r(n)&&i.set(n,new Set),this._destination=new e(this,a),this._listener=t(this,n),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(e){let t=typeof e==`function`?a(this,e):null;this._nativeContext.onstatechange=t;let n=this._nativeContext.onstatechange;this._onstatechange=n!==null&&n===t?e:n}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Jn=e=>{let t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{let n=e.decodeAudioData(t.buffer,()=>{});return n!==void 0&&(n.catch(()=>{}),!0)}catch{}return!1},Yn=(e,t)=>(n,r,i)=>{let a=new Set;return n.connect=(i=>(o,s=0,c=0)=>{let l=a.size===0;if(t(o))return i.call(n,o,s,c),e(a,[o,s,c],e=>e[0]===o&&e[1]===s&&e[2]===c,!0),l&&r(),o;i.call(n,o,s),e(a,[o,s],e=>e[0]===o&&e[1]===s,!0),l&&r()})(n.connect),n.disconnect=(e=>(r,o,s)=>{let c=a.size>0;if(r===void 0)e.apply(n),a.clear();else if(typeof r==`number`){e.call(n,r);for(let e of a)e[1]===r&&a.delete(e)}else{t(r)?e.call(n,r,o,s):e.call(n,r,o);for(let e of a)e[0]===r&&(o===void 0||e[1]===o)&&(s===void 0||e[2]===s)&&a.delete(e)}let l=a.size===0;c&&l&&i()})(n.disconnect),n},Xn=(e,t,n)=>{let r=t[n];r!==void 0&&r!==e[n]&&(e[n]=r)},Zn=(e,t)=>{Xn(e,t,`channelCount`),Xn(e,t,`channelCountMode`),Xn(e,t,`channelInterpretation`)},Qn=e=>typeof e.getFloatTimeDomainData==`function`,$n=e=>{e.getFloatTimeDomainData=t=>{let n=new Uint8Array(t.length);e.getByteTimeDomainData(n);let r=Math.max(n.length,e.fftSize);for(let e=0;e<r;e+=1)t[e]=(n[e]-128)*.0078125;return t}},er=(e,t)=>(n,r)=>{let i=n.createAnalyser();if(Zn(i,r),!(r.maxDecibels>r.minDecibels))throw t();return Xn(i,r,`fftSize`),Xn(i,r,`maxDecibels`),Xn(i,r,`minDecibels`),Xn(i,r,`smoothingTimeConstant`),e(Qn,()=>Qn(i))||$n(i),i},tr=e=>e===null?null:e.hasOwnProperty(`AudioBuffer`)?e.AudioBuffer:null,nr=(e,t,n)=>{let r=t[n];r!==void 0&&r!==e[n].value&&(e[n].value=r)},rr=e=>{e.start=(t=>{let n=!1;return(r=0,i=0,a)=>{if(n)throw bn();t.call(e,r,i,a),n=!0}})(e.start)},ir=e=>{e.start=(t=>(n=0,r=0,i)=>{if(typeof i==`number`&&i<0||r<0||n<0)throw RangeError(`The parameters can't be negative.`);t.call(e,n,r,i)})(e.start)},ar=e=>{e.stop=(t=>(n=0)=>{if(n<0)throw RangeError(`The parameter can't be negative.`);t.call(e,n)})(e.stop)},or=(e,t,n,r,i,a,o,s,c,l,u)=>(d,f)=>{let p=d.createBufferSource();return Zn(p,f),nr(p,f,`playbackRate`),Xn(p,f,`buffer`),Xn(p,f,`loop`),Xn(p,f,`loopEnd`),Xn(p,f,`loopStart`),t(n,()=>n(d))||rr(p),t(r,()=>r(d))||c(p),t(i,()=>i(d))||l(p,d),t(a,()=>a(d))||ir(p),t(o,()=>o(d))||u(p,d),t(s,()=>s(d))||ar(p),e(d,p),p},sr=e=>e===null?null:e.hasOwnProperty(`AudioContext`)?e.AudioContext:e.hasOwnProperty(`webkitAudioContext`)?e.webkitAudioContext:null,cr=(e,t)=>(n,r,i)=>{let a=n.destination;if(a.channelCount!==r)try{a.channelCount=r}catch{}i&&a.channelCountMode!==`explicit`&&(a.channelCountMode=`explicit`),a.maxChannelCount===0&&Object.defineProperty(a,"maxChannelCount",{value:r});let o=e(n,{channelCount:r,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,gain:1});return t(o,`channelCount`,e=>()=>e.call(o),e=>t=>{e.call(o,t);try{a.channelCount=t}catch(e){if(t>a.maxChannelCount)throw e}}),t(o,`channelCountMode`,e=>()=>e.call(o),e=>t=>{e.call(o,t),a.channelCountMode=t}),t(o,`channelInterpretation`,e=>()=>e.call(o),e=>t=>{e.call(o,t),a.channelInterpretation=t}),Object.defineProperty(o,"maxChannelCount",{get:()=>a.maxChannelCount}),o.connect(a),o},lr=e=>e===null?null:e.hasOwnProperty(`AudioWorkletNode`)?e.AudioWorkletNode:null,ur=e=>{let{port1:t}=new MessageChannel;try{t.postMessage(e)}finally{t.close()}},dr=(e,t,n,r,i)=>(a,o,s,c,l,u)=>{if(s!==null)try{let t=new s(a,c,u),r=new Map,o=null;if(Object.defineProperties(t,{channelCount:{get:()=>u.channelCount,set:()=>{throw e()}},channelCountMode:{get:()=>`explicit`,set:()=>{throw e()}},onprocessorerror:{get:()=>o,set:e=>{typeof o==`function`&&t.removeEventListener(`processorerror`,o),o=typeof e==`function`?e:null,typeof o==`function`&&t.addEventListener(`processorerror`,o)}}}),t.addEventListener=(e=>(...n)=>{if(n[0]===`processorerror`){let e=typeof n[1]==`function`?n[1]:typeof n[1]==`object`&&n[1]!==null&&typeof n[1].handleEvent==`function`?n[1].handleEvent:null;if(e!==null){let t=r.get(n[1]);t===void 0?(n[1]=t=>{t.type===`error`?(Object.defineProperties(t,{type:{value:`processorerror`}}),e(t)):e(new ErrorEvent(n[0],{...t}))},r.set(e,n[1])):n[1]=t}}return e.call(t,`error`,n[1],n[2]),e.call(t,...n)})(t.addEventListener),t.removeEventListener=(e=>(...n)=>{if(n[0]===`processorerror`){let e=r.get(n[1]);e!==void 0&&(r.delete(n[1]),n[1]=e)}return e.call(t,`error`,n[1],n[2]),e.call(t,n[0],n[1],n[2])})(t.removeEventListener),u.numberOfOutputs!==0){let e=n(a,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});return t.connect(e).connect(a.destination),i(t,()=>e.disconnect(),()=>e.connect(a.destination))}return t}catch(e){throw e.code===11?r():e}if(l===void 0)throw r();return ur(u),t(a,o,l,u)},fr=(e,t)=>e===null?512:Math.max(512,Math.min(16384,2**Math.round(Math.log2(e*t)))),pr=e=>new Promise((t,n)=>{let{port1:r,port2:i}=new MessageChannel;r.onmessage=({data:e})=>{r.close(),i.close(),t(e)},r.onmessageerror=({data:e})=>{r.close(),i.close(),n(e)},i.postMessage(e)}),mr=async(e,t)=>new e(await pr(t)),hr=(e,t,n,r)=>{let i=D.get(e);i===void 0&&(i=new WeakMap,D.set(e,i));let a=mr(n,r);return i.set(t,a),a},gr=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>(p,m,h,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();let _=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(_.some(e=>e<1))throw c();if(_.length!==g.numberOfOutputs)throw t();if(g.channelCountMode!==`explicit`)throw c();let v=g.channelCount*g.numberOfInputs,y=_.reduce((e,t)=>e+t,0),b=h.parameterDescriptors===void 0?0:h.parameterDescriptors.length;if(v+b>6||y>6)throw c();let x=new MessageChannel,S=[],C=[];for(let e=0;e<g.numberOfInputs;e+=1)S.push(o(p,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),C.push(i(p,{channelCount:g.channelCount,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:g.channelCount}));let w=[];if(h.parameterDescriptors!==void 0)for(let{defaultValue:e,maxValue:t,minValue:n,name:r}of h.parameterDescriptors){let i=a(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:g.parameterData[r]===void 0?e===void 0?0:e:g.parameterData[r]});Object.defineProperties(i.offset,{defaultValue:{get:()=>e===void 0?0:e},maxValue:{get:()=>t===void 0?be:t},minValue:{get:()=>n===void 0?ye:n}}),w.push(i)}let T=r(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:Math.max(1,v+b)}),E=fr(m,p.sampleRate),D=s(p,E,v+b,Math.max(1,y)),O=i(p,{channelCount:Math.max(1,y),channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:Math.max(1,y)}),k=[];for(let e=0;e<g.numberOfOutputs;e+=1)k.push(r(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:_[e]}));for(let e=0;e<g.numberOfInputs;e+=1){S[e].connect(C[e]);for(let t=0;t<g.channelCount;t+=1)C[e].connect(T,t,e*g.channelCount+t)}let A=new pt(h.parameterDescriptors===void 0?[]:h.parameterDescriptors.map(({name:e},t)=>{let n=w[t];return n.connect(T,0,v+t),n.start(0),[e,n.offset]}));T.connect(D);let j=g.channelInterpretation,ee=null,M=g.numberOfOutputs===0?[D]:k,N={get bufferSize(){return E},get channelCount(){return g.channelCount},set channelCount(e){throw n()},get channelCountMode(){return g.channelCountMode},set channelCountMode(e){throw n()},get channelInterpretation(){return j},set channelInterpretation(e){for(let t of S)t.channelInterpretation=e;j=e},get context(){return D.context},get inputs(){return S},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return ee},set onprocessorerror(e){typeof ee==`function`&&N.removeEventListener(`processorerror`,ee),ee=typeof e==`function`?e:null,typeof ee==`function`&&N.addEventListener(`processorerror`,ee)},get parameters(){return A},get port(){return x.port2},addEventListener(...e){return D.addEventListener(e[0],e[1],e[2])},connect:e.bind(null,M),disconnect:l.bind(null,M),dispatchEvent(...e){return D.dispatchEvent(e[0])},removeEventListener(...e){return D.removeEventListener(e[0],e[1],e[2])}},P=new Map;x.port1.addEventListener=(e=>(...t)=>{if(t[0]===`message`){let e=typeof t[1]==`function`?t[1]:typeof t[1]==`object`&&t[1]!==null&&typeof t[1].handleEvent==`function`?t[1].handleEvent:null;if(e!==null){let n=P.get(t[1]);n===void 0?(t[1]=t=>{u(p.currentTime,p.sampleRate,()=>e(t))},P.set(e,t[1])):t[1]=n}}return e.call(x.port1,t[0],t[1],t[2])})(x.port1.addEventListener),x.port1.removeEventListener=(e=>(...t)=>{if(t[0]===`message`){let e=P.get(t[1]);e!==void 0&&(P.delete(t[1]),t[1]=e)}return e.call(x.port1,t[0],t[1],t[2])})(x.port1.removeEventListener);let F=null;Object.defineProperty(x.port1,"onmessage",{get:()=>F,set:e=>{typeof F==`function`&&x.port1.removeEventListener(`message`,F),F=typeof e==`function`?e:null,typeof F==`function`&&(x.port1.addEventListener(`message`,F),x.port1.start())}}),h.prototype.port=x.port1;let te=null;hr(p,N,h,g).then(e=>te=e);let ne=vt(g.numberOfInputs,g.channelCount),re=vt(g.numberOfOutputs,_),ie=h.parameterDescriptors===void 0?[]:h.parameterDescriptors.reduce((e,{name:t})=>({...e,[t]:new Float32Array(128)}),{}),I=!0,ae=()=>{g.numberOfOutputs>0&&D.disconnect(O);for(let e=0,t=0;e<g.numberOfOutputs;e+=1){let n=k[e];for(let r=0;r<_[e];r+=1)O.disconnect(n,t+r,r);t+=_[e]}},oe=new Map;D.onaudioprocess=({inputBuffer:e,outputBuffer:t})=>{if(te!==null){let n=d(N);for(let r=0;r<E;r+=128){for(let t=0;t<g.numberOfInputs;t+=1)for(let n=0;n<g.channelCount;n+=1)gt(e,ne[t],n,n,r);h.parameterDescriptors!==void 0&&h.parameterDescriptors.forEach(({name:t},n)=>{gt(e,ie,t,v+n,r)});for(let e=0;e<g.numberOfInputs;e+=1)for(let t=0;t<_[e];t+=1)re[e][t].byteLength===0&&(re[e][t]=new Float32Array(128));try{let e=ne.map((e,t)=>{if(n[t].size>0)return oe.set(t,E/128),e;let r=oe.get(t);return r===void 0?[]:(e.every(e=>e.every(e=>e===0))&&(r===1?oe.delete(t):oe.set(t,r-1)),e)});I=u(p.currentTime+r/p.sampleRate,p.sampleRate,()=>te.process(e,re,ie));for(let e=0,n=0;e<g.numberOfOutputs;e+=1){for(let i=0;i<_[e];i+=1)_t(t,re[e],i,n+i,r);n+=_[e]}}catch(e){I=!1,N.dispatchEvent(new ErrorEvent(`processorerror`,{colno:e.colno,filename:e.filename,lineno:e.lineno,message:e.message}))}if(!I){for(let e=0;e<g.numberOfInputs;e+=1){S[e].disconnect(C[e]);for(let t=0;t<g.channelCount;t+=1)C[r].disconnect(T,t,e*g.channelCount+t)}if(h.parameterDescriptors!==void 0){let e=h.parameterDescriptors.length;for(let t=0;t<e;t+=1){let e=w[t];e.disconnect(T,0,v+t),e.stop()}}T.disconnect(D),D.onaudioprocess=null,se?ae():ue();break}}}};let se=!1,ce=o(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0}),le=()=>D.connect(ce).connect(p.destination),ue=()=>{D.disconnect(ce),ce.disconnect()};return le(),f(N,()=>{if(I){ue(),g.numberOfOutputs>0&&D.connect(O);for(let e=0,t=0;e<g.numberOfOutputs;e+=1){let n=k[e];for(let r=0;r<_[e];r+=1)O.connect(n,t+r,r);t+=_[e]}}se=!0},()=>{I&&(le(),ae()),se=!1})},_r=(e,t)=>{let n=e.createBiquadFilter();return Zn(n,t),nr(n,t,`Q`),nr(n,t,`detune`),nr(n,t,`frequency`),nr(n,t,`gain`),Xn(n,t,`type`),n},vr=(e,t)=>(n,r)=>{let i=n.createChannelMerger(r.numberOfInputs);return e!==null&&e.name===`webkitAudioContext`&&t(n,i),Zn(i,r),i},yr=e=>{let t=e.numberOfOutputs;Object.defineProperty(e,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw bn()}}),Object.defineProperty(e,"channelCountMode",{get:()=>`explicit`,set:e=>{if(e!==`explicit`)throw bn()}}),Object.defineProperty(e,"channelInterpretation",{get:()=>`discrete`,set:e=>{if(e!==`discrete`)throw bn()}})},br=(e,t)=>{let n=e.createChannelSplitter(t.numberOfOutputs);return Zn(n,t),yr(n),n},xr=(e,t,n,r,i)=>(a,o)=>{if(a.createConstantSource===void 0)return n(a,o);let s=a.createConstantSource();return Zn(s,o),nr(s,o,`offset`),t(r,()=>r(a))||ir(s),t(i,()=>i(a))||ar(s),e(a,s),s},Sr=(e,t)=>(e.connect=t.connect.bind(t),e.disconnect=t.disconnect.bind(t),e),Cr=(e,t,n,r)=>(i,{offset:a,...o})=>{let s=i.createBuffer(1,2,44100),c=t(i,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=n(i,{...o,gain:a}),u=s.getChannelData(0);return u[0]=1,u[1]=1,c.buffer=s,c.loop=!0,e(i,c),r(Sr({get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(e){l.channelCount=e},get channelCountMode(){return l.channelCountMode},set channelCountMode(e){l.channelCountMode=e},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(e){l.channelInterpretation=e},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(e){c.onended=e},addEventListener(...e){return c.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return c.dispatchEvent(e[0])},removeEventListener(...e){return c.removeEventListener(e[0],e[1],e[2])},start(e=0){c.start.call(c,e)},stop(e=0){c.stop.call(c,e)}},l),()=>c.connect(l),()=>c.disconnect(l))},wr=(e,t)=>(n,r)=>{let i=n.createConvolver();if(Zn(i,r),r.disableNormalization===i.normalize&&(i.normalize=!r.disableNormalization),Xn(i,r,`buffer`),r.channelCount>2||(t(i,`channelCount`,e=>()=>e.call(i),t=>n=>{if(n>2)throw e();return t.call(i,n)}),r.channelCountMode===`max`))throw e();return t(i,`channelCountMode`,e=>()=>e.call(i),t=>n=>{if(n===`max`)throw e();return t.call(i,n)}),i},Tr=(e,t)=>{let n=e.createDelay(t.maxDelayTime);return Zn(n,t),nr(n,t,`delayTime`),n},Er=e=>(t,n)=>{let r=t.createDynamicsCompressor();if(Zn(r,n),n.channelCount>2||n.channelCountMode===`max`)throw e();return nr(r,n,`attack`),nr(r,n,`knee`),nr(r,n,`ratio`),nr(r,n,`release`),nr(r,n,`threshold`),r},Dr=(e,t)=>{let n=e.createGain();return Zn(n,t),nr(n,t,`gain`),n},Or=e=>(t,n,r)=>{if(t.createIIRFilter===void 0)return e(t,n,r);let i=t.createIIRFilter(r.feedforward,r.feedback);return Zn(i,r),i};function kr(e,t){let n=t[0]*t[0]+t[1]*t[1];return[(e[0]*t[0]+e[1]*t[1])/n,(e[1]*t[0]-e[0]*t[1])/n]}function Ar(e,t){return[e[0]*t[0]-e[1]*t[1],e[0]*t[1]+e[1]*t[0]]}function jr(e,t){let n=[0,0];for(let r=e.length-1;r>=0;--r)n=Ar(n,t),n[0]+=e[r];return n}var Mr=(e,t,n,r)=>(i,a,{channelCount:o,channelCountMode:s,channelInterpretation:c,feedback:l,feedforward:u})=>{let d=fr(a,i.sampleRate),f=l instanceof Float64Array?l:new Float64Array(l),p=u instanceof Float64Array?u:new Float64Array(u),m=f.length,h=p.length,g=Math.min(m,h);if(m===0||m>20)throw r();if(f[0]===0)throw t();if(h===0||h>20)throw r();if(p[0]===0)throw t();if(f[0]!==1){for(let e=0;e<h;e+=1)p[e]/=f[0];for(let e=1;e<m;e+=1)f[e]/=f[0]}let _=n(i,d,o,o);_.channelCount=o,_.channelCountMode=s,_.channelInterpretation=c;let v=[],y=[],b=[];for(let e=0;e<o;e+=1){v.push(0);let e=new Float32Array(32),t=new Float32Array(32);e.fill(0),t.fill(0),y.push(e),b.push(t)}_.onaudioprocess=e=>{let t=e.inputBuffer,n=e.outputBuffer,r=t.numberOfChannels;for(let e=0;e<r;e+=1){let r=t.getChannelData(e),i=n.getChannelData(e);v[e]=On(f,m,p,h,g,y[e],b[e],v[e],32,r,i)}};let x=i.sampleRate/2;return Sr({get bufferSize(){return d},get channelCount(){return _.channelCount},set channelCount(e){_.channelCount=e},get channelCountMode(){return _.channelCountMode},set channelCountMode(e){_.channelCountMode=e},get channelInterpretation(){return _.channelInterpretation},set channelInterpretation(e){_.channelInterpretation=e},get context(){return _.context},get inputs(){return[_]},get numberOfInputs(){return _.numberOfInputs},get numberOfOutputs(){return _.numberOfOutputs},addEventListener(...e){return _.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return _.dispatchEvent(e[0])},getFrequencyResponse(t,n,r){if(t.length!==n.length||n.length!==r.length)throw e();let i=t.length;for(let e=0;e<i;e+=1){let i=-Math.PI*(t[e]/x),a=[Math.cos(i),Math.sin(i)],o=kr(jr(p,a),jr(f,a));n[e]=Math.sqrt(o[0]*o[0]+o[1]*o[1]),r[e]=Math.atan2(o[1],o[0])}},removeEventListener(...e){return _.removeEventListener(e[0],e[1],e[2])}},_)},Nr=(e,t)=>e.createMediaElementSource(t.mediaElement),Pr=(e,t)=>{let n=e.createMediaStreamDestination();return Zn(n,t),n.numberOfOutputs===1&&Object.defineProperty(n,"numberOfOutputs",{get:()=>0}),n},Fr=(e,{mediaStream:t})=>{let n=t.getAudioTracks();n.sort((e,t)=>e.id<t.id?-1:+(e.id>t.id));let r=n.slice(0,1),i=e.createMediaStreamSource(new MediaStream(r));return Object.defineProperty(i,"mediaStream",{value:t}),i},Ir=(e,t)=>(n,{mediaStreamTrack:r})=>{if(typeof n.createMediaStreamTrackSource==`function`)return n.createMediaStreamTrackSource(r);let i=new MediaStream([r]),a=n.createMediaStreamSource(i);if(r.kind!==`audio`)throw e();if(t(n))throw TypeError();return a},Lr=e=>e===null?null:e.hasOwnProperty(`OfflineAudioContext`)?e.OfflineAudioContext:e.hasOwnProperty(`webkitOfflineAudioContext`)?e.webkitOfflineAudioContext:null,Rr=(e,t,n,r,i,a)=>(o,s)=>{let c=o.createOscillator();return Zn(c,s),nr(c,s,`detune`),nr(c,s,`frequency`),s.periodicWave===void 0?Xn(c,s,`type`):c.setPeriodicWave(s.periodicWave),t(n,()=>n(o))||ir(c),t(r,()=>r(o))||a(c,o),t(i,()=>i(o))||ar(c),e(o,c),c},zr=e=>(t,n)=>{let r=t.createPanner();return r.orientationX===void 0?e(t,n):(Zn(r,n),nr(r,n,`orientationX`),nr(r,n,`orientationY`),nr(r,n,`orientationZ`),nr(r,n,`positionX`),nr(r,n,`positionY`),nr(r,n,`positionZ`),Xn(r,n,`coneInnerAngle`),Xn(r,n,`coneOuterAngle`),Xn(r,n,`coneOuterGain`),Xn(r,n,`distanceModel`),Xn(r,n,`maxDistance`),Xn(r,n,`panningModel`),Xn(r,n,`refDistance`),Xn(r,n,`rolloffFactor`),r)},Br=(e,t,n,r,i,a,o,s,c,l)=>(u,{coneInnerAngle:d,coneOuterAngle:f,coneOuterGain:p,distanceModel:m,maxDistance:h,orientationX:g,orientationY:_,orientationZ:v,panningModel:y,positionX:b,positionY:x,positionZ:S,refDistance:C,rolloffFactor:w,...T})=>{let E=u.createPanner();if(T.channelCount>2||T.channelCountMode===`max`)throw o();Zn(E,T);let D={channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`},O=n(u,{...D,channelInterpretation:`speakers`,numberOfInputs:6}),k=r(u,{...T,gain:1}),A=r(u,{...D,gain:1}),j=r(u,{...D,gain:0}),ee=r(u,{...D,gain:0}),M=r(u,{...D,gain:0}),N=r(u,{...D,gain:0}),P=r(u,{...D,gain:0}),F=i(u,256,6,1),te=a(u,{...D,curve:new Float32Array([1,1]),oversample:`none`}),ne=[g,_,v],re=[b,x,S],ie=new Float32Array(1);F.onaudioprocess=({inputBuffer:e})=>{let t=[c(e,ie,0),c(e,ie,1),c(e,ie,2)];t.some((e,t)=>e!==ne[t])&&(E.setOrientation(...t),ne=t);let n=[c(e,ie,3),c(e,ie,4),c(e,ie,5)];n.some((e,t)=>e!==re[t])&&(E.setPosition(...n),re=n)},Object.defineProperty(j.gain,"defaultValue",{get:()=>0}),Object.defineProperty(ee.gain,"defaultValue",{get:()=>0}),Object.defineProperty(M.gain,"defaultValue",{get:()=>0}),Object.defineProperty(N.gain,"defaultValue",{get:()=>0}),Object.defineProperty(P.gain,"defaultValue",{get:()=>0});let I={get bufferSize(){},get channelCount(){return E.channelCount},set channelCount(e){if(e>2)throw o();k.channelCount=e,E.channelCount=e},get channelCountMode(){return E.channelCountMode},set channelCountMode(e){if(e===`max`)throw o();k.channelCountMode=e,E.channelCountMode=e},get channelInterpretation(){return E.channelInterpretation},set channelInterpretation(e){k.channelInterpretation=e,E.channelInterpretation=e},get coneInnerAngle(){return E.coneInnerAngle},set coneInnerAngle(e){E.coneInnerAngle=e},get coneOuterAngle(){return E.coneOuterAngle},set coneOuterAngle(e){E.coneOuterAngle=e},get coneOuterGain(){return E.coneOuterGain},set coneOuterGain(e){if(e<0||e>1)throw t();E.coneOuterGain=e},get context(){return E.context},get distanceModel(){return E.distanceModel},set distanceModel(e){E.distanceModel=e},get inputs(){return[k]},get maxDistance(){return E.maxDistance},set maxDistance(e){if(e<0)throw RangeError();E.maxDistance=e},get numberOfInputs(){return E.numberOfInputs},get numberOfOutputs(){return E.numberOfOutputs},get orientationX(){return A.gain},get orientationY(){return j.gain},get orientationZ(){return ee.gain},get panningModel(){return E.panningModel},set panningModel(e){E.panningModel=e},get positionX(){return M.gain},get positionY(){return N.gain},get positionZ(){return P.gain},get refDistance(){return E.refDistance},set refDistance(e){if(e<0)throw RangeError();E.refDistance=e},get rolloffFactor(){return E.rolloffFactor},set rolloffFactor(e){if(e<0)throw RangeError();E.rolloffFactor=e},addEventListener(...e){return k.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return k.dispatchEvent(e[0])},removeEventListener(...e){return k.removeEventListener(e[0],e[1],e[2])}};return d!==I.coneInnerAngle&&(I.coneInnerAngle=d),f!==I.coneOuterAngle&&(I.coneOuterAngle=f),p!==I.coneOuterGain&&(I.coneOuterGain=p),m!==I.distanceModel&&(I.distanceModel=m),h!==I.maxDistance&&(I.maxDistance=h),g!==I.orientationX.value&&(I.orientationX.value=g),_!==I.orientationY.value&&(I.orientationY.value=_),v!==I.orientationZ.value&&(I.orientationZ.value=v),y!==I.panningModel&&(I.panningModel=y),b!==I.positionX.value&&(I.positionX.value=b),x!==I.positionY.value&&(I.positionY.value=x),S!==I.positionZ.value&&(I.positionZ.value=S),C!==I.refDistance&&(I.refDistance=C),w!==I.rolloffFactor&&(I.rolloffFactor=w),(ne[0]!==1||ne[1]!==0||ne[2]!==0)&&E.setOrientation(...ne),(re[0]!==0||re[1]!==0||re[2]!==0)&&E.setPosition(...re),l(Sr(I,E),()=>{k.connect(E),e(k,te,0,0),te.connect(A).connect(O,0,0),te.connect(j).connect(O,0,1),te.connect(ee).connect(O,0,2),te.connect(M).connect(O,0,3),te.connect(N).connect(O,0,4),te.connect(P).connect(O,0,5),O.connect(F).connect(u.destination)},()=>{k.disconnect(E),s(k,te,0,0),te.disconnect(A),A.disconnect(O),te.disconnect(j),j.disconnect(O),te.disconnect(ee),ee.disconnect(O),te.disconnect(M),M.disconnect(O),te.disconnect(N),N.disconnect(O),te.disconnect(P),P.disconnect(O),O.disconnect(F),F.disconnect(u.destination)})},Vr=e=>(t,{disableNormalization:n,imag:r,real:i})=>{let a=r instanceof Float32Array?r:new Float32Array(r),o=i instanceof Float32Array?i:new Float32Array(i),s=t.createPeriodicWave(o,a,{disableNormalization:n});if(Array.from(r).length<2)throw e();return s},Hr=(e,t,n,r)=>e.createScriptProcessor(t,n,r),Ur=(e,t)=>(n,r)=>{let i=r.channelCountMode;if(i===`clamped-max`)throw t();if(n.createStereoPanner===void 0)return e(n,r);let a=n.createStereoPanner();return Zn(a,r),nr(a,r,`pan`),Object.defineProperty(a,"channelCountMode",{get:()=>i,set:e=>{if(e!==i)throw t()}}),a},Wr=(e,t,n,r,i,a)=>{let o=16385,s=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`},u={...l,oversample:`none`},d=(e,t,i,a)=>{let d=new Float32Array(o),f=new Float32Array(o);for(let e=0;e<o;e+=1){let t=e/16384*c;d[e]=Math.cos(t),f[e]=Math.sin(t)}let p=n(e,{...l,gain:0}),m=r(e,{...u,curve:d}),h=r(e,{...u,curve:s}),g=n(e,{...l,gain:0}),_=r(e,{...u,curve:f});return{connectGraph(){t.connect(p),t.connect(h.inputs===void 0?h:h.inputs[0]),t.connect(g),h.connect(i),i.connect(m.inputs===void 0?m:m.inputs[0]),i.connect(_.inputs===void 0?_:_.inputs[0]),m.connect(p.gain),_.connect(g.gain),p.connect(a,0,0),g.connect(a,0,1)},disconnectGraph(){t.disconnect(p),t.disconnect(h.inputs===void 0?h:h.inputs[0]),t.disconnect(g),h.disconnect(i),i.disconnect(m.inputs===void 0?m:m.inputs[0]),i.disconnect(_.inputs===void 0?_:_.inputs[0]),m.disconnect(p.gain),_.disconnect(g.gain),p.disconnect(a,0,0),g.disconnect(a,0,1)}}},f=(e,i,a,d)=>{let f=new Float32Array(o),p=new Float32Array(o),m=new Float32Array(o),h=new Float32Array(o),g=8192;for(let e=0;e<o;e+=1)if(e>g){let t=(e-g)/8192*c;f[e]=Math.cos(t),p[e]=Math.sin(t),m[e]=0,h[e]=1}else{let t=e/8192*c;f[e]=1,p[e]=0,m[e]=Math.cos(t),h[e]=Math.sin(t)}let _=t(e,{channelCount:2,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:2}),v=n(e,{...l,gain:0}),y=r(e,{...u,curve:f}),b=n(e,{...l,gain:0}),x=r(e,{...u,curve:p}),S=r(e,{...u,curve:s}),C=n(e,{...l,gain:0}),w=r(e,{...u,curve:m}),T=n(e,{...l,gain:0}),E=r(e,{...u,curve:h});return{connectGraph(){i.connect(_),i.connect(S.inputs===void 0?S:S.inputs[0]),_.connect(v,0),_.connect(b,0),_.connect(C,1),_.connect(T,1),S.connect(a),a.connect(y.inputs===void 0?y:y.inputs[0]),a.connect(x.inputs===void 0?x:x.inputs[0]),a.connect(w.inputs===void 0?w:w.inputs[0]),a.connect(E.inputs===void 0?E:E.inputs[0]),y.connect(v.gain),x.connect(b.gain),w.connect(C.gain),E.connect(T.gain),v.connect(d,0,0),C.connect(d,0,0),b.connect(d,0,1),T.connect(d,0,1)},disconnectGraph(){i.disconnect(_),i.disconnect(S.inputs===void 0?S:S.inputs[0]),_.disconnect(v,0),_.disconnect(b,0),_.disconnect(C,1),_.disconnect(T,1),S.disconnect(a),a.disconnect(y.inputs===void 0?y:y.inputs[0]),a.disconnect(x.inputs===void 0?x:x.inputs[0]),a.disconnect(w.inputs===void 0?w:w.inputs[0]),a.disconnect(E.inputs===void 0?E:E.inputs[0]),y.disconnect(v.gain),x.disconnect(b.gain),w.disconnect(C.gain),E.disconnect(T.gain),v.disconnect(d,0,0),C.disconnect(d,0,0),b.disconnect(d,0,1),T.disconnect(d,0,1)}}},p=(e,t,n,r,a)=>{if(t===1)return d(e,n,r,a);if(t===2)return f(e,n,r,a);throw i()};return(t,{channelCount:r,channelCountMode:o,pan:s,...c})=>{if(o===`max`)throw i();let l=e(t,{...c,channelCount:1,channelCountMode:o,numberOfInputs:2}),u=n(t,{...c,channelCount:r,channelCountMode:o,gain:1}),d=n(t,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:s}),{connectGraph:f,disconnectGraph:m}=p(t,r,u,d,l);Object.defineProperty(d.gain,"defaultValue",{get:()=>0}),Object.defineProperty(d.gain,"maxValue",{get:()=>1}),Object.defineProperty(d.gain,"minValue",{get:()=>-1});let h={get bufferSize(){},get channelCount(){return u.channelCount},set channelCount(e){u.channelCount!==e&&(g&&m(),{connectGraph:f,disconnectGraph:m}=p(t,e,u,d,l),g&&f()),u.channelCount=e},get channelCountMode(){return u.channelCountMode},set channelCountMode(e){if(e===`clamped-max`||e===`max`)throw i();u.channelCountMode=e},get channelInterpretation(){return u.channelInterpretation},set channelInterpretation(e){u.channelInterpretation=e},get context(){return u.context},get inputs(){return[u]},get numberOfInputs(){return u.numberOfInputs},get numberOfOutputs(){return u.numberOfOutputs},get pan(){return d.gain},addEventListener(...e){return u.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return u.dispatchEvent(e[0])},removeEventListener(...e){return u.removeEventListener(e[0],e[1],e[2])}},g=!1;return a(Sr(h,l),()=>{f(),g=!0},()=>{m(),g=!1})}},Gr=(e,t,n,r,i,a,o)=>(s,c)=>{let l=s.createWaveShaper();if(a!==null&&a.name===`webkitAudioContext`&&s.createGain().gain.automationRate===void 0)return n(s,c);Zn(l,c);let u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw t();Xn(l,{curve:u},`curve`),Xn(l,c,`oversample`);let d=null,f=!1;return o(l,`curve`,e=>()=>e.call(l),t=>n=>(t.call(l,n),f&&(r(n)&&d===null?d=e(s,l):!r(n)&&d!==null&&(d(),d=null)),n)),i(l,()=>{f=!0,r(l.curve)&&(d=e(s,l))},()=>{f=!1,d!==null&&(d(),d=null)})},Kr=(e,t,n,r,i)=>(a,{curve:o,oversample:s,...c})=>{let l=a.createWaveShaper(),u=a.createWaveShaper();Zn(l,c),Zn(u,c);let d=n(a,{...c,gain:1}),f=n(a,{...c,gain:-1}),p=n(a,{...c,gain:1}),m=n(a,{...c,gain:-1}),h=null,g=!1,_=null,v={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(e){d.channelCount=e,f.channelCount=e,l.channelCount=e,p.channelCount=e,u.channelCount=e,m.channelCount=e},get channelCountMode(){return l.channelCountMode},set channelCountMode(e){d.channelCountMode=e,f.channelCountMode=e,l.channelCountMode=e,p.channelCountMode=e,u.channelCountMode=e,m.channelCountMode=e},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(e){d.channelInterpretation=e,f.channelInterpretation=e,l.channelInterpretation=e,p.channelInterpretation=e,u.channelInterpretation=e,m.channelInterpretation=e},get context(){return l.context},get curve(){return _},set curve(n){if(n!==null&&n.length<2)throw t();if(n===null)l.curve=n,u.curve=n;else{let e=n.length,t=new Float32Array(e+2-e%2),r=new Float32Array(e+2-e%2);t[0]=n[0],r[0]=-n[e-1];let i=Math.ceil((e+1)/2),a=(e+1)/2-1;for(let o=1;o<i;o+=1){let s=o/i*a,c=Math.floor(s),l=Math.ceil(s);t[o]=c===l?n[c]:(1-(s-c))*n[c]+(1-(l-s))*n[l],r[o]=c===l?-n[e-1-c]:-((1-(s-c))*n[e-1-c])-(1-(l-s))*n[e-1-l]}t[i]=e%2==1?n[i-1]:(n[i-2]+n[i-1])/2,l.curve=t,u.curve=r}_=n,g&&(r(_)&&h===null?h=e(a,d):h!==null&&(h(),h=null))},get inputs(){return[d]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(e){l.oversample=e,u.oversample=e},addEventListener(...e){return d.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return d.dispatchEvent(e[0])},removeEventListener(...e){return d.removeEventListener(e[0],e[1],e[2])}};return o!==null&&(v.curve=o instanceof Float32Array?o:new Float32Array(o)),s!==v.oversample&&(v.oversample=s),i(Sr(v,p),()=>{d.connect(l).connect(p),d.connect(f).connect(u).connect(m).connect(p),g=!0,r(_)&&(h=e(a,d))},()=>{d.disconnect(l),l.disconnect(p),d.disconnect(f),f.disconnect(u),u.disconnect(m),m.disconnect(p),g=!1,h!==null&&(h(),h=null)})},qr=()=>new DOMException(``,`NotSupportedError`),Jr={numberOfChannels:1},Yr=(e,t,n,r,i)=>class extends e{constructor(e,n,i){let a;if(typeof e==`number`&&n!==void 0&&i!==void 0)a={length:n,numberOfChannels:e,sampleRate:i};else if(typeof e==`object`)a=e;else throw Error(`The given parameters are not valid.`);let{length:o,numberOfChannels:s,sampleRate:c}={...Jr,...a},l=r(s,o,c);t(Jn,()=>Jn(l))||l.addEventListener(`statechange`,(()=>{let e=0,t=n=>{this._state===`running`&&(e>0?(l.removeEventListener(`statechange`,t),n.stopImmediatePropagation(),this._waitForThePromiseToSettle(n)):e+=1)};return t})()),super(l,s),this._length=o,this._nativeOfflineAudioContext=l,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state===`running`?Promise.reject(n()):(this._state=`running`,i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Ae(this)}))}_waitForThePromiseToSettle(e){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(e):setTimeout(()=>this._waitForThePromiseToSettle(e))}},Xr={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,detune:0,frequency:440,periodicWave:void 0,type:`sine`},Zr=(e,t,n,r,i,a,o)=>class extends e{constructor(e,o){let s=i(e),c={...Xr,...o},l=n(s,c),u=a(s),d=u?r():null,f=e.sampleRate/2;super(e,!1,l,d),this._detune=t(this,u,l.detune,153600,-153600),this._frequency=t(this,u,l.frequency,f,-f),this._nativeOscillatorNode=l,this._onended=null,this._oscillatorNodeRenderer=d,this._oscillatorNodeRenderer!==null&&c.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=c.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(e){let t=typeof e==`function`?o(this,e):null;this._nativeOscillatorNode.onended=t;let n=this._nativeOscillatorNode.onended;this._onended=n!==null&&n===t?e:n}get type(){return this._nativeOscillatorNode.type}set type(e){this._nativeOscillatorNode.type=e,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(e){this._nativeOscillatorNode.setPeriodicWave(e),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=e)}start(e=0){if(this._nativeOscillatorNode.start(e),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=e),this.context.state!==`closed`){re(this);let e=()=>{this._nativeOscillatorNode.removeEventListener(`ended`,e),L(this)&&I(this)};this._nativeOscillatorNode.addEventListener(`ended`,e)}}stop(e=0){this._nativeOscillatorNode.stop(e),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=e)}},Qr=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=null,s=null,c=null,l=async(l,u)=>{let d=n(l),f=fe(d,u);return f||(d=t(u,{channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type}),s!==null&&d.start(s),c!==null&&d.stop(c)),a.set(u,d),f?(await e(u,l.detune,d.detune),await e(u,l.frequency,d.frequency)):(await r(u,l.detune,d.detune),await r(u,l.frequency,d.frequency)),await i(l,u,d),d};return{set periodicWave(e){o=e},set start(e){s=e},set stop(e){c=e},render(e,t){let n=a.get(t);return n===void 0?l(e,t):Promise.resolve(n)}}},$r={channelCount:2,channelCountMode:`clamped-max`,channelInterpretation:`speakers`,coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:`inverse`,maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:`equalpower`,positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},ei=(e,t,n,r,i,a,o)=>class extends e{constructor(e,s){let c=i(e),l=n(c,{...$r,...s}),u=a(c),d=u?r():null;super(e,!1,l,d),this._nativePannerNode=l,this._orientationX=t(this,u,l.orientationX,be,ye),this._orientationY=t(this,u,l.orientationY,be,ye),this._orientationZ=t(this,u,l.orientationZ,be,ye),this._positionX=t(this,u,l.positionX,be,ye),this._positionY=t(this,u,l.positionY,be,ye),this._positionZ=t(this,u,l.positionZ,be,ye),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(e){this._nativePannerNode.coneInnerAngle=e}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(e){this._nativePannerNode.coneOuterAngle=e}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(e){this._nativePannerNode.coneOuterGain=e}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(e){this._nativePannerNode.distanceModel=e}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(e){this._nativePannerNode.maxDistance=e}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(e){this._nativePannerNode.panningModel=e}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(e){this._nativePannerNode.refDistance=e}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(e){this._nativePannerNode.rolloffFactor=e}},ti=(e,t,n,r,i,a,o,s,c,l)=>()=>{let u=new WeakMap,d=null,f=async(f,p)=>{let m=null,h=a(f),g={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation},_={...g,coneInnerAngle:h.coneInnerAngle,coneOuterAngle:h.coneOuterAngle,coneOuterGain:h.coneOuterGain,distanceModel:h.distanceModel,maxDistance:h.maxDistance,panningModel:h.panningModel,refDistance:h.refDistance,rolloffFactor:h.rolloffFactor},v=fe(h,p);if(`bufferSize`in h?m=r(p,{...g,gain:1}):v||(h=i(p,{..._,orientationX:h.orientationX.value,orientationY:h.orientationY.value,orientationZ:h.orientationZ.value,positionX:h.positionX.value,positionY:h.positionY.value,positionZ:h.positionZ.value})),u.set(p,m===null?h:m),m!==null){if(d===null){if(o===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let e=new o(6,f.context.length,p.sampleRate),r=t(e,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:6});r.connect(e.destination),d=(async()=>{let t=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(t,r)=>{let i=n(e,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:+(r===0)});return await s(e,t,i.offset),i}));for(let e=0;e<6;e+=1)t[e].connect(r,0,e),t[e].start(0);return l(e)})()}let e=await d,a=r(p,{...g,gain:1});await c(f,p,a);let u=[];for(let t=0;t<e.numberOfChannels;t+=1)u.push(e.getChannelData(t));let h=[u[0][0],u[1][0],u[2][0]],v=[u[3][0],u[4][0],u[5][0]],y=r(p,{...g,gain:1}),b=i(p,{..._,orientationX:h[0],orientationY:h[1],orientationZ:h[2],positionX:v[0],positionY:v[1],positionZ:v[2]});a.connect(y).connect(b.inputs[0]),b.connect(m);for(let t=128;t<e.length;t+=128){let e=[u[0][t],u[1][t],u[2][t]],n=[u[3][t],u[4][t],u[5][t]];if(e.some((e,t)=>e!==h[t])||n.some((e,t)=>e!==v[t])){h=e,v=n;let o=t/p.sampleRate;y.gain.setValueAtTime(0,o),y=r(p,{...g,gain:0}),b=i(p,{..._,orientationX:h[0],orientationY:h[1],orientationZ:h[2],positionX:v[0],positionY:v[1],positionZ:v[2]}),y.gain.setValueAtTime(1,o),a.connect(y).connect(b.inputs[0]),b.connect(m)}}return m}return v?(await e(p,f.orientationX,h.orientationX),await e(p,f.orientationY,h.orientationY),await e(p,f.orientationZ,h.orientationZ),await e(p,f.positionX,h.positionX),await e(p,f.positionY,h.positionY),await e(p,f.positionZ,h.positionZ)):(await s(p,f.orientationX,h.orientationX),await s(p,f.orientationY,h.orientationY),await s(p,f.orientationZ,h.orientationZ),await s(p,f.positionX,h.positionX),await s(p,f.positionY,h.positionY),await s(p,f.positionZ,h.positionZ)),Ve(h)?await c(f,p,h.inputs[0]):await c(f,p,h),h};return{render(e,t){let n=u.get(t);return n===void 0?f(e,t):Promise.resolve(n)}}},ni={disableNormalization:!1},ri=(e,t,n,r)=>class i{constructor(i,a){let o=e(t(i),r({...ni,...a}));return n.add(o),o}static[Symbol.hasInstance](e){return typeof e==`object`&&!!e&&Object.getPrototypeOf(e)===i.prototype||n.has(e)}},ii=(e,t)=>(n,r,i)=>(e(r).replay(i),t(r,n,i)),ai=(e,t,n)=>async(r,i,a)=>{let o=e(r);await Promise.all(o.activeInputs.map((e,o)=>Array.from(e).map(async([e,s])=>{let c=await t(e).render(e,i),l=r.context.destination;!n(e)&&(r!==l||!n(r))&&c.connect(a,s,o)})).reduce((e,t)=>[...e,...t],[]))},oi=(e,t,n)=>async(r,i,a)=>{let o=t(r);await Promise.all(Array.from(o.activeInputs).map(async([t,r])=>{let o=await e(t).render(t,i);n(t)||o.connect(a,r)}))},si=(e,t,n,r)=>i=>e(Jn,()=>Jn(i))?Promise.resolve(e(r,r)).then(e=>{if(!e){let e=n(i,512,0,1);i.oncomplete=()=>{e.onaudioprocess=null,e.disconnect()},e.onaudioprocess=()=>i.currentTime,e.connect(i.destination)}return i.startRendering()}):new Promise(e=>{let n=t(i,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});i.oncomplete=t=>{n.disconnect(),e(t.renderedBuffer)},n.connect(i.destination),i.startRendering()}),ci=e=>(t,n)=>{e.set(t,n)},li=e=>(t,n)=>e.set(t,n),ui=(e,t,n,r,i,a,o,s)=>(c,l)=>n(c).render(c,l).then(()=>Promise.all(Array.from(r(l)).map(e=>n(e).render(e,l)))).then(()=>i(l)).then(n=>(typeof n.copyFromChannel==`function`?t(a,()=>a(n))||s(n):(o(n),ge(n)),e.add(n),n)),di={channelCount:2,channelCountMode:`explicit`,channelInterpretation:`speakers`,pan:0},fi=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=i(e),c=n(s,{...di,...o}),l=a(s),u=l?r():null;super(e,!1,c,u),this._pan=t(this,l,c.pan)}get pan(){return this._pan}},pi=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=fe(c,s);return l||(c=t(s,{channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,pan:c.pan.value})),a.set(s,c),l?await e(s,o.pan,c.pan):await r(s,o.pan,c.pan),Ve(c)?await i(o,s,c.inputs[0]):await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},mi=e=>()=>{if(e===null)return!1;try{new e({length:1,sampleRate:44100})}catch{return!1}return!0},hi=(e,t)=>async()=>{if(e===null)return!0;if(t===null)return!1;let n=new Blob([`class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)`],{type:`application/javascript; charset=utf-8`}),r=new t(1,128,44100),i=URL.createObjectURL(n),a=!1,o=!1;try{await r.audioWorklet.addModule(i);let t=new e(r,`a`,{numberOfOutputs:0}),n=r.createOscillator();t.port.onmessage=()=>a=!0,t.onprocessorerror=()=>o=!0,n.connect(t),n.start(0),await r.startRendering(),await new Promise(e=>setTimeout(e))}catch{}finally{URL.revokeObjectURL(i)}return a&&!o},gi=(e,t)=>()=>{if(t===null)return Promise.resolve(!1);let n=new t(1,1,44100),r=e(n,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});return new Promise(e=>{n.oncomplete=()=>{r.disconnect(),e(n.currentTime!==0)},n.startRendering()})},_i=()=>new DOMException(``,`UnknownError`),vi={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,curve:null,oversample:`none`},yi=(e,t,n,r,i,a,o)=>class extends e{constructor(e,t){let s=i(e),c=n(s,{...vi,...t}),l=a(s)?r():null;super(e,!0,c,l),this._isCurveNullified=!1,this._nativeWaveShaperNode=c,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(e){if(e===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(e.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=e}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(e){this._nativeWaveShaperNode.oversample=e}},bi=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return fe(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample})),r.set(a,o),Ve(o)?await n(i,a,o.inputs[0]):await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},xi=()=>typeof window>`u`?null:window,Si=(e,t)=>n=>{n.copyFromChannel=(r,i,a=0)=>{let o=e(a),s=e(i);if(s>=n.numberOfChannels)throw t();let c=n.length,l=n.getChannelData(s),u=r.length;for(let e=o<0?-o:0;e+o<c&&e<u;e+=1)r[e]=l[e+o]},n.copyToChannel=(r,i,a=0)=>{let o=e(a),s=e(i);if(s>=n.numberOfChannels)throw t();let c=n.length,l=n.getChannelData(s),u=r.length;for(let e=o<0?-o:0;e+o<c&&e<u;e+=1)l[e+o]=r[e]}},Ci=e=>t=>{t.copyFromChannel=(n=>(r,i,a=0)=>{let o=e(a),s=e(i);if(o<t.length)return n.call(t,r,s,o)})(t.copyFromChannel),t.copyToChannel=(n=>(r,i,a=0)=>{let o=e(a),s=e(i);if(o<t.length)return n.call(t,r,s,o)})(t.copyToChannel)},wi=e=>(t,n)=>{let r=n.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=r),e(t,`buffer`,e=>()=>{let n=e.call(t);return n===r?null:n},e=>n=>e.call(t,n===null?r:n))},Ti=(e,t)=>(n,r)=>{r.channelCount=1,r.channelCountMode=`explicit`,Object.defineProperty(r,"channelCount",{get:()=>1,set:()=>{throw e()}}),Object.defineProperty(r,"channelCountMode",{get:()=>`explicit`,set:()=>{throw e()}});let i=n.createBufferSource();t(r,()=>{let e=r.numberOfInputs;for(let t=0;t<e;t+=1)i.connect(r,0,t)},()=>i.disconnect(r))},Ei=(e,t,n)=>e.copyFromChannel===void 0?e.getChannelData(n)[0]:(e.copyFromChannel(t,n),t[0]),Di=e=>{if(e===null)return!1;let t=e.length;return t%2==0?e[t/2-1]+e[t/2]!==0:e[Math.floor(t/2)]!==0},Oi=(e,t,n,r)=>{let i=e;for(;!i.hasOwnProperty(t);)i=Object.getPrototypeOf(i);let{get:a,set:o}=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(e,t,{get:n(a),set:r(o)})},ki=e=>({...e,outputChannelCount:e.outputChannelCount===void 0?e.numberOfInputs===1&&e.numberOfOutputs===1?[e.channelCount]:Array.from({length:e.numberOfOutputs},()=>1):e.outputChannelCount}),Ai=e=>({...e,channelCount:e.numberOfOutputs}),ji=e=>{let{imag:t,real:n}=e;return t===void 0?n===void 0?{...e,imag:[0,0],real:[0,0]}:{...e,imag:Array.from(n,()=>0),real:n}:n===void 0?{...e,imag:t,real:Array.from(t,()=>0)}:{...e,imag:t,real:n}},Mi=(e,t,n)=>{try{e.setValueAtTime(t,n)}catch(r){if(r.code!==9)throw r;Mi(e,t,n+1e-7)}},Ni=e=>{let t=e.createBufferSource();t.start();try{t.start()}catch{return!0}return!1},Pi=e=>{let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,44100);try{t.start(0,1)}catch{return!1}return!0},Fi=e=>{let t=e.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0},Ii=e=>{let t=e.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1},Li=e=>{let t=e.createBuffer(1,1,44100),n=e.createBufferSource();n.buffer=t,n.start(),n.stop();try{return n.stop(),!0}catch{return!1}},Ri=e=>{let t=e.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1},zi=e=>{let{port1:t,port2:n}=new MessageChannel;try{t.postMessage(e)}finally{t.close(),n.close()}},Bi=e=>{e.start=(t=>(n=0,r=0,i)=>{let a=e.buffer,o=a===null?r:Math.min(a.duration,r);a!==null&&o>a.duration-.5/e.context.sampleRate?t.call(e,n,0,0):t.call(e,n,o,i)})(e.start)},Vi=(e,t)=>{let n=t.createGain();e.connect(n);let r=(t=>()=>{t.call(e,n),e.removeEventListener(`ended`,r)})(e.disconnect);e.addEventListener(`ended`,r),Sr(e,n),e.stop=(t=>{let r=!1;return(i=0)=>{if(r)try{t.call(e,i)}catch{n.gain.setValueAtTime(0,i)}else t.call(e,i),r=!0}})(e.stop)},Hi=(e,t)=>n=>{let r={value:e};return Object.defineProperties(n,{currentTarget:r,target:r}),typeof t==`function`?t.call(e,n):t.handleEvent.call(e,n)},Ui=h(Re),Wi=se(Re),Gi=Zt(F),Ki=new WeakMap,qi=_n(Ki),Ji=Et(new Map,new WeakMap),Yi=xi(),Xi=er(Ji,he),Zi=gn(De),Qi=ai(De,Zi,Xe),$i=pe(Xi,Je,Qi),ea=xn(C),ta=Lr(Yi),na=Bn(ta),ra=new WeakMap,ia=ln(Hi),aa=sr(Yi),oa=In(aa),sa=Ln(Yi),ca=Rn(Yi),la=lr(Yi),ua=ut(g(y),oe(Ui,Wi,He,Gi,qe,De,qi,ne,Je,Re,L,Xe,Ze),Ji,jn(T,qe,De,Je,Ye,L),he,wn,qr,qt(He,T,De,Je,Ye,ea,L,na),en(ra,De,P),ia,ea,oa,sa,ca,na,la),da=de(ua,$i,he,Xi,ea,na),fa=new WeakSet,pa=tr(Yi),ma=zt(new Uint32Array(1)),ha=Si(ma,he),ga=Ci(ma),_a=ve(fa,Ji,qr,pa,ta,mi(pa),ha,ga),va=ce(Dr),ya=oi(Zi,Oe,Xe),ba=Nt(ya),xa=or(va,Ji,Ni,Pi,Fi,Ii,Li,Ri,Bi,wi(Oi),Vi),Sa=ii(vn(Oe),ya),Ca=Ce(ba,xa,Je,Sa,Qi),wa=dt(_(x),ra,S,ft,p.createCancelAndHoldAutomationEvent,p.createCancelScheduledValuesAutomationEvent,p.createExponentialRampToValueAutomationEvent,p.createLinearRampToValueAutomationEvent,p.createSetTargetAutomationEvent,p.createSetValueAutomationEvent,p.createSetValueCurveAutomationEvent,aa,Mi),Ta=Se(ua,Ca,wa,bn,xa,ea,na,Hi),Ea=Ne(ua,Pe,he,bn,cr(Dr,Oi),ea,na,Qi),Da=Tt(ba,_r,Je,Sa,Qi),Oa=li(Ki),ka=wt(ua,wa,Da,wn,_r,ea,na,Oa),Aa=Yn(Re,sa),ja=vr(aa,Ti(bn,Aa)),Ma=Ot(ua,kt(ja,Je,Qi),ja,ea,na),Na=jt(ua,Mt(br,Je,Qi),br,ea,na,Ai),Pa=xr(va,Ji,Cr(va,xa,Dr,Aa),Ii,Ri),Fa=Lt(ua,wa,Rt(ba,Pa,Je,Sa,Qi),Pa,ea,na,Hi),Ia=wr(qr,Oi),La=Vt(ua,Ht(Ia,Je,Qi),Ia,ea,na,Oa),Ra=Yt(ua,wa,Xt(ba,Tr,Je,Sa,Qi),Tr,ea,na,Oa),za=Er(qr),Ba=an(ua,wa,on(ba,za,Je,Sa,Qi),za,qr,ea,na,Oa),Va=pn(ua,wa,mn(ba,Dr,Je,Sa,Qi),Dr,ea,na),Ha=Mr(wn,bn,Hr,qr),Ua=si(Ji,Dr,Hr,gi(Dr,ta)),Wa=An(xa,Je,ta,Qi,Ua),Ga=Dn(ua,Or(Ha),Wa,ea,na,Oa),Ka=Fe(wa,ja,Pa,Hr,qr,Ei,na,Oi),qa=new WeakMap,Ja=qn(Ea,Ka,ia,na,qa,Hi),Ya=Rr(va,Ji,Ii,Li,Ri,Vi),Xa=Zr(ua,wa,Ya,Qr(ba,Ya,Je,Sa,Qi),ea,na,Hi),Za=Ft(xa),Qa=Gr(Za,bn,Kr(Za,bn,Dr,Di,Aa),Di,Aa,aa,Oi),$a=zr(Br(He,bn,ja,Dr,Hr,Qa,qr,qe,Ei,Aa)),eo=ei(ua,wa,$a,ti(ba,ja,Pa,Dr,$a,Je,ta,Sa,Qi,Ua),ea,na,Oa),to=ri(Vr(he),ea,new WeakSet,ji),no=Ur(Wr(ja,br,Dr,Qa,qr,Aa),qr),ro=fi(ua,wa,no,pi(ba,no,Je,Sa,Qi),ea,na),io=yi(ua,bn,Qa,bi(Qa,Je,Qi),ea,na,Oa),ao=Vn(Yi),oo=un(Yi),so=new WeakMap,co=Sn(so,ta),lo=ao?N(Ji,qr,cn(Yi),oo,dn(m),ea,co,na,la,new WeakMap,new WeakMap,hi(la,ta),Yi):void 0,uo=zn(oa,na),fo=St(lo,da,_a,Ta,ka,Ma,Na,Fa,La,Kt(fa,Ji,Wt,sn,new WeakSet,ea,uo,me,Jn,ha,ga),Ra,Ba,Va,Ga,Ja,Xa,eo,to,ro,io),po=Me(fo,bn,qr,_i,Hn(ua,Nr,ea,na),Wn(ua,Pr,ea,na),Gn(ua,Fr,ea,na),Kn(ua,Ir(bn,na),ea),aa),mo=Cn(qa),ho=le(mo),go=Pt(he),_o=Qt(mo),vo=nn(he),yo=new WeakMap,bo=dr(bn,gr(go,he,bn,ja,br,Pa,Dr,Hr,qr,vo,oo,hn(yo,P),Aa),Dr,qr,Aa),xo=xt(ba,go,xa,ja,br,Pa,Dr,_o,vo,oo,Je,la,ta,Sa,Qi,Ua),So=yn(so),Co=ci(yo),wo=ao?ht(ho,ua,wa,xo,bo,De,So,ea,na,la,ki,Co,zi,Hi):void 0,To=Yr(fo,Ji,bn,Ut(qr,ta),ui(fa,Ji,Zi,mo,Ua,me,ha,ga)),Eo=Mn(C,oa),Do=Nn(b,sa),Oo=Pn(S,ca),ko=Fn(C,na);function Ao(e){return e===void 0}function jo(e){return e!==void 0}function Mo(e){return typeof e==`function`}function No(e){return typeof e==`number`}function Po(e){return Object.prototype.toString.call(e)===`[object Object]`&&e.constructor===Object}function Fo(e){return typeof e==`boolean`}function Io(e){return Array.isArray(e)}function Lo(e){return typeof e==`string`}function Ro(e){return Lo(e)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(e)}function V(e,t){if(!e)throw Error(t)}function zo(e,t,n=1/0){if(!(t<=e&&e<=n))throw RangeError(`Value must be within [${t}, ${n}], got: ${e}`)}function Bo(e){!e.isOffline&&e.state!==`running`&&qo(`The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.`)}var Vo=!1,Ho=!1;function Uo(e){Vo=e}function Wo(e){Ao(e)&&Vo&&!Ho&&(Ho=!0,qo(`Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing`))}var Go=console;function Ko(...e){Go.log(...e)}function qo(...e){Go.warn(...e)}function Jo(e){return new po(e)}function Yo(e,t,n){return new To(e,t,n)}var Xo=typeof self==`object`?self:null,Zo=Xo&&(Xo.hasOwnProperty(`AudioContext`)||Xo.hasOwnProperty(`webkitAudioContext`));function Qo(e,t,n){return V(jo(wo),`AudioWorkletNode only works in a secure context (https or localhost)`),new(e instanceof Xo?.BaseAudioContext?Xo?.AudioWorkletNode:wo)(e,t,n)}function $o(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function es(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var ts=class{constructor(e,t,n,r){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(r||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){let e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:`text/javascript`}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type===`worker`)try{this._createWorker()}catch{this._type=`timeout`,this._createClock()}else this._type===`timeout`&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type===`worker`&&((t=this._worker)==null||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}};function ns(e){return Oo(e)}function rs(e){return Do(e)}function is(e){return ko(e)}function as(e){return Eo(e)}function os(e){return e instanceof _a}function ss(e,t){return e===`value`||ns(t)||rs(t)||os(t)}function cs(e,...t){if(!t.length)return e;let n=t.shift();if(Po(e)&&Po(n))for(let t in n)ss(t,n[t])?e[t]=n[t]:Po(n[t])?(e[t]||Object.assign(e,{[t]:{}}),cs(e[t],n[t])):Object.assign(e,{[t]:n[t]});return cs(e,...t)}function ls(e,t){return e.length===t.length&&e.every((e,n)=>t[n]===e)}function H(e,t,n=[],r){let i={},a=Array.from(t);if(Po(a[0])&&r&&!Reflect.has(a[0],r)&&(Object.keys(a[0]).some(t=>Reflect.has(e,t))||(cs(i,{[r]:a[0]}),n.splice(n.indexOf(r),1),a.shift())),a.length===1&&Po(a[0]))cs(i,a[0]);else for(let e=0;e<n.length;e++)jo(a[e])&&(i[n[e]]=a[e]);return cs(e,i)}function us(e){return e.constructor.getDefaults()}function ds(e,t){return Ao(e)?t:e}function fs(e,t){return t.forEach(t=>{Reflect.has(e,t)&&delete e[t]}),e}var ps=class{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||Xo&&this.toString()===Xo.TONE_DEBUG_CLASS)&&Ko(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}};ps.version=t;var ms=1e-6;function hs(e,t){return e>t+ms}function gs(e,t){return hs(e,t)||vs(e,t)}function _s(e,t){return e+ms<t}function vs(e,t){return Math.abs(e-t)<ms}function ys(e,t,n){return Math.max(Math.min(e,n),t)}var bs=class e extends ps{constructor(){super(),this.name=`Timeline`,this._timeline=[];let t=H(e.getDefaults(),arguments,[`memory`]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(V(Reflect.has(e,`time`),`Timeline: events must have a time attribute`),e.time=e.time.valueOf(),this.increasing&&this.length){let t=this._timeline[this.length-1];V(gs(e.time,t.time),`The time must be greater than or equal to the last scheduled time`),this._timeline.push(e)}else{let t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){let e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(e){let t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t=`time`){let n=this._search(e,t);return n===-1?null:this._timeline[n]}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t=`time`){let n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){let t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];let n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0){if(vs(this._timeline[t].time,e)){for(let n=t;n>=0&&vs(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1)}else this._timeline=[]}else this._timeline.length===1&&gs(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){let t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){let t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t=`time`){if(this._timeline.length===0)return-1;let n=0,r=this._timeline.length,i=r;if(r>0&&this._timeline[r-1][t]<=e)return r-1;for(;n<i;){let r=Math.floor(n+(i-n)/2),a=this._timeline[r],o=this._timeline[r+1];if(vs(a[t],e)){for(let n=r;n<this._timeline.length;n++){let i=this._timeline[n];if(vs(i[t],e))r=n;else break}return r}if(_s(a[t],e)&&hs(o[t],e))return r;hs(a[t],e)?i=r:n=r+1}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){let n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){let n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let r=this._search(e),i=this._search(t);return r!==-1&&i!==-1?(this._timeline[r].time!==e&&(r+=1),this._timeline[i].time===t&&--i,this._iterate(n,r,i)):r===-1&&this._iterate(n,0,i),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){let n=this._search(e);if(n!==-1&&vs(this._timeline[n].time,e)){let r=n;for(let t=n;t>=0&&vs(this._timeline[t].time,e);t--)r=t;this._iterate(e=>{t(e)},r,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}},xs=[];function Ss(e){xs.push(e)}function Cs(e){xs.forEach(t=>t(e))}var ws=[];function Ts(e){ws.push(e)}function Es(e){ws.forEach(t=>t(e))}var Ds=class e extends ps{constructor(){super(...arguments),this.name=`Emitter`}on(e,t){return e.split(/\W+/).forEach(e=>{Ao(this._events)&&(this._events={}),this._events.hasOwnProperty(e)||(this._events[e]=[]),this._events[e].push(t)}),this}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(e=>{if(Ao(this._events)&&(this._events={}),this._events.hasOwnProperty(e)){if(Ao(t))this._events[e]=[];else{let n=this._events[e];for(let e=n.length-1;e>=0;e--)n[e]===t&&n.splice(e,1)}}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){let n=this._events[e].slice(0);for(let e=0,r=n.length;e<r;e++)n[e].apply(this,t)}return this}static mixin(t){[`on`,`once`,`off`,`emit`].forEach(n=>{let r=Object.getOwnPropertyDescriptor(e.prototype,n);Object.defineProperty(t.prototype,n,r)})}dispose(){return super.dispose(),this._events=void 0,this}},Os=class extends Ds{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}},ks=class e extends Os{constructor(){super(),this.name=`Context`,this._constants=new Map,this._timeouts=new bs,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;let t=H(e.getDefaults(),arguments,[`context`]);t.context?(this._context=t.context,this._latencyHint=arguments[0]?.latencyHint||``):(this._context=Jo({latencyHint:t.latencyHint}),this._latencyHint=t.latencyHint),this._ticker=new ts(this.emit.bind(this,`tick`),t.clockSource,t.updateInterval,this._context.sampleRate),this.on(`tick`,this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit(`statechange`,this.state)},this[arguments[0]?.hasOwnProperty(`updateInterval`)?`_lookAhead`:`lookAhead`]=t.lookAhead}static getDefaults(){return{clockSource:`worker`,latencyHint:`interactive`,lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||=(Cs(this),!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return V(as(this._context),`Not available if OfflineAudioContext`),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return V(as(this._context),`Not available if OfflineAudioContext`),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return V(as(this._context),`Not available if OfflineAudioContext`),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){V(!this._initialized,`The listener cannot be set after initialization.`),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){V(!this._initialized,`The transport cannot be set after initialization.`),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){V(!this._initialized,`Draw cannot be set after initialization.`),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){V(!this._initialized,`The destination cannot be set after initialization.`),this._destination=e}createAudioWorkletNode(e,t){return Qo(this.rawContext,e,t)}addAudioWorkletModule(e){return es(this,void 0,void 0,function*(){V(jo(this.rawContext.audioWorklet),`AudioWorkletNode is only available in a secure context (https or localhost)`),this._workletPromise||=this.rawContext.audioWorklet.addModule(e),yield this._workletPromise})}workletsAreReady(){return es(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return as(this._context)?this._context.resume():Promise.resolve()}close(){return es(this,void 0,void 0,function*(){as(this._context)&&this.state!==`closed`&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&Es(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{let t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=e;let r=this._context.createBufferSource();return r.channelCount=1,r.channelCountMode=`explicit`,r.buffer=t,r.loop=!0,r.start(0),this._constants.set(e,r),r}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){let e=this.now();this._timeouts.forEachBefore(e,e=>{e.callback(),this._timeouts.remove(e)})}setTimeout(e,t){this._timeoutIds++;let n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){let n=++this._timeoutIds,r=()=>{let i=this.now();this._timeouts.add({callback:()=>{e(),r()},id:n,time:i+t})};return r(),n}},As=class extends Os{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return es(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}};function U(e,t){Io(t)?t.forEach(t=>U(e,t)):Object.defineProperty(e,t,{enumerable:!0,writable:!1})}function js(e,t){Io(t)?t.forEach(t=>js(e,t)):Object.defineProperty(e,t,{writable:!0})}var Ms=()=>{},Ns=class e extends ps{constructor(){super(),this.name=`ToneAudioBuffer`,this.onload=Ms;let t=H(e.getDefaults(),arguments,[`url`,`onload`,`onerror`]);this.reverse=t.reverse,this.onload=t.onload,Lo(t.url)?this.load(t.url).catch(t.onerror):t.url&&this.set(t.url)}static getDefaults(){return{onerror:Ms,onload:Ms,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Ls().sampleRate}set(t){return t instanceof e?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return es(this,void 0,void 0,function*(){let n=e.load(t).then(e=>{this.set(e),this.onload(this)});e.downloads.push(n);try{yield n}finally{let t=e.downloads.indexOf(n);e.downloads.splice(t,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){let t=Io(e)&&e[0].length>0,n=t?e.length:1,r=t?e[0].length:e.length,i=Ls(),a=i.createBuffer(n,r,i.sampleRate),o=!t&&n===1?[e]:e;for(let e=0;e<n;e++)a.copyToChannel(o[e],e);return this._buffer=a,this}toMono(e){if(No(e))this.fromArray(this.toArray(e));else{let e=new Float32Array(this.length),t=this.numberOfChannels;for(let n=0;n<t;n++){let t=this.toArray(n);for(let n=0;n<t.length;n++)e[n]+=t[n]}e=e.map(e=>e/t),this.fromArray(e)}return this}toArray(e){if(No(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{let e=[];for(let t=0;t<this.numberOfChannels;t++)e[t]=this.getChannelData(t);return e}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array}slice(t,n=this.duration){V(this.loaded,`Buffer is not loaded`);let r=Math.floor(t*this.sampleRate),i=Math.floor(n*this.sampleRate);V(r<i,`The start time must be less than the end time`);let a=i-r,o=Ls().createBuffer(this.numberOfChannels,a,this.sampleRate);for(let e=0;e<this.numberOfChannels;e++)o.copyToChannel(this.getChannelData(e).subarray(r,i),e);return new e(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(t){return new e().fromArray(t)}static fromUrl(t){return es(this,void 0,void 0,function*(){return yield new e().load(t)})}static load(t){return es(this,void 0,void 0,function*(){let n=e.baseUrl===``||e.baseUrl.endsWith(`/`)?e.baseUrl:e.baseUrl+`/`,r=yield fetch(n+t);if(!r.ok)throw Error(`could not load url: ${t}`);let i=yield r.arrayBuffer();return yield Ls().decodeAudioData(i)})}static supportsType(e){let t=e.split(`.`),n=t[t.length-1];return document.createElement(`audio`).canPlayType(`audio/`+n)!==``}static loaded(){return es(this,void 0,void 0,function*(){for(yield Promise.resolve();e.downloads.length;)yield e.downloads[0]})}};Ns.baseUrl=``,Ns.downloads=[];var Ps=class extends ks{constructor(){super({clockSource:`offline`,context:is(arguments[0])?arguments[0]:Yo(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:is(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name=`OfflineContext`,this._currentTime=0,this.isOffline=!0,this._duration=is(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return es(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit(`tick`),this._currentTime+=128/this.sampleRate,t++;let n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(e=>setTimeout(e,1)))}})}render(){return es(this,arguments,void 0,function*(e=!0){return yield this.workletsAreReady(),yield this._renderClock(e),new Ns(yield this._context.startRendering())})}close(){return Promise.resolve()}},Fs=new As,Is=Fs;function Ls(){return Is===Fs&&Zo&&Rs(new ks),Is}function Rs(e,t=!1){t&&Is.dispose(),Is=as(e)?new ks(e):is(e)?new Ps(e):e}function zs(){return Is.resume()}if(Xo&&!Xo.TONE_SILENCE_LOGGING){let e=` * Tone.js v${t} * `;console.log(`%c${e}`,`background: #000; color: #fff`)}function Bs(e){return 10**(e/20)}function Vs(e){return Math.log(e)/Math.LN10*20}function Hs(e){return 2**(e/12)}var Us=440;function Ws(){return Us}function Gs(e){Us=e}function Ks(e){return Math.round(qs(e))}function qs(e){return 69+12*Math.log2(e/Us)}function Js(e){return Us*2**((e-69)/12)}var Ys=class e extends ps{constructor(e,t,n){super(),this.defaultUnits=`s`,this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{let n=parseInt(e,10),r=t===`.`?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*r:this._beatsToUnits(4/n)*r},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{let t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let r=0;return e&&e!==`0`&&(r+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!==`0`&&(r+=this._beatsToUnits(parseFloat(t))),n&&n!==`0`&&(r+=this._beatsToUnits(parseFloat(n)/4)),r},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof e&&this.fromType(this._val),Ao(this._val))return this._noArg();if(Lo(this._val)&&Ao(this._units)){for(let e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(Po(this._val)){let e=0;for(let t in this._val)if(jo(this._val[t])){let n=this._val[t],r=new this.constructor(this.context,t).valueOf()*n;e+=r}return e}if(jo(this._units)){let e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}return Lo(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case`s`:this._val=e.toSeconds();break;case`i`:this._val=e.toTicks();break;case`hz`:this._val=e.toFrequency();break;case`midi`:this._val=e.toMidi()}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}},Xs=class e extends Ys{constructor(){super(...arguments),this.name=`TimeClass`}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{let n=new e(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(n))},regexp:/^@(.+)/}})}quantize(e,t=1){let n=new this.constructor(this.context,e).valueOf(),r=this.valueOf();return r+(Math.round(r/n)*n-r)*t}toNotation(){let t=this.toSeconds(),n=[`1m`];for(let e=1;e<9;e++){let t=2**e;n.push(t+`n.`),n.push(t+`n`),n.push(t+`t`)}n.push(`0`);let r=n[0],i=new e(this.context,n[0]).toSeconds();return n.forEach(n=>{let a=new e(this.context,n).toSeconds();Math.abs(a-t)<Math.abs(i-t)&&(r=n,i=a)}),r}toBarsBeatsSixteenths(){let e=this._beatsToUnits(1),t=this.valueOf()/e;t=parseFloat(t.toFixed(4));let n=Math.floor(t/this._getTimeSignature()),r=t%1*4;t=Math.floor(t)%this._getTimeSignature();let i=r.toString();return i.length>3&&(r=parseFloat(parseFloat(i).toFixed(3))),[n,t,r].join(`:`)}toTicks(){let e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return Ks(this.toFrequency())}_now(){return this.context.now()}},Zs=class e extends Xs{constructor(){super(...arguments),this.name=`Frequency`,this.defaultUnits=`hz`}static get A4(){return Ws()}static set A4(e){Gs(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits===`midi`?t:e.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(t,n){let r=Qs[t.toLowerCase()]+(parseInt(n,10)+1)*12;return this.defaultUnits===`midi`?r:e.mtof(r)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let r=1;return e&&e!==`0`&&(r*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!==`0`&&(r*=this._beatsToUnits(parseFloat(t))),n&&n!==`0`&&(r*=this._beatsToUnits(parseFloat(n)/4)),r}}})}transpose(t){return new e(this.context,this.valueOf()*Hs(t))}harmonize(e){return e.map(e=>this.transpose(e))}toMidi(){return Ks(this.valueOf())}toNote(){let t=this.toFrequency(),n=Math.log2(t/e.A4),r=Math.round(12*n)+57,i=Math.floor(r/12);return i<0&&(r+=-12*i),$s[r%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){let e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return Js(e)}static ftom(e){return Ks(e)}},Qs={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},$s=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`];function ec(e,t){return new Zs(Ls(),e,t)}var tc=class extends Xs{constructor(){super(...arguments),this.name=`TransportTime`}_now(){return this.context.transport.seconds}},nc=class e extends ps{constructor(){super();let t=H(e.getDefaults(),arguments,[`context`]);this.context=this.defaultContext?this.defaultContext:t.context}static getDefaults(){return{context:Ls()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return Wo(e),new Xs(this.context,e).toSeconds()}toFrequency(e){return new Zs(this.context,e).toFrequency()}toTicks(e){return new tc(this.context,e).toTicks()}_getPartialProperties(e){let t=this.get();return Object.keys(t).forEach(n=>{Ao(e[n])&&delete t[n]}),t}get(){let t=us(this);return Object.keys(t).forEach(n=>{if(Reflect.has(this,n)){let r=this[n];jo(r)&&jo(r.value)&&jo(r.setValueAtTime)?t[n]=r.value:r instanceof e?t[n]=r._getPartialProperties(t[n]):Io(r)||No(r)||Lo(r)||Fo(r)?t[n]=r:delete t[n]}}),t}set(t){return Object.keys(t).forEach(n=>{Reflect.has(this,n)&&jo(this[n])&&(this[n]&&jo(this[n].value)&&jo(this[n].setValueAtTime)?this[n].value!==t[n]&&(this[n].value=t[n]):this[n]instanceof e?this[n].set(t[n]):this[n]=t[n])}),this}},rc=class extends bs{constructor(e=`stopped`){super(),this.name=`StateTimeline`,this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){let t=this.get(e);return t===null?this._initial:t.state}setStateAtTime(e,t,n){return zo(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){let n=this._search(t);for(let t=n;t>=0;t--){let n=this._timeline[t];if(n.state===e)return n}}getNextState(e,t){let n=this._search(t);if(n!==-1)for(let t=n;t<this._timeline.length;t++){let n=this._timeline[t];if(n.state===e)return n}}},ic=class e extends nc{constructor(){let t=H(e.getDefaults(),arguments,[`param`,`units`,`convert`]);for(super(t),this.name=`Param`,this.overridden=!1,this._minOutput=1e-7,V(jo(t.param)&&(ns(t.param)||t.param instanceof e),`param must be an AudioParam`);!ns(t.param);)t.param=t.param._param;this._swappable=jo(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new bs(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,jo(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(nc.getDefaults(),{convert:!0,units:`number`})}get value(){let e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return jo(this._minValue)?this._minValue:this.units===`time`||this.units===`frequency`||this.units===`normalRange`||this.units===`positive`||this.units===`transportTime`||this.units===`ticks`||this.units===`bpm`||this.units===`hertz`||this.units===`samples`?0:this.units===`audioRange`?-1:this.units===`decibels`?-1/0:this._param.minValue}get maxValue(){return jo(this._maxValue)?this._maxValue:this.units===`normalRange`||this.units===`audioRange`?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return jo(this.maxValue)&&jo(this.minValue)&&zo(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,`time`)?this.toSeconds(e):this._is(e,`decibels`)?Bs(e):this._is(e,`frequency`)?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units===`decibels`?Vs(e):e}setValueAtTime(e,t){let n=this.toSeconds(t),r=this._fromType(e);return V(isFinite(r)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(r),this.log(this.units,`setValueAtTime`,e,n),this._events.add({time:n,type:`setValueAtTime`,value:r}),this._param.setValueAtTime(r,n),this}getValueAtTime(e){let t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),r=this._events.get(t),i=this._initialValue;if(r===null)i=this._initialValue;else if(r.type===`setTargetAtTime`&&(n===null||n.type===`setValueAtTime`)){let e=this._events.getBefore(r.time),n;n=e===null?this._initialValue:e.value,r.type===`setTargetAtTime`&&(i=this._exponentialApproach(r.time,n,r.value,r.constant,t))}else if(n===null)i=r.value;else if(n.type===`linearRampToValueAtTime`||n.type===`exponentialRampToValueAtTime`){let e=r.value;if(r.type===`setTargetAtTime`){let t=this._events.getBefore(r.time);e=t===null?this._initialValue:t.value}i=n.type===`linearRampToValueAtTime`?this._linearInterpolate(r.time,e,n.time,n.value,t):this._exponentialInterpolate(r.time,e,n.time,n.value,t)}else i=r.value;return this._toType(i)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){let n=this._fromType(e),r=this.toSeconds(t);return V(isFinite(n)&&isFinite(r),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:r,type:`linearRampToValueAtTime`,value:n}),this.log(this.units,`linearRampToValueAtTime`,e,r),this._param.linearRampToValueAtTime(n,r),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=vs(n,0)?this._minOutput:n,this._assertRange(n);let r=this.toSeconds(t);return V(isFinite(n)&&isFinite(r),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:r,type:`exponentialRampToValueAtTime`,value:n}),this.log(this.units,`exponentialRampToValueAtTime`,e,r),this._param.exponentialRampToValueAtTime(n,r),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);let r=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,r),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){let r=this._fromType(e);V(isFinite(n)&&n>0,`timeConstant must be a number greater than 0`);let i=this.toSeconds(t);return this._assertRange(r),V(isFinite(r)&&isFinite(i),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:i,type:`setTargetAtTime`,value:r}),this.log(this.units,`setTargetAtTime`,e,i,n),this._param.setTargetAtTime(r,i,n),this}setValueCurveAtTime(e,t,n,r=1){n=this.toSeconds(n),t=this.toSeconds(t);let i=this._fromType(e[0])*r;this.setValueAtTime(this._toType(i),t);let a=n/(e.length-1);for(let n=1;n<e.length;n++){let i=this._fromType(e[n])*r;this.linearRampToValueAtTime(this._toType(i),t+n*a)}return this}cancelScheduledValues(e){let t=this.toSeconds(e);return V(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,`cancelScheduledValues`,t),this}cancelAndHoldAtTime(e){let t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));V(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,`cancelAndHoldAtTime`,t,`value=`+n);let r=this._events.get(t),i=this._events.getAfter(t);return r&&vs(r.time,t)?i?(this._param.cancelScheduledValues(i.time),this._events.cancel(i.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):i&&(this._param.cancelScheduledValues(i.time),this._events.cancel(i.time),i.type===`linearRampToValueAtTime`?this.linearRampToValueAtTime(this._toType(n),t):i.type===`exponentialRampToValueAtTime`&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:`setValueAtTime`,value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units===`frequency`||this.units===`bpm`||this.units===`decibels`?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){let t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);let n=this._events.get(t);if(n&&n.type===`setTargetAtTime`){let r=this._events.getAfter(n.time),i=r?r.time:t+2,a=(i-t)/10;for(let n=t;n<i;n+=a)e.linearRampToValueAtTime(this.getValueAtTime(n),n)}return this._events.forEachAfter(this.context.currentTime,t=>{t.type===`cancelScheduledValues`?e.cancelScheduledValues(t.time):t.type===`setTargetAtTime`?e.setTargetAtTime(t.value,t.time,t.constant):e[t.type](t.value,t.time)}),this}setParam(e){V(this._swappable,`The Param must be assigned as 'swappable' in the constructor`);let t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,r,i){return n+(t-n)*Math.exp(-(i-e)/r)}_linearInterpolate(e,t,n,r,i){return t+(r-t)*((i-e)/(n-e))}_exponentialInterpolate(e,t,n,r,i){return t*(r/t)**+((i-e)/(n-e))}},W=class e extends nc{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return jo(this.input)?ns(this.input)||this.input instanceof ic?1:this.input.numberOfInputs:0}get numberOfOutputs(){return jo(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return jo(t)&&(t instanceof e||rs(t))}_getInternalNodes(){let e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(t=>{t.channelCount=e.channelCount,t.channelCountMode=e.channelCountMode,t.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){let e=this._getInternalNodes();V(e.length>0,`ToneAudioNode does not have any internal nodes`);let t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return oc(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return qo(`toMaster() has been renamed toDestination()`),this.toDestination()}disconnect(e,t=0,n=0){return sc(this,e,t,n),this}chain(...e){return ac(this,...e),this}fan(...e){return e.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),jo(this.input)&&(this.input instanceof e?this.input.dispose():rs(this.input)&&this.input.disconnect()),jo(this.output)&&(this.output instanceof e?this.output.dispose():rs(this.output)&&this.output.disconnect()),this._internalChannels=[],this}};function ac(...e){let t=e.shift();e.reduce((e,t)=>(e instanceof W?e.connect(t):rs(e)&&oc(e,t),t),t)}function oc(e,t,n=0,r=0){for(V(jo(e),`Cannot connect from undefined node`),V(jo(t),`Cannot connect to undefined node`),(t instanceof W||rs(t))&&V(t.numberOfInputs>0,`Cannot connect to node with no inputs`),V(e.numberOfOutputs>0,`Cannot connect from node with no outputs`);t instanceof W||t instanceof ic;)jo(t.input)&&(t=t.input);for(;e instanceof W;)jo(e.output)&&(e=e.output);ns(t)?e.connect(t,n):e.connect(t,n,r)}function sc(e,t,n=0,r=0){if(jo(t))for(;t instanceof W;)t=t.input;for(;!rs(e);)jo(e.output)&&(e=e.output);ns(t)?e.disconnect(t,n):rs(t)?e.disconnect(t,n,r):e.disconnect()}var G=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`gain`,`units`]);super(t),this.name=`Gain`,this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new ic({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),U(this,`gain`)}static getDefaults(){return Object.assign(W.getDefaults(),{convert:!0,gain:1,units:`gain`})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}},cc=class extends W{constructor(e){super(e),this.onended=Ms,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new G({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){let t=this.toSeconds(e);return this._startTime!==-1&&t>=this._startTime&&(this._stopTime===-1||t<=this._stopTime)?`started`:`stopped`},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(W.getDefaults(),{curve:`linear`,fadeIn:0,fadeOut:0,onended:Ms})}_startGain(e,t=1){V(this._startTime===-1,`Source cannot be started more than once`);let n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve===`linear`?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log(`stop`,e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){V(this._startTime!==-1,`'start' must be called before 'stop'`),this.cancelStop();let t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve===`linear`?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{let e=this._curve===`exponential`?t*2:0;this._stopSource(this.now()+e),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==Ms&&(this.onended(this),this.onended=Ms,!this.context.isOffline)){let e=()=>this.dispose();typeof requestIdleCallback<`u`?requestIdleCallback(e):setTimeout(e,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log(`cancelStop`),V(this._startTime!==-1,`Source is not started`),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=Ms,this}},lc=class e extends cc{constructor(){let t=H(e.getDefaults(),arguments,[`offset`]);super(t),this.name=`ToneConstantSource`,this._source=this.context.createConstantSource(),oc(this._source,this._gainNode),this.offset=new ic({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(cc.getDefaults(),{convert:!0,offset:1,units:`number`})}start(e){let t=this.toSeconds(e);return this.log(`start`,t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state===`started`&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}},uc=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`value`,`units`]);super(t),this.name=`Signal`,this.override=!0,this.output=this._constantSource=new lc({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(W.getDefaults(),{convert:!0,units:`number`,value:0})}connect(e,t=0,n=0){return dc(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,r){return this._param.setValueCurveAtTime(e,t,n,r),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}};function dc(e,t,n,r){(t instanceof ic||ns(t)||t instanceof uc&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof uc&&(t.overridden=!0)),oc(e,t,n,r)}var fc=class e extends ic{constructor(){let t=H(e.getDefaults(),arguments,[`value`]);super(t),this.name=`TickParam`,this._events=new bs(1/0),this._multiplier=1,this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:`setValueAtTime`,value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(ic.getDefaults(),{multiplier:1,units:`hertz`,value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);let r=this._fromType(e),i=this._events.get(t),a=Math.round(Math.max(1/n,1));for(let e=0;e<=a;e++){let a=n*e+t,o=this._exponentialApproach(i.time,i.value,r,n,a);this.linearRampToValueAtTime(this._toType(o),a)}return this}setValueAtTime(e,t){let n=this.toSeconds(t);super.setValueAtTime(e,t);let r=this._events.get(n),i=this._events.previousEvent(r),a=this._getTicksUntilEvent(i,n);return r.ticks=Math.max(a,0),this}linearRampToValueAtTime(e,t){let n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);let r=this._events.get(n),i=this._events.previousEvent(r),a=this._getTicksUntilEvent(i,n);return r.ticks=Math.max(a,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);let n=this._fromType(e),r=this._events.get(t),i=Math.round(Math.max((t-r.time)*10,1)),a=(t-r.time)/i;for(let e=0;e<=i;e++){let i=a*e+r.time,o=this._exponentialInterpolate(r.time,r.value,t,n,i);this.linearRampToValueAtTime(this._toType(o),i)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:`setValueAtTime`,value:0};else if(Ao(e.ticks)){let t=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(t,e.time)}let n=this._fromType(this.getValueAtTime(e.time)),r=this._fromType(this.getValueAtTime(t)),i=this._events.get(t);return i&&i.time===t&&i.type===`setValueAtTime`&&(r=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+r)+e.ticks}getTicksAtTime(e){let t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(t);return this.getTimeOfTick(r+e)-n}getTimeOfTick(e){let t=this._events.get(e,`ticks`),n=this._events.getAfter(e,`ticks`);if(t&&t.ticks===e)return t.time;if(t&&n&&n.type===`linearRampToValueAtTime`&&t.value!==n.value){let r=this._fromType(this.getValueAtTime(t.time)),i=(this._fromType(this.getValueAtTime(n.time))-r)/(n.time-t.time),a=Math.sqrt(r**2-2*i*(t.ticks-e)),o=(-r+a)/i,s=(-r-a)/i;return(o>0?o:s)+t.time}return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){let n=this.toSeconds(t),r=this.toSeconds(e),i=this.getTicksAtTime(n);return this.getTicksAtTime(n+r)-i}_fromType(e){return this.units===`bpm`&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units===`bpm`&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){let t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}},pc=class e extends uc{constructor(){let t=H(e.getDefaults(),arguments,[`value`]);super(t),this.name=`TickSignal`,this.input=this._param=new fc({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(uc.getDefaults(),{multiplier:1,units:`hertz`,value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}},mc=class e extends nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`]);super(t),this.name=`TickSource`,this._state=new rc,this._tickOffset=new bs,this._ticksAtTime=new bs,this._secondsAtTime=new bs,this.frequency=new pc({context:this.context,units:t.units,value:t.frequency}),U(this,`frequency`),this._state.setStateAtTime(`stopped`,0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:`hertz`},nc.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){let n=this.toSeconds(e);return this._state.getValueAtTime(n)!==`started`&&(this._state.setStateAtTime(`started`,n),jo(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){let t=this.toSeconds(e);if(this._state.getValueAtTime(t)===`stopped`){let e=this._state.get(t);e&&e.time>0&&(this._tickOffset.cancel(e.time),this._state.cancel(e.time))}return this._state.cancel(t),this._state.setStateAtTime(`stopped`,t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)===`started`&&(this._state.setStateAtTime(`paused`,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){let t=this.toSeconds(e),n=this._state.getLastState(`stopped`,t),r=this._ticksAtTime.get(t),i={state:`paused`,time:t};this._state.add(i);let a=r||n,o=r?r.ticks:0,s=null;return this._state.forEachBetween(a.time,t+this.sampleTime,e=>{let t=a.time,n=this._tickOffset.get(e.time);n&&n.time>=a.time&&(o=n.ticks,t=n.time),a.state===`started`&&e.state!==`started`&&(o+=this.frequency.getTicksAtTime(e.time)-this.frequency.getTicksAtTime(t),e.time!==i.time&&(s={state:e.state,time:e.time,ticks:o})),a=e}),this._state.remove(i),s&&this._ticksAtTime.add(s),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){let t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);let t=this._state.getLastState(`stopped`,e),n={state:`paused`,time:e};this._state.add(n);let r=this._secondsAtTime.get(e),i=r||t,a=r?r.seconds:0,o=null;return this._state.forEachBetween(i.time,e+this.sampleTime,e=>{let t=i.time,r=this._tickOffset.get(e.time);r&&r.time>=i.time&&(a=r.seconds,t=r.time),i.state===`started`&&e.state!==`started`&&(a+=e.time-t,e.time!==n.time&&(o={state:e.state,time:e.time,seconds:a})),i=e}),this._state.remove(n),o&&this._secondsAtTime.add(o),a}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){let n=this._tickOffset.get(t),r=this._state.get(t),i=Math.max(n.time,r.time),a=this.frequency.getTicksAtTime(i)+e-n.ticks;return this.frequency.getTimeOfTick(a)}forEachTickBetween(e,t,n){let r=this._state.get(e);this._state.forEachBetween(e,t,t=>{r&&r.state===`started`&&t.state!==`started`&&this.forEachTickBetween(Math.max(r.time,e),t.time-this.sampleTime,n),r=t});let i=null;if(r&&r.state===`started`){let a=Math.max(r.time,e),o=this.frequency.getTicksAtTime(a),s=o-this.frequency.getTicksAtTime(r.time),c=Math.ceil(s)-s;c=vs(c,1)?0:c;let l=this.frequency.getTimeOfTick(o+c);for(;l<t;){try{n(l,Math.round(this.getTicksAtTime(l)))}catch(e){i=e;break}l+=this.frequency.getDurationOfTicks(1,l)}}if(i)throw i;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}},hc=class e extends nc{constructor(){let t=H(e.getDefaults(),arguments,[`callback`,`frequency`]);super(t),this.name=`Clock`,this.callback=Ms,this._lastUpdate=0,this._state=new rc(`stopped`),this._boundLoop=this._loop.bind(this),this.callback=t.callback,this._tickSource=new mc({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,U(this,`frequency`),this._state.setStateAtTime(`stopped`,0),this.context.on(`tick`,this._boundLoop)}static getDefaults(){return Object.assign(nc.getDefaults(),{callback:Ms,frequency:1,units:`hertz`})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Bo(this.context);let n=this.toSeconds(e);return this.log(`start`,n),this._state.getValueAtTime(n)!==`started`&&(this._state.setStateAtTime(`started`,n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit(`start`,n,t)),this}stop(e){let t=this.toSeconds(e);return this.log(`stop`,t),this._state.cancel(t),this._state.setStateAtTime(`stopped`,t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit(`stop`,t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)===`started`&&(this._state.setStateAtTime(`paused`,t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit(`pause`,t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(r+e,n)}_loop(){let e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log(`loop`,e,t),e!==t&&(this._state.forEachBetween(e,t,e=>{switch(e.state){case`started`:let t=this._tickSource.getTicksAtTime(e.time);this.emit(`start`,e.time,t);break;case`stopped`:e.time!==0&&this.emit(`stop`,e.time);break;case`paused`:this.emit(`pause`,e.time)}}),this._tickSource.forEachTickBetween(e,t,(e,t)=>{this.callback(e,t)}))}getStateAtTime(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off(`tick`,this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}};Ds.mixin(hc);var gc=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`delayTime`,`maxDelay`]);super(t),this.name=`Delay`;let n=this.toSeconds(t.maxDelay);this._maxDelay=Math.max(n,this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(n),this.delayTime=new ic({context:this.context,param:this._delayNode.delayTime,units:`time`,value:t.delayTime,minValue:0,maxValue:this.maxDelay}),U(this,`delayTime`)}static getDefaults(){return Object.assign(W.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}},_c=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`volume`]);super(t),this.name=`Volume`,this.input=this.output=new G({context:this.context,gain:t.volume,units:`decibels`}),this.volume=this.output.gain,U(this,`volume`),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}},vc=class e extends W{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.name=`Destination`,this.input=new _c({context:this.context}),this.output=new G({context:this.context}),this.volume=this.input.volume,ac(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),ac(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}};Ss(e=>{e.destination=new vc({context:e})}),Ts(e=>{e.destination.dispose()});var yc=class extends W{constructor(){super(...arguments),this.name=`Listener`,this.positionX=new ic({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new ic({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new ic({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new ic({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new ic({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new ic({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new ic({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new ic({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new ic({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(W.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}};Ss(e=>{e.listener=new yc({context:e})}),Ts(e=>{e.listener.dispose()});var bc=class e extends ps{constructor(){super(),this.name=`ToneAudioBuffers`,this._buffers=new Map,this._loadingCount=0;let t=H(e.getDefaults(),arguments,[`urls`,`onload`,`baseUrl`],`urls`);this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;let n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:``,onerror:Ms,onload:Ms,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return V(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=Ms,r=Ms){return Lo(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()===`data:audio/`&&(this.baseUrl=``),this._buffers.set(e.toString(),new Ns(this.baseUrl+t,n,r))):this._buffers.set(e.toString(),new Ns(t,n,r)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}},xc=class e extends Zs{constructor(){super(...arguments),this.name=`MidiClass`,this.defaultUnits=`midi`}_frequencyToUnits(e){return Ks(super._frequencyToUnits(e))}_ticksToUnits(e){return Ks(super._ticksToUnits(e))}_beatsToUnits(e){return Ks(super._beatsToUnits(e))}_secondsToUnits(e){return Ks(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return Js(this.toMidi())}transpose(t){return new e(this.context,this.toMidi()+t)}},Sc=class extends tc{constructor(){super(...arguments),this.name=`Ticks`,this.defaultUnits=`i`}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}},Cc=class extends nc{constructor(){super(...arguments),this.name=`Draw`,this.expiration=.25,this.anticipation=.008,this._events=new bs,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){let e=this.context.currentTime;this._events.forEachBefore(e+this.anticipation,t=>{e-t.time<=this.expiration&&t.callback(),this._events.remove(t)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}};Ss(e=>{e.draw=new Cc({context:e})}),Ts(e=>{e.draw.dispose()});var wc=class extends ps{constructor(){super(...arguments),this.name=`IntervalTimeline`,this._root=null,this._length=0}add(e){V(jo(e.time),`Events must have a time property`),V(jo(e.duration),`Events must have a duration parameter`),e.time=e.time.valueOf();let t=new Tc(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){let t=[];this._root.search(e.time,t);for(let n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,e=>this.remove(e)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent===null?this._setRoot(t):(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent))}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{let t=e.getBalance(),n,r=null;if(t>0){if(e.left.right===null)n=e.left,n.right=e.right,r=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,r=n.parent,n.left=e.left,n.right=e.right)}}else if(e.right.left===null)n=e.right,n.left=e.left,r=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,r=n.parent,n.left=e.left,n.right=e.right)}e.parent===null?this._setRoot(n):e.isLeftChild()?e.parent.left=n:e.parent.right=n,r&&this._rebalance(r)}e.dispose()}_rotateLeft(e){let t=e.parent,n=e.isLeftChild(),r=e.right;r&&(e.right=r.left,r.left=e),t===null?this._setRoot(r):n?t.left=r:t.right=r}_rotateRight(e){let t=e.parent,n=e.isLeftChild(),r=e.left;r&&(e.left=r.right,r.right=e),t===null?this._setRoot(r):n?t.left=r:t.right=r}_rebalance(e){let t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){let t=[];if(this._root.search(e,t),t.length>0){let e=t[0];for(let n=1;n<t.length;n++)t[n].low>e.low&&(e=t[n]);return e.event}}return null}forEach(e){if(this._root!==null){let t=[];this._root.traverse(e=>t.push(e)),t.forEach(t=>{t.event&&e(t.event)})}return this}forEachAtTime(e,t){if(this._root!==null){let n=[];this._root.search(e,n),n.forEach(e=>{e.event&&t(e.event)})}return this}forEachFrom(e,t){if(this._root!==null){let n=[];this._root.searchAfter(e,n),n.forEach(e=>{e.event&&t(e.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}},Tc=class{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.height=this.left!==null&&this.right!==null?Math.max(this.left.height,this.right.height)+1:this.right===null?this.left===null?0:this.left.height+1:this.right.height+1}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left===null?this.right!==null&&(e=-(this.right.height+1)):e=this.left.height+1,e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}},Ec=class extends ps{constructor(e){super(),this.name=`TimelineValue`,this._timeline=new bs({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){let t=this._timeline.get(e);return t?t.value:this._initialValue}},Dc=class e extends W{constructor(){super(H(e.getDefaults(),arguments,[`context`]))}connect(e,t=0,n=0){return dc(this,e,t,n),this}},Oc=class e extends Dc{constructor(){let t=H(e.getDefaults(),arguments,[`mapping`,`length`]);super(t),this.name=`WaveShaper`,this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,Io(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):Mo(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(uc.getDefaults(),{length:1024})}setMap(e,t=1024){let n=new Float32Array(t);for(let r=0,i=t;r<i;r++){let t=r/(i-1)*2-1;n[r]=e(t,r)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){V([`none`,`2x`,`4x`].some(t=>t.includes(e)),`oversampling must be either 'none', '2x', or '4x'`),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}},kc=class e extends Dc{constructor(){let t=H(e.getDefaults(),arguments,[`value`]);super(t),this.name=`Pow`,this._exponentScaler=this.input=this.output=new Oc({context:this.context,mapping:this._expFunc(t.value),length:8192}),this._exponent=t.value}static getDefaults(){return Object.assign(Dc.getDefaults(),{value:1})}_expFunc(e){return t=>Math.abs(t)**+e}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}},Ac=class e{constructor(t,n){this.id=e._eventId++,this._remainderTime=0;let r=Object.assign(e.getDefaults(),n);this.transport=t,this.callback=r.callback,this._once=r.once,this.time=Math.floor(r.time),this._remainderTime=r.time-this.time}static getDefaults(){return{callback:Ms,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){let t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}};Ac._eventId=0;var jc=class e extends Ac{constructor(t,n){super(t,n),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);let r=Object.assign(e.getDefaults(),n);this.duration=r.duration,this._interval=r.interval,this._nextTick=r.time,this.transport.on(`start`,this._boundRestart),this.transport.on(`loopStart`,this._boundRestart),this.transport.on(`ticks`,this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Ac.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return _s(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new Sc(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){_s(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Sc(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;let t=this.transport.getTicksAtTime(e);hs(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off(`start`,this._boundRestart),this.transport.off(`loopStart`,this._boundRestart),this.transport.off(`ticks`,this._boundRestart),this}},Mc=class e extends nc{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.name=`Transport`,this._loop=new Ec(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new bs,this._repeatedEvents=new wc,this._syncedSignals=[],this._swingAmount=0,this._ppq=t.ppq,this._clock=new hc({callback:this._processTick.bind(this),context:this.context,frequency:0,units:`bpm`}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),U(this,`bpm`),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(nc.getDefaults(),{bpm:120,loopEnd:`4m`,loopStart:0,ppq:192,swing:0,swingSubdivision:`8n`,timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit(`loopEnd`,e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit(`loopStart`,e,this._clock.getSecondsAtTime(e)),this.emit(`loop`,e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!=0){let n=t%(this._swingTicks*2)/(this._swingTicks*2),r=Math.sin(n*Math.PI)*this._swingAmount;e+=new Sc(this.context,this._swingTicks*2/3).toSeconds()*r}Uo(!0),this._timeline.forEachAtTime(t,t=>t.invoke(e)),Uo(!1)}schedule(e,t){let n=new Ac(this,{callback:e,time:new tc(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,r=1/0){let i=new jc(this,{callback:e,duration:new Xs(this.context,r).toTicks(),interval:new Xs(this.context,t).toTicks(),time:new tc(this.context,n).toTicks()});return this._addEvent(i,this._repeatedEvents)}scheduleOnce(e,t){let n=new Ac(this,{callback:e,once:!0,time:new tc(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){let t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){let t=this.toTicks(e);return this._timeline.forEachFrom(t,e=>this.clear(e.id)),this._repeatedEvents.forEachFrom(t,e=>this.clear(e.id)),this}_bindClockEvents(){this._clock.on(`start`,(e,t)=>{t=new Sc(this.context,t).toSeconds(),this.emit(`start`,e,t)}),this._clock.on(`stop`,e=>{this.emit(`stop`,e)}),this._clock.on(`pause`,e=>{this.emit(`pause`,e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return jo(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)===`started`?this.stop(e):this.start(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){Io(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new Xs(this.context,this._loopStart,`i`).toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new Xs(this.context,this._loopEnd,`i`).toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Sc(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){let e=this.now(),t=this._clock.getTicksAtTime(e);return new Sc(this.context,t).toBarsBeatsSixteenths()}set position(e){let t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){let t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){let e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){let t=this.now();if(this.state===`started`){let n=this._clock.getTicksAtTime(t),r=t+this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t);this.emit(`stop`,r),this._clock.setTicksAtTime(e,r),this.emit(`start`,r,this._clock.getSecondsAtTime(r))}else this.emit(`ticks`,t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!==`started`)return 0;{let t=this.now(),n=this.getTicksAtTime(t),r=e-n%e;return this._clock.nextTickTime(r,t)}}syncSignal(e,t){let n=this.now(),r=this.bpm,i=1/(60/r.getValueAtTime(n)/this.PPQ),a=[];if(e.units===`time`){let e=1/64/i,t=new G(e),n=new kc(-1),o=new G(e);r.chain(t,n,o),r=o,i=1/i,a=[t,n,o]}t||=e.getValueAtTime(n)===0?0:e.getValueAtTime(n)/i;let o=new G(t);return r.connect(o),o.connect(e._param),a.push(o),this._syncedSignals.push({initial:e.value,nodes:a,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){let n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(e=>e.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),js(this,`bpm`),this._timeline.dispose(),this._repeatedEvents.dispose(),this}};Ds.mixin(Mc),Ss(e=>{e.transport=new Mc({context:e})}),Ts(e=>{e.transport.dispose()});var Nc=class extends W{constructor(e){super(e),this.input=void 0,this._state=new rc(`stopped`),this._synced=!1,this._scheduled=[],this._syncedStart=Ms,this._syncedStop=Ms,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new _c({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,U(this,`volume`),this.onstop=e.onstop}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,onstop:Ms,volume:0})}get state(){return this._synced?this.context.transport.state===`started`?this._state.getValueAtTime(this.context.transport.seconds):`stopped`:this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let r=Ao(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(r=this._clampToCurrentTime(r),!this._synced&&this._state.getValueAtTime(r)===`started`)V(hs(r,this._state.get(r).time),`Start time must be strictly greater than previous start time`),this._state.cancel(r),this._state.setStateAtTime(`started`,r),this.log(`restart`,r),this.restart(r,t,n);else if(this.log(`start`,r),this._state.setStateAtTime(`started`,r),this._synced){let e=this._state.get(r);e&&(e.offset=this.toSeconds(ds(t,0)),e.duration=n?this.toSeconds(n):void 0);let i=this.context.transport.schedule(e=>{this._start(e,t,n)},r);this._scheduled.push(i),this.context.transport.state===`started`&&this.context.transport.getSecondsAtTime(this.immediate())>r&&this._syncedStart(this.now(),this.context.transport.seconds)}else Bo(this.context),this._start(r,t,n);return this}stop(e){let t=Ao(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)===`started`||jo(this._state.getNextState(`started`,t))){if(this.log(`stop`,t),!this._synced)this._stop(t);else{let e=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(e)}this._state.cancel(t),this._state.setStateAtTime(`stopped`,t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)===`started`&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(hs(t,0)){let n=this._state.get(t);if(n&&n.state===`started`&&n.time!==t){let r=t-this.toSeconds(n.time),i;n.duration&&(i=this.toSeconds(n.duration)-r),this._start(e,this.toSeconds(n.offset)+r,i)}}},this._syncedStop=e=>{let t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)===`started`&&this._stop(e)},this.context.transport.on(`start`,this._syncedStart),this.context.transport.on(`loopStart`,this._syncedStart),this.context.transport.on(`stop`,this._syncedStop),this.context.transport.on(`pause`,this._syncedStop),this.context.transport.on(`loopEnd`,this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off(`stop`,this._syncedStop),this.context.transport.off(`pause`,this._syncedStop),this.context.transport.off(`loopEnd`,this._syncedStop),this.context.transport.off(`start`,this._syncedStart),this.context.transport.off(`loopStart`,this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=Ms,this.unsync(),this._volume.dispose(),this._state.dispose(),this}},Pc=class e extends cc{constructor(){let t=H(e.getDefaults(),arguments,[`url`,`onload`]);super(t),this.name=`ToneBufferSource`,this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,oc(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new ic({context:this.context,param:this._source.playbackRate,units:`positive`,value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new Ns(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(cc.getDefaults(),{url:new Ns,loop:!1,loopEnd:0,loopStart:0,onload:Ms,onerror:Ms,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,r=1){V(this.buffer.loaded,`buffer is either not set or not loaded`);let i=this.toSeconds(e);this._startGain(i,r),t=this.loop?ds(t,this.loopStart):ds(t,0);let a=Math.max(this.toSeconds(t),0);if(this.loop){let e=this.toSeconds(this.loopEnd)||this.buffer.duration,t=this.toSeconds(this.loopStart),n=e-t;gs(a,e)&&(a=(a-t)%n+t),vs(a,this.buffer.duration)&&(a=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,_s(a,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(i,a)),jo(n)){let e=this.toSeconds(n);e=Math.max(e,0),this.stop(i+e)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}},Fc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`type`]);super(t),this.name=`Noise`,this._source=null,this._playbackRate=t.playbackRate,this.type=t.type,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Nc.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:`white`})}get type(){return this._type}set type(e){if(V(e in zc,`Noise: invalid type: `+e),this._type!==e&&(this._type=e,this.state===`started`)){let e=this.now();this._stop(e),this._start(e)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){let t=zc[this._type];this._source=new Pc({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&=(this._source.stop(this.toSeconds(e)),null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}},Ic=220500,Lc=2,Rc={brown:null,pink:null,white:null},zc={get brown(){if(!Rc.brown){let e=[];for(let t=0;t<Lc;t++){let n=new Float32Array(Ic);e[t]=n;let r=0;for(let e=0;e<Ic;e++){let t=Math.random()*2-1;n[e]=(r+.02*t)/1.02,r=n[e],n[e]*=3.5}}Rc.brown=new Ns().fromArray(e)}return Rc.brown},get pink(){if(!Rc.pink){let e=[];for(let t=0;t<Lc;t++){let n=new Float32Array(Ic);e[t]=n;let r,i,a,o,s,c,l;r=i=a=o=s=c=l=0;for(let e=0;e<Ic;e++){let t=Math.random()*2-1;r=.99886*r+t*.0555179,i=.99332*i+t*.0750759,a=.969*a+t*.153852,o=.8665*o+t*.3104856,s=.55*s+t*.5329522,c=-.7616*c-t*.016898,n[e]=r+i+a+o+s+c+l+t*.5362,n[e]*=.11,l=t*.115926}}Rc.pink=new Ns().fromArray(e)}return Rc.pink},get white(){if(!Rc.white){let e=[];for(let t=0;t<Lc;t++){let n=new Float32Array(Ic);e[t]=n;for(let e=0;e<Ic;e++)n[e]=Math.random()*2-1}Rc.white=new Ns().fromArray(e)}return Rc.white}};function Bc(e,t){return es(this,void 0,void 0,function*(){let n=t/e.context.sampleRate,r=new Ps(1,n,e.context.sampleRate);return new e.constructor(Object.assign(e.get(),{frequency:2/n,detune:0,context:r})).toDestination().start(0),(yield r.render()).getChannelData(0)})}var Vc=class e extends cc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`ToneOscillatorNode`,this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],oc(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new ic({context:this.context,param:this._oscillator.frequency,units:`frequency`,value:t.frequency}),this.detune=new ic({context:this.context,param:this._oscillator.detune,units:`cents`,value:t.detune}),U(this,[`frequency`,`detune`])}static getDefaults(){return Object.assign(cc.getDefaults(),{detune:0,frequency:440,type:`sine`})}start(e){let t=this.toSeconds(e);return this.log(`start`,t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state===`started`&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}},Hc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`Oscillator`,this._oscillator=null,this.frequency=new uc({context:this.context,units:`frequency`,value:t.frequency}),U(this,`frequency`),this.detune=new uc({context:this.context,units:`cents`,value:t.detune}),U(this,`detune`),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!==`custom`&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(Nc.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:`sine`})}_start(e){let t=this.toSeconds(e),n=new Vc({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){let t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){let t=this.toSeconds(e);return this.log(`restart`,t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type===`custom`)return e._periodicWaveCache.find(e=>e.phase===this._phase&&ls(e.partials,this._partials));{let t=e._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;let n=[`sine`,`square`,`sawtooth`,`triangle`].indexOf(t)!==-1;if(this._phase===0&&n)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{let n=this._getCachedPeriodicWave();if(jo(n)){let{partials:e,wave:t}=n;this._wave=t,this._partials=e,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{let[n,r]=this._getRealImaginary(t,this._phase),i=this.context.createPeriodicWave(n,r);this._wave=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),e._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:n,type:this._type,wave:this._wave}),e._periodicWaveCache.length>100&&e._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),``)}set baseType(e){this.type=this.partialCount&&this._type!==`custom`&&e!==`custom`?e+this.partialCount:e}get partialCount(){return this._partialCount}set partialCount(e){zo(e,0);let t=this._type,n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!==`custom`)this.type=e===0?t:t+e.toString();else{let t=new Float32Array(e);this._partials.forEach((e,n)=>t[n]=e),this._partials=Array.from(t),this.type=this._type}}_getRealImaginary(e,t){let n=2048,r=new Float32Array(n),i=new Float32Array(n),a=1;if(e===`custom`){if(a=this._partials.length+1,this._partialCount=this._partials.length,n=a,this._partials.length===0)return[r,i]}else{let t=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);t?(a=parseInt(t[2],10)+1,this._partialCount=parseInt(t[2],10),e=t[1],a=Math.max(a,2),n=a):this._partialCount=0,this._partials=[]}for(let o=1;o<n;++o){let n=2/(o*Math.PI),s;switch(e){case`sine`:s=+(o<=a),this._partials[o-1]=s;break;case`square`:s=o&1?2*n:0,this._partials[o-1]=s;break;case`sawtooth`:s=n*(o&1?1:-1),this._partials[o-1]=s;break;case`triangle`:s=o&1?n*n*2*(o-1>>1&1?-1:1):0,this._partials[o-1]=s;break;case`custom`:s=this._partials[o-1];break;default:throw TypeError(`Oscillator: invalid type: `+e)}s===0?(r[o]=0,i[o]=0):(r[o]=-s*Math.sin(t*o),i[o]=s*Math.cos(t*o))}return[r,i]}_inverseFFT(e,t,n){let r=0,i=e.length;for(let a=0;a<i;a++)r+=e[a]*Math.cos(a*n)+t[a]*Math.sin(a*n);return r}getInitialValue(){let[e,t]=this._getRealImaginary(this._type,0),n=0,r=Math.PI*2;for(let i=0;i<32;i++)n=Math.max(this._inverseFFT(e,t,i/32*r),n);return ys(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type=`custom`)}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return es(this,arguments,void 0,function*(e=1024){return Bc(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}};Hc._periodicWaveCache=[];var Uc=class extends Dc{constructor(){super(...arguments),this.name=`AudioToGain`,this._norm=new Oc({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}},Wc=class e extends uc{constructor(){let t=H(e.getDefaults(),arguments,[`value`]);super(t),this.name=`Multiply`,this.override=!1,this._mult=this.input=this.output=new G({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(uc.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}},Gc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`,`modulationType`]);super(t),this.name=`AMOscillator`,this._modulationScale=new Uc({context:this.context}),this._modulationNode=new G({context:this.context}),this._carrier=new Hc({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Hc({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new Wc({context:this.context,units:`positive`,value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),U(this,[`frequency`,`detune`,`harmonicity`])}static getDefaults(){return Object.assign(Hc.getDefaults(),{harmonicity:1,modulationType:`square`})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return es(this,arguments,void 0,function*(e=1024){return Bc(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}},Kc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`,`modulationType`]);super(t),this.name=`FMOscillator`,this._modulationNode=new G({context:this.context,gain:0}),this._carrier=new Hc({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new uc({context:this.context,units:`frequency`,value:t.frequency}),this._modulator=new Hc({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new Wc({context:this.context,units:`positive`,value:t.harmonicity}),this.modulationIndex=new Wc({context:this.context,units:`positive`,value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),U(this,[`modulationIndex`,`frequency`,`detune`,`harmonicity`])}static getDefaults(){return Object.assign(Hc.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:`square`})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return es(this,arguments,void 0,function*(e=1024){return Bc(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}},qc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`width`]);super(t),this.name=`PulseOscillator`,this._widthGate=new G({context:this.context,gain:0}),this._thresh=new Oc({context:this.context,mapping:e=>e<=0?-1:1}),this.width=new uc({context:this.context,units:`audioRange`,value:t.width}),this._triangle=new Hc({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:`triangle`}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),U(this,[`width`,`frequency`,`detune`])}static getDefaults(){return Object.assign(Nc.getDefaults(),{detune:0,frequency:440,phase:0,type:`pulse`,width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return`pulse`}get baseType(){return`pulse`}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return es(this,arguments,void 0,function*(e=1024){return Bc(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}},Jc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`,`spread`]);super(t),this.name=`FatOscillator`,this._oscillators=[],this.frequency=new uc({context:this.context,units:`frequency`,value:t.frequency}),this.detune=new uc({context:this.context,units:`cents`,value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,U(this,[`frequency`,`detune`])}static getDefaults(){return Object.assign(Hc.getDefaults(),{count:3,spread:20,type:`sawtooth`})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){let t=-e/2,n=e/(this._oscillators.length-1);this._forEach((e,r)=>e.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(zo(e,1),this._oscillators.length!==e){this._forEach(e=>e.dispose()),this._oscillators=[];for(let t=0;t<e;t++){let n=new Hc({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):Ms});this.type===`custom`&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state===`started`&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((e,t)=>e.phase=this._phase+t/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type=`custom`,this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return es(this,arguments,void 0,function*(e=1024){return Bc(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}},Yc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`modulationFrequency`]);super(t),this.name=`PWMOscillator`,this.sourceType=`pwm`,this._scale=new Wc({context:this.context,value:2}),this._pulse=new qc({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType=`sine`,this.modulationFrequency=this._pulse.frequency,this._modulator=new Hc({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),U(this,[`modulationFrequency`,`frequency`,`detune`])}static getDefaults(){return Object.assign(Nc.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:`pwm`})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return`pwm`}get baseType(){return`pwm`}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return es(this,arguments,void 0,function*(e=1024){return Bc(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}},Xc={am:Gc,fat:Jc,fm:Kc,oscillator:Hc,pulse:qc,pwm:Yc},Zc=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`OmniOscillator`,this.frequency=new uc({context:this.context,units:`frequency`,value:t.frequency}),this.detune=new uc({context:this.context,units:`cents`,value:t.detune}),U(this,[`frequency`,`detune`]),this.set(t)}static getDefaults(){return Object.assign(Hc.getDefaults(),Kc.getDefaults(),Gc.getDefaults(),Jc.getDefaults(),qc.getDefaults(),Yc.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e=``;return[`am`,`fm`,`fat`].some(e=>this._sourceType===e)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)===`fm`?(this._createNewOscillator(`fm`),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)===`am`?(this._createNewOscillator(`am`),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)===`fat`?(this._createNewOscillator(`fat`),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e===`pwm`?(this._createNewOscillator(`pwm`),this._oscillator=this._oscillator):e===`pulse`?this._createNewOscillator(`pulse`):(this._createNewOscillator(`oscillator`),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,`pulse`)&&!this._getOscType(this._oscillator,`pwm`)&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,`pulse`)&&!this._getOscType(this._oscillator,`pwm`)&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,`type`)&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;let t=Xc[e],n=this.now();if(this._oscillator){let e=this._oscillator;e.stop(n),this.context.setTimeout(()=>e.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state===`started`&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t=`sine`;this._oscillator.type!==`pwm`&&this._oscillator.type!==`pulse`&&(t=this._oscillator.type),e===`fm`?this.type=`fm`+t:e===`am`?this.type=`am`+t:e===`fat`?this.type=`fat`+t:e===`oscillator`?this.type=t:e===`pulse`?this.type=`pulse`:e===`pwm`&&(this.type=`pwm`)}_getOscType(e,t){return e instanceof Xc[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,`pulse`)&&!this._getOscType(this._oscillator,`pwm`)&&e!==`pulse`&&e!==`pwm`&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,`pulse`))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,`fat`))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,`fat`)&&No(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,`fat`))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,`fat`)&&No(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,`fm`)||this._getOscType(this._oscillator,`am`))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,`fm`)||this._getOscType(this._oscillator,`am`))&&Lo(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,`fm`))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,`fm`)||this._getOscType(this._oscillator,`am`))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,`pwm`))return this._oscillator.modulationFrequency}asArray(){return es(this,arguments,void 0,function*(e=1024){return Bc(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}},Qc=class e extends uc{constructor(){super(H(e.getDefaults(),arguments,[`value`])),this.override=!1,this.name=`Add`,this._sum=new G({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,ac(this._constantSource,this._sum)}static getDefaults(){return Object.assign(uc.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}},$c=class e extends Dc{constructor(){let t=H(e.getDefaults(),arguments,[`min`,`max`]);super(t),this.name=`Scale`,this._mult=this.input=new Wc({context:this.context,value:t.max-t.min}),this._add=this.output=new Qc({context:this.context,value:t.min}),this._min=t.min,this._max=t.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(Dc.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(e){this._min=e,this._setRange()}get max(){return this._max}set max(e){this._max=e,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}},el=class e extends Dc{constructor(){super(H(e.getDefaults(),arguments)),this.name=`Zero`,this._gain=new G({context:this.context}),this.output=this._gain,this.input=void 0,oc(this.context.getConstant(0),this._gain)}dispose(){return super.dispose(),sc(this.context.getConstant(0),this._gain),this}},tl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`min`,`max`]);super(t),this.name=`LFO`,this._stoppedValue=0,this._units=`number`,this.convert=!0,this._fromType=ic.prototype._fromType,this._toType=ic.prototype._toType,this._is=ic.prototype._is,this._clampValue=ic.prototype._clampValue,this._oscillator=new Hc(t),this.frequency=this._oscillator.frequency,this._amplitudeGain=new G({context:this.context,gain:t.amplitude,units:`normalRange`}),this.amplitude=this._amplitudeGain.gain,this._stoppedSignal=new uc({context:this.context,units:`audioRange`,value:0}),this._zeros=new el({context:this.context}),this._a2g=new Uc({context:this.context}),this._scaler=this.output=new $c({context:this.context,max:t.max,min:t.min}),this.units=t.units,this.min=t.min,this.max=t.max,this._oscillator.chain(this._amplitudeGain,this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),U(this,[`amplitude`,`frequency`]),this.phase=t.phase}static getDefaults(){return Object.assign(Hc.getDefaults(),{amplitude:1,frequency:`4n`,max:1,min:0,type:`sine`,units:`number`})}start(e){return e=this.toSeconds(e),this._stoppedSignal.setValueAtTime(0,e),this._oscillator.start(e),this}stop(e){return e=this.toSeconds(e),this._stoppedSignal.setValueAtTime(this._stoppedValue,e),this._oscillator.stop(e),this}sync(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this}unsync(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this}_setStoppedValue(){this._stoppedValue=this._oscillator.getInitialValue(),this._stoppedSignal.value=this._stoppedValue}get min(){return this._toType(this._scaler.min)}set min(e){e=this._fromType(e),this._scaler.min=e}get max(){return this._toType(this._scaler.max)}set max(e){e=this._fromType(e),this._scaler.max=e}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e,this._setStoppedValue()}get partials(){return this._oscillator.partials}set partials(e){this._oscillator.partials=e,this._setStoppedValue()}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e,this._setStoppedValue()}get units(){return this._units}set units(e){let t=this.min,n=this.max;this._units=e,this.min=t,this.max=n}get state(){return this._oscillator.state}connect(e,t,n){return(e instanceof ic||e instanceof uc)&&(this.convert=e.convert,this.units=e.units),dc(this,e,t,n),this}dispose(){return super.dispose(),this._oscillator.dispose(),this._stoppedSignal.dispose(),this._zeros.dispose(),this._scaler.dispose(),this._a2g.dispose(),this._amplitudeGain.dispose(),this.amplitude.dispose(),this}};function nl(e,t=1/0){let n=new WeakMap;return function(r,i){Reflect.defineProperty(r,i,{configurable:!0,enumerable:!0,get:function(){return n.get(this)},set:function(r){zo(r,e,t),n.set(this,r)}})}}function rl(e,t=1/0){let n=new WeakMap;return function(r,i){Reflect.defineProperty(r,i,{configurable:!0,enumerable:!0,get:function(){return n.get(this)},set:function(r){zo(this.toSeconds(r),e,t),n.set(this,r)}})}}var il=class e extends Nc{constructor(){let t=H(e.getDefaults(),arguments,[`url`,`onload`]);super(t),this.name=`Player`,this._activeSources=new Set,this._buffer=new Ns({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Nc.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:Ms,onerror:Ms,playbackRate:1,reverse:!1})}load(e){return es(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=Ms){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())===`started`&&(this._state.cancel(this.now()),this._state.setStateAtTime(`stopped`,this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){t=this._loop?ds(t,this._loopStart):ds(t,0);let r=this.toSeconds(t),i=n;n=ds(n,Math.max(this._buffer.duration-r,0));let a=this.toSeconds(n);a/=this._playbackRate,e=this.toSeconds(e);let o=new Pc({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+a),this._state.setStateAtTime(`stopped`,e+a,{implicitEnd:!0})),this._activeSources.add(o),this._loop&&Ao(i)?o.start(e,r):o.start(e,r,a-this.toSeconds(this.fadeOut))}_stop(e){let t=this.toSeconds(e);this._activeSources.forEach(e=>e.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var r;(r=[...this._activeSources].pop())==null||r.stop(e),this._start(e,t,n)}seek(e,t){let n=this.toSeconds(t);if(this._state.getValueAtTime(n)===`started`){let t=this.toSeconds(e);this._stop(n),this._start(n,t)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&zo(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&zo(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){let e=this._state.getNextState(`stopped`,this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;let t=this.now(),n=this._state.getNextState(`stopped`,t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(e=>e.cancelStop())),this._activeSources.forEach(n=>{n.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}};$o([rl(0)],il.prototype,`fadeIn`,void 0),$o([rl(0)],il.prototype,`fadeOut`,void 0);var al=class extends Dc{constructor(){super(...arguments),this.name=`GainToAudio`,this._norm=new Oc({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}},ol=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`attack`,`decay`,`sustain`,`release`]);super(t),this.name=`Envelope`,this._sig=new uc({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(W.getDefaults(),{attack:.01,attackCurve:`linear`,decay:.1,decayCurve:`exponential`,release:1,releaseCurve:`exponential`,sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(Lo(e))return e;{let n;for(n in sl)if(sl[n][t]===e)return n;return e}}_setCurve(e,t,n){if(Lo(n)&&Reflect.has(sl,n)){let r=sl[n];Po(r)?e!==`_decayCurve`&&(this[e]=r[t]):this[e]=r}else if(Io(n)&&e!==`_decayCurve`)this[e]=n;else throw Error(`Envelope: invalid curve: `+n)}get attackCurve(){return this._getCurve(this._attackCurve,`In`)}set attackCurve(e){this._setCurve(`_attackCurve`,`In`,e)}get releaseCurve(){return this._getCurve(this._releaseCurve,`Out`)}set releaseCurve(e){this._setCurve(`_releaseCurve`,`Out`,e)}get decayCurve(){return this._getCurve(this._decayCurve,`Out`)}set decayCurve(e){this._setCurve(`_decayCurve`,`Out`,e)}triggerAttack(e,t=1){this.log(`triggerAttack`,e,t),e=this.toSeconds(e);let n=this.toSeconds(this.attack),r=this.toSeconds(this.decay),i=this.getValueAtTime(e);if(i>0){let e=1/n;n=(1-i)/e}if(n<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve===`linear`)this._sig.linearRampTo(t,n,e);else if(this._attackCurve===`exponential`)this._sig.targetRampTo(t,n,e);else{this._sig.cancelAndHoldAtTime(e);let r=this._attackCurve;for(let e=1;e<r.length;e++)if(r[e-1]<=i&&i<=r[e]){r=this._attackCurve.slice(e),r[0]=i;break}this._sig.setValueCurveAtTime(r,e,n,t)}if(r&&this.sustain<1){let i=t*this.sustain,a=e+n;this.log(`decay`,a),this._decayCurve===`linear`?this._sig.linearRampToValueAtTime(i,r+a):this._sig.exponentialApproachValueAtTime(i,a,r)}return this}triggerRelease(e){this.log(`triggerRelease`,e),e=this.toSeconds(e);let t=this.getValueAtTime(e);if(t>0){let n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve===`linear`?this._sig.linearRampTo(0,n,e):this._releaseCurve===`exponential`?this._sig.targetRampTo(0,n,e):(V(Io(this._releaseCurve),`releaseCurve must be either 'linear', 'exponential' or an array`),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return dc(this,e,t,n),this}asArray(){return es(this,arguments,void 0,function*(e=1024){let t=e/this.context.sampleRate,n=new Ps(1,t,this.context.sampleRate),r=this.toSeconds(this.attack)+this.toSeconds(this.decay),i=r+this.toSeconds(this.release),a=i*.1,o=i+a,s=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/o,decay:t*this.toSeconds(this.decay)/o,release:t*this.toSeconds(this.release)/o,context:n}));return s._sig.toDestination(),s.triggerAttackRelease(t*(r+a)/o,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}};$o([rl(0)],ol.prototype,`attack`,void 0),$o([rl(0)],ol.prototype,`decay`,void 0),$o([nl(0,1)],ol.prototype,`sustain`,void 0),$o([rl(0)],ol.prototype,`release`,void 0);var sl=(()=>{let e,t,n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));let r=[];for(e=0;e<127;e++){t=e/127;let n=Math.sin(Math.PI*2*t*6.4-Math.PI/2)+1;r[e]=n/10+t*.83}r[127]=1;let i=[];for(e=0;e<128;e++)i[e]=Math.ceil(e/127*5)/5;let a=[];for(e=0;e<128;e++)t=e/127,a[e]=.5*(1-Math.cos(Math.PI*t));let o=[];for(e=0;e<128;e++){t=e/127;let n=t**3*4+.2,r=Math.cos(n*Math.PI*2*t);o[e]=Math.abs(r*(1-t))}function s(e){let t=Array(e.length);for(let n=0;n<e.length;n++)t[n]=1-e[n];return t}function c(e){return e.slice(0).reverse()}return{bounce:{In:s(o),Out:o},cosine:{In:n,Out:c(n)},exponential:`exponential`,linear:`linear`,ripple:{In:r,Out:s(r)},sine:{In:a,Out:s(a)},step:{In:i,Out:s(i)}}})(),cl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments);super(t),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=e=>this._original_triggerRelease(e),this._volume=this.output=new _c({context:this.context,volume:t.volume}),this.volume=this._volume.volume,U(this,`volume`)}static getDefaults(){return Object.assign(W.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod(`triggerAttack`,1),this._syncMethod(`triggerRelease`,0),this.context.transport.on(`stop`,this._syncedRelease),this.context.transport.on(`pause`,this._syncedRelease),this.context.transport.on(`loopEnd`,this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){let n=this[`_original_`+e]=this[e];this[e]=(...e)=>{let r=e[t],i=this.context.transport.schedule(r=>{e[t]=r,n.apply(this,e)},r);this._scheduledEvents.push(i)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off(`stop`,this._syncedRelease),this.context.transport.off(`pause`,this._syncedRelease),this.context.transport.off(`loopEnd`,this._syncedRelease)),this}triggerAttackRelease(e,t,n,r){let i=this.toSeconds(n),a=this.toSeconds(t);return this.triggerAttack(e,i,r),this.triggerRelease(i+a),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}},ll=class e extends cl{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign(cl.getDefaults(),{detune:0,onsilence:Ms,portamento:0})}triggerAttack(e,t,n=1){this.log(`triggerAttack`,e,t,n);let r=this.toSeconds(t);return this._triggerEnvelopeAttack(r,n),this.setNote(e,r),this}triggerRelease(e){this.log(`triggerRelease`,e);let t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){let n=this.toSeconds(t),r=e instanceof Zs?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){let e=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(r,e,n)}else this.frequency.setValueAtTime(r,n);return this}};$o([rl(0)],ll.prototype,`portamento`,void 0);var ul=class e extends ol{constructor(){super(H(e.getDefaults(),arguments,[`attack`,`decay`,`sustain`,`release`])),this.name=`AmplitudeEnvelope`,this._gainNode=new G({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}},dl=class e extends ll{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.name=`Synth`,this.oscillator=new Zc(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new ul(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),U(this,[`oscillator`,`frequency`,`detune`,`envelope`])}static getDefaults(){return Object.assign(ll.getDefaults(),{envelope:Object.assign(fs(ol.getDefaults(),Object.keys(W.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(fs(Zc.getDefaults(),[...Object.keys(Nc.getDefaults()),`frequency`,`detune`]),{type:`triangle`})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){let t=this.toSeconds(this.envelope.attack),n=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+t+n)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}},fl=class e extends ll{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.name=`ModulationSynth`,this._carrier=new dl({context:this.context,oscillator:t.oscillator,envelope:t.envelope,onsilence:()=>this.onsilence(this),volume:-10}),this._modulator=new dl({context:this.context,oscillator:t.modulation,envelope:t.modulationEnvelope,volume:-10}),this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope,this.modulation=this._modulator.oscillator,this.modulationEnvelope=this._modulator.envelope,this.frequency=new uc({context:this.context,units:`frequency`}),this.detune=new uc({context:this.context,value:t.detune,units:`cents`}),this.harmonicity=new Wc({context:this.context,value:t.harmonicity,minValue:0}),this._modulationNode=new G({context:this.context,gain:0}),U(this,[`frequency`,`harmonicity`,`oscillator`,`envelope`,`modulation`,`modulationEnvelope`,`detune`])}static getDefaults(){return Object.assign(ll.getDefaults(),{harmonicity:3,oscillator:Object.assign(fs(Zc.getDefaults(),[...Object.keys(Nc.getDefaults()),`frequency`,`detune`]),{type:`sine`}),envelope:Object.assign(fs(ol.getDefaults(),Object.keys(W.getDefaults())),{attack:.01,decay:.01,sustain:1,release:.5}),modulation:Object.assign(fs(Zc.getDefaults(),[...Object.keys(Nc.getDefaults()),`frequency`,`detune`]),{type:`square`}),modulationEnvelope:Object.assign(fs(ol.getDefaults(),Object.keys(W.getDefaults())),{attack:.5,decay:0,sustain:1,release:.5})})}_triggerEnvelopeAttack(e,t){this._carrier._triggerEnvelopeAttack(e,t),this._modulator._triggerEnvelopeAttack(e,t)}_triggerEnvelopeRelease(e){return this._carrier._triggerEnvelopeRelease(e),this._modulator._triggerEnvelopeRelease(e),this}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this._carrier.dispose(),this._modulator.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._modulationNode.dispose(),this}},pl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`BiquadFilter`,this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new ic({context:this.context,units:`number`,value:t.Q,param:this._filter.Q}),this.frequency=new ic({context:this.context,units:`frequency`,value:t.frequency,param:this._filter.frequency}),this.detune=new ic({context:this.context,units:`cents`,value:t.detune,param:this._filter.detune}),this.gain=new ic({context:this.context,units:`decibels`,convert:!1,value:t.gain,param:this._filter.gain}),this.type=t.type}static getDefaults(){return Object.assign(W.getDefaults(),{Q:1,type:`lowpass`,frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(e){V([`lowpass`,`highpass`,`bandpass`,`lowshelf`,`highshelf`,`notch`,`allpass`,`peaking`].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._filter.type=e}getFrequencyResponse(e=128){let t=new Float32Array(e);for(let n=0;n<e;n++){let r=(n/e)**2*19980+20;t[n]=r}let n=new Float32Array(e),r=new Float32Array(e),i=this.context.createBiquadFilter();return i.type=this.type,i.Q.value=this.Q.value,i.frequency.value=this.frequency.value,i.gain.value=this.gain.value,i.getFrequencyResponse(t,n,r),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}},ml=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`type`,`rolloff`]);super(t),this.name=`Filter`,this.input=new G({context:this.context}),this.output=new G({context:this.context}),this._filters=[],this._filters=[],this.Q=new uc({context:this.context,units:`positive`,value:t.Q}),this.frequency=new uc({context:this.context,units:`frequency`,value:t.frequency}),this.detune=new uc({context:this.context,units:`cents`,value:t.detune}),this.gain=new uc({context:this.context,units:`decibels`,convert:!1,value:t.gain}),this._type=t.type,this.rolloff=t.rolloff,U(this,[`detune`,`frequency`,`gain`,`Q`])}static getDefaults(){return Object.assign(W.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:`lowpass`})}get type(){return this._type}set type(e){V([`lowpass`,`highpass`,`bandpass`,`lowshelf`,`highshelf`,`notch`,`allpass`,`peaking`].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._type=e,this._filters.forEach(t=>t.type=e)}get rolloff(){return this._rolloff}set rolloff(e){let t=No(e)?e:parseInt(e,10),n=[-12,-24,-48,-96],r=n.indexOf(t);V(r!==-1,`rolloff can only be ${n.join(`, `)}`),r+=1,this._rolloff=t,this.input.disconnect(),this._filters.forEach(e=>e.disconnect()),this._filters=Array(r);for(let e=0;e<r;e++){let t=new pl({context:this.context});t.type=this._type,this.frequency.connect(t.frequency),this.detune.connect(t.detune),this.Q.connect(t.Q),this.gain.connect(t.gain),this._filters[e]=t}this._internalChannels=this._filters,ac(this.input,...this._internalChannels,this.output)}getFrequencyResponse(e=128){let t=new pl({context:this.context,frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(e).map(()=>1);return this._filters.forEach(()=>{t.getFrequencyResponse(e).forEach((e,t)=>n[t]*=e)}),t.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(e=>{e.dispose()}),js(this,[`detune`,`frequency`,`gain`,`Q`]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}},hl=class e extends ol{constructor(){let t=H(e.getDefaults(),arguments,[`attack`,`decay`,`sustain`,`release`]);super(t),this.name=`FrequencyEnvelope`,this._octaves=t.octaves,this._baseFrequency=this.toFrequency(t.baseFrequency),this._exponent=this.input=new kc({context:this.context,value:t.exponent}),this._scale=this.output=new $c({context:this.context,min:this._baseFrequency,max:this._baseFrequency*2**this._octaves}),this._sig.chain(this._exponent,this._scale)}static getDefaults(){return Object.assign(ol.getDefaults(),{baseFrequency:200,exponent:1,octaves:4})}get baseFrequency(){return this._baseFrequency}set baseFrequency(e){let t=this.toFrequency(e);zo(t,0),this._baseFrequency=t,this._scale.min=this._baseFrequency,this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(e){this._octaves=e,this._scale.max=this._baseFrequency*2**e}get exponent(){return this._exponent.value}set exponent(e){this._exponent.value=e}dispose(){return super.dispose(),this._exponent.dispose(),this._scale.dispose(),this}},gl=class e extends ll{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.name=`MonoSynth`,this.oscillator=new Zc(Object.assign(t.oscillator,{context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)})),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new ml(Object.assign(t.filter,{context:this.context})),this.filterEnvelope=new hl(Object.assign(t.filterEnvelope,{context:this.context})),this.envelope=new ul(Object.assign(t.envelope,{context:this.context})),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),U(this,[`oscillator`,`frequency`,`detune`,`filter`,`filterEnvelope`,`envelope`])}static getDefaults(){return Object.assign(ll.getDefaults(),{envelope:Object.assign(fs(ol.getDefaults(),Object.keys(W.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.9}),filter:Object.assign(fs(ml.getDefaults(),Object.keys(W.getDefaults())),{Q:1,rolloff:-12,type:`lowpass`}),filterEnvelope:Object.assign(fs(hl.getDefaults(),Object.keys(W.getDefaults())),{attack:.6,baseFrequency:200,decay:.2,exponent:2,octaves:3,release:2,sustain:.5}),oscillator:Object.assign(fs(Zc.getDefaults(),Object.keys(Nc.getDefaults())),{type:`sawtooth`})})}_triggerEnvelopeAttack(e,t=1){if(this.envelope.triggerAttack(e,t),this.filterEnvelope.triggerAttack(e),this.oscillator.start(e),this.envelope.sustain===0){let t=this.toSeconds(this.envelope.attack),n=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+t+n)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.filterEnvelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this.filterEnvelope.dispose(),this.filter.dispose(),this}},_l=class e extends fl{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.name=`FMSynth`,this.modulationIndex=new Wc({context:this.context,value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output)}static getDefaults(){return Object.assign(fl.getDefaults(),{modulationIndex:10})}dispose(){return super.dispose(),this.modulationIndex.dispose(),this}},vl=class e extends dl{constructor(){let t=H(e.getDefaults(),arguments);super(t),this.name=`MembraneSynth`,this.portamento=0,this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,U(this,[`oscillator`,`envelope`])}static getDefaults(){return cs(ll.getDefaults(),dl.getDefaults(),{envelope:{attack:.001,attackCurve:`exponential`,decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:`sine`},pitchDecay:.05})}setNote(e,t){let n=this.toSeconds(t),r=this.toFrequency(e instanceof Zs?e.toFrequency():e),i=r*this.octaves;return this.oscillator.frequency.setValueAtTime(i,n),this.oscillator.frequency.exponentialRampToValueAtTime(r,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}};$o([nl(0)],vl.prototype,`octaves`,void 0),$o([rl(0)],vl.prototype,`pitchDecay`,void 0);var yl=new Set;function bl(e){yl.add(e)}function xl(e,t){let n=`registerProcessor("${e}", ${t})`;yl.add(n)}bl(`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`),bl(`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`),bl(`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`),xl(`feedback-comb-filter`,`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`);var Sl=class e extends cl{constructor(){let t=H(e.getDefaults(),arguments,[`voice`,`options`]);super(t),this.name=`PolySynth`,this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=e=>this.releaseAll(e),V(!No(t.voice),`DEPRECATED: The polyphony count is no longer the first argument.`);let n=t.voice.getDefaults();this.options=Object.assign(n,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();let r=this._voices.indexOf(this._dummyVoice);this._voices.splice(r,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(cl.getDefaults(),{maxPolyphony:32,options:{},voice:dl})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);let t=this._activeVoices.findIndex(t=>t.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){let e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return V(e instanceof ll,`Voice must extend Monophonic class`),e.connect(this.output),this._voices.push(e),e}qo(`Max polyphony exceeded. Note dropped.`)}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){let e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(e=>{let r=new xc(this.context,e).toMidi(),i=this._getNextAvailableVoice();i&&(i.triggerAttack(e,t,n),this._activeVoices.push({midi:r,voice:i,released:!1}),this.log(`triggerAttack`,e,t))})}_triggerRelease(e,t){e.forEach(e=>{let n=new xc(this.context,e).toMidi(),r=this._activeVoices.find(({midi:e,released:t})=>e===n&&!t);r&&(r.voice.triggerRelease(t),r.released=!0,this.log(`triggerRelease`,e,t))})}_scheduleEvent(e,t,n,r){V(!this.disposed,`Synth was already disposed`),n<=this.now()?e===`attack`?this._triggerAttack(t,n,r):this._triggerRelease(t,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(e,t,n,r)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);let r=this.toSeconds(t);return this._scheduleEvent(`attack`,e,r,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);let n=this.toSeconds(t);return this._scheduleEvent(`release`,e,n),this}triggerAttackRelease(e,t,n,r){let i=this.toSeconds(n);if(this.triggerAttack(e,i,r),Io(t)){V(Io(e),`If the duration is an array, the notes must also be an array`),e=e;for(let n=0;n<e.length;n++){let r=t[Math.min(n,t.length-1)],a=this.toSeconds(r);V(a>0,`The duration must be greater than 0`),this.triggerRelease(e[n],i+a)}}else{let n=this.toSeconds(t);V(n>0,`The duration must be greater than 0`),this.triggerRelease(e,i+n)}return this}sync(){return this._syncState()&&(this._syncMethod(`triggerAttack`,1),this._syncMethod(`triggerRelease`,1),this.context.transport.on(`stop`,this._syncedRelease),this.context.transport.on(`pause`,this._syncedRelease),this.context.transport.on(`loopEnd`,this._syncedRelease)),this}set(e){let t=fs(e,[`onsilence`,`context`]);return this.options=cs(this.options,t),this._voices.forEach(e=>e.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){let t=this.toSeconds(e);return this._activeVoices.forEach(({voice:e})=>{e.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}},Cl=class e extends cl{constructor(){let t=H(e.getDefaults(),arguments,[`urls`,`onload`,`baseUrl`],`urls`);super(t),this.name=`Sampler`,this._activeSources=new Map;let n={};Object.keys(t.urls).forEach(e=>{let r=parseInt(e,10);if(V(Ro(e)||No(r)&&isFinite(r),`url key is neither a note or midi pitch: ${e}`),Ro(e)){let r=new Zs(this.context,e).toMidi();n[r]=t.urls[e]}else No(r)&&isFinite(r)&&(n[r]=t.urls[r])}),this._buffers=new bc({urls:n,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign(cl.getDefaults(),{attack:0,baseUrl:``,curve:`exponential`,onload:Ms,onerror:Ms,release:.1,urls:{}})}_findClosest(e){let t=0;for(;t<96;){if(this._buffers.has(e+t))return-t;if(this._buffers.has(e-t))return t;t++}throw Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log(`triggerAttack`,e,t,n),Array.isArray(e)||(e=[e]),e.forEach(e=>{let r=qs(new Zs(this.context,e).toFrequency()),i=Math.round(r),a=r-i,o=this._findClosest(i),s=i-o,c=this._buffers.get(s),l=Hs(o+a),u=new Pc({url:c,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:l}).connect(this.output);u.start(t,0,c.duration/l,n),Io(this._activeSources.get(i))||this._activeSources.set(i,[]),this._activeSources.get(i).push(u),u.onended=()=>{if(this._activeSources&&this._activeSources.has(i)){let e=this._activeSources.get(i),t=e.indexOf(u);t!==-1&&e.splice(t,1)}}}),this}triggerRelease(e,t){return this.log(`triggerRelease`,e,t),Array.isArray(e)||(e=[e]),e.forEach(e=>{let n=new Zs(this.context,e).toMidi();if(this._activeSources.has(n)&&this._activeSources.get(n).length){let e=this._activeSources.get(n);t=this.toSeconds(t),e.forEach(e=>{e.stop(t)}),this._activeSources.set(n,[])}}),this}releaseAll(e){let t=this.toSeconds(e);return this._activeSources.forEach(e=>{for(;e.length;)e.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod(`triggerAttack`,1),this._syncMethod(`triggerRelease`,1)),this}triggerAttackRelease(e,t,n,r=1){let i=this.toSeconds(n);return this.triggerAttack(e,i,r),Io(t)?(V(Io(e),`notes must be an array when duration is array`),e.forEach((e,n)=>{let r=t[Math.min(n,t.length-1)];this.triggerRelease(e,i+this.toSeconds(r))})):this.triggerRelease(e,i+this.toSeconds(t)),this}add(e,t,n){if(V(Ro(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Ro(e)){let r=new Zs(this.context,e).toMidi();this._buffers.add(r,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(e=>e.dispose())}),this._activeSources.clear(),this}};$o([rl(0)],Cl.prototype,`attack`,void 0),$o([rl(0)],Cl.prototype,`release`,void 0);var wl=class e extends nc{constructor(){let t=H(e.getDefaults(),arguments,[`callback`,`value`]);super(t),this.name=`ToneEvent`,this._state=new rc(`stopped`),this._startOffset=0,this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(nc.getDefaults(),{callback:Ms,humanize:!1,loop:!1,loopEnd:`1m`,loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(e=-1){this._state.forEachFrom(e,e=>{let t;if(e.state===`started`){e.id!==-1&&this.context.transport.clear(e.id);let n=e.time+Math.round(this.startOffset/this._playbackRate);if(this._loop===!0||No(this._loop)&&this._loop>1){t=1/0,No(this._loop)&&(t=this._loop*this._getLoopDuration());let r=this._state.getAfter(n);r!==null&&(t=Math.min(t,r.time-n)),t!==1/0&&(t=new Sc(this.context,t));let i=new Sc(this.context,this._getLoopDuration());e.id=this.context.transport.scheduleRepeat(this._tick.bind(this),i,new Sc(this.context,n),t)}else e.id=this.context.transport.schedule(this._tick.bind(this),new Sc(this.context,n))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(e){this._startOffset=e}get probability(){return this._probability}set probability(e){this._probability=e}get humanize(){return this._humanize}set humanize(e){this._humanize=e}start(e){let t=this.toTicks(e);return this._state.getValueAtTime(t)===`stopped`&&(this._state.add({id:-1,state:`started`,time:t}),this._rescheduleEvents(t)),this}stop(e){this.cancel(e);let t=this.toTicks(e);if(this._state.getValueAtTime(t)===`started`){this._state.setStateAtTime(`stopped`,t,{id:-1});let e=this._state.getBefore(t),n=t;e!==null&&(n=e.time),this._rescheduleEvents(n)}return this}cancel(e){e=ds(e,-1/0);let t=this.toTicks(e);return this._state.forEachFrom(t,e=>{this.context.transport.clear(e.id)}),this._state.cancel(t),this}_tick(e){let t=this.context.transport.getTicksAtTime(e);if(!this.mute&&this._state.getValueAtTime(t)===`started`){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let t=.02;Fo(this.humanize)||(t=this.toSeconds(this.humanize)),e+=(Math.random()*2-1)*t}this.callback(e,this.value)}}_getLoopDuration(){return(this._loopEnd-this._loopStart)/this._playbackRate}get loop(){return this._loop}set loop(e){this._loop=e,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._rescheduleEvents()}get loopEnd(){return new Sc(this.context,this._loopEnd).toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e),this._loop&&this._rescheduleEvents()}get loopStart(){return new Sc(this.context,this._loopStart).toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){let e=this.context.transport.ticks,t=this._state.get(e);if(t!==null&&t.state===`started`){let n=this._getLoopDuration();return(e-t.time)%n/n}return 0}return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}},Tl=class e extends nc{constructor(){let t=H(e.getDefaults(),arguments,[`callback`,`interval`]);super(t),this.name=`Loop`,this._event=new wl({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability,humanize:t.humanize}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(nc.getDefaults(),{interval:`4n`,callback:Ms,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(e){return this._event.start(e),this}stop(e){return this._event.stop(e),this}cancel(e){return this._event.cancel(e),this}_tick(e){this.callback(e)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(e){this._event.loopEnd=e}get playbackRate(){return this._event.playbackRate}set playbackRate(e){this._event.playbackRate=e}get humanize(){return this._event.humanize}set humanize(e){this._event.humanize=e}get probability(){return this._event.probability}set probability(e){this._event.probability=e}get mute(){return this._event.mute}set mute(e){this._event.mute=e}get iterations(){return this._event.loop===!0?1/0:this._event.loop}set iterations(e){e===1/0?this._event.loop=!0:this._event.loop=e}dispose(){return super.dispose(),this._event.dispose(),this}},El=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`fade`]);super(t),this.name=`CrossFade`,this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new al({context:this.context}),this.a=new G({context:this.context,gain:0}),this.b=new G({context:this.context,gain:0}),this.output=new G({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new uc({context:this.context,units:`normalRange`,value:t.fade}),U(this,`fade`),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode=`explicit`,oc(this._split,this.a.gain,0),oc(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(W.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}},Dl=class extends W{constructor(e){super(e),this.name=`Effect`,this._dryWet=new El({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new G({context:this.context}),this.effectReturn=new G({context:this.context}),this.input=new G({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],U(this,`wet`)}static getDefaults(){return Object.assign(W.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}},Ol=class extends Dl{constructor(e){super(e),this.name=`LFOEffect`,this._lfo=new tl({context:this.context,frequency:e.frequency,amplitude:e.depth}),this.depth=this._lfo.amplitude,this.frequency=this._lfo.frequency,this.type=e.type,U(this,[`frequency`,`depth`])}static getDefaults(){return Object.assign(Dl.getDefaults(),{frequency:1,type:`sine`,depth:1})}start(e){return this._lfo.start(e),this}stop(e){return this._lfo.stop(e),this}sync(){return this._lfo.sync(),this}unsync(){return this._lfo.unsync(),this}get type(){return this._lfo.type}set type(e){this._lfo.type=e}dispose(){return super.dispose(),this._lfo.dispose(),this.frequency.dispose(),this.depth.dispose(),this}},kl=class e extends Ol{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`baseFrequency`,`octaves`]);super(t),this.name=`AutoFilter`,this.filter=new ml(Object.assign(t.filter,{context:this.context})),this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency}static getDefaults(){return Object.assign(Ol.getDefaults(),{baseFrequency:200,octaves:2.6,filter:{type:`lowpass`,rolloff:-12,Q:1}})}get baseFrequency(){return this._lfo.min}set baseFrequency(e){this._lfo.min=this.toFrequency(e),this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(e){this._octaves=e,this._lfo.max=this._lfo.min*2**e}dispose(){return super.dispose(),this.filter.dispose(),this}},Al=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`pan`]);super(t),this.name=`Panner`,this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new ic({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode=`explicit`,U(this,`pan`)}static getDefaults(){return Object.assign(W.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}};xl(`bit-crusher`,`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`);var jl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`channels`]);super(t),this.name=`Split`,this._splitter=this.input=this.output=this.context.createChannelSplitter(t.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(W.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}},Ml=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`channels`]);super(t),this.name=`Merge`,this._merger=this.output=this.input=this.context.createChannelMerger(t.channels)}static getDefaults(){return Object.assign(W.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}},Nl=class extends W{constructor(e){super(e),this.name=`StereoEffect`,this.input=new G({context:this.context}),this.input.channelCount=2,this.input.channelCountMode=`explicit`,this._dryWet=this.output=new El({context:this.context,fade:e.wet}),this.wet=this._dryWet.fade,this._split=new jl({context:this.context,channels:2}),this._merge=new Ml({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),U(this,[`wet`])}connectEffectLeft(...e){this._split.connect(e[0],0,0),ac(...e),oc(e[e.length-1],this._merge,0,0)}connectEffectRight(...e){this._split.connect(e[0],1,0),ac(...e),oc(e[e.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(W.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}},Pl=class extends Nl{constructor(e){super(e),this.feedback=new uc({context:this.context,value:e.feedback,units:`normalRange`}),this._feedbackL=new G({context:this.context}),this._feedbackR=new G({context:this.context}),this._feedbackSplit=new jl({context:this.context,channels:2}),this._feedbackMerge=new Ml({context:this.context,channels:2}),this._merge.connect(this._feedbackSplit),this._feedbackMerge.connect(this._split),this._feedbackSplit.connect(this._feedbackL,0,0),this._feedbackL.connect(this._feedbackMerge,0,0),this._feedbackSplit.connect(this._feedbackR,1,0),this._feedbackR.connect(this._feedbackMerge,0,1),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),U(this,[`feedback`])}static getDefaults(){return Object.assign(Nl.getDefaults(),{feedback:.5})}dispose(){return super.dispose(),this.feedback.dispose(),this._feedbackL.dispose(),this._feedbackR.dispose(),this._feedbackSplit.dispose(),this._feedbackMerge.dispose(),this}},Fl=class e extends Pl{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`delayTime`,`depth`]);super(t),this.name=`Chorus`,this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new tl({context:this.context,frequency:t.frequency,min:0,max:1}),this._lfoR=new tl({context:this.context,frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new gc({context:this.context}),this._delayNodeR=new gc({context:this.context}),this.frequency=this._lfoL.frequency,U(this,[`frequency`]),this._lfoL.frequency.connect(this._lfoR.frequency),this.connectEffectLeft(this._delayNodeL),this.connectEffectRight(this._delayNodeR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this.depth=this._depth,this.type=t.type,this.spread=t.spread}static getDefaults(){return Object.assign(Pl.getDefaults(),{frequency:1.5,delayTime:3.5,depth:.7,type:`sine`,spread:180,feedback:0,wet:.5})}get depth(){return this._depth}set depth(e){this._depth=e;let t=this._delayTime*e;this._lfoL.min=Math.max(this._delayTime-t,0),this._lfoL.max=this._delayTime+t,this._lfoR.min=Math.max(this._delayTime-t,0),this._lfoR.max=this._delayTime+t}get delayTime(){return this._delayTime*1e3}set delayTime(e){this._delayTime=e/1e3,this.depth=this._depth}get type(){return this._lfoL.type}set type(e){this._lfoL.type=e,this._lfoR.type=e}get spread(){return this._lfoR.phase-this._lfoL.phase}set spread(e){this._lfoL.phase=90-e/2,this._lfoR.phase=e/2+90}start(e){return this._lfoL.start(e),this._lfoR.start(e),this}stop(e){return this._lfoL.stop(e),this._lfoR.stop(e),this}sync(){return this._lfoL.sync(),this._lfoR.sync(),this}unsync(){return this._lfoL.unsync(),this._lfoR.unsync(),this}dispose(){return super.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._delayNodeL.dispose(),this._delayNodeR.dispose(),this.frequency.dispose(),this}},Il=class e extends Dl{constructor(){let t=H(e.getDefaults(),arguments,[`distortion`]);super(t),this.name=`Distortion`,this._shaper=new Oc({context:this.context,length:4096}),this._distortion=t.distortion,this.connectEffect(this._shaper),this.distortion=t.distortion,this.oversample=t.oversample}static getDefaults(){return Object.assign(Dl.getDefaults(),{distortion:.4,oversample:`none`})}get distortion(){return this._distortion}set distortion(e){this._distortion=e;let t=e*100,n=Math.PI/180;this._shaper.setMap(e=>Math.abs(e)<.001?0:(3+t)*e*20*n/(Math.PI+t*Math.abs(e)))}get oversample(){return this._shaper.oversample}set oversample(e){this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.dispose(),this}},Ll=class extends Dl{constructor(e){super(e),this.name=`FeedbackEffect`,this._feedbackGain=new G({context:this.context,gain:e.feedback,units:`normalRange`}),this.feedback=this._feedbackGain.gain,U(this,`feedback`),this.effectReturn.chain(this._feedbackGain,this.effectSend)}static getDefaults(){return Object.assign(Dl.getDefaults(),{feedback:.125})}dispose(){return super.dispose(),this._feedbackGain.dispose(),this.feedback.dispose(),this}},Rl=class e extends Ll{constructor(){let t=H(e.getDefaults(),arguments,[`delayTime`,`feedback`]);super(t),this.name=`FeedbackDelay`,this._delayNode=new gc({context:this.context,delayTime:t.delayTime,maxDelay:t.maxDelay}),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),U(this,`delayTime`)}static getDefaults(){return Object.assign(Ll.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._delayNode.dispose(),this.delayTime.dispose(),this}},zl=class e extends Dl{constructor(){let t=H(e.getDefaults(),arguments,[`decay`]);super(t),this.name=`Reverb`,this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();let n=this.toSeconds(t.decay);zo(n,.001),this._decay=n;let r=this.toSeconds(t.preDelay);zo(r,0),this._preDelay=r,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(Dl.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(e){e=this.toSeconds(e),zo(e,.001),this._decay=e,this.generate()}get preDelay(){return this._preDelay}set preDelay(e){e=this.toSeconds(e),zo(e,0),this._preDelay=e,this.generate()}generate(){return es(this,void 0,void 0,function*(){let e=this.ready,t=new Ps(2,this._decay+this._preDelay,this.context.sampleRate),n=new Fc({context:t}),r=new Fc({context:t}),i=new Ml({context:t});n.connect(i,0,0),r.connect(i,0,1);let a=new G({context:t}).toDestination();i.connect(a),n.start(0),r.start(0),a.gain.setValueAtTime(0,0),a.gain.setValueAtTime(1,this._preDelay),a.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);let o=t.render();return this.ready=o.then(Ms),yield e,this._convolver.buffer=(yield o).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}},Bl=class e extends Dl{constructor(){let t=H(e.getDefaults(),arguments,[`frequency`,`depth`]);super(t),this.name=`Vibrato`,this._delayNode=new gc({context:this.context,delayTime:0,maxDelay:t.maxDelay}),this._lfo=new tl({context:this.context,type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,U(this,[`frequency`,`depth`]),this.effectSend.chain(this._delayNode,this.effectReturn)}static getDefaults(){return Object.assign(Dl.getDefaults(),{maxDelay:.005,frequency:5,depth:.1,type:`sine`})}get type(){return this._lfo.type}set type(e){this._lfo.type=e}dispose(){return super.dispose(),this._delayNode.dispose(),this._lfo.dispose(),this.frequency.dispose(),this.depth.dispose(),this}},Vl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`solo`]);super(t),this.name=`Solo`,this.input=this.output=new G({context:this.context}),e._allSolos.has(this.context)||e._allSolos.set(this.context,new Set),e._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(W.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),e._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){e._soloed.has(this.context)||e._soloed.set(this.context,new Set),e._soloed.get(this.context).add(this)}_removeSolo(){e._soloed.has(this.context)&&e._soloed.get(this.context).delete(this)}_isSoloed(){return e._soloed.has(this.context)&&e._soloed.get(this.context).has(this)}_noSolos(){return!e._soloed.has(this.context)||e._soloed.has(this.context)&&e._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()||this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),e._allSolos.get(this.context).delete(this),this._removeSolo(),this}};Vl._allSolos=new Map,Vl._soloed=new Map;var Hl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`pan`,`volume`]);super(t),this.name=`PanVol`,this._panner=this.input=new Al({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new _c({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,U(this,[`pan`,`volume`])}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}},Ul=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`volume`,`pan`]);super(t),this.name=`Channel`,this._solo=this.input=new Vl({solo:t.solo,context:this.context}),this._panVol=this.output=new Hl({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),U(this,[`pan`,`volume`])}static getDefaults(){return Object.assign(W.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(t){return e.buses.has(t)||e.buses.set(t,new G({context:this.context})),e.buses.get(t)}send(e,t=0){let n=this._getBus(e),r=new G({context:this.context,units:`decibels`,gain:t});return this.connect(r),r.connect(n),r}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}};Ul.buses=new Map;var Wl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`threshold`,`ratio`]);super(t),this.name=`Compressor`,this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new ic({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:`decibels`,value:t.threshold}),this.attack=new ic({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:`time`,value:t.attack}),this.release=new ic({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:`time`,value:t.release}),this.knee=new ic({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:`decibels`,value:t.knee}),this.ratio=new ic({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:`positive`,value:t.ratio}),U(this,[`knee`,`release`,`attack`,`ratio`,`threshold`])}static getDefaults(){return Object.assign(W.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}},Gl=class e extends W{constructor(){let t=H(e.getDefaults(),arguments,[`threshold`]);super(t),this.name=`Limiter`,this._compressor=this.input=this.output=new Wl({context:this.context,ratio:20,attack:.003,release:.01,threshold:t.threshold}),this.threshold=this._compressor.threshold,U(this,`threshold`)}static getDefaults(){return Object.assign(W.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}};function Kl(){return Ls().now()}Ls().transport;function ql(){return Ls().transport}Ls().destination,Ls().destination,Ls().listener,Ls().draw;function Jl(){return Ls().draw}Ls();function Yl(e){let t=e.numberOfChannels,n=e.length,r=new DataView(new ArrayBuffer(44+n*t*2)),i=(e,t)=>[...t].forEach((t,n)=>r.setUint8(e+n,t.charCodeAt(0)));i(0,`RIFF`),r.setUint32(4,36+n*t*2,!0),i(8,`WAVE`),i(12,`fmt `),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,t,!0),r.setUint32(24,e.sampleRate,!0),r.setUint32(28,e.sampleRate*t*2,!0),r.setUint16(32,t*2,!0),r.setUint16(34,16,!0),i(36,`data`),r.setUint32(40,n*t*2,!0);let a=[...Array(t).keys()].map(t=>e.getChannelData(t)),o=44;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let t=Math.max(-1,Math.min(1,a[n][e]));r.setInt16(o,t<0?t*32768:t*32767,!0),o+=2}return r.buffer}var Xl=[4,8,16,32],Zl=e=>e[Math.floor(Math.random()*e.length)],Ql=e=>Math.max(0,Math.min(12,e));function $l({melodyRoot:e,melodyScale:t},n){return e+Math.floor(n/t.length)*12+t[n%t.length]}function eu(e=8){return{bars:e,notes:[]}}function tu(e,t,n){let r=e.notes.findIndex(e=>e.step===t&&e.row===n);return r>=0?e.notes.splice(r,1):e.notes.push({step:t,row:n}),r<0}function nu(e){let t=ru(),n=[],r=Math.max(1,e/4);for(let i=0;i<r;i++){let a=i*4*8,o=i===r-1,s=au(t,i===0?0:.2+i%4*.1),c=au(iu(t,Zl([-2,-1,1,2])),.3);ou(c,Zl(o?[0,6,12]:[0,2,3,4,6,9])),s.forEach(e=>n.push({step:a+e.step,row:e.row})),c.forEach(e=>n.push({step:a+16+e.step,row:e.row})),e>=16&&!o&&Math.random()<.25&&n.splice(n.length-c.length,c.length)}return{bars:e,notes:n}}function ru(){let e=[0,2,3,4,6,8,10,11,12],t=3+Math.floor(Math.random()*3),n=[0,...e.slice(1).sort(()=>Math.random()-.5).slice(0,t-1)].sort((e,t)=>e-t),r=Zl([3,4,6,7,8]);return n.map(e=>{let t={step:e,row:r};return r=Ql(r+Zl([-2,-1,-1,1,1,2,3])),t})}function iu(e,t){return e.map(e=>({step:e.step,row:Ql(e.row+t)}))}function au(e,t){let n=[];return e.forEach((e,r)=>{r>0&&Math.random()<t*.5||n.push({step:e.step,row:Math.random()<t?Ql(e.row+Zl([-1,1])):e.row})}),n}function ou(e,t){e.length&&(e[e.length-1].row=t)}var su={daylight:{root:`D`,chords:[[`D2`,`A2`,`E3`,`F#3`,`C#4`],[`B1`,`F#2`,`D3`,`A3`,`C#4`],[`G1`,`D2`,`B2`,`F#3`,`A3`],[`E2`,`B2`,`D3`,`F#3`,`A3`],[`A1`,`E2`,`C#3`,`E3`,`B3`]],loops:[`F#4`,`A4`,`D5`,`E4`,`B4`,`A3`,`C#5`],piano:[`D4`,`E4`,`F#4`,`A4`,`B4`,`D5`,`E5`,`F#5`],melodyRoot:62,melodyScale:[0,2,4,7,9,11]},dusk:{root:`B`,chords:[[`B1`,`F#2`,`D3`,`A3`,`C#4`],[`G1`,`D2`,`B2`,`F#3`,`A3`],[`E2`,`B2`,`D3`,`G3`,`F#3`],[`F#1`,`C#2`,`A2`,`E3`,`B3`],[`D2`,`A2`,`C#3`,`F#3`,`E4`]],loops:[`D4`,`F#4`,`B4`,`C#5`,`A4`,`E4`,`F#5`],piano:[`B3`,`C#4`,`D4`,`F#4`,`A4`,`B4`,`C#5`,`E5`],melodyRoot:59,melodyScale:[0,2,3,5,7,10]},night:{root:`F`,chords:[[`F1`,`C2`,`A2`,`E3`,`G3`],[`A1`,`E2`,`G2`,`C3`,`B3`],[`C2`,`G2`,`B2`,`E3`,`D4`],[`D2`,`A2`,`C3`,`F3`,`E3`],[`G1`,`D2`,`A2`,`C3`,`B3`]],loops:[`A4`,`C5`,`E5`,`G4`,`B4`,`D5`,`E4`],piano:[`F4`,`G4`,`A4`,`B4`,`C5`,`E5`,`G5`,`A5`],melodyRoot:65,melodyScale:[0,2,4,6,7,11]}},cu=[`daylight`,`dusk`,`night`],lu=[{period:19.7,offset:4},{period:23.3,offset:11},{period:29.1,offset:2},{period:31.7,offset:17},{period:37.3,offset:23},{period:41.9,offset:8},{period:53.9,offset:31}],uu=[{id:`drone`,label:`drone`,on:!0,level:.8},{id:`pad`,label:`pads`,on:!0,level:.8},{id:`bells`,label:`tape bells`,on:!0,level:.8},{id:`piano`,label:`piano`,on:!1,level:.7},{id:`melody`,label:`your melody`,on:!1,level:.8},{id:`guitar`,label:`guitar swells`,on:!1,level:.75},{id:`acoustic`,label:`acoustic guitar`,on:!1,level:.7},{id:`bass`,label:`low bass`,on:!1,level:.7},{id:`rain`,label:`rain`,on:!1,level:.6}],du=600,fu=[`audio/mp4;codecs=mp4a.40.2`,`audio/mp4`,`audio/webm;codecs=opus`,`audio/webm`],pu=.45,mu={piano:{dir:`piano`,notes:[`A1`,...[2,3,4,5,6].flatMap(e=>[`C`,`D#`,`F#`,`A`].map(t=>`${t}${e}`)),`C7`]},electric:{dir:`guitar-electric`,notes:[`C#2`,`E2`,`F#2`,`A2`,`C3`,`D#3`,`F#3`,`A3`,`C4`,`D#4`,`F#4`,`A4`,`C5`,`D#5`,`F#5`,`A5`,`C6`]},acoustic:{dir:`guitar-acoustic`,notes:[`E2`,`A2`,`C3`,`D#3`,`F#3`,`A3`,`C4`,`D#4`,`F#4`,`A4`,`C5`,`D5`]}},hu={piano:`piano`,guitar:`electric`,acoustic:`acoustic`},gu=52,_u=76,vu=24,yu=40,bu=6,xu=3,Su=150,Cu=300,wu={tone:.6,space:.8,tapeAge:.35,chorus:.3,speed:.5},Tu=.5,Eu=(e,t,n)=>e+(t-e)*n,Du=e=>e[Math.floor(Math.random()*e.length)],Ou=class extends EventTarget{constructor(){super(),this.built=!1,this.playing=!1,this.volumeDb=-8,this.chordIndex=0,this.knobs={...wu},this.moodName=`daylight`,this.density=Tu,this.drift=!1,this.layers=Object.fromEntries(uu.map(({id:e,on:t,level:n})=>[e,{on:t,level:n}])),this.melody=eu(),this.melodyStep=0,this.samplers=Object.fromEntries(Object.keys(mu).map(e=>[e,[]])),this.instrumentLoads={},this.loaded={},this.melodyPlayers={}}get mood(){return su[this.moodName]}async build(){if(this.built)return;this.fader=new G(0).toDestination(),this.output=new _c(this.volumeDb).connect(this.fader);let e=new Gl(-3).connect(this.output),t=new _c(10).connect(e),n=new Wl({threshold:-24,ratio:3,attack:.3,release:1}).connect(t),r=new ml({type:`highpass`,frequency:38}).connect(n);this.post=r,this.masterFilter=new ml({type:`lowpass`,frequency:2200,rolloff:-12}).connect(r),this.masterSweep=new tl({frequency:1/180,min:1300,max:3200}).connect(this.masterFilter.frequency),this.reverb=new zl({decay:24,preDelay:.25,wet:.75}).connect(this.masterFilter),await this.reverb.ready,this.chorus=new Fl({frequency:.4,delayTime:6,depth:.6,spread:160,wet:.3}).connect(this.reverb),this.channels=Object.fromEntries(uu.map(({id:e})=>[e,new G(0)])),this.melodyLevel=new uc(0),this.buildDrone(),this.buildPad(),this.buildBells(),this.buildPiano(),this.buildElectric(),this.buildAcoustic(),this.buildBass(),this.buildRain(),this.buildHiss();let i=new Set([`piano`,this.melodyInstrument]);Object.entries(hu).forEach(([e,t])=>this.layers[e].on&&i.add(t));let a=Promise.all([...i].map(e=>this.loadInstrument(e)));await Promise.race([a,new Promise(e=>setTimeout(e,15e3))]),this.built=!0,Object.entries(this.knobs).forEach(([e,t])=>this.setKnob(e,t)),Object.entries(this.layers).forEach(([e,t])=>this.setLayer(e,t))}buildDrone(){let e=new G(.5).connect(this.reverb);this.channels.drone.connect(e),this.droneBreath=new tl({frequency:1/47,min:.25,max:.6}).connect(e.gain);let t=this.mood.root;this.drones=[new Hc({frequency:`${t}2`,type:`sine`,volume:-20}),new Hc({frequency:ec(`${t}2`).transpose(7),type:`sine`,volume:-26,detune:4}),new Hc({frequency:`${t}3`,type:`triangle`,volume:-34,detune:-6})],this.drones.forEach(e=>e.connect(this.channels.drone))}buildPad(){this.padWobble=new Bl({frequency:.2,depth:.02}).connect(this.chorus);let e=new ml({type:`lowpass`,frequency:700,Q:.3}).connect(this.padWobble);this.channels.pad.connect(e),this.padSweep=new tl({frequency:1/61,min:350,max:1100}).connect(e.frequency),this.pad=new Sl(dl,{maxPolyphony:16,volume:-24,oscillator:{type:`fatsawtooth`,count:3,spread:18},envelope:{attack:7,decay:3,sustain:.8,release:14}}).connect(this.channels.pad)}buildBells(){this.delay=new Rl({delayTime:1.37,maxDelay:2,feedback:.35,wet:.25}).connect(this.chorus),this.bellWobble=new Bl({frequency:.3,depth:.04}).connect(this.delay),this.bellTone=new ml({type:`lowpass`,frequency:1800}).connect(this.bellWobble),this.channels.bells.connect(this.bellTone),this.bells=new Sl(_l,{maxPolyphony:10,volume:-10,harmonicity:2,modulationIndex:1.2,oscillator:{type:`sine`},modulation:{type:`sine`},envelope:{attack:1.2,decay:4,sustain:.15,release:9},modulationEnvelope:{attack:.8,decay:3,sustain:.1,release:6}}).connect(this.channels.bells)}sampler(e,t){let n=new Cl({urls:{},...t});return this.samplers[e].push(n),n}loadInstrument(e){return this.instrumentLoads[e]??=new Promise(t=>{let{dir:n,notes:r}=mu[e],i=new bc({urls:Object.fromEntries(r.map(e=>[e,`${e.replace(`#`,`s`)}.mp3`])),baseUrl:`./${n}/`,onload:()=>{this.samplers[e].forEach(e=>r.forEach(t=>e.add(t,i.get(t)))),this.loaded[e]=!0,t()}})}),this.instrumentLoads[e]}buildMelodyBus(e,t){let n=new G(0).connect(t);return this.melodyLevel.connect(n.gain),this.sampler(e,e===`electric`?{attack:.35,release:4,volume:-6}:{release:2.5,volume:-4}).connect(n)}buildPiano(){let e=new Rl({delayTime:.61,feedback:.22,wet:1}).connect(this.reverb);this.pianoTone=new ml({type:`lowpass`,frequency:3e3,rolloff:-12}),this.pianoDry=new G(.55).connect(this.post),this.pianoWet=new G(.6).connect(this.reverb);let t=new G(.15).connect(e);this.pianoTone.fan(this.pianoDry,this.pianoWet,t),this.channels.piano.connect(this.pianoTone),this.piano=this.sampler(`piano`,{release:2.5,volume:-4}).connect(this.channels.piano),this.melodyPlayers.piano=this.buildMelodyBus(`piano`,this.pianoTone)}buildElectric(){let e=new Rl({delayTime:.92,maxDelay:2,feedback:.62,wet:1}),t=new ml({type:`lowpass`,frequency:1800}).connect(this.reverb);e.connect(t);let n=new Bl({frequency:.25,depth:.05});this.electricWobble=n;let r=new Il({distortion:.15,wet:.35}).connect(n);this.electricIn=new ml({type:`lowpass`,frequency:3200}).connect(r),n.fan(new G(.2).connect(this.post),new G(.9).connect(this.reverb),new G(.55).connect(e),new G(.3).connect(this.chorus)),this.channels.guitar.connect(this.electricIn),this.electric=this.sampler(`electric`,{attack:1.8,release:5,volume:-4}).connect(this.channels.guitar),this.melodyPlayers.electric=this.buildMelodyBus(`electric`,this.electricIn)}buildAcoustic(){this.acousticIn=new ml({type:`lowpass`,frequency:4200});let e=new Bl({frequency:.3,depth:.03});this.acousticWobble=e,this.acousticIn.connect(e),e.fan(new G(.45).connect(this.post),new G(.8).connect(this.reverb)),this.channels.acoustic.connect(this.acousticIn),this.acoustic=this.sampler(`acoustic`,{release:2,volume:-6}).connect(this.channels.acoustic),this.melodyPlayers.acoustic=this.buildMelodyBus(`acoustic`,this.acousticIn)}buildBass(){let e=new ml({type:`lowpass`,frequency:260,Q:.5}).connect(this.masterFilter),t=new G(.25).connect(this.reverb);this.channels.bass.fan(e,t),this.bass=new gl({volume:-10,oscillator:{type:`triangle`},envelope:{attack:3.5,decay:2,sustain:.85,release:9},filterEnvelope:{attack:4,decay:2,sustain:.6,release:8,baseFrequency:90,octaves:1.5}}).connect(this.channels.bass)}buildRain(){let e=new G(.35).connect(this.reverb),t=new G(.65).connect(this.masterFilter),n=new G(.7);n.fan(t,e),this.rainGusts=new tl({frequency:1/17,min:.45,max:1}).connect(n.gain);let r=new ml({type:`bandpass`,frequency:1400,Q:.35}).connect(n),i=new ml({type:`highpass`,frequency:4e3}).connect(new G(.35).connect(n));this.channels.rain.fan(r,i),this.rain=new Fc({type:`pink`,volume:-20}).connect(this.channels.rain)}buildHiss(){let e=new kl({frequency:1/23,baseFrequency:400,octaves:2}).connect(this.masterFilter),t=new ml({type:`highpass`,frequency:300}).connect(e);this.hiss=new Fc({type:`pink`,volume:-44}).connect(t),this.hissFilter=e}startVoices(e=ql()){[this.masterSweep,this.droneBreath,this.padSweep,this.rainGusts].forEach(e=>e.start()),this.drones.forEach(e=>e.start()),this.hiss.start(),this.rain.start(),this.hissFilter.start(),this.chorus.start(),this.loops=lu.map(({period:e,offset:t},n)=>{let r=new Tl(e=>{if(Math.random()<Eu(.5,.05,this.density))return;let t=this.mood.loops[n],r=.2+Math.random()*.25;this.bells.triggerAttackRelease(t,2.5,e,r),this.layers.bells.on&&this.emitAt(e,`note`,{layer:`bells`,note:t,velocity:r})},e);return r.playbackRate=this.speedRate(),r.start(t),r}),this.melodyLoop=new Tl(e=>{let t=this.melody.bars*8,n=this.melodyStep%t;this.melodyStep=n+1,this.layers.melody.on&&(this.emitAt(e,`step`,{step:n}),this.melody.notes.forEach(({step:t,row:r})=>{if(t!==n)return;let i=(t%8==0?.55:.42)+Math.random()*.1,a=ec($l(this.mood,r),`midi`).toNote();this.loaded[this.melodyInstrument]&&(this.melodyPlayers[this.melodyInstrument].triggerAttackRelease(a,pu*6,e+Math.random()*.015,i),this.emitAt(e,`note`,{layer:`melody`,note:a,velocity:i}))}))},pu),this.melodyLoop.playbackRate=this.speedRate(),this.melodyLoop.start(0),this.scheduleChord(e,0),this.schedulePhrase(e,8),e.start()}scheduleChord(e,t){e.scheduleOnce(t=>{let n=this.mood.chords,r=n[this.chordIndex%n.length],i=Eu(vu,yu,Math.random())/this.speedRate();this.pad.triggerAttackRelease(r,i,t,.5);let a=ec(r[0]);this.bass.triggerAttackRelease(a.toMidi()>33?a.transpose(-12):a,i-2,t,.6),this.emitAt(t,`chord`,{chord:r}),this.playGuitars(r,t,i),this.chordIndex=this.nextChordIndex(n.length),this.scheduleChord(e,e.getSecondsAtTime(t)+i-4)},t)}playGuitars(e,t,n){let r=ku(e),i=this.speedRate();if(this.layers.guitar.on&&this.loaded.electric){let e=2+Math.floor(Math.random()*(1+this.density*2)),a=t+Math.random()*2;for(let o=0;o<e&&a<t+n-4;o++){let e=Du(r),t=.35+Math.random()*.25;this.electric.triggerAttackRelease(e,3.5,a,t),this.emitAt(a,`note`,{layer:`guitar`,note:e,velocity:t}),a+=Eu(4,9,Math.random())/i}}if(this.layers.acoustic.on&&this.loaded.acoustic){let e=Math.random()<.3+this.density*.5?2:1;for(let a=0;a<e;a++){let e=t+1+n/2*a;r.slice(0,3+Math.floor(Math.random()*3)).forEach((t,n)=>{let r=(n===0?.5:.35)+Math.random()*.15;this.acoustic.triggerAttackRelease(t,3,e,r),this.emitAt(e,`note`,{layer:`acoustic`,note:t,velocity:r}),e+=Eu(.45,.8,Math.random())/i})}}}schedulePhrase(e,t){e.scheduleOnce(t=>{let n=this.mood.piano,r=Math.floor(Math.random()*n.length),i=t,a=2+Math.floor(Math.random()*(2+this.density*3));for(let e=0;e<a;e++){let e=n[r],t=.25+Math.random()*.3;this.piano.triggerAttackRelease(e,2.5,i,t),Math.random()<.25&&r>=2&&this.piano.triggerAttackRelease(n[r-2],2.5,i+.03,t*.7),this.layers.piano.on&&this.emitAt(i,`note`,{layer:`piano`,note:e,velocity:t}),r=Math.max(0,Math.min(n.length-1,r+Du([-2,-1,-1,1,1,2]))),i+=Eu(.7,1.6,Math.random())/this.speedRate()}let o=Eu(16,5,this.density)+Math.random()*8;this.schedulePhrase(e,e.getSecondsAtTime(i)+o/this.speedRate())},t)}nextChordIndex(e){let t=this.chordIndex;for(;t===this.chordIndex;)t=Math.floor(Math.random()*e);return t}async play(){await zs(),await this.build(),this.loops?ql().start():this.startVoices(),this.fader.gain.cancelScheduledValues(Kl()),this.fader.gain.linearRampTo(1,bu),this.playing=!0,this.scheduleDrift()}pause(){this.playing&&(this.playing=!1,clearTimeout(this.driftTimer),this.fader.gain.cancelScheduledValues(Kl()),this.fader.gain.linearRampTo(0,bu/2),this.pauseTimer=setTimeout(()=>{this.playing||ql().pause()},bu/2*1e3))}setLayer(e,{on:t=this.layers[e].on,level:n=this.layers[e].level}={}){if(this.layers[e]={on:t,level:n},!this.built)return;t&&hu[e]&&this.loadInstrument(hu[e]);let r=t?n*n:0,i=e===`melody`?this.melodyLevel:this.channels[e].gain;i.cancelScheduledValues(Kl()),i.rampTo(r,xu),this.emit(`layer`,{id:e,on:t,level:n})}setMood(e){if(su[e]&&e!==this.moodName){if(this.moodName=e,this.built){let e=ec(`${this.mood.root}2`);[e,e.transpose(7),e.transpose(12)].forEach((e,t)=>this.drones[t].frequency.rampTo(e,8))}this.emit(`mood`,{name:e})}}setMelody(e){this.melody=e,this.melodyStep=0,this.emit(`melody`,{melody:e})}previewNote(e){if(!this.built)return;let t=ec($l(this.mood,e),`midi`).toNote();this.loaded[this.melodyInstrument]&&this.melodyPlayers[this.melodyInstrument].triggerAttackRelease(t,1.5,Kl(),.45)}get melodyInstrument(){return mu[this.melody.instrument]?this.melody.instrument:`piano`}setMelodyInstrument(e){mu[e]&&(this.melody.instrument=e,this.built&&this.loadInstrument(e),this.emit(`melody`,{melody:this.melody}))}setDensity(e){this.density=e,this.emit(`density`,{value:e})}setDrift(e){this.drift=e,e?this.scheduleDrift():clearTimeout(this.driftTimer)}scheduleDrift(){if(clearTimeout(this.driftTimer),!this.drift||!this.playing)return;let e=Eu(Su,Cu,Math.random());this.driftTimer=setTimeout(()=>{let e=cu[(cu.indexOf(this.moodName)+Du([-1,1])+cu.length)%cu.length];this.setMood(e),this.setDensity(Math.min(1,Math.max(0,this.density+Du([-.15,.15])))),this.scheduleDrift()},e*1e3)}setKnob(e,t){if(this.knobs[e]=t,!this.built)return;let n=.5;switch(e){case`tone`:this.masterSweep.min=Eu(700,2600,t),this.masterSweep.max=Eu(1600,8e3,t),this.padSweep.min=Eu(250,600,t),this.padSweep.max=Eu(700,2600,t),this.bellTone.frequency.rampTo(Eu(1e3,5500,t),n),this.pianoTone.frequency.rampTo(Eu(900,4200,t),n);break;case`space`:this.reverb.wet.rampTo(Eu(.45,.97,t),n),this.delay.wet.rampTo(Eu(.12,.45,t),n),this.pianoDry.gain.rampTo(Eu(.7,.18,t),n),this.pianoWet.gain.rampTo(Eu(.5,1.2,t),n);break;case`tapeAge`:this.electricWobble.depth.rampTo(Eu(.01,.12,t),n),this.acousticWobble.depth.rampTo(Eu(0,.08,t),n),this.bellWobble.depth.rampTo(Eu(0,.16,t),n),this.padWobble.depth.rampTo(Eu(0,.06,t),n),this.hiss.volume.rampTo(Eu(-62,-32,t),n);break;case`chorus`:this.chorus.wet.rampTo(Eu(0,.85,t),n);break;case`speed`:this.loops?.forEach(e=>{e.playbackRate=this.speedRate()}),this.melodyLoop&&(this.melodyLoop.playbackRate=this.speedRate())}}speedRate(){return Eu(.5,1.5,this.knobs.speed)}setVolume(e){this.volumeDb=e,this.output&&this.output.volume.rampTo(e,.3)}startRecording(){if(!this.built||this.recorder)return!1;let e=fu.find(e=>window.MediaRecorder?.isTypeSupported(e));if(!e)return!1;let t=Ls().rawContext;this.recordTap??=t.createMediaStreamDestination(),this.fader.connect(this.recordTap);let n=[];return this.recorder=new MediaRecorder(this.recordTap.stream,{mimeType:e,audioBitsPerSecond:192e3}),this.recorder.ondataavailable=e=>e.data.size&&n.push(e.data),this.recordDone=new Promise(t=>{this.recorder.onstop=()=>t({blob:new Blob(n,{type:e}),extension:e.includes(`mp4`)?`m4a`:`webm`})}),this.recorder.start(1e3),this.recordStarted=performance.now(),!0}async stopRecording(){if(!this.recorder)return null;this.recorder.stop();let e=await this.recordDone,t=(performance.now()-this.recordStarted)/1e3;if(this.fader.disconnect(this.recordTap),this.recorder=null,t>du)return e;try{let t=await Ls().rawContext.decodeAudioData(await e.blob.arrayBuffer());return{blob:new Blob([Yl(t)],{type:`audio/wav`}),extension:`wav`}}catch{return e}}get recording(){return!!this.recorder}emitAt(e,t,n){Jl().schedule(()=>this.emit(t,n),e)}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))}};function ku(e){let t=e.map(e=>{let t=ec(e).toMidi();for(;t<gu;)t+=12;for(;t>_u;)t-=12;return t});return[...new Set(t)].sort((e,t)=>e-t).map(e=>ec(e,`midi`).toNote())}var Au=1e3,ju=1001,Mu=1002,Nu=1003,Pu=1004,Fu=1005,Iu=1006,Lu=1007,Ru=1008,zu=1009,Bu=1010,Vu=1011,Hu=1012,Uu=1013,Wu=1014,Gu=1015,Ku=1016,qu=1017,Ju=1018,Yu=1020,Xu=35902,Zu=35899,Qu=1021,$u=1022,ed=1023,td=1026,nd=1027,rd=1028,id=1029,ad=1030,od=1031,sd=1033,cd=33776,ld=33777,ud=33778,dd=33779,fd=35840,pd=35841,md=35842,hd=35843,gd=36196,_d=37492,vd=37496,yd=37488,bd=37489,xd=37490,Sd=37491,Cd=37808,wd=37809,Td=37810,Ed=37811,Dd=37812,Od=37813,kd=37814,Ad=37815,jd=37816,Md=37817,Nd=37818,Pd=37819,Fd=37820,Id=37821,Ld=36492,Rd=36494,zd=36495,Bd=36283,Vd=36284,Hd=36285,Ud=36286,Wd=2300,Gd=2301,Kd=2302,qd=2303,Jd=2400,Yd=2401,Xd=2402,Zd=3200,Qd=`srgb`,$d=`srgb-linear`,ef=`linear`,tf=`srgb`,nf=7680,rf=35044,af=2e3;function of(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function cf(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function lf(){let e=cf(`canvas`);return e.style.display=`block`,e}var uf={};function df(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ff(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function K(...e){e=ff(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function q(...e){e=ff(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pf(...e){let t=e.join(` `);t in uf||(uf[t]=!0,K(...e))}function mf(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var hf={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},gf=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},_f=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),vf=1234567,yf=Math.PI/180,bf=180/Math.PI;function xf(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_f[e&255]+_f[e>>8&255]+_f[e>>16&255]+_f[e>>24&255]+`-`+_f[t&255]+_f[t>>8&255]+`-`+_f[t>>16&15|64]+_f[t>>24&255]+`-`+_f[n&63|128]+_f[n>>8&255]+`-`+_f[n>>16&255]+_f[n>>24&255]+_f[r&255]+_f[r>>8&255]+_f[r>>16&255]+_f[r>>24&255]).toLowerCase()}function Sf(e,t,n){return Math.max(t,Math.min(n,e))}function Cf(e,t){return(e%t+t)%t}function wf(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Tf(e,t,n){return e===t?0:(n-e)/(t-e)}function Ef(e,t,n){return(1-n)*e+n*t}function Df(e,t,n,r){return Ef(e,t,1-Math.exp(-n*r))}function Of(e,t=1){return t-Math.abs(Cf(e,t*2)-t)}function kf(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Af(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function jf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Mf(e,t){return e+Math.random()*(t-e)}function Nf(e){return e*(.5-Math.random())}function Pf(e){e!==void 0&&(vf=e);let t=vf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ff(e){return e*yf}function If(e){return e*bf}function Lf(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Rf(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function zf(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Bf(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:K(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Vf(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Hf(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Uf={DEG2RAD:yf,RAD2DEG:bf,generateUUID:xf,clamp:Sf,euclideanModulo:Cf,mapLinear:wf,inverseLerp:Tf,lerp:Ef,damp:Df,pingpong:Of,smoothstep:kf,smootherstep:Af,randInt:jf,randFloat:Mf,randFloatSpread:Nf,seededRandom:Pf,degToRad:Ff,radToDeg:If,isPowerOfTwo:Lf,ceilPowerOfTwo:Rf,floorPowerOfTwo:zf,setQuaternionFromProperEuler:Bf,normalize:Hf,denormalize:Vf},J=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Sf(this.x,e.x,t.x),this.y=Sf(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Sf(this.x,e,t),this.y=Sf(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Sf(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sf(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wf=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:K(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sf(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Sf(this.x,e.x,t.x),this.y=Sf(this.y,e.y,t.y),this.z=Sf(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Sf(this.x,e,t),this.y=Sf(this.y,e,t),this.z=Sf(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Sf(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sf(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gf=new Y,Kf=new Wf,X=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return pf(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(qf.makeScale(e,t)),this}rotate(e){return pf(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(qf.makeRotation(-e)),this}translate(e,t){return pf(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(qf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qf=new X,Jf=new X().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new X().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){let e={enabled:!0,workingColorSpace:$d,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Qf(e.r),e.g=Qf(e.g),e.b=Qf(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=$f(e.r),e.g=$f(e.g),e.b=$f(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ef:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return pf(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return pf(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[$d]:{primaries:t,whitePoint:r,transfer:ef,toXYZ:Jf,fromXYZ:Yf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qd},outputColorSpaceConfig:{drawingBufferColorSpace:Qd}},[Qd]:{primaries:t,whitePoint:r,transfer:tf,toXYZ:Jf,fromXYZ:Yf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qd}}}),e}var Zf=Xf();function Qf(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function $f(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ep,tp=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ep===void 0&&(ep=cf(`canvas`)),ep.width=e.width,ep.height=e.height;let t=ep.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ep}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=cf(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Qf(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Qf(t[e]/255)*255):t[e]=Qf(t[e]);return{data:t,width:e.width,height:e.height}}return K(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},np=0,rp=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=xf(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ip(r[t].image)):e.push(ip(r[t]))}else e=ip(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ip(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?tp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(K(`Texture: Unable to serialize Texture.`),{})}var ap=0,op=new Y,sp=class e extends gf{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ju,i=ju,a=Iu,o=Ru,s=ed,c=zu,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=xf(),this.name=``,this.source=new rp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(op).x}get height(){return this.source.getSize(op).y}get depth(){return this.source.getSize(op).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){K(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?K(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Au:e.x-=Math.floor(e.x);break;case ju:e.x=e.x<0?0:1;break;case Mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Au:e.y-=Math.floor(e.y);break;case ju:e.y=e.y<0?0:1;break;case Mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sp.DEFAULT_IMAGE=null,sp.DEFAULT_MAPPING=300,sp.DEFAULT_ANISOTROPY=1;var cp=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Sf(this.x,e.x,t.x),this.y=Sf(this.y,e.y,t.y),this.z=Sf(this.z,e.z,t.z),this.w=Sf(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Sf(this.x,e,t),this.y=Sf(this.y,e,t),this.z=Sf(this.z,e,t),this.w=Sf(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Sf(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lp=class extends gf{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Iu,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new cp(0,0,e,t),this.scissorTest=!1,this.viewport=new cp(0,0,e,t),this.textures=[];let r=new sp({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Iu,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new rp(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},up=class extends lp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dp=class extends sp{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nu,this.minFilter=Nu,this.wrapR=ju,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},fp=class extends sp{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nu,this.minFilter=Nu,this.wrapR=ju,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},pp=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/mp.setFromMatrixColumn(e,0).length(),i=1/mp.setFromMatrixColumn(e,1).length(),a=1/mp.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,n){let r=this.elements;return bp.subVectors(e,t),bp.lengthSq()===0&&(bp.z=1),bp.normalize(),vp.crossVectors(n,bp),vp.lengthSq()===0&&(Math.abs(n.z)===1?bp.x+=1e-4:bp.z+=1e-4,bp.normalize(),vp.crossVectors(n,bp)),vp.normalize(),yp.crossVectors(bp,vp),r[0]=vp.x,r[4]=yp.x,r[8]=bp.x,r[1]=vp.y,r[5]=yp.y,r[9]=bp.y,r[2]=vp.z,r[6]=yp.z,r[10]=bp.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*ee+c*F,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*ee+f*F,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*ee+g*F,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*ee+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=mp.set(r[0],r[1],r[2]).length(),o=mp.set(r[4],r[5],r[6]).length(),s=mp.set(r[8],r[9],r[10]).length();i<0&&(a=-a),hp.copy(this);let c=1/a,l=1/o,u=1/s;return hp.elements[0]*=c,hp.elements[1]*=c,hp.elements[2]*=c,hp.elements[4]*=l,hp.elements[5]*=l,hp.elements[6]*=l,hp.elements[8]*=u,hp.elements[9]*=u,hp.elements[10]*=u,t.setFromRotationMatrix(hp),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=af,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=af,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},mp=new Y,hp=new pp,gp=new Y(0,0,0),_p=new Y(1,1,1),vp=new Y,yp=new Y,bp=new Y,xp=new pp,Sp=new Wf,Cp=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Sf(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Sf(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Sf(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Sf(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Sf(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Sf(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:K(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cp.DEFAULT_ORDER=`XYZ`;var wp=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Tp=0,Ep=new Y,Dp=new Wf,Op=new pp,kp=new Y,Ap=new Y,jp=new Y,Mp=new Wf,Np=new Y(1,0,0),Pp=new Y(0,1,0),Fp=new Y(0,0,1),Ip={type:`added`},Lp={type:`removed`},Rp={type:`childadded`,child:null},zp={type:`childremoved`,child:null},Bp=class e extends gf{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=xf(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new Cp,r=new Wf,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pp},normalMatrix:{value:new X}}),this.matrix=new pp,this.matrixWorld=new pp,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dp.setFromAxisAngle(e,t),this.quaternion.multiply(Dp),this}rotateOnWorldAxis(e,t){return Dp.setFromAxisAngle(e,t),this.quaternion.premultiply(Dp),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(Pp,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,t){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(Pp,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Op.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kp.copy(e):kp.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ap.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Op.lookAt(Ap,kp,this.up):Op.lookAt(kp,Ap,this.up),this.quaternion.setFromRotationMatrix(Op),r&&(Op.extractRotation(r.matrixWorld),Dp.setFromRotationMatrix(Op),this.quaternion.premultiply(Dp.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(q(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),Rp.child=e,this.dispatchEvent(Rp),Rp.child=null):q(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp),zp.child=e,this.dispatchEvent(zp),zp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Op.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Op.multiply(e.parent.matrixWorld)),e.applyMatrix4(Op),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),Rp.child=e,this.dispatchEvent(Rp),Rp.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ap,e,jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ap,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Bp.DEFAULT_UP=new Y(0,1,0),Bp.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bp.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vp=class extends Bp{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Hp={type:`move`},Up=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vp,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vp,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vp,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vp;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gp={h:0,s:0,l:0},Kp={h:0,s:0,l:0};function qp(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qd){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zf.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Zf.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zf.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Zf.workingColorSpace){if(e=Cf(e,1),t=Sf(t,0,1),n=Sf(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=qp(i,r,e+1/3),this.g=qp(i,r,e),this.b=qp(i,r,e-1/3)}return Zf.colorSpaceToWorking(this,r),this}setStyle(e,t=Qd){function n(t){t!==void 0&&parseFloat(t)<1&&K(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:K(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);K(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qd){let n=Wp[e.toLowerCase()];return n===void 0?K(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qf(e.r),this.g=Qf(e.g),this.b=Qf(e.b),this}copyLinearToSRGB(e){return this.r=$f(e.r),this.g=$f(e.g),this.b=$f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qd){return Zf.workingToColorSpace(Jp.copy(this),e),Math.round(Sf(Jp.r*255,0,255))*65536+Math.round(Sf(Jp.g*255,0,255))*256+Math.round(Sf(Jp.b*255,0,255))}getHexString(e=Qd){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zf.workingColorSpace){Zf.workingToColorSpace(Jp.copy(this),t);let n=Jp.r,r=Jp.g,i=Jp.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Zf.workingColorSpace){return Zf.workingToColorSpace(Jp.copy(this),t),e.r=Jp.r,e.g=Jp.g,e.b=Jp.b,e}getStyle(e=Qd){Zf.workingToColorSpace(Jp.copy(this),e);let t=Jp.r,n=Jp.g,r=Jp.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Gp),this.setHSL(Gp.h+e,Gp.s+t,Gp.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gp),e.getHSL(Kp);let n=Ef(Gp.h,Kp.h,t),r=Ef(Gp.s,Kp.s,t),i=Ef(Gp.l,Kp.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jp=new Z;Z.NAMES=Wp;var Yp=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new Z(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Xp=class extends Bp{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cp,this.environmentIntensity=1,this.environmentRotation=new Cp,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zp=new Y,Qp=new Y,$p=new Y,em=new Y,tm=new Y,nm=new Y,rm=new Y,im=new Y,am=new Y,om=new Y,sm=new cp,cm=new cp,lm=new cp,um=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zp.subVectors(e,t),r.cross(Zp);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Zp.subVectors(r,t),Qp.subVectors(n,t),$p.subVectors(e,t);let a=Zp.dot(Zp),o=Zp.dot(Qp),s=Zp.dot($p),c=Qp.dot(Qp),l=Qp.dot($p),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,em)!==null&&em.x>=0&&em.y>=0&&em.x+em.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,em)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,em.x),s.addScaledVector(a,em.y),s.addScaledVector(o,em.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return sm.setScalar(0),cm.setScalar(0),lm.setScalar(0),sm.fromBufferAttribute(e,t),cm.fromBufferAttribute(e,n),lm.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sm,i.x),a.addScaledVector(cm,i.y),a.addScaledVector(lm,i.z),a}static isFrontFacing(e,t,n,r){return Zp.subVectors(n,t),Qp.subVectors(e,t),Zp.cross(Qp).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zp.subVectors(this.c,this.b),Qp.subVectors(this.a,this.b),Zp.cross(Qp).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;tm.subVectors(r,n),nm.subVectors(i,n),im.subVectors(e,n);let s=tm.dot(im),c=nm.dot(im);if(s<=0&&c<=0)return t.copy(n);am.subVectors(e,r);let l=tm.dot(am),u=nm.dot(am);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(tm,a);om.subVectors(e,i);let f=tm.dot(om),p=nm.dot(om);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(nm,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return rm.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(rm,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(tm,a).addScaledVector(nm,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dm=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pm.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pm.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,pm):pm.fromBufferAttribute(r,t),pm.applyMatrix4(e.matrixWorld),this.expandByPoint(pm);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),mm.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),mm.copy(e.boundingBox)),mm.applyMatrix4(e.matrixWorld),this.union(mm)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pm),pm.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xm),Sm.subVectors(this.max,xm),hm.subVectors(e.a,xm),gm.subVectors(e.b,xm),_m.subVectors(e.c,xm),vm.subVectors(gm,hm),ym.subVectors(_m,gm),bm.subVectors(hm,_m);let t=[0,-vm.z,vm.y,0,-ym.z,ym.y,0,-bm.z,bm.y,vm.z,0,-vm.x,ym.z,0,-ym.x,bm.z,0,-bm.x,-vm.y,vm.x,0,-ym.y,ym.x,0,-bm.y,bm.x,0];return!Tm(t,hm,gm,_m,Sm)||(t=[1,0,0,0,1,0,0,0,1],!Tm(t,hm,gm,_m,Sm))?!1:(Cm.crossVectors(vm,ym),t=[Cm.x,Cm.y,Cm.z],Tm(t,hm,gm,_m,Sm))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pm).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pm).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fm[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fm[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fm[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fm[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fm[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fm[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fm[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fm[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fm)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fm=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],pm=new Y,mm=new dm,hm=new Y,gm=new Y,_m=new Y,vm=new Y,ym=new Y,bm=new Y,xm=new Y,Sm=new Y,Cm=new Y,wm=new Y;function Tm(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){wm.fromArray(e,a);let o=i.x*Math.abs(wm.x)+i.y*Math.abs(wm.y)+i.z*Math.abs(wm.z),s=t.dot(wm),c=n.dot(wm),l=r.dot(wm);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Em=new Y,Dm=new J,Om=0,km=class extends gf{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=rf,this.updateRanges=[],this.gpuType=Gu,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dm.fromBufferAttribute(this,t),Dm.applyMatrix3(e),this.setXY(t,Dm.x,Dm.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Em.fromBufferAttribute(this,t),Em.applyMatrix3(e),this.setXYZ(t,Em.x,Em.y,Em.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Em.fromBufferAttribute(this,t),Em.applyMatrix4(e),this.setXYZ(t,Em.x,Em.y,Em.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Em.fromBufferAttribute(this,t),Em.applyNormalMatrix(e),this.setXYZ(t,Em.x,Em.y,Em.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Em.fromBufferAttribute(this,t),Em.transformDirection(e),this.setXYZ(t,Em.x,Em.y,Em.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vf(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Hf(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vf(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hf(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vf(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hf(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vf(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hf(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vf(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hf(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Hf(t,this.array),n=Hf(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Hf(t,this.array),n=Hf(n,this.array),r=Hf(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Hf(t,this.array),n=Hf(n,this.array),r=Hf(r,this.array),i=Hf(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Am=class extends km{constructor(e,t,n){super(new Uint16Array(e),t,n)}},jm=class extends km{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Mm=class extends km{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nm=new dm,Pm=new Y,Fm=new Y,Im=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Nm.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pm.subVectors(e,this.center);let t=Pm.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Pm,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pm.copy(e.center).add(Fm)),this.expandByPoint(Pm.copy(e.center).sub(Fm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lm=0,Rm=new pp,zm=new Bp,Bm=new Y,Vm=new dm,Hm=new dm,Um=new Y,Wm=class e extends gf{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=xf(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(of(e)?jm:Am)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new X().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rm.makeRotationFromQuaternion(e),this.applyMatrix4(Rm),this}rotateX(e){return Rm.makeRotationX(e),this.applyMatrix4(Rm),this}rotateY(e){return Rm.makeRotationY(e),this.applyMatrix4(Rm),this}rotateZ(e){return Rm.makeRotationZ(e),this.applyMatrix4(Rm),this}translate(e,t,n){return Rm.makeTranslation(e,t,n),this.applyMatrix4(Rm),this}scale(e,t,n){return Rm.makeScale(e,t,n),this.applyMatrix4(Rm),this}lookAt(e){return zm.lookAt(e),zm.updateMatrix(),this.applyMatrix4(zm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bm).negate(),this.translate(Bm.x,Bm.y,Bm.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Mm(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&K(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dm);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)q(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vm.setFromBufferAttribute(n),this.morphTargetsRelative?(Um.addVectors(this.boundingBox.min,Vm.min),this.boundingBox.expandByPoint(Um),Um.addVectors(this.boundingBox.max,Vm.max),this.boundingBox.expandByPoint(Um)):(this.boundingBox.expandByPoint(Vm.min),this.boundingBox.expandByPoint(Vm.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&q(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Im);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)q(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);else if(e){let n=this.boundingSphere.center;if(Vm.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Hm.setFromBufferAttribute(n),this.morphTargetsRelative?(Um.addVectors(Vm.min,Hm.min),Vm.expandByPoint(Um),Um.addVectors(Vm.max,Hm.max),Vm.expandByPoint(Um)):(Vm.expandByPoint(Hm.min),Vm.expandByPoint(Hm.max))}Vm.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Um.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Um));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Um.fromBufferAttribute(a,t),o&&(Bm.fromBufferAttribute(e,t),Um.add(Bm)),r=Math.max(r,n.distanceToSquared(Um))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&q(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){q(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new km(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new J,f=new J,p=new J,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new km(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Um.fromBufferAttribute(e,t),Um.normalize(),e.setXYZ(t,Um.x,Um.y,Um.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new km(a,r,i)}if(this.index===null)return K(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Gm=new Y,Km=new Y,qm=new X,Jm=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gm.subVectors(n,t).cross(Km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gm),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qm.getNormalMatrix(e),r=this.coplanarPoint(Gm).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ym=0,Xm=class extends gf{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=xf(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nf,this.stencilZFail=nf,this.stencilZPass=nf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){K(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?K(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Jm().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new J().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Zm=new Y,Qm=new Y,$m=new Y,eh=new Y,th=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zm)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zm.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zm.copy(this.origin).addScaledVector(this.direction,t),Zm.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qm.copy(e).add(t).multiplyScalar(.5),$m.copy(t).sub(e).normalize(),eh.copy(this.origin).sub(Qm);let i=e.distanceTo(t)*.5,a=-this.direction.dot($m),o=eh.dot(this.direction),s=-eh.dot($m),c=eh.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qm).addScaledVector($m,d),f}intersectSphere(e,t){if(e.radius<0)return null;Zm.subVectors(e.center,this.origin);let n=Zm.dot(this.direction),r=Zm.dot(Zm)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zm)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,P=C/w,F=1/w,te=T-N*D,ne=E-P*D,re=O-N*A,ie=k-P*A,I=j-N*M,ae=ee-P*M,oe=I*ie-ae*re,se=te*ae-ne*I,ce=re*ne-ie*te;if(r){if(oe<0||se<0||ce<0)return null}else if((oe<0||se<0||ce<0)&&(oe>0||se>0||ce>0))return null;let le=oe+se+ce;if(le===0)return null;let ue=F*(oe*D+se*A+ce*M);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nh=class extends Xm{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cp,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rh=new pp,ih=new th,ah=new Im,oh=new Y,sh=new Y,ch=new Y,lh=new Y,uh=new Y,dh=new Y,fh=new Y,ph=new Y,mh=class extends Bp{constructor(e=new Wm,t=new nh){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){dh.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(uh.fromBufferAttribute(s,e),a?dh.addScaledVector(uh,r):dh.addScaledVector(uh.sub(t),r))}t.add(dh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ah.copy(n.boundingSphere),ah.applyMatrix4(i),ih.copy(e.ray).recast(e.near),!(ah.containsPoint(ih.origin)===!1&&(ih.intersectSphere(ah,oh)===null||ih.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(rh.copy(i).invert(),ih.copy(e.ray).applyMatrix4(rh),(n.boundingBox===null||ih.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ih)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=gh(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=gh(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=gh(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=gh(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function hh(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ph.copy(s),ph.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ph);return l<n.near||l>n.far?null:{distance:l,point:ph.clone(),object:e}}function gh(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,sh),e.getVertexPosition(c,ch),e.getVertexPosition(l,lh);let u=hh(e,t,n,r,sh,ch,lh,fh);if(u){let e=new Y;um.getBarycoord(fh,sh,ch,lh,e),i&&(u.uv=um.getInterpolatedAttribute(i,s,c,l,e,new J)),a&&(u.uv1=um.getInterpolatedAttribute(a,s,c,l,e,new J)),o&&(u.normal=um.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};um.getNormal(sh,ch,lh,t.normal),u.face=t,u.barycoord=e}return u}var _h=class extends sp{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Nu,l=Nu,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vh=new Im,yh=new J(.5,.5),bh=new Y,xh=class{constructor(e=new Jm,t=new Jm,n=new Jm,r=new Jm,i=new Jm,a=new Jm){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=af,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vh.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vh.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vh)}intersectsSprite(e){return vh.center.set(0,0,0),vh.radius=.7071067811865476+yh.distanceTo(e.center),vh.applyMatrix4(e.matrixWorld),this.intersectsSphere(vh)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(bh.x=r.normal.x>0?e.max.x:e.min.x,bh.y=r.normal.y>0?e.max.y:e.min.y,bh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sh=class extends Xm{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ch=new pp,wh=new th,Th=new Im,Eh=new Y,Dh=class extends Bp{constructor(e=new Wm,t=new Sh){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Th.copy(n.boundingSphere),Th.applyMatrix4(r),Th.radius+=i,e.ray.intersectsSphere(Th)===!1)return;Ch.copy(r).invert(),wh.copy(e.ray).applyMatrix4(Ch);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Eh.fromBufferAttribute(l,n),Oh(Eh,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Eh.fromBufferAttribute(l,a),Oh(Eh,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Oh(e,t,n,r,i,a,o){let s=wh.distanceSqToPoint(e);if(s<n){let n=new Y;wh.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var kh=class extends sp{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ah=class extends sp{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jh=class extends sp{constructor(e,t,n=Wu,r,i,a,o=Nu,s=Nu,c,l=td,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Mh=class extends jh{constructor(e,t=Wu,n=301,r,i,a=Nu,o=Nu,s,c=td){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Nh=class extends sp{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ph=class e extends Wm{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Mm(c,3)),this.setAttribute(`normal`,new Mm(l,3)),this.setAttribute(`uv`,new Mm(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Fh=class e extends Wm{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Mm(p,3)),this.setAttribute(`normal`,new Mm(m,3)),this.setAttribute(`uv`,new Mm(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ih=class e extends Wm{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new Y,p=new J;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Mm(s,3)),this.setAttribute(`normal`,new Mm(c,3)),this.setAttribute(`uv`,new Mm(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Lh(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(zh(i))i.isRenderTargetTexture?(K(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(zh(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Rh(e){let t={};for(let n=0;n<e.length;n++){let r=Lh(e[n]);for(let e in r)t[e]=r[e]}return t}function zh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Bh(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Vh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zf.workingColorSpace}var Hh={clone:Lh,merge:Rh},Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gh=class extends Xm{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lh(e.uniforms),this.uniformsGroups=Bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Z().setHex(r.value);break;case`v2`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new cp().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new X().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new pp().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Kh=class extends Gh{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},qh=class extends Xm{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cp,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jh=class extends Xm{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yh=class extends Xm{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Zh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Qh=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},$h=class extends Qh{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jd,endingEnd:Jd}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yd:i=e,o=2*t-n;break;case Xd:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Yd:a=e,s=2*n-t;break;case Xd:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},eg=class extends Qh{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},tg=class extends Qh{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ng=class extends Qh{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ag(n,t,g,y,r);i[p]=rg(x,o,_,b,m)}return i}};function rg(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ig(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ag(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=rg(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ig(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var og=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Xh(t,this.TimeBufferType),this.values=Xh(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xh(e.times,Array),values:Xh(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Zh(e.settings)&&(n.settings={inTangents:Xh(e.settings.inTangents,Array),outTangents:Xh(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ng(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wd:t=this.InterpolantFactoryMethodDiscrete;break;case Gd:t=this.InterpolantFactoryMethodLinear;break;case Kd:t=this.InterpolantFactoryMethodSmooth;break;case qd:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return K(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wd;case this.InterpolantFactoryMethodLinear:return Gd;case this.InterpolantFactoryMethodSmooth:return Kd;case this.InterpolantFactoryMethodBezier:return qd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Zh(this.settings)&&(sg(this.settings.inTangents,e),sg(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(q(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(q(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){q(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){q(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&sf(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){q(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Kd,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Zh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function sg(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}og.prototype.ValueTypeName=``,og.prototype.TimeBufferType=Float32Array,og.prototype.ValueBufferType=Float32Array,og.prototype.DefaultInterpolation=Gd;var cg=class extends og{constructor(e,t,n){super(e,t,n)}};cg.prototype.ValueTypeName=`bool`,cg.prototype.ValueBufferType=Array,cg.prototype.DefaultInterpolation=Wd,cg.prototype.InterpolantFactoryMethodLinear=void 0,cg.prototype.InterpolantFactoryMethodSmooth=void 0;var lg=class extends og{constructor(e,t,n,r){super(e,t,n,r)}};lg.prototype.ValueTypeName=`color`;var ug=class extends og{constructor(e,t,n,r){super(e,t,n,r)}};ug.prototype.ValueTypeName=`number`;var dg=class extends Qh{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Wf.slerpFlat(i,0,a,c-o,a,c,s);return i}},fg=class extends og{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new dg(this.times,this.values,this.getValueSize(),e)}};fg.prototype.ValueTypeName=`quaternion`,fg.prototype.InterpolantFactoryMethodSmooth=void 0;var pg=class extends og{constructor(e,t,n){super(e,t,n)}};pg.prototype.ValueTypeName=`string`,pg.prototype.ValueBufferType=Array,pg.prototype.DefaultInterpolation=Wd,pg.prototype.InterpolantFactoryMethodLinear=void 0,pg.prototype.InterpolantFactoryMethodSmooth=void 0;var mg=class extends og{constructor(e,t,n,r){super(e,t,n,r)}};mg.prototype.ValueTypeName=`vector`;var hg=class extends Bp{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Z(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gg=class extends hg{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Bp.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_g=new pp,vg=new Y,yg=new Y,bg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=zu,this.map=null,this.mapPass=null,this.matrix=new pp,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new cp(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){_g.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_g,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_g)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xg=new Y,Sg=new Wf,Cg=new Y,wg=class extends Bp{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new pp,this.projectionMatrix=new pp,this.projectionMatrixInverse=new pp,this.coordinateSystem=af,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xg,Sg,Cg),Cg.x===1&&Cg.y===1&&Cg.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xg,Sg,Cg.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xg,Sg,Cg),Cg.x===1&&Cg.y===1&&Cg.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xg,Sg,Cg.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Tg=new Y,Eg=new J,Dg=new J,Og=class extends wg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bf*2*Math.atan(Math.tan(yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tg.x,Tg.y).multiplyScalar(-e/Tg.z),Tg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tg.x,Tg.y).multiplyScalar(-e/Tg.z)}getViewSize(e,t){return this.getViewBounds(e,Eg,Dg),t.subVectors(Dg,Eg)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yf*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kg=class extends wg{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ag=class extends bg{constructor(){super(new kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jg=class extends hg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Bp.DEFAULT_UP),this.updateMatrix(),this.target=new Bp,this.shadow=new Ag}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Mg=-90,Ng=1,Pg=class extends Bp{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Og(Mg,Ng,e,t);r.layers=this.layers,this.add(r);let i=new Og(Mg,Ng,e,t);i.layers=this.layers,this.add(i);let a=new Og(Mg,Ng,e,t);a.layers=this.layers,this.add(a);let o=new Og(Mg,Ng,e,t);o.layers=this.layers,this.add(o);let s=new Og(Mg,Ng,e,t);s.layers=this.layers,this.add(s);let c=new Og(Mg,Ng,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Fg=class extends Og{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ig=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Lg.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Lg(){this._document.hidden===!1&&this.reset()}var Rg=`\\[\\]\\.:\\/`,zg=RegExp(`[\\[\\]\\.:\\/]`,`g`),Bg=`[^\\[\\]\\.:\\/]`,Vg=`[^`+Rg.replace(`\\.`,``)+`]`,Hg=`((?:WC+[\\/:])*)`.replace(`WC`,Bg),Ug=`(WCOD+)?`.replace(`WCOD`,Vg),Wg=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Bg),Gg=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Bg),Kg=RegExp(`^`+Hg+Ug+Wg+Gg+`$`),qg=[`material`,`materials`,`bones`,`map`],Jg=class{constructor(e,t,n){let r=n||Yg.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yg=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(zg,``)}static parseTrackName(e){let t=Kg.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qg.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){K(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){q(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){q(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){q(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){q(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){q(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){q(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;q(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){q(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yg.Composite=Jg,Yg.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yg.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yg.prototype.GetterByBindingType=[Yg.prototype._getValue_direct,Yg.prototype._getValue_array,Yg.prototype._getValue_arrayElement,Yg.prototype._getValue_toArray],Yg.prototype.SetterByBindingTypeAndVersioning=[[Yg.prototype._setValue_direct,Yg.prototype._setValue_direct_setNeedsUpdate,Yg.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yg.prototype._setValue_array,Yg.prototype._setValue_array_setNeedsUpdate,Yg.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yg.prototype._setValue_arrayElement,Yg.prototype._setValue_arrayElement_setNeedsUpdate,Yg.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yg.prototype._setValue_fromArray,Yg.prototype._setValue_fromArray_setNeedsUpdate,Yg.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xg=new pp,Zg=class{constructor(e,t,n=0,r=1/0){this.ray=new th(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):q(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Xg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xg),this}intersectObject(e,t=!0,n=[]){return $g(e,this,n,t),n.sort(Qg),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)$g(e[r],this,n,t);return n.sort(Qg),n}};function Qg(e,t){return e.distance-t.distance}function $g(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)$g(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function e_(e,t,n,r){let i=t_(r);switch(n){case Qu:return e*t;case rd:return e*t/i.components*i.byteLength;case id:return e*t/i.components*i.byteLength;case ad:return e*t*2/i.components*i.byteLength;case od:return e*t*2/i.components*i.byteLength;case $u:return e*t*3/i.components*i.byteLength;case ed:return e*t*4/i.components*i.byteLength;case sd:return e*t*4/i.components*i.byteLength;case cd:case ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ud:case dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pd:case hd:return Math.max(e,16)*Math.max(t,8)/4;case fd:case md:return Math.max(e,8)*Math.max(t,8)/2;case gd:case _d:case yd:case bd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vd:case xd:case Sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Od:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case kd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Md:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ld:case Rd:case zd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Bd:case Vd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Hd:case Ud:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function t_(e){switch(e){case zu:case Bu:return{byteLength:1,components:1};case Hu:case Vu:case Ku:return{byteLength:2,components:1};case qu:case Ju:return{byteLength:2,components:4};case Wu:case Uu:case Gu:return{byteLength:4,components:1};case Xu:case Zu:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?K(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function n_(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function r_(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},i_={basic:{uniforms:Rh([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:Rh([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:Rh([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:Rh([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:Rh([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Z(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:Rh([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:Rh([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:Rh([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:Rh([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:Rh([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:Rh([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:Rh([$.common,$.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:Rh([$.lights,$.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};i_.physical={uniforms:Rh([i_.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var a_={r:0,b:0,g:0},o_=new pp,s_=new X;s_.set(-1,0,0,0,1,0,0,0,1);function c_(e,t,n,r,i,a){let o=new Z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new mh(new Ph(1,1,1),new Gh({name:`BackgroundCubeMaterial`,uniforms:Lh(i_.backgroundCube.uniforms),vertexShader:i_.backgroundCube.vertexShader,fragmentShader:i_.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(o_.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(s_),l.material.toneMapped=Zf.getTransfer(i.colorSpace)!==tf,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new mh(new Fh(2,2),new Gh({name:`BackgroundMaterial`,uniforms:Lh(i_.background.uniforms),vertexShader:i_.background.vertexShader,fragmentShader:i_.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Zf.getTransfer(i.colorSpace)!==tf,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(a_,Vh(e)),n.buffers.color.setClear(a_.r,a_.g,a_.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function l_(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function u_(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function d_(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(K(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&K(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function f_(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Jm,s=new X,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var p_=4,m_=6,h_=20,g_=256,__=new kg,v_=new Z,y_=null,b_=0,x_=0,S_=!1,C_=new Y,w_=new Y,T_=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=C_}=i;y_=this._renderer.getRenderTarget(),b_=this._renderer.getActiveCubeFace(),x_=this._renderer.getActiveMipmapLevel(),S_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(y_,b_,x_),this._renderer.xr.enabled=S_,e.scissorTest=!1,O_(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),y_=this._renderer.getRenderTarget(),b_=this._renderer.getActiveCubeFace(),x_=this._renderer.getActiveMipmapLevel(),S_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Iu,minFilter:Iu,generateMipmaps:!1,type:Ku,format:ed,colorSpace:$d,depthBuffer:!1},r=D_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=E_(r)),this._blurMaterial=A_(r,e,t),this._ggxMaterial=k_(r,e,t)}return r}_compileMaterial(e){let t=new mh(new Wm,e);this._renderer.compile(t,__)}_sceneToCubeUV(e,t,n,r,i){let a=new Og(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(v_),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mh(new Ph,new nh({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(v_),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;O_(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j_());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;O_(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,__)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-p_?n-d+p_:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,O_(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,__),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,O_(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,__)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];O_(t,3*l*(r>this._lodMax-p_?r-this._lodMax+p_:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,__)}};function E_(e){let t=[],n=[],r=e,i=e-p_+1+m_;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?w_.set(1,r,n):e===1?w_.set(-n,1,-r):e===2?w_.set(-n,r,1):e===3?w_.set(-1,r,-n):e===4?w_.set(-n,-1,r):w_.set(n,r,-1),w_.toArray(l,(e*6+t)*3)}}let u=new Wm;u.setAttribute(`position`,new km(c,3)),u.setAttribute(`outputDirection`,new km(l,3)),n.push(new mh(u,null)),r>p_&&r--}return{lodMeshes:n,sizeLods:t}}function D_(e,t,n){let r=new up(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function O_(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function k_(e,t,n){return new Gh({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:g_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:N_(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function A_(e,t,n){return new Gh({name:`SphericalGaussianBlur`,defines:{SAMPLES:h_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:N_(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function j_(){return new Gh({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:N_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function M_(){return new Gh({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:N_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function N_(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var P_=class extends up{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new kh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ph(5,5,5),i=new Gh({name:`CubemapFromEquirect`,uniforms:Lh(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new mh(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Iu),new Pg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function F_(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new P_(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new T_(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new T_(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function I_(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&pf(`WebGLRenderer: `+e+` extension not supported.`),t}}}function L_(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?jm:Am)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function R_(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function z_(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:q(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function B_(e,t,n){let r=new WeakMap,i=new cp;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new dp(h,p,m,u);g.type=Gu,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new J(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function V_(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var H_={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function U_(e,t,n,r,i,a){let o=new up(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Wm;l.setAttribute(`position`,new Mm([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Mm([0,2,0,0,2,0],2));let u=new Kh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new mh(l,u),f=new kg(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new up(t,n,{type:Ku,depthBuffer:!1,stencilBuffer:!1}),c=new up(t,n,{type:Ku,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Zf.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=H_[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var W_=new sp,G_=new jh(1,1),K_=new dp,q_=new fp,J_=new kh,Y_=[],X_=[],Z_=new Float32Array(16),Q_=new Float32Array(9),$_=new Float32Array(4);function ev(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Y_[i];if(a===void 0&&(a=new Float32Array(i),Y_[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function tv(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function nv(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function rv(e,t){let n=X_[t];n===void 0&&(n=new Int32Array(t),X_[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function iv(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function av(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tv(n,t))return;e.uniform2fv(this.addr,t),nv(n,t)}}function ov(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tv(n,t))return;e.uniform3fv(this.addr,t),nv(n,t)}}function sv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tv(n,t))return;e.uniform4fv(this.addr,t),nv(n,t)}}function cv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tv(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),nv(n,t)}else{if(tv(n,r))return;$_.set(r),e.uniformMatrix2fv(this.addr,!1,$_),nv(n,r)}}function lv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tv(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),nv(n,t)}else{if(tv(n,r))return;Q_.set(r),e.uniformMatrix3fv(this.addr,!1,Q_),nv(n,r)}}function uv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tv(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),nv(n,t)}else{if(tv(n,r))return;Z_.set(r),e.uniformMatrix4fv(this.addr,!1,Z_),nv(n,r)}}function dv(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function fv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tv(n,t))return;e.uniform2iv(this.addr,t),nv(n,t)}}function pv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tv(n,t))return;e.uniform3iv(this.addr,t),nv(n,t)}}function mv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tv(n,t))return;e.uniform4iv(this.addr,t),nv(n,t)}}function hv(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function gv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tv(n,t))return;e.uniform2uiv(this.addr,t),nv(n,t)}}function _v(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tv(n,t))return;e.uniform3uiv(this.addr,t),nv(n,t)}}function vv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tv(n,t))return;e.uniform4uiv(this.addr,t),nv(n,t)}}function yv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(G_.compareFunction=n.isReversedDepthBuffer()?518:515,a=G_):a=W_,n.setTexture2D(t||a,i)}function bv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||q_,i)}function xv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||J_,i)}function Sv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||K_,i)}function Cv(e){switch(e){case 5126:return iv;case 35664:return av;case 35665:return ov;case 35666:return sv;case 35674:return cv;case 35675:return lv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return hv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return Sv}}function wv(e,t){e.uniform1fv(this.addr,t)}function Tv(e,t){let n=ev(t,this.size,2);e.uniform2fv(this.addr,n)}function Ev(e,t){let n=ev(t,this.size,3);e.uniform3fv(this.addr,n)}function Dv(e,t){let n=ev(t,this.size,4);e.uniform4fv(this.addr,n)}function Ov(e,t){let n=ev(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function kv(e,t){let n=ev(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Av(e,t){let n=ev(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jv(e,t){e.uniform1iv(this.addr,t)}function Mv(e,t){e.uniform2iv(this.addr,t)}function Nv(e,t){e.uniform3iv(this.addr,t)}function Pv(e,t){e.uniform4iv(this.addr,t)}function Fv(e,t){e.uniform1uiv(this.addr,t)}function Iv(e,t){e.uniform2uiv(this.addr,t)}function Lv(e,t){e.uniform3uiv(this.addr,t)}function Rv(e,t){e.uniform4uiv(this.addr,t)}function zv(e,t,n){let r=this.cache,i=t.length,a=rv(n,i);tv(r,a)||(e.uniform1iv(this.addr,a),nv(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?G_:W_;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Bv(e,t,n){let r=this.cache,i=t.length,a=rv(n,i);tv(r,a)||(e.uniform1iv(this.addr,a),nv(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||q_,a[e])}function Vv(e,t,n){let r=this.cache,i=t.length,a=rv(n,i);tv(r,a)||(e.uniform1iv(this.addr,a),nv(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||J_,a[e])}function Hv(e,t,n){let r=this.cache,i=t.length,a=rv(n,i);tv(r,a)||(e.uniform1iv(this.addr,a),nv(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||K_,a[e])}function Uv(e){switch(e){case 5126:return wv;case 35664:return Tv;case 35665:return Ev;case 35666:return Dv;case 35674:return Ov;case 35675:return kv;case 35676:return Av;case 5124:case 35670:return jv;case 35667:case 35671:return Mv;case 35668:case 35672:return Nv;case 35669:case 35673:return Pv;case 5125:return Fv;case 36294:return Iv;case 36295:return Lv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Hv}}var Wv=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cv(t.type)}},Gv=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uv(t.type)}},Kv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},qv=/(\w+)(\])?(\[|\.)?/g;function Jv(e,t){e.seq.push(t),e.map[t.id]=t}function Yv(e,t,n){let r=e.name,i=r.length;for(qv.lastIndex=0;;){let a=qv.exec(r),o=qv.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Jv(n,l===void 0?new Wv(s,e,t):new Gv(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Kv(s),Jv(n,e)),n=e}}}var Xv=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Yv(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Zv(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Qv=37297,$v=0;function ey(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ty=new X;function ny(e){Zf._getMatrix(ty,Zf.workingColorSpace,e);let t=`mat3( ${ty.elements.map(e=>e.toFixed(4))} )`;switch(Zf.getTransfer(e)){case ef:return[t,`LinearTransferOETF`];case tf:return[t,`sRGBTransferOETF`];default:return K(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ry(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ey(e.getShaderSource(t),r)}return i}function iy(e,t){let n=ny(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ay={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function oy(e,t){let n=ay[t];return n===void 0?(K(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var sy=new Y;function cy(){return Zf.getLuminanceCoefficients(sy),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${sy.x.toFixed(4)}, ${sy.y.toFixed(4)}, ${sy.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ly(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(fy).join(`
`)}function uy(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function dy(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function fy(e){return e!==``}function py(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function my(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function gy(e){return e.replace(hy,vy)}var _y=new Map;function vy(e,t){let n=Q[t];if(n===void 0){let e=_y.get(t);if(e!==void 0)n=Q[e],K(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return gy(n)}var yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function by(e){return e.replace(yy,xy)}function xy(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Sy(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Cy={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function wy(e){return Cy[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ty={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ey(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ty[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Dy={302:`ENVMAP_MODE_REFRACTION`};function Oy(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Dy[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ky={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ay(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ky[e.combine]||`ENVMAP_BLENDING_NONE`}function jy(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function My(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=wy(n),l=Ey(n),u=Oy(n),d=Ay(n),f=jy(n),p=ly(n),m=uy(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fy).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fy).join(`
`),_.length>0&&(_+=`
`)):(g=[Sy(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(fy).join(`
`),_=[Sy(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:oy(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,iy(`linearToOutputTexel`,n.outputColorSpace),cy(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(fy).join(`
`)),o=gy(o),o=py(o,n),o=my(o,n),s=gy(s),s=py(s,n),s=my(s,n),o=by(o),s=by(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Zv(i,i.VERTEX_SHADER,y),S=Zv(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ry(i,x,`vertex`),n=ry(i,S,`fragment`);q(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):K(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Xv(i,h),T=dy(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Qv)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$v++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ny=0,Py=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fy(e),t.set(e,n)),n}},Fy=class{constructor(e){this.id=Ny++,this.code=e,this.usedTimes=0}};function Iy(e){return e===1030||e===37490||e===36285}function Ly(e,t,n,r,i,a){let o=new wp,s=new Py,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&K(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=i_[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,I=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,se=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,L=pe&&!!i.iridescenceThicknessMap,xe=me&&!!i.sheenColorMap,Se=me&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,R=!!i.specularColorMap,we=!!i.specularIntensityMap,z=he&&!!i.transmissionMap,B=he&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Zf.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:I,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:I&&i.normalMapType===1,normalMapTangentSpace:I&&i.normalMapType===0,packedNormalMap:I&&i.normalMapType===0&&Iy(i.normalMap.format),metalnessMap:se,roughnessMap:ce,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:L,sheen:me,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:R,specularIntensityMap:we,transmission:he,transmissionMap:z,thicknessMap:B,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:I&&m(i.normalMap.channel),displacementMapUv:ae&&m(i.displacementMap.channel),emissiveMapUv:oe&&m(i.emissiveMap.channel),metalnessMapUv:se&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:L&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:R&&m(i.specularColorMap.channel),specularIntensityMapUv:we&&m(i.specularIntensityMap.channel),transmissionMapUv:z&&m(i.transmissionMap.channel),thicknessMapUv:B&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(I||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&I===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Zf.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Zf.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=i_[t];n=Hh.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new My(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ry(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function zy(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function By(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vy(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||zy),r.length>1&&r.sort(t||By),i.length>1&&i.sort(t||By)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Hy(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Vy,e.set(t,[i])):n>=r.length?(i=new Vy,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Uy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Y,color:new Z};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new Z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new Z,groundColor:new Z};break;case`RectAreaLight`:n={color:new Z,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function Wy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Gy=0;function Ky(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function qy(e){let t=new Uy,n=Wy(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new pp,o=new pp;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ky);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Gy++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Jy(e){let t=new qy(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Yy(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Jy(e),t.set(n,[a])):r>=i.length?(a=new Jy(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qy=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],$y=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],eb=new pp,tb=new Y,nb=new Y;function rb(e,t,n){let r=new xh,i=new J,a=new J,o=new cp,s=new Jh,c=new Yh,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Gh({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Xy,fragmentShader:Zy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Wm;m.setAttribute(`position`,new km(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new mh(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(K(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){K(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){K(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new up(i.x,i.y,{format:ad,type:Ku,minFilter:Iu,magFilter:Iu,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new jh(i.x,i.y,Gu),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=td,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Nu,d.map.depthTexture.magFilter=Nu}else l.isPointLight?(d.map=new P_(i.x),d.map.depthTexture=new Mh(i.x,Wu)):(d.map=new up(i.x,i.y),d.map.depthTexture=new jh(i.x,i.y,Wu)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=td,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Iu,d.map.depthTexture.magFilter=Iu):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Nu,d.map.depthTexture.magFilter=Nu);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),tb.setFromMatrixPosition(l.matrixWorld),e.position.copy(tb),nb.copy(e.position),nb.add(Qy[t]),e.up.copy($y[t]),e.lookAt(nb),e.updateMatrixWorld(),n.makeTranslation(-tb.x,-tb.y,-tb.z),eb.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(eb,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new up(i.x,i.y,{format:ad,type:Ku}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ib(e,t){function n(){let t=!1,n=new cp,r=null,i=new cp(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?se(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=hf[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?se(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new cp().fromArray(ne),I=new cp().fromArray(re);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),se(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),se(e.CULL_FACE),me(0);function se(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ce(e.BLEND),g=!1);else if(g===!1&&(se(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:q(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:q(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:q(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:q(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):se(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?se(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(se(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(M&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(se(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?se(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function L(t){t===void 0&&(t=e.TEXTURE0+ee-1),F!==t&&(e.activeTexture(t),F=t)}function xe(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+ee-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function Se(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function z(){try{e.texSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function B(){try{e.compressedTexSubImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){q(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){q(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Ne(t){I.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),I.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),I.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:se,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:L,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:R,texImage2D:Oe,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:De,texSubImage2D:we,texSubImage3D:z,compressedTexSubImage2D:B,compressedTexSubImage3D:Te,scissor:Me,viewport:Ne,reset:Ie}}function ab(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):cf(`canvas`)}function g(e,t,n){let r=1,i=Ce(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),K(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&K(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];K(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||K(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ef:Zf.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,K(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&K(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&xe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)K(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)K(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ce(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ce(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?le(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ne={[Au]:e.REPEAT,[ju]:e.CLAMP_TO_EDGE,[Mu]:e.MIRRORED_REPEAT},re={[Nu]:e.NEAREST,[Pu]:e.NEAREST_MIPMAP_NEAREST,[Fu]:e.NEAREST_MIPMAP_LINEAR,[Iu]:e.LINEAR,[Lu]:e.LINEAR_MIPMAP_NEAREST,[Ru]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function I(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&K(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ne[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ne[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ne[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,re[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,re[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ae(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function oe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function se(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=oe(n.start,r.width,4),c=oe(t.start,r.width,4);n.start<=i+1&&a===c&&oe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ce(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ae(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Zf.getPrimaries(Zf.workingColorSpace),r=o.colorSpace===``?null:Zf.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Se(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);I(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===nd,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&se(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=e_(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=e_(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ce(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ce(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,o,s){if(o.image.length!==6)return;let c=ae(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Zf.getPrimaries(Zf.workingColorSpace),r=o.colorSpace===``?null:Zf.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Se(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);I(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?K(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ce(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ue(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,be(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,be(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);L(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,be(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function fe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),I(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=be(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)L(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function pe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)fe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?fe(i.__webglFramebuffer[0],t,0):fe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),de(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),de(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(t,n,i){let a=r.get(t);n!==void 0&&ue(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&pe(t)}function he(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&L(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=be(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),de(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),I(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ue(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),I(c,a),ue(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),I(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ue(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ue(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&pe(t)}function ge(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let _e=[],ve=[];function ye(t){if(t.samples>0){if(L(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(_e.length=0,ve.length=0,_e.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(_e.push(l),ve.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ve)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function be(e){return Math.min(i.maxSamples,e.samples)}function L(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function xe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Se(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Zf.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&K(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):q(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ce(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=P,this.setTexture3D=F,this.setTextureCube=te,this.rebindTextures=me,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ob(e,t){function n(n,r=``){let i,a=Zf.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lb=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gh({vertexShader:sb,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mh(new Fh(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ub=class extends gf{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new lb,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new J,C=null,w=null,T=new Og;T.viewport=new cp;let E=new Og;E.viewport=new cp;let D=[T,E],O=new Fg,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Up,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Up,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Up,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&K(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?nd:td,a=_.stencil?Yu:Wu);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new up(d.textureWidth,d.textureHeight,{format:ed,type:zu,depthTexture:new jh(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new up(f.framebufferWidth,f.framebufferHeight,{format:ed,type:zu,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new Y,P=new Y;function F(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;te(O,i);for(let e=0;e<a.length;e++)te(a[e],i);a.length===2?F(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,O,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=bf*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Og,o.layers.enable(n),o.viewport=new cp,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Nh,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let I=new n_;I.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},db=new pp,fb=new X;fb.set(-1,0,0,0,1,0,0,0,1);function pb(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Vh(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(fb),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function mb(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return q(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?K(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):K(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var hb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gb=null;function _b(){return gb===null&&(gb=new _h(hb,16,16,ad,Ku),gb.name=`DFG_LUT`,gb.minFilter=Iu,gb.magFilter=Iu,gb.wrapS=ju,gb.wrapT=ju,gb.generateMipmaps=!1,gb.needsUpdate=!0),gb}var vb=class{constructor(e={}){let{canvas:t=lf(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=zu}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([sd,od,id]),g=new Set([zu,Wu,Hu,Yu,qu,Ju]),_=new Uint32Array(4),v=new Int32Array(4),y=new Y,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Qd;let j=0,ee=0,M=null,N=-1,P=null,F=new cp,te=new cp,ne=null,re=new Z(0),ie=0,I=t.width,ae=t.height,oe=1,se=null,ce=null,le=new cp(0,0,I,ae),ue=new cp(0,0,I,ae),de=!1,fe=new xh,pe=!1,me=!1,he=new pp,ge=new Y,_e=new cp,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function be(){return M===null?oe:1}let L=n;function xe(e,n){return t.getContext(e,n)}let Se,Ce,R,we,z,B,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),L===null){let t=`webgl2`;if(L=xe(t,e),L===null)throw xe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}He()}catch(e){throw t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),q(`WebGLRenderer: `+e.message),e}function He(){Se=new I_(L),Se.init(),ze=new ob(L,Se),Ce=new d_(L,Se,e,ze),R=new ib(L,Se),Ce.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),O=L.createFramebuffer(),k=L.createFramebuffer(),A=L.createFramebuffer(),we=new z_(L),z=new Ry,B=new ab(L,Se,R,z,Ce,ze,we),Te=new F_(T),Ee=new r_(L),Be=new l_(L,Ee),De=new L_(L,Ee,we,Be),Oe=new V_(L,De,Ee,Be,we),Ie=new B_(L,Ce,B),Ne=new f_(z),ke=new Ly(T,Te,Se,Ce,Be,Ne),Ae=new pb(T,z),je=new Hy,Me=new Yy(Se),Fe=new c_(T,Te,R,Oe,p,s),Pe=new rb(T,Oe,Ce),Ve=new mb(L,we,Ce,R),Le=new u_(L,Se,we),Re=new R_(L,Se,we),we.programs=ke.programs,T.capabilities=Ce,T.extensions=Se,T.properties=z,T.renderLists=je,T.shadowMap=Pe,T.state=R,T.info=we}m!==1009&&(w=new U_(m,t.width,t.height,o,r,i));let Ue=new ub(T,L);this.xr=Ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Se.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Se.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(e){e!==void 0&&(oe=e,this.setSize(I,ae,!1))},this.getSize=function(e){return e.set(I,ae)},this.setSize=function(e,n,r=!0){Ue.isPresenting?K(`WebGLRenderer: Can't change size while VR device is presenting.`):(I=e,ae=n,t.width=Math.floor(e*oe),t.height=Math.floor(n*oe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(I*oe,ae*oe).floor()},this.setDrawingBufferSize=function(e,n,r){I=e,ae=n,oe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)q(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){K(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(F)},this.getViewport=function(e){return e.copy(le)},this.setViewport=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),R.viewport(F.copy(le).multiplyScalar(oe).round())},this.getScissor=function(e){return e.copy(ue)},this.setScissor=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),R.scissor(te.copy(ue).multiplyScalar(oe).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(e){R.setScissorTest(de=e)},this.setOpaqueSort=function(e){se=e},this.setTransparentSort=function(e){ce=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,L.clearBufferiv(L.COLOR,0,v))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),Fe.dispose(),je.dispose(),Me.dispose(),z.dispose(),Te.dispose(),Oe.dispose(),Be.dispose(),Ve.dispose(),ke.dispose(),Ue.dispose(),Ue.removeEventListener(`sessionstart`,$e),Ue.removeEventListener(`sessionend`,et),tt.stop()};function We(e){e.preventDefault(),df(`WebGLRenderer: Context Lost.`),E=!0}function Ge(){df(`WebGLRenderer: Context Restored.`),E=!1;let e=we.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;He(),we.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Ke(e){q(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function qe(e){let t=e.target;t.removeEventListener(`dispose`,qe),Je(t)}function Je(e){Ye(e),z.remove(e)}function Ye(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ve);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=dt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*be()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*be()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Se.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ee.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Xe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),pe===!0&&Ne.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,st(e,t,r),e.side=0,e.needsUpdate=!0,st(e,t,r),e.side=2):st(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Me.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),me=this.localClippingEnabled,pe=Ne.init(this.clippingPlanes,me),pe===!0&&Ne.setGlobalState(this.clippingPlanes,t),D!==null&&Pe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Xe(o,n,t,e),r.add(o)}else Xe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Se.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function Qe(e){Ze&&Ze(e)}function $e(){tt.stop()}function et(){tt.start()}let tt=new n_;tt.setAnimationLoop(Qe),typeof self<`u`&&tt.setContext(self),this.setAnimationLoop=function(e){Ze=e,Ue.setAnimationLoop(e),e===null?tt.stop():tt.start()},Ue.addEventListener(`sessionstart`,$e),Ue.addEventListener(`sessionend`,et),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){q(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ue.enabled===!0&&Ue.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(t),t=Ue.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Me.get(e,C.length),x.init(t),x.state.textureUnits=B.getTextureUnits(),C.push(x),he.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),fe.setFromProjectionMatrix(he,af,t.reversedDepth),me=this.localClippingEnabled,pe=Ne.init(this.clippingPlanes,me),b=je.get(e,S.length),b.init(),S.push(b),Ue.enabled===!0&&Ue.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&nt(e,t,-1/0,T.sortObjects)}nt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(se,ce),ye=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,ye&&Fe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Ne.beginShadows();let i=x.state.shadowsArray;if(Pe.render(i,e,t),pe===!0&&Ne.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];it(n,r,e,a)}ye&&Fe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];rt(b,e,n,n.viewport)}}else r.length>0&&it(n,r,e,t),ye&&Fe.render(e),rt(b,e,t)}M!==null&&ee===0&&(B.updateMultisampleRenderTarget(M),B.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Be.resetDefaultState(),N=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],B.setTextureUnits(x.state.textureUnits),pe===!0&&Ne.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function nt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(fe)){r&&_e.setFromMatrixPosition(e.matrixWorld).applyMatrix4(he);let i=Oe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,_e.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(fe))){let i=Oe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),_e.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),_e.copy(e.boundingSphere.center)),_e.applyMatrix4(e.matrixWorld).applyMatrix4(he)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,_e.z,s,t)}}else a.visible&&b.push(e,i,a,n,_e.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)nt(i[e],t,n,r)}function rt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),pe===!0&&Ne.setGlobalState(T.clippingPlanes,n),r&&R.viewport(F.copy(r)),i.length>0&&at(i,t,n),a.length>0&&at(a,t,n),o.length>0&&at(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function it(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Se.has(`EXT_color_buffer_half_float`)||Se.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new up(1,1,{generateMipmaps:!0,type:e?Ku:zu,minFilter:Ru,samples:Math.max(4,Ce.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zf.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||F;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(re),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),ye&&Fe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),pe===!0&&Ne.setGlobalState(T.clippingPlanes,r),at(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),Se.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(re,ie),d!==void 0&&(r.viewport=d),T.toneMapping=u}function at(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ot(o,t,n,s,l,c)}}function ot(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function st(e,t,n){t.isScene!==!0&&(t=ve);let r=z.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Te.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,qe),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return lt(e,s),d}else s.uniforms=ke.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ne.uniform),lt(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Xv.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function lt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function dt(e,t,n,r,i){t.isScene!==!0&&(t=ve),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Zf.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Te.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=x.state.lights;if(pe===!0&&(me===!0||e!==P)){let t=e===P&&r.id===N;Ne.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ne.numPlanes||v.numIntersection!==Ne.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=st(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(R.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=ut(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||P!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(L,`projectionMatrix`,e.projectionMatrix),O.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(L,ge.setFromMatrixPosition(e.matrixWorld)),Ce.logarithmicDepthBuffer&&O.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(L,`sunShadowMap`,y.state.sunShadowMap,B),y.state.directionalShadowMap.length>0&&O.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,B),y.state.spotShadowMap.length>0&&O.setValue(L,`spotShadowMap`,y.state.spotShadowMap,B),y.state.pointShadowMap.length>0&&O.setValue(L,`pointShadowMap`,y.state.pointShadowMap,B)),i.isSkinnedMesh){O.setOptional(L,i,`bindMatrix`),O.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(L,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(O.setOptional(L,i,`batchingTexture`),O.setValue(L,`batchingTexture`,i._matricesTexture,B),O.setOptional(L,i,`batchingIdTexture`),O.setValue(L,`batchingIdTexture`,i._indirectTexture,B),O.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(L,`batchingColorTexture`,i._colorsTexture,B));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ie.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=_b()),w){if(O.setValue(L,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ft(k,E),a&&r.fog===!0&&Ae.refreshFogUniforms(k,a),Ae.refreshMaterialUniforms(k,r,oe,ae,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Xv.upload(L,ct(v),k,B)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Xv.upload(L,ct(v),k,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(L,`center`,i.center),O.setValue(L,`modelViewMatrix`,i.modelViewMatrix),O.setValue(L,`normalMatrix`,i.normalMatrix),O.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ve.update(n,S),Ve.bind(n,S)}}return S}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest,R.viewport(F),R.scissor(te),R.setScissorTest(ne),N=-1;return}if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest}else F.copy(le).multiplyScalar(oe).floor(),te.copy(ue).multiplyScalar(oe).floor(),ne=de;if(n!==0&&(r=O),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(F),R.scissor(te),R.setScissorTest(ne),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}N=-1};function mt(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ce.textureFormatReadable(e.format),t.__typeReadable=Ce.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=mt(o);if(u.__formatReadable===!1){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){q(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,ze.convert(c),ze.convert(l),a)}finally{let e=M===null?null:z.get(M).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,ze.convert(l),ze.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=M===null?null:z.get(M).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mf(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ze.convert(t.format),_=ze.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,k),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,R.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return af}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Zf._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zf._getUnpackColorSpace()}},yb={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},bb=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},xb=new kg(-1,1,1,-1,0,1),Sb=new class extends Wm{constructor(){super(),this.setAttribute(`position`,new Mm([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Mm([0,2,0,0,2,0],2))}},Cb=class{constructor(e){this._mesh=new mh(Sb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},wb=class extends bb{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gh?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hh.clone(e.uniforms),this.material=new Gh({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cb(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Tb=class extends bb{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Eb=class extends bb{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Db=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new J);this._width=n.width,this._height=n.height,t=new up(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ku}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wb(yb),this.copyPass.material.blending=0,this.timer=new Ig}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Tb!==void 0&&(r instanceof Tb?n=!0:r instanceof Eb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ob=class extends bb{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Z}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},kb={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Z(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ab=class e extends bb{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new J(256,256):new J(e.x,e.y),this.clearColor=new Z(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new up(i,a,{type:Ku,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new up(i,a,{type:Ku,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new up(i,a,{type:Ku,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=kb;this.highPassUniforms=Hh.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gh({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new J(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hh.clone(yb.uniforms),this.blendMaterial=new Gh({uniforms:this.copyUniforms,vertexShader:yb.vertexShader,fragmentShader:yb.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Z,this._oldClearAlpha=1,this._basic=new nh,this._fsQuad=new Cb(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new J(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Gh({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Gh({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ab.BlurDirectionX=new J(1,0),Ab.BlurDirectionY=new J(0,1);var jb={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Mb=class extends bb{constructor(){super(),this.isOutputPass=!0,this.uniforms=Hh.clone(jb.uniforms),this.material=new Kh({name:jb.name,uniforms:this.uniforms,vertexShader:jb.vertexShader,fragmentShader:jb.fragmentShader}),this._fsQuad=new Cb(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Zf.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Nb={width:14,height:4.6,depth:20,wall:.35},Pb=[-6,0,6].map(e=>({z:e,width:2.4,bottom:.7,top:3.9})),Fb=[[-1.5,-5.5],[-1.5,1.5],[2.5,-5.5],[2.5,1.5]].map(([e,t])=>({x:e,z:t,size:.6})),Ib={x:3,width:1.6,height:2.7},Lb=new Y(1,-.62,.32).normalize(),Rb=`#e8e5e0`,zb=`#dcd8d1`;function Bb(e,{shadowSize:t}){let{width:n,height:r,depth:i,wall:a}=Nb,o=-n/2,s=new qh({color:Rb,roughness:.95}),c=new mh(new Fh(n,i),new qh({color:zb,roughness:.55,map:Vb(n,i)}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,e.add(c);let l=(t,n,r,i,a,o)=>{let c=new mh(new Ph(t,n,r),s);return c.position.set(i,a,o),c.castShadow=!0,c.receiveShadow=!0,e.add(c),c};l(n+a*2,a,i+a*2,0,r+a/2,0),l(a,r,i,n/2+a/2,r/2,0),l(n,r,a,0,r/2,i/2+a/2);let u=-i/2-a/2,d=Ib.x-Ib.width/2,f=Ib.x+Ib.width/2;l(d+n/2,r,a,(-n/2+d)/2,r/2,u),l(n/2-f,r,a,(f+n/2)/2,r/2,u),l(Ib.width,r-Ib.height,a,Ib.x,(r+Ib.height)/2,u),l(a,Ib.height,3,d-a/2,Ib.height/2,u-3/2),l(a,Ib.height,3,f+a/2,Ib.height/2,u-3/2),l(Ib.width+a*2,a,3,Ib.x,Ib.height+a/2,u-3/2);let p=new mh(new Fh(Ib.width,3),c.material);p.rotation.x=-Math.PI/2,p.position.set(Ib.x,0,u-3/2),e.add(p);let m=new mh(new Fh(Ib.width,Ib.height),new nh({color:new Z(`#f6f3ee`).multiplyScalar(1.3),toneMapped:!1}));m.position.set(Ib.x,Ib.height/2,u-3),e.add(m),Fb.forEach(({x:e,z:t,size:n})=>l(n,r,n,e,r/2,t));let h=new qh({color:`#d3cec6`,roughness:.8}),g=(t,n,r,i)=>{let a=new mh(new Ph(t,.14,n),h);a.position.set(r,.07,i),a.receiveShadow=!0,e.add(a)};g(.04,i,n/2-.02,0),g(n,.04,0,i/2-.02),g(d+n/2,.04,(-n/2+d)/2,-i/2+.02),g(n/2-f,.04,(f+n/2)/2,-i/2+.02);let _=o-a/2,v=Pb[0].bottom,y=Pb[0].top;l(a,v,i,_,v/2,0),l(a,r-y,i,_,(r+y)/2,0);let b=[-i/2,...Pb.flatMap(e=>[e.z-e.width/2,e.z+e.width/2]),i/2];for(let e=0;e<b.length;e+=2){let t=b[e+1]-b[e];l(a,y-v,t,_,(v+y)/2,b[e]+t/2)}Pb.forEach(({z:e,width:t})=>{l(.06,y-v,.06,o-.05,(v+y)/2,e),l(.06,.06,t,o-.05,v+(y-v)*.62,e)});let x=new mh(new Fh(i*2,r*4),Hb());x.rotation.y=Math.PI/2,x.position.set(o-6,r/2,0),e.add(x);let S=new jg(`#fff3e3`,3.6);S.position.copy(Lb).multiplyScalar(-22),S.target.position.set(0,0,0),S.castShadow=!0,S.shadow.mapSize.set(t,t),S.shadow.bias=-4e-4,S.shadow.normalBias=.02,S.shadow.radius=6,Object.assign(S.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:50}),e.add(S,S.target);let C=new gg(`#eef2f7`,`#cfc6ba`,1);return e.add(C),{sun:S,fill:C,floor:c,sky:x,wallMaterial:s,trim:h}}function Vb(e,t){let n=document.createElement(`canvas`);n.width=n.height=256;let r=n.getContext(`2d`);r.fillStyle=`#ffffff`,r.fillRect(0,0,256,256),r.strokeStyle=`rgba(120, 112, 100, 0.22)`,r.lineWidth=2,r.strokeRect(0,0,256,256);let i=new Ah(n);return i.colorSpace=Qd,i.wrapS=i.wrapT=Au,i.repeat.set(e/1.2,t/1.2),i.anisotropy=4,i}function Hb(){return new Gh({uniforms:{uColor:{value:new Z(`#f2f6fb`).multiplyScalar(1.5)},uTime:{value:0},uClouds:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uTime;
      uniform float uClouds;
      varying vec2 vUv;

      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.03;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 color = uColor;
        if (uClouds > 0.001) {
          vec2 p = vUv * vec2(6.0, 3.0) + vec2(uTime * 0.012, 0.0);
          float cloud = smoothstep(0.42, 0.78, fbm(p + fbm(p * 0.5 + uTime * 0.004)));
          // Clouds are soft, pale shapes: a little cooler and dimmer than the glare.
          vec3 shade = uColor * vec3(0.62, 0.66, 0.76);
          color = mix(color, shade, cloud * uClouds * 0.85);
          color += uColor * 0.12 * uClouds * smoothstep(0.5, 0.6, cloud) * (1.0 - smoothstep(0.6, 0.9, cloud));
        }
        gl_FragColor = vec4(color, 1.0);
      }
    `,toneMapped:!1})}var Ub=class e extends mh{constructor(t,n={}){super(t),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let r=this,i=n.color===void 0?new Z(8355711):new Z(n.color),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,c=n.shader||e.ReflectorShader,l=n.multisample===void 0?4:n.multisample,u=new Jm,d=new Y,f=new Y,p=new Y,m=new pp,h=new Y(0,0,-1),g=new cp,_=new Y,v=new Y,y=new cp,b=new pp,x=new up(a,o,{samples:l,type:Ku}),S=new Gh({name:c.name===void 0?`unspecified`:c.name,uniforms:Hh.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});S.uniforms.tDiffuse.value=x.texture,S.uniforms.color.value=i,S.uniforms.textureMatrix.value=b,this.material=S,this.onBeforeRender=function(e,t,n){let i=this.getReflectionCamera(n);if(f.setFromMatrixPosition(r.matrixWorld),p.setFromMatrixPosition(n.matrixWorld),m.extractRotation(r.matrixWorld),d.set(0,0,1),d.applyMatrix4(m),_.subVectors(f,p),_.dot(d)>0&&this.forceUpdate===!1)return;_.reflect(d).negate(),_.add(f),m.extractRotation(n.matrixWorld),h.set(0,0,-1),h.applyMatrix4(m),h.add(p),v.subVectors(f,h),v.reflect(d).negate(),v.add(f),i.position.copy(_),i.up.set(0,1,0),i.up.applyMatrix4(m),i.up.reflect(d),i.lookAt(v),i.far=n.far,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(i.projectionMatrix),b.multiply(i.matrixWorldInverse),b.multiply(r.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(i.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let a=i.projectionMatrix;i.isOrthographicCamera?(y.x=(Math.sign(g.x)+a.elements[8])/a.elements[0],y.y=(Math.sign(g.y)+a.elements[9])/a.elements[5],y.z=-n.far,y.w=1):(y.x=(Math.sign(g.x)+a.elements[8])/a.elements[0],y.y=(Math.sign(g.y)+a.elements[9])/a.elements[5],y.z=-1,y.w=(1+a.elements[10])/a.elements[14]),g.multiplyScalar(2/g.dot(y)),a.elements[2]=g.x,a.elements[6]=g.y,i.isOrthographicCamera?(a.elements[10]=g.z-s,a.elements[14]=g.w-1):(a.elements[10]=g.z+1-s,a.elements[14]=g.w),r.visible=!1;let o=e.getRenderTarget(),c=e.xr.enabled,l=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(x),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,i),e.xr.enabled=c,e.shadowMap.autoUpdate=l,e.setRenderTarget(o);let S=n.viewport;S!==void 0&&e.state.viewport(S),r.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return x},this.dispose=function(){x.dispose(),r.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};Ub.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Wb={plaster:{wall:`#e8e5e0`,trim:`#d3cec6`,floor:`#dcd8d1`,haze:`#e9ecef`},blush:{wall:`#eedfdc`,trim:`#dccac6`,floor:`#e3d4d0`,haze:`#f1e6e6`},mist:{wall:`#dfe5ec`,trim:`#c9d1db`,floor:`#d5dce4`,haze:`#e4eaf1`},sand:{wall:`#ece2d2`,trim:`#d8cbb6`,floor:`#e2d6c3`,haze:`#efe8dc`}};function Gb(e,t=160){let n=new Float32Array(t*3),r=new Float32Array(t);for(let e=0;e<t;e++)n[e*3]=(Math.random()-.5)*(Nb.width-1),n[e*3+1]=Math.random()*Nb.height,n[e*3+2]=(Math.random()-.5)*(Nb.depth-1),r[e]=Math.random();let i=new Wm;i.setAttribute(`position`,new km(n,3)),i.setAttribute(`seed`,new km(r,1));let a=new Gh({uniforms:{uTime:{value:0},uStrength:{value:0},uPulse:{value:0},uPixelRatio:{value:1},uHeight:{value:Nb.height}},vertexShader:`
      uniform float uTime;
      uniform float uStrength;
      uniform float uPulse;
      uniform float uPixelRatio;
      uniform float uHeight;
      attribute float seed;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        // Rise slowly and wrap from ceiling back to floor, wandering as they go.
        p.y = mod(p.y + uTime * (0.03 + seed * 0.05), uHeight);
        p.x += sin(uTime * 0.07 + seed * 40.0) * 0.6;
        p.z += cos(uTime * 0.05 + seed * 23.0) * 0.6;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Only some motes show at low strength; all of them at full.
        float shown = step(seed, uStrength);
        float edge = smoothstep(0.0, 0.6, p.y) * smoothstep(uHeight, uHeight - 0.6, p.y);
        float breathe = 0.55 + 0.45 * sin(uTime * (0.3 + seed * 0.4) + seed * 60.0);
        vAlpha = shown * edge * breathe * (0.45 + uPulse * 0.8 * fract(seed * 7.0));
        gl_PointSize = (0.14 + seed * 0.1) * 600.0 / -mv.z * uPixelRatio;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        // A bright core in a wide, soft halo.
        float glow = exp(-d * d * 6.0) * 0.6 + exp(-d * d * 40.0);
        gl_FragColor = vec4(vec3(1.0, 0.94, 0.84) * glow * vAlpha, 1.0);
      }
    `,transparent:!0,depthWrite:!1,blending:2}),o=new Dh(i,a);return o.renderOrder=5,o.frustumCulled=!1,e.add(o),a}function Kb(e,{width:t,height:n}){let r={uniforms:{...Hh.clone(Ub.ReflectorShader.uniforms),uTime:{value:0},uRipple:{value:0},uRings:{value:Array.from({length:4},()=>new Y(0,0,-100))}},vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec2 vPos;
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 world = modelMatrix * vec4(position, 1.0);
        vPos = world.xz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform float uTime;
      uniform float uRipple;
      uniform vec3 uRings[4];
      varying vec4 vUv;
      varying vec2 vPos;

      float blendOverlay(float base, float blend) {
        return base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend));
      }
      vec3 blendOverlay(vec3 base, vec3 blend) {
        return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
      }

      void main() {
        vec2 p = vPos;
        // Slow, crossing swells.
        vec2 d = vec2(
          sin(p.y * 1.3 + uTime * 0.6) + sin(p.x * 0.9 - uTime * 0.45 + p.y * 0.4),
          cos(p.x * 1.1 + uTime * 0.5) + sin(p.y * 0.7 + p.x * 0.6 + uTime * 0.35)
        ) * 0.0025;
        // Rings spreading out from where a note landed.
        for (int i = 0; i < 4; i++) {
          vec3 ring = uRings[i];
          float age = uTime - ring.z;
          if (age > 0.0 && age < 8.0) {
            vec2 off = p - ring.xy;
            float dist = length(off);
            float front = dist - age * 0.9;
            float wave = sin(front * 10.0) * exp(-front * front * 4.0) * exp(-age * 0.45);
            d += off / max(dist, 0.001) * wave * 0.01;
          }
        }
        vec4 uv = vUv;
        uv.xy += d * uRipple * uv.w;
        vec4 base = texture2DProj(tDiffuse, uv);
        gl_FragColor = vec4(blendOverlay(base.rgb, color), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `},i=new Ub(new Fh(40,40),{textureWidth:t,textureHeight:n,color:`#8f8f8f`,clipBias:.003,shader:r});return i.rotation.x=-Math.PI/2,i.position.y=-.002,e.add(i),i}var qb={soft:{label:`soft`,ratioCap:1,scale:.75,samples:0,shadow:1024,mirror:0,dust:900},balanced:{label:`balanced`,ratioCap:1.5,scale:1,samples:4,shadow:2048,mirror:.5,dust:1500},hd:{label:`hd`,ratioCap:2,scale:1,samples:4,shadow:4096,mirror:.75,dust:2400},ultra:{label:`ultra`,ratioCap:3,scale:1,samples:8,shadow:4096,mirror:1,dust:3600}};function Jb(){return Math.min(window.innerWidth,window.innerHeight)<700||matchMedia(`(pointer: coarse)`).matches?`balanced`:`hd`}var Yb=11;function Xb(e){let t=new Gh({uniforms:{uOpacity:{value:.09},uTime:{value:0}},vertexShader:`
      attribute float along;
      varying float vAlong;
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;
      void main() {
        vAlong = along;
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vView = normalize(cameraPosition - world.xyz);
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      uniform float uTime;
      varying float vAlong;
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;
      void main() {
        float facing = pow(abs(dot(normalize(vNormal), vView)), 1.6);
        float fade = pow(1.0 - vAlong, 1.4) * smoothstep(0.0, 0.08, vAlong);
        float shimmer = 0.85 + 0.15 * sin(vWorld.z * 1.7 + vWorld.y * 2.3 + uTime * 0.4);
        // Fade beams the camera is close to or inside, so they never show as flat panels.
        float near = smoothstep(2.0, 7.0, distance(cameraPosition, vWorld));
        gl_FragColor = vec4(vec3(1.0, 0.97, 0.92) * uOpacity * facing * fade * shimmer * near, 1.0);
      }
    `,transparent:!0,depthWrite:!1,blending:2,side:2}),n=-Nb.width/2;return Pb.forEach(({z:r,width:i,bottom:a,top:o})=>{let s=[[n,a,r-i/2],[n,a,r+i/2],[n,o,r+i/2],[n,o,r-i/2]].map(e=>new Y(...e)),c=s.map(e=>e.clone().addScaledVector(Lb,Yb)),l=[...s,...c],u=new Wm;u.setAttribute(`position`,new Mm(l.flatMap(e=>e.toArray()),3)),u.setAttribute(`along`,new Mm([0,0,0,0,1,1,1,1],1)),u.setIndex([0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),u.computeVertexNormals();let d=new mh(u,t);d.renderOrder=2,e.add(d)}),t}function Zb(e){let t=new Gh({uniforms:{uTime:{value:0},uWind:{value:.35}},vertexShader:`
      uniform float uTime;
      uniform float uWind;
      varying float vFold;
      varying float vHeight;
      void main() {
        vec3 p = position;
        float hang = pow(1.0 - uv.y, 1.3);
        float wave = sin(p.x * 2.1 + uTime * 0.7) * 0.6 + sin(p.x * 4.3 - uTime * 1.1 + p.y) * 0.25;
        float billow = (0.5 + 0.5 * sin(uTime * 0.23 + p.x * 0.4)) * uWind;
        p.z += hang * (wave * 0.12 + billow * 0.55);
        vFold = wave;
        vHeight = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      varying float vFold;
      varying float vHeight;
      void main() {
        // Slightly darker than the blown-out sky, so the folds read against it.
        float shade = 0.42 + 0.14 * vFold;
        float alpha = 0.5 + 0.14 * vFold - 0.12 * vHeight;
        gl_FragColor = vec4(vec3(1.0, 0.985, 0.96) * shade, alpha);
      }
    `,transparent:!0,depthWrite:!1,side:2}),n=-Nb.width/2+.12;return Pb.forEach(({z:r,width:i,bottom:a,top:o})=>{let s=o-a+.5,c=new mh(new Fh(i+.3,s,48,32),t);c.rotation.y=Math.PI/2,c.position.set(n,a+(o-a)/2+.15,r),c.renderOrder=3,e.add(c)}),t}function Qb(e,t){let n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t),a=-Nb.width/2;for(let e=0;e<t;e++){let t=Math.random()<.7,o;if(t){let e=Pb[Math.floor(Math.random()*Pb.length)];o=new Y(a,Uf.lerp(e.bottom,e.top,Math.random()),e.z+(Math.random()-.5)*e.width),o.addScaledVector(Lb,Math.random()*Yb*.8)}else o=new Y(Uf.lerp(a,-a,Math.random()),Math.random()*Nb.height,(Math.random()-.5)*Nb.depth);o.toArray(n,e*3),r[e]=Math.random()*100,i[e]=t?1:.25}let o=new Wm;o.setAttribute(`position`,new km(n,3)),o.setAttribute(`seed`,new km(r,1)),o.setAttribute(`lit`,new km(i,1));let s=new Gh({uniforms:{uTime:{value:0},uSparkle:{value:0},uPixelRatio:{value:1}},vertexShader:`
      uniform float uTime;
      uniform float uSparkle;
      uniform float uPixelRatio;
      attribute float seed;
      attribute float lit;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p += vec3(sin(uTime * 0.05 + seed), sin(uTime * 0.04 + seed * 1.7) * 0.6, cos(uTime * 0.045 + seed * 0.7)) * 0.35;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float twinkle = 0.6 + 0.4 * sin(uTime * 0.8 + seed * 5.0);
        vAlpha = lit * twinkle * (0.35 + uSparkle * 0.9);
        gl_PointSize = min((1.2 + lit * 1.6) * (24.0 / -mv.z), 5.0) * uPixelRatio;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d) * vAlpha;
        gl_FragColor = vec4(vec3(1.0, 0.96, 0.9) * a, 1.0);
      }
    `,transparent:!0,depthWrite:!1,blending:2}),c=new Dh(o,s);return c.renderOrder=4,e.add(c),s.userData.geometry=o,s}var $b={uniforms:{tDiffuse:{value:null},uTime:{value:0},uAge:{value:.35},uDream:{value:.3},uPower:{value:0},uResolution:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uAge;
    uniform float uDream;
    uniform float uPower;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec3 color = texture2D(tDiffuse, vUv).rgb;

      // Faded film: lifted blacks and a little less saturation with age.
      float luma = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(color, vec3(luma), 0.15 * uAge);
      color = color * (1.0 - 0.05 * uAge) + vec3(0.025, 0.022, 0.02) * uAge;

      // Dream: pastel, airy colour. Blacks lift, saturation softens, and the
      // light leans faintly lilac in the shadows and peach in the highlights.
      float dl = dot(color, vec3(0.299, 0.587, 0.114));
      vec3 pastel = mix(vec3(dl), color, 0.8) * 0.9 + vec3(0.07);
      pastel += mix(vec3(0.012, 0.0, 0.03), vec3(0.03, 0.012, 0.0), dl);
      color = mix(color, pastel, uDream * 0.7);

      // Filmic grade: a gentle S-curve, cool shadows and warm highlights.
      color = clamp(color, 0.0, 1.0);
      vec3 curved = color * color * (3.0 - 2.0 * color);
      color = mix(color, curved, 0.35);
      float tone = dot(color, vec3(0.299, 0.587, 0.114));
      color += mix(vec3(-0.012, 0.0, 0.018), vec3(0.018, 0.008, -0.012), tone);

      // Fine grain, strongest in the midtones where film shows it.
      float grain = hash(floor(vUv * uResolution) + fract(uTime * 7.0) * 100.0) - 0.5;
      color += grain * (0.012 + 0.03 * uAge) * (1.0 - abs(tone - 0.5));

      vec2 c = vUv - 0.5;
      float vignette = smoothstep(0.85, 0.25, length(c * vec2(1.0, 1.15)));
      color *= mix(0.74, 1.0, vignette);

      // Fade in from black, easing so the room seems to brighten into view.
      float fade = uPower * uPower * (3.0 - 2.0 * uPower);
      gl_FragColor = vec4(color * fade, 1.0);
    }
  `},ex=1.6,tx=1.4,nx=2.6,rx=.0042,ix=.6,ax=.45,ox=6,sx={KeyW:[0,1],ArrowUp:[0,1],KeyS:[0,-1],ArrowDown:[0,-1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};function cx({camera:e,canvas:t,scene:n,start:r,facing:i}){let a=new Y(r.x,ex,r.z),o=new Y,s=i.clone().sub(r),c=Math.atan2(-s.x,-s.z),l=Math.atan2(s.y,Math.hypot(s.x,s.z)),u=null,d=0,f=!1,p=new Set,m=ux(n);e.rotation.order=`YXZ`;let h={x:[-Nb.width/2+ix,Nb.width/2-ix],z:[-Nb.depth/2+ix,Nb.depth/2-ix]},g=null;t.addEventListener(`pointerdown`,e=>{f&&(g={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,moved:0},t.setPointerCapture(e.pointerId),t.classList.add(`is-dragging`))}),t.addEventListener(`pointermove`,e=>{if(!g||e.pointerId!==g.id)return;let t=e.clientX-g.lastX,n=e.clientY-g.lastY;g.lastX=e.clientX,g.lastY=e.clientY,g.moved=Math.max(g.moved,Math.hypot(e.clientX-g.x,e.clientY-g.y)),!(g.moved<ox)&&(c-=t*rx,l=Uf.clamp(l-n*rx,-1.1,1.1))}),t.addEventListener(`pointerup`,e=>{g&&e.pointerId===g.id&&(g.moved<ox&&b(e.clientX,e.clientY),g=null,t.classList.remove(`is-dragging`))}),t.addEventListener(`pointercancel`,()=>{g=null,t.classList.remove(`is-dragging`)}),window.addEventListener(`keydown`,e=>{f&&!e.target.closest?.(`input, button`)&&(sx[e.code]||e.code===`ShiftLeft`||e.code===`ShiftRight`)&&(p.add(e.code),u=null,e.preventDefault())}),window.addEventListener(`keyup`,e=>p.delete(e.code)),window.addEventListener(`blur`,()=>p.clear());let _=new Zg,v=new Jm(new Y(0,1,0),0),y=new Y;function b(n,r){let i=t.getBoundingClientRect(),a=new J((n-i.left)/i.width*2-1,-((r-i.top)/i.height)*2+1);_.setFromCamera(a,e),_.ray.intersectPlane(v,y)&&(y.x=Uf.clamp(y.x,...h.x),y.z=Uf.clamp(y.z,...h.z),u=y.clone(),m.show(u))}let x=new Y,S=new Y,C=new Y;return{set enabled(e){f=e,e||(p.clear(),g=null,u=null)},get enabled(){return f},update(t,n,r){S.set(-Math.sin(c),0,-Math.cos(c)),C.set(-S.z,0,S.x),x.set(0,0,0);let i=tx;if(p.size)p.forEach(e=>{let t=sx[e];t&&x.addScaledVector(C,t[0]).addScaledVector(S,t[1])}),(p.has(`ShiftLeft`)||p.has(`ShiftRight`))&&(i=nx),x.lengthSq()>0&&x.normalize().multiplyScalar(i);else if(u){x.set(u.x-a.x,0,u.z-a.z);let e=x.length();e<.05?(u=null,x.set(0,0,0)):x.multiplyScalar(Math.min(i,e*1.2)/e)}o.x=Uf.damp(o.x,x.x,4,t),o.z=Uf.damp(o.z,x.z,4,t),a.addScaledVector(o,t),a.x=Uf.clamp(a.x,...h.x),a.z=Uf.clamp(a.z,...h.z),Fb.forEach(e=>lx(a,e));let s=Math.min(o.length()/tx,1.5);d+=o.length()*t*2.2,e.position.set(a.x+r.x,ex+Math.sin(d*2)*.022*s+r.y,a.z+r.z),e.rotation.set(l+Math.sin(d)*.004*s,c+r.yaw,0),m.update(t)}}}function lx(e,{x:t,z:n,size:r}){let i=r/2+ax,a=e.x-t,o=e.z-n;Math.abs(a)>=i||Math.abs(o)>=i||(i-Math.abs(a)<i-Math.abs(o)?e.x=t+Math.sign(a||1)*i:e.z=n+Math.sign(o||1)*i)}function ux(e){let t=new mh(new Ih(.16,.2,48),new nh({color:`#ffffff`,transparent:!0,opacity:0,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.01,e.add(t);let n=0;return{show(e){t.position.x=e.x,t.position.z=e.z,n=1},update(e){n=Math.max(0,n-e*.6),t.material.opacity=n*.6,t.scale.setScalar(1+(1-n)*.8)}}}var dx=3.2,fx=1.1,px=3600,mx={palette:`plaster`,dream:.3,motes:0,clouds:!1,floor:`glossy`},hx=Uf.lerp,gx=Uf.damp;function _x(e,{quality:t=`hd`}={}){let n=qb[t],r={...mx},i=matchMedia(`(prefers-reduced-motion: reduce)`).matches,a=new vb({canvas:e,antialias:!1,powerPreference:`high-performance`});a.shadowMap.enabled=!0,a.shadowMap.type=1,a.toneMapping=4,a.toneMappingExposure=.9;let o=new Xp;o.background=new Z(`#e9ecef`),o.fog=new Yp(`#e9ecef`,.014);let s=new Og(52,1,.1,80),c=new Y(4.2,1.55,8.2),l=new Y(-3.2,1.35,-2.5),{sun:u,fill:d,floor:f,sky:p,wallMaterial:m,trim:h}=Bb(o,{shadowSize:n.shadow});f.material.transparent=!0;let g=null,_=Xb(o),v=Zb(o),y=Qb(o,px),b=Gb(o),x=0,S=new Db(a,new up(1,1,{type:Ku,samples:n.samples}));S.addPass(new Ob(o,s));let C=new Ab(new J(256,256),.28,.7,.95);S.addPass(C),S.addPass(new Mb);let w=new wb($b);w.uniforms.uResolution.value=new J,S.addPass(w);let T={exposure:.9,sunIntensity:3.6,fog:.014,shafts:.07,wind:.35,warmth:.5},E={dream:r.dream,motes:0,clouds:0,ripple:0},D=new Z(Wb.plaster.haze),O={daylight:{exposure:0,sun:1,warmth:0,sky:1},dusk:{exposure:-.1,sun:.65,warmth:.4,sky:.8},night:{exposure:-.38,sun:.2,warmth:-.45,sky:.35}},k={...O.daylight},A=O.daylight,j=p.material.uniforms.uColor.value,ee=j.clone(),M=0,N=0,P={power:0,powerTarget:0,gust:0,sparkle:0,timeScale:1,chordLift:0},F=new Z(`#ffe6cc`),te=new Z(`#f4f7ff`),ne=cx({camera:s,canvas:e,scene:o,start:c,facing:l}),re={x:0,y:0,z:0,yaw:0};function ie(){let e=window.innerWidth,t=window.innerHeight,r=Math.min(window.devicePixelRatio,n.ratioCap)*n.scale;a.setPixelRatio(r),a.setSize(e,t,!1),S.setPixelRatio(r),S.setSize(e,t),w.uniforms.uResolution.value.set(e*r,t*r),y.uniforms.uPixelRatio.value=r,b.uniforms.uPixelRatio.value=r,g?.getRenderTarget().setSize(Math.round(e*r*n.mirror),Math.round(t*r*n.mirror)),s.aspect=e/t,s.fov=s.aspect<1?70:52,s.updateProjectionMatrix()}window.addEventListener(`resize`,ie);function I(){[S.renderTarget1,S.renderTarget2].forEach(e=>{e.samples!==n.samples&&(e.samples=n.samples,e.dispose())}),u.shadow.mapSize.x!==n.shadow&&(u.shadow.mapSize.set(n.shadow,n.shadow),u.shadow.map?.dispose(),u.shadow.map=null),n.mirror>0&&!g&&(g=Kb(o,{width:512,height:512})),y.userData.geometry.setDrawRange(0,n.dust),ae(),ie()}function ae(){let e=g&&n.mirror>0&&r.floor!==`tile`;g&&(g.visible=e),f.material.opacity=e?r.floor===`water`?.5:.8:1}function oe(){let e=Wb[r.palette]??Wb.plaster;m.color.set(e.wall),h.color.set(e.trim),f.material.color.set(e.floor),D.set(e.haze)}I(),S.render();let se=new Ig,ce=0;function le(e){se.update(e);let t=Math.min(se.getDelta(),.1),n=P.powerTarget>P.power?t/dx:-t/fx;if(P.power=Uf.clamp(P.power+n,0,1),P.power===0&&P.powerTarget===0){S.render(),a.setAnimationLoop(null);return}ce+=t*P.timeScale;let s=ce;P.gust=gx(P.gust,0,.6,t),P.sparkle=gx(P.sparkle,0,.9,t),P.chordLift=gx(P.chordLift,0,.15,t),N=gx(N,M,.5,t);for(let e in k)k[e]=gx(k[e],A[e],.4,t);E.dream=gx(E.dream,r.dream,2,t),E.motes=gx(E.motes,r.motes,1.5,t),E.clouds=gx(E.clouds,+!!r.clouds,.8,t),E.ripple=gx(E.ripple,+(r.floor===`water`),1.5,t),j.copy(ee).multiplyScalar(k.sky*(1-N*.25)),p.material.uniforms.uTime.value=s,p.material.uniforms.uClouds.value=Math.max(E.clouds,N*.8),o.background.lerp(D,.05),o.fog.color.copy(o.background),C.strength=hx(.2,.85,E.dream)+P.chordLift*.08,C.radius=hx(.6,1,E.dream),C.threshold=hx(.95,.72,E.dream),w.uniforms.uDream.value=E.dream,b.uniforms.uTime.value=s,b.uniforms.uStrength.value=E.motes,b.uniforms.uPulse.value=P.sparkle,g&&(g.material.uniforms.uTime.value=s,g.material.uniforms.uRipple.value=E.ripple),a.toneMappingExposure=gx(a.toneMappingExposure,T.exposure+k.exposure-N*.12+P.chordLift*.08,1.5,t),u.intensity=gx(u.intensity,T.sunIntensity*k.sun*(1-N*.55)+P.chordLift*.6,1.5,t),u.color.lerpColors(te,F,Uf.clamp(T.warmth+k.warmth,0,1)),d.intensity=(1+P.chordLift*.15)*(.55+.45*k.sky),o.fog.density=gx(o.fog.density,T.fog+N*.012+E.dream*.008,1.5,t),_.uniforms.uOpacity.value=gx(_.uniforms.uOpacity.value,T.shafts*(1+E.dream*.8)*(1-N*.6),1.5,t),_.uniforms.uTime.value=s,v.uniforms.uTime.value=s,v.uniforms.uWind.value=T.wind+P.gust+N*.2,y.uniforms.uTime.value=s,y.uniforms.uSparkle.value=P.sparkle;let c=+!i;re.x=Math.sin(s*.031)*.04*c,re.y=Math.sin(s*.047)*.03*c,re.z=Math.sin(s*.019)*.04*c,re.yaw=Math.sin(s*.023)*.012*c,ne.update(t,s,re),w.uniforms.uTime.value=se.getElapsed(),w.uniforms.uPower.value=P.power,S.render()}return{powerOn(){P.powerTarget=1,ne.enabled=!0,a.setAnimationLoop(le)},powerOff(){P.powerTarget=0,ne.enabled=!1},setKnob(e,t){switch(e){case`tone`:T.exposure=hx(.75,1.05,t),T.warmth=1-t;break;case`space`:T.fog=hx(.006,.03,t),T.shafts=hx(.035,.11,t);break;case`tapeAge`:w.uniforms.uAge.value=t;break;case`chorus`:T.wind=hx(.15,.7,t);break;case`speed`:P.timeScale=hx(.5,1.5,t)}},setMood(e){A=O[e]??O.daylight},setRain(e){M=e},setQuality(e){qb[e]&&(n=qb[e],I(),P.power===0&&S.render())},setRoom(e,t){r[e]=t,e===`palette`&&oe(),e===`floor`&&ae()},get canReflect(){return n.mirror>0},onNote({velocity:e}){if(P.gust=Math.min(P.gust+e*.6,.8),P.sparkle=Math.min(P.sparkle+e*1.6,1),g&&r.floor===`water`){let e=g.material.uniforms.uRings.value[x++%4],t=s.getWorldDirection(new Y).multiplyScalar(3+Math.random()*6);e.set(s.position.x+t.x+(Math.random()-.5)*4,s.position.z+t.z+(Math.random()-.5)*4,ce)}},onChord(){P.chordLift=1}}}var vx=270,yx=-135,bx=180;function xx(e,{size:t=`normal`}={}){let n=document.createElement(`span`);n.className=`dial dial--${t}`,n.innerHTML=`
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path class="dial__track" d="${Sx(yx,135)}" />
      <path class="dial__value" />
      <circle class="dial__cap" cx="20" cy="20" r="11" />
      <line class="dial__mark" x1="20" y1="13" x2="20" y2="9.5" />
    </svg>`,e.classList.add(`dial__input`),e.replaceWith(n),n.prepend(e);let r=n.querySelector(`.dial__value`),i=n.querySelector(`.dial__mark`),a=()=>Number(e.min||0),o=()=>Number(e.max||100);function s(){let t=(Number(e.value)-a())/(o()-a()),s=yx+vx*t;r.setAttribute(`d`,t>.001?Sx(yx,s):``),i.setAttribute(`transform`,`rotate(${s} 20 20)`),n.classList.toggle(`is-disabled`,e.disabled)}function c(t){let n=Number(e.step)||1,r=Math.min(o(),Math.max(a(),Math.round(t/n)*n));r!==Number(e.value)&&(e.value=r,e.dispatchEvent(new Event(`input`,{bubbles:!0})))}let l=null;n.addEventListener(`pointerdown`,t=>{e.disabled||(t.preventDefault(),n.setPointerCapture(t.pointerId),l={y:t.clientY,value:Number(e.value)},n.classList.add(`is-turning`),e.focus({preventScroll:!0}))}),n.addEventListener(`pointermove`,e=>{if(!l)return;let t=(o()-a())/(e.shiftKey?720:bx);c(l.value+(l.y-e.clientY)*t)});let u=()=>{l=null,n.classList.remove(`is-turning`)};n.addEventListener(`pointerup`,u),n.addEventListener(`pointercancel`,u),n.addEventListener(`wheel`,t=>{e.disabled||(t.preventDefault(),c(Number(e.value)-Math.sign(t.deltaY)*(o()-a())*.02))},{passive:!1});let d=e.getAttribute(`value`)??e.value;return n.addEventListener(`dblclick`,()=>c(Number(n.dataset.default??d))),e.addEventListener(`input`,s),n.redraw=s,s(),n}function Sx(e,t){let n=e=>{let t=(e-90)*Math.PI/180;return`${(20+16*Math.cos(t)).toFixed(2)} ${(20+16*Math.sin(t)).toFixed(2)}`},r=+(t-e>180);return`M ${n(e)} A 16 16 0 ${r} 1 ${n(t)}`}var Cx=`omni.melody`,wx=5e3;function Tx({engine:e,onChange:t}){let n=document.getElementById(`melody`),r=document.getElementById(`melody-grid`),i=document.getElementById(`melody-pages`),a=document.getElementById(`melody-play`),o=n.querySelectorAll(`[data-bars]`),s=n.querySelectorAll(`[data-instrument]`),c=document.getElementById(`melody-page-label`),l=document.getElementById(`melody-prev`),u=document.getElementById(`melody-next`),d=0,f=0,p=[],m=()=>matchMedia(`(max-width: 600px)`).matches?2:4,h=()=>Math.ceil(e.melody.bars/m());e.setMelody(_()??nu(8));function g(){try{localStorage.setItem(Cx,JSON.stringify(e.melody))}catch{}}function _(){try{let e=JSON.parse(localStorage.getItem(Cx));if(Xl.includes(e?.bars)&&Array.isArray(e.notes))return e}catch{}return null}function v(t){return ec($l(su[e.moodName],t),`midi`).toNote().replace(/\d/,``)}function y(){let t=m()*8,n=d*t;r.style.setProperty(`--steps`,t),r.replaceChildren(),p=[];for(let i=12;i>=0;i--){let a=document.createElement(`span`);a.className=`melody__note`,a.textContent=v(i),r.append(a);for(let a=0;a<t;a++){let t=n+a,o=document.createElement(`button`);o.type=`button`,o.className=`melody__cell`,a%8==0?o.classList.add(`is-bar`):a%2==0&&o.classList.add(`is-beat`),i%6==0&&o.classList.add(`is-root`);let s=e.melody.notes.some(e=>e.step===t&&e.row===i);o.setAttribute(`aria-pressed`,String(s)),o.setAttribute(`aria-label`,`${v(i)}, bar ${Math.floor(t/8)+1}, step ${t%8+1}`),o.dataset.step=t,o.dataset.row=i,(p[a]??=[]).push(o),r.append(o)}}let f=d*m()+1;i.hidden=h()<2,c.textContent=`bars ${f}–${f+m()-1} of ${e.melody.bars}`,l.disabled=d===0,u.disabled=d>=h()-1,o.forEach(t=>t.setAttribute(`aria-checked`,String(Number(t.dataset.bars)===e.melody.bars))),s.forEach(t=>t.setAttribute(`aria-checked`,String(t.dataset.instrument===e.melodyInstrument))),a.setAttribute(`aria-pressed`,String(e.layers.melody.on)),a.textContent=e.layers.melody.on?`playing`:`play`}function b(){g(),t?.()}function x(n){e.setLayer(`melody`,{on:n}),y(),t?.()}r.addEventListener(`click`,t=>{let n=t.target.closest(`.melody__cell`);if(!n)return;let r=Number(n.dataset.step),i=Number(n.dataset.row),a=tu(e.melody,r,i);n.setAttribute(`aria-pressed`,String(a)),a&&e.previewNote(i),f=performance.now(),e.layers.melody.on||x(!0),b()});let S=e=>{d=Math.max(0,Math.min(h()-1,d+e)),f=performance.now(),y()};l.addEventListener(`click`,()=>S(-1)),u.addEventListener(`click`,()=>S(1)),s.forEach(t=>t.addEventListener(`click`,()=>{e.setMelodyInstrument(t.dataset.instrument),y(),b()})),a.addEventListener(`click`,()=>x(!e.layers.melody.on)),document.getElementById(`melody-new`).addEventListener(`click`,()=>{e.setMelody({...nu(e.melody.bars),instrument:e.melody.instrument}),d=0,e.layers.melody.on||x(!0),y(),b()}),document.getElementById(`melody-clear`).addEventListener(`click`,()=>{e.setMelody({...eu(e.melody.bars),instrument:e.melody.instrument}),y(),b()}),o.forEach(t=>t.addEventListener(`click`,()=>{let n=Number(t.dataset.bars);e.setMelody(Ex(e.melody,n)),d=Math.min(d,h()-1),y(),b()}));let C=[];return e.addEventListener(`step`,({detail:e})=>{if(n.hidden)return;let t=m()*8,r=Math.floor(e.step/t);r!==d&&performance.now()-f>wx&&(d=r,y()),C.forEach(e=>e.classList.remove(`is-now`)),C=r===d?p[e.step%t]??[]:[],C.forEach(e=>e.classList.add(`is-now`))}),e.addEventListener(`mood`,y),matchMedia(`(max-width: 600px)`).addEventListener(`change`,()=>{d=0,y()}),y(),{render:y}}function Ex(e,t){let n=e.bars*8,r=[];for(let i=0;i<t*8;i+=n)e.notes.forEach(e=>{e.step+i<t*8&&r.push({step:e.step+i,row:e.row})});return{bars:t,notes:r,instrument:e.instrument}}var Dx=4e3,Ox=7e3,kx=3200,Ax=(e,t)=>{try{return JSON.parse(localStorage.getItem(`omni.${e}`))??t}catch{return t}},jx=(e,t)=>{try{localStorage.setItem(`omni.${e}`,JSON.stringify(t))}catch{}},Mx=Ax(`quality`,Jb());qb[Mx]||(Mx=Jb());var Nx=new Ou,Px=_x(document.getElementById(`scene`),{quality:Mx}),Fx=document.getElementById(`begin`),Ix=document.getElementById(`pause`),Lx=document.getElementById(`volume`);Fx.addEventListener(`click`,async()=>{Fx.disabled=!0,Px.powerOn(),document.body.classList.add(`is-playing`),await Nx.play(),Fx.disabled=!1,lS(),fS()}),Ix.addEventListener(`click`,()=>{Nx.pause(),Px.powerOff(),Nx.recording&&setTimeout(sS,kx),qx(null),document.body.classList.remove(`is-playing`,`is-idle`),uS.classList.remove(`is-visible`),Fx.focus({preventScroll:!0})}),Lx.addEventListener(`input`,()=>Nx.setVolume(Number(Lx.value))),xx(Lx).dataset.default=Lx.value;var Rx={};document.querySelectorAll(`#knobs input[name]`).forEach(e=>{Rx[e.name]=e,e.value=wu[e.name],Px.setKnob(e.name,Number(e.value)),e.addEventListener(`input`,()=>{Nx.setKnob(e.name,Number(e.value)),Px.setKnob(e.name,Number(e.value))}),xx(e).dataset.default=e.value}),Nx.addEventListener(`note`,({detail:e})=>Px.onNote(e)),Nx.addEventListener(`chord`,({detail:e})=>Px.onChord(e));var zx={soft:`lighter on older devices`,balanced:`smooth edges, good for phones`,hd:`sharp, full resolution`,ultra:`sharpest, needs a strong graphics card`},Bx=document.querySelectorAll(`[data-quality]`);function Vx(){Bx.forEach(e=>e.setAttribute(`aria-checked`,String(e.dataset.quality===Mx))),document.getElementById(`quality-note`).textContent=zx[Mx],document.getElementById(`floor-note`).hidden=Px.canReflect}Bx.forEach(e=>e.addEventListener(`click`,()=>{Mx=e.dataset.quality,Px.setQuality(Mx),jx(`quality`,Mx),Vx()}));var Hx={...mx,...Ax(`room`,{})};function Ux(e,t){Hx[e]=t,Px.setRoom(e,t),jx(`room`,Hx),Wx()}function Wx(){document.querySelectorAll(`[data-palette]`).forEach(e=>e.setAttribute(`aria-checked`,String(e.dataset.palette===Hx.palette))),document.querySelectorAll(`[data-floor]`).forEach(e=>e.setAttribute(`aria-checked`,String(e.dataset.floor===Hx.floor))),Gx.setAttribute(`aria-pressed`,String(Hx.clouds))}var Gx=document.getElementById(`room-clouds`);Gx.addEventListener(`click`,()=>Ux(`clouds`,!Hx.clouds)),document.querySelectorAll(`[data-palette]`).forEach(e=>e.addEventListener(`click`,()=>Ux(`palette`,e.dataset.palette))),document.querySelectorAll(`[data-floor]`).forEach(e=>e.addEventListener(`click`,()=>Ux(`floor`,e.dataset.floor))),[[`room-dream`,`dream`],[`room-motes`,`motes`]].forEach(([e,t])=>{let n=document.getElementById(e);n.value=Hx[t],n.addEventListener(`input`,()=>Ux(t,Number(n.value))),xx(n).dataset.default=mx[t]}),Object.entries(Hx).forEach(([e,t])=>Px.setRoom(e,t)),Wx(),Vx();var Kx=document.querySelectorAll(`[data-panel]`);function qx(e){Kx.forEach(t=>{let n=t.dataset.panel===e;document.getElementById(t.dataset.panel).hidden=!n,t.setAttribute(`aria-expanded`,String(n))})}Kx.forEach(e=>e.addEventListener(`click`,()=>{qx(e.getAttribute(`aria-expanded`)===`true`?null:e.dataset.panel)})),window.addEventListener(`keydown`,e=>{let t=document.querySelector(`[data-panel][aria-expanded="true"]`);e.key===`Escape`&&t&&(qx(null),t.focus())});var Jx=document.querySelectorAll(`[data-mood]`);function Yx(e){Jx.forEach(t=>t.setAttribute(`aria-checked`,String(t.dataset.mood===e))),Px.setMood(e)}Jx.forEach(e=>e.addEventListener(`click`,()=>Nx.setMood(e.dataset.mood))),Nx.addEventListener(`mood`,({detail:e})=>Yx(e.name)),Yx(Nx.moodName);var Xx=document.getElementById(`drift`);Xx.addEventListener(`click`,()=>{Nx.setDrift(!Nx.drift),Xx.setAttribute(`aria-pressed`,String(Nx.drift))});var Zx=document.getElementById(`density`);Zx.value=Nx.density,Zx.addEventListener(`input`,()=>Nx.setDensity(Number(Zx.value)));var Qx=xx(Zx);Qx.dataset.default=Zx.value,Nx.addEventListener(`density`,({detail:e})=>{Zx.value=e.value,Qx.redraw()});var $x=document.getElementById(`layer-list`),eS={};uu.forEach(({id:e,label:t})=>{let n=document.createElement(`li`);n.className=`layer`,n.innerHTML=`<button type="button" class="layer__toggle"></button><input type="range" min="0" max="1" step="0.01" />`;let r=n.querySelector(`button`),i=n.querySelector(`input`);r.textContent=t,i.setAttribute(`aria-label`,`${t} level`);let a=xx(i,{size:`small`}),o=()=>{let{on:t,level:n}=Nx.layers[e];r.setAttribute(`aria-pressed`,String(t)),i.value=n,i.disabled=!t,a.redraw(),e===`rain`&&Px.setRain(t?n:0)};eS[e]=o,r.addEventListener(`click`,()=>{Nx.setLayer(e,{on:!Nx.layers[e].on}),o(),e===`melody`&&tS.render()}),i.addEventListener(`input`,()=>{Nx.setLayer(e,{level:Number(i.value)}),o()}),a.dataset.default=Nx.layers[e].level,o(),$x.append(n)});var tS=Tx({engine:Nx,onChange:()=>eS.melody()}),nS={mood:`dusk`,density:.35,knobs:{tone:.4,space:1,tapeAge:.6,chorus:.45,speed:.3},layers:{drone:!0,pad:!0,bells:!1,piano:!1,melody:!1,guitar:!0,acoustic:!1,bass:!0,rain:!1}};document.getElementById(`preset-haze`).addEventListener(`click`,()=>{Nx.setMood(nS.mood),Nx.setDensity(nS.density),Object.entries(nS.knobs).forEach(([e,t])=>{Rx[e].value=t,Rx[e].dispatchEvent(new Event(`input`,{bubbles:!0}))}),Object.entries(nS.layers).forEach(([e,t])=>{Nx.setLayer(e,{on:t}),eS[e]()}),tS.render()});var rS=document.getElementById(`record`),iS=document.getElementById(`record-time`),aS;rS.addEventListener(`click`,()=>{Nx.recording?sS():oS()});function oS(){if(!Nx.startRecording()){iS.textContent=`n/a`,rS.title=`This browser cannot record audio`;return}rS.setAttribute(`aria-pressed`,`true`),rS.setAttribute(`aria-label`,`Stop recording and save`),document.body.classList.add(`is-recording`);let e=()=>{let e=Math.floor((performance.now()-Nx.recordStarted)/1e3);iS.textContent=`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`};e(),aS=setInterval(e,500)}async function sS(){if(!Nx.recording)return;clearInterval(aS),rS.classList.add(`is-saving`),iS.textContent=`saving`;let{blob:e,extension:t}=await Nx.stopRecording(),n=new Date().toISOString().slice(0,16).replace(`T`,` `).replace(`:`,`.`),r=document.createElement(`a`);r.href=URL.createObjectURL(e),r.download=`omni ${Nx.moodName} ${n}.${t}`,document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(r.href),6e4),rS.classList.remove(`is-saving`),rS.setAttribute(`aria-pressed`,`false`),rS.setAttribute(`aria-label`,`Record`),iS.textContent=`rec`,document.body.classList.remove(`is-recording`)}var cS;function lS(){document.body.classList.remove(`is-idle`),clearTimeout(cS),cS=setTimeout(()=>{Nx.playing&&!document.querySelector(`.dock:focus-within, .panel:focus-within, .is-turning`)&&document.body.classList.add(`is-idle`)},Dx)}window.addEventListener(`pointermove`,e=>{e.buttons===0&&(e.clientY>window.innerHeight*.7||e.target.closest(`.panel`))&&lS()},{passive:!0}),window.addEventListener(`pointerdown`,e=>{e.target.closest(`.dock, .panel`)&&lS()},{passive:!0}),window.addEventListener(`keydown`,e=>{(e.key===`Tab`||e.key===`Escape`)&&lS()});var uS=document.getElementById(`walk-hint`),dS;function fS(){uS.classList.add(`is-visible`),clearTimeout(dS),dS=setTimeout(()=>uS.classList.remove(`is-visible`),Ox)}