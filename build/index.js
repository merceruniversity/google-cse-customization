/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/google-cse-customization.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/element-ready/index.js":
/*!*********************************************!*\
  !*** ./node_modules/element-ready/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst PCancelable = __webpack_require__(/*! p-cancelable */ \"./node_modules/p-cancelable/index.js\");\n\nconst targetCache = new WeakMap();\n\nconst cleanCache = (target, selector) => {\n\tconst map = targetCache.get(target);\n\tif (map) {\n\t\tmap.delete(selector);\n\t\tif (map.size === 0) {\n\t\t\ttargetCache.delete(target);\n\t\t}\n\t}\n};\n\nmodule.exports = (selector, options) => {\n\toptions = Object.assign({\n\t\ttarget: document\n\t}, options);\n\n\tif (targetCache.has(options.target) && targetCache.get(options.target).has(selector)) {\n\t\treturn targetCache.get(options.target).get(selector);\n\t}\n\n\tlet alreadyFound = false;\n\tconst promise = new PCancelable((resolve, reject, onCancel) => {\n\t\tlet raf;\n\t\tonCancel(() => {\n\t\t\tcancelAnimationFrame(raf);\n\t\t\tcleanCache(options.target, selector);\n\t\t});\n\n\t\t// Interval to keep checking for it to come into the DOM\n\t\t(function check() {\n\t\t\tconst el = options.target.querySelector(selector);\n\n\t\t\tif (el) {\n\t\t\t\tresolve(el);\n\t\t\t\talreadyFound = true;\n\t\t\t\tcleanCache(options.target, selector);\n\t\t\t} else {\n\t\t\t\traf = requestAnimationFrame(check);\n\t\t\t}\n\t\t})();\n\t});\n\n\t// The element might have been found in the first synchronous check\n\tif (!alreadyFound) {\n\t\tif (targetCache.has(options.target)) {\n\t\t\ttargetCache.get(options.target).set(selector, promise);\n\t\t} else {\n\t\t\ttargetCache.set(options.target, new Map([[selector, promise]]));\n\t\t}\n\t}\n\n\treturn promise;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZWFkeS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlYWR5L2luZGV4LmpzP2E3OTIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgUENhbmNlbGFibGUgPSByZXF1aXJlKCdwLWNhbmNlbGFibGUnKTtcblxuY29uc3QgdGFyZ2V0Q2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBjbGVhbkNhY2hlID0gKHRhcmdldCwgc2VsZWN0b3IpID0+IHtcblx0Y29uc3QgbWFwID0gdGFyZ2V0Q2FjaGUuZ2V0KHRhcmdldCk7XG5cdGlmIChtYXApIHtcblx0XHRtYXAuZGVsZXRlKHNlbGVjdG9yKTtcblx0XHRpZiAobWFwLnNpemUgPT09IDApIHtcblx0XHRcdHRhcmdldENhY2hlLmRlbGV0ZSh0YXJnZXQpO1xuXHRcdH1cblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSAoc2VsZWN0b3IsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdHRhcmdldDogZG9jdW1lbnRcblx0fSwgb3B0aW9ucyk7XG5cblx0aWYgKHRhcmdldENhY2hlLmhhcyhvcHRpb25zLnRhcmdldCkgJiYgdGFyZ2V0Q2FjaGUuZ2V0KG9wdGlvbnMudGFyZ2V0KS5oYXMoc2VsZWN0b3IpKSB7XG5cdFx0cmV0dXJuIHRhcmdldENhY2hlLmdldChvcHRpb25zLnRhcmdldCkuZ2V0KHNlbGVjdG9yKTtcblx0fVxuXG5cdGxldCBhbHJlYWR5Rm91bmQgPSBmYWxzZTtcblx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQQ2FuY2VsYWJsZSgocmVzb2x2ZSwgcmVqZWN0LCBvbkNhbmNlbCkgPT4ge1xuXHRcdGxldCByYWY7XG5cdFx0b25DYW5jZWwoKCkgPT4ge1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcblx0XHRcdGNsZWFuQ2FjaGUob3B0aW9ucy50YXJnZXQsIHNlbGVjdG9yKTtcblx0XHR9KTtcblxuXHRcdC8vIEludGVydmFsIHRvIGtlZXAgY2hlY2tpbmcgZm9yIGl0IHRvIGNvbWUgaW50byB0aGUgRE9NXG5cdFx0KGZ1bmN0aW9uIGNoZWNrKCkge1xuXHRcdFx0Y29uc3QgZWwgPSBvcHRpb25zLnRhcmdldC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuXHRcdFx0aWYgKGVsKSB7XG5cdFx0XHRcdHJlc29sdmUoZWwpO1xuXHRcdFx0XHRhbHJlYWR5Rm91bmQgPSB0cnVlO1xuXHRcdFx0XHRjbGVhbkNhY2hlKG9wdGlvbnMudGFyZ2V0LCBzZWxlY3Rvcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2spO1xuXHRcdFx0fVxuXHRcdH0pKCk7XG5cdH0pO1xuXG5cdC8vIFRoZSBlbGVtZW50IG1pZ2h0IGhhdmUgYmVlbiBmb3VuZCBpbiB0aGUgZmlyc3Qgc3luY2hyb25vdXMgY2hlY2tcblx0aWYgKCFhbHJlYWR5Rm91bmQpIHtcblx0XHRpZiAodGFyZ2V0Q2FjaGUuaGFzKG9wdGlvbnMudGFyZ2V0KSkge1xuXHRcdFx0dGFyZ2V0Q2FjaGUuZ2V0KG9wdGlvbnMudGFyZ2V0KS5zZXQoc2VsZWN0b3IsIHByb21pc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRDYWNoZS5zZXQob3B0aW9ucy50YXJnZXQsIG5ldyBNYXAoW1tzZWxlY3RvciwgcHJvbWlzZV1dKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHByb21pc2U7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/element-ready/index.js\n");

