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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADAFRUIT_TEMPERATURE_CHARACTERISTIC_UUID\": function() { return /* binding */ ADAFRUIT_TEMPERATURE_CHARACTERISTIC_UUID; },\n/* harmony export */   \"ADAFRUIT_TEMPERATURE_SERVICE_UUID\": function() { return /* binding */ ADAFRUIT_TEMPERATURE_SERVICE_UUID; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_ericpietrowicz_Desktop_react_web_bluetooth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ericpietrowicz_Desktop_react_web_bluetooth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ericpietrowicz_Desktop_react_web_bluetooth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\n// export const ADAFRUIT_TEMPERATURE_SERVICE_UUID = 'adaf0100-c332-42a8-93bd-25e905756cb8'\nvar ADAFRUIT_TEMPERATURE_SERVICE_UUID = \"ADAF0100-C332-42A8-93BD-25E905756CB8\".toLowerCase();\nvar ADAFRUIT_TEMPERATURE_CHARACTERISTIC_UUID = \"adaf0101-c332-42a8-93bd-25e905756cb8\";\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), supportsBle = ref[0], setSupportsBle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), connectedDevice = ref1[0], setConnectedDevice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), temperature = ref3[0], setTemperature = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (navigator.bluetooth) {\n            setSupportsBle(true);\n        }\n    }, []);\n    var onDisconnected = function(event) {\n        setConnectedDevice(null);\n    };\n    var notifyEventChange = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_ericpietrowicz_Desktop_react_web_bluetooth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var val;\n            return _Users_ericpietrowicz_Desktop_react_web_bluetooth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        val = e.currentTarget.value.getFloat32(0, true);\n                        setTemperature(val);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // console.log(val)\n        }));\n        return function notifyEventChange(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectToDevice = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_ericpietrowicz_Desktop_react_web_bluetooth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var device, server, temperatureService, tempCharacteristic;\n            return _Users_ericpietrowicz_Desktop_react_web_bluetooth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (supportsBle) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return navigator.bluetooth.requestDevice({\n                            filters: [\n                                {\n                                    namePrefix: \"CIRCUITPY\"\n                                }\n                            ],\n                            optionalServices: [\n                                ADAFRUIT_TEMPERATURE_SERVICE_UUID\n                            ]\n                        });\n                    case 5:\n                        device = _ctx.sent;\n                        if (device) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        throw new Error();\n                    case 8:\n                        device.addEventListener(\"gattserverdisconnected\", onDisconnected);\n                        setIsLoading(true);\n                        _ctx.next = 12;\n                        return device.gatt.connect();\n                    case 12:\n                        server = _ctx.sent;\n                        _ctx.next = 15;\n                        return server.getPrimaryService(ADAFRUIT_TEMPERATURE_SERVICE_UUID);\n                    case 15:\n                        temperatureService = _ctx.sent;\n                        _ctx.next = 18;\n                        return temperatureService.getCharacteristic(ADAFRUIT_TEMPERATURE_CHARACTERISTIC_UUID);\n                    case 18:\n                        tempCharacteristic = _ctx.sent;\n                        _ctx.next = 21;\n                        return tempCharacteristic.startNotifications();\n                    case 21:\n                        tempCharacteristic.addEventListener(\"characteristicvaluechanged\", notifyEventChange);\n                        setConnectedDevice(server);\n                        _ctx.next = 28;\n                        break;\n                    case 25:\n                        _ctx.prev = 25;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.log(_ctx.t0);\n                    case 28:\n                        _ctx.prev = 28;\n                        setIsLoading(false);\n                        return _ctx.finish(28);\n                    case 31:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    25,\n                    28,\n                    31\n                ]\n            ]);\n        }));\n        return function connectToDevice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex min-h-screen min-w-screen justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/ericpietrowicz/Desktop/react-web-bluetooth/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ericpietrowicz/Desktop/react-web-bluetooth/pages/index.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen min-w-screen justify-center items-center\",\n        children: connectedDevice === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            onClick: connectToDevice,\n            className: \"btn\",\n            children: \"Connect\"\n        }, void 0, false, {\n            fileName: \"/Users/ericpietrowicz/Desktop/react-web-bluetooth/pages/index.js\",\n            lineNumber: 76,\n            columnNumber: 12\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: connectedDevice.name\n        }, void 0, false, {\n            fileName: \"/Users/ericpietrowicz/Desktop/react-web-bluetooth/pages/index.js\",\n            lineNumber: 77,\n            columnNumber: 12\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ericpietrowicz/Desktop/react-web-bluetooth/pages/index.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"kwJ2dxxcB8NWggyF0Gq+jkXezpc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O1NBRXRCO3dCQWpDS2EsZUFBZTs7O09BaUNwQjtJQUVELElBQUlkLFNBQVMsRUFBRTtRQUNiLHFCQUNFLDhEQUFDZ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsNERBQTREO3NCQUN6RSw0RUFBQ0MsSUFBRTswQkFBQyxZQUFVOzs7OztvQkFBSzs7Ozs7Z0JBQ2YsQ0FDUDtLQUNGO0lBRUQscUJBQ0UsOERBQUNGLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDREQUE0RDtrQkFDeEVuQyxlQUFlLEtBQUssSUFBSSxpQkFDcEIsOERBQUNxQyxRQUFNO1lBQUNDLE9BQU8sRUFBRXRCLGVBQWU7WUFBRW1CLFNBQVMsRUFBQyxLQUFLO3NCQUFDLFNBQU87Ozs7O2dCQUFTLGlCQUNsRSw4REFBQ0QsS0FBRztzQkFBRWxDLGVBQWUsQ0FBQ3VDLElBQUk7Ozs7O2dCQUFPOzs7OztZQUNsQyxDQUNQO0NBQ0Y7R0F4RXVCMUMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG4vLyBleHBvcnQgY29uc3QgQURBRlJVSVRfVEVNUEVSQVRVUkVfU0VSVklDRV9VVUlEID0gJ2FkYWYwMTAwLWMzMzItNDJhOC05M2JkLTI1ZTkwNTc1NmNiOCdcbmV4cG9ydCBjb25zdCBBREFGUlVJVF9URU1QRVJBVFVSRV9TRVJWSUNFX1VVSUQgPSAnQURBRjAxMDAtQzMzMi00MkE4LTkzQkQtMjVFOTA1NzU2Q0I4Jy50b0xvd2VyQ2FzZSgpXG5cbmV4cG9ydCBjb25zdCBBREFGUlVJVF9URU1QRVJBVFVSRV9DSEFSQUNURVJJU1RJQ19VVUlEID0gJ2FkYWYwMTAxLWMzMzItNDJhOC05M2JkLTI1ZTkwNTc1NmNiOCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XG4gIGNvbnN0IFtzdXBwb3J0c0JsZSwgc2V0U3VwcG9ydHNCbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb25uZWN0ZWREZXZpY2UsIHNldENvbm5lY3RlZERldmljZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt0ZW1wZXJhdHVyZSwgc2V0VGVtcGVyYXR1cmVdID0gdXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuYmx1ZXRvb3RoKSB7XG4gICAgICBzZXRTdXBwb3J0c0JsZSh0cnVlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgb25EaXNjb25uZWN0ZWQgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRDb25uZWN0ZWREZXZpY2UobnVsbClcbiAgfVxuXG4gIGNvbnN0IG5vdGlmeUV2ZW50Q2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCB2YWwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWUuZ2V0RmxvYXQzMigwLCB0cnVlKVxuICAgIHNldFRlbXBlcmF0dXJlKHZhbClcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpXG4gIH1cblxuICBjb25zdCBjb25uZWN0VG9EZXZpY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzdXBwb3J0c0JsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRldmljZSA9IGF3YWl0IG5hdmlnYXRvci5ibHVldG9vdGgucmVxdWVzdERldmljZSh7XG4gICAgICAgIGZpbHRlcnM6IFt7XG4gICAgICAgICAgbmFtZVByZWZpeDogJ0NJUkNVSVRQWSdcbiAgICAgICAgfV0sXG4gICAgICAgIG9wdGlvbmFsU2VydmljZXM6IFtBREFGUlVJVF9URU1QRVJBVFVSRV9TRVJWSUNFX1VVSURdXG5cbiAgICAgIH0pXG4gICAgICBpZiAoIWRldmljZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICAgICAgfVxuXG4gICAgICBkZXZpY2UuYWRkRXZlbnRMaXN0ZW5lcignZ2F0dHNlcnZlcmRpc2Nvbm5lY3RlZCcsIG9uRGlzY29ubmVjdGVkKVxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IGRldmljZS5nYXR0LmNvbm5lY3QoKVxuICAgICAgY29uc3QgdGVtcGVyYXR1cmVTZXJ2aWNlID0gYXdhaXQgc2VydmVyLmdldFByaW1hcnlTZXJ2aWNlKEFEQUZSVUlUX1RFTVBFUkFUVVJFX1NFUlZJQ0VfVVVJRClcbiAgICAgIGNvbnN0IHRlbXBDaGFyYWN0ZXJpc3RpYyA9IGF3YWl0IHRlbXBlcmF0dXJlU2VydmljZS5nZXRDaGFyYWN0ZXJpc3RpYyhBREFGUlVJVF9URU1QRVJBVFVSRV9DSEFSQUNURVJJU1RJQ19VVUlEKVxuXG4gICAgICBhd2FpdCB0ZW1wQ2hhcmFjdGVyaXN0aWMuc3RhcnROb3RpZmljYXRpb25zKClcbiAgICAgIHRlbXBDaGFyYWN0ZXJpc3RpYy5hZGRFdmVudExpc3RlbmVyKCdjaGFyYWN0ZXJpc3RpY3ZhbHVlY2hhbmdlZCcsIG5vdGlmeUV2ZW50Q2hhbmdlKVxuXG4gICAgICBzZXRDb25uZWN0ZWREZXZpY2Uoc2VydmVyKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1pbi1oLXNjcmVlbiBtaW4tdy1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgPGgyPkxvYWRpbmcuLi48L2gyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtaW4taC1zY3JlZW4gbWluLXctc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICB7Y29ubmVjdGVkRGV2aWNlID09PSBudWxsXG4gICAgICAgID8gKDxidXR0b24gb25DbGljaz17Y29ubmVjdFRvRGV2aWNlfSBjbGFzc05hbWU9J2J0bic+Q29ubmVjdDwvYnV0dG9uPilcbiAgICAgICAgOiAoPGRpdj57Y29ubmVjdGVkRGV2aWNlLm5hbWV9PC9kaXY+KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQURBRlJVSVRfVEVNUEVSQVRVUkVfU0VSVklDRV9VVUlEIiwidG9Mb3dlckNhc2UiLCJBREFGUlVJVF9URU1QRVJBVFVSRV9DSEFSQUNURVJJU1RJQ19VVUlEIiwiSG9tZSIsInN1cHBvcnRzQmxlIiwic2V0U3VwcG9ydHNCbGUiLCJjb25uZWN0ZWREZXZpY2UiLCJzZXRDb25uZWN0ZWREZXZpY2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0ZW1wZXJhdHVyZSIsInNldFRlbXBlcmF0dXJlIiwibmF2aWdhdG9yIiwiYmx1ZXRvb3RoIiwib25EaXNjb25uZWN0ZWQiLCJldmVudCIsIm5vdGlmeUV2ZW50Q2hhbmdlIiwiZSIsInZhbCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImdldEZsb2F0MzIiLCJjb25uZWN0VG9EZXZpY2UiLCJkZXZpY2UiLCJzZXJ2ZXIiLCJ0ZW1wZXJhdHVyZVNlcnZpY2UiLCJ0ZW1wQ2hhcmFjdGVyaXN0aWMiLCJyZXF1ZXN0RGV2aWNlIiwiZmlsdGVycyIsIm5hbWVQcmVmaXgiLCJvcHRpb25hbFNlcnZpY2VzIiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2F0dCIsImNvbm5lY3QiLCJnZXRQcmltYXJ5U2VydmljZSIsImdldENoYXJhY3RlcmlzdGljIiwic3RhcnROb3RpZmljYXRpb25zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});