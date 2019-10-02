webpackHotUpdate("static/development/pages/work.js",{

/***/ "./components/nav-link.js":
/*!********************************!*\
  !*** ./components/nav-link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
// import ReactDOM from 'react-dom';


var NavigationLink =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavigationLink, _React$Component);

  function NavigationLink(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationLink);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationLink).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationLink, [{
    key: "handleClick",
    value: function handleClick() {
      console.log('props title : ' + this.props.title);
      this.props.viewing(this.props.title);
    }
  }, {
    key: "render",
    value: function render() {
      var view = __jsx("div", {
        key: this.props.title,
        activeClassName: "on",
        className: "jsx-1826108867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/".concat(this.props.path),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("a", {
        onClick: this.handleClick,
        className: "jsx-1826108867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1826108867",
        __self: this
      }, "a.jsx-1826108867{-webkit-text-decoration:none;text-decoration:none;display:inline-block;width:80%;}div.jsx-1826108867{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;padding:.5em 0 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-1826108867:not(.on){cursor:pointer;}div.jsx-1826108867::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid #444;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}div.jsx-1826108867:hover.jsx-1826108867::before{width:80%;}div.on.jsx-1826108867::before{width:80%;border-bottom-color:whitesmoke;}@media only screen and (max-width:600px){div.jsx-1826108867:first-child{text-align:left;}div.jsx-1826108867:last-child{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9uYXYtbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmdCLEFBRzRCLEFBS2QsQUFNUSxBQUdKLEFBUUQsQUFHQSxBQU1PLEFBR0MsVUFYbkIsQUFHZ0MsQ0FYYixJQUhuQixDQW9CQyxDQUdBLFlBbkJRLElBVlUsSUFXTCxJQVVkLFNBMUJzQixBQWlCUSxDQVhWLG1CQUNGLENBTlAsUUFpQmtDLEVBaEI3QywwRUFNQSxrQkFXQSIsImZpbGUiOiIvVXNlcnMvZXRoYW5sYXcvRGVza3RvcC9iaXRsb3JlLXJlYWN0L2NvbXBvbmVudHMvbmF2LWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE5hdmlnYXRpb25MaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cdFxuXHRoYW5kbGVDbGljaygpIHtcblx0XHRjb25zb2xlLmxvZygncHJvcHMgdGl0bGUgOiAnICsgdGhpcy5wcm9wcy50aXRsZSk7XG5cdFx0dGhpcy5wcm9wcy52aWV3aW5nKHRoaXMucHJvcHMudGl0bGUpO1xuICB9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgdmlldyA9IChcblx0XHRcdDxkaXYga2V5PXt0aGlzLnByb3BzLnRpdGxlfSBhY3RpdmVDbGFzc05hbWU9XCJvblwiPlxuXHRcdFx0XHQ8TmF2TGluayBocmVmPXtgLyR7dGhpcy5wcm9wcy5wYXRofWB9PlxuXHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Pnt0aGlzLnByb3BzLnRpdGxlfTwvYT5cblx0XHRcdFx0PC9OYXZMaW5rPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IC41ZW0gMCAwIDA7XG5cdFx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGl2Om5vdCgub24pIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGl2OjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0XHRcdGhlaWdodDogMS41ZW07XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLCBib3JkZXItY29sb3IgLjNzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXY6aG92ZXI6OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXYub246OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGVzbW9rZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG5cdFx0XHRcdFx0XHRkaXY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGl2Omxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0XG5cdFx0cmV0dXJuIHZpZXc7XG5cdH1cblxuXG59XG5cbi8vIGNvbnN0IG5hdkxpbmsgPSBuZXcgTmF2TGluaygpO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rO1xuXG5cblxuLy8gY29uc3QgTmF2TGluayA9IChwcm9wcykgPT4gKFxuLy8gXHQ8ZGl2IGtleT17cHJvcHMudGl0bGV9PlxuLy8gXHRcdDxMaW5rIGhyZWY9e2AvJHtwcm9wcy5wYXRofWB9PlxuLy8gXHRcdFx0PGE+e3Byb3BzLnRpdGxlfTwvYT5cbi8vIFx0XHQ8L0xpbms+XG4vLyBcdFx0PHN0eWxlIGpzeD57YFxuLy8gXHRcdFx0YSB7XG4vLyBcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vIFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gXHRcdFx0XHR3aWR0aDogODAlO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0ZGl2IHtcbi8vIFx0XHRcdFx0ZmxleDogMTtcbi8vIFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuLy8gXHRcdFx0XHRwYWRkaW5nOiAuNWVtIDAgMCAwO1xuLy8gXHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcbi8vIFx0XHRcdH1cbi8vIFx0XHRcdGRpdjpub3QoLm9uKSB7XG4vLyBcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcbi8vIFx0XHRcdH1cbi8vIFx0XHRcdGRpdjo6YmVmb3JlIHtcbi8vIFx0XHRcdFx0Y29udGVudDogJyc7XG4vLyBcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIFx0XHRcdFx0d2lkdGg6IDA7XG4vLyBcdFx0XHRcdGhlaWdodDogMS41ZW07XG4vLyBcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0O1xuLy8gXHRcdFx0XHR0cmFuc2l0aW9uOiB3aWR0aCAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIC4zcztcbi8vIFx0XHRcdH1cbi8vIFx0XHRcdGRpdjpob3Zlcjo6YmVmb3JlIHtcbi8vIFx0XHRcdFx0d2lkdGg6IDgwJTtcbi8vIFx0XHRcdH1cbi8vIFx0XHRcdGRpdi5vbjo6YmVmb3JlIHtcbi8vIFx0XHRcdFx0d2lkdGg6IDgwJTtcbi8vIFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGVzbW9rZTtcbi8vIFx0XHRcdH1cbi8vIFxuLy8gXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4vLyBcdFx0XHRcdGRpdjpmaXJzdC1jaGlsZCB7XG4vLyBcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRkaXY6bGFzdC1jaGlsZCB7XG4vLyBcdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH1cbi8vIFx0XHRgfTwvc3R5bGU+XG4vLyBcdDwvZGl2PlxuLy8gKTtcbi8vIFxuLy8gZXhwb3J0IGRlZmF1bHQgTmF2TGluaztcblxuXG4iXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js */"));

      return view;
    }
  }]);

  return NavigationLink;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const navLink = new NavLink();


/* harmony default export */ __webpack_exports__["default"] = (next_link__WEBPACK_IMPORTED_MODULE_8___default.a); // const NavLink = (props) => (
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

/***/ })

})
//# sourceMappingURL=work.js.37a6dd737f8f30fbe333.hot-update.js.map