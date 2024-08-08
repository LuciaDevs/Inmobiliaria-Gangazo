import React from "react";
import "./ContactTemplate.css";
import ContactForm from "../../organisms/ContactForm/ContactForm";
import NavBar from "../../molecules/NavBar/NavBar";

const ContactTemplate: React.FC = () => {
  return (
    <> 
    <NavBar current_link="contact"/>
    <div className="contact__container">
      
      <ContactForm />
    </div>
    </>

  );
};

export default ContactTemplate;
