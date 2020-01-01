import { AUTH, AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/types";

const initialState: any = {
  token: null
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH:
      return state;

    case AUTH_SUCCESS:
      return { ...state, token: action.payload };

    case AUTH_LOGOUT:
      return { ...state, token: null };

    default:
      return state;
  }
};
