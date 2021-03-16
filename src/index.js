// import {Task} from './modules/task';
// import {Category} from './modules/category';
// import {createTaskDom, limitContentEditable, deleteTaskDom, updateTitleDom, deleteAllTasksDom, createCategoryDom, deleteCategoryDom, toggleCheckDom} from './modules/dom';

// const newTaskBtn = document.querySelector('#new-task-button');
// const newCategoryBtn = document.querySelector('#new-category-button');
// const taskContainer = document.querySelector('#task-container');
// const category = new Category('Category');

// newCategoryBtn.addEventListener('click', () => {
//     createCategoryDom();
// });

// newTaskBtn.addEventListener('click', (e) => {
//     const task = new Task('', '');
//     category.addTask(task);
//     createTaskDom();
// });

// document.addEventListener('keyup', (e) => {
//     if (e.target.className === 'description') {
//         const taskIndex = getTaskIndex(e);
//         category.tasks[taskIndex].updateName = e.target.innerText.trim();
//     }
//     if (e.target.className === 'category-name') {
//         updateTitleDom(e);
//         category.updateName = e.target.innerText.trim();
//     }
// });

// document.addEventListener('keydown', (e) => {
//     if (e.target.className === 'description') limitContentEditable(e, 65);
//     if (e.target.className === 'category-name') limitContentEditable(e, 19);
// });

// document.addEventListener('click', (e) => {
//     const dateInputs = document.querySelectorAll('.duedate');

//     if (e.target.className === 'delete-task-button') {
//         const taskIndex = getTaskIndex(e);
//         category.deleteTask(taskIndex);
//         deleteTaskDom(e);
//         return
//     }
//     if (e.target.className === 'duedate') {
//         dateInputs.forEach(dateInput => dateInput.addEventListener('change', (e) => {
//             const taskIndex = getTaskIndex(e);
//             category.tasks[taskIndex].updateDueDate = e.target.value;
//             dateInput.innerText = e.target.value;
//         }));
//     }

//     if (e.target.className === 'delete-category-button') {
//         category.tasks = [];
//         deleteAllTasksDom();
//         deleteCategoryDom(e);
//     }

//     if (e.target.getAttribute('data-img') === 'checkbox') {
//         const taskIndex = getTaskIndex(e);
//         if (!category.tasks[taskIndex].isComplete) category.tasks[taskIndex].isComplete = true;
//         else category.tasks[taskIndex].isComplete = false;
//         toggleCheckDom(e);
//     }
//     // test button
//     if (e.target.id === 'all-task-button') {
//         console.log(category);
//     }

// });

// function getTaskIndex(e) {
//     return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));
// }


import {createCategory, updateCategoryName, deleteCategory, selectCategory} from './modules/render';

createCategory();
updateCategoryName();
deleteCategory();
selectCategory();