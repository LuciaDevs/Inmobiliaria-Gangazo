import React from "react";
import "./FormButton.css";

interface IFormButton {
  label: string;
}

const FormButton: React.FC<IFormButton> = ({ label }) => {
  return (
    <div className="form-button__container">
      <button className="form-button__button" type="submit">
        {label}
      </button>
    </div>
  );
};

export default FormButton;
