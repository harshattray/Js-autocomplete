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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.FuzzySearch = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  !function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? exports.FuzzySearch = t() : e.FuzzySearch = t();
  }(undefined, function () {
    return function (e) {
      function t(r) {
        if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
      }var n = {};return t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
      }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };return t.d(n, "a", n), n;
      }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, t.p = "", t(t.s = 1);
    }([function (e, t, n) {
      var r, o, i, r, o, i;!function (n, u) {
        o = [e, t], r = u, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i);
      }(0, function (e, t) {
        !function (n, u) {
          o = [e, t], r = u, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i);
        }(0, function (e, t) {
          "use strict";
          function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              o = function () {
            function e() {
              n(this, e);
            }return r(e, null, [{ key: "getDescendantProperty", value: function (t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    o = void 0,
                    i = void 0,
                    u = void 0,
                    a = void 0,
                    c = void 0,
                    s = void 0;if (n) {
                  if (u = n.indexOf("."), -1 === u ? o = n : (o = n.slice(0, u), i = n.slice(u + 1)), null !== (a = t[o]) && void 0 !== a) if (i || "string" != typeof a && "number" != typeof a) {
                    if ("[object Array]" === Object.prototype.toString.call(a)) for (c = 0, s = a.length; c < s; c++) e.getDescendantProperty(a[c], i, r);else i && e.getDescendantProperty(a, i, r);
                  } else r.push(a);
                } else r.push(t);return r;
              } }]), e;
          }();t.default = o, e.exports = t.default;
        });
      });
    }, function (e, t, n) {
      e.exports = n(2);
    }, function (e, t, n) {
      var r, o, i, r, o, i;!function (u, a) {
        o = [e, t, n(0)], r = a, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i);
      }(0, function (e, t) {
        !function (u, a) {
          o = [e, t, n(0)], r = a, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i);
        }(0, function (e, t, n) {
          "use strict";
          function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
            return e && e.__esModule ? e : { default: e };
          }(n),
              i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
              }
            }return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          }(),
              u = function () {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if (r(this, e), 0 === t.length) throw new Error("We need an array containing the search list");this.haystack = t, this.keys = n, this.options = Object.assign({ caseSensitive: !1, sort: !1 }, o);
            }return i(e, [{ key: "search", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";if ("" === t) return this.haystack;for (var n = [], r = 0; r < this.haystack.length; r++) {
                  var i = this.haystack[r];if (0 === this.keys.length) {
                    var u = e.isMatch(i, t, this.options.caseSensitive);u && n.push({ item: i, score: u });
                  } else for (var a = 0; a < this.keys.length; a++) {
                    for (var c = o.default.getDescendantProperty(i, this.keys[a]), s = !1, f = 0; f < c.length; f++) {
                      var l = e.isMatch(c[f], t, this.options.caseSensitive);if (l) {
                        s = !0, n.push({ item: i, score: l });break;
                      }
                    }if (s) break;
                  }
                }return this.options.sort && n.sort(function (e, t) {
                  return e.score - t.score;
                }), n.map(function (e) {
                  return e.item;
                });
              } }], [{ key: "isMatch", value: function (e, t, n) {
                n || (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase());for (var r = t.split(""), o = [], i = 0, u = 0; u < r.length; u++) {
                  var a = r[u];if (-1 === (i = e.indexOf(a, i))) return !1;o.push(i), i++;
                }return e === t ? 1 : o.reduce(function (e, t) {
                  return e + t;
                }, 2);
              } }]), e;
          }();t.default = u, e.exports = t.default;
        });
      });
    }]);
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"description":"A list of fruits.","fruits":[{"name":"apple"},{"name":"apricot"},{"name":"avocado"},{"name":"bell peppe"},{"name":"bilberry"},{"name":"blackberry"},{"name":"blackcurrant"},{"name":"blood orange"},{"name":"blueberry"},{"name":"boysenberry"},{"name":"breadfruit"},{"name":"canary melon"},{"name":"cantaloupe"},{"name":"cherimoya"},{"name":"cherry"},{"name":"chili pepper"},{"name":"clementine"},{"name":"cloudberry"},{"name":"coconut"},{"name":"damson"},{"name":"date"},{"name":"dragonfruit"},{"name":"eggplant"},{"name":"elderberry"},{"name":"fig"},{"name":"gooseberry"},{"name":"grapefruit"},{"name":"guava"},{"name":"honeydew"},{"name":"huckleberry"},{"name":"jackfruit"},{"name":"jujube"},{"name":"pear"},{"name":"kumquat"},{"name":"lemon"},{"name":"lychee"},{"name":"mango"},{"name":"mandarine"},{"name":"mulberry"},{"name":"papaya"},{"name":"pomegranate"},{"name":"nectarine"},{"name":"olive"},{"name":"orange"},{"name":"quince"},{"name":"raspberry"},{"name":"rambutan"},{"name":"redcurrant"},{"name":"watermelon"},{"name":"strawberry"}]}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuzzy_search__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuzzy_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuzzy_search__);
/**
* @Author: harsha
* @Date:   2018-04-26T10:40:59+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T16:32:35+05:30
*/


class Autocomplete {
  constructor(rootEl, options = {}) {
    options = Object.assign({ numOfResults: 10, data: [] }, options);
    Object.assign(this, { rootEl, options });
    this.timer = null;
    this.selectionIndex = -1;

    this.init();
  }

  onQueryChange(query, self) {
    // Get data for the dropdown
    let { url, data, numOfResults } = self.options;
    let results = self.getResults(query, data);
    results = results.slice(0, numOfResults);
    self.updateDropdown(results);
  }

