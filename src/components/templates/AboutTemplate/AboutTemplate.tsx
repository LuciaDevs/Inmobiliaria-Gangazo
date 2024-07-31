import React from "react";
import "./AboutTemplate.css";
import NavBar from "../../molecules/NavBar/NavBar";

const AboutTemplate: React.FC = () => {
  return (
    <div className="about__container">
      <NavBar current_link="about" />
      <div className="about__content">
        <h1 className="about__title">¡Bienvenidos a Gangazo Inmobiliario!</h1>
        <h2 className="about__subtitle">¿Que es Gangazo Inmobiliario?</h2>
        <p className="about__text">
          Gangazo Inmobiliario es tu portal de referencia para encontrar las
          mejores ofertas inmobiliarias en Colombia. Utilizamos inteligencia
          artificial y analisis de datos para identificar propiedades que, por
          sus caracteristicas y precio, representat una oportunidad unica para
          ti.
        </p>
        <a href="#" className="about__button">
          Conoce mas
        </a>
      </div>
    </div>
  );
};

export default AboutTemplate;
