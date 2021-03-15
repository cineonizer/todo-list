import {Task} from './task';
import {Category} from './category';

const taskContainer = document.querySelector('#task-container');
const categoryContainer = document.querySelector('#category-container');

function createTaskDom() {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = 
        `<div class="task-left">
            <img data-img="checkbox" class src="assets/images/square-icon.svg"/>
            <span contenteditable="true" class="description"></span>
        </div>
        <div class="task-right">
            <input type="date" class="duedate"></span>
            <div class="task-action-button">
                <img class="delete-task-button" src="assets/images/delete-icon.svg"/>
            </div>
        </div>`;
    taskContainer.appendChild(taskDiv);
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
    const taskDiv = e.target.closest('.task');
    taskDiv.parentNode.removeChild(taskDiv);
}

function updateTitleDom(e) {
    const titleDom = document.querySelector('#title-name');
    titleSpan.innerText = e.target.innerText.trim();
}

function deleteAllTasksDom() {
    taskContainer.innerHTML = '';
}

function toggleCheckDom(e) {
    if (e.target.closest('.task').classList.contains('checked')) e.target.src = 'assets/images/square-icon.svg';
    else e.target.src = 'assets/images/square-checked-icon.svg';

    e.target.closest('.task').classList.toggle('checked');
}

function createCategoryDom(e) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category-button');
    categoryDiv.innerHTML = `
        <img class="category-img" src="assets/images/list-icon.svg"/>
        <span contenteditable="true" class="category-name"></span>
        <div class="action-button">
            <img class="delete-category-button" src="assets/images/delete-icon.svg"/>
        </div>`;
    categoryContainer.appendChild(categoryDiv);
}

function deleteCategoryDom(e) {
    const categoryBtnDiv = e.target.closest('.category-button');
    categoryBtnDiv.parentNode.removeChild(categoryBtnDiv);
}

export {createTaskDom, limitContentEditable, deleteTaskDom, updateTitleDom, deleteAllTasksDom, createCategoryDom, deleteCategoryDom, toggleCheckDom}