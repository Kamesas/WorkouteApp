import * as types from "./typesCounter";

interface IDispatch {
  type: string;
  payload?: any;
}

export const addNumber = (num: number): IDispatch => {
  return {
    type: types.ADD_NUMBER,
    payload: num
  };
};
export const onIncrement = (): IDispatch => {
  return {
    type: types.INCREMENT
  };
};
export const onReset = (): IDispatch => {
  return {
    type: types.RESET_TO_ZERO
  };
};
