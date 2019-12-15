import { GET_WORKOUT_ACTION } from "../actions/typesTodos";

const initialState: any = null;

export const workoutStore = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_WORKOUT_ACTION:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
