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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/load-js/index.js":
/*!***************************************!*\
  !*** ./node_modules/load-js/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var require;/*! load-js v3.0.3 - Sat Sep 15 2018 18:17:56 GMT-0400 (EDT). (c) 2018 Miguel Castillo <manchagnu@gmail.com>. Licensed under MIT */\n!function(e){if(true)module.exports=e();else {}}(function(){return require=_bb$iter=function(e,r){var t={};function n(r){if(!t.hasOwnProperty(r)){var a={exports:{}},i=e[r][0],u=e[r][1];t[r]=a.exports,i((d=u,function(e){var r=d[e];if(o(r))return n(r);for(var t=n.next;t;t=t.next)if(t.has(r))return t.get(r);for(var a=n.prev;a;a=a.prev)if(a.has(r))return a.get(r);throw new Error(\"Module '\"+e+\"' with id \"+r+\" was not found\")}),a,a.exports),t[r]=a.exports}var d;return t[r]}function o(r){return e[r]}if(n.get=n,n.has=o,n.next=\"undefined\"==typeof _bb$iter?null:_bb$iter,r.length)for(var a=n,i=n.next;i;)i.prev=a,a=i,i=i.next;return r.forEach(n),n}({1:[function(e,r,t){function n(){var e={},r=document.getElementsByTagName(\"head\")[0]||document.documentElement;function t(t){\"string\"==typeof t&&(t={url:t});var n=t.id||t.url,o=e[n];if(o)return console.log(\"load-js: cache hit\",n),o;if(!1!==t.allowExternal){var a=function(e){var r=e&&document.getElementById(e);if(r&&\"watermark\"!==r.loadJS)return console.warn(\"load-js: duplicate script with id:\",e),r}(t.id)||function(e){var r=e&&document.querySelector(\"script[src='\"+e+\"']\");if(r&&\"watermark\"!==r.loadJS)return console.warn(\"load-js: duplicate script with url:\",e),r}(t.url);if(a){var i=Promise.resolve(a);return n&&(e[n]=i),i}}if(!t.url&&!t.text)throw new Error(\"load-js: must provide a url or text to load\");var u=(t.url?function(e,r){return new Promise(function(t,n){var o=!1;r.onload=r.onreadystatechange=function(){o||r.readyState&&\"loaded\"!==r.readyState&&\"complete\"!==r.readyState||(o=!0,r.onload=r.onreadystatechange=null,t(r))},r.onerror=n,e.appendChild(r)})}:function(e,r){return e.appendChild(r),Promise.resolve(r)})(r,function(e){var r=document.createElement(\"script\");r.charset=e.charset||\"utf-8\",r.type=e.type||\"text/javascript\",r.async=!!e.async,r.id=e.id||e.url,r.loadJS=\"watermark\",e.url&&(r.src=e.url);e.text&&(r.text=e.text);return r}(t));return n&&!1!==t.cache&&(e[n]=u),u}return function(e){return e instanceof Array?Promise.all(e.map(t)):t(e)}}r.exports=n(),r.exports.create=n},{}]},[1]),_bb$iter(1)});\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbG9hZC1qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2FkLWpzL2luZGV4LmpzPzIxMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIGxvYWQtanMgdjMuMC4zIC0gU2F0IFNlcCAxNSAyMDE4IDE4OjE3OjU2IEdNVC0wNDAwIChFRFQpLiAoYykgMjAxOCBNaWd1ZWwgQ2FzdGlsbG8gPG1hbmNoYWdudUBnbWFpbC5jb20+LiBMaWNlbnNlZCB1bmRlciBNSVQgKi9cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcykubG9hZEpTPWUoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIHJlcXVpcmU9X2JiJGl0ZXI9ZnVuY3Rpb24oZSxyKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKCF0Lmhhc093blByb3BlcnR5KHIpKXt2YXIgYT17ZXhwb3J0czp7fX0saT1lW3JdWzBdLHU9ZVtyXVsxXTt0W3JdPWEuZXhwb3J0cyxpKChkPXUsZnVuY3Rpb24oZSl7dmFyIHI9ZFtlXTtpZihvKHIpKXJldHVybiBuKHIpO2Zvcih2YXIgdD1uLm5leHQ7dDt0PXQubmV4dClpZih0LmhhcyhyKSlyZXR1cm4gdC5nZXQocik7Zm9yKHZhciBhPW4ucHJldjthO2E9YS5wcmV2KWlmKGEuaGFzKHIpKXJldHVybiBhLmdldChyKTt0aHJvdyBuZXcgRXJyb3IoXCJNb2R1bGUgJ1wiK2UrXCInIHdpdGggaWQgXCIrcitcIiB3YXMgbm90IGZvdW5kXCIpfSksYSxhLmV4cG9ydHMpLHRbcl09YS5leHBvcnRzfXZhciBkO3JldHVybiB0W3JdfWZ1bmN0aW9uIG8ocil7cmV0dXJuIGVbcl19aWYobi5nZXQ9bixuLmhhcz1vLG4ubmV4dD1cInVuZGVmaW5lZFwiPT10eXBlb2YgX2JiJGl0ZXI/bnVsbDpfYmIkaXRlcixyLmxlbmd0aClmb3IodmFyIGE9bixpPW4ubmV4dDtpOylpLnByZXY9YSxhPWksaT1pLm5leHQ7cmV0dXJuIHIuZm9yRWFjaChuKSxufSh7MTpbZnVuY3Rpb24oZSxyLHQpe2Z1bmN0aW9uIG4oKXt2YXIgZT17fSxyPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXXx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2Z1bmN0aW9uIHQodCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXt1cmw6dH0pO3ZhciBuPXQuaWR8fHQudXJsLG89ZVtuXTtpZihvKXJldHVybiBjb25zb2xlLmxvZyhcImxvYWQtanM6IGNhY2hlIGhpdFwiLG4pLG87aWYoITEhPT10LmFsbG93RXh0ZXJuYWwpe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciByPWUmJmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpO2lmKHImJlwid2F0ZXJtYXJrXCIhPT1yLmxvYWRKUylyZXR1cm4gY29uc29sZS53YXJuKFwibG9hZC1qczogZHVwbGljYXRlIHNjcmlwdCB3aXRoIGlkOlwiLGUpLHJ9KHQuaWQpfHxmdW5jdGlvbihlKXt2YXIgcj1lJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NyaXB0W3NyYz0nXCIrZStcIiddXCIpO2lmKHImJlwid2F0ZXJtYXJrXCIhPT1yLmxvYWRKUylyZXR1cm4gY29uc29sZS53YXJuKFwibG9hZC1qczogZHVwbGljYXRlIHNjcmlwdCB3aXRoIHVybDpcIixlKSxyfSh0LnVybCk7aWYoYSl7dmFyIGk9UHJvbWlzZS5yZXNvbHZlKGEpO3JldHVybiBuJiYoZVtuXT1pKSxpfX1pZighdC51cmwmJiF0LnRleHQpdGhyb3cgbmV3IEVycm9yKFwibG9hZC1qczogbXVzdCBwcm92aWRlIGEgdXJsIG9yIHRleHQgdG8gbG9hZFwiKTt2YXIgdT0odC51cmw/ZnVuY3Rpb24oZSxyKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxuKXt2YXIgbz0hMTtyLm9ubG9hZD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe298fHIucmVhZHlTdGF0ZSYmXCJsb2FkZWRcIiE9PXIucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT09ci5yZWFkeVN0YXRlfHwobz0hMCxyLm9ubG9hZD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQocikpfSxyLm9uZXJyb3I9bixlLmFwcGVuZENoaWxkKHIpfSl9OmZ1bmN0aW9uKGUscil7cmV0dXJuIGUuYXBwZW5kQ2hpbGQociksUHJvbWlzZS5yZXNvbHZlKHIpfSkocixmdW5jdGlvbihlKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3IuY2hhcnNldD1lLmNoYXJzZXR8fFwidXRmLThcIixyLnR5cGU9ZS50eXBlfHxcInRleHQvamF2YXNjcmlwdFwiLHIuYXN5bmM9ISFlLmFzeW5jLHIuaWQ9ZS5pZHx8ZS51cmwsci5sb2FkSlM9XCJ3YXRlcm1hcmtcIixlLnVybCYmKHIuc3JjPWUudXJsKTtlLnRleHQmJihyLnRleHQ9ZS50ZXh0KTtyZXR1cm4gcn0odCkpO3JldHVybiBuJiYhMSE9PXQuY2FjaGUmJihlW25dPXUpLHV9cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgQXJyYXk/UHJvbWlzZS5hbGwoZS5tYXAodCkpOnQoZSl9fXIuZXhwb3J0cz1uKCksci5leHBvcnRzLmNyZWF0ZT1ufSx7fV19LFsxXSksX2JiJGl0ZXIoMSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/load-js/index.js\n");

/***/ }),

/***/ "./src/GoogleSearch.js":
/*!*****************************!*\
  !*** ./src/GoogleSearch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! load-js */ \"./node_modules/load-js/index.js\");\n/* harmony import */ var load_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(load_js__WEBPACK_IMPORTED_MODULE_0__);\n// <script src=\"https://apis.google.com/js/api.js\"></script>\n// <script>\n//   /**\n//    * Sample JavaScript code for search.cse.list\n//    * See instructions for running APIs Explorer code samples locally:\n//    * https://developers.google.com/explorer-help/guides/code_samples#javascript\n//    */\n//\n//   function loadClient() {\n//     gapi.client.setApiKey(\"YOUR_API_KEY\");\n//     return gapi.client.load(\"https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest\")\n//         .then(function() { console.log(\"GAPI client loaded for API\"); },\n//               function(err) { console.error(\"Error loading GAPI client for API\", err); });\n//   }\n//   // Make sure the client is loaded before calling this method.\n//   function execute() {\n//     return gapi.client.search.cse.list({\n//       \"q\": \"todd\",\n//       \"cx\": \"012607311805140801608:fwi9qoupi10\"\n//     })\n//         .then(function(response) {\n//                 // Handle the results here (response.result has the parsed body).\n//                 console.log(\"Response\", response);\n//               },\n//               function(err) { console.error(\"Execute error\", err); });\n//   }\n//   gapi.load(\"client\");\n// </script>\n// <button onclick=\"loadClient()\">load</button>\n// <button onclick=\"execute()\">execute</button>\n\n\nclass GoogleSearch {\n  constructor(options) {\n    this.config = {\n      key: options.key,\n      cx: options.cx\n    }; // this.isGapiLoaded = false;\n    // this.isClientLoaded = false;\n\n    return this;\n  }\n\n  init() {\n    return load_js__WEBPACK_IMPORTED_MODULE_0___default()([{\n      url: 'https://apis.google.com/js/api.js'\n    }]).then(() => {\n      console.log('GAPI loaded'); // this.isGapiLoaded = true;\n\n      return new Promise(resolve => {\n        gapi.load('client', () => {\n          console.log('API key set');\n          gapi.client.setApiKey(this.config.key);\n          resolve(gapi.client.load(\"https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest\").then(() => {\n            console.log('Client loaded'); // this.isClientLoaded = true;\n          }));\n        });\n      });\n    });\n  }\n\n  fetchResults(q) {\n    this.init().then(() => {\n      return gapi.client.search.cse.list({\n        q,\n        cx: this.config.cx\n      }).then(response => {\n        // Handle the results here (response.result has the parsed body).\n        console.log('Response', response);\n        return response;\n      }, err => {\n        console.error('Execute error', err);\n      });\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleSearch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR29vZ2xlU2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0dvb2dsZVNlYXJjaC5qcz9hYjAxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzXCI+PC9zY3JpcHQ+XG4vLyA8c2NyaXB0PlxuLy8gICAvKipcbi8vICAgICogU2FtcGxlIEphdmFTY3JpcHQgY29kZSBmb3Igc2VhcmNoLmNzZS5saXN0XG4vLyAgICAqIFNlZSBpbnN0cnVjdGlvbnMgZm9yIHJ1bm5pbmcgQVBJcyBFeHBsb3JlciBjb2RlIHNhbXBsZXMgbG9jYWxseTpcbi8vICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vZXhwbG9yZXItaGVscC9ndWlkZXMvY29kZV9zYW1wbGVzI2phdmFzY3JpcHRcbi8vICAgICovXG4vL1xuLy8gICBmdW5jdGlvbiBsb2FkQ2xpZW50KCkge1xuLy8gICAgIGdhcGkuY2xpZW50LnNldEFwaUtleShcIllPVVJfQVBJX0tFWVwiKTtcbi8vICAgICByZXR1cm4gZ2FwaS5jbGllbnQubG9hZChcImh0dHBzOi8vY29udGVudC5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9jdXN0b21zZWFyY2gvdjEvcmVzdFwiKVxuLy8gICAgICAgICAudGhlbihmdW5jdGlvbigpIHsgY29uc29sZS5sb2coXCJHQVBJIGNsaWVudCBsb2FkZWQgZm9yIEFQSVwiKTsgfSxcbi8vICAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIEdBUEkgY2xpZW50IGZvciBBUElcIiwgZXJyKTsgfSk7XG4vLyAgIH1cbi8vICAgLy8gTWFrZSBzdXJlIHRoZSBjbGllbnQgaXMgbG9hZGVkIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kLlxuLy8gICBmdW5jdGlvbiBleGVjdXRlKCkge1xuLy8gICAgIHJldHVybiBnYXBpLmNsaWVudC5zZWFyY2guY3NlLmxpc3Qoe1xuLy8gICAgICAgXCJxXCI6IFwidG9kZFwiLFxuLy8gICAgICAgXCJjeFwiOiBcIjAxMjYwNzMxMTgwNTE0MDgwMTYwODpmd2k5cW91cGkxMFwiXG4vLyAgICAgfSlcbi8vICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbi8vICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3VsdHMgaGVyZSAocmVzcG9uc2UucmVzdWx0IGhhcyB0aGUgcGFyc2VkIGJvZHkpLlxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuLy8gICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihcIkV4ZWN1dGUgZXJyb3JcIiwgZXJyKTsgfSk7XG4vLyAgIH1cbi8vICAgZ2FwaS5sb2FkKFwiY2xpZW50XCIpO1xuLy8gPC9zY3JpcHQ+XG4vLyA8YnV0dG9uIG9uY2xpY2s9XCJsb2FkQ2xpZW50KClcIj5sb2FkPC9idXR0b24+XG4vLyA8YnV0dG9uIG9uY2xpY2s9XCJleGVjdXRlKClcIj5leGVjdXRlPC9idXR0b24+XG5cbmltcG9ydCBsb2FkSlMgZnJvbSAnbG9hZC1qcyc7XG5cbmNsYXNzIEdvb2dsZVNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIGtleTogb3B0aW9ucy5rZXksXG4gICAgICBjeDogb3B0aW9ucy5jeCxcbiAgICB9O1xuXG4gICAgLy8gdGhpcy5pc0dhcGlMb2FkZWQgPSBmYWxzZTtcbiAgICAvLyB0aGlzLmlzQ2xpZW50TG9hZGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICByZXR1cm4gbG9hZEpTKFt7XG4gICAgICB1cmw6ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnXG4gICAgfV0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0dBUEkgbG9hZGVkJyk7XG4gICAgICAvLyB0aGlzLmlzR2FwaUxvYWRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0FQSSBrZXkgc2V0Jyk7XG4gICAgICAgICAgZ2FwaS5jbGllbnQuc2V0QXBpS2V5KHRoaXMuY29uZmlnLmtleSk7XG4gICAgICAgICAgcmVzb2x2ZShnYXBpLmNsaWVudC5sb2FkKFwiaHR0cHM6Ly9jb250ZW50Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL2N1c3RvbXNlYXJjaC92MS9yZXN0XCIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgbG9hZGVkJyk7XG4gICAgICAgICAgICAgIC8vIHRoaXMuaXNDbGllbnRMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hSZXN1bHRzKHEpIHtcbiAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBnYXBpLmNsaWVudC5zZWFyY2guY3NlXG4gICAgICAgIC5saXN0KHtcbiAgICAgICAgICBxLFxuICAgICAgICAgIGN4OiB0aGlzLmNvbmZpZy5jeFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3VsdHMgaGVyZSAocmVzcG9uc2UucmVzdWx0IGhhcyB0aGUgcGFyc2VkIGJvZHkpLlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0V4ZWN1dGUgZXJyb3InLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZVNlYXJjaDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBcERBO0FBQ0E7QUFzREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/GoogleSearch.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GoogleSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleSearch */ \"./src/GoogleSearch.js\");\n // console.log(process.env.GAPI_KEY);\n// console.log(process.env.GAPI_CX);\n\nconst googleSearch = new _GoogleSearch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  key: \"AIzaSyBYL4b5nKMLLlDUQooJNfzkRSvIKfa2_jY\",\n  cx: \"012607311805140801608:fwi9qoupi10\"\n});\ngoogleSearch.fetchResults('todd');\ngoogleSearch.fetchResults('psychology');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlU2VhcmNoIGZyb20gJy4vR29vZ2xlU2VhcmNoJztcblxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuR0FQSV9LRVkpO1xuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuR0FQSV9DWCk7XG5jb25zdCBnb29nbGVTZWFyY2ggPSBuZXcgR29vZ2xlU2VhcmNoKHtcbiAga2V5OiBwcm9jZXNzLmVudi5HQVBJX0tFWSxcbiAgY3g6IHByb2Nlc3MuZW52LkdBUElfQ1hcbn0pO1xuZ29vZ2xlU2VhcmNoLmZldGNoUmVzdWx0cygndG9kZCcpO1xuZ29vZ2xlU2VhcmNoLmZldGNoUmVzdWx0cygncHN5Y2hvbG9neScpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });