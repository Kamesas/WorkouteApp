import { createContext } from "react";
import { decorate, observable, computed } from "mobx";

class Todos {
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

export const TodoStoreContext = createContext(new Todos());
