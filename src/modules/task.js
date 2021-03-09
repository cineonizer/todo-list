export class Task {
    constructor(name, descr, dueDate) {
        this.name = name;
        this.descr = descr;
        this.dueDate = dueDate;
    }

    set updateName(name) {
       this.name = name;
    }

    set updateDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    set updateDescr(descr) {
        this.descr = descr;
    }
}

