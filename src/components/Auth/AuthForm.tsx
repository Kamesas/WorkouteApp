import React, { useState, FormEvent } from "react";
import { auth } from "../../store/actions/actionAuth";
import { useDispatch } from "react-redux";
import "./AuthForm.scss";

interface IProps {
  [key: string]: any;
}

const formOptionData = {
  email: {
    inputValue: ""
  },
  login: {
    inputValue: ""
  },
  password: {
    inputValue: ""
  }
};

const AuthForm: React.FC<IProps> = ({ loginForm }) => {
  const [formOption, setFormOption] = useState<any>({ ...formOptionData });

  const { email, login, password } = formOption;
  const dispatch = useDispatch();

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const copyFormOption: any = formOption;

    switch (name) {
      case "email":
        copyFormOption.email.inputValue = value;
        break;

      case "login":
        copyFormOption.login.inputValue = value;
        break;

      case "password":
        copyFormOption.password.inputValue = value;
        break;

      default:
        break;
    }

    setFormOption({ ...copyFormOption });
  };

  const loginHandler = () => {
    const loginBody = {
      email: formOption.email.inputValue,
      password: formOption.password.inputValue,
      returnSecureToken: true
    };
    dispatch(auth(loginBody, true));
  };

  const registerHandler = () => {
    const registerBody = {
      email: formOption.email.inputValue,
      password: formOption.password.inputValue,
      returnSecureToken: true
    };

    dispatch(auth(registerBody, false));
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    loginForm ? loginHandler() : registerHandler();
  };

  return (
    <form onSubmit={onSubmitHandler} className="AuthForm">
      <input
        type="email"
        name="email"
        placeholder="enter your email"
        value={email.inputValue}
        onChange={e => onInputHandler(e)}
        className="AuthForm-input"
      />
      <input
        type="text"
        name="login"
        placeholder="enter your login"
        value={login.inputValue}
        onChange={e => onInputHandler(e)}
        className="AuthForm-input"
      />
      <input
        type="password"
        name="password"
        placeholder="enter your password"
        value={password.inputValue}
        onChange={e => onInputHandler(e)}
        className="AuthForm-input"
      />
      {loginForm ? (
        <button onClick={loginHandler}>login</button>
      ) : (
        <button onClick={registerHandler}>register</button>
      )}
    </form>
  );
};

export default AuthForm;