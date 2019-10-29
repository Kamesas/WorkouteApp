import { decorate, computed, observable, action } from "mobx";
import { RootStore } from "./RootStore";

export class BigTodoStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  tasks: { id: number; title: string; isDone: boolean }[] = [];

  fetchTodos = () => {
    fetch("https://to-do-list-whis-firebase.firebaseio.com/todos.json")
      .then(res => res.json())
      .then(data =>
        Object.keys(data).map(task => {
          data[task].id = task;
          return data[task];
        })
      )
      .then(parsData => (this.tasks = parsData))
      .catch(err => console.log(err));
  };

  get sortedTasks() {
    const tasks = this.tasks;
    return tasks.slice().sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1));
  }

  get activeTasksCount() {
    return this.tasks.filter(item => !item.isDone).length;
  }

  addTask = (task: any) => {
    this.tasks.push({
      id: this.tasks.length || 0,
      title: task,
      isDone: false
    });
  };

  doneTask = async (id: number) => {
    let updateItem;
    this.tasks.map(task => {
      if (task.id === id) {
        task.isDone = !task.isDone;
        updateItem = task;
        return;
      }
    });

    try {
      await fetch(`https://to-do-list-whis-firebase.firebaseio.com/todos/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(updateItem) // данные могут быть 'строкой' или {объектом}!
      });
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  deleteTask(id: number) {
    // function declaretion for example
    this.tasks = this.tasks.filter(item => item.id !== id);
  }
}

decorate(BigTodoStore, {
  tasks: observable,
  addTask: action,
  fetchTodos: action,
  deleteTask: action.bound, //bound for example
  sortedTasks: computed,
  activeTasksCount: computed
});
