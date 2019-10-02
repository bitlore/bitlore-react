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

undefined.state = {
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
  }, "nav.jsx-805052040{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;height:2em;line-height:2em;}@media only screen and (max-width:600px){nav.jsx-805052040{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQixBQUdxQixBQVNNLGtCQUNuQix3REFUOEIsbUhBQ2hCLGNBQ0gsV0FDSyxnQkFDakIiLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZMaW5rIGZyb20gJy4vbmF2LWxpbmsnO1xuXG50aGlzLnN0YXRlID0geyBpc09uIDogJ2hvbWUnIH1cblxuY29uc3QgbGlua3MgPSBbXG4gIHtcbiAgICB0aXRsZTogJ2JpdCBsb3JlJyxcbiAgICBwYXRoOiAnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdhYm91dCcsXG4gICAgcGF0aDogJ2Fib3V0J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICd3b3JrJyxcbiAgICBwYXRoOiAnd29yaydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnY29udGFjdCcsXG4gICAgcGF0aDogJ2NvbnRhY3QnXG4gIH1cbl07XG5cbmNvbnN0IG5hdkl0ZW1zID0gbGlua3MubWFwKCBsaW5rID0+IE5hdkxpbmsobGluaykgKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICBcbiAgXG4gIDxuYXY+XG4gICAgPE5hdkxpbmsgdGl0bGU9XCJiaXRsb3JlXCIgcGF0aD1cIlwiIG9uPVwidHJ1ZVwiLz5cbiAgICA8TmF2TGluayB0aXRsZT1cImFib3V0XCIgcGF0aD1cImFib3V0XCIgb249XCJmYWxzZVwiLz5cbiAgICA8TmF2TGluayB0aXRsZT1cIndvcmtcIiBwYXRoPVwid29ya1wiIG9uPVwiZmFsc2VcIi8+XG4gICAgPE5hdkxpbmsgdGl0bGU9XCJjb250YWN0XCIgcGF0aD1cImNvbnRhY3RcIiBvbj1cImZhbHNlXCIvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICBcdGRpc3BsYXk6IGZsZXg7XG4gICAgICBcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIFx0bWFyZ2luOiAwIGF1dG87XG4gICAgICBcdGhlaWdodDogMmVtO1xuICAgICAgXHRsaW5lLWhlaWdodDogMmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAgIFx0bmF2IHtcbiAgICAgIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBcdH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.0b4c92ca39d533259aac.hot-update.js.map