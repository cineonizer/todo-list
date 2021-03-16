export class Project {
    constructor() {
        this.projects = [];
    }

    getCategory(index) {
        return this.projects[index];
    }

    addCategory(category) {
        this.projects.push(category);
    }

    deleteCategory(index) {
        this.projects.splice(index, 1);
    }
}