import * as types from "../actions/typesCounter";

const initialState: number = 0;

export const counterReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case types.DECREMENT:
      return state + 1;
    case types.INCREMENT:
      return state - 1;
    case types.RESET_TO_ZERO:
      return (state = 0);
    case types.ADD_NUMBER:
      return state + action.payload;

    default:
      return state;
  }
};
