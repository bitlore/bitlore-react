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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/container.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Container = props => __jsx("div", {
  className: "jsx-531704396" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "531704396",
  __self: undefined
}, "div.container.jsx-531704396{position:relative;width:100%;max-width:80em;margin:0 auto;padding:0 4em;box-sizing:border-box;}@media only screen and (max-width:600px){div.container.jsx-531704396{padding:0 1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2MsQUFHdUIsQUFTSCxjQUNmLElBVFcsV0FDSSxlQUNELGNBQ0EsY0FDUSxzQkFDdkIiLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnRhaW5lciA9IHByb3BzID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0ZGl2LmNvbnRhaW5lciB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1heC13aWR0aDogODBlbTtcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdHBhZGRpbmc6IDAgNGVtO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG5cdFx0XHRcdGRpdi5jb250YWluZXIge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMWVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/container.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Container);

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
      className: "jsx-624418092",
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
      className: "jsx-624418092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-624418092",
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
      className: "jsx-624418092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-624418092",
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
      className: "jsx-624418092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-624418092",
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
      className: "jsx-624418092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-624418092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "contact"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "624418092",
      __self: this
    }, "nav.jsx-624418092{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;height:2em;line-height:2em;}@media only screen and (max-width:600px){nav.jsx-624418092{text-align:center;}}a.jsx-624418092{-webkit-text-decoration:none;text-decoration:none;display:inline-block;width:80%;white-space:nowrap;}div.jsx-624418092{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;padding:.5em 0 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-624418092:not(.on){cursor:pointer;}div.jsx-624418092::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid #444;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}div.jsx-624418092:hover.jsx-624418092::before{width:80%;}div.on.jsx-624418092::before{width:80%;border-bottom-color:whitesmoke;}@media only screen and (max-width:600px){div.jsx-624418092:first-child{text-align:left;}div.jsx-624418092:last-child{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUcwQixBQVNPLEFBS0MsQUFNZCxBQU1RLEFBR0osQUFRRCxBQUdBLEFBTVEsQUFHQyxVQVhyQixBQUdpQyxDQVhiLElBSHBCLENBb0JFLENBR0EsQ0F4Q0EsV0FxQlEsSUFWVSxJQVdMLElBVWYsU0EzQnVCLEFBa0JRLENBWFYsbUJBQ0YsQ0FQUCxHQWZvQixLQWlDYyxFQWpCekIsbUJBQ3JCLHVEQU1BLGtCQVdBLGdCQWpDZ0IsY0FDSCxXQUNLLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZXRoYW5sYXcvRGVza3RvcC9iaXRsb3JlLXJlYWN0L2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkxpbmsgZnJvbSAnLi9uYXYtbGluayc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8TmF2TGluayBhY3RpdmVDbGFzc05hbWU9XCJvblwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhPmJpdCBsb3JlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cIm9uXCIgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YT5hYm91dDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8TmF2TGluayBhY3RpdmVDbGFzc05hbWU9XCJvblwiIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YT53b3JrPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cIm9uXCIgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhPmNvbnRhY3Q8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMCAwIDA7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2Om5vdCgub24pIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLCBib3JkZXItY29sb3IgLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYub246OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfSAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/header.js */"));
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backdrop */ "./components/backdrop.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container */ "./components/container.js");
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Layout = props => __jsx("div", {
  className: "jsx-2757657267",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-2757657267",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "bit lore | web development studio"), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "/static/img/favicon.png",
  className: "jsx-2757657267",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx(_backdrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2757657267",
  __self: undefined
}, "body{font-size:14pt;position:relative;width:100%;min-height:100%;padding:0;margin:0;color:whitesmoke;font-family:'Cutive Mono',monospace;line-height:1.5em;background-color:#202020;}body *{box-sizing:border-box;}h1,h2,h3,h4,h5,h6,p,li{font-weight:normal;max-width:100%;}h1{margin:0 auto;font-weight:normal;font-size:1.68em;line-height:1.5em;max-width:22em;text-align:center;}h2{margin:2em auto;font-size:1.68em;line-height:1.6em;}h3{font-size:1.41em;line-height:1.6em;margin:0;}h4{line-height:1.88em;font-size:1.19em;margin:0;}h5{font-weight:bold;}p{margin:1.5em 0;}ul{list-style:none;padding-left:0;}img{box-sizing:border-box;object-fit:cover;}a{position:relative;color:whitesmoke;}a.fancy{-webkit-text-decoration:none;text-decoration:none;}a.fancy::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid whitesmoke;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}a.fancy:hover::before{width:100%;}main{position:relative;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:calc(100vh - 2em);padding:4em 0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow-x:hidden;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flex.column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.framed{border:1em solid whitesmoke;}.framed.dark{border:1em solid black;}.no-top-margin{margin-top:0;}.no-bottom-margin{margin-bottom:0;}@media only screen and (max-width:1000px){.flex.collapse{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex.collapse.reverse{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.responsive-margin{margin:0 !important;}}@media only screen and (max-width:600px){body{font-size:12pt;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JxQixBQUdvQixBQWFPLEFBSUgsQUFLTCxBQVFFLEFBS0MsQUFNRSxBQUlDLEFBRUwsQUFHQyxBQUlNLEFBS0osQUFJRyxBQUdWLEFBUUEsQUFJTyxBQVlMLEFBR1MsQUFHTSxBQUdMLEFBR1YsQUFHRyxBQUtPLEFBR1EsQUFHVixBQU1MLFdBdkRFLEFBUW5CLEVBNEJBLENBaEZvQixDQXRCRCxBQStDbkIsQUEyRUMsQ0E1RmlCLEFBb0JGLEFBdURoQixDQXRFbUIsQUFTRyxDQWVKLEFBbUJZLENBN0RkLEFBd0JFLENBMkVqQixFQXZHRCxBQXlDa0IsQ0E2Q2xCLEtBSEEsQ0E3QlMsRUFoQlQsRUFsRFksQUFzQk0sQUFRQyxDQWJuQixDQWtCVSxBQXdCVixDQWxCVSxDQTBCSSxFQWJkLEtBckRpQixBQW9DakIsQ0FLQSxLQW5CbUIsQUF1Q25CLEFBTW9DLENBckNwQyxTQTdCVyxRQXNCSyxFQXJCTixJQXNGVixJQUdBLEFBaUJDLENBekdpQixJQXFCQyxFQTRDMEIsV0FoRVAsS0FxQnRDLENBc0ZDLDhCQTFHa0IsU0F3RVcsU0F2RUosb0JBd0VYLEtBdkVmLElBOERBLEtBVXVCLHNCQUNULDBFQUNTLDhFQUNDLG1HQUNMLGtCQUNuQiIsImZpbGUiOiIvVXNlcnMvZXRoYW5sYXcvRGVza3RvcC9iaXRsb3JlLXJlYWN0L2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vYmFja2Ryb3AnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5cblxuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Yml0IGxvcmUgfCB3ZWIgZGV2ZWxvcG1lbnQgc3R1ZGlvPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2Zhdmljb24ucG5nXCI+PC9saW5rPlxuICAgIDwvSGVhZD5cblx0XHQ8QmFja2Ryb3A+PC9CYWNrZHJvcD5cblx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvQ29udGFpbmVyPlxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRib2R5IHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB0O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZXNtb2tlO1xuXHRcdFx0XHRmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMS41ZW07XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG5cdFx0XHR9XG5cblx0XHRcdGJvZHkgKiB7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHR9XG5cblx0XHRcdGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGxpIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXG5cdFx0XHRoMSB7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRmb250LXNpemU6IDEuNjhlbTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNWVtO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDIyZW07XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdH1cblx0XHRcdGgyIHtcblx0XHRcdFx0bWFyZ2luOiAyZW0gYXV0bztcblx0XHRcdFx0Zm9udC1zaXplOiAxLjY4ZW07XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjZlbTtcblx0XHRcdH1cblx0XHRcdGgzIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxLjQxZW07XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjZlbTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHQvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTsgKi9cblx0XHRcdH1cblx0XHRcdGg0IHtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuODhlbTtcblx0XHRcdFx0Zm9udC1zaXplOiAxLjE5ZW07XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblx0XHRcdGg1IHsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDEuNWVtIDA7XG5cdFx0XHR9XG5cdFx0XHR1bCB7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcblx0XHRcdH1cblx0XHRcdGltZyB7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXG5cdFx0XHRhIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRjb2xvcjogd2hpdGVzbW9rZTtcblx0XHRcdH1cblx0XHRcdGEuZmFuY3kge1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHRhLmZhbmN5OjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0aGVpZ2h0OiAxLjVlbTtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG5cdFx0XHRcdHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLCBib3JkZXItY29sb3IgLjNzO1xuXHRcdFx0fVxuXHRcdFx0YS5mYW5jeTpob3Zlcjo6YmVmb3JlIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdG1haW4ge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtKTtcblx0XHRcdFx0cGFkZGluZzogNGVtIDA7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC5mbGV4IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdH1cblx0XHRcdC5mbGV4LmNvbHVtbiB7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHR9XG5cdFx0XHQuZnJhbWVkIHtcblx0XHRcdFx0Ym9yZGVyOiAxZW0gc29saWQgd2hpdGVzbW9rZTtcblx0XHRcdH1cblx0XHRcdC5mcmFtZWQuZGFyayB7XG5cdFx0XHRcdGJvcmRlcjogMWVtIHNvbGlkIGJsYWNrO1xuXHRcdFx0fVxuXHRcdFx0Lm5vLXRvcC1tYXJnaW4ge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0fVxuXHRcdFx0Lm5vLWJvdHRvbS1tYXJnaW4ge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXHRcdFx0XHQuZmxleC5jb2xsYXBzZSB7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZmxleC5jb2xsYXBzZS5yZXZlcnNlIHtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnJlc3BvbnNpdmUtbWFyZ2luIHtcblx0XHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcblx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/layout.js */"));

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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function About() {
  return __jsx("main", {
    id: "about",
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-3561492391" + " " + "flex collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    id: "about-start",
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3561492391" + " " + "no-top-margin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "We are a small digital studio based in the lush Pacific Northwest."), __jsx("p", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Our specialty is working hand in hand with small businesses and agencies to create compelling interactive experiences and storytelling in the digital realm."), __jsx("p", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "When not designing, writing, and coding, we can be found exploring the moss-laden forests surrounding Portland and sharing a few gourds of yerba mate."), __jsx("ul", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Our services include:"), __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "web development"), __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "user interface design"), __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "user experience"), __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "branding"), __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "e-commerce integration"), __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "email marketing"), __jsx("li", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "and web animation")), __jsx("p", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Our expert friends at ", __jsx("a", {
    href: "https://surfaceseo.net/",
    target: "_blank",
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Surface SEO"), " and ", __jsx("a", {
    href: "https://www.wunderfurn.com/",
    target: "_blank",
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Wunderfurn Photography"), " help us increase visibility and provide beautiful imagery."), __jsx("p", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "If you're interested in working with us, ", __jsx("a", {
    id: "contact-us",
    href: "#",
    className: "jsx-3561492391" + " " + "section-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "contact us"), " for a complementary consultation.")), __jsx("img", {
    id: "beast",
    src: "/static/img/beast-redwoods.jpg",
    alt: "ethan and taylor in the redwoods",
    className: "jsx-3561492391" + " " + "framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Our team"), __jsx("div", {
    className: "jsx-3561492391" + " " + "flex collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-3561492391" + " " + "flex column collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Taylor Pokoj Law"), __jsx("h4", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "high priestess of the ministry of sinistry"), __jsx("h4", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "co-founder // ux // developer"), __jsx("p", {
    className: "jsx-3561492391" + " " + "no-bottom-margin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Sweet, maybe...passionate, I suppose...but don't ever mistake that for nice.")), __jsx("p", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Taylor leverages her experience in the Interactive team at a fast-paced marketing agency to provide clarity to the scope of any project.  She has built and launched many client websites, configured and managed CMSs, coded emails and animated banners, created tools and consulted on technical decisions.  She is our expert on process and technology integration.")), __jsx("div", {
    id: "profile-1",
    className: "jsx-3561492391" + " " + "framed img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-3561492391" + " " + "flex column collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    id: "profile-2",
    className: "jsx-3561492391" + " " + "framed img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Ethan Law"), __jsx("h4", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "gourd lord"), __jsx("h4", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "co-founder // designer // developer"), __jsx("p", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "There's something that doesn't make sense. Let's go and poke it with a stick.")), __jsx("p", {
    className: "jsx-3561492391",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Ethan's prior experience has been in designing and building the front end of a large scale web application.  He coded the client facing engine for taking online courses, and designed and built the user interface of a new content management system used to create and edit  courses.  He is our lead designer and Javascript expert.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3561492391",
    __self: this
  }, "section.jsx-3561492391{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:2em;}section.jsx-3561492391:first-of-type{margin-right:3em;}section.jsx-3561492391>div.img.jsx-3561492391{margin-right:2em;height:22em;background-position:center;background-repeat:no-repeat;background-size:cover;}p.jsx-3561492391:last-child{margin-bottom:0;}section.jsx-3561492391>*.jsx-3561492391:first-child{margin-bottom:3em;}#profile-1.jsx-3561492391{background-image:url('/static/img/ethan-coast.png');}#profile-2.jsx-3561492391{background-image:url('/static/img/tay-melon.png');}@media only screen and (max-width:1000px){main.jsx-3561492391 section.jsx-3561492391,main#about.jsx-3561492391 section.jsx-3561492391>*.jsx-3561492391{margin-right:0 !important;}main.jsx-3561492391 section.jsx-3561492391>div.img.jsx-3561492391{margin:2em 0;width:100%;}main.jsx-3561492391 #profile-1.jsx-3561492391{background-image:url('/static/img/tay-melon.png');}main.jsx-3561492391 #profile-2.jsx-3561492391{background-image:url('/static/img/ethan-coast.png');}}div#about-start.jsx-3561492391{-webkit-flex:0 1 40em;-ms-flex:0 1 40em;flex:0 1 40em;margin-right:3em;}img#beast.jsx-3561492391{height:33em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VrQixBQUd3QixBQUtJLEFBR0EsQUFPRCxBQUdFLEFBR2tDLEFBR0YsQUFLdEIsQUFHYixBQUtxQyxBQUdFLEFBS3hDLEFBSUYsWUFDZCxDQWpCZSxHQWpCZixDQVZBLEFBR2MsQ0FVZCxNQWVFLEVBSkEsR0FwQjJCLHFCQWU3QixBQWFFLENBckM4QixDQXFCaEMsQUFtQkUsRUFLaUIsRUFuQ1csZUFvQzlCLGFBbkN3QixzQkFDeEIsNERBWG9CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZXRoYW5sYXcvRGVza3RvcC9iaXRsb3JlLXJlYWN0L3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGlkPVwiYWJvdXRcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggY29sbGFwc2VcIj5cbiAgICAgICAgPGRpdiBpZD1cImFib3V0LXN0YXJ0XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgV2UgYXJlIGEgc21hbGwgZGlnaXRhbCBzdHVkaW8gYmFzZWQgaW4gdGhlIGx1c2ggUGFjaWZpYyBOb3J0aHdlc3QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlx0XG4gICAgICAgICAgICBPdXIgc3BlY2lhbHR5IGlzIHdvcmtpbmcgaGFuZCBpbiBoYW5kIHdpdGggc21hbGwgYnVzaW5lc3NlcyBhbmQgYWdlbmNpZXMgdG8gY3JlYXRlIGNvbXBlbGxpbmcgaW50ZXJhY3RpdmUgZXhwZXJpZW5jZXMgYW5kIHN0b3J5dGVsbGluZyBpbiB0aGUgZGlnaXRhbCByZWFsbS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaGVuIG5vdCBkZXNpZ25pbmcsIHdyaXRpbmcsIGFuZCBjb2RpbmcsIHdlIGNhbiBiZSBmb3VuZCBleHBsb3JpbmcgdGhlIG1vc3MtbGFkZW4gZm9yZXN0cyBzdXJyb3VuZGluZyBQb3J0bGFuZCBhbmQgc2hhcmluZyBhIGZldyBnb3VyZHMgb2YgeWVyYmEgbWF0ZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPk91ciBzZXJ2aWNlcyBpbmNsdWRlOjwvbGk+XG4gICAgICAgICAgICA8bGk+d2ViIGRldmVsb3BtZW50PC9saT5cbiAgICAgICAgICAgIDxsaT51c2VyIGludGVyZmFjZSBkZXNpZ248L2xpPlxuICAgICAgICAgICAgPGxpPnVzZXIgZXhwZXJpZW5jZTwvbGk+XG4gICAgICAgICAgICA8bGk+YnJhbmRpbmc8L2xpPlxuICAgICAgICAgICAgPGxpPmUtY29tbWVyY2UgaW50ZWdyYXRpb248L2xpPlxuICAgICAgICAgICAgPGxpPmVtYWlsIG1hcmtldGluZzwvbGk+XG4gICAgICAgICAgICA8bGk+YW5kIHdlYiBhbmltYXRpb248L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBPdXIgZXhwZXJ0IGZyaWVuZHMgYXQgPGEgaHJlZj1cImh0dHBzOi8vc3VyZmFjZXNlby5uZXQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3VyZmFjZSBTRU88L2E+IGFuZCA8YSBocmVmPVwiaHR0cHM6Ly93d3cud3VuZGVyZnVybi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V3VuZGVyZnVybiBQaG90b2dyYXBoeTwvYT4gaGVscCB1cyBpbmNyZWFzZSB2aXNpYmlsaXR5IGFuZCBwcm92aWRlIGJlYXV0aWZ1bCBpbWFnZXJ5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIElmIHlvdSdyZSBpbnRlcmVzdGVkIGluIHdvcmtpbmcgd2l0aCB1cywgPGEgaWQ9XCJjb250YWN0LXVzXCIgY2xhc3NOYW1lPVwic2VjdGlvbi1saW5rXCIgaHJlZj1cIiNcIj5jb250YWN0IHVzPC9hPiBmb3IgYSBjb21wbGVtZW50YXJ5IGNvbnN1bHRhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGlkPVwiYmVhc3RcIiBjbGFzc05hbWU9XCJmcmFtZWRcIiBzcmM9XCIvc3RhdGljL2ltZy9iZWFzdC1yZWR3b29kcy5qcGdcIiBhbHQ9XCJldGhhbiBhbmQgdGF5bG9yIGluIHRoZSByZWR3b29kc1wiPjwvaW1nPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGgyPk91ciB0ZWFtPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb2xsYXBzZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGNvbHVtbiBjb2xsYXBzZVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+VGF5bG9yIFBva29qIExhdzwvaDM+XG4gICAgICAgICAgICA8aDQ+aGlnaCBwcmllc3Rlc3Mgb2YgdGhlIG1pbmlzdHJ5IG9mIHNpbmlzdHJ5PC9oND5cbiAgICAgICAgICAgIDxoND5jby1mb3VuZGVyIC8vIHV4IC8vIGRldmVsb3BlcjwvaDQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1ib3R0b20tbWFyZ2luXCI+XG4gICAgICAgICAgICAgIDxpPlN3ZWV0LCBtYXliZS4uLnBhc3Npb25hdGUsIEkgc3VwcG9zZS4uLmJ1dCBkb24ndCBldmVyIG1pc3Rha2UgdGhhdCBmb3IgbmljZS48L2k+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGF5bG9yIGxldmVyYWdlcyBoZXIgZXhwZXJpZW5jZSBpbiB0aGUgSW50ZXJhY3RpdmUgdGVhbSBhdCBhIGZhc3QtcGFjZWQgbWFya2V0aW5nIGFnZW5jeSB0byBwcm92aWRlIGNsYXJpdHkgdG8gdGhlIHNjb3BlIG9mIGFueSBwcm9qZWN0LiAgU2hlIGhhcyBidWlsdCBhbmQgbGF1bmNoZWQgbWFueSBjbGllbnQgd2Vic2l0ZXMsIGNvbmZpZ3VyZWQgYW5kIG1hbmFnZWQgQ01TcywgY29kZWQgZW1haWxzIGFuZCBhbmltYXRlZCBiYW5uZXJzLCBjcmVhdGVkIHRvb2xzIGFuZCBjb25zdWx0ZWQgb24gdGVjaG5pY2FsIGRlY2lzaW9ucy4gIFNoZSBpcyBvdXIgZXhwZXJ0IG9uIHByb2Nlc3MgYW5kIHRlY2hub2xvZ3kgaW50ZWdyYXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtMVwiIGNsYXNzTmFtZT1cImZyYW1lZCBpbWdcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGNvbHVtbiBjb2xsYXBzZSByZXZlcnNlXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtMlwiIGNsYXNzTmFtZT1cImZyYW1lZCBpbWdcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPkV0aGFuIExhdzwvaDM+XG4gICAgICAgICAgICA8aDQ+Z291cmQgbG9yZDwvaDQ+XG4gICAgICAgICAgICA8aDQ+Y28tZm91bmRlciAvLyBkZXNpZ25lciAvLyBkZXZlbG9wZXI8L2g0PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxpPlRoZXJlJ3Mgc29tZXRoaW5nIHRoYXQgZG9lc24ndCBtYWtlIHNlbnNlLiBMZXQncyBnbyBhbmQgcG9rZSBpdCB3aXRoIGEgc3RpY2suPC9pPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEV0aGFuJ3MgcHJpb3IgZXhwZXJpZW5jZSBoYXMgYmVlbiBpbiBkZXNpZ25pbmcgYW5kIGJ1aWxkaW5nIHRoZSBmcm9udCBlbmQgb2YgYSBsYXJnZSBzY2FsZSB3ZWIgYXBwbGljYXRpb24uICBIZSBjb2RlZCB0aGUgY2xpZW50IGZhY2luZyBlbmdpbmUgZm9yIHRha2luZyBvbmxpbmUgY291cnNlcywgYW5kIGRlc2lnbmVkIGFuZCBidWlsdCB0aGUgdXNlciBpbnRlcmZhY2Ugb2YgYSBuZXcgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbSB1c2VkIHRvIGNyZWF0ZSBhbmQgZWRpdCAgY291cnNlcy4gIEhlIGlzIG91ciBsZWFkIGRlc2lnbmVyIGFuZCBKYXZhc2NyaXB0IGV4cGVydC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24gPiBkaXYuaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICBwOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiA+ICo6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgICAgICAgfVxuICAgICAgICAjcHJvZmlsZS0xIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1nL2V0aGFuLWNvYXN0LnBuZycpO1xuICAgICAgICB9XG4gICAgICAgICNwcm9maWxlLTIge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWcvdGF5LW1lbG9uLnBuZycpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KSB7XG4gICAgICAgICAgbWFpbiBzZWN0aW9uLCBtYWluI2Fib3V0IHNlY3Rpb24gPiAqIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHNlY3Rpb24gPiBkaXYuaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMmVtIDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgbWFpbiAjcHJvZmlsZS0xIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWcvdGF5LW1lbG9uLnBuZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluICNwcm9maWxlLTIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltZy9ldGhhbi1jb2FzdC5wbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpdiNhYm91dC1zdGFydCB7XG4gICAgICAgICAgZmxleDogMCAxIDQwZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gICAgICAgIH1cbiAgICAgICAgaW1nI2JlYXN0IHtcbiAgICAgICAgICBoZWlnaHQ6IDMzZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/pages/about.js */"));
}

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ethanlaw/Desktop/bitlore-react/pages/about.js */"./pages/about.js");


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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=about.js.map