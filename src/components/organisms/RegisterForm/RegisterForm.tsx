import React from "react";
import "./RegisterForm.css";
import FormInput from "../../atoms/FormInput/FormInput";
import FormButton from "../../atoms/FormButton/FormButton";

const RegisterForm: React.FC = () => {
  return (
    <div className="register-form__container">
      <img className="register-form__logo" src="/images/logo.png" />
      <form className="register-form__form">
        <FormInput
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          required={true}
        />
        <FormInput
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
        />
        <FormInput
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
        />
        <FormInput
          type="text"
          id="repassword"
          name="repassword"
          placeholder="Repeat Password"
          required={true}
        />
        <FormButton label="Registrarse" />
      </form>
    </div>
  );
};

export default RegisterForm;
