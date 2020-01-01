import React from "react";
import { auth } from "../store/actions/actionAuth";
import { useDispatch } from "react-redux";

interface IProps {
  [key: string]: any;
}

const Auth: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    const registerBody = {
      email: "testing@gmal.com",
      password: "12345678",
      returnSecureToken: true
    };

    dispatch(auth(registerBody, true));
  };

  const registerHandler = () => {
    const registerBody = {
      email: "testing@gmal.com",
      password: "12345678",
      returnSecureToken: true
    };

    dispatch(auth(registerBody, false));
  };

  return (
    <div className="Auth">
      <div>Auth</div>

      <button onClick={registerHandler}>register</button>
      <button onClick={loginHandler}>login</button>

      <form>
        <input type="text" placeholder="login" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="email" />
      </form>
    </div>
  );
};

export default Auth;
