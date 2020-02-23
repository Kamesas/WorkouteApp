import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";

interface IProps {
  setShowMenu: (showMenu: boolean) => void;
  showMenu: boolean;
}

const Header: React.FC<IProps> = ({ setShowMenu, showMenu }) => {
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
      <button className="Header-menu" onClick={() => setShowMenu(!showMenu)}>
        <AiOutlineMenu size={18} />
      </button>
      <NavLink to="/" className="Header-logo">
        Workout App
      </NavLink>
      <div className="Header-date">{dayjs().format("DD MMM YYYY")}</div>

      <div className="Header-user">{userName && userName.slice(0, 1)}</div>
    </div>
  );
};

export default Header;
