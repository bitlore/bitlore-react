webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/components/nav-link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
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
    key: "render",
    value: function render() {
      var view = __jsx("div", {
        key: this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/".concat(this.props.path),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.title)), styles());

      return view;
    }
  }, {
    key: "styles",
    value: function styles() {
      return __jsx("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\n\t\t\t\ta {\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\twidth: 80%;\n\t\t\t\t}\n\t\t\t\tdiv {\n\t\t\t\t\tflex: 1;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tpadding: .5em 0 0 0;\n\t\t\t\t\tuser-select: none;\n\t\t\t\t}\n\t\t\t\tdiv:not(.on) {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t\tdiv::before {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 0;\n\t\t\t\t\theight: 1.5em;\n\t\t\t\t\tborder-bottom: 1px solid #444;\n\t\t\t\t\ttransition: width .3s ease, border-color .3s;\n\t\t\t\t}\n\t\t\t\tdiv:hover::before {\n\t\t\t\t\twidth: 80%;\n\t\t\t\t}\n\t\t\t\tdiv.on::before {\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\tborder-bottom-color: whitesmoke;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media only screen and (max-width:600px) {\n\t\t\t\t\tdiv:first-child {\n\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t}\n\t\t\t\t\tdiv:last-child {\n\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t");
    }
  }]);

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // const navLink = new NavLink();


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
//# sourceMappingURL=index.js.5dd10b8788d37e6f85df.hot-update.js.map