import React from "react";
import AuthForm from "../components/Auth/AuthForm";

interface IProps {
  [key: string]: any;
}

const Auth: React.FC<IProps> = () => {
  return (
    <div className="Auth">
      <div>Auth</div>

      <AuthForm />
    </div>
  );
};

export default Auth;
