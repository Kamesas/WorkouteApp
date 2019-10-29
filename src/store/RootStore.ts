import { createContext } from "react";

import { Todos } from "./TodoStore";
import { BigTodoStore } from "./BigTodoStore";

export class RootStore {
  todotStore = new Todos(this);
  bigTodoStore = new BigTodoStore(this);
}

export const RootStoreContext = createContext(new RootStore());
