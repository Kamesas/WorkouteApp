import { createContext } from "react";
import { Todos } from "./TodoStore";
import BigTodeStore from "./BigTodoStore";

export class RootStore {
  //TodoStore = new Todos(this);
  //BigTodeStore = new BigTodeStore(this);
}

export const RootStoreContext = createContext(new RootStore());
