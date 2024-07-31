import React from "react";
import "./NavBar.css";

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
          <a className="nav-bar__link" href="#">
            Home
          </a>
          <span></span>
        </div>
        <div className={current_link == "about" ? "current--link" : ""}>
          <a className="nav-bar__link" href="#">
            About Us
          </a>
          <span></span>
        </div>
        <div className={current_link == "contact" ? "current--link" : ""}>
          <a className="nav-bar__link" href="#">
            Contact
          </a>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
