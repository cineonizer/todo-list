import {Task} from './task';
import {Category} from './category';

const newTaskBtn = document.querySelector('#new-button');

function addNewTask() {
    newTaskBtn.addEventListener('click', () => {
        createNewTaskDom();
    });
}

function createNewTaskDom() {
    const taskContainer = document.querySelector('#task-container');
    taskContainer.innerHTML += `
    <div class="task">
        <div class="task-left">
            <img src="assets/images/square-icon.svg"/>
            <span class="description">Description</span>
        </div>
        <div class="task-right">
            <span class="duedate">No Due Date</span>
            <div class="task-action-button">
                <img src="assets/images/edit-icon.svg"/>
                <img src="assets/images/delete-icon.svg"/>
            </div>
        </div>
    </div>
    `;
}


export {addNewTask}