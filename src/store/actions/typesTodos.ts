export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_ALL = "REMOVE_ALL";

export const FETCH_TODOS_API = "FETCH_TODOS_API";
export const ADD_TODO_API = "ADD_TODO_API";
export const DELETE_TODO_API = "DELETE_TODO_API";
export const COMPLETE_TODO_API = "COMPLETE_TODO_API";
export const REMOVE_ALL_API = "REMOVE_ALL_API";
export const ERROR = "ERROR";
export const LOADING = "LOADING";

export interface ITodoItem {
  id: number | string;
  title: string;
  isDone: boolean;
}
