import React from "react";
import "./LoginForm.css";
import FormInput from "../../atoms/FormInput/FormInput";
import FormButton from "../../atoms/FormButton/FormButton";

const LoginForm: React.FC = () => {
  return (
    <div className="login-form__container">
      <img className="login-form__logo" src="/images/logo.png" />
      <form className="login-form__form">
        <FormInput
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
        />
        <div className="login-form__password">
          <FormInput
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            required={true}
          />
          <p className="forget--password">¿Olvidaste tu contraseña?</p>
        </div>
        <FormButton label="Iniciar Sesion" />
      </form>
    </div>
  );
};

export default LoginForm;
