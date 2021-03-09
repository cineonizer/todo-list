import {Task} from './modules/task';
import {Category} from './modules/category';
import {addNewTask} from './modules/dom';

let category = new Category('School');

let task = new Task('JavaScript Final', 'study factory functions', '3/2/2021');
category.addTask(task);

task = new Task('Math Final', 'study discrete math', '3/2/2021');
category.addTask(task);

task = new Task('History Final', 'study french revolution', '3/2/2021');
category.addTask(task);

console.log(category);
addNewTask();



