module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/backdrop.js":
/*!********************************!*\
  !*** ./components/backdrop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/backdrop.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Backdrop = () => __jsx("div", {
  className: "jsx-3057152487",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3057152487",
  __self: undefined
}, "div.jsx-3057152487{position:fixed;height:100vh;width:100vw;background-image:url('/static/img/bl_back.png');background-position:center 1em;background-repeat:no-repeat;background-size:auto 100vh;background-color:#202020;z-index:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9iYWNrZHJvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFYyxBQUdvQixlQUNGLGFBQ0QsWUFDb0MsZ0RBQ2pCLCtCQUNILDRCQUNELDJCQUNGLHlCQUNmLFVBQ1giLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2JhY2tkcm9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFja2Ryb3AgPSAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0ZGl2IHtcblx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHR3aWR0aDogMTAwdnc7XG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWcvYmxfYmFjay5wbmcnKTtcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDFlbTtcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMHZoO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuXHRcdFx0XHR6LWluZGV4OiAwO1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcDsiXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/backdrop.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Backdrop);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-link */ "./components/nav-link.js");
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("nav", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "on",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "bit lore"))), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "on",
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "about"))), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "on",
      href: "/work",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "work"))), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "on",
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1094133566",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "contact"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1094133566",
      __self: this
    }, "nav.jsx-1094133566{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;height:2em;line-height:2em;}@media only screen and (max-width:600px){nav.jsx-1094133566{text-align:center;}}a.jsx-1094133566{-webkit-text-decoration:none;text-decoration:none;display:inline-block;width:80%;}div.jsx-1094133566{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;padding:.5em 0 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-1094133566:not(.on){cursor:pointer;}div.jsx-1094133566::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid #444;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}div.jsx-1094133566:hover.jsx-1094133566::before{width:80%;}div.on.jsx-1094133566::before{width:80%;border-bottom-color:whitesmoke;}@media only screen and (max-width:600px){div.jsx-1094133566:first-child{text-align:left;}div.jsx-1094133566:last-child{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUcwQixBQVNPLEFBS0MsQUFLZCxBQU1RLEFBR0osQUFRRCxBQUdBLEFBTVEsQUFHQyxVQVhyQixBQUdpQyxDQVhiLElBSHBCLENBb0JFLENBR0EsQ0F2Q0EsV0FvQlEsSUFWVSxJQVdMLElBVWYsU0ExQnVCLEFBaUJRLENBWFYsbUJBQ0YsQ0FOUCxHQWZvQixLQWdDYyxFQWhCOUMsMEVBTUEsa0JBV0EsZ0JBaENnQixjQUNILFdBQ0ssZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2TGluayBmcm9tICcuL25hdi1saW5rJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cIm9uXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGE+Yml0IGxvcmU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwib25cIiBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhPmFib3V0PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cIm9uXCIgaHJlZj1cIi93b3JrXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhPndvcms8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwib25cIiBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGE+Y29udGFjdDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAgMCAwO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdjpub3QoLm9uKSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0NDQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIC4zcztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2OmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2Lm9uOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH0gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/header.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backdrop */ "./components/backdrop.js");
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx("div", {
  className: "jsx-709835287",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_backdrop__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-709835287" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1502071868",
  __self: undefined
}, "div.container.jsx-709835287{position:relative;width:100%;max-width:80em;margin:0 auto;padding:0 4em;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2MsQUFHdUIsa0JBQ1AsV0FDSSxlQUNELGNBQ0EsY0FDUSxzQkFDdkIiLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vYmFja2Ryb3AnO1xuXG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPGRpdj5cblx0XHQ8QmFja2Ryb3A+PC9CYWNrZHJvcD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGRpdi5jb250YWluZXIge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDgwZW07XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRwYWRkaW5nOiAwIDRlbTtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdGJvZHkge1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHQ7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0Y29sb3I6IHdoaXRlc21va2U7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjVlbTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcblx0XHRcdH1cblxuXHRcdFx0Ym9keSAqIHtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdH1cblxuXHRcdFx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgbGkge1xuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdGgxIHtcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS42OGVtO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS41ZW07XG5cdFx0XHRcdG1heC13aWR0aDogMjJlbTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0aDIge1xuXHRcdFx0XHRtYXJnaW46IDJlbSBhdXRvO1xuXHRcdFx0XHRmb250LXNpemU6IDEuNjhlbTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNmVtO1xuXHRcdFx0fVxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDEuNDFlbTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNmVtO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5OyAqL1xuXHRcdFx0fVxuXHRcdFx0aDQge1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS44OGVtO1xuXHRcdFx0XHRmb250LXNpemU6IDEuMTllbTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXHRcdFx0aDUgeyBmb250LXdlaWdodDogYm9sZDsgfVxuXHRcdFx0cCB7XG5cdFx0XHRcdG1hcmdpbjogMS41ZW0gMDtcblx0XHRcdH1cblx0XHRcdHVsIHtcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0fVxuXHRcdFx0aW1nIHtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHR9XG5cblx0XHRcdGEge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZXNtb2tlO1xuXHRcdFx0fVxuXHRcdFx0YS5mYW5jeSB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdH1cblx0XHRcdGEuZmFuY3k6OmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDEuNWVtO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcblx0XHRcdFx0dHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UsIGJvcmRlci1jb2xvciAuM3M7XG5cdFx0XHR9XG5cdFx0XHRhLmZhbmN5OmhvdmVyOjpiZWZvcmUge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0bWFpbiB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXHRcdFx0XHRwYWRkaW5nOiA0ZW0gMDtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0LmZsZXgge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0fVxuXHRcdFx0LmZsZXguY29sdW1uIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdH1cblx0XHRcdC5mcmFtZWQge1xuXHRcdFx0XHRib3JkZXI6IDFlbSBzb2xpZCB3aGl0ZXNtb2tlO1xuXHRcdFx0fVxuXHRcdFx0LmZyYW1lZC5kYXJrIHtcblx0XHRcdFx0Ym9yZGVyOiAxZW0gc29saWQgYmxhY2s7XG5cdFx0XHR9XG5cdFx0XHQubm8tdG9wLW1hcmdpbiB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHR9XG5cdFx0XHQubm8tYm90dG9tLW1hcmdpbiB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cdFx0XHRcdC5mbGV4LmNvbGxhcHNlIHtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mbGV4LmNvbGxhcHNlLnJldmVyc2Uge1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQucmVzcG9uc2l2ZS1tYXJnaW4ge1xuXHRcdFx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1haW4ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMWVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2137124770",
  __self: undefined
}, "body{font-size:14pt;position:relative;width:100%;min-height:100%;padding:0;margin:0;color:whitesmoke;font-family:'Cutive Mono',monospace;line-height:1.5em;background-color:#202020;}body *{box-sizing:border-box;}h1,h2,h3,h4,h5,h6,p,li{font-weight:normal;max-width:100%;}h1{margin:0 auto;font-weight:normal;font-size:1.68em;line-height:1.5em;max-width:22em;text-align:center;}h2{margin:2em auto;font-size:1.68em;line-height:1.6em;}h3{font-size:1.41em;line-height:1.6em;margin:0;}h4{line-height:1.88em;font-size:1.19em;margin:0;}h5{font-weight:bold;}p{margin:1.5em 0;}ul{list-style:none;padding-left:0;}img{box-sizing:border-box;object-fit:cover;}a{position:relative;color:whitesmoke;}a.fancy{-webkit-text-decoration:none;text-decoration:none;}a.fancy::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid whitesmoke;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}a.fancy:hover::before{width:100%;}main{position:relative;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:calc(100vh - 2em);padding:4em 0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow-x:hidden;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flex.column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.framed{border:1em solid whitesmoke;}.framed.dark{border:1em solid black;}.no-top-margin{margin-top:0;}.no-bottom-margin{margin-bottom:0;}@media only screen and (max-width:1000px){.flex.collapse{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex.collapse.reverse{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.responsive-margin{margin:0 !important;}main{padding:0 1em;}}@media only screen and (max-width:600px){body{font-size:12pt;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJxQixBQUdvQixBQWFPLEFBSUgsQUFLTCxBQVFFLEFBS0MsQUFNRSxBQUlDLEFBRUwsQUFHQyxBQUlNLEFBS0osQUFJRyxBQUdWLEFBUUEsQUFJTyxBQVlMLEFBR1MsQUFHTSxBQUdMLEFBR1YsQUFHRyxBQUtPLEFBR1EsQUFHVixBQUdOLEFBTUMsV0ExREUsQUFRbkIsRUE0QkEsQ0FoRm9CLEFBaUduQixDQXZIa0IsQUErQ25CLEFBOEVDLENBL0ZpQixBQW9CRixBQXVEaEIsQ0F0RW1CLEFBU0csQ0FlSixBQW1CWSxDQTdEZCxBQXdCRSxDQTJFakIsRUF2R0QsQUF5Q2tCLENBNkNsQixLQUhBLENBN0JTLEVBaEJULEVBbERZLEFBc0JNLEFBUUMsQ0FibkIsQ0FrQlUsQUF3QlYsQ0FsQlUsQ0EwQkksRUFiZCxLQXJEaUIsQUFvQ2pCLENBS0EsS0FuQm1CLEFBdUNuQixBQU1vQyxDQXJDcEMsU0E3QlcsUUFzQkssRUFyQk4sSUFzRlYsSUFHQSxBQWlCQyxDQXpHaUIsSUFxQkMsRUE0QzBCLFdBaEVQLEtBcUJ0QyxDQXNGQyw4QkExR2tCLFNBd0VXLFNBdkVKLG9CQXdFWCxLQXZFZixJQThEQSxLQVV1QixzQkFDVCwwRUFDUyw4RUFDQyxtR0FDTCxrQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vYmFja2Ryb3AnO1xuXG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPGRpdj5cblx0XHQ8QmFja2Ryb3A+PC9CYWNrZHJvcD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGRpdi5jb250YWluZXIge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDgwZW07XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRwYWRkaW5nOiAwIDRlbTtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdGJvZHkge1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHQ7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0Y29sb3I6IHdoaXRlc21va2U7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjVlbTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcblx0XHRcdH1cblxuXHRcdFx0Ym9keSAqIHtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdH1cblxuXHRcdFx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgbGkge1xuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdGgxIHtcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS42OGVtO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS41ZW07XG5cdFx0XHRcdG1heC13aWR0aDogMjJlbTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0aDIge1xuXHRcdFx0XHRtYXJnaW46IDJlbSBhdXRvO1xuXHRcdFx0XHRmb250LXNpemU6IDEuNjhlbTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNmVtO1xuXHRcdFx0fVxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDEuNDFlbTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNmVtO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5OyAqL1xuXHRcdFx0fVxuXHRcdFx0aDQge1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS44OGVtO1xuXHRcdFx0XHRmb250LXNpemU6IDEuMTllbTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXHRcdFx0aDUgeyBmb250LXdlaWdodDogYm9sZDsgfVxuXHRcdFx0cCB7XG5cdFx0XHRcdG1hcmdpbjogMS41ZW0gMDtcblx0XHRcdH1cblx0XHRcdHVsIHtcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0fVxuXHRcdFx0aW1nIHtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHR9XG5cblx0XHRcdGEge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZXNtb2tlO1xuXHRcdFx0fVxuXHRcdFx0YS5mYW5jeSB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdH1cblx0XHRcdGEuZmFuY3k6OmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDEuNWVtO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcblx0XHRcdFx0dHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UsIGJvcmRlci1jb2xvciAuM3M7XG5cdFx0XHR9XG5cdFx0XHRhLmZhbmN5OmhvdmVyOjpiZWZvcmUge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0bWFpbiB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXHRcdFx0XHRwYWRkaW5nOiA0ZW0gMDtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0LmZsZXgge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0fVxuXHRcdFx0LmZsZXguY29sdW1uIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdH1cblx0XHRcdC5mcmFtZWQge1xuXHRcdFx0XHRib3JkZXI6IDFlbSBzb2xpZCB3aGl0ZXNtb2tlO1xuXHRcdFx0fVxuXHRcdFx0LmZyYW1lZC5kYXJrIHtcblx0XHRcdFx0Ym9yZGVyOiAxZW0gc29saWQgYmxhY2s7XG5cdFx0XHR9XG5cdFx0XHQubm8tdG9wLW1hcmdpbiB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHR9XG5cdFx0XHQubm8tYm90dG9tLW1hcmdpbiB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG5cdFx0XHRcdC5mbGV4LmNvbGxhcHNlIHtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5mbGV4LmNvbGxhcHNlLnJldmVyc2Uge1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQucmVzcG9uc2l2ZS1tYXJnaW4ge1xuXHRcdFx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1haW4ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMWVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/nav-link.js":
/*!********************************!*\
  !*** ./components/nav-link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




const NavLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(NavLink)); // 
// class NavLink extends React.Component {
// 
// 	constructor(props) {
// 		super(props);
// 	}
// 
// 
// 
// 	render() {
// 		return (
// 			<div key={this.props.title}>
// 				<Link href={`/${this.props.path}`} activeClassName="on">
// 					{this.props.title}
// 				</Link>
// 				<style jsx>{`
// 					a {
// 						text-decoration: none;
// 						display: inline-block;
// 						width: 80%;
// 					}
// 					div {
// 						flex: 1;
// 						position: relative;
// 						padding: .5em 0 0 0;
// 						user-select: none;
// 					}
// 					div:not(.on) {
// 						cursor: pointer;
// 					}
// 					div::before {
// 						content: '';
// 						position: absolute;
// 						width: 0;
// 						height: 1.5em;
// 						border-bottom: 1px solid #444;
// 						transition: width .3s ease, border-color .3s;
// 					}
// 					div:hover::before {
// 						width: 80%;
// 					}
// 					div.on::before {
// 						width: 80%;
// 						border-bottom-color: whitesmoke;
// 					}
// 
// 					@media only screen and (max-width:600px) {
// 						div:first-child {
// 							text-align: left;
// 						}
// 						div:last-child {
// 							text-align: right;
// 						}
// 					}
// 				`}</style>
// 			</div>
// 		);
// 	}
// 
// 
// }
// const navLink = new NavLink();
// export default NavLink;
// const NavLink = (props) => (
// 	<div key={props.title}>
// 		<Link href={`/${props.path}`}>
// 			<a>{props.title}</a>
// 		</Link>
// 		<style jsx>{`
// 			a {
// 				text-decoration: none;
// 				display: inline-block;
// 				width: 80%;
// 			}
// 			div {
// 				flex: 1;
// 				position: relative;
// 				padding: .5em 0 0 0;
// 				user-select: none;
// 			}
// 			div:not(.on) {
// 				cursor: pointer;
// 			}
// 			div::before {
// 				content: '';
// 				position: absolute;
// 				width: 0;
// 				height: 1.5em;
// 				border-bottom: 1px solid #444;
// 				transition: width .3s ease, border-color .3s;
// 			}
// 			div:hover::before {
// 				width: 80%;
// 			}
// 			div.on::before {
// 				width: 80%;
// 				border-bottom-color: whitesmoke;
// 			}
// 
// 			@media only screen and (max-width:600px) {
// 				div:first-child {
// 					text-align: left;
// 				}
// 				div:last-child {
// 					text-align: right;
// 				}
// 			}
// 		`}</style>
// 	</div>
// );
// 
// export default NavLink;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/pages/work.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const projects = ['omi', 'evans', 'bm', 'galileo'];
let navigating = false;
let currentProject = 'omi';

function nextProject() {
  if (navigating) {
    return;
  }

  let currentIndex = projects.indexOf(currentProject);
  navigating = true;

  for (let i = 0, n = projects.length; i < n; i++) {
    let el = document.getElementById(projects[i]);

    if (i === currentIndex) {
      el.classList.remove('current');
      el.classList.add('prev');
    } else if (i === currentIndex + 1 || currentIndex === projects.length - 1 && i === 0) {
      el.classList.add('current');
      currentProject = projects[i];
    } else {
      el.classList.remove('prev');
    }
  }

  setTimeout(() => {
    navigating = false;
  }, 500);
}

function Work() {
  return __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("main", {
    id: "work",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("section", {
    id: "omi",
    className: "jsx-3490877027" + " " + "current flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    id: "diamond",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/omi-gold-logo.png",
    alt: "omi gold nyc",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Landing Page"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Layout design"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Iconography"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Image optimization"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Extend Shopify CMS functionality")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "partnered with ", __jsx("a", {
    href: "https://surfaceseo.net/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Surface SEO")), __jsx("a", {
    href: "https://www.omigold.com/pages/about-lab-created-diamonds",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "visit page")))), __jsx("section", {
    id: "evans",
    className: "jsx-3490877027" + " " + "queued flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    id: "presslok",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/evans-components-logo.png",
    alt: "evans components logo",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Website Development"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Developed responsive custom Wordpress theme"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Integrated with Mapbox Studio for distribution map"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Implemented advanced product filtering")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://www.evanscomponents.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "visit site")))), __jsx("section", {
    id: "bm",
    className: "jsx-3490877027" + " " + "flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    id: "jelly",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/b-m-lockup.png",
    alt: "bonne maman strawberry preserves",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "E-commerce integration"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Built out Shopify ecommerce site to match website"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Developed email campaigns through Mailchimp"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Led website maintenance and updates")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://shop.bonnemaman.us/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "visit site")))), __jsx("section", {
    id: "galileo",
    className: "jsx-3490877027" + " " + "flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    id: "fencepost",
    className: "jsx-3490877027" + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("img", {
    id: "galileo-logo",
    src: "/static/img/galileo-logo.png",
    alt: "galileo logo and lockup",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Website development"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Co-built custom responsive Wordpress theme"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Collaborated in design concepting"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Wrote code for SVG animations")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://galileo-camps.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "visit site"))))), __jsx("div", {
    onClick: nextProject,
    className: "jsx-3490877027" + " " + "r-arrow go-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027" + " " + "go-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3490877027",
    __self: this
  }, "section.jsx-3490877027{position:absolute;top:0;right:0;left:0;bottom:0;margin:0 auto;padding:6em;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;opacity:0;}section.prev.jsx-3490877027{opacity:1;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);}section.current.jsx-3490877027{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}section.jsx-3490877027>div.left.jsx-3490877027{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-3490877027>div.right.jsx-3490877027{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-align:left;-webkit-flex:1 0 50%;-ms-flex:1 0 50%;flex:1 0 50%;padding-left:4em;}section.jsx-3490877027>div.right.jsx-3490877027 img.jsx-3490877027{display:block;margin:4em auto;width:60%;max-width:350px;}div.r-arrow.jsx-3490877027{position:absolute !important;top:50%;}div.r-arrow.jsx-3490877027{position:relative;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;right:2em;width:0;height:0;border:1em solid transparent;border-color:whitesmoke whitesmoke whitesmoke transparent;cursor:pointer;}div.r-arrow.jsx-3490877027>div.jsx-3490877027:first-child{position:absolute;top:-1em;left:1em;width:0;height:0;border:1em solid transparent;border-color:transparent transparent transparent whitesmoke;cursor:pointer;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;overflow:visible;}div.r-arrow.jsx-3490877027:hover{border-color:#444 #444 #444 transparent;}div.r-arrow.jsx-3490877027:hover>div.jsx-3490877027:first-child{border-color:transparent transparent transparent #444;}div#diamond.jsx-3490877027{background-image:url('/static/img/rough-diamond.jpg');}div#presslok.jsx-3490877027{background-image:url('/static/img/presslok.png');}div#jelly.jsx-3490877027{background-image:url('/static/img/jelly-2.png');}div#fencepost.jsx-3490877027{background-image:url('/static/img/galileo-sign.png');background-size:contain;}img#galileo-logo.jsx-3490877027{width:40%;}@media only screen and (max-width:1000px){main.jsx-3490877027{bottom:auto;}section.jsx-3490877027{padding:1em;max-width:40em;}section.jsx-3490877027>div.right.jsx-3490877027{display:block;padding-left:0;}section.jsx-3490877027>div.left.jsx-3490877027{display:none;}div.r-arrow.jsx-3490877027{top:auto;bottom:1.5em;right:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSGdCLEFBSXlCLEFBWVIsQUFJQSxBQUlHLEFBTWdCLEFBTWYsQUFPZSxBQUlYLEFBVUEsQUFZc0IsQUFHYyxBQUlBLEFBR04sQUFHRCxBQUdNLEFBSTNDLEFBS0csQUFHQSxBQUlFLEFBSUQsQUFHSixTQUNJLENBNUZjLEFBSUosQUFxRXpCLEVBS0MsQUFHZ0IsQ0FRaEIsQ0FyRWdCLEFBaUVBLElBakdWLEFBMkMyQixBQVV4QixJQW9ESSxFQXhHTCxHQXFEQyxBQXdDVCxFQXZEUSxBQTJEUixDQWpFVSxFQS9CSCxFQXdHUCxFQW5EUSxDQWZULEVBckNVLENBK0JPLEFBK0JqQixJQVRVLElBcERLLEFBMEVmLENBSEEsRUF2RDRCLEVBcUNFLEFBd0JOLENBYnhCLEFBSUEsRUFyQ0EsTUE5QmEsWUFDZSxHQTRFNUIsQ0E3RDZCLElBcUNnQyxVQWRsRCxFQTNCWCxRQTRCUyxJQWhDVCxBQVN1QixJQXdCYixTQUNvQixJQXJCYixLQUhqQixXQUljLEdBZ0NFLE1BWDJDLFNBWXpCLFVBckRULHVCQXFCUCxnQkFxQkYsQ0FwQmhCLGNBcUJBLFVBV2tCLGlCQUNsQixlQXREVyxVQUNYIiwiZmlsZSI6Ii9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5jb25zdCBwcm9qZWN0cyA9IFsnb21pJywnZXZhbnMnLCdibScsJ2dhbGlsZW8nXTtcbmxldCBuYXZpZ2F0aW5nID0gZmFsc2U7XG5sZXQgY3VycmVudFByb2plY3QgPSAnb21pJztcblxuZnVuY3Rpb24gbmV4dFByb2plY3QoKSB7XG4gIGlmIChuYXZpZ2F0aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBjdXJyZW50SW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KTtcbiAgbmF2aWdhdGluZyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwLCBuID0gcHJvamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdHNbaV0pO1xuICAgIGlmIChpID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBpID09PSBjdXJyZW50SW5kZXggKyAxIHx8XG4gICAgICAoIGN1cnJlbnRJbmRleCA9PT0gcHJvamVjdHMubGVuZ3RoIC0gMSAmJiBpID09PSAwKVxuICAgICkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmV2Jyk7XG4gICAgfVxuICB9XG4gIHNldFRpbWVvdXQoICgpID0+IHsgbmF2aWdhdGluZyA9IGZhbHNlOyB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBXb3JrKCkge1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICBcdFx0PG1haW4gaWQ9XCJ3b3JrXCI+XG5cbiAgXHRcdFx0PHNlY3Rpb24gaWQ9XCJvbWlcIiBjbGFzc05hbWU9XCJjdXJyZW50IGZsZXggY29sbGFwc2UgcmV2ZXJzZVwiPlxuICBcdFx0XHRcdDxkaXYgaWQ9XCJkaWFtb25kXCIgY2xhc3NOYW1lPVwibGVmdCBmcmFtZWRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL29taS1nb2xkLWxvZ28ucG5nXCIgYWx0PVwib21pIGdvbGQgbnljXCI+PC9pbWc+XG4gIFx0XHRcdFx0XHRcdDxoMz5MYW5kaW5nIFBhZ2U8L2gzPlxuICBcdFx0XHRcdFx0XHQ8dWw+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkxheW91dCBkZXNpZ248L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5JY29ub2dyYXBoeTwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkltYWdlIG9wdGltaXphdGlvbjwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkV4dGVuZCBTaG9waWZ5IENNUyBmdW5jdGlvbmFsaXR5PC9saT5cbiAgXHRcdFx0XHRcdFx0PC91bD5cbiAgXHRcdFx0XHRcdFx0PHA+XG4gIFx0XHRcdFx0XHRcdFx0cGFydG5lcmVkIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vc3VyZmFjZXNlby5uZXQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3VyZmFjZSBTRU88L2E+XG4gIFx0XHRcdFx0XHRcdDwvcD5cbiAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9taWdvbGQuY29tL3BhZ2VzL2Fib3V0LWxhYi1jcmVhdGVkLWRpYW1vbmRzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIFx0XHRcdFx0XHRcdFx0dmlzaXQgcGFnZVxuICBcdFx0XHRcdFx0XHQ8L2E+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0PC9zZWN0aW9uPlxuXG4gIFx0XHRcdDxzZWN0aW9uIGlkPVwiZXZhbnNcIiBjbGFzc05hbWU9XCJxdWV1ZWQgZmxleCBjb2xsYXBzZSByZXZlcnNlXCI+XG4gIFx0XHRcdFx0PGRpdiBpZD1cInByZXNzbG9rXCIgY2xhc3NOYW1lPVwibGVmdCBmcmFtZWRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2V2YW5zLWNvbXBvbmVudHMtbG9nby5wbmdcIiBhbHQ9XCJldmFucyBjb21wb25lbnRzIGxvZ29cIj48L2ltZz5cbiAgXHRcdFx0XHRcdFx0PGgzPldlYnNpdGUgRGV2ZWxvcG1lbnQ8L2gzPlxuICBcdFx0XHRcdFx0XHQ8dWw+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkRldmVsb3BlZCByZXNwb25zaXZlIGN1c3RvbSBXb3JkcHJlc3MgdGhlbWU8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5JbnRlZ3JhdGVkIHdpdGggTWFwYm94IFN0dWRpbyBmb3IgZGlzdHJpYnV0aW9uIG1hcDwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkltcGxlbWVudGVkIGFkdmFuY2VkIHByb2R1Y3QgZmlsdGVyaW5nPC9saT5cbiAgXHRcdFx0XHRcdFx0PC91bD5cbiAgXHRcdFx0XHRcdFx0PHA+XG4gIFx0XHRcdFx0XHRcdFx0ZGV2ZWxvcGVkIGJ5IFRheWxvciB3aXRoIDxhIGhyZWY9XCJodHRwczovL3d3dy5yd2VzdC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UlxcV2VzdDwvYT5cbiAgXHRcdFx0XHRcdFx0PC9wPlxuICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZXZhbnNjb21wb25lbnRzLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgXHRcdFx0XHRcdFx0XHR2aXNpdCBzaXRlXG4gIFx0XHRcdFx0XHRcdDwvYT5cbiAgXHRcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L3NlY3Rpb24+XG4gIFx0XHRcdFxuICBcdFx0XHQ8c2VjdGlvbiBpZD1cImJtXCIgY2xhc3NOYW1lPVwiZmxleCBjb2xsYXBzZSByZXZlcnNlXCI+XG4gIFx0XHRcdFx0PGRpdiBpZD1cImplbGx5XCIgY2xhc3NOYW1lPVwibGVmdCBmcmFtZWRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2ItbS1sb2NrdXAucG5nXCIgYWx0PVwiYm9ubmUgbWFtYW4gc3RyYXdiZXJyeSBwcmVzZXJ2ZXNcIj48L2ltZz5cbiAgXHRcdFx0XHRcdFx0PGgzPkUtY29tbWVyY2UgaW50ZWdyYXRpb248L2gzPlxuICBcdFx0XHRcdFx0XHQ8dWw+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkJ1aWx0IG91dCBTaG9waWZ5IGVjb21tZXJjZSBzaXRlIHRvIG1hdGNoIHdlYnNpdGU8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5EZXZlbG9wZWQgZW1haWwgY2FtcGFpZ25zIHRocm91Z2ggTWFpbGNoaW1wPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+TGVkIHdlYnNpdGUgbWFpbnRlbmFuY2UgYW5kIHVwZGF0ZXM8L2xpPlxuICBcdFx0XHRcdFx0XHQ8L3VsPlxuICBcdFx0XHRcdFx0XHQ8cD5cbiAgXHRcdFx0XHRcdFx0XHRkZXZlbG9wZWQgYnkgVGF5bG9yIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJ3ZXN0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SXFxXZXN0PC9hPlxuICBcdFx0XHRcdFx0XHQ8L3A+XG4gIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3Nob3AuYm9ubmVtYW1hbi51cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgXHRcdFx0XHRcdFx0XHR2aXNpdCBzaXRlXG4gIFx0XHRcdFx0XHRcdDwvYT5cbiAgXHRcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L3NlY3Rpb24+XG4gIFx0XHRcbiAgXHRcdFx0PHNlY3Rpb24gaWQ9XCJnYWxpbGVvXCIgY2xhc3NOYW1lPVwiZmxleCBjb2xsYXBzZSByZXZlcnNlXCI+XG4gIFx0XHRcdFx0PGRpdiBpZD1cImZlbmNlcG9zdFwiIGNsYXNzTmFtZT1cImxlZnRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIGlkPVwiZ2FsaWxlby1sb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWcvZ2FsaWxlby1sb2dvLnBuZ1wiIGFsdD1cImdhbGlsZW8gbG9nbyBhbmQgbG9ja3VwXCI+PC9pbWc+XG4gIFx0XHRcdFx0XHRcdDxoMz5XZWJzaXRlIGRldmVsb3BtZW50PC9oMz5cbiAgXHRcdFx0XHRcdFx0PHVsPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5Dby1idWlsdCBjdXN0b20gcmVzcG9uc2l2ZSBXb3JkcHJlc3MgdGhlbWU8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5Db2xsYWJvcmF0ZWQgaW4gZGVzaWduIGNvbmNlcHRpbmc8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5Xcm90ZSBjb2RlIGZvciBTVkcgYW5pbWF0aW9uczwvbGk+XG4gIFx0XHRcdFx0XHRcdDwvdWw+XG4gIFx0XHRcdFx0XHRcdDxwPlxuICBcdFx0XHRcdFx0XHRcdGRldmVsb3BlZCBieSBUYXlsb3Igd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly93d3cucndlc3QuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlJcXFdlc3Q8L2E+XG4gIFx0XHRcdFx0XHRcdDwvcD5cbiAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZ2FsaWxlby1jYW1wcy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIFx0XHRcdFx0XHRcdFx0dmlzaXQgc2l0ZVxuICBcdFx0XHRcdFx0XHQ8L2E+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0PC9zZWN0aW9uPlxuICBcdFx0XHRcbiAgXHRcdDwvbWFpbj5cbiAgXHRcdDxkaXYgY2xhc3NOYW1lPVwici1hcnJvdyBnby1yaWdodFwiIG9uQ2xpY2s9e25leHRQcm9qZWN0fT5cbiAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnby1yaWdodFwiPjwvZGl2PlxuICBcdFx0PC9kaXY+XG4gIFx0XHQ8c3R5bGUganN4PntgXG5cbiAgXHRcdFx0c2VjdGlvbiB7XG4gIFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuICBcdFx0XHRcdHRvcDogMDtcbiAgXHRcdFx0XHRyaWdodDogMDtcbiAgXHRcdFx0XHRsZWZ0OiAwO1xuICBcdFx0XHRcdGJvdHRvbTogMDtcbiAgXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcbiAgXHRcdFx0XHRwYWRkaW5nOiA2ZW07XG4gIFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xuICBcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgXHRcdFx0XHRvcGFjaXR5OiAwO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24ucHJldiB7XG4gIFx0XHRcdFx0b3BhY2l0eTogMTtcbiAgXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24uY3VycmVudCB7XG4gIFx0XHRcdFx0b3BhY2l0eTogMTtcbiAgXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0c2VjdGlvbiA+IGRpdi5sZWZ0IHtcbiAgXHRcdFx0XHRmbGV4OiAxIDEgNTAlO1xuICBcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIFx0XHRcdH1cbiAgXHRcdFx0c2VjdGlvbiA+IGRpdi5yaWdodCB7XG4gIFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcbiAgXHRcdFx0XHRmbGV4OiAxIDAgNTAlO1xuICBcdFx0XHRcdHBhZGRpbmctbGVmdDogNGVtO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24gPiBkaXYucmlnaHQgaW1nIHtcbiAgXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcbiAgXHRcdFx0XHRtYXJnaW46IDRlbSBhdXRvO1xuICBcdFx0XHRcdHdpZHRoOiA2MCU7XG4gIFx0XHRcdFx0bWF4LXdpZHRoOiAzNTBweDtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGRpdi5yLWFycm93IHtcbiAgXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgXHRcdFx0XHR0b3A6IDUwJTtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYuci1hcnJvdyB7XG4gIFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICBcdFx0XHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMgZWFzZTtcbiAgXHRcdFx0XHRyaWdodDogMmVtO1xuICBcdFx0XHRcdHdpZHRoOiAwO1xuICBcdFx0XHRcdGhlaWdodDogMDtcbiAgXHRcdFx0XHRib3JkZXI6IDFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXHRcdFx0XHRib3JkZXItY29sb3I6IHdoaXRlc21va2Ugd2hpdGVzbW9rZSB3aGl0ZXNtb2tlIHRyYW5zcGFyZW50O1xuICBcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYuci1hcnJvdyA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuICBcdFx0XHRcdHRvcDogLTFlbTtcbiAgXHRcdFx0XHRsZWZ0OiAxZW07XG4gIFx0XHRcdFx0d2lkdGg6IDA7XG4gIFx0XHRcdFx0aGVpZ2h0OiAwO1xuICBcdFx0XHRcdGJvcmRlcjogMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBcdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGVzbW9rZTtcbiAgXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG4gIFx0XHRcdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cyBlYXNlO1xuICBcdFx0XHRcdG92ZXJmbG93OiB2aXNpYmxlO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdi5yLWFycm93OmhvdmVyIHtcbiAgXHRcdFx0XHRib3JkZXItY29sb3I6ICM0NDQgIzQ0NCAjNDQ0IHRyYW5zcGFyZW50O1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdi5yLWFycm93OmhvdmVyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgXHRcdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM0NDQ7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRkaXYjZGlhbW9uZCB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltZy9yb3VnaC1kaWFtb25kLmpwZycpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdiNwcmVzc2xvayB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoJy9zdGF0aWMvaW1nL3ByZXNzbG9rLnBuZycpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdiNqZWxseSB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoJy9zdGF0aWMvaW1nL2plbGx5LTIucG5nJyk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2I2ZlbmNlcG9zdCB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltZy9nYWxpbGVvLXNpZ24ucG5nJyk7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gIFx0XHRcdH1cbiAgXHRcdFx0aW1nI2dhbGlsZW8tbG9nbyB7XG4gIFx0XHRcdFx0d2lkdGg6IDQwJTtcbiAgXHRcdFx0fVxuICBcdFx0XHRcbiAgXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgXHRcdFx0XHRtYWluIHtcbiAgXHRcdFx0XHRcdGJvdHRvbTogYXV0bztcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0c2VjdGlvbiB7XG4gIFx0XHRcdFx0XHRwYWRkaW5nOiAxZW07XG4gIFx0XHRcdFx0XHRtYXgtd2lkdGg6IDQwZW07XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHNlY3Rpb24gPiBkaXYucmlnaHQge1xuICBcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG4gIFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHNlY3Rpb24gPiBkaXYubGVmdCB7XG4gIFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRkaXYuci1hcnJvdyB7XG4gIFx0XHRcdFx0XHR0b3A6IGF1dG87XG4gIFx0XHRcdFx0XHRib3R0b206IDEuNWVtO1xuICBcdFx0XHRcdFx0cmlnaHQ6IDIuNWVtO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0YH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrOyJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/pages/work.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ 6:
/*!*****************************!*\
  !*** multi ./pages/work.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ethanlaw/Desktop/bitlore-react/pages/work.js */"./pages/work.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map