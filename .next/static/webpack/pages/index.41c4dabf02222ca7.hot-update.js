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

/***/ "./src/layout/MobileMenu.js":
/*!**********************************!*\
  !*** ./src/layout/MobileMenu.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menus */ \"./src/layout/Menus.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar MobileMenu = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), activeMenu = ref[0], setActiveMenu = ref[1];\n    var activeMenuSet = function(value) {\n        return setActiveMenu(activeMenu === value ? \"\" : value);\n    }, activeLi = function(value) {\n        return value === activeMenu ? {\n            display: \"block\"\n        } : {\n            display: \"none\"\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"navigation clearfix d-block d-lg-none mobile-header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"dropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        children: \"Домой\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: activeLi(\"home\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menus__WEBPACK_IMPORTED_MODULE_2__.Home, {}, void 0, false, {\n                            fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-btn\",\n                        onClick: function() {\n                            return activeMenuSet(\"home\");\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"dropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/blog-news\",\n                        children: \"Новости\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: activeLi(\"pages\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menus__WEBPACK_IMPORTED_MODULE_2__.PagesMobile, {}, void 0, false, {\n                            fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-btn\",\n                        onClick: function() {\n                            return activeMenuSet(\"pages\");\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"dropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/blog-accii\",\n                        children: \"Акции\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: activeLi(\"portfolio\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menus__WEBPACK_IMPORTED_MODULE_2__.Portfolio, {}, void 0, false, {\n                            fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-btn\",\n                        onClick: function() {\n                            return activeMenuSet(\"portfolio\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fas fa-chevron-down\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menus__WEBPACK_IMPORTED_MODULE_2__.Contact, {}, void 0, false, {\n                fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/fruiit/src/layout/MobileMenu.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(MobileMenu, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = MobileMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\nvar _c;\n$RefreshReg$(_c, \"MobileMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L01vYmlsZU1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQUFpQztBQUMyQztBQUM1RSxJQUFNTyxVQUFVLEdBQUcsV0FBTTs7SUFDdkIsSUFBb0NQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBekNRLFVBQVUsR0FBbUJSLEdBQVksR0FBL0IsRUFBRVMsYUFBYSxHQUFJVCxHQUFZLEdBQWhCO0lBQ2hDLElBQU1VLGFBQWEsR0FBRyxTQUFDQyxLQUFLO2VBQ3hCRixhQUFhLENBQUNELFVBQVUsS0FBS0csS0FBSyxHQUFHLEVBQUUsR0FBR0EsS0FBSyxDQUFDO0tBQUEsRUFDbERDLFFBQVEsR0FBRyxTQUFDRCxLQUFLO2VBQ2ZBLEtBQUssS0FBS0gsVUFBVSxHQUFHO1lBQUVLLE9BQU8sRUFBRSxPQUFPO1NBQUUsR0FBRztZQUFFQSxPQUFPLEVBQUUsTUFBTTtTQUFFO0tBQUE7SUFDckUscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLHFEQUFxRDs7MEJBQ2pFLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsVUFBVTs7a0NBQ3RCLDhEQUFDRSxHQUFDO3dCQUFDQyxJQUFJLEVBQUMsR0FBRztrQ0FBQyxPQUFLOzs7Ozs2QkFBSTtrQ0FDckIsOERBQUNKLElBQUU7d0JBQUNLLEtBQUssRUFBRVAsUUFBUSxDQUFDLE1BQU0sQ0FBQztrQ0FDekIsNEVBQUNULHdDQUFJOzs7O2lDQUFHOzs7Ozs2QkFDTDtrQ0FDTCw4REFBQ2lCLEtBQUc7d0JBQUNMLFNBQVMsRUFBQyxjQUFjO3dCQUFDTSxPQUFPLEVBQUU7bUNBQU1YLGFBQWEsQ0FBQyxNQUFNLENBQUM7eUJBQUE7Ozs7OzZCQUU1RDs7Ozs7O3FCQUNIOzBCQUNMLDhEQUFDTSxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsVUFBVTs7a0NBQ3RCLDhEQUFDRSxHQUFDO3dCQUFDQyxJQUFJLEVBQUMsWUFBWTtrQ0FBQyxTQUFPOzs7Ozs2QkFBSTtrQ0FDaEMsOERBQUNKLElBQUU7d0JBQUNLLEtBQUssRUFBRVAsUUFBUSxDQUFDLE9BQU8sQ0FBQztrQ0FDMUIsNEVBQUNSLCtDQUFXOzs7O2lDQUFHOzs7Ozs2QkFDWjtrQ0FDTCw4REFBQ2dCLEtBQUc7d0JBQUNMLFNBQVMsRUFBQyxjQUFjO3dCQUFDTSxPQUFPLEVBQUU7bUNBQU1YLGFBQWEsQ0FBQyxPQUFPLENBQUM7eUJBQUE7Ozs7OzZCQUU3RDs7Ozs7O3FCQUNIOzBCQUNMLDhEQUFDTSxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsVUFBVTs7a0NBQ3RCLDhEQUFDRSxHQUFDO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTtrQ0FBQyxPQUFLOzs7Ozs2QkFBSTtrQ0FDL0IsOERBQUNKLElBQUU7d0JBQUNLLEtBQUssRUFBRVAsUUFBUSxDQUFDLFdBQVcsQ0FBQztrQ0FDOUIsNEVBQUNQLDZDQUFTOzs7O2lDQUFHOzs7Ozs2QkFDVjtrQ0FDTCw4REFBQ2UsS0FBRzt3QkFDRkwsU0FBUyxFQUFDLGNBQWM7d0JBQ3hCTSxPQUFPLEVBQUU7bUNBQU1YLGFBQWEsQ0FBQyxXQUFXLENBQUM7eUJBQUE7a0NBRXpDLDRFQUFDWSxNQUFJOzRCQUFDUCxTQUFTLEVBQUMscUJBQXFCOzs7OztpQ0FBRzs7Ozs7NkJBQ3BDOzs7Ozs7cUJBQ0g7MEJBQ0wsOERBQUNiLDJDQUFPOzs7O3FCQUFHOzs7Ozs7YUFDUixDQUNMO0NBQ0g7R0F6Q0tLLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQTBDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L01vYmlsZU1lbnUuanM/ZDhlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmxvZywgQ29udGFjdCwgSG9tZSwgUGFnZXNNb2JpbGUsIFBvcnRmb2xpbywgU2hvcCB9IGZyb20gXCIuL01lbnVzXCI7XG5jb25zdCBNb2JpbGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgYWN0aXZlTWVudVNldCA9ICh2YWx1ZSkgPT5cbiAgICAgIHNldEFjdGl2ZU1lbnUoYWN0aXZlTWVudSA9PT0gdmFsdWUgPyBcIlwiIDogdmFsdWUpLFxuICAgIGFjdGl2ZUxpID0gKHZhbHVlKSA9PlxuICAgICAgdmFsdWUgPT09IGFjdGl2ZU1lbnUgPyB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9O1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uIGNsZWFyZml4IGQtYmxvY2sgZC1sZy1ub25lIG1vYmlsZS1oZWFkZXJcIj5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICA8YSBocmVmPVwiL1wiPtCU0L7QvNC+0Lk8L2E+XG4gICAgICAgIDx1bCBzdHlsZT17YWN0aXZlTGkoXCJob21lXCIpfT5cbiAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiIG9uQ2xpY2s9eygpID0+IGFjdGl2ZU1lbnVTZXQoXCJob21lXCIpfT5cbiAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiIC8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgPGEgaHJlZj1cIi9ibG9nLW5ld3NcIj7QndC+0LLQvtGB0YLQuDwvYT5cbiAgICAgICAgPHVsIHN0eWxlPXthY3RpdmVMaShcInBhZ2VzXCIpfT5cbiAgICAgICAgICA8UGFnZXNNb2JpbGUgLz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1idG5cIiBvbkNsaWNrPXsoKSA9PiBhY3RpdmVNZW51U2V0KFwicGFnZXNcIil9PlxuICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCIgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICA8YSBocmVmPVwiL2Jsb2ctYWNjaWlcIj7QkNC60YbQuNC4PC9hPlxuICAgICAgICA8dWwgc3R5bGU9e2FjdGl2ZUxpKFwicG9ydGZvbGlvXCIpfT5cbiAgICAgICAgICA8UG9ydGZvbGlvIC8+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1idG5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGl2ZU1lbnVTZXQoXCJwb3J0Zm9saW9cIil9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPENvbnRhY3QgLz5cbiAgICA8L3VsPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCbG9nIiwiQ29udGFjdCIsIkhvbWUiLCJQYWdlc01vYmlsZSIsIlBvcnRmb2xpbyIsIlNob3AiLCJNb2JpbGVNZW51IiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJhY3RpdmVNZW51U2V0IiwidmFsdWUiLCJhY3RpdmVMaSIsImRpc3BsYXkiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwiYSIsImhyZWYiLCJzdHlsZSIsImRpdiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/MobileMenu.js\n"));

/***/ })

});