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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n// document.addEventListener('click', (e) => {\n//     const dateInputs = document.querySelectorAll('.duedate');\n\n//     if (e.target.className === 'delete-task-button') {\n//         const taskIndex = getTaskIndex(e);\n//         category.deleteTask(taskIndex);\n//         deleteTaskDom(e);\n//         return\n//     }\n//     if (e.target.className === 'duedate') {\n//         dateInputs.forEach(dateInput => dateInput.addEventListener('change', (e) => {\n//             const taskIndex = getTaskIndex(e);\n//             category.tasks[taskIndex].updateDueDate = e.target.value;\n//             dateInput.innerText = e.target.value;\n//         }));\n//     }\n\n//     if (e.target.getAttribute('data-img') === 'checkbox') {\n//         const taskIndex = getTaskIndex(e);\n//         if (!category.tasks[taskIndex].isComplete) category.tasks[taskIndex].isComplete = true;\n//         else category.tasks[taskIndex].isComplete = false;\n//         toggleCheckDom(e);\n//     }\n\n\n\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.createCategory)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.updateCategoryName)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.deleteCategory)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.selectCategory)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.createTask)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.updateTaskName)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.deleteTask)();\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.testEvent)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/category.js":
/*!*********************************!*\
  !*** ./src/modules/category.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\nclass Category {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n\n    set updateName(name) {\n        this.name = name;\n    }\n\n    getTask(index) {\n        return this.tasks[index];\n    }\n\n    addTask(task) {\n        this.tasks.push(task);\n    }\n\n    deleteTask(index) {\n        this.tasks.splice(index, 1);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/category.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCatDom\": () => (/* binding */ createCatDom),\n/* harmony export */   \"getCatIndex\": () => (/* binding */ getCatIndex),\n/* harmony export */   \"getCatNameDom\": () => (/* binding */ getCatNameDom),\n/* harmony export */   \"limitChar\": () => (/* binding */ limitChar),\n/* harmony export */   \"deleteCatDom\": () => (/* binding */ deleteCatDom),\n/* harmony export */   \"updateTitleDom\": () => (/* binding */ updateTitleDom),\n/* harmony export */   \"toggleNewTaskBtnDom\": () => (/* binding */ toggleNewTaskBtnDom),\n/* harmony export */   \"createTaskDom\": () => (/* binding */ createTaskDom),\n/* harmony export */   \"deleteAllTasksDom\": () => (/* binding */ deleteAllTasksDom),\n/* harmony export */   \"getTaskNameDom\": () => (/* binding */ getTaskNameDom),\n/* harmony export */   \"getTaskIndex\": () => (/* binding */ getTaskIndex),\n/* harmony export */   \"deleteTaskDom\": () => (/* binding */ deleteTaskDom)\n/* harmony export */ });\nconst taskContainer = document.querySelector('#task-container');\nconst categoryContainer = document.querySelector('#category-container');\n\nfunction createCatDom() {\n    const categoryDiv = document.createElement('div');\n    categoryDiv.classList.add('category-button');\n    categoryDiv.innerHTML =\n        `<img class=\"category-img\" src=\"assets/images/list-icon.svg\"/>\n        <span contenteditable=\"true\" class=\"category-name\"></span>\n        <div class=\"action-button\">\n            <img class=\"delete-category-button\" src=\"assets/images/delete-icon.svg\"/>\n        </div>`;\n    categoryContainer.appendChild(categoryDiv);\n}\n\nfunction getCatIndex(e) {\n    return Array.prototype.indexOf.call(categoryContainer.childNodes, e.target.closest('.category-button'));\n}\n\nfunction getCatNameDom(e) {\n    return e.target.innerText.trim();\n}\n\nfunction limitChar(e, charMax) {\n    const str = e.target.innerText;\n    if (e.key === 'Enter') e.target.blur();\n    if (str.length >= charMax) e.preventDefault();\n}\n\nfunction deleteCatDom(e) {\n    const categoryBtnDiv = e.target.closest('.category-button');\n    categoryBtnDiv.parentNode.removeChild(categoryBtnDiv);\n}\n\nfunction updateTitleDom(title) {\n    const titleSpan = document.querySelector('#title-name');\n    titleSpan.innerText = title;\n}\n\nfunction toggleNewTaskBtnDom(isEmpty, e) {\n    const newTaskBtn = document.querySelector('#toggle-new-task-button');\n    newTaskBtn.style.display = 'block';\n    document.querySelector('#new-task-button').setAttribute('data-index', getCatIndex(e));\n    if(isEmpty) {\n        newTaskBtn.style.display = 'none';\n    }\n}\n\nfunction createTaskDom() {\n    const taskDiv = document.createElement('div');\n    taskDiv.classList.add('task');\n    taskDiv.innerHTML = \n        `<div class=\"task-left\">\n            <img data-img=\"checkbox\" class src=\"assets/images/square-icon.svg\"/>\n            <span contenteditable=\"true\" class=\"description\"></span>\n        </div>\n        <div class=\"task-right\">\n            <input type=\"date\" class=\"duedate\"></span>\n            <div class=\"task-action-button\">\n                <img class=\"delete-task-button\" src=\"assets/images/delete-icon.svg\"/>\n            </div>\n        </div>`;\n    taskContainer.appendChild(taskDiv);\n}\n\nfunction deleteAllTasksDom() {\n    taskContainer.innerHTML = '';\n}\n\nfunction getTaskNameDom(e) {\n    return e.target.innerText.trim();\n}\n\nfunction getTaskIndex(e) {\n    return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));\n}\n\nfunction deleteTaskDom(e) {\n    const taskDiv = e.target.closest('.task');\n    taskDiv.parentNode.removeChild(taskDiv);\n}\n\n\n// function toggleCheckElement(e) {\n//     if (e.target.closest('.task').classList.contains('checked')) e.target.src = 'assets/images/square-icon.svg';\n//     else e.target.src = 'assets/images/square-checked-icon.svg';\n//     e.target.closest('.task').classList.toggle('checked');\n// }\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCategory\": () => (/* binding */ createCategory),\n/* harmony export */   \"updateCategoryName\": () => (/* binding */ updateCategoryName),\n/* harmony export */   \"deleteCategory\": () => (/* binding */ deleteCategory),\n/* harmony export */   \"selectCategory\": () => (/* binding */ selectCategory),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"updateTaskName\": () => (/* binding */ updateTaskName),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"testEvent\": () => (/* binding */ testEvent)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ \"./src/modules/category.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n\n\n\nconst project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project();\nconst newTaskBtn = document.querySelector('#new-task-button');\n\nfunction createCategory() {\n    const newCategoryBtn = document.querySelector('#new-category-button');\n    newCategoryBtn.addEventListener('click', () => {\n        const category = new _category__WEBPACK_IMPORTED_MODULE_1__.Category('');\n        project.addCategory(category);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createCatDom)();\n    });\n}\n\nfunction updateCategoryName() {\n    document.addEventListener('keyup', (e) => {\n        if (e.target.matches('.category-name')) {\n            project.getCategory((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatIndex)(e)).updateName = (0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatNameDom)(e);\n            (0,_dom__WEBPACK_IMPORTED_MODULE_3__.updateTitleDom)(project.getCategory((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatIndex)(e)).name);\n        }\n    });\n    document.addEventListener('keydown', (e) => {\n        if (e.target.matches('.category-name')) (0,_dom__WEBPACK_IMPORTED_MODULE_3__.limitChar)(e, 19);\n    });\n}\n\nfunction deleteCategory() {\n    document.addEventListener('click', (e) => {\n        if (e.target.matches('.delete-category-button')) {\n            if (project.getCategory((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatIndex)(e)).name === document.querySelector('#title-name').textContent \n            || !project.projects.length) (0,_dom__WEBPACK_IMPORTED_MODULE_3__.toggleNewTaskBtnDom)(true, e);\n            project.deleteCategory((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatIndex)(e));\n            (0,_dom__WEBPACK_IMPORTED_MODULE_3__.deleteCatDom)(e);\n        }\n    });\n}\n\nfunction selectCategory() {\n    document.addEventListener('click', (e) => {\n        if (e.target.parentNode.matches('.category-button') || e.target.matches('.category-button')) {\n            (0,_dom__WEBPACK_IMPORTED_MODULE_3__.updateTitleDom)(project.getCategory((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatIndex)(e)).name);\n            (0,_dom__WEBPACK_IMPORTED_MODULE_3__.toggleNewTaskBtnDom)(false, e);\n            (0,_dom__WEBPACK_IMPORTED_MODULE_3__.deleteAllTasksDom)();\n\n            if (project.getCategory((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatIndex)(e)).tasks.length) console.log('not empty')\n            if (!project.getCategory((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getCatIndex)(e)).tasks.length) console.log('empty')\n\n        }\n    });\n}\n\nfunction createTask() {\n    newTaskBtn.addEventListener('click', (e) => {\n        const task = new _task__WEBPACK_IMPORTED_MODULE_2__.Task('', '');\n        project.getCategory(newTaskBtn.getAttribute('data-index')).addTask(task);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createTaskDom)();\n    });\n}\n\nfunction updateTaskName() {\n    document.addEventListener('keyup', (e) => {\n        if (e.target.matches('.description')) {\n            const category = project.getCategory(newTaskBtn.getAttribute('data-index'));\n            const task = category.getTask((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getTaskIndex)(e));\n            task.updateName = (0,_dom__WEBPACK_IMPORTED_MODULE_3__.getTaskNameDom)(e);\n        }\n    });\n    document.addEventListener('keydown', (e) => {\n        if (e.target.matches('.description')) (0,_dom__WEBPACK_IMPORTED_MODULE_3__.limitChar)(e, 65);\n    });\n}\n\nfunction deleteTask() {\n    document.addEventListener('click', (e) => {\n        if (e.target.matches('.delete-task-button')) {\n            project.getCategory(newTaskBtn.getAttribute('data-index')).deleteTask((0,_dom__WEBPACK_IMPORTED_MODULE_3__.getTaskIndex)(e));\n            (0,_dom__WEBPACK_IMPORTED_MODULE_3__.deleteTaskDom)(e);\n        }\n    });\n}\n\n\nfunction testEvent() {\n    document.addEventListener('click', (e) => {\n        if (e.target.matches('#all-task-button')) {\n            console.log(project.projects)\n        }\n        \n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.isComplete = false;\n    }\n\n    set updateName(name) {\n       this.name = name;\n    }\n\n    set updateDueDate(dueDate) {\n        this.dueDate = dueDate;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

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