import { observable, action, decorate, computed } from "mobx";

export class TodoStore {
  tasks = [
    { id: 0, title: "Create todo-react app", done: false },
    { id: 1, title: "Make a video about it", done: true },
    { id: 2, title: "Create simple todo-app", done: false }
  ];

  get sortedTasks() {
    const tasks = this.tasks;
    return tasks.slice().sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  }

  get activeTasksCount() {
    return this.tasks.filter(item => !item.done).length;
  }

  setTasks(payload: any) {
    this.tasks = payload;
  }

  addTask(task: any) {
    let tasks = this.tasks;

    tasks.push({
      id: this.tasks.length || 0,
      title: task,
      done: false
    });

    this.setTasks(tasks);
  }

  doneTask(id: any) {
    let tasks = this.tasks;
    const index = tasks.map(task => task.id).indexOf(id);
    tasks[index].done = true;
    this.setTasks(tasks);
  }

  deleteTask(id: any) {
    this.setTasks(this.tasks.filter(item => item.id !== id));
  }
}

decorate(TodoStore, {
  tasks: observable,
  setTasks: action,
  addTask: action,
  deleteTask: action,
  sortedTasks: computed,
  activeTasksCount: computed
});

export default new TodoStore();
