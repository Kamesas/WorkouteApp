import React, { useContext } from "react";
import { Context } from "../../context/Context";

interface IProps {
  [key: string]: any;
}

const Header: React.FC<IProps> = () => {
  const { alert } = useContext(Context);

  return (
    <div className="Header">
      <div>Header</div>
      <h1>{alert}</h1>
    </div>
  );
};

export default Header;
