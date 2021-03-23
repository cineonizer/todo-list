import {Project} from './project';
import {Category} from './category';
import {Task} from './task';
import {createCatDom, getCatIndex, getCatNameDom, limitChar, 
    deleteCatDom, updateTitleDom, toggleNewTaskBtnDom, 
    createTaskDom, deleteAllTasksDom, getTaskNameDom, 
    getTaskIndex, deleteTaskDom, toggleCheckDom, updateTaskContainer} from './dom';

let project = new Project();
const newTaskBtn = document.querySelector('#new-task-button');

function createCategory() {
    const newCategoryBtn = document.querySelector('#new-category-button');
    newCategoryBtn.addEventListener('click', () => {
        const category = new Category('');
        project.addCategory(category);
        createCatDom('');
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
        if (e.key === 'Tab') e.preventDefault();
    });
}

function deleteCategory() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.delete-category-button')) {
            if (project.getCategory(getCatIndex(e)).name === document.querySelector('#title-name').textContent 
                || !project.projects.length) toggleNewTaskBtnDom(true, e);
            project.deleteCategory(getCatIndex(e));
            deleteCatDom(e);
            deleteAllTasksDom();
        }
    });
}

function selectCategory() {
    document.addEventListener('click', (e) => {
        if (e.target.parentNode.matches('.category-button') || e.target.matches('.category-button')) {
            updateTitleDom(project.getCategory(getCatIndex(e)).name);
            toggleNewTaskBtnDom(false, e);
            deleteAllTasksDom();
            if (project.getCategory(getCatIndex(e)).tasks.length) {
                const category = project.getCategory(newTaskBtn.getAttribute('data-index'));
                const task = category.getTask(getTaskIndex(e));
                updateTaskContainer(category.tasks.length, category, true);
            }            
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
            storeData();
        }
    });
}

function updateTaskDueDate() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.duedate')) {
            const dateInputs = document.querySelectorAll('.duedate');
            dateInputs.forEach(dateInput => dateInput.addEventListener('change', (e) => {
                const category = project.getCategory(newTaskBtn.getAttribute('data-index'));
                const task = category.getTask(getTaskIndex(e));
                task.updateDueDate = e.target.value;
                dateInput.innerText = e.target.value;
            }));
        }
    });
}

function checkOffTask() {
    document.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-img') === ('checkbox')) {
            const category = project.getCategory(newTaskBtn.getAttribute('data-index'));
            const task = category.getTask(getTaskIndex(e));
            if (!task.isComplete) task.isComplete = true;
            else task.isComplete = false;
            toggleCheckDom(e);
        }
    });
}

function selectAllTasks() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('#all-task-button')) {
            deleteAllTasksDom();
            toggleNewTaskBtnDom(true, e)
            updateTitleDom('All Tasks');
            for (let i = 0; i < project.projects.length; i++) {
                updateTaskContainer(project.getCategory(i).tasks.length, project.getCategory(i), false);
            }
            updateTaskName();
            const datePickers = document.querySelectorAll('.duedate');
            datePickers.forEach(datePicker => datePicker.disabled = true);
        }
    })
}

function storeData() {
    localStorage.setItem('savedProject', JSON.stringify(project.projects));
    console.log(localStorage.savedProject);
}

function restoreData() {
    if (localStorage.savedProject) {
        const retrievedProject = localStorage.getItem('savedProject');
        project.projects = JSON.parse(retrievedProject);
        console.log(project.projects)
        console.log(project.projects.name)
        for (let i = 0; i < project.projects.length; i++) {
            createCatDom(project.projects[i].name);
        }
    }
}


export {createCategory, updateCategoryName, deleteCategory, selectCategory, 
    createTask, updateTaskName, deleteTask, updateTaskDueDate, 
    checkOffTask, selectAllTasks, storeData, restoreData}