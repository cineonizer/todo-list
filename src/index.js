import {Task} from './modules/task';
import {Category} from './modules/category';
import {createTaskDom, editTaskDom, deleteTaskDom} from './modules/dom';


const newTaskBtn = document.querySelector('#new-button');
const category = new Category(document.querySelector('#title-name').innerText);

newTaskBtn.addEventListener('click', () => {
    createTaskDom();
    const task = new Task('Task Description', 'Tentative');
    category.tasks.push(task);
});

document.addEventListener('keydown', (e) => {
    editTaskDom(e);
    if (e.key === 'Enter' && e.target.className === 'description') {
        console.log(e.target.innerText);
    }
});




