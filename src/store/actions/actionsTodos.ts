import { FETCH_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO, REMOVE_ALL, ITodoItem } from "./typesTodos";

export const fetchTodos = () => {
  const todos: string | null = localStorage.getItem("todos");
  const localData = todos && JSON.parse(todos);
  return { type: FETCH_TODOS, payload: localData ? localData : [] };
};

export const addTodo = (newTodo: ITodoItem) => {
  return { type: ADD_TODO, payload: newTodo };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const completeTodo = (id: number) => {
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};

export const removeAll = () => {
  return {
    type: REMOVE_ALL,
    payload: []
  };
};
