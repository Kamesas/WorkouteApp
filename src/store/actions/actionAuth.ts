import { AUTH_SUCCESS, AUTH_LOGOUT, GET_USER_DATA } from "./types";

export const auth = (registerBody: any, isLogin: boolean) => {
  let url: string =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

  if (isLogin) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }

  return async (dispatch: any) => {
    try {
      const response = await fetch(
        `${url}${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(registerBody)
        }
      );
      const body = await response.json();
      // console.log(body);
      localStorage.setItem("token", body.idToken);
      localStorage.setItem("userId", body.localId);

      dispatch(authSuccess(body.idToken));
    } catch (error) {
      console.log("err", error);
    }
  };
};

export const getUserData = (token: string) => {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=";
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        `${url}${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ idToken: token })
        }
      );

      const body = await res.json();

      dispatch({ type: GET_USER_DATA, payload: body.users[0] });
    } catch (error) {
      console.log("error getUserData");
      logout();
    }
  };
};

export const authSuccess = (token: string) => {
  return {
    type: AUTH_SUCCESS,
    payload: token
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");

  return {
    type: AUTH_LOGOUT
  };
};

export const autoLogin = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  };
};
