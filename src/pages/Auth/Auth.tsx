import React, { useState } from "react";
import AuthForm from "../../components/Auth/AuthForm";

interface IProps {
  [key: string]: any;
}

const Auth: React.FC<IProps> = () => {
  const [loginForm] = useState<boolean>(true);

  return (
    <div className="Auth">
      <div>Auth</div>

      <AuthForm loginForm={loginForm} />
    </div>
  );
};

export default Auth;
