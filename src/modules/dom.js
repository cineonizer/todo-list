import {Task} from './task';
import {Category} from './category';

const taskContainer = document.querySelector('#task-container');

function createTaskDom() {
    taskContainer.innerHTML +=
    `<div class="task">
        <div class="task-left">
            <img src="assets/images/square-icon.svg"/>
            <span contenteditable="true" class="description"></span>
        </div>
        <div class="task-right">
            <input type="date" class="duedate"></span>
            <div class="task-action-button">
                <img class="delete-button" src="assets/images/delete-icon.svg"/>
            </div>
        </div>
    </div>`;
}

function editTaskDom(e) {
    const str = e.target.innerText;
    const charMax = 20;

    if (e.key === 'Enter') e.target.blur();

    if (str.length >= charMax) {
        e.preventDefault();
        //TODO
    }
}

function deleteTaskDom(e) {
    if (e.target.className === 'delete-button') {
        const taskDiv = e.target.closest('.task');
        taskDiv.parentNode.removeChild(taskDiv);
    }
}

export {createTaskDom, editTaskDom, deleteTaskDom}