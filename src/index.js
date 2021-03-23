import {createCategory, updateCategoryName, deleteCategory, selectCategory, 
    selectAllTasks, updateTaskName, createTask, 
    updateTaskDueDate, deleteTask, checkOffTask, storeData, restoreData} from './modules/render';

restoreData();

createCategory();
updateCategoryName();
deleteCategory();
selectCategory();
createTask();
updateTaskName();
deleteTask();
updateTaskDueDate();
checkOffTask();
selectAllTasks();

document.addEventListener('click', () => storeData());
