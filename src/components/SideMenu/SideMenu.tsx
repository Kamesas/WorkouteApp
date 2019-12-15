import React from "react";
import { menuItems } from "./model";
import { NavLink } from "react-router-dom";
import "./SideMenu.scss";

const SideMenu: React.FC = () => {
  return (
    <ul className="SideMenu">
      {menuItems.map(item => {
        return (
          <li key={item.link} className="SideMenu-item">
            <NavLink
              to={item.link}
              exact={item.exact}
              className="SideMenu-link"
              activeClassName="SideMenu-link-active"
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SideMenu;
