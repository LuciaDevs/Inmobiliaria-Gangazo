import React, { useState } from "react";
import axios from "axios";
import './AdminRegister.css'
const AdminRegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
        role: "admin"
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
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">Registration successful!</p>}
        <button type="submit" className="register-button__button">Register as Admin</button>
      </form>
    </div>
  );
};

export default AdminRegisterForm;