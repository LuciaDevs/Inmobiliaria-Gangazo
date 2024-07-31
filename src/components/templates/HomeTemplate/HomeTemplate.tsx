import React from "react";
import "./HomeTemplate.css";
import NavBar from "../../molecules/NavBar/NavBar";

const HomeTemplate: React.FC = () => {
  const current_frame = 1;
  const frames = 3;

  return (
    <div className="home__container">
      <NavBar current_link="home" />
      <div className="home__content">
        <div className="home__left-bar">
          <div className="home__frame-counter">
            <p className="home__current-frame">0{current_frame}</p>
            <p className="home__frames">/ 0{frames}</p>
          </div>
          <div className="line"></div>
          <div className="small--dot"></div>
          <div className="medium--dot"></div>
          <div className="big--dot"></div>
          <div className="medium--dot"></div>
          <div className="small--dot"></div>
          <div className="line"></div>
        </div>
        <div className="home__frame-01">
          <h1>Casa Confort Gangazo</h1>
          <div className="home__frame-image">
            <img src="/images/casa.png" alt="House" />
            <span className="house--offer">
              <i className="bx bxs-offer"></i>
            </span>
          </div>
        </div>
      </div>
      <span className="arrow--down">
        <i className="bx bx-chevron-down"></i>
      </span>
    </div>
  );
};

export default HomeTemplate;
