import React from "react";
import './NewPasswordTemplate.css'
import NewPasswordForm from "../../organisms/NewPassword/NewPassword";


const NewPasswordTemplate: React.FC = () => {
  return (
    <div className="password-form-container">
      <NewPasswordForm />
    </div>
  );
};

export default NewPasswordTemplate;
