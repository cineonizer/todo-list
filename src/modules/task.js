export class Task {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.isComplete = false;
    }

    set updateName(name) {
       this.name = name;
    }

    set updateDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    set updateDescr(name) {
        this.name = name;
    }
}


