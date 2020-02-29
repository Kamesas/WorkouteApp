import React, { useState } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import "./Auth.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/actionAuth";
import { onResetState } from "../../store/actions/actionWorkout";

interface IProps {
  [key: string]: any;
}

const Auth: React.FC<IProps> = () => {
  const [loginForm, setLoginForm] = useState<boolean>(true);
  const userData = useSelector(({ authReducer }: any) => {
    return authReducer.userData;
  });
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
    dispatch(onResetState());
  };

  return (
    <div className="Auth">
      {userData ? (
        <button className="AuthForm-submitButton" onClick={logOutHandler}>
          logout
        </button>
      ) : (
        <>
          <label className="Auth-formToggler">
            <input
              type="checkbox"
              className="Auth-formToggler-input"
              checked={loginForm}
              onChange={() => setLoginForm(!loginForm)}
            />
            <span className="slider round"></span>
          </label>
          <div className="Auth-title">
            {loginForm ? "Login" : "Registration"} form
          </div>
          <div className="Auth-wrapForm">
            <AuthForm loginForm={loginForm} />
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
