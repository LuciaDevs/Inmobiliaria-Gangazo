import React from "react";
import "./ContactForm.css";
import FormInput from "../../atoms/FormInput/FormInput";
import FormButton from "../../atoms/FormButton/FormButton";
import FormComment from "../../atoms/FormComment/FormComment";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form__container">
      <h2 className="contact-form__title">
        ¿Tienes alguna pregunta? Contáctanos y te responderemos a la brevedad
      </h2>
      <form className="contact-form__form ">
        <div className="contact-form__input">
          <p>Name</p>
          <FormInput
            type="text"
            id="email"
            name="email"
            placeholder=""
            required={true}
          />
        </div>
        <div className="contact-form__input">
          <p>Email</p>
          <FormInput
            type="text"
            id="email"
            name="email"
            placeholder=""
            required={true}
          />
        </div>
        <div className="contact-form__input">
          <p>Note</p>
          <FormComment id="note" name="note" placeholder="" required={true} />
        </div>
        <FormButton label="!CONTACTANOS!" />
      </form>
    </div>
  );
};

export default ContactForm;
