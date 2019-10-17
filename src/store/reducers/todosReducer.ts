import { FETCH_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO, REMOVE_ALL, ITodoItem } from "../actions/typesTodos";

const initialState: ITodoItem[] = [];

export default (state = initialState, { type, payload }: { type: string; payload: any }) => {
  switch (type) {
    case FETCH_TODOS:
      return payload;

    case ADD_TODO:
      return [...state, payload];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload);

    case COMPLETE_TODO:
      return state.map(todo => (todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo));

    case REMOVE_ALL:
      return payload;

    default:
      return state;
  }
};
