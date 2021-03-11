/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/category */ \"./src/modules/category.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n\n\nconst newTaskBtn = document.querySelector('#new-button');\nconst category = new _modules_category__WEBPACK_IMPORTED_MODULE_1__.Category(document.querySelector('#title-name').innerText);\n\nnewTaskBtn.addEventListener('click', () => {\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.createTaskDom)();\n    const task = new _modules_task__WEBPACK_IMPORTED_MODULE_0__.Task('Task Description', 'Tentative');\n    category.tasks.push(task);\n});\n\ndocument.addEventListener('keydown', (e) => {\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.editTaskDom)(e);\n    if (e.key === 'Enter' && e.target.className === 'description') {\n        console.log(e.target.innerText);\n    }\n});\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/category.js":
/*!*********************************!*\
  !*** ./src/modules/category.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\nclass Category {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n\n    set updateName(name) {\n        this.name = name;\n    }\n\n    addTask(task) {\n        this.tasks.push(task);\n    }\n\n    deleteTask(taskIndex) {\n        this.tasks.splice(taskIndex, 1);\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/category.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskDom\": () => (/* binding */ createTaskDom),\n/* harmony export */   \"editTaskDom\": () => (/* binding */ editTaskDom),\n/* harmony export */   \"deleteTaskDom\": () => (/* binding */ deleteTaskDom)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ \"./src/modules/category.js\");\n\n\n\nconst taskContainer = document.querySelector('#task-container');\n\nfunction createTaskDom() {\n    taskContainer.innerHTML +=\n    `<div class=\"task\">\n        <div class=\"task-left\">\n            <img src=\"assets/images/square-icon.svg\"/>\n            <span contenteditable=\"true\" class=\"description\"></span>\n        </div>\n        <div class=\"task-right\">\n            <input type=\"date\" class=\"duedate\"></span>\n            <div class=\"task-action-button\">\n                <img class=\"delete-button\" src=\"assets/images/delete-icon.svg\"/>\n            </div>\n        </div>\n    </div>`;\n}\n\nfunction editTaskDom(e) {\n    const str = e.target.innerText;\n    const charMax = 20;\n\n    if (e.key === 'Enter') e.target.blur();\n\n    if (str.length >= charMax) {\n        e.preventDefault();\n        //TODO\n    }\n}\n\nfunction deleteTaskDom(e) {\n    if (e.target.className === 'delete-button') {\n        const taskDiv = e.target.closest('.task');\n        taskDiv.parentNode.removeChild(taskDiv);\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate;\n    }\n\n    set updateName(name) {\n       this.name = name;\n    }\n\n    set updateDueDate(dueDate) {\n        this.dueDate = dueDate;\n    }\n\n    set updateDescr(name) {\n        this.name = name;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;