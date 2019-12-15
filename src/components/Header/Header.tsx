import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import dayjs from "dayjs";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <NavLink to="/" className="Header-logo">
        Workout App
      </NavLink>
      <div>{dayjs().format("DD MMM YYYY")}</div>
      <div className="Header-user">A</div>
    </div>
  );
};

export default Header;
