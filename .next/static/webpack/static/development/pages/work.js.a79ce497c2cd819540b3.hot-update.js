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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// import ReactDOM from 'react-dom';


var NavLink =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavLink, _React$Component);

  function NavLink(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavLink);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavLink).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavLink, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.viewing(this.props.title);
    }
  }, {
    key: "render",
    value: function render() {
      var view = __jsx("div", {
        key: this.props.title,
        onClick: this.handleClick,
        className: "jsx-1826108867" + " " + ((this.props.on === this.props.title ? 'on' : 'off') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/".concat(this.props.path),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1826108867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.props.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1826108867",
        __self: this
      }, "a.jsx-1826108867{-webkit-text-decoration:none;text-decoration:none;display:inline-block;width:80%;}div.jsx-1826108867{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;padding:.5em 0 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-1826108867:not(.on){cursor:pointer;}div.jsx-1826108867::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid #444;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}div.jsx-1826108867:hover.jsx-1826108867::before{width:80%;}div.on.jsx-1826108867::before{width:80%;border-bottom-color:whitesmoke;}@media only screen and (max-width:600px){div.jsx-1826108867:first-child{text-align:left;}div.jsx-1826108867:last-child{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9uYXYtbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBRzRCLEFBS2QsQUFNUSxBQUdKLEFBUUQsQUFHQSxBQU1PLEFBR0MsVUFYbkIsQUFHZ0MsQ0FYYixJQUhuQixDQW9CQyxDQUdBLFlBbkJRLElBVlUsSUFXTCxJQVVkLFNBMUJzQixBQWlCUSxDQVhWLG1CQUNGLENBTlAsUUFpQmtDLEVBaEI3QywwRUFNQSxrQkFXQSIsImZpbGUiOiIvVXNlcnMvZXRoYW5sYXcvRGVza3RvcC9iaXRsb3JlLXJlYWN0L2NvbXBvbmVudHMvbmF2LWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cdFxuXHRoYW5kbGVDbGljaygpIHtcblx0XHR0aGlzLnByb3BzLnZpZXdpbmcodGhpcy5wcm9wcy50aXRsZSk7XG4gIH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB2aWV3ID0gKFxuXHRcdFx0PGRpdiBrZXk9e3RoaXMucHJvcHMudGl0bGV9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5vbiA9PT0gdGhpcy5wcm9wcy50aXRsZSA/ICdvbicgOiAnb2ZmJ30gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG5cdFx0XHRcdDxMaW5rIGhyZWY9e2AvJHt0aGlzLnByb3BzLnBhdGh9YH0+XG5cdFx0XHRcdFx0PGE+e3RoaXMucHJvcHMudGl0bGV9PC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogLjVlbSAwIDAgMDtcblx0XHRcdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXY6bm90KC5vbikge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkaXY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxLjVlbTtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UsIGJvcmRlci1jb2xvciAuM3M7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRpdjpob3Zlcjo6YmVmb3JlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRpdi5vbjo6YmVmb3JlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZXNtb2tlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcblx0XHRcdFx0XHRcdGRpdjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkaXY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRcblx0XHRyZXR1cm4gdmlldztcblx0fVxuXG5cbn1cblxuLy8gY29uc3QgbmF2TGluayA9IG5ldyBOYXZMaW5rKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7XG5cblxuXG4vLyBjb25zdCBOYXZMaW5rID0gKHByb3BzKSA9PiAoXG4vLyBcdDxkaXYga2V5PXtwcm9wcy50aXRsZX0+XG4vLyBcdFx0PExpbmsgaHJlZj17YC8ke3Byb3BzLnBhdGh9YH0+XG4vLyBcdFx0XHQ8YT57cHJvcHMudGl0bGV9PC9hPlxuLy8gXHRcdDwvTGluaz5cbi8vIFx0XHQ8c3R5bGUganN4PntgXG4vLyBcdFx0XHRhIHtcbi8vIFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyBcdFx0XHRcdHdpZHRoOiA4MCU7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHRkaXYge1xuLy8gXHRcdFx0XHRmbGV4OiAxO1xuLy8gXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyBcdFx0XHRcdHBhZGRpbmc6IC41ZW0gMCAwIDA7XG4vLyBcdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0ZGl2Om5vdCgub24pIHtcbi8vIFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0ZGl2OjpiZWZvcmUge1xuLy8gXHRcdFx0XHRjb250ZW50OiAnJztcbi8vIFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuLy8gXHRcdFx0XHR3aWR0aDogMDtcbi8vIFx0XHRcdFx0aGVpZ2h0OiAxLjVlbTtcbi8vIFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0NDQ7XG4vLyBcdFx0XHRcdHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLCBib3JkZXItY29sb3IgLjNzO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0ZGl2OmhvdmVyOjpiZWZvcmUge1xuLy8gXHRcdFx0XHR3aWR0aDogODAlO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0ZGl2Lm9uOjpiZWZvcmUge1xuLy8gXHRcdFx0XHR3aWR0aDogODAlO1xuLy8gXHRcdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZXNtb2tlO1xuLy8gXHRcdFx0fVxuLy8gXG4vLyBcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbi8vIFx0XHRcdFx0ZGl2OmZpcnN0LWNoaWxkIHtcbi8vIFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHRcdGRpdjpsYXN0LWNoaWxkIHtcbi8vIFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fVxuLy8gXHRcdGB9PC9zdHlsZT5cbi8vIFx0PC9kaXY+XG4vLyApO1xuLy8gXG4vLyBleHBvcnQgZGVmYXVsdCBOYXZMaW5rO1xuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js */"));

      return view;
    }
  }]);

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // const navLink = new NavLink();


/* harmony default export */ __webpack_exports__["default"] = (NavLink); // const NavLink = (props) => (
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
//# sourceMappingURL=work.js.a79ce497c2cd819540b3.hot-update.js.map