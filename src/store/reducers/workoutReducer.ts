import {
  POST_WORKOUT_ACTION,
  GET_WORKOUT_ACTION,
  DELETE_WORKOUT_ACTION,
  UPDATE_WORKOUT_ACTION,
  CREATE_WORKOUT_ACTION
} from "../actions/typesTodos";

const initialState: any = null;

export const workoutStore = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_WORKOUT_ACTION:
      return { ...state, ...action.payload };

    case UPDATE_WORKOUT_ACTION:
      let newState = state;
      newState[action.currDayId] = {
        ...state[action.currDayId],
        ...action.payload
      };
      return { ...state, ...newState };

    case CREATE_WORKOUT_ACTION:
      return { ...action.payload };

    case DELETE_WORKOUT_ACTION:
      return state;

    default:
      return state;
  }
};
