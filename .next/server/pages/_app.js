"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar.js

function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "./",
                        children: "Tools Font Basket"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "scrollmenu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "./",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/capitalize-case",
                            children: "CapitalizeCase Converter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/fancy-text",
                            children: "Fancy Text"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/invisible-character/",
                            children: "Invisible Text Generator"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/lower-case/",
                            children: "LowerCase Text Converter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/numbers-to-words-converter/",
                            children: "Number To Word Converter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/reverse-text/",
                            children: "Reverse Text Converter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/shuffle-text/",
                            children: "Suffle Text "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/text-repeater/",
                            children: "Text Repeater"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/upper-case/",
                            children: "UpperCase Conveter"
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Footer.js

function footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "footer",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fmenu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "About Us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Contact Us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Privacy Policy"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Copyright \xa9 ",
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            id: "year"
                        }),
                        " Your Name All Rights Reserved"
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(316));
module.exports = __webpack_exports__;

})();