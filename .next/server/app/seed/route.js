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
exports.id = "app/seed/route";
exports.ids = ["app/seed/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fseed%2Froute&page=%2Fseed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fseed%2Froute.ts&appDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fseed%2Froute&page=%2Fseed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fseed%2Froute.ts&appDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_23481_Documents_Web_Development_finance_nextjs_dashboard_app_seed_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/seed/route.ts */ \"(rsc)/./app/seed/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([C_Users_23481_Documents_Web_Development_finance_nextjs_dashboard_app_seed_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\nC_Users_23481_Documents_Web_Development_finance_nextjs_dashboard_app_seed_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n// We inject the nextConfigOutput here so that we can use them in the route\r\n// module.\r\nconst nextConfigOutput = \"\"\r\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\r\n    definition: {\r\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\r\n        page: \"/seed/route\",\r\n        pathname: \"/seed\",\r\n        filename: \"route\",\r\n        bundlePath: \"app/seed/route\"\r\n    },\r\n    resolvedPagePath: \"C:\\\\Users\\\\23481\\\\Documents\\\\Web Development\\\\finance\\\\nextjs-dashboard\\\\app\\\\seed\\\\route.ts\",\r\n    nextConfigOutput,\r\n    userland: C_Users_23481_Documents_Web_Development_finance_nextjs_dashboard_app_seed_route_ts__WEBPACK_IMPORTED_MODULE_3__\r\n});\r\n// Pull out the exports that we need to expose from the module. This should\r\n// be eliminated when we've moved the other routes to the new format. These\r\n// are used to hook into the route.\r\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\r\nfunction patchFetch() {\r\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\r\n        staticGenerationAsyncStorage,\r\n        requestAsyncStorage\r\n    });\r\n}\r\n\r\n\r\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4wLjAtY2FuYXJ5LjU2X3JlYWN0LWRvbUAxOS4wLjAtcmMtZjM4YzIyYjI0NC0yMDI0MDcwNF9yZWFjdEAxOS4wLjAtcmMtZjM4YzIyYjI0NC0yMDI0X21hNXptcWF4cWlvNWZuZHlsNXF5NTJqeWc0L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtYXBwLWxvYWRlci5qcz9uYW1lPWFwcCUyRnNlZWQlMkZyb3V0ZSZwYWdlPSUyRnNlZWQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZzZWVkJTJGcm91dGUudHMmYXBwRGlyPUMlM0ElNUNVc2VycyU1QzIzNDgxJTVDRG9jdW1lbnRzJTVDV2ViJTIwRGV2ZWxvcG1lbnQlNUNmaW5hbmNlJTVDbmV4dGpzLWRhc2hib2FyZCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDMjM0ODElNUNEb2N1bWVudHMlNUNXZWIlMjBEZXZlbG9wbWVudCU1Q2ZpbmFuY2UlNUNuZXh0anMtZGFzaGJvYXJkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM0QztBQUN6SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNxRztBQUNyRztBQUNBLHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz83MWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcclxuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xyXG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XHJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFwyMzQ4MVxcXFxEb2N1bWVudHNcXFxcV2ViIERldmVsb3BtZW50XFxcXGZpbmFuY2VcXFxcbmV4dGpzLWRhc2hib2FyZFxcXFxhcHBcXFxcc2VlZFxcXFxyb3V0ZS50c1wiO1xyXG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcclxuLy8gbW9kdWxlLlxyXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxyXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcclxuICAgIGRlZmluaXRpb246IHtcclxuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxyXG4gICAgICAgIHBhZ2U6IFwiL3NlZWQvcm91dGVcIixcclxuICAgICAgICBwYXRobmFtZTogXCIvc2VlZFwiLFxyXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXHJcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvc2VlZC9yb3V0ZVwiXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFwyMzQ4MVxcXFxEb2N1bWVudHNcXFxcV2ViIERldmVsb3BtZW50XFxcXGZpbmFuY2VcXFxcbmV4dGpzLWRhc2hib2FyZFxcXFxhcHBcXFxcc2VlZFxcXFxyb3V0ZS50c1wiLFxyXG4gICAgbmV4dENvbmZpZ091dHB1dCxcclxuICAgIHVzZXJsYW5kXHJcbn0pO1xyXG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcclxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXHJcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXHJcbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xyXG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xyXG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcclxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLFxyXG4gICAgICAgIHJlcXVlc3RBc3luY1N0b3JhZ2VcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fseed%2Froute&page=%2Fseed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fseed%2Froute.ts&appDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/lib/placeholder-data.ts":
/*!*************************************!*\
  !*** ./app/lib/placeholder-data.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customers: () => (/* binding */ customers),\n/* harmony export */   invoices: () => (/* binding */ invoices),\n/* harmony export */   revenue: () => (/* binding */ revenue),\n/* harmony export */   users: () => (/* binding */ users)\n/* harmony export */ });\n// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:\n// https://nextjs.org/learn/dashboard-app/fetching-data\nconst users = [\n    {\n        id: '410544b2-4001-4271-9855-fec4b6a6442a',\n        name: 'User',\n        email: 'user@nextmail.com',\n        password: '123456'\n    }\n];\nconst customers = [\n    {\n        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',\n        name: 'Evil Rabbit',\n        email: 'evil@rabbit.com',\n        image_url: '/customers/evil-rabbit.png'\n    },\n    {\n        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',\n        name: 'Delba de Oliveira',\n        email: 'delba@oliveira.com',\n        image_url: '/customers/delba-de-oliveira.png'\n    },\n    {\n        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',\n        name: 'Lee Robinson',\n        email: 'lee@robinson.com',\n        image_url: '/customers/lee-robinson.png'\n    },\n    {\n        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',\n        name: 'Michael Novotny',\n        email: 'michael@novotny.com',\n        image_url: '/customers/michael-novotny.png'\n    },\n    {\n        id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',\n        name: 'Amy Burns',\n        email: 'amy@burns.com',\n        image_url: '/customers/amy-burns.png'\n    },\n    {\n        id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',\n        name: 'Balazs Orban',\n        email: 'balazs@orban.com',\n        image_url: '/customers/balazs-orban.png'\n    }\n];\nconst invoices = [\n    {\n        customer_id: customers[0].id,\n        amount: 15795,\n        status: 'pending',\n        date: '2022-12-06'\n    },\n    {\n        customer_id: customers[1].id,\n        amount: 20348,\n        status: 'pending',\n        date: '2022-11-14'\n    },\n    {\n        customer_id: customers[4].id,\n        amount: 3040,\n        status: 'paid',\n        date: '2022-10-29'\n    },\n    {\n        customer_id: customers[3].id,\n        amount: 44800,\n        status: 'paid',\n        date: '2023-09-10'\n    },\n    {\n        customer_id: customers[5].id,\n        amount: 34577,\n        status: 'pending',\n        date: '2023-08-05'\n    },\n    {\n        customer_id: customers[2].id,\n        amount: 54246,\n        status: 'pending',\n        date: '2023-07-16'\n    },\n    {\n        customer_id: customers[0].id,\n        amount: 666,\n        status: 'pending',\n        date: '2023-06-27'\n    },\n    {\n        customer_id: customers[3].id,\n        amount: 32545,\n        status: 'paid',\n        date: '2023-06-09'\n    },\n    {\n        customer_id: customers[4].id,\n        amount: 1250,\n        status: 'paid',\n        date: '2023-06-17'\n    },\n    {\n        customer_id: customers[5].id,\n        amount: 8546,\n        status: 'paid',\n        date: '2023-06-07'\n    },\n    {\n        customer_id: customers[1].id,\n        amount: 500,\n        status: 'paid',\n        date: '2023-08-19'\n    },\n    {\n        customer_id: customers[5].id,\n        amount: 8945,\n        status: 'paid',\n        date: '2023-06-03'\n    },\n    {\n        customer_id: customers[2].id,\n        amount: 1000,\n        status: 'paid',\n        date: '2022-06-05'\n    }\n];\nconst revenue = [\n    {\n        month: 'Jan',\n        revenue: 2000\n    },\n    {\n        month: 'Feb',\n        revenue: 1800\n    },\n    {\n        month: 'Mar',\n        revenue: 2200\n    },\n    {\n        month: 'Apr',\n        revenue: 2500\n    },\n    {\n        month: 'May',\n        revenue: 2300\n    },\n    {\n        month: 'Jun',\n        revenue: 3200\n    },\n    {\n        month: 'Jul',\n        revenue: 3500\n    },\n    {\n        month: 'Aug',\n        revenue: 3700\n    },\n    {\n        month: 'Sep',\n        revenue: 2500\n    },\n    {\n        month: 'Oct',\n        revenue: 2800\n    },\n    {\n        month: 'Nov',\n        revenue: 3000\n    },\n    {\n        month: 'Dec',\n        revenue: 4800\n    }\n];\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3BsYWNlaG9sZGVyLWRhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRHQUE0RztBQUM1Ryx1REFBdUQ7QUFDdkQsTUFBTUEsUUFBUTtJQUNaO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtDQUNEO0FBRUQsTUFBTUMsWUFBWTtJQUNoQjtRQUNFSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQRyxXQUFXO0lBQ2I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQRyxXQUFXO0lBQ2I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQRyxXQUFXO0lBQ2I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQRyxXQUFXO0lBQ2I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQRyxXQUFXO0lBQ2I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQRyxXQUFXO0lBQ2I7Q0FDRDtBQUVELE1BQU1DLFdBQVc7SUFDZjtRQUNFQyxhQUFhSCxTQUFTLENBQUMsRUFBRSxDQUFDSixFQUFFO1FBQzVCUSxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsYUFBYUgsU0FBUyxDQUFDLEVBQUUsQ0FBQ0osRUFBRTtRQUM1QlEsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBO1FBQ0VILGFBQWFILFNBQVMsQ0FBQyxFQUFFLENBQUNKLEVBQUU7UUFDNUJRLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxhQUFhSCxTQUFTLENBQUMsRUFBRSxDQUFDSixFQUFFO1FBQzVCUSxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsYUFBYUgsU0FBUyxDQUFDLEVBQUUsQ0FBQ0osRUFBRTtRQUM1QlEsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBO1FBQ0VILGFBQWFILFNBQVMsQ0FBQyxFQUFFLENBQUNKLEVBQUU7UUFDNUJRLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxhQUFhSCxTQUFTLENBQUMsRUFBRSxDQUFDSixFQUFFO1FBQzVCUSxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsYUFBYUgsU0FBUyxDQUFDLEVBQUUsQ0FBQ0osRUFBRTtRQUM1QlEsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBO1FBQ0VILGFBQWFILFNBQVMsQ0FBQyxFQUFFLENBQUNKLEVBQUU7UUFDNUJRLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxhQUFhSCxTQUFTLENBQUMsRUFBRSxDQUFDSixFQUFFO1FBQzVCUSxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsYUFBYUgsU0FBUyxDQUFDLEVBQUUsQ0FBQ0osRUFBRTtRQUM1QlEsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBO1FBQ0VILGFBQWFILFNBQVMsQ0FBQyxFQUFFLENBQUNKLEVBQUU7UUFDNUJRLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxhQUFhSCxTQUFTLENBQUMsRUFBRSxDQUFDSixFQUFFO1FBQzVCUSxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxVQUFVO0lBQ2Q7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7SUFDOUI7UUFBRUMsT0FBTztRQUFPRCxTQUFTO0lBQUs7Q0FDL0I7QUFFOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGliL3BsYWNlaG9sZGVyLWRhdGEudHM/YmMxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgY29udGFpbnMgcGxhY2Vob2xkZXIgZGF0YSB0aGF0IHlvdSdsbCBiZSByZXBsYWNpbmcgd2l0aCByZWFsIGRhdGEgaW4gdGhlIERhdGEgRmV0Y2hpbmcgY2hhcHRlcjpcclxuLy8gaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Rhc2hib2FyZC1hcHAvZmV0Y2hpbmctZGF0YVxyXG5jb25zdCB1c2VycyA9IFtcclxuICB7XHJcbiAgICBpZDogJzQxMDU0NGIyLTQwMDEtNDI3MS05ODU1LWZlYzRiNmE2NDQyYScsXHJcbiAgICBuYW1lOiAnVXNlcicsXHJcbiAgICBlbWFpbDogJ3VzZXJAbmV4dG1haWwuY29tJyxcclxuICAgIHBhc3N3b3JkOiAnMTIzNDU2JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VzdG9tZXJzID0gW1xyXG4gIHtcclxuICAgIGlkOiAnZDZlMTU3MjctOWZlMS00OTYxLThjNWItZWE0NGE5YmQ4MWFhJyxcclxuICAgIG5hbWU6ICdFdmlsIFJhYmJpdCcsXHJcbiAgICBlbWFpbDogJ2V2aWxAcmFiYml0LmNvbScsXHJcbiAgICBpbWFnZV91cmw6ICcvY3VzdG9tZXJzL2V2aWwtcmFiYml0LnBuZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzM5NThkYzllLTcxMmYtNDM3Ny04NWU5LWZlYzRiNmE2NDQyYScsXHJcbiAgICBuYW1lOiAnRGVsYmEgZGUgT2xpdmVpcmEnLFxyXG4gICAgZW1haWw6ICdkZWxiYUBvbGl2ZWlyYS5jb20nLFxyXG4gICAgaW1hZ2VfdXJsOiAnL2N1c3RvbWVycy9kZWxiYS1kZS1vbGl2ZWlyYS5wbmcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICczOTU4ZGM5ZS03NDJmLTQzNzctODVlOS1mZWM0YjZhNjQ0MmEnLFxyXG4gICAgbmFtZTogJ0xlZSBSb2JpbnNvbicsXHJcbiAgICBlbWFpbDogJ2xlZUByb2JpbnNvbi5jb20nLFxyXG4gICAgaW1hZ2VfdXJsOiAnL2N1c3RvbWVycy9sZWUtcm9iaW5zb24ucG5nJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNzZkNjVjMjYtZjc4NC00NGEyLWFjMTktNTg2Njc4ZjdjMmYyJyxcclxuICAgIG5hbWU6ICdNaWNoYWVsIE5vdm90bnknLFxyXG4gICAgZW1haWw6ICdtaWNoYWVsQG5vdm90bnkuY29tJyxcclxuICAgIGltYWdlX3VybDogJy9jdXN0b21lcnMvbWljaGFlbC1ub3ZvdG55LnBuZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ0NDMjdDMTRBLTBBQ0YtNEY0QS1BNkM5LUQ0NTY4MkMxNDRCOScsXHJcbiAgICBuYW1lOiAnQW15IEJ1cm5zJyxcclxuICAgIGVtYWlsOiAnYW15QGJ1cm5zLmNvbScsXHJcbiAgICBpbWFnZV91cmw6ICcvY3VzdG9tZXJzL2FteS1idXJucy5wbmcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcxM0QwNzUzNS1DNTlFLTQxNTctQTAxMS1GOEQyRUY0RTBDQkInLFxyXG4gICAgbmFtZTogJ0JhbGF6cyBPcmJhbicsXHJcbiAgICBlbWFpbDogJ2JhbGF6c0BvcmJhbi5jb20nLFxyXG4gICAgaW1hZ2VfdXJsOiAnL2N1c3RvbWVycy9iYWxhenMtb3JiYW4ucG5nJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgaW52b2ljZXMgPSBbXHJcbiAge1xyXG4gICAgY3VzdG9tZXJfaWQ6IGN1c3RvbWVyc1swXS5pZCxcclxuICAgIGFtb3VudDogMTU3OTUsXHJcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgIGRhdGU6ICcyMDIyLTEyLTA2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcnNbMV0uaWQsXHJcbiAgICBhbW91bnQ6IDIwMzQ4LFxyXG4gICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICBkYXRlOiAnMjAyMi0xMS0xNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJzWzRdLmlkLFxyXG4gICAgYW1vdW50OiAzMDQwLFxyXG4gICAgc3RhdHVzOiAncGFpZCcsXHJcbiAgICBkYXRlOiAnMjAyMi0xMC0yOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJzWzNdLmlkLFxyXG4gICAgYW1vdW50OiA0NDgwMCxcclxuICAgIHN0YXR1czogJ3BhaWQnLFxyXG4gICAgZGF0ZTogJzIwMjMtMDktMTAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY3VzdG9tZXJfaWQ6IGN1c3RvbWVyc1s1XS5pZCxcclxuICAgIGFtb3VudDogMzQ1NzcsXHJcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgIGRhdGU6ICcyMDIzLTA4LTA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcnNbMl0uaWQsXHJcbiAgICBhbW91bnQ6IDU0MjQ2LFxyXG4gICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICBkYXRlOiAnMjAyMy0wNy0xNicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJzWzBdLmlkLFxyXG4gICAgYW1vdW50OiA2NjYsXHJcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgIGRhdGU6ICcyMDIzLTA2LTI3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcnNbM10uaWQsXHJcbiAgICBhbW91bnQ6IDMyNTQ1LFxyXG4gICAgc3RhdHVzOiAncGFpZCcsXHJcbiAgICBkYXRlOiAnMjAyMy0wNi0wOScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJzWzRdLmlkLFxyXG4gICAgYW1vdW50OiAxMjUwLFxyXG4gICAgc3RhdHVzOiAncGFpZCcsXHJcbiAgICBkYXRlOiAnMjAyMy0wNi0xNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJzWzVdLmlkLFxyXG4gICAgYW1vdW50OiA4NTQ2LFxyXG4gICAgc3RhdHVzOiAncGFpZCcsXHJcbiAgICBkYXRlOiAnMjAyMy0wNi0wNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjdXN0b21lcl9pZDogY3VzdG9tZXJzWzFdLmlkLFxyXG4gICAgYW1vdW50OiA1MDAsXHJcbiAgICBzdGF0dXM6ICdwYWlkJyxcclxuICAgIGRhdGU6ICcyMDIzLTA4LTE5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcnNbNV0uaWQsXHJcbiAgICBhbW91bnQ6IDg5NDUsXHJcbiAgICBzdGF0dXM6ICdwYWlkJyxcclxuICAgIGRhdGU6ICcyMDIzLTA2LTAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGN1c3RvbWVyX2lkOiBjdXN0b21lcnNbMl0uaWQsXHJcbiAgICBhbW91bnQ6IDEwMDAsXHJcbiAgICBzdGF0dXM6ICdwYWlkJyxcclxuICAgIGRhdGU6ICcyMDIyLTA2LTA1JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcmV2ZW51ZSA9IFtcclxuICB7IG1vbnRoOiAnSmFuJywgcmV2ZW51ZTogMjAwMCB9LFxyXG4gIHsgbW9udGg6ICdGZWInLCByZXZlbnVlOiAxODAwIH0sXHJcbiAgeyBtb250aDogJ01hcicsIHJldmVudWU6IDIyMDAgfSxcclxuICB7IG1vbnRoOiAnQXByJywgcmV2ZW51ZTogMjUwMCB9LFxyXG4gIHsgbW9udGg6ICdNYXknLCByZXZlbnVlOiAyMzAwIH0sXHJcbiAgeyBtb250aDogJ0p1bicsIHJldmVudWU6IDMyMDAgfSxcclxuICB7IG1vbnRoOiAnSnVsJywgcmV2ZW51ZTogMzUwMCB9LFxyXG4gIHsgbW9udGg6ICdBdWcnLCByZXZlbnVlOiAzNzAwIH0sXHJcbiAgeyBtb250aDogJ1NlcCcsIHJldmVudWU6IDI1MDAgfSxcclxuICB7IG1vbnRoOiAnT2N0JywgcmV2ZW51ZTogMjgwMCB9LFxyXG4gIHsgbW9udGg6ICdOb3YnLCByZXZlbnVlOiAzMDAwIH0sXHJcbiAgeyBtb250aDogJ0RlYycsIHJldmVudWU6IDQ4MDAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7IHVzZXJzLCBjdXN0b21lcnMsIGludm9pY2VzLCByZXZlbnVlIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VycyIsImlkIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjdXN0b21lcnMiLCJpbWFnZV91cmwiLCJpbnZvaWNlcyIsImN1c3RvbWVyX2lkIiwiYW1vdW50Iiwic3RhdHVzIiwiZGF0ZSIsInJldmVudWUiLCJtb250aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/placeholder-data.ts\n");

