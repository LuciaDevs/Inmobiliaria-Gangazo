import React from "react";
import "./AdminRegisterTemplate.css";
import AdminRegisterForm from "../../organisms/AdminRegister/AdminRegister";

const AdminRegisterTemplate: React.FC = () => {
  return (
    <div className="register-form-container">
      <AdminRegisterForm />
    </div>
  );
};

export default AdminRegisterTemplate;
