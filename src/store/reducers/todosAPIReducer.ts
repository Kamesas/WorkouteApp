import { FETCH_TODOS_API, ITodoItem, LOADING, ERROR } from "../actions/typesTodos";

const initialState: { todoList: ITodoItem[]; loading: boolean; error: string } = {
  todoList: [],
  loading: false,
  error: ""
};

export default (state = initialState, { type, payload }: { type: string; payload: any }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case FETCH_TODOS_API:
      return {
        ...state,
        loading: false,
        todoList: payload
      };

    case ERROR:
      return {
        ...state,
        loading: true,
        error: payload
      };

      break;

    default:
      return state;
      break;
  }
};
