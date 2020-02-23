import React from "react";
import { menuItems } from "./model";
import { NavLink } from "react-router-dom";
import "./SideMenu.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/actionAuth";
import { onResetState } from "../../store/actions/actionWorkout";

const SideMenu: React.FC = () => {
  const token = useSelector(({ authReducer }: any) => {
    return authReducer.token;
  });
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
    dispatch(onResetState());
  };

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

      {token && <button onClick={logOutHandler}>logout</button>}
    </ul>
  );
};

export default SideMenu;
