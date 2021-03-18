import {Project} from './project';
import {Category} from './category';
import {createCatDom, getCatIndex, getCatNameDom, limitChar, 
    deleteCatDom, updateTitleDom, toggleNewTaskBtnDom} from './dom';

const project = new Project();

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
            || !project.projects.length) toggleNewTaskBtnDom(true);
            project.deleteCategory(getCatIndex(e));
            deleteCatDom(e);
        }
    });
}

function selectCategory() {
    document.addEventListener('click', (e) => {
        if (e.target.parentNode.matches('.category-button') || e.target.matches('.category-button')) {
            updateTitleDom(project.getCategory(getCatIndex(e)).name);
            toggleNewTaskBtnDom();
            if (project.getCategory(getCatIndex(e)).tasks.length) console.log('not empty')
            if (!project.getCategory(getCatIndex(e)).tasks.length) console.log('empty')


        }
    });
}

function testEvent() {
    document.addEventListener('click', (e)=> {
        if (e.target.matches('#all-task-button')) console.log(project.projects)
    })
}

export {createCategory, updateCategoryName, deleteCategory, selectCategory, testEvent}