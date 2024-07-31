import React from "react";
import "./FormInput.css";

interface IFormInput {
  type: string;
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  editable?: boolean;
}

const FormInput: React.FC<IFormInput> = ({
  type,
  id,
  name,
  value,
  placeholder,
  required,
  disabled,
  editable,
}) => {
  return (
    <div className="form-input__container">
      {!required ? (
        !disabled ? (
          <input
            className="form-input__input"
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
          />
        ) : (
          <input
            className="form-input__input"
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            disabled
          />
        )
      ) : !disabled ? (
        <input
          className="form-input__input"
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required
        />
      ) : (
        <input
          className="form-input__input"
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled
          required
        />
      )}
      <div className="form-input__buttons">
        <div
          className="form-input__visibility-button"
          onClick={() => console.log("visible")}
        >
          {type != "password" ? (
            <></>
          ) : (
            <i className="icon bx bx-low-vision"></i>
          )}
        </div>
        <div
          className="form-input__editable-button"
          onClick={() => console.log("edit")}
        >
          {!editable ? <></> : <i className="icon bx bx-edit-alt"></i>}
        </div>
      </div>
    </div>
  );
};

export default FormInput;
