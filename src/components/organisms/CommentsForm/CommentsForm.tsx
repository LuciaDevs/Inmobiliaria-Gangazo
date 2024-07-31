import React from "react";
import "./CommentsForm.css";
import FormInput from "../../atoms/FormInput/FormInput";
import FormButton from "../../atoms/FormButton/FormButton";
import FormComment from "../../atoms/FormComment/FormComment";

const CommentsForm: React.FC = () => {
  return (
    <div className="comment-form__container">
      <h2 className="comment-form__logo">¿Tienes alguna pregunta? Contáctanos y te responderemos a la brevedad</h2>
      <form className="comments-form__form ">
        <div className="comment-form__form">
          <p>Name</p>
          <FormInput
            type="text"
            id="email"
            name="email"
            placeholder=""
            required={true}
          />
        </div>
        <div className="comment-form__form">
          <p>Email</p>
          <FormInput
            type="text"
            id="email"
            name="email"
            placeholder=""
            required={true}
          />
        </div>
        <div className="comment-form__form">
          <p>Note</p>
          <FormComment
            id="note"
            name="note"
            placeholder=""
            required={true}
          />
        </div>
        <FormButton label="CONTACTANOS!" />
      </form>
    </div>
  );
};

export default CommentsForm;
