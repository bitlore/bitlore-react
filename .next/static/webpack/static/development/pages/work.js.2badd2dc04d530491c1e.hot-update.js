webpackHotUpdate("static/development/pages/work.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
false,

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/ethanlaw/Desktop/bitlore-react/pages/work.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var projects = ['omi', 'evans', 'bm', 'galileo'];
var navigating = false;
var currentProject = 'omi';

function nextProject() {
  if (navigating) {
    return;
  }

  var currentIndex = projects.indexOf(currentProject);
  navigating = true;

  for (var i = 0, n = projects.length; i < n; i++) {
    var el = document.getElementById(projects[i]);

    if (i === currentIndex) {
      el.classList.remove('current');
      el.classList.add('prev');
    } else if (i === currentIndex + 1 || currentIndex === projects.length - 1 && i === 0) {
      el.classList.add('current');
      currentProject = projects[i];
    } else {
      el.classList.remove('prev');
    }
  }

  setTimeout(function () {
    navigating = false;
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
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3490877027",
    __self: this
  }, "section.jsx-3490877027{position:absolute;top:0;right:0;left:0;bottom:0;margin:0 auto;padding:6em;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;opacity:0;}section.prev.jsx-3490877027{opacity:1;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);}section.current.jsx-3490877027{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}section.jsx-3490877027>div.left.jsx-3490877027{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-3490877027>div.right.jsx-3490877027{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-align:left;-webkit-flex:1 0 50%;-ms-flex:1 0 50%;flex:1 0 50%;padding-left:4em;}section.jsx-3490877027>div.right.jsx-3490877027 img.jsx-3490877027{display:block;margin:4em auto;width:60%;max-width:350px;}div.r-arrow.jsx-3490877027{position:absolute !important;top:50%;}div.r-arrow.jsx-3490877027{position:relative;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;right:2em;width:0;height:0;border:1em solid transparent;border-color:whitesmoke whitesmoke whitesmoke transparent;cursor:pointer;}div.r-arrow.jsx-3490877027>div.jsx-3490877027:first-child{position:absolute;top:-1em;left:1em;width:0;height:0;border:1em solid transparent;border-color:transparent transparent transparent whitesmoke;cursor:pointer;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;overflow:visible;}div.r-arrow.jsx-3490877027:hover{border-color:#444 #444 #444 transparent;}div.r-arrow.jsx-3490877027:hover>div.jsx-3490877027:first-child{border-color:transparent transparent transparent #444;}div#diamond.jsx-3490877027{background-image:url('/static/img/rough-diamond.jpg');}div#presslok.jsx-3490877027{background-image:url('/static/img/presslok.png');}div#jelly.jsx-3490877027{background-image:url('/static/img/jelly-2.png');}div#fencepost.jsx-3490877027{background-image:url('/static/img/galileo-sign.png');background-size:contain;}img#galileo-logo.jsx-3490877027{width:40%;}@media only screen and (max-width:1000px){main.jsx-3490877027{bottom:auto;}section.jsx-3490877027{padding:1em;max-width:40em;}section.jsx-3490877027>div.right.jsx-3490877027{display:block;padding-left:0;}section.jsx-3490877027>div.left.jsx-3490877027{display:none;}div.r-arrow.jsx-3490877027{top:auto;bottom:1.5em;right:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSGdCLEFBSXlCLEFBWVIsQUFJQSxBQUlHLEFBTWdCLEFBTWYsQUFPZSxBQUlYLEFBVUEsQUFZc0IsQUFHYyxBQUlBLEFBR04sQUFHRCxBQUdNLEFBSTNDLEFBS0csQUFHQSxBQUlFLEFBSUQsQUFHSixTQUNJLENBNUZjLEFBSUosQUFxRXpCLEVBS0MsQUFHZ0IsQ0FRaEIsQ0FyRWdCLEFBaUVBLElBakdWLEFBMkMyQixBQVV4QixJQW9ESSxFQXhHTCxHQXFEQyxBQXdDVCxFQXZEUSxBQTJEUixDQWpFVSxFQS9CSCxFQXdHUCxFQW5EUSxDQWZULEVBckNVLENBK0JPLEFBK0JqQixJQVRVLElBcERLLEFBMEVmLENBSEEsRUF2RDRCLEVBcUNFLEFBd0JOLENBYnhCLEFBSUEsRUFyQ0EsTUE5QmEsWUFDZSxHQTRFNUIsQ0E3RDZCLElBcUNnQyxVQWRsRCxFQTNCWCxRQTRCUyxJQWhDVCxBQVN1QixJQXdCYixTQUNvQixJQXJCYixLQUhqQixXQUljLEdBZ0NFLE1BWDJDLFNBWXpCLFVBckRULHVCQXFCUCxnQkFxQkYsQ0FwQmhCLGNBcUJBLFVBV2tCLGlCQUNsQixlQXREVyxVQUNYIiwiZmlsZSI6Ii9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5jb25zdCBwcm9qZWN0cyA9IFsnb21pJywnZXZhbnMnLCdibScsJ2dhbGlsZW8nXTtcbmxldCBuYXZpZ2F0aW5nID0gZmFsc2U7XG5sZXQgY3VycmVudFByb2plY3QgPSAnb21pJztcblxuZnVuY3Rpb24gbmV4dFByb2plY3QoKSB7XG4gIGlmIChuYXZpZ2F0aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBjdXJyZW50SW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KTtcbiAgbmF2aWdhdGluZyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwLCBuID0gcHJvamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdHNbaV0pO1xuICAgIGlmIChpID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBpID09PSBjdXJyZW50SW5kZXggKyAxIHx8XG4gICAgICAoIGN1cnJlbnRJbmRleCA9PT0gcHJvamVjdHMubGVuZ3RoIC0gMSAmJiBpID09PSAwKVxuICAgICkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmV2Jyk7XG4gICAgfVxuICB9XG4gIHNldFRpbWVvdXQoICgpID0+IHsgbmF2aWdhdGluZyA9IGZhbHNlOyB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBXb3JrKCkge1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICBcdFx0PG1haW4gaWQ9XCJ3b3JrXCI+XG5cbiAgXHRcdFx0PHNlY3Rpb24gaWQ9XCJvbWlcIiBjbGFzc05hbWU9XCJjdXJyZW50IGZsZXggY29sbGFwc2UgcmV2ZXJzZVwiPlxuICBcdFx0XHRcdDxkaXYgaWQ9XCJkaWFtb25kXCIgY2xhc3NOYW1lPVwibGVmdCBmcmFtZWRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL29taS1nb2xkLWxvZ28ucG5nXCIgYWx0PVwib21pIGdvbGQgbnljXCI+PC9pbWc+XG4gIFx0XHRcdFx0XHRcdDxoMz5MYW5kaW5nIFBhZ2U8L2gzPlxuICBcdFx0XHRcdFx0XHQ8dWw+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkxheW91dCBkZXNpZ248L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5JY29ub2dyYXBoeTwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkltYWdlIG9wdGltaXphdGlvbjwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkV4dGVuZCBTaG9waWZ5IENNUyBmdW5jdGlvbmFsaXR5PC9saT5cbiAgXHRcdFx0XHRcdFx0PC91bD5cbiAgXHRcdFx0XHRcdFx0PHA+XG4gIFx0XHRcdFx0XHRcdFx0cGFydG5lcmVkIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vc3VyZmFjZXNlby5uZXQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3VyZmFjZSBTRU88L2E+XG4gIFx0XHRcdFx0XHRcdDwvcD5cbiAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9taWdvbGQuY29tL3BhZ2VzL2Fib3V0LWxhYi1jcmVhdGVkLWRpYW1vbmRzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIFx0XHRcdFx0XHRcdFx0dmlzaXQgcGFnZVxuICBcdFx0XHRcdFx0XHQ8L2E+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0PC9zZWN0aW9uPlxuXG4gIFx0XHRcdDxzZWN0aW9uIGlkPVwiZXZhbnNcIiBjbGFzc05hbWU9XCJxdWV1ZWQgZmxleCBjb2xsYXBzZSByZXZlcnNlXCI+XG4gIFx0XHRcdFx0PGRpdiBpZD1cInByZXNzbG9rXCIgY2xhc3NOYW1lPVwibGVmdCBmcmFtZWRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2V2YW5zLWNvbXBvbmVudHMtbG9nby5wbmdcIiBhbHQ9XCJldmFucyBjb21wb25lbnRzIGxvZ29cIj48L2ltZz5cbiAgXHRcdFx0XHRcdFx0PGgzPldlYnNpdGUgRGV2ZWxvcG1lbnQ8L2gzPlxuICBcdFx0XHRcdFx0XHQ8dWw+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkRldmVsb3BlZCByZXNwb25zaXZlIGN1c3RvbSBXb3JkcHJlc3MgdGhlbWU8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5JbnRlZ3JhdGVkIHdpdGggTWFwYm94IFN0dWRpbyBmb3IgZGlzdHJpYnV0aW9uIG1hcDwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkltcGxlbWVudGVkIGFkdmFuY2VkIHByb2R1Y3QgZmlsdGVyaW5nPC9saT5cbiAgXHRcdFx0XHRcdFx0PC91bD5cbiAgXHRcdFx0XHRcdFx0PHA+XG4gIFx0XHRcdFx0XHRcdFx0ZGV2ZWxvcGVkIGJ5IFRheWxvciB3aXRoIDxhIGhyZWY9XCJodHRwczovL3d3dy5yd2VzdC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UlxcV2VzdDwvYT5cbiAgXHRcdFx0XHRcdFx0PC9wPlxuICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZXZhbnNjb21wb25lbnRzLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgXHRcdFx0XHRcdFx0XHR2aXNpdCBzaXRlXG4gIFx0XHRcdFx0XHRcdDwvYT5cbiAgXHRcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L3NlY3Rpb24+XG4gIFx0XHRcdFxuICBcdFx0XHQ8c2VjdGlvbiBpZD1cImJtXCIgY2xhc3NOYW1lPVwiZmxleCBjb2xsYXBzZSByZXZlcnNlXCI+XG4gIFx0XHRcdFx0PGRpdiBpZD1cImplbGx5XCIgY2xhc3NOYW1lPVwibGVmdCBmcmFtZWRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2ItbS1sb2NrdXAucG5nXCIgYWx0PVwiYm9ubmUgbWFtYW4gc3RyYXdiZXJyeSBwcmVzZXJ2ZXNcIj48L2ltZz5cbiAgXHRcdFx0XHRcdFx0PGgzPkUtY29tbWVyY2UgaW50ZWdyYXRpb248L2gzPlxuICBcdFx0XHRcdFx0XHQ8dWw+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkJ1aWx0IG91dCBTaG9waWZ5IGVjb21tZXJjZSBzaXRlIHRvIG1hdGNoIHdlYnNpdGU8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5EZXZlbG9wZWQgZW1haWwgY2FtcGFpZ25zIHRocm91Z2ggTWFpbGNoaW1wPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+TGVkIHdlYnNpdGUgbWFpbnRlbmFuY2UgYW5kIHVwZGF0ZXM8L2xpPlxuICBcdFx0XHRcdFx0XHQ8L3VsPlxuICBcdFx0XHRcdFx0XHQ8cD5cbiAgXHRcdFx0XHRcdFx0XHRkZXZlbG9wZWQgYnkgVGF5bG9yIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJ3ZXN0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SXFxXZXN0PC9hPlxuICBcdFx0XHRcdFx0XHQ8L3A+XG4gIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3Nob3AuYm9ubmVtYW1hbi51cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgXHRcdFx0XHRcdFx0XHR2aXNpdCBzaXRlXG4gIFx0XHRcdFx0XHRcdDwvYT5cbiAgXHRcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L3NlY3Rpb24+XG4gIFx0XHRcbiAgXHRcdFx0PHNlY3Rpb24gaWQ9XCJnYWxpbGVvXCIgY2xhc3NOYW1lPVwiZmxleCBjb2xsYXBzZSByZXZlcnNlXCI+XG4gIFx0XHRcdFx0PGRpdiBpZD1cImZlbmNlcG9zdFwiIGNsYXNzTmFtZT1cImxlZnRcIj48L2Rpdj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggY29sdW1uXCI+XG4gIFx0XHRcdFx0XHQ8ZGl2PlxuICBcdFx0XHRcdFx0XHQ8aW1nIGlkPVwiZ2FsaWxlby1sb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWcvZ2FsaWxlby1sb2dvLnBuZ1wiIGFsdD1cImdhbGlsZW8gbG9nbyBhbmQgbG9ja3VwXCI+PC9pbWc+XG4gIFx0XHRcdFx0XHRcdDxoMz5XZWJzaXRlIGRldmVsb3BtZW50PC9oMz5cbiAgXHRcdFx0XHRcdFx0PHVsPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5Dby1idWlsdCBjdXN0b20gcmVzcG9uc2l2ZSBXb3JkcHJlc3MgdGhlbWU8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5Db2xsYWJvcmF0ZWQgaW4gZGVzaWduIGNvbmNlcHRpbmc8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5Xcm90ZSBjb2RlIGZvciBTVkcgYW5pbWF0aW9uczwvbGk+XG4gIFx0XHRcdFx0XHRcdDwvdWw+XG4gIFx0XHRcdFx0XHRcdDxwPlxuICBcdFx0XHRcdFx0XHRcdGRldmVsb3BlZCBieSBUYXlsb3Igd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly93d3cucndlc3QuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlJcXFdlc3Q8L2E+XG4gIFx0XHRcdFx0XHRcdDwvcD5cbiAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZ2FsaWxlby1jYW1wcy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIFx0XHRcdFx0XHRcdFx0dmlzaXQgc2l0ZVxuICBcdFx0XHRcdFx0XHQ8L2E+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0PC9zZWN0aW9uPlxuICBcdFx0XHRcbiAgXHRcdDwvbWFpbj5cbiAgXHRcdDxkaXYgY2xhc3NOYW1lPVwici1hcnJvdyBnby1yaWdodFwiIG9uQ2xpY2s9e25leHRQcm9qZWN0fT5cbiAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnby1yaWdodFwiPjwvZGl2PlxuICBcdFx0PC9kaXY+XG4gIFx0XHQ8c3R5bGUganN4PntgXG5cbiAgXHRcdFx0c2VjdGlvbiB7XG4gIFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuICBcdFx0XHRcdHRvcDogMDtcbiAgXHRcdFx0XHRyaWdodDogMDtcbiAgXHRcdFx0XHRsZWZ0OiAwO1xuICBcdFx0XHRcdGJvdHRvbTogMDtcbiAgXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcbiAgXHRcdFx0XHRwYWRkaW5nOiA2ZW07XG4gIFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xuICBcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgXHRcdFx0XHRvcGFjaXR5OiAwO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24ucHJldiB7XG4gIFx0XHRcdFx0b3BhY2l0eTogMTtcbiAgXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24uY3VycmVudCB7XG4gIFx0XHRcdFx0b3BhY2l0eTogMTtcbiAgXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0c2VjdGlvbiA+IGRpdi5sZWZ0IHtcbiAgXHRcdFx0XHRmbGV4OiAxIDEgNTAlO1xuICBcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIFx0XHRcdH1cbiAgXHRcdFx0c2VjdGlvbiA+IGRpdi5yaWdodCB7XG4gIFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcbiAgXHRcdFx0XHRmbGV4OiAxIDAgNTAlO1xuICBcdFx0XHRcdHBhZGRpbmctbGVmdDogNGVtO1xuICBcdFx0XHR9XG4gIFx0XHRcdHNlY3Rpb24gPiBkaXYucmlnaHQgaW1nIHtcbiAgXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcbiAgXHRcdFx0XHRtYXJnaW46IDRlbSBhdXRvO1xuICBcdFx0XHRcdHdpZHRoOiA2MCU7XG4gIFx0XHRcdFx0bWF4LXdpZHRoOiAzNTBweDtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGRpdi5yLWFycm93IHtcbiAgXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgXHRcdFx0XHR0b3A6IDUwJTtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYuci1hcnJvdyB7XG4gIFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICBcdFx0XHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMgZWFzZTtcbiAgXHRcdFx0XHRyaWdodDogMmVtO1xuICBcdFx0XHRcdHdpZHRoOiAwO1xuICBcdFx0XHRcdGhlaWdodDogMDtcbiAgXHRcdFx0XHRib3JkZXI6IDFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgXHRcdFx0XHRib3JkZXItY29sb3I6IHdoaXRlc21va2Ugd2hpdGVzbW9rZSB3aGl0ZXNtb2tlIHRyYW5zcGFyZW50O1xuICBcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYuci1hcnJvdyA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuICBcdFx0XHRcdHRvcDogLTFlbTtcbiAgXHRcdFx0XHRsZWZ0OiAxZW07XG4gIFx0XHRcdFx0d2lkdGg6IDA7XG4gIFx0XHRcdFx0aGVpZ2h0OiAwO1xuICBcdFx0XHRcdGJvcmRlcjogMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBcdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGVzbW9rZTtcbiAgXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG4gIFx0XHRcdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cyBlYXNlO1xuICBcdFx0XHRcdG92ZXJmbG93OiB2aXNpYmxlO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdi5yLWFycm93OmhvdmVyIHtcbiAgXHRcdFx0XHRib3JkZXItY29sb3I6ICM0NDQgIzQ0NCAjNDQ0IHRyYW5zcGFyZW50O1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdi5yLWFycm93OmhvdmVyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgXHRcdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM0NDQ7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRkaXYjZGlhbW9uZCB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltZy9yb3VnaC1kaWFtb25kLmpwZycpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdiNwcmVzc2xvayB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoJy9zdGF0aWMvaW1nL3ByZXNzbG9rLnBuZycpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdiNqZWxseSB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoJy9zdGF0aWMvaW1nL2plbGx5LTIucG5nJyk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2I2ZlbmNlcG9zdCB7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltZy9nYWxpbGVvLXNpZ24ucG5nJyk7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gIFx0XHRcdH1cbiAgXHRcdFx0aW1nI2dhbGlsZW8tbG9nbyB7XG4gIFx0XHRcdFx0d2lkdGg6IDQwJTtcbiAgXHRcdFx0fVxuICBcdFx0XHRcbiAgXHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgXHRcdFx0XHRtYWluIHtcbiAgXHRcdFx0XHRcdGJvdHRvbTogYXV0bztcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0c2VjdGlvbiB7XG4gIFx0XHRcdFx0XHRwYWRkaW5nOiAxZW07XG4gIFx0XHRcdFx0XHRtYXgtd2lkdGg6IDQwZW07XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHNlY3Rpb24gPiBkaXYucmlnaHQge1xuICBcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG4gIFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHNlY3Rpb24gPiBkaXYubGVmdCB7XG4gIFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRkaXYuci1hcnJvdyB7XG4gIFx0XHRcdFx0XHR0b3A6IGF1dG87XG4gIFx0XHRcdFx0XHRib3R0b206IDEuNWVtO1xuICBcdFx0XHRcdFx0cmlnaHQ6IDIuNWVtO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0YH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrOyJdfQ== */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/pages/work.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=work.js.2badd2dc04d530491c1e.hot-update.js.map