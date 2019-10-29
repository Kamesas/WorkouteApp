import { decorate, computed, observable, action } from "mobx";
import { RootStore } from "./RootStore";

export class BigTodoStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  tasks: { id: number; title: string; isDone: boolean }[] = [];

  setTasks = (tasks: { id: number; title: string; isDone: boolean }[]) => {
    this.tasks = tasks;
  };

  fetchTodos = () => {
    fetch("https://to-do-list-whis-firebase.firebaseio.com/todos.json")
      .then(res => res.json())
      .then(data =>
        Object.keys(data).map(task => {
          data[task].id = task;
          return data[task];
        })
      )
      .then(parseData => this.setTasks(parseData))
      .catch(err => console.log(err));
  };

  get sortedTasks() {
    const tasks = this.tasks;
    return tasks.slice().sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1));
  }

  get activeTasksCount() {
    return this.tasks.filter(item => !item.isDone).length;
  }

  addTask = async (task: string) => {
    const newTask = {
      id: this.tasks.length || 0,
      title: task,
      isDone: false
    };

    try {
      const res = await fetch(`https://to-do-list-whis-firebase.firebaseio.com/todos.json`, {
        method: "POST",
        body: JSON.stringify(newTask) // данные могут быть 'строкой' или {объектом}!
      });
      res.status === 200 && this.fetchTodos();
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  doneTask = async (id: number) => {
    let updateItem;
    this.tasks.forEach(task => {
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

  async deleteTask(id: number) {
    // function declaration for example
    try {
      const res = await fetch(`https://to-do-list-whis-firebase.firebaseio.com/todos/${id}.json`, {
        method: "DELETE"
      });

      res.status === 200 && this.fetchTodos();
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
}

decorate(BigTodoStore, {
  tasks: observable,
  setTasks: action,
  addTask: action,
  fetchTodos: action,
  deleteTask: action.bound, //bound for example
  sortedTasks: computed,
  activeTasksCount: computed
});
