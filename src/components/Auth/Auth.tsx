import React, { useState } from "react";
import axios from "axios";

interface IProps {
  [key: string]: any;
}

const apiKey = "AIzaSyCI7mrx8yr0k59j9UstYTKG1PlvomMd17c";
const signUpURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const signInURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

const formDataDefault: { email: string; pass: string } = { email: "", pass: "" };

const Auth: React.FC<IProps> = () => {
  const [formData, setFormData] = useState(formDataDefault);
  const { email, pass } = formData;

  const onChangeInput = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    const copyFormData = formData;

    switch (name) {
      case "email":
        copyFormData.email = value;
        break;
      case "pass":
        copyFormData.pass = value;
        break;

      default:
        break;
    }

    setFormData(() => {
      return { ...copyFormData };
    });
  };

  // const onSubmitHandler = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  // };

  const signUpHandler = () => {
    auth(signUpURL);
    setFormData(formDataDefault);
  };

  const signInHandler = () => {
    auth(signInURL);
    setFormData(formDataDefault);
  };

  const auth = (url: string) => {
    const data = {
      email: formData.email,
      password: formData.pass,
      returnSecureToken: true
    };

    try {
      axios.post(`${url}${apiKey}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Auth">
      <div>Auth</div>
      <form>
        <input type="email" name="email" autoComplete="nope" required value={email} onChange={onChangeInput} />
        <input
          type="password"
          name="pass"
          autoComplete="nope"
          required
          minLength={4}
          value={pass}
          onChange={onChangeInput}
        />
        <button onClick={signUpHandler}>signUp</button>
        <button onClick={signInHandler}>signIn</button>
      </form>
    </div>
  );
};

export default Auth;