/***/ }),

/***/ "./node_modules/p-cancelable/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-cancelable/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nclass CancelError extends Error {\n\tconstructor() {\n\t\tsuper('Promise was canceled');\n\t\tthis.name = 'CancelError';\n\t}\n\n\tget isCanceled() {\n\t\treturn true;\n\t}\n}\n\nclass PCancelable {\n\tstatic fn(userFn) {\n\t\treturn function () {\n\t\t\tconst args = [].slice.apply(arguments);\n\t\t\treturn new PCancelable((resolve, reject, onCancel) => {\n\t\t\t\targs.push(onCancel);\n\t\t\t\tuserFn.apply(null, args).then(resolve, reject);\n\t\t\t});\n\t\t};\n\t}\n\n\tconstructor(executor) {\n\t\tthis._cancelHandlers = [];\n\t\tthis._isPending = true;\n\t\tthis._isCanceled = false;\n\n\t\tthis._promise = new Promise((resolve, reject) => {\n\t\t\tthis._reject = reject;\n\n\t\t\treturn executor(\n\t\t\t\tvalue => {\n\t\t\t\t\tthis._isPending = false;\n\t\t\t\t\tresolve(value);\n\t\t\t\t},\n\t\t\t\terror => {\n\t\t\t\t\tthis._isPending = false;\n\t\t\t\t\treject(error);\n\t\t\t\t},\n\t\t\t\thandler => {\n\t\t\t\t\tthis._cancelHandlers.push(handler);\n\t\t\t\t}\n\t\t\t);\n\t\t});\n\t}\n\n\tthen(onFulfilled, onRejected) {\n\t\treturn this._promise.then(onFulfilled, onRejected);\n\t}\n\n\tcatch(onRejected) {\n\t\treturn this._promise.catch(onRejected);\n\t}\n\n\tfinally(onFinally) {\n\t\treturn this._promise.finally(onFinally);\n\t}\n\n\tcancel() {\n\t\tif (!this._isPending || this._isCanceled) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (this._cancelHandlers.length > 0) {\n\t\t\ttry {\n\t\t\t\tfor (const handler of this._cancelHandlers) {\n\t\t\t\t\thandler();\n\t\t\t\t}\n\t\t\t} catch (err) {\n\t\t\t\tthis._reject(err);\n\t\t\t}\n\t\t}\n\n\t\tthis._isCanceled = true;\n\t\tthis._reject(new CancelError());\n\t}\n\n\tget isCanceled() {\n\t\treturn this._isCanceled;\n\t}\n}\n\nObject.setPrototypeOf(PCancelable.prototype, Promise.prototype);\n\nmodule.exports = PCancelable;\nmodule.exports.CancelError = CancelError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcC1jYW5jZWxhYmxlL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3AtY2FuY2VsYWJsZS9pbmRleC5qcz84YTM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ2FuY2VsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCdQcm9taXNlIHdhcyBjYW5jZWxlZCcpO1xuXHRcdHRoaXMubmFtZSA9ICdDYW5jZWxFcnJvcic7XG5cdH1cblxuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5jbGFzcyBQQ2FuY2VsYWJsZSB7XG5cdHN0YXRpYyBmbih1c2VyRm4pIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgYXJncyA9IFtdLnNsaWNlLmFwcGx5KGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbmV3IFBDYW5jZWxhYmxlKChyZXNvbHZlLCByZWplY3QsIG9uQ2FuY2VsKSA9PiB7XG5cdFx0XHRcdGFyZ3MucHVzaChvbkNhbmNlbCk7XG5cdFx0XHRcdHVzZXJGbi5hcHBseShudWxsLCBhcmdzKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoZXhlY3V0b3IpIHtcblx0XHR0aGlzLl9jYW5jZWxIYW5kbGVycyA9IFtdO1xuXHRcdHRoaXMuX2lzUGVuZGluZyA9IHRydWU7XG5cdFx0dGhpcy5faXNDYW5jZWxlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuX3JlamVjdCA9IHJlamVjdDtcblxuXHRcdFx0cmV0dXJuIGV4ZWN1dG9yKFxuXHRcdFx0XHR2YWx1ZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5faXNQZW5kaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0XHR0aGlzLl9pc1BlbmRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRoYW5kbGVyID0+IHtcblx0XHRcdFx0XHR0aGlzLl9jYW5jZWxIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0dGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuXHRcdHJldHVybiB0aGlzLl9wcm9taXNlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuXHR9XG5cblx0Y2F0Y2gob25SZWplY3RlZCkge1xuXHRcdHJldHVybiB0aGlzLl9wcm9taXNlLmNhdGNoKG9uUmVqZWN0ZWQpO1xuXHR9XG5cblx0ZmluYWxseShvbkZpbmFsbHkpIHtcblx0XHRyZXR1cm4gdGhpcy5fcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSk7XG5cdH1cblxuXHRjYW5jZWwoKSB7XG5cdFx0aWYgKCF0aGlzLl9pc1BlbmRpbmcgfHwgdGhpcy5faXNDYW5jZWxlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9jYW5jZWxIYW5kbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5fY2FuY2VsSGFuZGxlcnMpIHtcblx0XHRcdFx0XHRoYW5kbGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHR0aGlzLl9yZWplY3QoZXJyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9pc0NhbmNlbGVkID0gdHJ1ZTtcblx0XHR0aGlzLl9yZWplY3QobmV3IENhbmNlbEVycm9yKCkpO1xuXHR9XG5cblx0Z2V0IGlzQ2FuY2VsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQ2FuY2VsZWQ7XG5cdH1cbn1cblxuT2JqZWN0LnNldFByb3RvdHlwZU9mKFBDYW5jZWxhYmxlLnByb3RvdHlwZSwgUHJvbWlzZS5wcm90b3R5cGUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBDYW5jZWxhYmxlO1xubW9kdWxlLmV4cG9ydHMuQ2FuY2VsRXJyb3IgPSBDYW5jZWxFcnJvcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/p-cancelable/index.js\n");

