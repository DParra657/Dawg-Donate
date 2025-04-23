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
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

/***/ "(rsc)/./app/api/users/route.ts":
/*!********************************!*\
  !*** ./app/api/users/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/mongodb */ \"(rsc)/./config/mongodb.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\n\n// Define a Mongoose schema and model for users\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_2___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_2___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_2___default().model('User', userSchema);\nasync function POST(req) {\n    try {\n        const { email, password } = await req.json();\n        if (!email || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing email or password'\n            }, {\n                status: 400\n            });\n        }\n        // Connect to MongoDB using Mongoose\n        await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // Check if the user already exists\n        const existingUser = await User.findOne({\n            email\n        });\n        if (existingUser) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User already exists'\n            }, {\n                status: 409\n            });\n        }\n        // Hash the password\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hash(password, 10);\n        // Create a new user\n        const newUser = new User({\n            email,\n            password: hashedPassword\n        });\n        const result = await newUser.save();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'User created',\n            userId: result._id\n        });\n    } catch (error) {\n        console.error('Error in POST /api/users:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNHO0FBQ2Q7QUFDRjtBQUU5QiwrQ0FBK0M7QUFDL0MsTUFBTUksYUFBYSxJQUFJRix3REFBZSxDQUFDO0lBQ3JDSSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztBQUMzQztBQUVBLE1BQU1HLE9BQU9WLHdEQUFlLENBQUNVLElBQUksSUFBSVYscURBQWMsQ0FBQyxRQUFRRTtBQUVyRCxlQUFlVyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNLEVBQUVWLEtBQUssRUFBRUssUUFBUSxFQUFFLEdBQUcsTUFBTUssSUFBSUMsSUFBSTtRQUUxQyxJQUFJLENBQUNYLFNBQVMsQ0FBQ0ssVUFBVTtZQUN2QixPQUFPWCxxREFBWUEsQ0FBQ2lCLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE0QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDakY7UUFFQSxvQ0FBb0M7UUFDcEMsTUFBTWxCLDJEQUFjQTtRQUVwQixtQ0FBbUM7UUFDbkMsTUFBTW1CLGVBQWUsTUFBTVIsS0FBS1MsT0FBTyxDQUFDO1lBQUVmO1FBQU07UUFDaEQsSUFBSWMsY0FBYztZQUNoQixPQUFPcEIscURBQVlBLENBQUNpQixJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBc0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzNFO1FBRUEsb0JBQW9CO1FBQ3BCLE1BQU1HLGlCQUFpQixNQUFNbkIscURBQVcsQ0FBQ1EsVUFBVTtRQUVuRCxvQkFBb0I7UUFDcEIsTUFBTWEsVUFBVSxJQUFJWixLQUFLO1lBQUVOO1lBQU9LLFVBQVVXO1FBQWU7UUFDM0QsTUFBTUcsU0FBUyxNQUFNRCxRQUFRRSxJQUFJO1FBRWpDLE9BQU8xQixxREFBWUEsQ0FBQ2lCLElBQUksQ0FBQztZQUFFVSxTQUFTO1lBQWdCQyxRQUFRSCxPQUFPSSxHQUFHO1FBQUM7SUFDekUsRUFBRSxPQUFPWCxPQUFPO1FBQ2RZLFFBQVFaLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE9BQU9sQixxREFBWUEsQ0FBQ2lCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZHBhcnJcXERvY3VtZW50c1xcUmVhbCBHcm91cCBQcm9qZWN0XFxhcHBcXGFwaVxcdXNlcnNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IGNvbm5lY3RNb25nb0RCIGZyb20gJ0AvY29uZmlnL21vbmdvZGInO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbi8vIERlZmluZSBhIE1vbmdvb3NlIHNjaGVtYSBhbmQgbW9kZWwgZm9yIHVzZXJzXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIGVtYWlsIG9yIHBhc3N3b3JkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbm5lY3QgdG8gTW9uZ29EQiB1c2luZyBNb25nb29zZVxyXG4gICAgYXdhaXQgY29ubmVjdE1vbmdvREIoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXNlciBhbHJlYWR5IGV4aXN0cycgfSwgeyBzdGF0dXM6IDQwOSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYXNoIHRoZSBwYXNzd29yZFxyXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIG5ldyB1c2VyXHJcbiAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoeyBlbWFpbCwgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkIH0pO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbmV3VXNlci5zYXZlKCk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgY3JlYXRlZCcsIHVzZXJJZDogcmVzdWx0Ll9pZCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gUE9TVCAvYXBpL3VzZXJzOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0TW9uZ29EQiIsIm1vbmdvb3NlIiwiYmNyeXB0IiwidXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiLCJQT1NUIiwicmVxIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZXhpc3RpbmdVc2VyIiwiZmluZE9uZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsIm5ld1VzZXIiLCJyZXN1bHQiLCJzYXZlIiwibWVzc2FnZSIsInVzZXJJZCIsIl9pZCIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/route.ts\n");

