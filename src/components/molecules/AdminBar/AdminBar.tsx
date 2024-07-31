import React from "react";
import "./AdminBar.css";

interface IAdminBar {
  name: string;
  lastname: string;
  profile_photo: string;
}

const AdminBar: React.FC<IAdminBar> = ({ name, lastname, profile_photo }) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="admin-bar__container">
      <div className="admin-bar__logo-container">
        <img className="admin-bar__logo" src="/images/logo.png" />
      </div>

      <h1 className="admin-bar__title">
        ¡Bienvenido {capitalizeFirstLetter(name)}!
      </h1>
      <div className="admin-bar__profile">
        <p>
          {capitalizeFirstLetter(name) +
            ". " +
            lastname.charAt(0).toUpperCase()}
        </p>
        <img src={"/images/" + profile_photo} alt="Profile picture" />
      </div>
    </div>
  );
};

export default AdminBar;