/***/ }),

/***/ "./src/google-cse-customization.js":
/*!*****************************************!*\
  !*** ./src/google-cse-customization.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var element_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ready */ \"./node_modules/element-ready/index.js\");\n/* harmony import */ var element_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ready__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _google_cse_customization_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-cse-customization.scss */ \"./src/google-cse-customization.scss\");\n/* harmony import */ var _google_cse_customization_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_google_cse_customization_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst removeAll = coll => coll.forEach(item => item.remove());\n\nconst isGcseStyling = node => 'LINK' === node.tagName && 'undefined' !== node.href && (/\\/cse\\/static\\/element\\//i.test(node.href) || /\\/cse\\/static\\/style\\/look\\//i.test(node.href)) || 'STYLE' === node.tagName && (/\\.gsc-control-cse/i.test(node.innerHTML) || /\\.gscb_a/i.test(node.innerHTML));\n\nconst removeGcseStyleNodesFromCollection = coll => {\n  if (!coll) return;\n  const nodesToRemove = [];\n\n  for (const node of coll) {\n    // console.log(node);\n    if (isGcseStyling(node)) {\n      nodesToRemove.push(node);\n    }\n  } // console.log(nodesToRemove);\n\n\n  removeAll(nodesToRemove);\n};\n\nconst gscInputMutationCallback = mutationsList => {\n  for (const mutation of mutationsList) {\n    // console.log(mutation);\n    if ('style' === mutation.attributeName && '' !== mutation.target.getAttribute('style')) {\n      mutation.target.style = '';\n    }\n  }\n};\n\nconst gscInputObserver = new MutationObserver(gscInputMutationCallback);\n\nconst gcseCallBack = () => {\n  const headChildren = document.head.children; // console.log([...Array.from(headChildren)]);\n\n  removeGcseStyleNodesFromCollection(headChildren);\n\n  (async () => {\n    const gscInput = await element_ready__WEBPACK_IMPORTED_MODULE_0___default()('input.gsc-input'); // console.log(gscInput);\n\n    gscInput.setAttribute('placeholder', 'Search');\n    gscInputObserver.observe(gscInput, {\n      attributes: true\n    });\n  })();\n};\n\nwindow.__gcse = {\n  callback: gcseCallBack\n}; // import elementReady from 'element-ready';\n// import debounce from 'debounce-promise';\n// import './google-cse-customization.scss';\n// const setAttribute = (target, attr, val) => target.setAttribute(attr, val);\n// const debouncedSetAttribute = debounce(setAttribute, 100);\n// (async () => {\n//   const gscInput = await elementReady('input.gsc-input');\n//   console.log(gscInput);\n//   gscInput.setAttribute('placeholder', 'Search');\n//   gscInput.setAttribute('style', 'value');\n//   const gscInputObserver = new MutationObserver(gscInputCallback);\n//   gscInputObserver.observe(gscInput, {\n//     attributes: true\n//   });\n// })();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ29vZ2xlLWNzZS1jdXN0b21pemF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2dvb2dsZS1jc2UtY3VzdG9taXphdGlvbi5qcz8yYThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50UmVhZHkgZnJvbSAnZWxlbWVudC1yZWFkeSc7XG5cbmltcG9ydCAnLi9nb29nbGUtY3NlLWN1c3RvbWl6YXRpb24uc2Nzcyc7XG5cbmNvbnN0IHJlbW92ZUFsbCA9IGNvbGwgPT4gY29sbC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSk7XG5cbmNvbnN0IGlzR2NzZVN0eWxpbmcgPSBub2RlID0+ICgnTElOSycgPT09IG5vZGUudGFnTmFtZSAmJlxuICAgICd1bmRlZmluZWQnICE9PSBub2RlLmhyZWYgJiZcbiAgICAoL1xcL2NzZVxcL3N0YXRpY1xcL2VsZW1lbnRcXC8vaS50ZXN0KG5vZGUuaHJlZikgfHxcbiAgICAgIC9cXC9jc2VcXC9zdGF0aWNcXC9zdHlsZVxcL2xvb2tcXC8vaS50ZXN0KG5vZGUuaHJlZikpKSB8fFxuICAoJ1NUWUxFJyA9PT0gbm9kZS50YWdOYW1lICYmXG4gICAgKC9cXC5nc2MtY29udHJvbC1jc2UvaS50ZXN0KG5vZGUuaW5uZXJIVE1MKSB8fFxuICAgICAgL1xcLmdzY2JfYS9pLnRlc3Qobm9kZS5pbm5lckhUTUwpKSk7XG5cbmNvbnN0IHJlbW92ZUdjc2VTdHlsZU5vZGVzRnJvbUNvbGxlY3Rpb24gPSBjb2xsID0+IHtcbiAgaWYgKCFjb2xsKSByZXR1cm47XG4gIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBbXTtcbiAgZm9yIChjb25zdCBub2RlIG9mIGNvbGwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhub2RlKTtcbiAgICBpZiAoaXNHY3NlU3R5bGluZyhub2RlKSkge1xuICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhub2Rlc1RvUmVtb3ZlKTtcbiAgcmVtb3ZlQWxsKG5vZGVzVG9SZW1vdmUpO1xufVxuXG5jb25zdCBnc2NJbnB1dE11dGF0aW9uQ2FsbGJhY2sgPSBtdXRhdGlvbnNMaXN0ID0+IHtcbiAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgLy8gY29uc29sZS5sb2cobXV0YXRpb24pO1xuICAgIGlmICgnc3R5bGUnID09PSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmICcnICE9PSBtdXRhdGlvbi50YXJnZXQuZ2V0QXR0cmlidXRlKCdzdHlsZScpKSB7XG4gICAgICBtdXRhdGlvbi50YXJnZXQuc3R5bGUgPSAnJztcbiAgICB9XG4gIH1cbn1cbmNvbnN0IGdzY0lucHV0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihnc2NJbnB1dE11dGF0aW9uQ2FsbGJhY2spO1xuXG5jb25zdCBnY3NlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRDaGlsZHJlbiA9IGRvY3VtZW50LmhlYWQuY2hpbGRyZW47XG4gIC8vIGNvbnNvbGUubG9nKFsuLi5BcnJheS5mcm9tKGhlYWRDaGlsZHJlbildKTtcbiAgcmVtb3ZlR2NzZVN0eWxlTm9kZXNGcm9tQ29sbGVjdGlvbihoZWFkQ2hpbGRyZW4pO1xuXG4gIChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ3NjSW5wdXQgPSBhd2FpdCBlbGVtZW50UmVhZHkoJ2lucHV0LmdzYy1pbnB1dCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdzY0lucHV0KTtcbiAgICBnc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCcpO1xuICAgIGdzY0lucHV0T2JzZXJ2ZXIub2JzZXJ2ZShnc2NJbnB1dCwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgIH0pO1xuICB9KSgpO1xufVxuXG53aW5kb3cuX19nY3NlID0ge1xuICBjYWxsYmFjazogZ2NzZUNhbGxCYWNrXG59O1xuXG4vLyBpbXBvcnQgZWxlbWVudFJlYWR5IGZyb20gJ2VsZW1lbnQtcmVhZHknO1xuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlLXByb21pc2UnO1xuXG4vLyBpbXBvcnQgJy4vZ29vZ2xlLWNzZS1jdXN0b21pemF0aW9uLnNjc3MnO1xuXG4vLyBjb25zdCBzZXRBdHRyaWJ1dGUgPSAodGFyZ2V0LCBhdHRyLCB2YWwpID0+IHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbi8vIGNvbnN0IGRlYm91bmNlZFNldEF0dHJpYnV0ZSA9IGRlYm91bmNlKHNldEF0dHJpYnV0ZSwgMTAwKTtcblxuXG5cbi8vIChhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IGdzY0lucHV0ID0gYXdhaXQgZWxlbWVudFJlYWR5KCdpbnB1dC5nc2MtaW5wdXQnKTtcbi8vICAgY29uc29sZS5sb2coZ3NjSW5wdXQpO1xuLy8gICBnc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCcpO1xuLy8gICBnc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3ZhbHVlJyk7XG5cbi8vICAgY29uc3QgZ3NjSW5wdXRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGdzY0lucHV0Q2FsbGJhY2spO1xuLy8gICBnc2NJbnB1dE9ic2VydmVyLm9ic2VydmUoZ3NjSW5wdXQsIHtcbi8vICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4vLyAgIH0pO1xuLy8gfSkoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/google-cse-customization.js\n");

/***/ }),

/***/ "./src/google-cse-customization.scss":
/*!*******************************************!*\
  !*** ./src/google-cse-customization.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ29vZ2xlLWNzZS1jdXN0b21pemF0aW9uLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ29vZ2xlLWNzZS1jdXN0b21pemF0aW9uLnNjc3M/ODQwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/google-cse-customization.scss\n");

/***/ })

/******/ });