  /**
  * Given an array and a query Fuzzy-search implementation
  */
  getResults(query, data) {
    if (!query) return [];
    const searcher = new __WEBPACK_IMPORTED_MODULE_0_fuzzy_search___default.a(data, ['name'], {
      caseSensitive: false
    });
    const results = searcher.search(query);
    return results;
  }

  updateDropdown(results) {
    this.listEl.innerHTML = '';
    this.listEl.appendChild(this.createResultsEl(results));
  }

  createResultsEl(results) {
    const fragment = document.createDocumentFragment();
    results.forEach(result => {
      const el = document.createElement('li');
      Object.assign(el, {
        className: 'result',
        textContent: result.name,
        id: result.value
      });

      // Pass the value to the onSelect callback
      el.addEventListener('click', e => {
        this.passInputValueCallback(result);
      });

      // reset all selected items on mouse hover
      el.addEventListener('mouseover', e => {
        this.selectionIndex = -1;
        this.removeHoverColorOfResults();
      });

      fragment.appendChild(el);
    });
    return fragment;
  }

  createQueryInputEl() {
    const inputEl = document.createElement('input');
    Object.assign(inputEl, {
      type: 'search',
      name: 'query',
      placeholder: 'Search for fruits here',
      autocomplete: 'off'
    });

    if (this.options.url) {
      // clear the results list when the 'x' is clicked
      inputEl.addEventListener('search', e => {
        this.updateDropdown([]);
      });

      inputEl.addEventListener('keyup', e => {
        clearTimeout(this.timer);
        if (e.target.value && e.keyCode !== 40 && e.keyCode !== 38) {
          // small delay to avoid sending many request when the user types in too fast
          this.timer = setTimeout(this.onQueryChange, 300, e.target.value, this);
        }
      });
    } else {
      inputEl.addEventListener('input', event => this.onQueryChange(event.target.value, this));
    }

    // make sure arrow keys navigation through results is done regardless the type of component
    inputEl.addEventListener('keydown', e => {
      clearTimeout(this.timer);

      // querying the DOM only if I'm moving up/down the results dropdown
      if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 13) {
        const results = [...document.querySelector(`#${this.rootEl.id} .results`).children];
        switch (e.keyCode) {
          // enter key
          case 13:
            {
              const result = results[this.selectionIndex];
              if (result) {
                this.passInputValueCallback({ value: results[this.selectionIndex].id });
              }
              break;
            }
          // arrow up
          case 38:
            {
              if (this.selectionIndex > 0) {
                this.removeHoverColorOfResults();
                this.selectionIndex--;
                results[this.selectionIndex].classList.add('item__selected');
              }
              break;
            }
          // arrow down
          case 40:
            {
              if (this.selectionIndex < results.length - 1) {
                this.removeHoverColorOfResults();
                this.selectionIndex++;
                results[this.selectionIndex].classList.add('item__selected');
              }
              break;
            }
        }
      }
    });
    return inputEl;
  }

  removeHoverColorOfResults() {
    const results = [...document.querySelector(`#${this.rootEl.id} .results`).children];
    results.map(elem => {
      elem.classList.remove('item__selected');
      return elem;
    });
  }

  passInputValueCallback(result) {
    const { onSelect } = this.options;
    if (typeof onSelect === 'function') onSelect(result.name);
  }

  init() {
    // Build query input
    this.inputEl = this.createQueryInputEl();
    this.rootEl.appendChild(this.inputEl);

    // Build results dropdown
    this.listEl = document.createElement('ul');
    Object.assign(this.listEl, { className: 'results' });
    this.rootEl.appendChild(this.listEl);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Autocomplete;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Autocomplete__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fruits_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fruits_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fruits_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fuzzy_search__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fuzzy_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fuzzy_search__);
/**
 * @Author: harsha
 * @Date:   2018-04-26T10:40:59+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T16:31:55+05:30
 */






const renderValues = __WEBPACK_IMPORTED_MODULE_1__fruits_json___default.a.fruits;

new __WEBPACK_IMPORTED_MODULE_0__Autocomplete__["a" /* default */](document.getElementById('state'), {
  data: renderValues
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/**\n * @Author: harsha\n * @Date:   2018-04-26T10:40:59+05:30\n * @Last modified by:   harsha\n * @Last modified time: 2018-04-26T16:28:47+05:30\n */\n\n\n\nbody {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n.App-sub {\n  font-size: 20px;\n  margin-top: 50px;\n  font-weight: 300;\n}\n\n.main-container {\n  margin: auto;\n}\n.header-wrap {\n  width: 100%;\n  overflow: hidden;\n  background-color: #222;\n  padding: 20px;\n  color: white;\n  display: block;\n}\n.header-wrap h1 {\n  font-size: 50px;\n  margin-top: 50px;\n  font-weight: 300;\n}\n.form-wrap {\n  width: 100%;\n  overflow: hidden;\n  padding: 20px;\n}\n.form-group {\n  width: 100%;\n}\n\nul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.results {\n  border: 1px solid #CCC;\n  width: 100%;\n  max-height: 300px;\n  overflow-y: scroll;\n  border-radius: 4px;\n}\n\n.result {\n  padding: 10px;\n  cursor: pointer;\n  background: #fff;\n}\n.result:nth-child(2n) {\n  background: #f4f4f4;\n}\n.result:hover {\n  background-color: #DDD;\n}\n\n.item__selected {\n  background-color: #DDD;\n}\n\nform {\n  display: flex;\n}\n\n.form-group + .form-group {\n  margin-left: 50px;\n}\n\ninput {\n    width: 100%;\n    margin-top: 20px;\n    padding: 15px 20px;\n    font-family: Helvetica, sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    border: 1px solid #CCC;\n    border-radius: 4px;\n    outline: 0px;\n    box-shadow: none;\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map