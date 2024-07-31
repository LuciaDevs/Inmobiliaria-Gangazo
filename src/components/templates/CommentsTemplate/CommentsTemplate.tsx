import React from "react";
import "./CommentsTemplate.css";
import CommentsForm from "../../organisms/CommentsForm/CommentsForm";

const CommentsTemplate: React.FC = () => {
  return (
    <div className="login-form-container">
      <CommentsForm/>
    </div>
  );
};

export default CommentsTemplate;
