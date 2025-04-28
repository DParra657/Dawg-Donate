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
exports.id = "app/api/public-items/route";
exports.ids = ["app/api/public-items/route"];
exports.modules = {

/***/ "(rsc)/./app/api/public-items/route.ts":
/*!***************************************!*\
  !*** ./app/api/public-items/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/mongodb */ \"(rsc)/./config/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n\n\n\nasync function GET() {\n    try {\n        await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const users = await _models_User__WEBPACK_IMPORTED_MODULE_2__.User.find({\n            \"items.isPublic\": true\n        });\n        const publicItems = users.flatMap((user)=>user.items.filter((item)=>item.isPublic).map((item)=>({\n                    id: item._id.toString(),\n                    title: item.title,\n                    image: item.image,\n                    owner: user.email\n                })));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(publicItems, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error fetching public items:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3B1YmxpYy1pdGVtcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ0c7QUFDVDtBQUU5QixlQUFlRztJQUNwQixJQUFJO1FBQ0YsTUFBTUYsMkRBQWNBO1FBQ3BCLE1BQU1HLFFBQVEsTUFBTUYsOENBQUlBLENBQUNHLElBQUksQ0FBQztZQUFFLGtCQUFrQjtRQUFLO1FBRXZELE1BQU1DLGNBQWNGLE1BQU1HLE9BQU8sQ0FBQ0MsQ0FBQUEsT0FDaENBLEtBQUtDLEtBQUssQ0FDUEMsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLFFBQVEsRUFDbkNDLEdBQUcsQ0FBQyxDQUFDRixPQUFlO29CQUNuQkcsSUFBSUgsS0FBS0ksR0FBRyxDQUFDQyxRQUFRO29CQUNyQkMsT0FBT04sS0FBS00sS0FBSztvQkFDakJDLE9BQU9QLEtBQUtPLEtBQUs7b0JBQ2pCQyxPQUFPWCxLQUFLWSxLQUFLO2dCQUNuQjtRQUdKLE9BQU9wQixxREFBWUEsQ0FBQ3FCLElBQUksQ0FBQ2YsYUFBYTtZQUFFZ0IsUUFBUTtRQUFJO0lBQ3RELEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPdkIscURBQVlBLENBQUNxQixJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF3QixHQUFHO1lBQUVELFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGRwYXJyXFxEb2N1bWVudHNcXFJlYWwgR3JvdXAgUHJvamVjdFxcYXBwXFxhcGlcXHB1YmxpYy1pdGVtc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IGNvbm5lY3RNb25nb0RCIGZyb20gJ0AvY29uZmlnL21vbmdvZGInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0AvbW9kZWxzL1VzZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoeyBcIml0ZW1zLmlzUHVibGljXCI6IHRydWUgfSk7XG5cbiAgICBjb25zdCBwdWJsaWNJdGVtcyA9IHVzZXJzLmZsYXRNYXAodXNlciA9PlxuICAgICAgdXNlci5pdGVtc1xuICAgICAgICAuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaXNQdWJsaWMpXG4gICAgICAgIC5tYXAoKGl0ZW06IGFueSkgPT4gKHtcbiAgICAgICAgICBpZDogaXRlbS5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgICBvd25lcjogdXNlci5lbWFpbCxcbiAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwdWJsaWNJdGVtcywgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwdWJsaWMgaXRlbXM6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdE1vbmdvREIiLCJVc2VyIiwiR0VUIiwidXNlcnMiLCJmaW5kIiwicHVibGljSXRlbXMiLCJmbGF0TWFwIiwidXNlciIsIml0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsImlzUHVibGljIiwibWFwIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsInRpdGxlIiwiaW1hZ2UiLCJvd25lciIsImVtYWlsIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/public-items/route.ts\n");

/***/ }),

