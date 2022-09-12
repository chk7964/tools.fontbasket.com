webpackHotUpdate_N_E("pages/invisible-character",{

/***/ "./pages/invisible-character.js":
/*!**************************************!*\
  !*** ./pages/invisible-character.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return textrepeater; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");


var _jsxFileName = "C:\\Users\\CHK\\Desktop\\tools.fontbasket.com\\pages\\invisible-character.js";

function textrepeater() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "invisible-character"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "What Is Text Repeater?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "form-control border border-primary",
        cols: "25",
        type: "number",
        id: "number",
        inputMode: "numeric",
        placeholder: "Enter Repetitions Number",
        autoComplete: "off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        className: "form-control border border-primary",
        id: "text1",
        placeholder: "Output Here",
        autoComplete: "off",
        rows: "5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: " btn btn-primary pl-3 pr-3 m-1",
          type: "button",
          id: "repeatButton1",
          children: "Repeat (New Line)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary pl-3 pr-3 m-1",
          type: "button",
          id: "repeatButton2",
          onClick: "repeatTextInSameLine()",
          children: "Repeat (Same Line)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary pl-3 pr-3 m-1 bt",
          type: "button",
          "data-clipboard-target": "#text1",
          children: "Copy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-success pl-3 pr-3 m-1",
          type: "reset",
          id: "reset",
          onClick: "resetFn()",
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "What Is Invisible Text Generator?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Hey user, if you are want to generate invisible text then you are on the right website. Here you can generate your invisible text unlimited times."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "How To Use Invisible Text Generator?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Enter the number in the first box when you want to generate invisible text."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/invisible-character/js.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW52aXNpYmxlLWNoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJ0ZXh0cmVwZWF0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsWUFBVCxHQUF3QjtBQUNyQyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQU8sV0FBSyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBT0U7QUFBTyxpQkFBUyxFQUFDLG9DQUFqQjtBQUFzRCxZQUFJLEVBQUMsSUFBM0Q7QUFBZ0UsWUFBSSxFQUFDLFFBQXJFO0FBQThFLFVBQUUsRUFBQyxRQUFqRjtBQUEwRixpQkFBUyxFQUFDLFNBQXBHO0FBQThHLG1CQUFXLEVBQUMsMEJBQTFIO0FBQ0Usb0JBQVksRUFBQztBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQVUsaUJBQVMsRUFBQyxvQ0FBcEI7QUFBeUQsVUFBRSxFQUFDLE9BQTVEO0FBQW9FLG1CQUFXLEVBQUMsYUFBaEY7QUFBOEYsb0JBQVksRUFBQyxLQUEzRztBQUFpSCxZQUFJLEVBQUM7QUFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBY0U7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQSxnQ0FHRTtBQUFRLG1CQUFTLEVBQUMsZ0NBQWxCO0FBQW1ELGNBQUksRUFBQyxRQUF4RDtBQUFpRSxZQUFFLEVBQUMsZUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFRRTtBQUFRLG1CQUFTLEVBQUMsK0JBQWxCO0FBQWtELGNBQUksRUFBQyxRQUF2RDtBQUFnRSxZQUFFLEVBQUMsZUFBbkU7QUFBbUYsaUJBQU8sRUFBQyx3QkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFhRTtBQUFRLG1CQUFTLEVBQUMsa0NBQWxCO0FBQXFELGNBQUksRUFBQyxRQUExRDtBQUFtRSxtQ0FBc0IsUUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFpQkU7QUFBUSxtQkFBUyxFQUFDLCtCQUFsQjtBQUFrRCxjQUFJLEVBQUMsT0FBdkQ7QUFBK0QsWUFBRSxFQUFDLE9BQWxFO0FBQTBFLGlCQUFPLEVBQUMsV0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBaUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0YsZUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DRixlQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDRixlQXFDRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJDRixlQXNDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdENGLGVBdUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNGLGVBd0NFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBOENFO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRixlQStDRTtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQ0YsZUFnREU7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaERGO0FBQUEsa0JBREY7QUFvREQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52aXNpYmxlLWNoYXJhY3Rlci44MDQ4ZjVkODAzZmUxOTVlMmQxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGUnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHRyZXBlYXRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRpdGxlIHRpdGxlPVwiaW52aXNpYmxlLWNoYXJhY3RlclwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdG9hc3RyLmpzL2xhdGVzdC90b2FzdHIubWluLmNzc1wiIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTJcIj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDE+V2hhdCBJcyBUZXh0IFJlcGVhdGVyPzwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+SGV5IHVzZXIsIGlmIHlvdSBhcmUgd2FudCB0byByZXBlYXQgbGV0dGVyLCBlbW9qaSwgYW5kIHN5bWJvbC4gdGhlbiB5b3UgYXJlIG9uIHRoZSByaWdodCB3ZWJzaXRlIGhlcmUgeW91IGNhbiByZXBlYXQgeW91ciB0ZXh0IHVubGltaXRlZCB0aW1lcy48L3A+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXIgYm9yZGVyLXByaW1hcnlcIiBjb2xzPVwiMjVcIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBpbnB1dE1vZGU9XCJudW1lcmljXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBSZXBldGl0aW9ucyBOdW1iZXJcIlxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXIgYm9yZGVyLXByaW1hcnlcIiBpZD1cInRleHQxXCIgcGxhY2Vob2xkZXI9XCJPdXRwdXQgSGVyZVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgYnRuIGJ0bi1wcmltYXJ5IHBsLTMgcHItMyBtLTFcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJyZXBlYXRCdXR0b24xXCI+UmVwZWF0IChOZXdcclxuICAgICAgICAgICAgTGluZSk8L2J1dHRvbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHBsLTMgcHItMyBtLTFcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJyZXBlYXRCdXR0b24yXCIgb25DbGljaz1cInJlcGVhdFRleHRJblNhbWVMaW5lKClcIj5SZXBlYXRcclxuICAgICAgICAgICAgKFNhbWUgTGluZSk8L2J1dHRvbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHBsLTMgcHItMyBtLTEgYnRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PVwiI3RleHQxXCI+Q29weTwvYnV0dG9uPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgcGwtMyBwci0zIG0tMVwiIHR5cGU9XCJyZXNldFwiIGlkPVwicmVzZXRcIiBvbkNsaWNrPVwicmVzZXRGbigpXCI+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgxPldoYXQgSXMgSW52aXNpYmxlIFRleHQgR2VuZXJhdG9yPzwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+SGV5IHVzZXIsIGlmIHlvdSBhcmUgd2FudCB0byBnZW5lcmF0ZSBpbnZpc2libGUgdGV4dCB0aGVuIHlvdSBhcmUgb24gdGhlIHJpZ2h0IHdlYnNpdGUuIEhlcmUgeW91IGNhbiBnZW5lcmF0ZSB5b3VyIGludmlzaWJsZSB0ZXh0IHVubGltaXRlZCB0aW1lcy48L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgxPkhvdyBUbyBVc2UgSW52aXNpYmxlIFRleHQgR2VuZXJhdG9yPzwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+RW50ZXIgdGhlIG51bWJlciBpbiB0aGUgZmlyc3QgYm94IHdoZW4geW91IHdhbnQgdG8gZ2VuZXJhdGUgaW52aXNpYmxlIHRleHQuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vdW5wa2cuY29tL2NsaXBib2FyZEAyLjAuMTEvZGlzdC9jbGlwYm9hcmQubWluLmpzJz48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90b2FzdHIuanMvbGF0ZXN0L3RvYXN0ci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9Jy9qcy9pbnZpc2libGUtY2hhcmFjdGVyL2pzLmpzJz48L3NjcmlwdD5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=