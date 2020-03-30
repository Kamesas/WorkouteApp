import { AUTH_LOGOUT, GET_USER_DATA } from "./types";
import { authRef, fire } from "../../firebaseConfig";

export const auth = (registerBody: any, isLogin: boolean) => {
  if (isLogin) {
    return async (dispatch: any) => {
      fire
        .auth()
        .signInWithEmailAndPassword(registerBody.email, registerBody.password)
        .then(data => {
          const userData = {
            name: data.user ? data.user.displayName : null,
            email: data.user ? data.user.email : null
          };

          localStorage.setItem("WorkoutUserData", JSON.stringify(userData));
          dispatch(getUserData(userData));
        })
        .catch(error => {
          console.log(error);
        });
    };
  }
};

export const getUserData = (userData: any) => {
  return {
    type: GET_USER_DATA,
    payload: userData
  };
};

export const logout = () => (dispatch: any) => {
  authRef
    .signOut()
    .then(() => {
      alert("Ты вышел из аккаунта !");
      localStorage.removeItem("WorkoutUserData");
      dispatch({ type: AUTH_LOGOUT });
    })
    .catch(error => {
      console.log(error);
    });
};
