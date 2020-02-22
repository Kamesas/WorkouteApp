import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const userName = useSelector(({ authReducer }: any) => {
    if (authReducer.userData) {
      return authReducer.userData.displayName
        ? authReducer.userData.displayName
        : authReducer.userData.email;
    }
    return null;
  });

  return (
    <div className="Header">
      <NavLink to="/" className="Header-logo">
        Workout App
      </NavLink>
      <div>{dayjs().format("DD MMM YYYY")}</div>
      <div>{userName}</div>
      <div className="Header-user">A</div>
    </div>
  );
};

export default Header;
