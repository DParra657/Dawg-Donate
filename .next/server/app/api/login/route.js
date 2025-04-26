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
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "(rsc)/./app/api/login/route.ts":
/*!********************************!*\
  !*** ./app/api/login/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/mongodb */ \"(rsc)/./config/mongodb.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// Define a Mongoose schema and model for users\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_2___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_2___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_2___default().model('User', userSchema);\nasync function POST(req) {\n    try {\n        const { email, password } = await req.json();\n        if (!email || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: 'Missing email or password'\n            }, {\n                status: 400\n            });\n        }\n        // Connect to MongoDB using Mongoose\n        await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // Find the user by email\n        const user = await User.findOne({\n            email\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n        // Compare the provided password with the hashed password\n        const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(password, user.password);\n        if (!isMatch) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: 'Incorrect password'\n            }, {\n                status: 401\n            });\n        }\n        // Generate a JWT token\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n            userId: user._id\n        }, process.env.JWT_SECRET, {\n            expiresIn: '1h'\n        });\n        // Set the token in an HTTP-only cookie\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: 'Login successful',\n            data: {\n                userId: user._id,\n                name: user.name\n            }\n        });\n        response.cookies.set('authToken', token, {\n            httpOnly: true,\n            secure: \"development\" === 'production',\n            path: '/',\n            maxAge: 60 * 60\n        });\n        return response;\n    } catch (error) {\n        if (error instanceof Error) {\n            console.error('Error in POST /api/login:', error.message);\n        } else {\n            console.error('Error in POST /api/login:', error);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0c7QUFDZDtBQUNGO0FBQ0M7QUFFL0IsK0NBQStDO0FBQy9DLE1BQU1LLGFBQWEsSUFBSUgsd0RBQWUsQ0FBQztJQUNyQ0ssT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDM0M7QUFFQSxNQUFNRyxPQUFPWCx3REFBZSxDQUFDVyxJQUFJLElBQUlYLHFEQUFjLENBQUMsUUFBUUc7QUFFckQsZUFBZVcsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFVixLQUFLLEVBQUVLLFFBQVEsRUFBRSxHQUFHLE1BQU1LLElBQUlDLElBQUk7UUFFMUMsSUFBSSxDQUFDWCxTQUFTLENBQUNLLFVBQVU7WUFDdkIsT0FBT1oscURBQVlBLENBQUNrQixJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9DLE9BQU87WUFBNEIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2pHO1FBRUEsb0NBQW9DO1FBQ3BDLE1BQU1wQiwyREFBY0E7UUFFcEIseUJBQXlCO1FBQ3pCLE1BQU1xQixPQUFPLE1BQU1ULEtBQUtVLE9BQU8sQ0FBQztZQUFFaEI7UUFBTTtRQUV4QyxJQUFJLENBQUNlLE1BQU07WUFDVCxPQUFPdEIscURBQVlBLENBQUNrQixJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9DLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RGO1FBRUEseURBQXlEO1FBQ3pELE1BQU1HLFVBQVUsTUFBTXJCLHdEQUFjLENBQUNTLFVBQVVVLEtBQUtWLFFBQVE7UUFDNUQsSUFBSSxDQUFDWSxTQUFTO1lBQ1osT0FBT3hCLHFEQUFZQSxDQUFDa0IsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO2dCQUFPQyxPQUFPO1lBQXFCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMxRjtRQUVBLHVCQUF1QjtRQUN2QixNQUFNSyxRQUFRdEIsd0RBQVEsQ0FBQztZQUFFd0IsUUFBUU4sS0FBS08sR0FBRztRQUFDLEdBQUdDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFHO1lBQUVDLFdBQVc7UUFBSztRQUV4Rix1Q0FBdUM7UUFDdkMsTUFBTUMsV0FBV2xDLHFEQUFZQSxDQUFDa0IsSUFBSSxDQUFDO1lBQ2pDQyxTQUFTO1lBQ1RnQixTQUFTO1lBQ1RDLE1BQU07Z0JBQUVSLFFBQVFOLEtBQUtPLEdBQUc7Z0JBQUVRLE1BQU1mLEtBQUtlLElBQUk7WUFBQztRQUM1QztRQUNBSCxTQUFTSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhYixPQUFPO1lBQ3ZDYyxVQUFVO1lBQ1ZDLFFBQVFYLGtCQUF5QjtZQUNqQ1ksTUFBTTtZQUNOQyxRQUFRLEtBQUs7UUFDZjtRQUVBLE9BQU9UO0lBQ1QsRUFBRSxPQUFPZCxPQUFPO1FBQ2QsSUFBSUEsaUJBQWlCd0IsT0FBTztZQUMxQkMsUUFBUXpCLEtBQUssQ0FBQyw2QkFBNkJBLE1BQU1lLE9BQU87UUFDMUQsT0FBTztZQUNMVSxRQUFRekIsS0FBSyxDQUFDLDZCQUE2QkE7UUFDN0M7UUFDQSxPQUFPcEIscURBQVlBLENBQUNrQixJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFPQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZHBhcnJcXERvY3VtZW50c1xcUmVhbCBHcm91cCBQcm9qZWN0XFxhcHBcXGFwaVxcbG9naW5cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBjb25uZWN0TW9uZ29EQiBmcm9tICdAL2NvbmZpZy9tb25nb2RiJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuLy8gRGVmaW5lIGEgTW9uZ29vc2Ugc2NoZW1hIGFuZCBtb2RlbCBmb3IgdXNlcnNcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTWlzc2luZyBlbWFpbCBvciBwYXNzd29yZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICAvLyBDb25uZWN0IHRvIE1vbmdvREIgdXNpbmcgTW9uZ29vc2VcbiAgICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xuXG4gICAgLy8gRmluZCB0aGUgdXNlciBieSBlbWFpbFxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29tcGFyZSB0aGUgcHJvdmlkZWQgcGFzc3dvcmQgd2l0aCB0aGUgaGFzaGVkIHBhc3N3b3JkXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0luY29ycmVjdCBwYXNzd29yZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBhIEpXVCB0b2tlblxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyB1c2VySWQ6IHVzZXIuX2lkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhLCB7IGV4cGlyZXNJbjogJzFoJyB9KTtcblxuICAgIC8vIFNldCB0aGUgdG9rZW4gaW4gYW4gSFRUUC1vbmx5IGNvb2tpZVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICdMb2dpbiBzdWNjZXNzZnVsJyxcbiAgICAgIGRhdGE6IHsgdXNlcklkOiB1c2VyLl9pZCwgbmFtZTogdXNlci5uYW1lIH0sXG4gICAgfSk7XG4gICAgcmVzcG9uc2UuY29va2llcy5zZXQoJ2F1dGhUb2tlbicsIHRva2VuLCB7XG4gICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJywgLy8gVXNlIHNlY3VyZSBjb29raWVzIGluIHByb2R1Y3Rpb25cbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIG1heEFnZTogNjAgKiA2MCwgLy8gMSBob3VyXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIFBPU1QgL2FwaS9sb2dpbjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gUE9TVCAvYXBpL2xvZ2luOicsIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3RNb25nb0RCIiwibW9uZ29vc2UiLCJiY3J5cHQiLCJqd3QiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCIsIlBPU1QiLCJyZXEiLCJqc29uIiwic3VjY2VzcyIsImVycm9yIiwic3RhdHVzIiwidXNlciIsImZpbmRPbmUiLCJpc01hdGNoIiwiY29tcGFyZSIsInRva2VuIiwic2lnbiIsInVzZXJJZCIsIl9pZCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZGF0YSIsIm5hbWUiLCJjb29raWVzIiwic2V0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwYXRoIiwibWF4QWdlIiwiRXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./config/mongodb.ts":
