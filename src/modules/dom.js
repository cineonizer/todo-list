import {Task} from './task';
import {Category} from './category';

const taskContainer = document.querySelector('#task-container');

function createTaskDom() {
    const newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add('task');
    newTaskDiv.innerHTML = 
        `<div class="task-left">
            <img src="assets/images/square-icon.svg"/>
            <span contenteditable="true" class="description"></span>
        </div>
        <div class="task-right">
            <input type="date" class="duedate"></span>
            <div class="task-action-button">
                <img class="delete-button" src="assets/images/delete-icon.svg"/>
            </div>
        </div>`;
    taskContainer.appendChild(newTaskDiv);
}

function limitContentEditable(e, charMax) {
    const str = e.target.innerText;
    if (e.key === 'Enter') e.target.blur();
    if (str.length >= charMax) {
        e.preventDefault();
        //TODO: FIX CHAR LIMIT
    }
}

function deleteTaskDom(e) {
    if (e.target.className === 'delete-button') {
        const taskDiv = e.target.closest('.task');
        taskDiv.parentNode.removeChild(taskDiv);
    }
}

function updateTitleSpan(e) {
    const titleSpan = document.querySelector('#title-name');
    titleSpan.innerText = e.target.innerText;
}

export {createTaskDom, limitContentEditable, deleteTaskDom, updateTitleSpan}