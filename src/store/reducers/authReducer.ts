import { AUTH, AUTH_LOGOUT, GET_USER_DATA } from "../actions/types";

const initialState: any = {
  userData: null
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH:
      return state;

    case GET_USER_DATA:
      return { ...state, userData: action.payload };

    case AUTH_LOGOUT:
      return { ...state, userData: null };

    default:
      return state;
  }
};