/*!***************************!*\
  !*** ./config/mongodb.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Function to connect to MongoDB using Mongoose\nconst connectMongoDB = async ()=>{\n    try {\n        // Get the MongoDB URI from environment variables\n        const uri = process.env.MONGODB_URI;\n        // Throw an error if the URI is not set\n        if (!uri) {\n            throw new Error(\"MONGODB_URI is not defined in environment variables.\");\n        }\n        // Attempt to connect to MongoDB\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        console.log(\"Connected to MongoDB.\");\n    } catch (error) {\n        // Log any errors that occur during connection\n        console.log(\"Error connecting to MongoDB:\", error.message);\n    }\n};\n// Export the connection function so it can be used in other files\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsZ0RBQWdEO0FBQ2hELE1BQU1DLGlCQUFpQjtJQUNyQixJQUFJO1FBQ0YsaURBQWlEO1FBQ2pELE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUVuQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDSCxLQUFLO1lBQ1IsTUFBTSxJQUFJSSxNQUFNO1FBQ2xCO1FBRUEsZ0NBQWdDO1FBQ2hDLE1BQU1OLHVEQUFnQixDQUFDRTtRQUN2Qk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsOENBQThDO1FBQzlDRixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDLE1BQWlCRSxPQUFPO0lBQ3RFO0FBQ0Y7QUFFQSxrRUFBa0U7QUFDbEUsaUVBQWVWLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZHBhcnJcXERvY3VtZW50c1xcUmVhbCBHcm91cCBQcm9qZWN0XFxjb25maWdcXG1vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG4vLyBGdW5jdGlvbiB0byBjb25uZWN0IHRvIE1vbmdvREIgdXNpbmcgTW9uZ29vc2VcbmNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICB0cnkge1xuICAgIC8vIEdldCB0aGUgTW9uZ29EQiBVUkkgZnJvbSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBVUkkgaXMgbm90IHNldFxuICAgIGlmICghdXJpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT0RCX1VSSSBpcyBub3QgZGVmaW5lZCBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXCIpO1xuICAgIH1cblxuICAgIC8vIEF0dGVtcHQgdG8gY29ubmVjdCB0byBNb25nb0RCXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIuXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIExvZyBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZHVyaW5nIGNvbm5lY3Rpb25cbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcbiAgfVxufTtcblxuLy8gRXhwb3J0IHRoZSBjb25uZWN0aW9uIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGluIG90aGVyIGZpbGVzXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ29EQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RNb25nb0RCIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dparr_Documents_Real_Group_Project_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.ts */ \"(rsc)/./app/api/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dparr\\\\Documents\\\\Real Group Project\\\\app\\\\api\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dparr_Documents_Real_Group_Project_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkcGFyciU1Q0RvY3VtZW50cyU1Q1JlYWwlMjBHcm91cCUyMFByb2plY3QlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2RwYXJyJTVDRG9jdW1lbnRzJTVDUmVhbCUyMEdyb3VwJTIwUHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGRwYXJyXFxcXERvY3VtZW50c1xcXFxSZWFsIEdyb3VwIFByb2plY3RcXFxcYXBwXFxcXGFwaVxcXFxsb2dpblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9sb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxkcGFyclxcXFxEb2N1bWVudHNcXFxcUmVhbCBHcm91cCBQcm9qZWN0XFxcXGFwcFxcXFxhcGlcXFxcbG9naW5cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

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

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdparr%5CDocuments%5CReal%20Group%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();