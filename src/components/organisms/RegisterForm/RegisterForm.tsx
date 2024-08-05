import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";
import FormButton from "../../atoms/FormButton/FormButton";
import FormInputAuth from "../../atoms/FormInputAuth/FormInputAuth";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== repassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(response.data);
      setSuccess(true);
      // Manejar la respuesta del servidor aquí
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="register-form__container">
      <img className="register-form__logo" src="/images/logo.png" alt="Logo" />
      <form className="register-form__form" onSubmit={handleRegister}>
        <FormInputAuth
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInputAuth
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInputAuth
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInputAuth
          type="password"
          id="repassword"
          name="repassword"
          placeholder="Repeat Password"
          required={true}
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">Registration successful!</p>}
        <FormButton label="Registrarse" />
      </form>
    </div>
  );
};

export default RegisterForm;
