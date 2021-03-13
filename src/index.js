import {Task} from './modules/task';
import {Category} from './modules/category';
import {createTaskDom, limitContentEditable, deleteTaskDom, updateTitleSpan} from './modules/dom';

const newTaskBtn = document.querySelector('#new-task-button');
const category = new Category(document.querySelector('#title-name').innerText);
const taskContainer = document.querySelector('#task-container');

newTaskBtn.addEventListener('click', (e) => {
    const task = new Task('', '');
    category.tasks.push(task);
    createTaskDom();
});

document.addEventListener('keyup', (e) => {
    if (e.target.className === 'description') {
        const taskIndex = getTaskIndex(e);
        category.tasks[taskIndex].updateName = e.target.innerText;
    }
    if (e.target.className === 'category-name') {
        updateTitleSpan(e);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.target.className === 'description') limitContentEditable(e, 65);
    if (e.target.className === 'category-name') limitContentEditable(e, 19);
});

document.addEventListener('click', (e) => {
    const dateInputs = document.querySelectorAll('.duedate');

    if (e.target.className === 'delete-button') {
        const taskIndex = getTaskIndex(e);
        category.deleteTask(taskIndex);
        deleteTaskDom(e);
    }
    if (e.target.className === 'duedate') {
        dateInputs.forEach(dateInput => dateInput.addEventListener('change', (e) => {
            const taskIndex = getTaskIndex(e);
            category.tasks[taskIndex].updateDueDate = e.target.value;
            dateInput.innerText = e.target.value;
        }));
    }
    if (e.target.id === 'all-task-button') console.log(category);
});

function getTaskIndex(e) {
    return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));
}



