import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import FormButton from "../../atoms/FormButton/FormButton";
import FormInputAuth from "../../atoms/FormInputAuth/FormInputAuth";
import useAuth from "../../hook/userAuth";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuthState } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      const user = { email, roles: response.data.roles };
      localStorage.setItem("user", JSON.stringify(user));
      setAuthState({ logged: true, user });
      navigate("/"); // Redirige a la pantalla de inicio
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-form__container">
      <img className="login-form__logo" src="/images/logo.png" alt="Logo" />
      <form className="login-form__form" onSubmit={handleLogin}>
        <FormInputAuth
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="login-form__password">
          <FormInputAuth
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="forget--password">¿Olvidaste tu contraseña?</p>
        </div>
        {error && <p className="login-error">{error}</p>}
        <FormButton label="Iniciar Sesión" />
      </form>
    </div>
  );
};

export default LoginForm;