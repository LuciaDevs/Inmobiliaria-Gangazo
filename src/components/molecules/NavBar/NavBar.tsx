import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

interface INavBar {
  current_link: string;
}

const NavBar: React.FC<INavBar> = ({ current_link }) => {
  return (
    <div className="nav-bar__container">
      <div className="nav-bar__logo-container">
        <img className="nav-bar__logo" src="/images/logo.png" />
      </div>
      <nav className="nav-bar__nav">
        <div className={current_link == "home" ? "current--link" : ""}>
          <NavLink className="nav-bar__link"  to="/home">
            Home
          </NavLink>
          <span></span>
        </div>
        <div className={current_link == "about" ? "current--link" : ""}>
          <NavLink className="nav-bar__link"  to="/about">
            About Us
          </NavLink>
          <span></span>
        </div>
        <div className={current_link == "contact" ? "current--link" : ""}>
        <NavLink className="nav-bar__link"  to="/contacto">
            Contact
          </NavLink>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