/***/ }),

/***/ "(rsc)/./config/mongodb.ts":
/*!***************************!*\
  !*** ./config/mongodb.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Function to connect to MongoDB using Mongoose\nconst connectMongoDB = async ()=>{\n    try {\n        // Get the MongoDB URI from environment variables\n        const uri = process.env.MONGODB_URI;\n        // Throw an error if the URI is not set\n        if (!uri) {\n            throw new Error(\"MONGODB_URI is not defined in environment variables.\");\n        }\n        // Attempt to connect to MongoDB\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        console.log(\"Connected to MongoDB.\");\n    } catch (error) {\n        // Log any errors that occur during connection\n        console.log(\"Error connecting to MongoDB:\", error.message);\n    }\n};\n// Export the connection function so it can be used in other files\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsZ0RBQWdEO0FBQ2hELE1BQU1DLGlCQUFpQjtJQUNyQixJQUFJO1FBQ0YsaURBQWlEO1FBQ2pELE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUVuQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDSCxLQUFLO1lBQ1IsTUFBTSxJQUFJSSxNQUFNO1FBQ2xCO1FBRUEsZ0NBQWdDO1FBQ2hDLE1BQU1OLHVEQUFnQixDQUFDRTtRQUN2Qk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsOENBQThDO1FBQzlDRixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDLE1BQWlCRSxPQUFPO0lBQ3RFO0FBQ0Y7QUFFQSxrRUFBa0U7QUFDbEUsaUVBQWVWLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZHBhcnJcXERvY3VtZW50c1xcUmVhbCBHcm91cCBQcm9qZWN0XFxjb25maWdcXG1vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gY29ubmVjdCB0byBNb25nb0RCIHVzaW5nIE1vbmdvb3NlXHJcbmNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBHZXQgdGhlIE1vbmdvREIgVVJJIGZyb20gZW52aXJvbm1lbnQgdmFyaWFibGVzXHJcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuXHJcbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgVVJJIGlzIG5vdCBzZXRcclxuICAgIGlmICghdXJpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1PTkdPREJfVVJJIGlzIG5vdCBkZWZpbmVkIGluIGVudmlyb25tZW50IHZhcmlhYmxlcy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0ZW1wdCB0byBjb25uZWN0IHRvIE1vbmdvREJcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIuXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBMb2cgYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyBjb25uZWN0aW9uXHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBFeHBvcnQgdGhlIGNvbm5lY3Rpb24gZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgaW4gb3RoZXIgZmlsZXNcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvREI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RNb25nb0RCIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dparr_Documents_Real_Group_Project_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/route.ts */ \"(rsc)/./app/api/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dparr\\\\Documents\\\\Real Group Project\\\\app\\\\api\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dparr_Documents_Real_Group_Project_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkcGFyciU1Q0RvY3VtZW50cyU1Q1JlYWwlMjBHcm91cCUyMFByb2plY3QlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2RwYXJyJTVDRG9jdW1lbnRzJTVDUmVhbCUyMEdyb3VwJTIwUHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGRwYXJyXFxcXERvY3VtZW50c1xcXFxSZWFsIEdyb3VwIFByb2plY3RcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxkcGFyclxcXFxEb2N1bWVudHNcXFxcUmVhbCBHcm91cCBQcm9qZWN0XFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();