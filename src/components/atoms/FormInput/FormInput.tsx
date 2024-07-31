import React from "react";
import "./FormInput.css";

interface IFormInput {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
}

const FormInput: React.FC<IFormInput> = ({
  type,
  id,
  name,
  placeholder,
  required,
}) => {
  return (
    <div className="form-input__container">
      {!required ? (
        <input
          className="form-input__input"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="form-input__input"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default FormInput;
