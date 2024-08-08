import React, { useState } from "react";
import axios from "axios";
import './NewPassword.css';

const NewPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/changePassword", {
        email,
        newPassword
      });
      console.log(response.data);
      setSuccess(true);
      // Manejar la respuesta del servidor aquí
    } catch (err) {
      setError("Failed to change password. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="newpassword-form__container">
      <img className="newpassword-form__logo" src="/images/logo.png" alt="Logo" />
      <form className="newpassword-form__form" onSubmit={handleChangePassword}>
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
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        {error && <p className="newpassword-error">{error}</p>}
        {success && <p className="newpassword-success">Password changed successfully!</p>}
        <button type="submit" className="newpassword-button__button">Change Password</button>
      </form>
    </div>
  );
};

export default NewPasswordForm;