/***/ "(rsc)/./config/mongodb.ts":
/*!***************************!*\
  !*** ./config/mongodb.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Function to connect to MongoDB using Mongoose\nconst connectMongoDB = async ()=>{\n    try {\n        // Get the MongoDB URI from environment variables\n        const uri = process.env.MONGODB_URI;\n        // Throw an error if the URI is not set\n        if (!uri) {\n            throw new Error(\"MONGODB_URI is not defined in environment variables.\");\n        }\n        // Attempt to connect to MongoDB\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        console.log(\"Connected to MongoDB.\");\n    } catch (error) {\n        // Log any errors that occur during connection\n        console.log(\"Error connecting to MongoDB:\", error.message);\n    }\n};\n// Export the connection function so it can be used in other files\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsZ0RBQWdEO0FBQ2hELE1BQU1DLGlCQUFpQjtJQUNyQixJQUFJO1FBQ0YsaURBQWlEO1FBQ2pELE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUVuQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDSCxLQUFLO1lBQ1IsTUFBTSxJQUFJSSxNQUFNO1FBQ2xCO1FBRUEsZ0NBQWdDO1FBQ2hDLE1BQU1OLHVEQUFnQixDQUFDRTtRQUN2Qk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsOENBQThDO1FBQzlDRixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDLE1BQWlCRSxPQUFPO0lBQ3RFO0FBQ0Y7QUFFQSxrRUFBa0U7QUFDbEUsaUVBQWVWLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZHBhcnJcXERvY3VtZW50c1xcUmVhbCBHcm91cCBQcm9qZWN0XFxjb25maWdcXG1vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG4vLyBGdW5jdGlvbiB0byBjb25uZWN0IHRvIE1vbmdvREIgdXNpbmcgTW9uZ29vc2VcbmNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICB0cnkge1xuICAgIC8vIEdldCB0aGUgTW9uZ29EQiBVUkkgZnJvbSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBVUkkgaXMgbm90IHNldFxuICAgIGlmICghdXJpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT0RCX1VSSSBpcyBub3QgZGVmaW5lZCBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXCIpO1xuICAgIH1cblxuICAgIC8vIEF0dGVtcHQgdG8gY29ubmVjdCB0byBNb25nb0RCXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIuXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIExvZyBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZHVyaW5nIGNvbm5lY3Rpb25cbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcbiAgfVxufTtcblxuLy8gRXhwb3J0IHRoZSBjb25uZWN0aW9uIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGluIG90aGVyIGZpbGVzXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ29EQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RNb25nb0RCIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// 2. Define the Mongoose Schema\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    items: {\n        type: [\n            {\n                _id: {\n                    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                    auto: true\n                },\n                title: String,\n                image: String,\n                isPublic: {\n                    type: Boolean,\n                    default: true\n                }\n            }\n        ],\n        default: []\n    }\n});\n// 3. Export a REAL Mongoose Model\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUU7QUFjckUsZ0NBQWdDO0FBQ2hDLE1BQU1HLGFBQWEsSUFBSUgsd0RBQWUsQ0FBQztJQUNyQ0ssT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNHLE1BQU07UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDSSxPQUFPO1FBQ0xOLE1BQU07WUFBQztnQkFDTE8sS0FBSztvQkFBRVAsTUFBTU4sd0RBQWUsQ0FBQ2MsS0FBSyxDQUFDQyxRQUFRO29CQUFFQyxNQUFNO2dCQUFLO2dCQUN4REMsT0FBT1Y7Z0JBQ1BXLE9BQU9YO2dCQUNQWSxVQUFVO29CQUFFYixNQUFNYztvQkFBU0MsU0FBUztnQkFBSztZQUMzQztTQUFFO1FBQ0ZBLFNBQVMsRUFBRTtJQUNiO0FBQ0Y7QUFFQSxrQ0FBa0M7QUFDM0IsTUFBTUMsT0FBT3BCLDRDQUFNQSxDQUFDb0IsSUFBSSxJQUFJckIsK0NBQUtBLENBQVEsUUFBUUUsWUFBWSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxkcGFyclxcRG9jdW1lbnRzXFxSZWFsIEdyb3VwIFByb2plY3RcXG1vZGVsc1xcVXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuLy8gMS4gRGVmaW5lIHRoZSBUeXBlU2NyaXB0IGludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpdGVtczoge1xuICAgIF9pZDogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQ7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICB9W107XG59XG5cbi8vIDIuIERlZmluZSB0aGUgTW9uZ29vc2UgU2NoZW1hXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBpdGVtczoge1xuICAgIHR5cGU6IFt7XG4gICAgICBfaWQ6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCBhdXRvOiB0cnVlIH0sIC8vIFRoaXMgaXMgY3J1Y2lhbFxuICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgIGltYWdlOiBTdHJpbmcsXG4gICAgICBpc1B1YmxpYzogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH1cbiAgICB9XSxcbiAgICBkZWZhdWx0OiBbXVxuICB9XG59KTtcblxuLy8gMy4gRXhwb3J0IGEgUkVBTCBNb25nb29zZSBNb2RlbFxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb2RlbDxJVXNlcj4oJ1VzZXInLCB1c2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vZGVsIiwibW9kZWxzIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJuYW1lIiwiaXRlbXMiLCJfaWQiLCJUeXBlcyIsIk9iamVjdElkIiwiYXV0byIsInRpdGxlIiwiaW1hZ2UiLCJpc1B1YmxpYyIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiVXNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpublic-items%2Froute&page=%2Fapi%2Fpublic-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpublic-items%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpublic-items%2Froute&page=%2Fapi%2Fpublic-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpublic-items%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dparr_Documents_Real_Group_Project_app_api_public_items_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/public-items/route.ts */ \"(rsc)/./app/api/public-items/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/public-items/route\",\n        pathname: \"/api/public-items\",\n        filename: \"route\",\n        bundlePath: \"app/api/public-items/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dparr\\\\Documents\\\\Real Group Project\\\\app\\\\api\\\\public-items\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dparr_Documents_Real_Group_Project_app_api_public_items_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwdWJsaWMtaXRlbXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnB1YmxpYy1pdGVtcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnB1YmxpYy1pdGVtcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkcGFyciU1Q0RvY3VtZW50cyU1Q1JlYWwlMjBHcm91cCUyMFByb2plY3QlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2RwYXJyJTVDRG9jdW1lbnRzJTVDUmVhbCUyMEdyb3VwJTIwUHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDaUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGRwYXJyXFxcXERvY3VtZW50c1xcXFxSZWFsIEdyb3VwIFByb2plY3RcXFxcYXBwXFxcXGFwaVxcXFxwdWJsaWMtaXRlbXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3B1YmxpYy1pdGVtcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3B1YmxpYy1pdGVtc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHVibGljLWl0ZW1zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZHBhcnJcXFxcRG9jdW1lbnRzXFxcXFJlYWwgR3JvdXAgUHJvamVjdFxcXFxhcHBcXFxcYXBpXFxcXHB1YmxpYy1pdGVtc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpublic-items%2Froute&page=%2Fapi%2Fpublic-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpublic-items%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpublic-items%2Froute&page=%2Fapi%2Fpublic-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpublic-items%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();