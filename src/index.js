import {Task} from './modules/task';
import {Category} from './modules/category';
import {createTaskDom, editTaskDom, deleteTaskDom} from './modules/dom';


const newTaskBtn = document.querySelector('#new-button');
const category = new Category(document.querySelector('#title-name').innerText);
const taskContainer = document.querySelector('#task-container');

//when clicked, task is created with defaul values of 'task description' and 'tentative'
newTaskBtn.addEventListener('click', (e) => {
    createTaskDom();
    const task = new Task('Task Description', 'Tentative');
    category.tasks.push(task);
});

//when enter is pressed on element with class of 'description', task obj name is updated
document.addEventListener('keyup', (e) => {
    if (e.target.className === 'description') {
        const taskIndex = getTaskIndex(e);
        category.tasks[taskIndex].updateName = e.target.innerText;
        console.log(category.tasks)
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')  editTaskDom(e);
})

document.addEventListener('click', (e) => {
    if (e.target.className === 'delete-button') {
        deleteTaskDom(e);
        const taskIndex = getTaskIndex(e);
        category.deleteTask(taskIndex);
    }
});







function getTaskIndex(e) {
    return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));
}




