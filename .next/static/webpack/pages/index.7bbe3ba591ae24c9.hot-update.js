"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sanity */ \"./sanity.ts\");\n\n\n\n\nfunction Projects(param) {\n    var projects = param.projects;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#bd86ff] scrollbar-thin\",\n                children: projects.map(function(project, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                                initial: {\n                                    y: -300,\n                                    opacity: 0\n                                },\n                                whileInView: {\n                                    y: 0,\n                                    opacity: 1\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(project === null || project === void 0 ? void 0 : project.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-10 px-0 md:px-10 max-w-6xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-4xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration decoration-[#bd86ff]/50\",\n                                                children: [\n                                                    \"Case Study \",\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length,\n                                                    \":\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, _this),\n                                            \" \",\n                                            project === null || project === void 0 ? void 0 : project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-center md:text-left\",\n                                        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus mi nisi, nec viverra lacus ultricies sed. Sed a dignissim odio. Nam molestie mauris et risus varius, ut posuere ligula commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#bd86ff]/10 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielgiangi/Desktop/gabrielgiangi_portfolio/gdgiangi/components/Projects.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEI7QUFDYTtBQUVKO0FBTW5DLFNBQVNHLFFBQVEsQ0FBQyxLQUFtQixFQUFFO1FBQXJCLFFBQVUsR0FBVixLQUFtQixDQUFqQkMsUUFBUTs7SUFDMUIscUJBQ0UsOERBQUNILHFEQUFVO1FBQ1RLLE9BQU8sRUFBRTtZQUNQQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0RDLFdBQVcsRUFBRTtZQUNYRCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0RFLFVBQVUsRUFBRTtZQUNWQyxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0RDLFNBQVMsRUFBQywwSEFBMEg7OzBCQUVwSSw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLGtFQUFrRTswQkFBQyxVQUVqRjs7Ozs7b0JBQUs7MEJBRUwsOERBQUNOLEtBQUc7Z0JBQUNNLFNBQVMsRUFBQywwSkFBMEo7MEJBQ3RLUCxRQUFRLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLENBQUM7a0NBQ3ZCLHFFQUFDVixLQUFHO3dCQUFDTSxTQUFTLEVBQUMsOEdBQThHOzswQ0FDM0gsOERBQUNWLHFEQUFVO2dDQUNUSyxPQUFPLEVBQUU7b0NBQ1BXLENBQUMsRUFBRSxDQUFDLEdBQUc7b0NBQ1BWLE9BQU8sRUFBRSxDQUFDO2lDQUNYO2dDQUNEQyxXQUFXLEVBQUU7b0NBQ1hTLENBQUMsRUFBRSxDQUFDO29DQUNKVixPQUFPLEVBQUUsQ0FBQztpQ0FDWDtnQ0FDREUsVUFBVSxFQUFFO29DQUNWQyxRQUFRLEVBQUUsR0FBRztpQ0FDZDtnQ0FDRFEsUUFBUSxFQUFFO29DQUNSQyxJQUFJLEVBQUUsSUFBSTtpQ0FDWDtnQ0FDREMsR0FBRyxFQUFFbEIsK0NBQU0sQ0FBQ1ksT0FBTyxhQUFQQSxPQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxPQUFPLENBQUVPLEtBQUssQ0FBQyxDQUFDQyxHQUFHLEVBQUU7Z0NBQ2pDQyxHQUFHLEVBQUMsRUFBRTs7Ozs7cUNBQ047MENBRUYsOERBQUNsQixLQUFHO2dDQUFDTSxTQUFTLEVBQUMsb0NBQW9DOztrREFDakQsOERBQUNhLElBQUU7d0NBQUNiLFNBQVMsRUFBQyxvQ0FBb0M7OzBEQUNoRCw4REFBQ2MsTUFBSTtnREFBQ2QsU0FBUyxFQUFDLDhDQUE4Qzs7b0RBQUMsYUFDbEQ7b0RBQUNJLENBQUMsR0FBRyxDQUFDO29EQUFDLE1BQUk7b0RBQUNYLFFBQVEsQ0FBQ3NCLE1BQU07b0RBQUMsR0FDekM7Ozs7OztxREFBTzs0Q0FBQyxHQUFHOzRDQUNWWixPQUFPLGFBQVBBLE9BQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLE9BQU8sQ0FBRWEsS0FBSzs7Ozs7OzZDQUNaO2tEQUVMLDhEQUFDQyxHQUFDO3dDQUFDakIsU0FBUyxFQUFDLGtDQUFrQztrREFBQyxxUUFNaEQ7Ozs7OzZDQUFJOzs7Ozs7cUNBQ0E7Ozs7Ozs2QkFDRjtpQkFDUCxDQUFDOzs7OztvQkFDRTswQkFFTiw4REFBQ04sS0FBRztnQkFBQ00sU0FBUyxFQUFDLHVFQUF1RTs7Ozs7b0JBQUc7Ozs7OztZQUM5RSxDQUNiO0FBQ0osQ0FBQztBQS9EUVIsS0FBQUEsUUFBUTtBQWlFakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeD9mM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3R5cGluZ3NcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi9zYW5pdHlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvamVjdHM6IFByb2plY3RbXTtcbn07XG5cbmZ1bmN0aW9uIFByb2plY3RzKHsgcHJvamVjdHMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17e1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfX1cbiAgICAgIHdoaWxlSW5WaWV3PXt7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9fVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlIGZsZXggb3ZlcmZsb3ctaGlkZGVuIGZsZXgtY29sIHRleHQtbGVmdCBtZDpmbGV4LXJvdyBtYXgtdy1mdWxsIGp1c3RpZnktZXZlbmx5IG14LWF1dG8gaXRlbXMtY2VudGVyIHotMFwiXG4gICAgPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yNCB1cHBlcmNhc2UgdHJhY2tpbmctWzIwcHhdIHRleHQtZ3JheS01MDAgdGV4dC0yeGxcIj5cbiAgICAgICAgUHJvamVjdHNcbiAgICAgIDwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXggb3ZlcmZsb3cteC1zY3JvbGwgb3ZlcmZsb3cteS1oaWRkZW4gc25hcC14IHNuYXAtbWFuZGF0b3J5IHotMjAgc2Nyb2xsYmFyLXRyYWNrLWdyYXktNDAwLzIwIHNjcm9sbGJhci10aHVtYi1bI2JkODZmZl0gc2Nyb2xsYmFyLXRoaW5cIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleC1zaHJpbmstMCBzbmFwLWNlbnRlciBmbGV4IGZsZXgtY29sIHNwYWNlLXktNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yMCBtZDpwLTQ0IGgtc2NyZWVuXCI+XG4gICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgeTogLTMwMCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17e1xuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7XG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocHJvamVjdD8uaW1hZ2UpLnVybCgpfVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEwIHB4LTAgbWQ6cHgtMTAgbWF4LXctNnhsXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lIGRlY29yYXRpb24gZGVjb3JhdGlvbi1bI2JkODZmZl0vNTBcIj5cbiAgICAgICAgICAgICAgICAgIENhc2UgU3R1ZHkge2kgKyAxfSBvZiB7cHJvamVjdHMubGVuZ3RofTpcbiAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgIHtwcm9qZWN0Py50aXRsZX1cbiAgICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhXG4gICAgICAgICAgICAgICAgY3Vyc3VzIG1pIG5pc2ksIG5lYyB2aXZlcnJhIGxhY3VzIHVsdHJpY2llcyBzZWQuIFNlZCBhIGRpZ25pc3NpbVxuICAgICAgICAgICAgICAgIG9kaW8uIE5hbSBtb2xlc3RpZSBtYXVyaXMgZXQgcmlzdXMgdmFyaXVzLCB1dCBwb3N1ZXJlIGxpZ3VsYVxuICAgICAgICAgICAgICAgIGNvbW1vZG8uIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpblxuICAgICAgICAgICAgICAgIGZhdWNpYnVzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYWJzb2x1dGUgdG9wLVszMCVdIGJnLVsjYmQ4NmZmXS8xMCBsZWZ0LTAgaC1bNTAwcHhdIC1za2V3LXktMTJcIiAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ1cmxGb3IiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwicHJvamVjdCIsImkiLCJpbWciLCJ5Iiwidmlld3BvcnQiLCJvbmNlIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiLCJoNCIsInNwYW4iLCJsZW5ndGgiLCJ0aXRsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});