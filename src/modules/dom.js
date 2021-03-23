const taskContainer = document.querySelector('#task-container');
const categoryContainer = document.querySelector('#category-container');

function createCatDom(catName) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category-button');
    categoryDiv.innerHTML =
        `<img class="category-img" src="assets/images/list-icon.svg"/>
        <span contenteditable="true" class="category-name">${catName}</span>
        <div class="action-button">
            <img class="delete-category-button" src="assets/images/delete-icon.svg"/>
        </div>`;
    categoryContainer.appendChild(categoryDiv);
}

function getCatIndex(e) {
    return Array.prototype.indexOf.call(categoryContainer.childNodes, e.target.closest('.category-button'));
}

function getCatNameDom(e) {
    return e.target.innerText.trim();
}

function limitChar(e, charMax) {
    const str = e.target.innerText;
    if (e.key === 'Enter') e.target.blur();
    if (str.length >= charMax) e.preventDefault();
}

function deleteCatDom(e) {
    const categoryBtnDiv = e.target.closest('.category-button');
    categoryBtnDiv.parentNode.removeChild(categoryBtnDiv);
}

function updateTitleDom(title) {
    const titleSpan = document.querySelector('#title-name');
    titleSpan.innerText = title;
}

function toggleNewTaskBtnDom(isEmpty, e) {
    const newTaskBtn = document.querySelector('#toggle-new-task-button');
    newTaskBtn.style.display = 'block';
    document.querySelector('#new-task-button').setAttribute('data-index', getCatIndex(e));
    if(isEmpty) {
        newTaskBtn.style.display = 'none';
    }
}

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

function deleteAllTasksDom() {
    taskContainer.innerHTML = '';
}

function getTaskNameDom(e) {
    return e.target.innerText.trim();
}

function getTaskIndex(e) {
    return Array.prototype.indexOf.call(taskContainer.childNodes, e.target.closest('.task'));
}

function deleteTaskDom(e) {
    const taskDiv = e.target.closest('.task');
    taskDiv.parentNode.removeChild(taskDiv);
}

function toggleCheckDom(e) {
    if (e.target.closest('.task').classList.contains('checked')) e.target.src = 'assets/images/square-icon.svg';
    else e.target.src = 'assets/images/square-checked-icon.svg';
    e.target.closest('.task').classList.toggle('checked');
}

function updateTaskContainer(numOfTasks, category, bool) {
    for (let i = 0; i < numOfTasks; i++) {
        let checkboxImg = 'assets/images/square-icon.svg';
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        if (category.tasks[i].isComplete) {
            checkboxImg = 'assets/images/square-checked-icon.svg';
            taskDiv.classList.add('checked');
        }
        taskDiv.innerHTML = 
            `<div class="task-left">
                <img data-img="checkbox" class="" src="${checkboxImg}"/>
                <span contenteditable="${bool}" class="description">${category.tasks[i].name}</span>
            </div>
            <div class="task-right">
                <input type="date" class="duedate" value="${category.tasks[i].dueDate}"></span>
                <div class="task-action-button">
                    <img class="delete-task-button" src="assets/images/delete-icon.svg"/>
                </div>
            </div>`;
        taskContainer.appendChild(taskDiv);
    }
}

export {createCatDom, getCatIndex, getCatNameDom, limitChar, 
    deleteCatDom, updateTitleDom, toggleNewTaskBtnDom, 
    createTaskDom, deleteAllTasksDom, getTaskNameDom, 
    getTaskIndex, deleteTaskDom, toggleCheckDom, updateTaskContainer}