webpackHotUpdate("static/development/pages/work.js",{

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
      lineNumber: 32
    },
    __self: this
  }, __jsx("main", {
    id: "work",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("section", {
    id: "omi",
    className: "jsx-3490877027" + " " + "current flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    id: "diamond",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/omi-gold-logo.png",
    alt: "omi gold nyc",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Landing Page"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Layout design"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Iconography"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Image optimization"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Extend Shopify CMS functionality")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "partnered with ", __jsx("a", {
    href: "https://surfaceseo.net/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Surface SEO")), __jsx("a", {
    href: "https://www.omigold.com/pages/about-lab-created-diamonds",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "visit page")))), __jsx("section", {
    id: "evans",
    className: "jsx-3490877027" + " " + "queued flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    id: "presslok",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/evans-components-logo.png",
    alt: "evans components logo",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Website Development"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Developed responsive custom Wordpress theme"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Integrated with Mapbox Studio for distribution map"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Implemented advanced product filtering")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://www.evanscomponents.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "visit site")))), __jsx("section", {
    id: "bm",
    className: "jsx-3490877027" + " " + "flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    id: "jelly",
    className: "jsx-3490877027" + " " + "left framed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("img", {
    src: "/static/img/b-m-lockup.png",
    alt: "bonne maman strawberry preserves",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "E-commerce integration"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Built out Shopify ecommerce site to match website"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Developed email campaigns through Mailchimp"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Led website maintenance and updates")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://shop.bonnemaman.us/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "visit site")))), __jsx("section", {
    id: "galileo",
    className: "jsx-3490877027" + " " + "flex collapse reverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    id: "fencepost",
    className: "jsx-3490877027" + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3490877027" + " " + "right flex column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("img", {
    id: "galileo-logo",
    src: "/static/img/galileo-logo.png",
    alt: "galileo logo and lockup",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Website development"), __jsx("ul", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Co-built custom responsive Wordpress theme"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Collaborated in design concepting"), __jsx("li", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Wrote code for SVG animations")), __jsx("p", {
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "developed by Taylor with ", __jsx("a", {
    href: "https://www.rwest.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "R\\West")), __jsx("a", {
    href: "https://galileo-camps.com/",
    target: "_blank",
    className: "jsx-3490877027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "visit site"))))), __jsx("div", {
    onClick: nextProject,
    className: "jsx-3490877027" + " " + "r-arrow go-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3490877027" + " " + "go-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3490877027",
    __self: this
  }, "section.jsx-3490877027{position:absolute;top:0;right:0;left:0;bottom:0;margin:0 auto;padding:6em;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;opacity:0;}section.prev.jsx-3490877027{opacity:1;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);}section.current.jsx-3490877027{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}section.jsx-3490877027>div.left.jsx-3490877027{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;background-position:center;background-repeat:no-repeat;background-size:cover;}section.jsx-3490877027>div.right.jsx-3490877027{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-align:left;-webkit-flex:1 0 50%;-ms-flex:1 0 50%;flex:1 0 50%;padding-left:4em;}section.jsx-3490877027>div.right.jsx-3490877027 img.jsx-3490877027{display:block;margin:4em auto;width:60%;max-width:350px;}div.r-arrow.jsx-3490877027{position:absolute !important;top:50%;}div.r-arrow.jsx-3490877027{position:relative;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;right:2em;width:0;height:0;border:1em solid transparent;border-color:whitesmoke whitesmoke whitesmoke transparent;cursor:pointer;}div.r-arrow.jsx-3490877027>div.jsx-3490877027:first-child{position:absolute;top:-1em;left:1em;width:0;height:0;border:1em solid transparent;border-color:transparent transparent transparent whitesmoke;cursor:pointer;-webkit-transition:border-color .5s ease;transition:border-color .5s ease;overflow:visible;}div.r-arrow.jsx-3490877027:hover{border-color:#444 #444 #444 transparent;}div.r-arrow.jsx-3490877027:hover>div.jsx-3490877027:first-child{border-color:transparent transparent transparent #444;}div#diamond.jsx-3490877027{background-image:url('/static/img/rough-diamond.jpg');}div#presslok.jsx-3490877027{background-image:url('/static/img/presslok.png');}div#jelly.jsx-3490877027{background-image:url('/static/img/jelly-2.png');}div#fencepost.jsx-3490877027{background-image:url('/static/img/galileo-sign.png');background-size:contain;}img#galileo-logo.jsx-3490877027{width:40%;}@media only screen and (max-width:1000px){main.jsx-3490877027{bottom:auto;}section.jsx-3490877027{padding:1em;max-width:40em;}section.jsx-3490877027>div.right.jsx-3490877027{display:block;padding-left:0;}section.jsx-3490877027>div.left.jsx-3490877027{display:none;}div.r-arrow.jsx-3490877027{top:auto;bottom:1.5em;right:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySGdCLEFBSXlCLEFBWVIsQUFJQSxBQUlHLEFBTWdCLEFBTWYsQUFPZSxBQUlYLEFBVUEsQUFZc0IsQUFHYyxBQUlBLEFBR04sQUFHRCxBQUdNLEFBSTNDLEFBS0csQUFHQSxBQUlFLEFBSUQsQUFHSixTQUNJLENBNUZjLEFBSUosQUFxRXpCLEVBS0MsQUFHZ0IsQ0FRaEIsQ0FyRWdCLEFBaUVBLElBakdWLEFBMkMyQixBQVV4QixJQW9ESSxFQXhHTCxHQXFEQyxBQXdDVCxFQXZEUSxBQTJEUixDQWpFVSxFQS9CSCxFQXdHUCxFQW5EUSxDQWZULEVBckNVLENBK0JPLEFBK0JqQixJQVRVLElBcERLLEFBMEVmLENBSEEsRUF2RDRCLEVBcUNFLEFBd0JOLENBYnhCLEFBSUEsRUFyQ0EsTUE5QmEsWUFDZSxHQTRFNUIsQ0E3RDZCLElBcUNnQyxVQWRsRCxFQTNCWCxRQTRCUyxJQWhDVCxBQVN1QixJQXdCYixTQUNvQixJQXJCYixLQUhqQixXQUljLEdBZ0NFLE1BWDJDLFNBWXpCLFVBckRULHVCQXFCUCxnQkFxQkYsQ0FwQmhCLGNBcUJBLFVBV2tCLGlCQUNsQixlQXREVyxVQUNYIiwiZmlsZSI6Ii9Vc2Vycy9ldGhhbmxhdy9EZXNrdG9wL2JpdGxvcmUtcmVhY3QvcGFnZXMvd29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5mdW5jdGlvbiBuZXh0UHJvamVjdCgpIHtcbiAgaWYgKG5hdmlnYXRpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGN1cnJlbnRJbmRleCA9IHByb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpO1xuICBuYXZpZ2F0aW5nID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDAsIG4gPSBwcm9qZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0c1tpXSk7XG4gICAgaWYgKGkgPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgIGkgPT09IGN1cnJlbnRJbmRleCArIDEgfHxcbiAgICAgICggY3VycmVudEluZGV4ID09PSBwcm9qZWN0cy5sZW5ndGggLSAxICYmIGkgPT09IDApXG4gICAgKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXYnKTtcbiAgICB9XG4gIH1cbiAgc2V0VGltZW91dCggKCkgPT4geyBuYXZpZ2F0aW5nID0gZmFsc2U7IH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIFdvcmsoKSB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gIFx0XHQ8bWFpbiBpZD1cIndvcmtcIj5cblxuICBcdFx0XHQ8c2VjdGlvbiBpZD1cIm9taVwiIGNsYXNzTmFtZT1cImN1cnJlbnQgZmxleCBjb2xsYXBzZSByZXZlcnNlXCI+XG4gIFx0XHRcdFx0PGRpdiBpZD1cImRpYW1vbmRcIiBjbGFzc05hbWU9XCJsZWZ0IGZyYW1lZFwiPjwvZGl2PlxuICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgZmxleCBjb2x1bW5cIj5cbiAgXHRcdFx0XHRcdDxkaXY+XG4gIFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvb21pLWdvbGQtbG9nby5wbmdcIiBhbHQ9XCJvbWkgZ29sZCBueWNcIj48L2ltZz5cbiAgXHRcdFx0XHRcdFx0PGgzPkxhbmRpbmcgUGFnZTwvaDM+XG4gIFx0XHRcdFx0XHRcdDx1bD5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+TGF5b3V0IGRlc2lnbjwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkljb25vZ3JhcGh5PC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+SW1hZ2Ugb3B0aW1pemF0aW9uPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+RXh0ZW5kIFNob3BpZnkgQ01TIGZ1bmN0aW9uYWxpdHk8L2xpPlxuICBcdFx0XHRcdFx0XHQ8L3VsPlxuICBcdFx0XHRcdFx0XHQ8cD5cbiAgXHRcdFx0XHRcdFx0XHRwYXJ0bmVyZWQgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9zdXJmYWNlc2VvLm5ldC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TdXJmYWNlIFNFTzwvYT5cbiAgXHRcdFx0XHRcdFx0PC9wPlxuICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cub21pZ29sZC5jb20vcGFnZXMvYWJvdXQtbGFiLWNyZWF0ZWQtZGlhbW9uZHNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgXHRcdFx0XHRcdFx0XHR2aXNpdCBwYWdlXG4gIFx0XHRcdFx0XHRcdDwvYT5cbiAgXHRcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L3NlY3Rpb24+XG5cbiAgXHRcdFx0PHNlY3Rpb24gaWQ9XCJldmFuc1wiIGNsYXNzTmFtZT1cInF1ZXVlZCBmbGV4IGNvbGxhcHNlIHJldmVyc2VcIj5cbiAgXHRcdFx0XHQ8ZGl2IGlkPVwicHJlc3Nsb2tcIiBjbGFzc05hbWU9XCJsZWZ0IGZyYW1lZFwiPjwvZGl2PlxuICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgZmxleCBjb2x1bW5cIj5cbiAgXHRcdFx0XHRcdDxkaXY+XG4gIFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZXZhbnMtY29tcG9uZW50cy1sb2dvLnBuZ1wiIGFsdD1cImV2YW5zIGNvbXBvbmVudHMgbG9nb1wiPjwvaW1nPlxuICBcdFx0XHRcdFx0XHQ8aDM+V2Vic2l0ZSBEZXZlbG9wbWVudDwvaDM+XG4gIFx0XHRcdFx0XHRcdDx1bD5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+RGV2ZWxvcGVkIHJlc3BvbnNpdmUgY3VzdG9tIFdvcmRwcmVzcyB0aGVtZTwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkludGVncmF0ZWQgd2l0aCBNYXBib3ggU3R1ZGlvIGZvciBkaXN0cmlidXRpb24gbWFwPC9saT5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+SW1wbGVtZW50ZWQgYWR2YW5jZWQgcHJvZHVjdCBmaWx0ZXJpbmc8L2xpPlxuICBcdFx0XHRcdFx0XHQ8L3VsPlxuICBcdFx0XHRcdFx0XHQ8cD5cbiAgXHRcdFx0XHRcdFx0XHRkZXZlbG9wZWQgYnkgVGF5bG9yIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJ3ZXN0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SXFxXZXN0PC9hPlxuICBcdFx0XHRcdFx0XHQ8L3A+XG4gIFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5ldmFuc2NvbXBvbmVudHMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICBcdFx0XHRcdFx0XHRcdHZpc2l0IHNpdGVcbiAgXHRcdFx0XHRcdFx0PC9hPlxuICBcdFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdDwvc2VjdGlvbj5cbiAgXHRcdFx0XG4gIFx0XHRcdDxzZWN0aW9uIGlkPVwiYm1cIiBjbGFzc05hbWU9XCJmbGV4IGNvbGxhcHNlIHJldmVyc2VcIj5cbiAgXHRcdFx0XHQ8ZGl2IGlkPVwiamVsbHlcIiBjbGFzc05hbWU9XCJsZWZ0IGZyYW1lZFwiPjwvZGl2PlxuICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgZmxleCBjb2x1bW5cIj5cbiAgXHRcdFx0XHRcdDxkaXY+XG4gIFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvYi1tLWxvY2t1cC5wbmdcIiBhbHQ9XCJib25uZSBtYW1hbiBzdHJhd2JlcnJ5IHByZXNlcnZlc1wiPjwvaW1nPlxuICBcdFx0XHRcdFx0XHQ8aDM+RS1jb21tZXJjZSBpbnRlZ3JhdGlvbjwvaDM+XG4gIFx0XHRcdFx0XHRcdDx1bD5cbiAgXHRcdFx0XHRcdFx0XHQ8bGk+QnVpbHQgb3V0IFNob3BpZnkgZWNvbW1lcmNlIHNpdGUgdG8gbWF0Y2ggd2Vic2l0ZTwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkRldmVsb3BlZCBlbWFpbCBjYW1wYWlnbnMgdGhyb3VnaCBNYWlsY2hpbXA8L2xpPlxuICBcdFx0XHRcdFx0XHRcdDxsaT5MZWQgd2Vic2l0ZSBtYWludGVuYW5jZSBhbmQgdXBkYXRlczwvbGk+XG4gIFx0XHRcdFx0XHRcdDwvdWw+XG4gIFx0XHRcdFx0XHRcdDxwPlxuICBcdFx0XHRcdFx0XHRcdGRldmVsb3BlZCBieSBUYXlsb3Igd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly93d3cucndlc3QuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlJcXFdlc3Q8L2E+XG4gIFx0XHRcdFx0XHRcdDwvcD5cbiAgXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vc2hvcC5ib25uZW1hbWFuLnVzL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICBcdFx0XHRcdFx0XHRcdHZpc2l0IHNpdGVcbiAgXHRcdFx0XHRcdFx0PC9hPlxuICBcdFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdDwvc2VjdGlvbj5cbiAgXHRcdFxuICBcdFx0XHQ8c2VjdGlvbiBpZD1cImdhbGlsZW9cIiBjbGFzc05hbWU9XCJmbGV4IGNvbGxhcHNlIHJldmVyc2VcIj5cbiAgXHRcdFx0XHQ8ZGl2IGlkPVwiZmVuY2Vwb3N0XCIgY2xhc3NOYW1lPVwibGVmdFwiPjwvZGl2PlxuICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgZmxleCBjb2x1bW5cIj5cbiAgXHRcdFx0XHRcdDxkaXY+XG4gIFx0XHRcdFx0XHRcdDxpbWcgaWQ9XCJnYWxpbGVvLWxvZ29cIiBzcmM9XCIvc3RhdGljL2ltZy9nYWxpbGVvLWxvZ28ucG5nXCIgYWx0PVwiZ2FsaWxlbyBsb2dvIGFuZCBsb2NrdXBcIj48L2ltZz5cbiAgXHRcdFx0XHRcdFx0PGgzPldlYnNpdGUgZGV2ZWxvcG1lbnQ8L2gzPlxuICBcdFx0XHRcdFx0XHQ8dWw+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkNvLWJ1aWx0IGN1c3RvbSByZXNwb25zaXZlIFdvcmRwcmVzcyB0aGVtZTwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPkNvbGxhYm9yYXRlZCBpbiBkZXNpZ24gY29uY2VwdGluZzwvbGk+XG4gIFx0XHRcdFx0XHRcdFx0PGxpPldyb3RlIGNvZGUgZm9yIFNWRyBhbmltYXRpb25zPC9saT5cbiAgXHRcdFx0XHRcdFx0PC91bD5cbiAgXHRcdFx0XHRcdFx0PHA+XG4gIFx0XHRcdFx0XHRcdFx0ZGV2ZWxvcGVkIGJ5IFRheWxvciB3aXRoIDxhIGhyZWY9XCJodHRwczovL3d3dy5yd2VzdC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UlxcV2VzdDwvYT5cbiAgXHRcdFx0XHRcdFx0PC9wPlxuICBcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9nYWxpbGVvLWNhbXBzLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgXHRcdFx0XHRcdFx0XHR2aXNpdCBzaXRlXG4gIFx0XHRcdFx0XHRcdDwvYT5cbiAgXHRcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L3NlY3Rpb24+XG4gIFx0XHRcdFxuICBcdFx0PC9tYWluPlxuICBcdFx0PGRpdiBjbGFzc05hbWU9XCJyLWFycm93IGdvLXJpZ2h0XCIgb25DbGljaz17bmV4dFByb2plY3R9PlxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdvLXJpZ2h0XCI+PC9kaXY+XG4gIFx0XHQ8L2Rpdj5cbiAgXHRcdDxzdHlsZSBqc3g+e2BcblxuICBcdFx0XHRzZWN0aW9uIHtcbiAgXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFx0XHRcdFx0dG9wOiAwO1xuICBcdFx0XHRcdHJpZ2h0OiAwO1xuICBcdFx0XHRcdGxlZnQ6IDA7XG4gIFx0XHRcdFx0Ym90dG9tOiAwO1xuICBcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuICBcdFx0XHRcdHBhZGRpbmc6IDZlbTtcbiAgXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XG4gIFx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICBcdFx0XHRcdG9wYWNpdHk6IDA7XG4gIFx0XHRcdH1cbiAgXHRcdFx0c2VjdGlvbi5wcmV2IHtcbiAgXHRcdFx0XHRvcGFjaXR5OiAxO1xuICBcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0c2VjdGlvbi5jdXJyZW50IHtcbiAgXHRcdFx0XHRvcGFjaXR5OiAxO1xuICBcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRzZWN0aW9uID4gZGl2LmxlZnQge1xuICBcdFx0XHRcdGZsZXg6IDEgMSA1MCU7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgXHRcdFx0fVxuICBcdFx0XHRzZWN0aW9uID4gZGl2LnJpZ2h0IHtcbiAgXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuICBcdFx0XHRcdGZsZXg6IDEgMCA1MCU7XG4gIFx0XHRcdFx0cGFkZGluZy1sZWZ0OiA0ZW07XG4gIFx0XHRcdH1cbiAgXHRcdFx0c2VjdGlvbiA+IGRpdi5yaWdodCBpbWcge1xuICBcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuICBcdFx0XHRcdG1hcmdpbjogNGVtIGF1dG87XG4gIFx0XHRcdFx0d2lkdGg6IDYwJTtcbiAgXHRcdFx0XHRtYXgtd2lkdGg6IDM1MHB4O1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0ZGl2LnItYXJyb3cge1xuICBcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBcdFx0XHRcdHRvcDogNTAlO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdi5yLWFycm93IHtcbiAgXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFx0XHRcdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cyBlYXNlO1xuICBcdFx0XHRcdHJpZ2h0OiAyZW07XG4gIFx0XHRcdFx0d2lkdGg6IDA7XG4gIFx0XHRcdFx0aGVpZ2h0OiAwO1xuICBcdFx0XHRcdGJvcmRlcjogMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBcdFx0XHRcdGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZSB3aGl0ZXNtb2tlIHdoaXRlc21va2UgdHJhbnNwYXJlbnQ7XG4gIFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpdi5yLWFycm93ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFx0XHRcdFx0dG9wOiAtMWVtO1xuICBcdFx0XHRcdGxlZnQ6IDFlbTtcbiAgXHRcdFx0XHR3aWR0aDogMDtcbiAgXHRcdFx0XHRoZWlnaHQ6IDA7XG4gIFx0XHRcdFx0Ym9yZGVyOiAxZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZXNtb2tlO1xuICBcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcbiAgXHRcdFx0XHR0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzIGVhc2U7XG4gIFx0XHRcdFx0b3ZlcmZsb3c6IHZpc2libGU7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2LnItYXJyb3c6aG92ZXIge1xuICBcdFx0XHRcdGJvcmRlci1jb2xvcjogIzQ0NCAjNDQ0ICM0NDQgdHJhbnNwYXJlbnQ7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2LnItYXJyb3c6aG92ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBcdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzQ0NDtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGRpdiNkaWFtb25kIHtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1nL3JvdWdoLWRpYW1vbmQuanBnJyk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2I3ByZXNzbG9rIHtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybCgnL3N0YXRpYy9pbWcvcHJlc3Nsb2sucG5nJyk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGl2I2plbGx5IHtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybCgnL3N0YXRpYy9pbWcvamVsbHktMi5wbmcnKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaXYjZmVuY2Vwb3N0IHtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1nL2dhbGlsZW8tc2lnbi5wbmcnKTtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgXHRcdFx0fVxuICBcdFx0XHRpbWcjZ2FsaWxlby1sb2dvIHtcbiAgXHRcdFx0XHR3aWR0aDogNDAlO1xuICBcdFx0XHR9XG4gIFx0XHRcdFxuICBcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBcdFx0XHRcdG1haW4ge1xuICBcdFx0XHRcdFx0Ym90dG9tOiBhdXRvO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRzZWN0aW9uIHtcbiAgXHRcdFx0XHRcdHBhZGRpbmc6IDFlbTtcbiAgXHRcdFx0XHRcdG1heC13aWR0aDogNDBlbTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0c2VjdGlvbiA+IGRpdi5yaWdodCB7XG4gIFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcbiAgXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0c2VjdGlvbiA+IGRpdi5sZWZ0IHtcbiAgXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGRpdi5yLWFycm93IHtcbiAgXHRcdFx0XHRcdHRvcDogYXV0bztcbiAgXHRcdFx0XHRcdGJvdHRvbTogMS41ZW07XG4gIFx0XHRcdFx0XHRyaWdodDogMi41ZW07XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcms7Il19 */\n/*@ sourceURL=/Users/ethanlaw/Desktop/bitlore-react/pages/work.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=work.js.d984eb494158c89de7e0.hot-update.js.map