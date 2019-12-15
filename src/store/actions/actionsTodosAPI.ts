import {
  FETCH_TODOS_API,
  ADD_TODO_API,
  DELETE_TODO_API,
  COMPLETE_TODO_API,
  REMOVE_ALL_API,
  LOADING,
  ERROR,
  ITodoItem
} from "./typesTodos";

//axios.delete(`https://react-16-demo.firebaseio.com/todos/-Lhu8a0uoSRixdmECYPE.json`). then();

export const fetchTodos = (data: ITodoItem[]) => {
  return { type: FETCH_TODOS_API, payload: data };
};

const loading = () => {
  return { type: LOADING };
};

const error = (err: string) => {
  return {
    type: ERROR,
    payload: err
  };
};

export const addTodo = (newTodo: ITodoItem) => {
  return { type: ADD_TODO_API, payload: newTodo };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO_API,
    payload: id
  };
};

export const completeTodo = (id: number) => {
  return {
    type: COMPLETE_TODO_API,
    payload: id
  };
};

export const removeAll = () => {
  return {
    type: REMOVE_ALL_API,
    payload: []
  };
};

export const getTodos = () => async (
  dispatch: Function,
  getState: Function
) => {
  console.log(getState());
  dispatch(loading());
  try {
    const res = await fetch(
      "https://to-do-list-whis-firebase.firebaseio.com/todos.json"
    );
    const data = await res.json();

    const newArr = Object.keys(data).map(item => {
      return data[item];
    });

    return dispatch(fetchTodos(newArr));
  } catch (err) {
    dispatch(error(err));
  }
};
