webpackHotUpdate("static/development/pages/about.js",{

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
// import ReactDOM from 'react-dom';
 // class NavLink extends React.Component {
// 
// 	constructor(props) {
// 		super(props);
// 		this.state = { isOn : false };
// 	}
// 
// 	render() {
// 
// 		const isOn = this.state.isOn;
// 
// 		<div key={props.title} className={isOn ? 'on' : 'off'}>
// 			<Link href={`/${props.path}`}>
// 				<a>{props.title}</a>
// 			</Link>
// 			<style jsx>{`
// 				a {
// 					text-decoration: none;
// 					display: inline-block;
// 					width: 80%;
// 				}
// 				div {
// 					flex: 1;
// 					position: relative;
// 					padding: .5em 0 0 0;
// 					user-select: none;
// 				}
// 				div:not(.on) {
// 					cursor: pointer;
// 				}
// 				div::before {
// 					content: '';
// 					position: absolute;
// 					width: 0;
// 					height: 1.5em;
// 					border-bottom: 1px solid #444;
// 					transition: width .3s ease, border-color .3s;
// 				}
// 				div:hover::before {
// 					width: 80%;
// 				}
// 				div.on::before {
// 					width: 80%;
// 					border-bottom-color: whitesmoke;
// 				}
// 
// 				@media only screen and (max-width:600px) {
// 					div:first-child {
// 						text-align: left;
// 					}
// 					div:last-child {
// 						text-align: right;
// 					}
// 				}
// 			`}</style>
// 		</div>
// 	}
// 
// 	// const styles = 
// 
// }
// 
// ReactDOM.render(
//   <NavLink />,
//   document.getElementById('root')
// );
// 
// export default NavLink;

var NavLink = function NavLink(props) {
  return __jsx("div", {
    key: props.title,
    className: "jsx-3972916228",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(props.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3972916228",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, props.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3972916228",
    __self: this
  }, "a.jsx-3972916228{-webkit-text-decoration:none;text-decoration:none;display:inline-block;width:80%;}div.jsx-3972916228{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;padding:.5em 0 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}div.jsx-3972916228:not(.on){cursor:pointer;}div.jsx-3972916228::before{content:'';position:absolute;width:0;height:1.5em;border-bottom:1px solid #444;-webkit-transition:width .3s ease,border-color .3s;transition:width .3s ease,border-color .3s;}div.jsx-3972916228:hover.jsx-3972916228::before{width:80%;}div.on.jsx-3972916228::before{width:80%;border-bottom-color:whitesmoke;}@media only screen and (max-width:600px){div.jsx-3972916228:first-child{text-align:left;}div.jsx-3972916228:last-child{text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9uYXYtbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RWMsQUFHMEIsQUFLZCxBQU1RLEFBR0osQUFRRCxBQUdBLEFBTU8sQUFHQyxVQVhuQixBQUdnQyxDQVhiLElBSG5CLENBb0JDLENBR0EsWUFuQlEsSUFWVSxJQVdMLElBVWQsU0ExQnNCLEFBaUJRLENBWFYsbUJBQ0YsQ0FOUCxRQWlCa0MsRUFoQjdDLDBFQU1BLGtCQVdBIiwiZmlsZSI6Ii9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvY29tcG9uZW50cy9uYXYtbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gY2xhc3MgTmF2TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyBcbi8vIFx0Y29uc3RydWN0b3IocHJvcHMpIHtcbi8vIFx0XHRzdXBlcihwcm9wcyk7XG4vLyBcdFx0dGhpcy5zdGF0ZSA9IHsgaXNPbiA6IGZhbHNlIH07XG4vLyBcdH1cbi8vIFxuLy8gXHRyZW5kZXIoKSB7XG4vLyBcbi8vIFx0XHRjb25zdCBpc09uID0gdGhpcy5zdGF0ZS5pc09uO1xuLy8gXG4vLyBcdFx0PGRpdiBrZXk9e3Byb3BzLnRpdGxlfSBjbGFzc05hbWU9e2lzT24gPyAnb24nIDogJ29mZid9PlxuLy8gXHRcdFx0PExpbmsgaHJlZj17YC8ke3Byb3BzLnBhdGh9YH0+XG4vLyBcdFx0XHRcdDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyBcdFx0XHQ8L0xpbms+XG4vLyBcdFx0XHQ8c3R5bGUganN4PntgXG4vLyBcdFx0XHRcdGEge1xuLy8gXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vIFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyBcdFx0XHRcdFx0d2lkdGg6IDgwJTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRkaXYge1xuLy8gXHRcdFx0XHRcdGZsZXg6IDE7XG4vLyBcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuLy8gXHRcdFx0XHRcdHBhZGRpbmc6IC41ZW0gMCAwIDA7XG4vLyBcdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdFx0ZGl2Om5vdCgub24pIHtcbi8vIFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdFx0ZGl2OjpiZWZvcmUge1xuLy8gXHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuLy8gXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIFx0XHRcdFx0XHR3aWR0aDogMDtcbi8vIFx0XHRcdFx0XHRoZWlnaHQ6IDEuNWVtO1xuLy8gXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0O1xuLy8gXHRcdFx0XHRcdHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLCBib3JkZXItY29sb3IgLjNzO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHRcdGRpdjpob3Zlcjo6YmVmb3JlIHtcbi8vIFx0XHRcdFx0XHR3aWR0aDogODAlO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHRcdGRpdi5vbjo6YmVmb3JlIHtcbi8vIFx0XHRcdFx0XHR3aWR0aDogODAlO1xuLy8gXHRcdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlc21va2U7XG4vLyBcdFx0XHRcdH1cbi8vIFxuLy8gXHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbi8vIFx0XHRcdFx0XHRkaXY6Zmlyc3QtY2hpbGQge1xuLy8gXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0ZGl2Omxhc3QtY2hpbGQge1xuLy8gXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG4vLyBcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHRgfTwvc3R5bGU+XG4vLyBcdFx0PC9kaXY+XG4vLyBcdH1cbi8vIFxuLy8gXHQvLyBjb25zdCBzdHlsZXMgPSBcbi8vIFxuLy8gfVxuLy8gXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxOYXZMaW5rIC8+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4vLyApO1xuLy8gXG4vLyBleHBvcnQgZGVmYXVsdCBOYXZMaW5rO1xuXG5cbmNvbnN0IE5hdkxpbmsgPSAocHJvcHMpID0+IChcblx0PGRpdiBrZXk9e3Byb3BzLnRpdGxlfT5cblx0XHQ8TGluayBocmVmPXtgLyR7cHJvcHMucGF0aH1gfT5cblx0XHRcdDxhPntwcm9wcy50aXRsZX08L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGEge1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdH1cblx0XHRcdGRpdiB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0cGFkZGluZzogLjVlbSAwIDAgMDtcblx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHRkaXY6bm90KC5vbikge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cdFx0XHRkaXY6OmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDEuNWVtO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcblx0XHRcdFx0dHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UsIGJvcmRlci1jb2xvciAuM3M7XG5cdFx0XHR9XG5cdFx0XHRkaXY6aG92ZXI6OmJlZm9yZSB7XG5cdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHR9XG5cdFx0XHRkaXYub246OmJlZm9yZSB7XG5cdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlc21va2U7XG5cdFx0XHR9XG5cblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuXHRcdFx0XHRkaXY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGl2Omxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7XG5cblxuIl19 */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
false,

/***/ "./node_modules/react-dom/index.js":
false

})
//# sourceMappingURL=about.js.b437232c3ab16f3aadc0.hot-update.js.map