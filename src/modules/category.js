export class Category {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    set updateName(name) {
        this.name = name;
    }

    getTask(index) {
        return this.tasks[index];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}