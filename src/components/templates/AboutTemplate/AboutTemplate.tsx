import React from "react";
import "./AboutTemplate.css";
import NavBar from "../../molecules/NavBar/NavBar";

interface IAboutTemplate {
  username: string;
  email: string;
  password: string;
  city: string;
}

const AboutTemplate: React.FC = () => {
  return (
    <div className="about-container">
      <NavBar current_link="about" />
    </div>
  );
};

export default AboutTemplate;
