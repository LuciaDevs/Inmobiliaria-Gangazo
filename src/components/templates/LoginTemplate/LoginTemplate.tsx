import React from "react";
import "./LoginTemplate.css";
import LoginForm from "../../organisms/LoginForm/LoginForm";

const LoginTemplate: React.FC = () => {
  return (
    <div className="login-form-container">
      <LoginForm />
    </div>
  );
};

export default LoginTemplate;
