import React, { useState } from "react";
import "./Auth.scss";

interface IProps {
  [key: string]: any;
}

const CheckBox: React.FC<IProps> = ({ toggler }) => {
  const [loginForm, setLoginForm] = useState<boolean>(true);

  return (
    <label className="CheckBox">
      <input
        type="checkbox"
        className="CheckBox-input"
        checked={loginForm}
        onChange={() => setLoginForm(!loginForm)}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default CheckBox;
