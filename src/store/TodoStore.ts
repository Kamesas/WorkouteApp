import { decorate, observable, computed } from "mobx";
import { RootStore } from "./RootStore";

export class Todos {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  todos = [{ id: 1, text: "Buy eggs", completed: true }, { id: 2, text: "Write a post", completed: false }];

  get remainingTodos() {
    return this.todos.filter(t => !t.completed).length;
  }

  toggleTodo = (index: number) => {
    this.todos[index].completed = !this.todos[index].completed;
  };
}

decorate(Todos, {
  todos: observable,
  remainingTodos: computed
});
