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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/category */ \"./src/modules/category.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n\nconst newTaskBtn = document.querySelector('#new-task-button');\nconst newCategoryBtn = document.querySelector('#new-category-button');\nconst taskContainer = document.querySelector('#task-container');\nconst category = new _modules_category__WEBPACK_IMPORTED_MODULE_1__.Category('Category');\n\nnewCategoryBtn.addEventListener('click', () => {\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.createCategoryDom)();\n});\n\nnewTaskBtn.addEventListener('click', (e) => {\n    const task = new _modules_task__WEBPACK_IMPORTED_MODULE_0__.Task('', '');\n    category.addTask(task);\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.createTaskDom)();\n});\n\ndocument.addEventListener('keyup', (e) => {\n    if (e.target.className === 'description') {\n        const taskIndex = getTaskIndex(e);\n        category.tasks[taskIndex].updateName = e.target.innerText.trim();\n    }\n    if (e.target.className === 'category-name') {\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.updateTitleDom)(e);\n        category.updateName = e.target.innerText.trim();\n    }\n});\n\ndocument.addEventListener('keydown', (e) => {\n    if (e.target.className === 'description') (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.limitContentEditable)(e, 65);\n    if (e.target.className === 'category-name') (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.limitContentEditable)(e, 19);\n});\n\ndocument.addEventListener('click', (e) => {\n    const dateInputs = document.querySelectorAll('.duedate');\n\n    if (e.target.className === 'delete-task-button') {\n        const taskIndex = getTaskIndex(e);\n        category.deleteTask(taskIndex);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.deleteTaskDom)(e);\n        return\n    }\n    if (e.target.className === 'duedate') {\n        dateInputs.forEach(dateInput => dateInput.addEventListener('change', (e) => {\n            const taskIndex = getTaskIndex(e);\n            category.tasks[taskIndex].updateDueDate = e.target.value;\n            dateInput.innerText = e.target.value;\n        }));\n    }\n\n    if (e.target.className === 'delete-category-button') {\n        category.tasks = [];\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.deleteAllTasksDom)();\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.deleteCategoryDom)(e);\n    }\n\n    if (e.target.getAttribute('data-img') === 'checkbox') {\n        const taskIndex = getTaskIndex(e);\n        if (!category.tasks[taskIndex].isComplete) category.tasks[taskIndex].isComplete = true;\n        else category.tasks[taskIndex].isComplete = false;\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.toggleCheckDom)(e);\n    }\n    // test button\n    if (e.target.id === 'all-task-button') {\n        console.log(category);\n    }\n\n});\n\nfunction getTaskIndex(e) {\n    return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskDom\": () => (/* binding */ createTaskDom),\n/* harmony export */   \"limitContentEditable\": () => (/* binding */ limitContentEditable),\n/* harmony export */   \"deleteTaskDom\": () => (/* binding */ deleteTaskDom),\n/* harmony export */   \"updateTitleDom\": () => (/* binding */ updateTitleDom),\n/* harmony export */   \"deleteAllTasksDom\": () => (/* binding */ deleteAllTasksDom),\n/* harmony export */   \"createCategoryDom\": () => (/* binding */ createCategoryDom),\n/* harmony export */   \"deleteCategoryDom\": () => (/* binding */ deleteCategoryDom),\n/* harmony export */   \"toggleCheckDom\": () => (/* binding */ toggleCheckDom)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ \"./src/modules/category.js\");\n\n\n\nconst taskContainer = document.querySelector('#task-container');\nconst categoryContainer = document.querySelector('#category-container');\n\nfunction createTaskDom() {\n    const taskDiv = document.createElement('div');\n    taskDiv.classList.add('task');\n    taskDiv.innerHTML = \n        `<div class=\"task-left\">\n            <img data-img=\"checkbox\" class src=\"assets/images/square-icon.svg\"/>\n            <span contenteditable=\"true\" class=\"description\"></span>\n        </div>\n        <div class=\"task-right\">\n            <input type=\"date\" class=\"duedate\"></span>\n            <div class=\"task-action-button\">\n                <img class=\"delete-task-button\" src=\"assets/images/delete-icon.svg\"/>\n            </div>\n        </div>`;\n    taskContainer.appendChild(taskDiv);\n}\n\nfunction limitContentEditable(e, charMax) {\n    const str = e.target.innerText;\n    if (e.key === 'Enter') e.target.blur();\n    if (str.length >= charMax) {\n        e.preventDefault();\n        //TODO: FIX CHAR LIMIT\n    }\n}\n\nfunction deleteTaskDom(e) {\n    const taskDiv = e.target.closest('.task');\n    taskDiv.parentNode.removeChild(taskDiv);\n}\n\nfunction updateTitleDom(e) {\n    const titleDom = document.querySelector('#title-name');\n    titleSpan.innerText = e.target.innerText.trim();\n}\n\nfunction deleteAllTasksDom() {\n    taskContainer.innerHTML = '';\n}\n\nfunction toggleCheckDom(e) {\n    if (e.target.closest('.task').classList.contains('checked')) e.target.src = 'assets/images/square-icon.svg';\n    else e.target.src = 'assets/images/square-checked-icon.svg';\n\n    e.target.closest('.task').classList.toggle('checked');\n}\n\nfunction createCategoryDom(e) {\n    const categoryDiv = document.createElement('div');\n    categoryDiv.classList.add('category-button');\n    categoryDiv.innerHTML = `\n        <img class=\"category-img\" src=\"assets/images/list-icon.svg\"/>\n        <span contenteditable=\"true\" class=\"category-name\"></span>\n        <div class=\"action-button\">\n            <img class=\"delete-category-button\" src=\"assets/images/delete-icon.svg\"/>\n        </div>`;\n    categoryContainer.appendChild(categoryDiv);\n}\n\nfunction deleteCategoryDom(e) {\n    const categoryBtnDiv = e.target.closest('.category-button');\n    categoryBtnDiv.parentNode.removeChild(categoryBtnDiv);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.isComplete = false;\n    }\n\n    set updateName(name) {\n       this.name = name;\n    }\n\n    set updateDueDate(dueDate) {\n        this.dueDate = dueDate;\n    }\n\n    set updateDescr(name) {\n        this.name = name;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

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