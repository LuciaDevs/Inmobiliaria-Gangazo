import React from "react";
import "./FormInputAuth.css";

interface IFormInput {
  type: string;
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  editable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputAuth: React.FC<IFormInput> = ({
  type,
  id,
  name,
  value,
  placeholder,
  required,
  disabled,
  editable,
  onChange,
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
            onChange={onChange}
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
            onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
        />
      )}
      <div className="form-input__buttons">
        <div
          className="form-input__visibility-button"
          onClick={() => console.log("visible")}
        >
          {type !== "password" ? null : (
            <i className="icon bx bx-low-vision"></i>
          )}
        </div>
        <div
          className="form-input__editable-button"
          onClick={() => console.log("edit")}
        >
          {!editable ? null : <i className="icon bx bx-edit-alt"></i>}
        </div>
      </div>
    </div>
  );
};

export default FormInputAuth;
