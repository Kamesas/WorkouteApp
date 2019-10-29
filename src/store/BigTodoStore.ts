import { decorate, computed, observable, action } from "mobx";
import { createContext } from "react";

class Store {
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

  addTask = (task: any) => {
    this.tasks.push({
      id: this.tasks.length || 0,
      title: task,
      done: false
    });
  };

  doneTask = (id: number) => {
    this.tasks.map(task => {
      return task.id === id ? (task.done = !task.done) : task;
    });
  };

  deleteTask(id: number) {
    // function declaretion for example
    this.tasks = this.tasks.filter(item => item.id !== id);
  }
}

decorate(Store, {
  tasks: observable,
  addTask: action,
  deleteTask: action.bound, //bound for example
  sortedTasks: computed,
  activeTasksCount: computed
});

export default createContext(new Store());
