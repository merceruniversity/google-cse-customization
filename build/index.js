// [AIV_SHORT]  Build version: 1.0.5 - Thursday, March 21st, 2019, 1:20:18 PM  
 !function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";const n=r(2),s=new WeakMap,i=(e,t)=>{const r=s.get(e);r&&(r.delete(t),0===r.size&&s.delete(e))},c=(e,t)=>{if(t=Object.assign({target:document},t),s.has(t.target)&&s.get(t.target).has(e))return s.get(t.target).get(e);let r=!1;const c=new n((n,s,c)=>{let o;c(()=>{cancelAnimationFrame(o),i(t.target,e)}),function s(){const c=t.target.querySelector(e);c?(n(c),r=!0,i(t.target,e)):o=requestAnimationFrame(s)}()});return r||(s.has(t.target)?s.get(t.target).set(e,c):s.set(t.target,new Map([[e,c]]))),c};e.exports=c,e.exports.default=c},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n);r(3);const i=e=>"LINK"===e.tagName&&"undefined"!==e.href&&(/\/cse\/static\/element\//i.test(e.href)||/\/cse\/static\/style\/look\//i.test(e.href))||"STYLE"===e.tagName&&(/\.gsc-control-cse/i.test(e.innerHTML)||/\.gscb_a/i.test(e.innerHTML)),c=new MutationObserver(e=>{for(const t of e)"style"===t.attributeName&&""!==t.target.getAttribute("style")&&(t.target.style="")});window.__gcse={callback:()=>{const e=document.head.children;console.log([...Array.from(e)]),(e=>{if(!e)return;const t=[];for(const r of e)i(r)&&t.push(r);(e=>e.forEach(e=>e.remove()))(t)})(e),(async()=>{const e=await s()("input.gsc-input");e.setAttribute("placeholder","Search"),e.setAttribute("style",""),c.observe(e,{attributes:!0})})()}}},function(e,t,r){"use strict";class n extends Error{constructor(e){super(e||"Promise was canceled"),this.name="CancelError"}get isCanceled(){return!0}}class s{static fn(e){return(...t)=>new s((r,n,s)=>{t.push(s),e(...t).then(r,n)})}constructor(e){this._cancelHandlers=[],this._isPending=!0,this._isCanceled=!1,this._rejectOnCancel=!0,this._promise=new Promise((t,r)=>{this._reject=r;const n=e=>{this._cancelHandlers.push(e)};return Object.defineProperties(n,{shouldReject:{get:()=>this._rejectOnCancel,set:e=>{this._rejectOnCancel=e}}}),e(e=>{this._isPending=!1,t(e)},e=>{this._isPending=!1,r(e)},n)})}then(e,t){return this._promise.then(e,t)}catch(e){return this._promise.catch(e)}finally(e){return this._promise.finally(e)}cancel(e){if(this._isPending&&!this._isCanceled){if(this._cancelHandlers.length>0)try{for(const e of this._cancelHandlers)e()}catch(e){this._reject(e)}this._isCanceled=!0,this._rejectOnCancel&&this._reject(new n(e))}}get isCanceled(){return this._isCanceled}}Object.setPrototypeOf(s.prototype,Promise.prototype),e.exports=s,e.exports.default=s,e.exports.CancelError=n},function(e,t,r){}]); 