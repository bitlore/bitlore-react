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

var links = [{
  title: 'bit lore',
  path: '/'
}, {
  title: 'about',
  path: '/about'
}, {
  title: 'work',
  path: '/work'
}, {
  title: 'contact',
  path: '/contact'
}];
var navItems = links.map(function (link) {
  return Object(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"])(link.title, link.path);
});

var Header = function Header() {
  return __jsx("nav", {
    className: "jsx-805052040",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, navItems, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "805052040",
    __self: this
  }, "nav.jsx-805052040{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;height:2em;line-height:2em;}@media only screen and (max-width:600px){nav.jsx-805052040{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJnQixBQUdxQixBQVNNLGtCQUNuQix3REFUOEIsbUhBQ2hCLGNBQ0gsV0FDSyxnQkFDakIiLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZMaW5rIGZyb20gJy4vbmF2LWxpbmsnO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnYml0IGxvcmUnLFxuICAgIHBhdGg6ICcvJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdhYm91dCcsXG4gICAgcGF0aDogJy9hYm91dCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnd29yaycsXG4gICAgcGF0aDogJy93b3JrJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdjb250YWN0JyxcbiAgICBwYXRoOiAnL2NvbnRhY3QnXG4gIH1cbl07XG5cbmNvbnN0IG5hdkl0ZW1zID0gbGlua3MubWFwKCBsaW5rID0+IE5hdkxpbmsobGluay50aXRsZSwgbGluay5wYXRoKSApO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxuYXY+XG4gICAge25hdkl0ZW1zfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICBcdGRpc3BsYXk6IGZsZXg7XG4gICAgICBcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIFx0bWFyZ2luOiAwIGF1dG87XG4gICAgICBcdGhlaWdodDogMmVtO1xuICAgICAgXHRsaW5lLWhlaWdodDogMmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAgIFx0bmF2IHtcbiAgICAgIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBcdH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/nav-link.js":
/*!********************************!*\
  !*** ./components/nav-link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var NavLink = function NavLink() {
  return __jsx("div", {
    className: "jsx-3425477863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3425477863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "about")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3425477863",
    __self: this
  }, "a.jsx-3425477863{-webkit-text-decoration:none;text-decoration:none;}div.jsx-3425477863{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;padding:.5em 0 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-3425477863:not(.on){cursor:pointer;}div.jsx-3425477863::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid #444;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}div.jsx-3425477863:hover.jsx-3425477863::before{width:80%;}div.on.jsx-3425477863::before{width:80%;border-bottom-color:whitesmoke;}@media only screen and (max-width:600px){div.jsx-3425477863:first-child{text-align:left;}div.jsx-3425477863:last-child{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9uYXYtbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTYyxBQUcwQixBQUdkLEFBTVEsQUFHSixBQVFELEFBR0EsQUFNTyxBQUdDLFVBWG5CLEFBR2dDLENBWGIsSUFIbkIsQ0FvQkMsQ0FHQSxZQW5CUSxJQVZVLElBV0wsSUFVZCxTQXhCQSxBQWU4QixDQVhWLG1CQUNGLFNBVzJCLDRFQVY3QyxrQkFXQSIsImZpbGUiOiIvVXNlcnMvZXRoYW5sYXcvRGVza3RvcC9iaXRsb3JlLXJlYWN0L2NvbXBvbmVudHMvbmF2LWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cblxuY29uc3QgTmF2TGluayA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XG5cdFx0XHQ8YT5hYm91dDwvYT5cblx0XHQ8L0xpbms+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0YSB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdH1cblx0XHRcdGRpdiB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0cGFkZGluZzogLjVlbSAwIDAgMDtcblx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHRkaXY6bm90KC5vbikge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cdFx0XHRkaXY6OmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDEuNWVtO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcblx0XHRcdFx0dHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UsIGJvcmRlci1jb2xvciAuM3M7XG5cdFx0XHR9XG5cdFx0XHRkaXY6aG92ZXI6OmJlZm9yZSB7XG5cdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHR9XG5cdFx0XHRkaXYub246OmJlZm9yZSB7XG5cdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlc21va2U7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuXHRcdFx0XHRkaXY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGl2Omxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7XG5cbiJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ })

})
//# sourceMappingURL=index.js.64f2303fbe65cfd7c2f1.hot-update.js.map