/***/ }),

/***/ "(rsc)/./app/seed/route.ts":
/*!***************************!*\
  !*** ./app/seed/route.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vercel_postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vercel/postgres */ \"(rsc)/./node_modules/.pnpm/@vercel+postgres@0.8.0/node_modules/@vercel/postgres/dist/index-node.js\");\n/* harmony import */ var _lib_placeholder_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/placeholder-data */ \"(rsc)/./app/lib/placeholder-data.ts\");\n\n\n\nconst client = await _vercel_postgres__WEBPACK_IMPORTED_MODULE_1__.db.connect();\nasync function seedUsers() {\n    await client.sql`CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\"`;\n    await client.sql`\r\n    CREATE TABLE IF NOT EXISTS users (\r\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\r\n      name VARCHAR(255) NOT NULL,\r\n      email TEXT NOT NULL UNIQUE,\r\n      password TEXT NOT NULL\r\n    );\r\n  `;\n    const insertedUsers = await Promise.all(_lib_placeholder_data__WEBPACK_IMPORTED_MODULE_2__.users.map(async (user)=>{\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(user.password, 10);\n        return client.sql`\r\n        INSERT INTO users (id, name, email, password)\r\n        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})\r\n        ON CONFLICT (id) DO NOTHING;\r\n      `;\n    }));\n    return insertedUsers;\n}\nasync function seedInvoices() {\n    await client.sql`CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\"`;\n    await client.sql`\r\n    CREATE TABLE IF NOT EXISTS invoices (\r\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\r\n      customer_id UUID NOT NULL,\r\n      amount INT NOT NULL,\r\n      status VARCHAR(255) NOT NULL,\r\n      date DATE NOT NULL\r\n    );\r\n  `;\n    const insertedInvoices = await Promise.all(_lib_placeholder_data__WEBPACK_IMPORTED_MODULE_2__.invoices.map((invoice)=>client.sql`\r\n        INSERT INTO invoices (customer_id, amount, status, date)\r\n        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})\r\n        ON CONFLICT (id) DO NOTHING;\r\n      `));\n    return insertedInvoices;\n}\nasync function seedCustomers() {\n    await client.sql`CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\"`;\n    await client.sql`\r\n    CREATE TABLE IF NOT EXISTS customers (\r\n      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,\r\n      name VARCHAR(255) NOT NULL,\r\n      email VARCHAR(255) NOT NULL,\r\n      image_url VARCHAR(255) NOT NULL\r\n    );\r\n  `;\n    const insertedCustomers = await Promise.all(_lib_placeholder_data__WEBPACK_IMPORTED_MODULE_2__.customers.map((customer)=>client.sql`\r\n        INSERT INTO customers (id, name, email, image_url)\r\n        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})\r\n        ON CONFLICT (id) DO NOTHING;\r\n      `));\n    return insertedCustomers;\n}\nasync function seedRevenue() {\n    await client.sql`\r\n    CREATE TABLE IF NOT EXISTS revenue (\r\n      month VARCHAR(4) NOT NULL UNIQUE,\r\n      revenue INT NOT NULL\r\n    );\r\n  `;\n    const insertedRevenue = await Promise.all(_lib_placeholder_data__WEBPACK_IMPORTED_MODULE_2__.revenue.map((rev)=>client.sql`\r\n        INSERT INTO revenue (month, revenue)\r\n        VALUES (${rev.month}, ${rev.revenue})\r\n        ON CONFLICT (month) DO NOTHING;\r\n      `));\n    return insertedRevenue;\n}\nasync function GET() {\n    try {\n        await client.sql`BEGIN`;\n        await seedUsers();\n        await seedCustomers();\n        await seedInvoices();\n        await seedRevenue();\n        await client.sql`COMMIT`;\n        return Response.json({\n            message: 'Database seeded successfully'\n        });\n    } catch (error) {\n        await client.sql`ROLLBACK`;\n        return Response.json({\n            error\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvc2VlZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDVTtBQUN3QztBQUU5RSxNQUFNTSxTQUFTLE1BQU1MLGdEQUFFQSxDQUFDTSxPQUFPO0FBRS9CLGVBQWVDO0lBQ2IsTUFBTUYsT0FBT0csR0FBRyxDQUFDLDBDQUEwQyxDQUFDO0lBQzVELE1BQU1ILE9BQU9HLEdBQUcsQ0FBQzs7Ozs7OztFQU9qQixDQUFDO0lBRUQsTUFBTUMsZ0JBQWdCLE1BQU1DLFFBQVFDLEdBQUcsQ0FDckNQLHdEQUFLQSxDQUFDUSxHQUFHLENBQUMsT0FBT0M7UUFDZixNQUFNQyxpQkFBaUIsTUFBTWYsa0RBQVcsQ0FBQ2MsS0FBS0csUUFBUSxFQUFFO1FBQ3hELE9BQU9YLE9BQU9HLEdBQUcsQ0FBQzs7Z0JBRVIsRUFBRUssS0FBS0ksRUFBRSxDQUFDLEVBQUUsRUFBRUosS0FBS0ssSUFBSSxDQUFDLEVBQUUsRUFBRUwsS0FBS00sS0FBSyxDQUFDLEVBQUUsRUFBRUwsZUFBZTs7TUFFcEUsQ0FBQztJQUNIO0lBR0YsT0FBT0w7QUFDVDtBQUVBLGVBQWVXO0lBQ2IsTUFBTWYsT0FBT0csR0FBRyxDQUFDLDBDQUEwQyxDQUFDO0lBRTVELE1BQU1ILE9BQU9HLEdBQUcsQ0FBQzs7Ozs7Ozs7RUFRakIsQ0FBQztJQUVELE1BQU1hLG1CQUFtQixNQUFNWCxRQUFRQyxHQUFHLENBQ3hDViwyREFBUUEsQ0FBQ1csR0FBRyxDQUNWLENBQUNVLFVBQVlqQixPQUFPRyxHQUFHLENBQUM7O2dCQUVkLEVBQUVjLFFBQVFDLFdBQVcsQ0FBQyxFQUFFLEVBQUVELFFBQVFFLE1BQU0sQ0FBQyxFQUFFLEVBQUVGLFFBQVFHLE1BQU0sQ0FBQyxFQUFFLEVBQUVILFFBQVFJLElBQUksQ0FBQzs7TUFFdkYsQ0FBQztJQUlMLE9BQU9MO0FBQ1Q7QUFFQSxlQUFlTTtJQUNiLE1BQU10QixPQUFPRyxHQUFHLENBQUMsMENBQTBDLENBQUM7SUFFNUQsTUFBTUgsT0FBT0csR0FBRyxDQUFDOzs7Ozs7O0VBT2pCLENBQUM7SUFFRCxNQUFNb0Isb0JBQW9CLE1BQU1sQixRQUFRQyxHQUFHLENBQ3pDVCw0REFBU0EsQ0FBQ1UsR0FBRyxDQUNYLENBQUNpQixXQUFheEIsT0FBT0csR0FBRyxDQUFDOztnQkFFZixFQUFFcUIsU0FBU1osRUFBRSxDQUFDLEVBQUUsRUFBRVksU0FBU1gsSUFBSSxDQUFDLEVBQUUsRUFBRVcsU0FBU1YsS0FBSyxDQUFDLEVBQUUsRUFBRVUsU0FBU0MsU0FBUyxDQUFDOztNQUVwRixDQUFDO0lBSUwsT0FBT0Y7QUFDVDtBQUVBLGVBQWVHO0lBQ2IsTUFBTTFCLE9BQU9HLEdBQUcsQ0FBQzs7Ozs7RUFLakIsQ0FBQztJQUVELE1BQU13QixrQkFBa0IsTUFBTXRCLFFBQVFDLEdBQUcsQ0FDdkNSLDBEQUFPQSxDQUFDUyxHQUFHLENBQ1QsQ0FBQ3FCLE1BQVE1QixPQUFPRyxHQUFHLENBQUM7O2dCQUVWLEVBQUV5QixJQUFJQyxLQUFLLENBQUMsRUFBRSxFQUFFRCxJQUFJOUIsT0FBTyxDQUFDOztNQUV0QyxDQUFDO0lBSUwsT0FBTzZCO0FBQ1Q7QUFFTyxlQUFlRztJQUVwQixJQUFJO1FBQ0YsTUFBTTlCLE9BQU9HLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsTUFBTUQ7UUFDTixNQUFNb0I7UUFDTixNQUFNUDtRQUNOLE1BQU1XO1FBQ04sTUFBTTFCLE9BQU9HLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFeEIsT0FBTzRCLFNBQVNDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQStCO0lBQ2pFLEVBQUUsT0FBT0MsT0FBTztRQUNkLE1BQU1sQyxPQUFPRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzFCLE9BQU80QixTQUFTQyxJQUFJLENBQUM7WUFBRUU7UUFBTSxHQUFHO1lBQUVkLFFBQVE7UUFBSTtJQUNoRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3NlZWQvcm91dGUudHM/MGQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnQHZlcmNlbC9wb3N0Z3Jlcyc7XHJcbmltcG9ydCB7IGludm9pY2VzLCBjdXN0b21lcnMsIHJldmVudWUsIHVzZXJzIH0gZnJvbSAnLi4vbGliL3BsYWNlaG9sZGVyLWRhdGEnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gYXdhaXQgZGIuY29ubmVjdCgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VlZFVzZXJzKCkge1xyXG4gIGF3YWl0IGNsaWVudC5zcWxgQ1JFQVRFIEVYVEVOU0lPTiBJRiBOT1QgRVhJU1RTIFwidXVpZC1vc3NwXCJgO1xyXG4gIGF3YWl0IGNsaWVudC5zcWxgXHJcbiAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXHJcbiAgICAgIGlkIFVVSUQgREVGQVVMVCB1dWlkX2dlbmVyYXRlX3Y0KCkgUFJJTUFSWSBLRVksXHJcbiAgICAgIG5hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxyXG4gICAgICBlbWFpbCBURVhUIE5PVCBOVUxMIFVOSVFVRSxcclxuICAgICAgcGFzc3dvcmQgVEVYVCBOT1QgTlVMTFxyXG4gICAgKTtcclxuICBgO1xyXG5cclxuICBjb25zdCBpbnNlcnRlZFVzZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICB1c2Vycy5tYXAoYXN5bmMgKHVzZXIpID0+IHtcclxuICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh1c2VyLnBhc3N3b3JkLCAxMCk7XHJcbiAgICAgIHJldHVybiBjbGllbnQuc3FsYFxyXG4gICAgICAgIElOU0VSVCBJTlRPIHVzZXJzIChpZCwgbmFtZSwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgIFZBTFVFUyAoJHt1c2VyLmlkfSwgJHt1c2VyLm5hbWV9LCAke3VzZXIuZW1haWx9LCAke2hhc2hlZFBhc3N3b3JkfSlcclxuICAgICAgICBPTiBDT05GTElDVCAoaWQpIERPIE5PVEhJTkc7XHJcbiAgICAgIGA7XHJcbiAgICB9KSxcclxuICApO1xyXG5cclxuICByZXR1cm4gaW5zZXJ0ZWRVc2VycztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VlZEludm9pY2VzKCkge1xyXG4gIGF3YWl0IGNsaWVudC5zcWxgQ1JFQVRFIEVYVEVOU0lPTiBJRiBOT1QgRVhJU1RTIFwidXVpZC1vc3NwXCJgO1xyXG5cclxuICBhd2FpdCBjbGllbnQuc3FsYFxyXG4gICAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgaW52b2ljZXMgKFxyXG4gICAgICBpZCBVVUlEIERFRkFVTFQgdXVpZF9nZW5lcmF0ZV92NCgpIFBSSU1BUlkgS0VZLFxyXG4gICAgICBjdXN0b21lcl9pZCBVVUlEIE5PVCBOVUxMLFxyXG4gICAgICBhbW91bnQgSU5UIE5PVCBOVUxMLFxyXG4gICAgICBzdGF0dXMgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxyXG4gICAgICBkYXRlIERBVEUgTk9UIE5VTExcclxuICAgICk7XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgaW5zZXJ0ZWRJbnZvaWNlcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgaW52b2ljZXMubWFwKFxyXG4gICAgICAoaW52b2ljZSkgPT4gY2xpZW50LnNxbGBcclxuICAgICAgICBJTlNFUlQgSU5UTyBpbnZvaWNlcyAoY3VzdG9tZXJfaWQsIGFtb3VudCwgc3RhdHVzLCBkYXRlKVxyXG4gICAgICAgIFZBTFVFUyAoJHtpbnZvaWNlLmN1c3RvbWVyX2lkfSwgJHtpbnZvaWNlLmFtb3VudH0sICR7aW52b2ljZS5zdGF0dXN9LCAke2ludm9pY2UuZGF0ZX0pXHJcbiAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBOT1RISU5HO1xyXG4gICAgICBgLFxyXG4gICAgKSxcclxuICApO1xyXG5cclxuICByZXR1cm4gaW5zZXJ0ZWRJbnZvaWNlcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VlZEN1c3RvbWVycygpIHtcclxuICBhd2FpdCBjbGllbnQuc3FsYENSRUFURSBFWFRFTlNJT04gSUYgTk9UIEVYSVNUUyBcInV1aWQtb3NzcFwiYDtcclxuXHJcbiAgYXdhaXQgY2xpZW50LnNxbGBcclxuICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGN1c3RvbWVycyAoXHJcbiAgICAgIGlkIFVVSUQgREVGQVVMVCB1dWlkX2dlbmVyYXRlX3Y0KCkgUFJJTUFSWSBLRVksXHJcbiAgICAgIG5hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxyXG4gICAgICBlbWFpbCBWQVJDSEFSKDI1NSkgTk9UIE5VTEwsXHJcbiAgICAgIGltYWdlX3VybCBWQVJDSEFSKDI1NSkgTk9UIE5VTExcclxuICAgICk7XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgaW5zZXJ0ZWRDdXN0b21lcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgIGN1c3RvbWVycy5tYXAoXHJcbiAgICAgIChjdXN0b21lcikgPT4gY2xpZW50LnNxbGBcclxuICAgICAgICBJTlNFUlQgSU5UTyBjdXN0b21lcnMgKGlkLCBuYW1lLCBlbWFpbCwgaW1hZ2VfdXJsKVxyXG4gICAgICAgIFZBTFVFUyAoJHtjdXN0b21lci5pZH0sICR7Y3VzdG9tZXIubmFtZX0sICR7Y3VzdG9tZXIuZW1haWx9LCAke2N1c3RvbWVyLmltYWdlX3VybH0pXHJcbiAgICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBOT1RISU5HO1xyXG4gICAgICBgLFxyXG4gICAgKSxcclxuICApO1xyXG5cclxuICByZXR1cm4gaW5zZXJ0ZWRDdXN0b21lcnM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlZWRSZXZlbnVlKCkge1xyXG4gIGF3YWl0IGNsaWVudC5zcWxgXHJcbiAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyByZXZlbnVlIChcclxuICAgICAgbW9udGggVkFSQ0hBUig0KSBOT1QgTlVMTCBVTklRVUUsXHJcbiAgICAgIHJldmVudWUgSU5UIE5PVCBOVUxMXHJcbiAgICApO1xyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGluc2VydGVkUmV2ZW51ZSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgcmV2ZW51ZS5tYXAoXHJcbiAgICAgIChyZXYpID0+IGNsaWVudC5zcWxgXHJcbiAgICAgICAgSU5TRVJUIElOVE8gcmV2ZW51ZSAobW9udGgsIHJldmVudWUpXHJcbiAgICAgICAgVkFMVUVTICgke3Jldi5tb250aH0sICR7cmV2LnJldmVudWV9KVxyXG4gICAgICAgIE9OIENPTkZMSUNUIChtb250aCkgRE8gTk9USElORztcclxuICAgICAgYCxcclxuICAgICksXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGluc2VydGVkUmV2ZW51ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY2xpZW50LnNxbGBCRUdJTmA7XHJcbiAgICBhd2FpdCBzZWVkVXNlcnMoKTtcclxuICAgIGF3YWl0IHNlZWRDdXN0b21lcnMoKTtcclxuICAgIGF3YWl0IHNlZWRJbnZvaWNlcygpO1xyXG4gICAgYXdhaXQgc2VlZFJldmVudWUoKTtcclxuICAgIGF3YWl0IGNsaWVudC5zcWxgQ09NTUlUYDtcclxuXHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdEYXRhYmFzZSBzZWVkZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYXdhaXQgY2xpZW50LnNxbGBST0xMQkFDS2A7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJkYiIsImludm9pY2VzIiwiY3VzdG9tZXJzIiwicmV2ZW51ZSIsInVzZXJzIiwiY2xpZW50IiwiY29ubmVjdCIsInNlZWRVc2VycyIsInNxbCIsImluc2VydGVkVXNlcnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwidXNlciIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsInBhc3N3b3JkIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJzZWVkSW52b2ljZXMiLCJpbnNlcnRlZEludm9pY2VzIiwiaW52b2ljZSIsImN1c3RvbWVyX2lkIiwiYW1vdW50Iiwic3RhdHVzIiwiZGF0ZSIsInNlZWRDdXN0b21lcnMiLCJpbnNlcnRlZEN1c3RvbWVycyIsImN1c3RvbWVyIiwiaW1hZ2VfdXJsIiwic2VlZFJldmVudWUiLCJpbnNlcnRlZFJldmVudWUiLCJyZXYiLCJtb250aCIsIkdFVCIsIlJlc3BvbnNlIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/seed/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4","vendor-chunks/@vercel+postgres@0.8.0","vendor-chunks/node_modules"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-2024_ma5zmqaxqio5fndyl5qy52jyg4/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fseed%2Froute&page=%2Fseed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fseed%2Froute.ts&appDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C23481%5CDocuments%5CWeb%20Development%5Cfinance%5Cnextjs-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();