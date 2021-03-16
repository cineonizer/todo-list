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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n// import {Task} from './modules/task';\n// import {Category} from './modules/category';\n// import {createTaskDom, limitContentEditable, deleteTaskDom, updateTitleDom, deleteAllTasksDom, createCategoryDom, deleteCategoryDom, toggleCheckDom} from './modules/dom';\n\n// const newTaskBtn = document.querySelector('#new-task-button');\n// const newCategoryBtn = document.querySelector('#new-category-button');\n// const taskContainer = document.querySelector('#task-container');\n// const category = new Category('Category');\n\n// newCategoryBtn.addEventListener('click', () => {\n//     createCategoryDom();\n// });\n\n// newTaskBtn.addEventListener('click', (e) => {\n//     const task = new Task('', '');\n//     category.addTask(task);\n//     createTaskDom();\n// });\n\n// document.addEventListener('keyup', (e) => {\n//     if (e.target.className === 'description') {\n//         const taskIndex = getTaskIndex(e);\n//         category.tasks[taskIndex].updateName = e.target.innerText.trim();\n//     }\n//     if (e.target.className === 'category-name') {\n//         updateTitleDom(e);\n//         category.updateName = e.target.innerText.trim();\n//     }\n// });\n\n// document.addEventListener('keydown', (e) => {\n//     if (e.target.className === 'description') limitContentEditable(e, 65);\n//     if (e.target.className === 'category-name') limitContentEditable(e, 19);\n// });\n\n// document.addEventListener('click', (e) => {\n//     const dateInputs = document.querySelectorAll('.duedate');\n\n//     if (e.target.className === 'delete-task-button') {\n//         const taskIndex = getTaskIndex(e);\n//         category.deleteTask(taskIndex);\n//         deleteTaskDom(e);\n//         return\n//     }\n//     if (e.target.className === 'duedate') {\n//         dateInputs.forEach(dateInput => dateInput.addEventListener('change', (e) => {\n//             const taskIndex = getTaskIndex(e);\n//             category.tasks[taskIndex].updateDueDate = e.target.value;\n//             dateInput.innerText = e.target.value;\n//         }));\n//     }\n\n//     if (e.target.className === 'delete-category-button') {\n//         category.tasks = [];\n//         deleteAllTasksDom();\n//         deleteCategoryDom(e);\n//     }\n\n//     if (e.target.getAttribute('data-img') === 'checkbox') {\n//         const taskIndex = getTaskIndex(e);\n//         if (!category.tasks[taskIndex].isComplete) category.tasks[taskIndex].isComplete = true;\n//         else category.tasks[taskIndex].isComplete = false;\n//         toggleCheckDom(e);\n//     }\n//     // test button\n//     if (e.target.id === 'all-task-button') {\n//         console.log(category);\n//     }\n\n// });\n\n// function getTaskIndex(e) {\n//     return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));\n// }\n\n\n\n\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.createCategory)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.updateCategoryName)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.deleteCategory)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.selectCategory)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/category.js":
/*!*********************************!*\
  !*** ./src/modules/category.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\nclass Category {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n\n    set updateName(name) {\n        this.name = name;\n    }\n\n    addTask(task) {\n        this.tasks.push(task);\n    }\n\n    deleteTask(index) {\n        this.tasks.splice(index, 1);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/category.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCatDom\": () => (/* binding */ createCatDom),\n/* harmony export */   \"getCatIndex\": () => (/* binding */ getCatIndex),\n/* harmony export */   \"getCatNameDom\": () => (/* binding */ getCatNameDom),\n/* harmony export */   \"limitChar\": () => (/* binding */ limitChar),\n/* harmony export */   \"deleteCategoryDom\": () => (/* binding */ deleteCategoryDom)\n/* harmony export */ });\nconst taskContainer = document.querySelector('#task-container');\nconst categoryContainer = document.querySelector('#category-container');\n\nfunction createCatDom() {\n    const categoryDiv = document.createElement('div');\n    categoryDiv.classList.add('category-button');\n    categoryDiv.innerHTML =\n        `<img class=\"category-img\" src=\"assets/images/list-icon.svg\"/>\n        <span contenteditable=\"true\" class=\"category-name\"></span>\n        <div class=\"action-button\">\n            <img class=\"delete-category-button\" src=\"assets/images/delete-icon.svg\"/>\n        </div>`;\n    categoryContainer.appendChild(categoryDiv);\n}\n\nfunction getCatIndex(e) {\n    return Array.prototype.indexOf.call(categoryContainer.childNodes, e.target.closest('.category-button'));\n}\n\nfunction getCatNameDom(e) {\n    return e.target.innerText.trim();\n}\n\nfunction limitChar(e, charMax) {\n    const str = e.target.innerText;\n    if (e.key === 'Enter') e.target.blur();\n    if (str.length >= charMax) e.preventDefault();\n}\n\nfunction deleteCategoryDom(e) {\n    const categoryBtnDiv = e.target.closest('.category-button');\n    categoryBtnDiv.parentNode.removeChild(categoryBtnDiv);\n}\n\n// function createTaskElement() {\n//     const taskDiv = document.createElement('div');\n//     taskDiv.classList.add('task');\n//     taskDiv.innerHTML = \n//         `<div class=\"task-left\">\n//             <img data-img=\"checkbox\" class src=\"assets/images/square-icon.svg\"/>\n//             <span contenteditable=\"true\" class=\"description\"></span>\n//         </div>\n//         <div class=\"task-right\">\n//             <input type=\"date\" class=\"duedate\"></span>\n//             <div class=\"task-action-button\">\n//                 <img class=\"delete-task-button\" src=\"assets/images/delete-icon.svg\"/>\n//             </div>\n//         </div>`;\n//     taskContainer.appendChild(taskDiv);\n// }\n\n// function deleteTaskElement(e) {\n//     const taskDiv = e.target.closest('.task');\n//     taskDiv.parentNode.removeChild(taskDiv);\n// }\n\n// function updateTitleElement(e) {\n\n// }\n\n// function deleteAllTaskElements() {\n//     taskContainer.innerHTML = '';\n// }\n\n// function toggleCheckElement(e) {\n//     if (e.target.closest('.task').classList.contains('checked')) e.target.src = 'assets/images/square-icon.svg';\n//     else e.target.src = 'assets/images/square-checked-icon.svg';\n//     e.target.closest('.task').classList.toggle('checked');\n// }\n\n// function getTaskIndex(e) {\n//     return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));\n// }\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor() {\n        this.projects = [];\n    }\n\n    getCategory(index) {\n        return this.projects[index];\n    }\n\n    addCategory(category) {\n        this.projects.push(category);\n    }\n\n    deleteCategory(index) {\n        this.projects.splice(index, 1);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCategory\": () => (/* binding */ createCategory),\n/* harmony export */   \"updateCategoryName\": () => (/* binding */ updateCategoryName),\n/* harmony export */   \"deleteCategory\": () => (/* binding */ deleteCategory),\n/* harmony export */   \"selectCategory\": () => (/* binding */ selectCategory)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ \"./src/modules/category.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n\n\nconst project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project();\n\nfunction createCategory() {\n    const newCategoryBtn = document.querySelector('#new-category-button');\n    newCategoryBtn.addEventListener('click', () => {\n        const category = new _category__WEBPACK_IMPORTED_MODULE_1__.Category('');\n        project.addCategory(category);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createCatDom)();\n    });\n    return true;\n}\n\nfunction updateCategoryName() {\n    document.addEventListener('keyup', (e) => {\n        if (e.target.matches('.category-name'))\n            project.getCategory((0,_dom__WEBPACK_IMPORTED_MODULE_2__.getCatIndex)(e)).updateName = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.getCatNameDom)(e);\n    });\n\n    document.addEventListener('keydown', (e) => {\n        if (e.target.matches('.category-name')) (0,_dom__WEBPACK_IMPORTED_MODULE_2__.limitChar)(e, 19);\n    });\n}\n\nfunction deleteCategory() {\n    document.addEventListener('click', (e) => {\n        if (e.target.matches('.delete-category-button')) {\n            project.deleteCategory((0,_dom__WEBPACK_IMPORTED_MODULE_2__.getCatIndex)(e));\n            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.deleteCategoryDom)(e);\n        }\n    });\n}\n\nfunction selectCategory() {\n    const categoryBtns = document.querySelectorAll('.category-button');\n    categoryBtns.forEach(categoryBtn => categoryBtn.addEventListener('click', () => {\n        console.log('hi');\n    }))\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/render.js?");

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