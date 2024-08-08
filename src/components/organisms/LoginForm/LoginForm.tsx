import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import FormButton from "../../atoms/FormButton/FormButton";
import FormInputAuth from "../../atoms/FormInputAuth/FormInputAuth";
import AuthsContext from "../../context/AuthProvider";

const LoginForm: React.FC = () => {
  const { setAuthState } = useContext(AuthsContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Guarda la información del usuario en el contexto
      setAuthState({
        logged: true,
        user: {
          email: response.data.email,
          roles: response.data.roles
        }
      });

      navigate("/home");
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