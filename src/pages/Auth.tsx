import React from "react";

interface IProps {
  [key: string]: any;
}

const Auth: React.FC<IProps> = () => {
  const loginHandler = () => {
    const registerBody = {
      login: "test",
      email: "testing4@gmal.com",
      password: "12345678",
      returnSecureToken: true
    };

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify(registerBody)
      }
    )
      .then(res => console.log("res", res.json()))
      .catch(err => console.log("err", err));
  };

  const registerHandler = () => {
    const registerBody = {
      login: "test",
      email: "testing4@gmal.com",
      password: "12345678",
      returnSecureToken: true
    };

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(registerBody)
      }
    )
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
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
