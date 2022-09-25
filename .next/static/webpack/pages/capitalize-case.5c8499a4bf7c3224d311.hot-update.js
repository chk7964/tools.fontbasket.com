webpackHotUpdate_N_E("pages/capitalize-case",{

/***/ "./pages/capitalize-case.js":
/*!**********************************!*\
  !*** ./pages/capitalize-case.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalizecase; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\CHK\\Desktop\\Github\\tools.fontbasket.com\\pages\\capitalize-case.js";

function capitalizecase() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Capitalize Case Converter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 1
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "What Is Capitalize Case Converter?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          className: "form-control",
          rows: "5",
          id: "k",
          placeholder: "Enter Your Text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-success",
          id: "b",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fa fa-angle-double-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 44
          }, this), " Convert "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          readOnly: true,
          className: "form-control",
          rows: "5",
          id: "result",
          placeholder: "Enter Your Text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-success bt",
          "data-clipboard-target": "#result",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fa fa-clone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 72
          }, this), " Copy"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "What Is Text Repeater?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "How To Use Text Repeater?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 1
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/capitalize-case/js.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 1
    }, this)]
  }, void 0, true);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FwaXRhbGl6ZS1jYXNlLmpzIl0sIm5hbWVzIjpbImNhcGl0YWxpemVjYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLHNCQUNDO0FBQUEsNEJBQ0YscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERSxlQUlDO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRCxlQUtGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRSxlQU1GO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0E7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxlQUtBO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0U7QUFBVSxtQkFBUyxFQUFDLGNBQXBCO0FBQW1DLGNBQUksRUFBQyxHQUF4QztBQUE0QyxZQUFFLEVBQUMsR0FBL0M7QUFBbUQscUJBQVcsRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBU0E7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSwrQkFDQTtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFlBQUUsRUFBQyxHQUF2QztBQUFBLGtDQUEyQztBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEEsZUFZQTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNBO0FBQVUsa0JBQVEsTUFBbEI7QUFBbUIsbUJBQVMsRUFBQyxjQUE3QjtBQUE0QyxjQUFJLEVBQUMsR0FBakQ7QUFBcUQsWUFBRSxFQUFDLFFBQXhEO0FBQWlFLHFCQUFXLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaQSxlQWVBO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsK0JBQ0E7QUFBUSxtQkFBUyxFQUFDLG9CQUFsQjtBQUF1QyxtQ0FBc0IsU0FBN0Q7QUFBQSxrQ0FBdUU7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZBLGVBd0JBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkEsZUF5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkEsZUEwQkE7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkEsZUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCQSxlQTRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCQSxlQTZCQTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORSxlQXVDQTtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q0EsZUF3Q0E7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENBLGVBeUNGO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpDRTtBQUFBLGtCQUREO0FBNkNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcGl0YWxpemUtY2FzZS41Yzg0OTlhNGJmN2MzMjI0ZDMxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplY2FzZSgpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuPEhlYWQ+XHJcbjx0aXRsZT5DYXBpdGFsaXplIENhc2UgQ29udmVydGVyPC90aXRsZT5cclxuPC9IZWFkPlxyXG4gICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3RvYXN0ci5qcy9sYXRlc3QvdG9hc3RyLm1pbi5jc3NcIi8+XHJcbjxici8+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtMlwiPlxyXG5cclxuPGgxPldoYXQgSXMgQ2FwaXRhbGl6ZSBDYXNlIENvbnZlcnRlcj88L2gxPlxyXG48cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIj5IZXkgdXNlciwgaWYgeW91IGFyZSB3YW50IHRvIHJlcGVhdCBsZXR0ZXIsIGVtb2ppLCBhbmQgc3ltYm9sLiB0aGVuIHlvdSBhcmUgb24gdGhlIHJpZ2h0IHdlYnNpdGUgaGVyZSB5b3UgY2FuIHJlcGVhdCB5b3VyIHRleHQgdW5saW1pdGVkIHRpbWVzLjwvcD5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwicC0xXCI+XHJcbiAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCIgaWQ9XCJrXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIFRleHRcIj48L3RleHRhcmVhPlxyXG5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBpZD1cImJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtZG93blwiPjwvaT4gQ29udmVydCA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwicC0xXCI+XHJcbjx0ZXh0YXJlYSByZWFkT25seSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiNVwiIGlkPVwicmVzdWx0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIFRleHRcIj48L3RleHRhcmVhPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidFwiIGRhdGEtY2xpcGJvYXJkLXRhcmdldD1cIiNyZXN1bHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9uZVwiPjwvaT4gQ29weTwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuICBcclxuXHJcblxyXG48YnIvPlxyXG48aDE+V2hhdCBJcyBUZXh0IFJlcGVhdGVyPzwvaDE+XHJcbjxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPkhleSB1c2VyLCBpZiB5b3UgYXJlIHdhbnQgdG8gcmVwZWF0IGxldHRlciwgZW1vamksIGFuZCBzeW1ib2wuIHRoZW4geW91IGFyZSBvbiB0aGUgcmlnaHQgd2Vic2l0ZSBoZXJlIHlvdSBjYW4gcmVwZWF0IHlvdXIgdGV4dCB1bmxpbWl0ZWQgdGltZXMuPC9wPlxyXG48YnIvPlxyXG48aDE+SG93IFRvIFVzZSBUZXh0IFJlcGVhdGVyPzwvaDE+XHJcbjxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPkhleSB1c2VyLCBpZiB5b3UgYXJlIHdhbnQgdG8gcmVwZWF0IGxldHRlciwgZW1vamksIGFuZCBzeW1ib2wuIHRoZW4geW91IGFyZSBvbiB0aGUgcmlnaHQgd2Vic2l0ZSBoZXJlIHlvdSBjYW4gcmVwZWF0IHlvdXIgdGV4dCB1bmxpbWl0ZWQgdGltZXMuPC9wPlxyXG5cclxuXHJcbjwvZGl2PlxyXG4gIDxzY3JpcHQgc3JjPSdodHRwczovL3VucGtnLmNvbS9jbGlwYm9hcmRAMi4wLjExL2Rpc3QvY2xpcGJvYXJkLm1pbi5qcyc+PC9zY3JpcHQ+XHJcbiAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90b2FzdHIuanMvbGF0ZXN0L3RvYXN0ci5taW4uanNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9Jy9qcy9jYXBpdGFsaXplLWNhc2UvanMuanMnPjwvc2NyaXB0PlxyXG4gIDwvPlxyXG4gKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==