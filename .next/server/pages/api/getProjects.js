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
exports.id = "pages/api/getProjects";
exports.ids = ["pages/api/getProjects"];
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

/***/ "(api)/./pages/api/getProjects.ts":
/*!**********************************!*\
  !*** ./pages/api/getProjects.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\n    *[_type == \"project\"] {\n      ...,\n      technologies[]->\n    }\n`;\nasync function handler(req, res) {\n    const projects = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        projects\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNtQztBQUNTO0FBRzVDLE1BQU1FLEtBQUssR0FBR0YsNkNBQUksQ0FBQzs7Ozs7QUFLbkIsQ0FBQztBQU1jLGVBQWVHLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBLE1BQU1DLFFBQVEsR0FBYyxNQUFNTCx1REFBa0IsQ0FBQ0MsS0FBSyxDQUFDO0lBRTNERyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVILFFBQVE7S0FBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhYnJpZWxnaWFuZ2lfcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2dldFByb2plY3RzLnRzP2U4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdyb3EgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcbmltcG9ydCB7IHNhbml0eUNsaWVudCB9IGZyb20gXCIuLi8uLi9zYW5pdHlcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgXG4gICAgKltfdHlwZSA9PSBcInByb2plY3RcIl0ge1xuICAgICAgLi4uLFxuICAgICAgdGVjaG5vbG9naWVzW10tPlxuICAgIH1cbmA7XG5cbnR5cGUgRGF0YSA9IHtcbiAgcHJvamVjdHM6IFByb2plY3RbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgY29uc3QgcHJvamVjdHM6IFByb2plY3RbXSA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwcm9qZWN0cyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJncm9xIiwic2FuaXR5Q2xpZW50IiwicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJvamVjdHMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getProjects.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getProjects.ts"));
module.exports = __webpack_exports__;

})();