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

//     if (e.target.getAttribute('data-img') === 'checkbox') {
//         const taskIndex = getTaskIndex(e);
//         if (!category.tasks[taskIndex].isComplete) category.tasks[taskIndex].isComplete = true;
//         else category.tasks[taskIndex].isComplete = false;
//         toggleCheckDom(e);
//     }

import {createCategory, updateCategoryName, deleteCategory, selectCategory, testEvent, updateTaskName, createTask, deleteTask} from './modules/render';

createCategory();
updateCategoryName();
deleteCategory();
selectCategory();
createTask();
updateTaskName();
deleteTask();
testEvent();