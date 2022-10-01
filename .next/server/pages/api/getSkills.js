"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getSkills";
exports.ids = ["pages/api/getSkills"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getSkills.ts":
/*!********************************!*\
  !*** ./pages/api/getSkills.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\n    *[_type == \"skill\"]\n`;\nasync function handler(req, res) {\n    const skills = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        skills\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2tpbGxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUM7QUFDUztBQUc1QyxNQUFNRSxLQUFLLEdBQUdGLDZDQUFJLENBQUM7O0FBRW5CLENBQUM7QUFNYyxlQUFlRyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNQyxNQUFNLEdBQVksTUFBTUwsdURBQWtCLENBQUNDLEtBQUssQ0FBQztJQUV2REcsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFSCxNQUFNO0tBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWJyaWVsZ2lhbmdpX3BvcnRmb2xpby8uL3BhZ2VzL2FwaS9nZXRTa2lsbHMudHM/YTZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ3JvcSB9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xuaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiO1xuaW1wb3J0IHsgU2tpbGwgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgXG4gICAgKltfdHlwZSA9PSBcInNraWxsXCJdXG5gO1xuXG50eXBlIERhdGEgPSB7XG4gIHNraWxsczogU2tpbGxbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgY29uc3Qgc2tpbGxzOiBTa2lsbFtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNraWxscyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJncm9xIiwic2FuaXR5Q2xpZW50IiwicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2tpbGxzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSkills.ts\n");

/***/ }),

/***/ "(api)/./sanity.ts":
/*!*******************!*\
  !*** ./sanity.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"4ven4b52\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\nconst urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNXO0FBRS9DLE1BQU1FLE1BQU0sR0FBRztJQUNwQkMsT0FBTyxFQUFFQyxZQUFzQyxJQUFJLENBQVk7SUFDL0RHLFNBQVMsRUFBRUgsVUFBeUM7SUFDcERLLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxNQUFNLEVBQUVOLGFBUEcsS0FPc0IsWUFBWTtDQUM5QyxDQUFDO0FBRUssTUFBTU8sWUFBWSxHQUFHWCx5REFBWSxDQUFDRSxNQUFNLENBQUMsQ0FBQztBQUUxQyxNQUFNVSxNQUFNLEdBQUcsQ0FBQ0MsTUFBVyxHQUNoQ1osd0RBQXFCLENBQUNDLE1BQU0sQ0FBQyxDQUFDWSxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FicmllbGdpYW5naV9wb3J0Zm9saW8vLi9zYW5pdHkudHM/MTAzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcbmltcG9ydCBjcmVhdGVJbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8IFwicHJvZHVjdGlvblwiLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEISxcbiAgYXBpVmVyc2lvbjogXCIyMDIxLTAzLTI1XCIsXG4gIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpO1xuXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZTogYW55KSA9PlxuICBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0ZUltYWdlVXJsQnVpbGRlciIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJzYW5pdHlDbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./sanity.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSkills.ts"));
module.exports = __webpack_exports__;

})();