webpackHotUpdate("static/development/pages/work.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");

var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/pages/work.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var navigating = false;
var projects = ['omi', 'evans', 'bm', 'galileo'];
var currentProject = 'omi';

function nextProject() {
  if (navigating) {
    return;
  }

  var currentIndex = projects.indexOf(currentProject);
  navigating = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("navigating"), true);

  for (var i = 0, n = projects.length; i < n; i++) {
    var el = document.getElementById(projects[i]);

    if (i === currentIndex) {
      el.classList.remove('current');
      el.classList.add('prev');
    } else if (i === currentIndex + 1 || currentIndex === projects.length - 1 && i === 0) {
      el.classList.add('current');
      currentProject = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("currentProject"), projects[i]);
    } else {
      el.classList.remove('prev');
    }
  }

  setTimeout(function () {
    navigating = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("navigating"), false);
  }, 500);
}

function Work() {
  return __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("main", {
    id: "work",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("section", {
    id: "omi",
    className: "jsx-3490877027" + " " + "current flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    id: "diamond",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/omi-gold-logo.png",
    alt: "omi gold nyc",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Landing Page"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Layout design"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Iconography"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Image optimization"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Extend Shopify CMS functionality")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "partnered with ", __jsx("a", {
    href: "https://surfaceseo.net/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Surface SEO")), __jsx("a", {
    href: "https://www.omigold.com/pages/about-lab-created-diamonds",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "visit page")))), __jsx("section", {
    id: "evans",
    className: "jsx-3490877027" + " " + "queued flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    id: "presslok",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/evans-components-logo.png",
    alt: "evans components logo",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Website Development"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Developed responsive custom Wordpress theme"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Integrated with Mapbox Studio for distribution map"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Implemented advanced product filtering")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://www.evanscomponents.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "visit site")))), __jsx("section", {
    id: "bm",
    className: "jsx-3490877027" + " " + "flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    id: "jelly",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/b-m-lockup.png",
    alt: "bonne maman strawberry preserves",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "E-commerce integration"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Built out Shopify ecommerce site to match website"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Developed email campaigns through Mailchimp"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Led website maintenance and updates")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://shop.bonnemaman.us/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "visit site")))), __jsx("section", {
    id: "galileo",
    className: "jsx-3490877027" + " " + "flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    id: "fencepost",
    className: "jsx-3490877027" + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("img", {
    id: "galileo-logo",
    src: "/static/img/galileo-logo.png",
    alt: "galileo logo and lockup",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Website development"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Co-built custom responsive Wordpress theme"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Collaborated in design concepting"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Wrote code for SVG animations")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://galileo-camps.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "visit site"))))), __jsx("div", {
    onClick: nextProject,
    className: "jsx-3490877027" + " " + "r-arrow go-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027" + " " + "go-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3490877027",
    __self: this
  }, "section.jsx-3490877027{position:absolute;top:0;right:0;left:0;bottom:0;margin:0 auto;padding:6em;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;opacity:0;}section.prev.jsx-3490877027{opacity:1;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);}section.current.jsx-3490877027{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}section.jsx-3490877027>div.left.jsx-3490877027{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-3490877027>div.right.jsx-3490877027{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-align:left;-webkit-flex:1 0 50%;-ms-flex:1 0 50%;flex:1 0 50%;padding-left:4em;}section.jsx-3490877027>div.right.jsx-3490877027 img.jsx-3490877027{display:block;margin:4em auto;width:60%;max-width:350px;}div.r-arrow.jsx-3490877027{position:absolute !important;top:50%;}div.r-arrow.jsx-3490877027{position:relative;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;right:2em;width:0;height:0;border:1em solid transparent;border-color:whitesmoke whitesmoke whitesmoke transparent;cursor:pointer;}div.r-arrow.jsx-3490877027>div.jsx-3490877027:first-child{position:absolute;top:-1em;left:1em;width:0;height:0;border:1em solid transparent;border-color:transparent transparent transparent whitesmoke;cursor:pointer;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;overflow:visible;}div.r-arrow.jsx-3490877027:hover{border-color:#444 #444 #444 transparent;}div.r-arrow.jsx-3490877027:hover>div.jsx-3490877027:first-child{border-color:transparent transparent transparent #444;}div#diamond.jsx-3490877027{background-image:url('/static/img/rough-diamond.jpg');}div#presslok.jsx-3490877027{background-image:url('/static/img/presslok.png');}div#jelly.jsx-3490877027{background-image:url('/static/img/jelly-2.png');}div#fencepost.jsx-3490877027{background-image:url('/static/img/galileo-sign.png');background-size:contain;}img#galileo-logo.jsx-3490877027{width:40%;}@media only screen and (max-width:1000px){main.jsx-3490877027{bottom:auto;}section.jsx-3490877027{padding:1em;max-width:40em;}section.jsx-3490877027>div.right.jsx-3490877027{display:block;padding-left:0;}section.jsx-3490877027>div.left.jsx-3490877027{display:none;}div.r-arrow.jsx-3490877027{top:auto;bottom:1.5em;right:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSGdCLEFBSXlCLEFBWVIsQUFJQSxBQUlHLEFBTWdCLEFBTWYsQUFPZSxBQUlYLEFBVUEsQUFZc0IsQUFHYyxBQUlBLEFBR04sQUFHRCxBQUdNLEFBSTNDLEFBS0csQUFHQSxBQUlFLEFBSUQsQUFHSixTQUNJLENBNUZjLEFBSUosQUFxRXpCLEVBS0MsQUFHZ0IsQ0FRaEIsQ0FyRWdCLEFBaUVBLElBakdWLEFBMkMyQixBQVV4QixJQW9ESSxFQXhHTCxHQXFEQyxBQXdDVCxFQXZEUSxBQTJEUixDQWpFVSxFQS9CSCxFQXdHUCxFQW5EUSxDQWZULEVBckNVLENBK0JPLEFBK0JqQixJQVRVLElBcERLLEFBMEVmLENBSEEsRUF2RDRCLEVBcUNFLEFBd0JOLENBYnhCLEFBSUEsRUFyQ0EsTUE5QmEsWUFDZSxHQTRFNUIsQ0E3RDZCLElBcUNnQyxVQWRsRCxFQTNCWCxRQTRCUyxJQWhDVCxBQVN1QixJQXdCYixTQUNvQixJQXJCYixLQUhqQixXQUljLEdBZ0NFLE1BWDJDLFNBWXpCLFVBckRULHVCQXFCUCxnQkFxQkYsQ0FwQmhCLGNBcUJBLFVBV2tCLGlCQUNsQixlQXREVyxVQUNYIiwiZmlsZSI6Ii9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5jb25zdCBuYXZpZ2F0aW5nID0gZmFsc2U7XG5jb25zdCBwcm9qZWN0cyA9IFsnb21pJywnZXZhbnMnLCdibScsJ2dhbGlsZW8nXTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gJ29taSc7XG5cbmZ1bmN0aW9uIG5leHRQcm9qZWN0KCkge1xuICBpZiAobmF2aWdhdGluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgY3VycmVudEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdCk7XG4gIG5hdmlnYXRpbmcgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMCwgbiA9IHByb2plY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RzW2ldKTtcbiAgICBpZiAoaSA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgaSA9PT0gY3VycmVudEluZGV4ICsgMSB8fFxuICAgICAgKCBjdXJyZW50SW5kZXggPT09IHByb2plY3RzLmxlbmd0aCAtIDEgJiYgaSA9PT0gMClcbiAgICApIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncHJldicpO1xuICAgIH1cbiAgfVxuICBzZXRUaW1lb3V0KCAoKSA9PiB7IG5hdmlnYXRpbmcgPSBmYWxzZTsgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gV29yaygpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgXHRcdDxtYWluIGlkPVwid29ya1wiPlxuXG4gIFx0XHRcdDxzZWN0aW9uIGlkPVwib21pXCIgY2xhc3NOYW1lPVwiY3VycmVudCBmbGV4IGNvbGxhcHNlIHJldmVyc2VcIj5cbiAgXHRcdFx0XHQ8ZGl2IGlkPVwiZGlhbW9uZFwiIGNsYXNzTmFtZT1cImxlZnQgZnJhbWVkXCI+PC9kaXY+XG4gIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbGV4IGNvbHVtblwiPlxuICBcdFx0XHRcdFx0PGRpdj5cbiAgXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy9vbWktZ29sZC1sb2dvLnBuZ1wiIGFsdD1cIm9taSBnb2xkIG55Y1wiPjwvaW1nPlxuICBcdFx0XHRcdFx0XHQ8aDM+TGFuZGluZyBQYWdlPC9oMz5cbiAgXHRcdFx0XHRcdFx0PHVsPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5MYXlvdXQgZGVzaWduPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+SWNvbm9ncmFwaHk8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5JbWFnZSBvcHRpbWl6YXRpb248L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5FeHRlbmQgU2hvcGlmeSBDTVMgZnVuY3Rpb25hbGl0eTwvbGk+XG4gIFx0XHRcdFx0XHRcdDwvdWw+XG4gIFx0XHRcdFx0XHRcdDxwPlxuICBcdFx0XHRcdFx0XHRcdHBhcnRuZXJlZCB3aXRoIDxhIGhyZWY9XCJodHRwczovL3N1cmZhY2VzZW8ubmV0L1wiIHRhcmdldD1cIl9ibGFua1wiPlN1cmZhY2UgU0VPPC9hPlxuICBcdFx0XHRcdFx0XHQ8L3A+XG4gIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5vbWlnb2xkLmNvbS9wYWdlcy9hYm91dC1sYWItY3JlYXRlZC1kaWFtb25kc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICBcdFx0XHRcdFx0XHRcdHZpc2l0IHBhZ2VcbiAgXHRcdFx0XHRcdFx0PC9hPlxuICBcdFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdDwvc2VjdGlvbj5cblxuICBcdFx0XHQ8c2VjdGlvbiBpZD1cImV2YW5zXCIgY2xhc3NOYW1lPVwicXVldWVkIGZsZXggY29sbGFwc2UgcmV2ZXJzZVwiPlxuICBcdFx0XHRcdDxkaXYgaWQ9XCJwcmVzc2xva1wiIGNsYXNzTmFtZT1cImxlZnQgZnJhbWVkXCI+PC9kaXY+XG4gIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbGV4IGNvbHVtblwiPlxuICBcdFx0XHRcdFx0PGRpdj5cbiAgXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy9ldmFucy1jb21wb25lbnRzLWxvZ28ucG5nXCIgYWx0PVwiZXZhbnMgY29tcG9uZW50cyBsb2dvXCI+PC9pbWc+XG4gIFx0XHRcdFx0XHRcdDxoMz5XZWJzaXRlIERldmVsb3BtZW50PC9oMz5cbiAgXHRcdFx0XHRcdFx0PHVsPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5EZXZlbG9wZWQgcmVzcG9uc2l2ZSBjdXN0b20gV29yZHByZXNzIHRoZW1lPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+SW50ZWdyYXRlZCB3aXRoIE1hcGJveCBTdHVkaW8gZm9yIGRpc3RyaWJ1dGlvbiBtYXA8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5JbXBsZW1lbnRlZCBhZHZhbmNlZCBwcm9kdWN0IGZpbHRlcmluZzwvbGk+XG4gIFx0XHRcdFx0XHRcdDwvdWw+XG4gIFx0XHRcdFx0XHRcdDxwPlxuICBcdFx0XHRcdFx0XHRcdGRldmVsb3BlZCBieSBUYXlsb3Igd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly93d3cucndlc3QuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlJcXFdlc3Q8L2E+XG4gIFx0XHRcdFx0XHRcdDwvcD5cbiAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmV2YW5zY29tcG9uZW50cy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIFx0XHRcdFx0XHRcdFx0dmlzaXQgc2l0ZVxuICBcdFx0XHRcdFx0XHQ8L2E+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0PC9zZWN0aW9uPlxuICBcdFx0XHRcbiAgXHRcdFx0PHNlY3Rpb24gaWQ9XCJibVwiIGNsYXNzTmFtZT1cImZsZXggY29sbGFwc2UgcmV2ZXJzZVwiPlxuICBcdFx0XHRcdDxkaXYgaWQ9XCJqZWxseVwiIGNsYXNzTmFtZT1cImxlZnQgZnJhbWVkXCI+PC9kaXY+XG4gIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbGV4IGNvbHVtblwiPlxuICBcdFx0XHRcdFx0PGRpdj5cbiAgXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltZy9iLW0tbG9ja3VwLnBuZ1wiIGFsdD1cImJvbm5lIG1hbWFuIHN0cmF3YmVycnkgcHJlc2VydmVzXCI+PC9pbWc+XG4gIFx0XHRcdFx0XHRcdDxoMz5FLWNvbW1lcmNlIGludGVncmF0aW9uPC9oMz5cbiAgXHRcdFx0XHRcdFx0PHVsPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5CdWlsdCBvdXQgU2hvcGlmeSBlY29tbWVyY2Ugc2l0ZSB0byBtYXRjaCB3ZWJzaXRlPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+RGV2ZWxvcGVkIGVtYWlsIGNhbXBhaWducyB0aHJvdWdoIE1haWxjaGltcDwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkxlZCB3ZWJzaXRlIG1haW50ZW5hbmNlIGFuZCB1cGRhdGVzPC9saT5cbiAgXHRcdFx0XHRcdFx0PC91bD5cbiAgXHRcdFx0XHRcdFx0PHA+XG4gIFx0XHRcdFx0XHRcdFx0ZGV2ZWxvcGVkIGJ5IFRheWxvciB3aXRoIDxhIGhyZWY9XCJodHRwczovL3d3dy5yd2VzdC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UlxcV2VzdDwvYT5cbiAgXHRcdFx0XHRcdFx0PC9wPlxuICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9zaG9wLmJvbm5lbWFtYW4udXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIFx0XHRcdFx0XHRcdFx0dmlzaXQgc2l0ZVxuICBcdFx0XHRcdFx0XHQ8L2E+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0PC9zZWN0aW9uPlxuICBcdFx0XG4gIFx0XHRcdDxzZWN0aW9uIGlkPVwiZ2FsaWxlb1wiIGNsYXNzTmFtZT1cImZsZXggY29sbGFwc2UgcmV2ZXJzZVwiPlxuICBcdFx0XHRcdDxkaXYgaWQ9XCJmZW5jZXBvc3RcIiBjbGFzc05hbWU9XCJsZWZ0XCI+PC9kaXY+XG4gIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbGV4IGNvbHVtblwiPlxuICBcdFx0XHRcdFx0PGRpdj5cbiAgXHRcdFx0XHRcdFx0PGltZyBpZD1cImdhbGlsZW8tbG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1nL2dhbGlsZW8tbG9nby5wbmdcIiBhbHQ9XCJnYWxpbGVvIGxvZ28gYW5kIGxvY2t1cFwiPjwvaW1nPlxuICBcdFx0XHRcdFx0XHQ8aDM+V2Vic2l0ZSBkZXZlbG9wbWVudDwvaDM+XG4gIFx0XHRcdFx0XHRcdDx1bD5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+Q28tYnVpbHQgY3VzdG9tIHJlc3BvbnNpdmUgV29yZHByZXNzIHRoZW1lPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+Q29sbGFib3JhdGVkIGluIGRlc2lnbiBjb25jZXB0aW5nPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+V3JvdGUgY29kZSBmb3IgU1ZHIGFuaW1hdGlvbnM8L2xpPlxuICBcdFx0XHRcdFx0XHQ8L3VsPlxuICBcdFx0XHRcdFx0XHQ8cD5cbiAgXHRcdFx0XHRcdFx0XHRkZXZlbG9wZWQgYnkgVGF5bG9yIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJ3ZXN0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SXFxXZXN0PC9hPlxuICBcdFx0XHRcdFx0XHQ8L3A+XG4gIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dhbGlsZW8tY2FtcHMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICBcdFx0XHRcdFx0XHRcdHZpc2l0IHNpdGVcbiAgXHRcdFx0XHRcdFx0PC9hPlxuICBcdFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdDwvc2VjdGlvbj5cbiAgXHRcdFx0XG4gIFx0XHQ8L21haW4+XG4gIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInItYXJyb3cgZ28tcmlnaHRcIiBvbkNsaWNrPXtuZXh0UHJvamVjdH0+XG4gIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ28tcmlnaHRcIj48L2Rpdj5cbiAgXHRcdDwvZGl2PlxuICBcdFx0PHN0eWxlIGpzeD57YFxuXG4gIFx0XHRcdHNlY3Rpb24ge1xuICBcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXHRcdFx0XHR0b3A6IDA7XG4gIFx0XHRcdFx0cmlnaHQ6IDA7XG4gIFx0XHRcdFx0bGVmdDogMDtcbiAgXHRcdFx0XHRib3R0b206IDA7XG4gIFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG4gIFx0XHRcdFx0cGFkZGluZzogNmVtO1xuICBcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgXHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIFx0XHRcdFx0b3BhY2l0eTogMDtcbiAgXHRcdFx0fVxuICBcdFx0XHRzZWN0aW9uLnByZXYge1xuICBcdFx0XHRcdG9wYWNpdHk6IDE7XG4gIFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRzZWN0aW9uLmN1cnJlbnQge1xuICBcdFx0XHRcdG9wYWNpdHk6IDE7XG4gIFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24gPiBkaXYubGVmdCB7XG4gIFx0XHRcdFx0ZmxleDogMSAxIDUwJTtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24gPiBkaXYucmlnaHQge1xuICBcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG4gIFx0XHRcdFx0ZmxleDogMSAwIDUwJTtcbiAgXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDRlbTtcbiAgXHRcdFx0fVxuICBcdFx0XHRzZWN0aW9uID4gZGl2LnJpZ2h0IGltZyB7XG4gIFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG4gIFx0XHRcdFx0bWFyZ2luOiA0ZW0gYXV0bztcbiAgXHRcdFx0XHR3aWR0aDogNjAlO1xuICBcdFx0XHRcdG1heC13aWR0aDogMzUwcHg7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRkaXYuci1hcnJvdyB7XG4gIFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIFx0XHRcdFx0dG9wOiA1MCU7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2LnItYXJyb3cge1xuICBcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXHRcdFx0XHR0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzIGVhc2U7XG4gIFx0XHRcdFx0cmlnaHQ6IDJlbTtcbiAgXHRcdFx0XHR3aWR0aDogMDtcbiAgXHRcdFx0XHRoZWlnaHQ6IDA7XG4gIFx0XHRcdFx0Ym9yZGVyOiAxZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlIHdoaXRlc21va2Ugd2hpdGVzbW9rZSB0cmFuc3BhcmVudDtcbiAgXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2LnItYXJyb3cgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXHRcdFx0XHR0b3A6IC0xZW07XG4gIFx0XHRcdFx0bGVmdDogMWVtO1xuICBcdFx0XHRcdHdpZHRoOiAwO1xuICBcdFx0XHRcdGhlaWdodDogMDtcbiAgXHRcdFx0XHRib3JkZXI6IDFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXHRcdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlc21va2U7XG4gIFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuICBcdFx0XHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMgZWFzZTtcbiAgXHRcdFx0XHRvdmVyZmxvdzogdmlzaWJsZTtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYuci1hcnJvdzpob3ZlciB7XG4gIFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjNDQ0ICM0NDQgIzQ0NCB0cmFuc3BhcmVudDtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYuci1hcnJvdzpob3ZlciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNDQ0O1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0ZGl2I2RpYW1vbmQge1xuICBcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWcvcm91Z2gtZGlhbW9uZC5qcGcnKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYjcHJlc3Nsb2sge1xuICBcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvc3RhdGljL2ltZy9wcmVzc2xvay5wbmcnKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYjamVsbHkge1xuICBcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvc3RhdGljL2ltZy9qZWxseS0yLnBuZycpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdiNmZW5jZXBvc3Qge1xuICBcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWcvZ2FsaWxlby1zaWduLnBuZycpO1xuICBcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICBcdFx0XHR9XG4gIFx0XHRcdGltZyNnYWxpbGVvLWxvZ28ge1xuICBcdFx0XHRcdHdpZHRoOiA0MCU7XG4gIFx0XHRcdH1cbiAgXHRcdFx0XG4gIFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIFx0XHRcdFx0bWFpbiB7XG4gIFx0XHRcdFx0XHRib3R0b206IGF1dG87XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHNlY3Rpb24ge1xuICBcdFx0XHRcdFx0cGFkZGluZzogMWVtO1xuICBcdFx0XHRcdFx0bWF4LXdpZHRoOiA0MGVtO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRzZWN0aW9uID4gZGl2LnJpZ2h0IHtcbiAgXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuICBcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRzZWN0aW9uID4gZGl2LmxlZnQge1xuICBcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0ZGl2LnItYXJyb3cge1xuICBcdFx0XHRcdFx0dG9wOiBhdXRvO1xuICBcdFx0XHRcdFx0Ym90dG9tOiAxLjVlbTtcbiAgXHRcdFx0XHRcdHJpZ2h0OiAyLjVlbTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yazsiXX0= */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/pages/work.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=work.js.64461ee761af7b0f8798.hot-update.js.map