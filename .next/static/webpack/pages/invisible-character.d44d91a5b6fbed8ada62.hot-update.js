webpackHotUpdate_N_E("pages/invisible-character",{

/***/ "./pages/invisible-character.js":
/*!**************************************!*\
  !*** ./pages/invisible-character.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invisiblecharacter; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");


var _jsxFileName = "C:\\Users\\CHK\\Desktop\\tools.fontbasket.com\\pages\\invisible-character.js";

function invisiblecharacter() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW52aXNpYmxlLWNoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJpbnZpc2libGVjaGFyYWN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0Esa0JBQVQsR0FBOEI7QUFDM0Msc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyx5REFBRDtBQUFPLFdBQUssRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU9FO0FBQU8saUJBQVMsRUFBQyxvQ0FBakI7QUFBc0QsWUFBSSxFQUFDLElBQTNEO0FBQWdFLFlBQUksRUFBQyxRQUFyRTtBQUE4RSxVQUFFLEVBQUMsUUFBakY7QUFBMEYsaUJBQVMsRUFBQyxTQUFwRztBQUE4RyxtQkFBVyxFQUFDLDBCQUExSDtBQUNFLG9CQUFZLEVBQUM7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFXRTtBQUFVLGlCQUFTLEVBQUMsb0NBQXBCO0FBQXlELFVBQUUsRUFBQyxPQUE1RDtBQUFvRSxtQkFBVyxFQUFDLGFBQWhGO0FBQThGLG9CQUFZLEVBQUMsS0FBM0c7QUFBaUgsWUFBSSxFQUFDO0FBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRixlQWNFO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQUEsZ0NBR0U7QUFBUSxtQkFBUyxFQUFDLGdDQUFsQjtBQUFtRCxjQUFJLEVBQUMsUUFBeEQ7QUFBaUUsWUFBRSxFQUFDLGVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBUUU7QUFBUSxtQkFBUyxFQUFDLCtCQUFsQjtBQUFrRCxjQUFJLEVBQUMsUUFBdkQ7QUFBZ0UsWUFBRSxFQUFDLGVBQW5FO0FBQW1GLGlCQUFPLEVBQUMsd0JBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBYUU7QUFBUSxtQkFBUyxFQUFDLGtDQUFsQjtBQUFxRCxjQUFJLEVBQUMsUUFBMUQ7QUFBbUUsbUNBQXNCLFFBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGLGVBaUJFO0FBQVEsbUJBQVMsRUFBQywrQkFBbEI7QUFBa0QsY0FBSSxFQUFDLE9BQXZEO0FBQStELFlBQUUsRUFBQyxPQUFsRTtBQUEwRSxpQkFBTyxFQUFDLFdBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNGLGVBbUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsZUFvQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0YsZUFxQ0U7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQ0YsZUFzQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRDRixlQXVDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZDRixlQXdDRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQThDRTtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0YsZUErQ0U7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0NGLGVBZ0RFO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhERjtBQUFBLGtCQURGO0FBb0REIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ludmlzaWJsZS1jaGFyYWN0ZXIuZDQ0ZDkxYTViNmZiZWQ4YWRhNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnZpc2libGVjaGFyYWN0ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaXRsZSB0aXRsZT1cImludmlzaWJsZS1jaGFyYWN0ZXJcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3RvYXN0ci5qcy9sYXRlc3QvdG9hc3RyLm1pbi5jc3NcIiAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC0yXCI+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgxPldoYXQgSXMgVGV4dCBSZXBlYXRlcj88L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPkhleSB1c2VyLCBpZiB5b3UgYXJlIHdhbnQgdG8gcmVwZWF0IGxldHRlciwgZW1vamksIGFuZCBzeW1ib2wuIHRoZW4geW91IGFyZSBvbiB0aGUgcmlnaHQgd2Vic2l0ZSBoZXJlIHlvdSBjYW4gcmVwZWF0IHlvdXIgdGV4dCB1bmxpbWl0ZWQgdGltZXMuPC9wPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyIGJvcmRlci1wcmltYXJ5XCIgY29scz1cIjI1XCIgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtYmVyXCIgaW5wdXRNb2RlPVwibnVtZXJpY1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVwZXRpdGlvbnMgTnVtYmVyXCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyIGJvcmRlci1wcmltYXJ5XCIgaWQ9XCJ0ZXh0MVwiIHBsYWNlaG9sZGVyPVwiT3V0cHV0IEhlcmVcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcblxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJ0biBidG4tcHJpbWFyeSBwbC0zIHByLTMgbS0xXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicmVwZWF0QnV0dG9uMVwiPlJlcGVhdCAoTmV3XHJcbiAgICAgICAgICAgIExpbmUpPC9idXR0b24+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwbC0zIHByLTMgbS0xXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicmVwZWF0QnV0dG9uMlwiIG9uQ2xpY2s9XCJyZXBlYXRUZXh0SW5TYW1lTGluZSgpXCI+UmVwZWF0XHJcbiAgICAgICAgICAgIChTYW1lIExpbmUpPC9idXR0b24+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwbC0zIHByLTMgbS0xIGJ0XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtY2xpcGJvYXJkLXRhcmdldD1cIiN0ZXh0MVwiPkNvcHk8L2J1dHRvbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIHBsLTMgcHItMyBtLTFcIiB0eXBlPVwicmVzZXRcIiBpZD1cInJlc2V0XCIgb25DbGljaz1cInJlc2V0Rm4oKVwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMT5XaGF0IElzIEludmlzaWJsZSBUZXh0IEdlbmVyYXRvcj88L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPkhleSB1c2VyLCBpZiB5b3UgYXJlIHdhbnQgdG8gZ2VuZXJhdGUgaW52aXNpYmxlIHRleHQgdGhlbiB5b3UgYXJlIG9uIHRoZSByaWdodCB3ZWJzaXRlLiBIZXJlIHlvdSBjYW4gZ2VuZXJhdGUgeW91ciBpbnZpc2libGUgdGV4dCB1bmxpbWl0ZWQgdGltZXMuPC9wPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMT5Ib3cgVG8gVXNlIEludmlzaWJsZSBUZXh0IEdlbmVyYXRvcj88L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPkVudGVyIHRoZSBudW1iZXIgaW4gdGhlIGZpcnN0IGJveCB3aGVuIHlvdSB3YW50IHRvIGdlbmVyYXRlIGludmlzaWJsZSB0ZXh0LjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL3VucGtnLmNvbS9jbGlwYm9hcmRAMi4wLjExL2Rpc3QvY2xpcGJvYXJkLm1pbi5qcyc+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdG9hc3RyLmpzL2xhdGVzdC90b2FzdHIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPScvanMvaW52aXNpYmxlLWNoYXJhY3Rlci9qcy5qcyc+PC9zY3JpcHQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9