import React from "react";
import "./RegisterTemplate.css";
import RegisterForm from "../../organisms/RegisterForm/RegisterForm";

const RegisterTemplate: React.FC = () => {
  return (
    <div className="register-form-container">
      <RegisterForm />
    </div>
  );
};

export default RegisterTemplate;
