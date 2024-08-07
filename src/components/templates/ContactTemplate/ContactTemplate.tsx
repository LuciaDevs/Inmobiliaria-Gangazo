import React from "react";
import "./ContactTemplate.css";
import ContactForm from "../../organisms/ContactForm/ContactForm";
import NavBar from "../../molecules/NavBar/NavBar";

const ContactTemplate: React.FC = () => {
  return (
    <div className="contact__container">
      <NavBar current_link="contact"/>
      <ContactForm />
    </div>
  );
};

export default ContactTemplate;
