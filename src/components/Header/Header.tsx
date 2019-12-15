import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "./model";
import "./Header.scss";

interface IProps {
  [key: string]: any;
}

const Header: React.FC<IProps> = () => {
  return (
    <div className="Header">
      <NavLink to="/" className="Header-logo">
        Logo
      </NavLink>

      <ul>
        {menuItems.map(item => {
          return (
            <li key={item.link}>
              <NavLink to={item.link} exact={item.exact}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
