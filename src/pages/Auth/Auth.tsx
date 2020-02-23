import React, { useState } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import "./Auth.scss";

interface IProps {
  [key: string]: any;
}

const Auth: React.FC<IProps> = () => {
  const [loginForm, setLoginForm] = useState<boolean>(true);

  return (
    <div className="Auth">
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
    </div>
  );
};

export default Auth;
