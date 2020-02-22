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

      const expirationDate =
        +new Date(new Date().getTime()) + body.expiresIn * 1000;

      console.log(body);

      localStorage.setItem("token", body.idToken);
      localStorage.setItem("userId", body.localId);
      localStorage.setItem("expirationDate", JSON.stringify(expirationDate));

      dispatch(authSuccess(body.idToken));
      dispatch(getUserData(body.idToken));
      dispatch(autoLogout(body.expiresIn));
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
    }
  };
};

export const authSuccess = (token: string) => {
  return {
    type: AUTH_SUCCESS,
    payload: token
  };
};

export const autoLogout = (time: string) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(logout());
    }, +time * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

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
      const expirationDate: any = localStorage.getItem("expirationDate")
        ? localStorage.getItem("expirationDate")
        : 0;

      if (expirationDate <= new Date().getTime()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));

        const timeLogout = (expirationDate - +new Date()) / 1000;

        dispatch(autoLogout(timeLogout.toString()));
      }
    }
  };
};
