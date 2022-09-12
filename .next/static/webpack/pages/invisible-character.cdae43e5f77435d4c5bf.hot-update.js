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
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary pl-3 pr-3 m-1",
          type: "button",
          id: "repeatButton2",
          onClick: "repeatTextInSameLine()",
          children: "Repeat (Same Line)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary pl-3 pr-3 m-1 bt",
          type: "button",
          "data-clipboard-target": "#text1",
          children: "Copy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-success pl-3 pr-3 m-1",
          type: "reset",
          id: "reset",
          onClick: "resetFn()",
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "What Is Invisible Text Generator?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Hey user, if you are want to generate invisible text then you are on the right website. Here you can generate your invisible text unlimited times."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "How To Use Invisible Text Generator?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-justify",
        children: "Enter the number in the first box when you want to generate invisible text."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/js/invisible-character/js.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW52aXNpYmxlLWNoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJ0ZXh0cmVwZWF0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsWUFBVCxHQUF3QjtBQUNyQyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQU8sV0FBSyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBT0U7QUFBTyxpQkFBUyxFQUFDLG9DQUFqQjtBQUFzRCxZQUFJLEVBQUMsSUFBM0Q7QUFBZ0UsWUFBSSxFQUFDLFFBQXJFO0FBQThFLFVBQUUsRUFBQyxRQUFqRjtBQUEwRixpQkFBUyxFQUFDLFNBQXBHO0FBQThHLG1CQUFXLEVBQUMsMEJBQTFIO0FBQ0Usb0JBQVksRUFBQztBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQVUsaUJBQVMsRUFBQyxvQ0FBcEI7QUFBeUQsVUFBRSxFQUFDLE9BQTVEO0FBQW9FLG1CQUFXLEVBQUMsYUFBaEY7QUFBOEYsb0JBQVksRUFBQyxLQUEzRztBQUFpSCxZQUFJLEVBQUM7QUFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBbUJFO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQUEsZ0NBR0U7QUFBUSxtQkFBUyxFQUFDLGdDQUFsQjtBQUFtRCxjQUFJLEVBQUMsUUFBeEQ7QUFBaUUsWUFBRSxFQUFDLGVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBUUU7QUFBUSxtQkFBUyxFQUFDLCtCQUFsQjtBQUFrRCxjQUFJLEVBQUMsUUFBdkQ7QUFBZ0UsWUFBRSxFQUFDLGVBQW5FO0FBQW1GLGlCQUFPLEVBQUMsd0JBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBYUU7QUFBUSxtQkFBUyxFQUFDLGtDQUFsQjtBQUFxRCxjQUFJLEVBQUMsUUFBMUQ7QUFBbUUsbUNBQXNCLFFBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGLGVBaUJFO0FBQVEsbUJBQVMsRUFBQywrQkFBbEI7QUFBa0QsY0FBSSxFQUFDLE9BQXZEO0FBQStELFlBQUUsRUFBQyxPQUFsRTtBQUEwRSxpQkFBTyxFQUFDLFdBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkYsZUFzQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRDRixlQXdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeENGLGVBeUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGLGVBMENFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNGLGVBMkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQ0YsZUE0Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1Q0YsZUE2Q0U7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFtREU7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkRGLGVBb0RFO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBERixlQXFERTtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyREY7QUFBQSxrQkFERjtBQXlERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbnZpc2libGUtY2hhcmFjdGVyLmNkYWU0M2U1Zjc3NDM1ZDRjNWJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGV4dHJlcGVhdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGl0bGUgdGl0bGU9XCJpbnZpc2libGUtY2hhcmFjdGVyXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90b2FzdHIuanMvbGF0ZXN0L3RvYXN0ci5taW4uY3NzXCIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtMlwiPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMT5XaGF0IElzIFRleHQgUmVwZWF0ZXI/PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIj5IZXkgdXNlciwgaWYgeW91IGFyZSB3YW50IHRvIHJlcGVhdCBsZXR0ZXIsIGVtb2ppLCBhbmQgc3ltYm9sLiB0aGVuIHlvdSBhcmUgb24gdGhlIHJpZ2h0IHdlYnNpdGUgaGVyZSB5b3UgY2FuIHJlcGVhdCB5b3VyIHRleHQgdW5saW1pdGVkIHRpbWVzLjwvcD5cclxuXHJcblxyXG5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJvcmRlciBib3JkZXItcHJpbWFyeVwiIGNvbHM9XCIyNVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlclwiIGlucHV0TW9kZT1cIm51bWVyaWNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFJlcGV0aXRpb25zIE51bWJlclwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxyXG5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJvcmRlciBib3JkZXItcHJpbWFyeVwiIGlkPVwidGV4dDFcIiBwbGFjZWhvbGRlcj1cIk91dHB1dCBIZXJlXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcm93cz1cIjVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcblxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJ0biBidG4tcHJpbWFyeSBwbC0zIHByLTMgbS0xXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicmVwZWF0QnV0dG9uMVwiPlJlcGVhdCAoTmV3XHJcbiAgICAgICAgICAgIExpbmUpPC9idXR0b24+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwbC0zIHByLTMgbS0xXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicmVwZWF0QnV0dG9uMlwiIG9uQ2xpY2s9XCJyZXBlYXRUZXh0SW5TYW1lTGluZSgpXCI+UmVwZWF0XHJcbiAgICAgICAgICAgIChTYW1lIExpbmUpPC9idXR0b24+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwbC0zIHByLTMgbS0xIGJ0XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtY2xpcGJvYXJkLXRhcmdldD1cIiN0ZXh0MVwiPkNvcHk8L2J1dHRvbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIHBsLTMgcHItMyBtLTFcIiB0eXBlPVwicmVzZXRcIiBpZD1cInJlc2V0XCIgb25DbGljaz1cInJlc2V0Rm4oKVwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMT5XaGF0IElzIEludmlzaWJsZSBUZXh0IEdlbmVyYXRvcj88L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPkhleSB1c2VyLCBpZiB5b3UgYXJlIHdhbnQgdG8gZ2VuZXJhdGUgaW52aXNpYmxlIHRleHQgdGhlbiB5b3UgYXJlIG9uIHRoZSByaWdodCB3ZWJzaXRlLiBIZXJlIHlvdSBjYW4gZ2VuZXJhdGUgeW91ciBpbnZpc2libGUgdGV4dCB1bmxpbWl0ZWQgdGltZXMuPC9wPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMT5Ib3cgVG8gVXNlIEludmlzaWJsZSBUZXh0IEdlbmVyYXRvcj88L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPkVudGVyIHRoZSBudW1iZXIgaW4gdGhlIGZpcnN0IGJveCB3aGVuIHlvdSB3YW50IHRvIGdlbmVyYXRlIGludmlzaWJsZSB0ZXh0LjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL3VucGtnLmNvbS9jbGlwYm9hcmRAMi4wLjExL2Rpc3QvY2xpcGJvYXJkLm1pbi5qcyc+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdG9hc3RyLmpzL2xhdGVzdC90b2FzdHIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPScvanMvaW52aXNpYmxlLWNoYXJhY3Rlci9qcy5qcyc+PC9zY3JpcHQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9