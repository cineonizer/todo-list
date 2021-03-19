import {Project} from './project';
import {Category} from './category';
import {Task} from './task';
import {createCatDom, getCatIndex, getCatNameDom, limitChar, 
    deleteCatDom, updateTitleDom, toggleNewTaskBtnDom, 
    createTaskDom, deleteAllTasksDom, getTaskNameDom, getTaskIndex, deleteTaskDom} from './dom';

const project = new Project();
const newTaskBtn = document.querySelector('#new-task-button');

function createCategory() {
    const newCategoryBtn = document.querySelector('#new-category-button');
    newCategoryBtn.addEventListener('click', () => {
        const category = new Category('');
        project.addCategory(category);
        createCatDom();
    });
}

function updateCategoryName() {
    document.addEventListener('keyup', (e) => {
        if (e.target.matches('.category-name')) {
            project.getCategory(getCatIndex(e)).updateName = getCatNameDom(e);
            updateTitleDom(project.getCategory(getCatIndex(e)).name);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.target.matches('.category-name')) limitChar(e, 19);
    });
}

function deleteCategory() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.delete-category-button')) {
            if (project.getCategory(getCatIndex(e)).name === document.querySelector('#title-name').textContent 
            || !project.projects.length) toggleNewTaskBtnDom(true, e);
            project.deleteCategory(getCatIndex(e));
            deleteCatDom(e);
        }
    });
}

function selectCategory() {
    document.addEventListener('click', (e) => {
        if (e.target.parentNode.matches('.category-button') || e.target.matches('.category-button')) {
            updateTitleDom(project.getCategory(getCatIndex(e)).name);
            toggleNewTaskBtnDom(false, e);
            deleteAllTasksDom();

            if (project.getCategory(getCatIndex(e)).tasks.length) console.log('not empty')
            if (!project.getCategory(getCatIndex(e)).tasks.length) console.log('empty')

        }
    });
}

function createTask() {
    newTaskBtn.addEventListener('click', (e) => {
        const task = new Task('', '');
        project.getCategory(newTaskBtn.getAttribute('data-index')).addTask(task);
        createTaskDom();
    });
}

function updateTaskName() {
    document.addEventListener('keyup', (e) => {
        if (e.target.matches('.description')) {
            const category = project.getCategory(newTaskBtn.getAttribute('data-index'));
            const task = category.getTask(getTaskIndex(e));
            task.updateName = getTaskNameDom(e);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.target.matches('.description')) limitChar(e, 65);
    });
}

function deleteTask() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.delete-task-button')) {
            project.getCategory(newTaskBtn.getAttribute('data-index')).deleteTask(getTaskIndex(e));
            deleteTaskDom(e);
        }
    });
}


function testEvent() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('#all-task-button')) {
            console.log(project.projects)
        }
        
    })
}

export {createCategory, updateCategoryName, deleteCategory, selectCategory, createTask, updateTaskName, deleteTask, testEvent}