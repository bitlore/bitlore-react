webpackHotUpdate("static/development/pages/contact.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var NavLink = function NavLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  var className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className: className
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

/***/ })

})
//# sourceMappingURL=contact.js.0c49bc3801a6b8f40b75.hot-update.js.map