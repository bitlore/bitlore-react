webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-link */ "./components/nav-link.js");
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

state = {
  isOn: 'home'
};
var links = [{
  title: 'bit lore',
  path: ''
}, {
  title: 'about',
  path: 'about'
}, {
  title: 'work',
  path: 'work'
}, {
  title: 'contact',
  path: 'contact'
}];
var navItems = links.map(function (link) {
  return Object(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"])(link);
});

var Header = function Header() {
  return __jsx("nav", {
    className: "jsx-805052040",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "bitlore",
    path: "",
    on: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "about",
    path: "about",
    on: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "work",
    path: "work",
    on: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "contact",
    path: "contact",
    on: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "805052040",
    __self: this
  }, "nav.jsx-805052040{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;height:2em;line-height:2em;}@media only screen and (max-width:600px){nav.jsx-805052040{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQixBQUdxQixBQVNNLGtCQUNuQix3REFUOEIsbUhBQ2hCLGNBQ0gsV0FDSyxnQkFDakIiLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZMaW5rIGZyb20gJy4vbmF2LWxpbmsnO1xuXG5zdGF0ZSA9IHsgaXNPbiA6ICdob21lJyB9XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7XG4gICAgdGl0bGU6ICdiaXQgbG9yZScsXG4gICAgcGF0aDogJydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnYWJvdXQnLFxuICAgIHBhdGg6ICdhYm91dCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnd29yaycsXG4gICAgcGF0aDogJ3dvcmsnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2NvbnRhY3QnLFxuICAgIHBhdGg6ICdjb250YWN0J1xuICB9XG5dO1xuXG5jb25zdCBuYXZJdGVtcyA9IGxpbmtzLm1hcCggbGluayA9PiBOYXZMaW5rKGxpbmspICk7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgXG4gIFxuICA8bmF2PlxuICAgIDxOYXZMaW5rIHRpdGxlPVwiYml0bG9yZVwiIHBhdGg9XCJcIiBvbj1cInRydWVcIi8+XG4gICAgPE5hdkxpbmsgdGl0bGU9XCJhYm91dFwiIHBhdGg9XCJhYm91dFwiIG9uPVwiZmFsc2VcIi8+XG4gICAgPE5hdkxpbmsgdGl0bGU9XCJ3b3JrXCIgcGF0aD1cIndvcmtcIiBvbj1cImZhbHNlXCIvPlxuICAgIDxOYXZMaW5rIHRpdGxlPVwiY29udGFjdFwiIHBhdGg9XCJjb250YWN0XCIgb249XCJmYWxzZVwiLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgXHRkaXNwbGF5OiBmbGV4O1xuICAgICAgXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBcdG1hcmdpbjogMCBhdXRvO1xuICAgICAgXHRoZWlnaHQ6IDJlbTtcbiAgICAgIFx0bGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICBcdG5hdiB7XG4gICAgICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgXHR9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.258699b3d20fa18e8f3f.hot-update.js.map