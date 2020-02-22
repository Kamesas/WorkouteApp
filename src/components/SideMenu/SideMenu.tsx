import React from "react";
import { menuItems } from "./model";
import { NavLink } from "react-router-dom";
import "./SideMenu.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/actionAuth";

const SideMenu: React.FC = () => {
  const token = useSelector(({ authReducer }: any) => {
    return authReducer.token;
  });
  const dispatch = useDispatch();

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

      {token && <button onClick={() => dispatch(logout())}>logout</button>}
    </ul>
  );
};

export default SideMenu;
