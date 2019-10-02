webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nav_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-link */ "./components/nav-link.js");





var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
 // 
// const links = [
//   {
//     title: 'bit lore',
//     path: ''
//   },
//   {
//     title: 'about',
//     path: 'about'
//   },
//   {
//     title: 'work',
//     path: 'work'
//   },
//   {
//     title: 'contact',
//     path: 'contact'
//   }
// ];
// const navItems = links.map( link => NavLink(link) );

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      isOn: 'bit lore'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "changeHighlighted",
    value: function changeHighlighted(title) {
      console.log('title : ' + title);
      this.setState({
        isOn: title
      });
      console.log('isOn : ' + this.state.isOn);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "jsx-3410197033",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-3410197033",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.isOn), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "bit lore",
        path: "",
        viewing: this.changeHighlighted.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "about",
        path: "about",
        viewing: this.changeHighlighted.bind(this),
        on: this.state.isOn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "work",
        path: "work",
        viewing: this.changeHighlighted.bind(this),
        on: this.state.isOn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx(_nav_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "contact",
        path: "contact",
        viewing: this.changeHighlighted.bind(this),
        on: this.state.isOn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3410197033",
        __self: this
      }, "nav.jsx-3410197033{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;height:2em;line-height:2em;}@media only screen and (max-width:600px){nav.jsx-3410197033{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUcwQixBQVNPLGtCQUNwQix3REFUOEIsbUhBQ2hCLGNBQ0gsV0FDSyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2V0aGFubGF3L0Rlc2t0b3AvYml0bG9yZS1yZWFjdC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZMaW5rIGZyb20gJy4vbmF2LWxpbmsnO1xuLy8gXG4vLyBjb25zdCBsaW5rcyA9IFtcbi8vICAge1xuLy8gICAgIHRpdGxlOiAnYml0IGxvcmUnLFxuLy8gICAgIHBhdGg6ICcnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB0aXRsZTogJ2Fib3V0Jyxcbi8vICAgICBwYXRoOiAnYWJvdXQnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB0aXRsZTogJ3dvcmsnLFxuLy8gICAgIHBhdGg6ICd3b3JrJ1xuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgdGl0bGU6ICdjb250YWN0Jyxcbi8vICAgICBwYXRoOiAnY29udGFjdCdcbi8vICAgfVxuLy8gXTtcblxuLy8gY29uc3QgbmF2SXRlbXMgPSBsaW5rcy5tYXAoIGxpbmsgPT4gTmF2TGluayhsaW5rKSApO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc09uOiAnYml0IGxvcmUnIH07IFxuICB9XG4gIFxuICBjaGFuZ2VIaWdobGlnaHRlZCh0aXRsZSkge1xuICAgIGNvbnNvbGUubG9nKCd0aXRsZSA6ICcgKyB0aXRsZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBpc09uIDogdGl0bGUgfSApO1xuICAgIGNvbnNvbGUubG9nKCdpc09uIDogJyArIHRoaXMuc3RhdGUuaXNPbik7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdj5cbiAgICAgICAgPHA+e3RoaXMuc3RhdGUuaXNPbn08L3A+XG4gICAgICAgIDxOYXZMaW5rIHRpdGxlPVwiYml0IGxvcmVcIiBwYXRoPVwiXCIgdmlld2luZz17dGhpcy5jaGFuZ2VIaWdobGlnaHRlZC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDxOYXZMaW5rIHRpdGxlPVwiYWJvdXRcIiBwYXRoPVwiYWJvdXRcIiB2aWV3aW5nPXt0aGlzLmNoYW5nZUhpZ2hsaWdodGVkLmJpbmQodGhpcyl9IG9uPXt0aGlzLnN0YXRlLmlzT259Lz5cbiAgICAgICAgPE5hdkxpbmsgdGl0bGU9XCJ3b3JrXCIgcGF0aD1cIndvcmtcIiB2aWV3aW5nPXt0aGlzLmNoYW5nZUhpZ2hsaWdodGVkLmJpbmQodGhpcyl9IG9uPXt0aGlzLnN0YXRlLmlzT259Lz5cbiAgICAgICAgPE5hdkxpbmsgdGl0bGU9XCJjb250YWN0XCIgcGF0aD1cImNvbnRhY3RcIiB2aWV3aW5nPXt0aGlzLmNoYW5nZUhpZ2hsaWdodGVkLmJpbmQodGhpcyl9IG9uPXt0aGlzLnN0YXRlLmlzT259Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfSAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=about.js.fb7a5eeb0b9842699532.hot-update.js.map