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

/***/ "./node_modules/debounce-promise/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debounce-promise/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/* global setTimeout, clearTimeout */\n\nmodule.exports = function debounce(fn) {\n  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var lastCallAt = void 0;\n  var deferred = void 0;\n  var timer = void 0;\n  var pendingArgs = [];\n  return function debounced() {\n    var currentWait = getWait(wait);\n    var currentTime = new Date().getTime();\n\n    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;\n\n    lastCallAt = currentTime;\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (isCold && options.leading) {\n      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {\n        return result[0];\n      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));\n    }\n\n    if (deferred) {\n      clearTimeout(timer);\n    } else {\n      deferred = defer();\n    }\n\n    pendingArgs.push(args);\n    timer = setTimeout(flush.bind(this), currentWait);\n\n    if (options.accumulate) {\n      var _ret = function () {\n        var argsIndex = pendingArgs.length - 1;\n        return {\n          v: deferred.promise.then(function (results) {\n            return results[argsIndex];\n          })\n        };\n      }();\n\n      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n    }\n\n    return deferred.promise;\n  };\n\n  function flush() {\n    var thisDeferred = deferred;\n    clearTimeout(timer);\n\n    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);\n\n    pendingArgs = [];\n    deferred = null;\n  }\n};\n\nfunction getWait(wait) {\n  return typeof wait === 'function' ? wait() : wait;\n}\n\nfunction defer() {\n  var deferred = {};\n  deferred.promise = new Promise(function (resolve, reject) {\n    deferred.resolve = resolve;\n    deferred.reject = reject;\n  });\n  return deferred;\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZGVib3VuY2UtcHJvbWlzZS9kaXN0L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYm91bmNlLXByb21pc2UvZGlzdC9pbmRleC5qcz8zNjViIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKiBnbG9iYWwgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0ICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHdhaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICB2YXIgbGFzdENhbGxBdCA9IHZvaWQgMDtcbiAgdmFyIGRlZmVycmVkID0gdm9pZCAwO1xuICB2YXIgdGltZXIgPSB2b2lkIDA7XG4gIHZhciBwZW5kaW5nQXJncyA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciBjdXJyZW50V2FpdCA9IGdldFdhaXQod2FpdCk7XG4gICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICB2YXIgaXNDb2xkID0gIWxhc3RDYWxsQXQgfHwgY3VycmVudFRpbWUgLSBsYXN0Q2FsbEF0ID4gY3VycmVudFdhaXQ7XG5cbiAgICBsYXN0Q2FsbEF0ID0gY3VycmVudFRpbWU7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaXNDb2xkICYmIG9wdGlvbnMubGVhZGluZykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuYWNjdW11bGF0ZSA/IFByb21pc2UucmVzb2x2ZShmbi5jYWxsKHRoaXMsIFthcmdzXSkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0WzBdO1xuICAgICAgfSkgOiBQcm9taXNlLnJlc29sdmUoZm4uY2FsbC5hcHBseShmbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuICAgIH1cblxuICAgIGlmIChkZWZlcnJlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIH1cblxuICAgIHBlbmRpbmdBcmdzLnB1c2goYXJncyk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZsdXNoLmJpbmQodGhpcyksIGN1cnJlbnRXYWl0KTtcblxuICAgIGlmIChvcHRpb25zLmFjY3VtdWxhdGUpIHtcbiAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJnc0luZGV4ID0gcGVuZGluZ0FyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiBkZWZlcnJlZC5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzW2FyZ3NJbmRleF07XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcblxuICAgICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciB0aGlzRGVmZXJyZWQgPSBkZWZlcnJlZDtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKG9wdGlvbnMuYWNjdW11bGF0ZSA/IGZuLmNhbGwodGhpcywgcGVuZGluZ0FyZ3MpIDogZm4uYXBwbHkodGhpcywgcGVuZGluZ0FyZ3NbcGVuZGluZ0FyZ3MubGVuZ3RoIC0gMV0pKS50aGVuKHRoaXNEZWZlcnJlZC5yZXNvbHZlLCB0aGlzRGVmZXJyZWQucmVqZWN0KTtcblxuICAgIHBlbmRpbmdBcmdzID0gW107XG4gICAgZGVmZXJyZWQgPSBudWxsO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRXYWl0KHdhaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiB3YWl0ID09PSAnZnVuY3Rpb24nID8gd2FpdCgpIDogd2FpdDtcbn1cblxuZnVuY3Rpb24gZGVmZXIoKSB7XG4gIHZhciBkZWZlcnJlZCA9IHt9O1xuICBkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGRlZmVycmVkLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/debounce-promise/dist/index.js\n");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var element_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ready */ \"./node_modules/element-ready/index.js\");\n/* harmony import */ var element_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ready__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce-promise */ \"./node_modules/debounce-promise/dist/index.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _google_cse_customization_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-cse-customization.scss */ \"./src/google-cse-customization.scss\");\n/* harmony import */ var _google_cse_customization_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_google_cse_customization_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst setAttribute = (target, attr, val) => target.setAttribute(attr, val);\n\nconst debouncedSetAttribute = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(setAttribute, 100);\n\nconst gscInputCallback = (mutationsList, observer) => {\n  for (const mutation of mutationsList) {\n    console.log(mutation);\n\n    if ('style' === mutation.attributeName && '' !== mutation.target.getAttribute('style')) {\n      debouncedSetAttribute(mutation.target, 'style', '');\n    }\n  }\n};\n\n(async () => {\n  const gscInput = await element_ready__WEBPACK_IMPORTED_MODULE_0___default()('input.gsc-input');\n  console.log(gscInput);\n  gscInput.setAttribute('placeholder', 'Search');\n  gscInput.setAttribute('style', 'value');\n  const gscInputObserver = new MutationObserver(gscInputCallback);\n  gscInputObserver.observe(gscInput, {\n    attributes: true\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ29vZ2xlLWNzZS1jdXN0b21pemF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2dvb2dsZS1jc2UtY3VzdG9taXphdGlvbi5qcz8yYThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50UmVhZHkgZnJvbSAnZWxlbWVudC1yZWFkeSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2UtcHJvbWlzZSc7XG5cbmltcG9ydCAnLi9nb29nbGUtY3NlLWN1c3RvbWl6YXRpb24uc2Nzcyc7XG5cbmNvbnN0IHNldEF0dHJpYnV0ZSA9ICh0YXJnZXQsIGF0dHIsIHZhbCkgPT4gdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuY29uc3QgZGVib3VuY2VkU2V0QXR0cmlidXRlID0gZGVib3VuY2Uoc2V0QXR0cmlidXRlLCAxMDApO1xuXG5jb25zdCBnc2NJbnB1dENhbGxiYWNrID0gKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSA9PiB7XG4gIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgIGNvbnNvbGUubG9nKG11dGF0aW9uKTtcbiAgICBpZiAoJ3N0eWxlJyA9PT0gbXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiAnJyAhPT0gbXV0YXRpb24udGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSkge1xuICAgICAgZGVib3VuY2VkU2V0QXR0cmlidXRlKG11dGF0aW9uLnRhcmdldCwgJ3N0eWxlJywgJycpO1xuICAgIH1cbiAgfVxufVxuXG4oYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnc2NJbnB1dCA9IGF3YWl0IGVsZW1lbnRSZWFkeSgnaW5wdXQuZ3NjLWlucHV0Jyk7XG4gIGNvbnNvbGUubG9nKGdzY0lucHV0KTtcbiAgZ3NjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2gnKTtcbiAgZ3NjSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2YWx1ZScpO1xuXG4gIGNvbnN0IGdzY0lucHV0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihnc2NJbnB1dENhbGxiYWNrKTtcbiAgZ3NjSW5wdXRPYnNlcnZlci5vYnNlcnZlKGdzY0lucHV0LCB7XG4gICAgYXR0cmlidXRlczogdHJ1ZVxuICB9KTtcbn0pKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/google-cse-customization.js\n");

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