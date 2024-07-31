import React from "react";
import "./AboutTemplate.css";

interface IAboutTemplate {
  username: string;
  email: string;
  password: string;
  city: string;
}

const AboutTemplate: React.FC = () => {
  return <div className="about-container"></div>;
};

export default AboutTemplate;
