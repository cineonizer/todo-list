import {Project} from './project';
import {Category} from './category';
import {createCatDom, getCatIndex, getCatNameDom, limitChar, deleteCategoryDom} from './dom';

const project = new Project();

function createCategory() {
    const newCategoryBtn = document.querySelector('#new-category-button');
    newCategoryBtn.addEventListener('click', () => {
        const category = new Category('');
        project.addCategory(category);
        createCatDom();
    });
    return true;
}

function updateCategoryName() {
    document.addEventListener('keyup', (e) => {
        if (e.target.matches('.category-name'))
            project.getCategory(getCatIndex(e)).updateName = getCatNameDom(e);
    });

    document.addEventListener('keydown', (e) => {
        if (e.target.matches('.category-name')) limitChar(e, 19);
    });
}

function deleteCategory() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.delete-category-button')) {
            project.deleteCategory(getCatIndex(e));
            deleteCategoryDom(e);
        }
    });
}

function selectCategory() {
    const categoryBtns = document.querySelectorAll('.category-button');
    categoryBtns.forEach(categoryBtn => categoryBtn.addEventListener('click', () => {
        console.log('hi');
    }))
}

export {createCategory, updateCategoryName, deleteCategory, selectCategory}