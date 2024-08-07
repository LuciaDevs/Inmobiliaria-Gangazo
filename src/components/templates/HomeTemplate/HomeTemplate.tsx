import React, { useState } from "react";
import "./HomeTemplate.css";
import NavBar from "../../molecules/NavBar/NavBar";

const HomeTemplate: React.FC = () => {
  const frames = 3;
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [nextFrame, setNextFrame] = useState<number>(2);

  const scrollToNextFrame = () => {
    const current_frame = currentFrame + 1;
    const next_frame = nextFrame + 1;
    if (current_frame > frames) {
      setCurrentFrame(frames);
    } else {
      setCurrentFrame(current_frame);
    }
    if (next_frame > frames) {
      setNextFrame(frames);
    } else {
      setNextFrame(next_frame);
    }
  };

  const scrollToPrevFrame = () => {
    const current_frame = currentFrame - 1;
    const prev_frame = nextFrame - 1;
    if (current_frame < 1) {
      setCurrentFrame(1);
    } else {
      setCurrentFrame(current_frame);
    }
    if (prev_frame < 1) {
      setNextFrame(1);
    } else {
      setNextFrame(prev_frame);
    }
  };

  return (
    <div className="home__container">
      <NavBar current_link="home" />
      <div className="home__left-bar">
        <div className="home__frame-counter">
          <p className="home__current-frame">0{currentFrame}</p>
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
      <div className="home__content">
        <section id="frame1">
          <div className="home__frame-01">
            <h1>Casa Confort Gangazo</h1>
            <div className="home__frame-image">
              <img src="/images/casa.png" alt="House" />
              <span className="house--offer">
                <i className="bx bxs-offer"></i>
              </span>
            </div>
          </div>
        </section>

        <section id="frame2">
          <div className="home__frame-01">
            <div className="home__frame-image">
              <h1>US$ 14.040</h1>
              <p>+ Financiación en pesos</p>
              <img src="/images/HomeThree.png" alt="House" />
            </div>
          </div>
          <div className="home__frame-01">
            <div className="home__frame-image">
              <p>
                Este modelo posee amplios espacios de encuentro, para disfrutar
                entre todos. Cuenta con 3 dormitorios para que cada uno tenga su
                espacio personalizado y puedan sentir la nueva casa como su
                lugar en el mundo.
              </p>
              <button className="ver__mas">Ver mas</button>
              <img src="/images/casa.png" alt="House" />
            </div>
          </div>
        </section>

        <section id="frame3">
          <div className="home__frame-01">
            <div className="home__frame-image">
              <h1>US$ 14.040</h1>
              <p>+ Financiación en pesos</p>
              <img src="/images/casa.png" alt="House" />
              <span className="house--offer">
              </span>
            </div>
          </div>
        </section>
      </div>
      <a href={"#frame" + currentFrame} onClick={scrollToPrevFrame}>
        <span className="arrow--up">
          <i className="bx bx-chevron-up"></i>
        </span>
      </a>
      <a href={"#frame" + nextFrame} onClick={scrollToNextFrame}>
        <span className="arrow--down">
          <i className="bx bx-chevron-down"></i>
        </span>
      </a>
    </div>
  );
};

export default HomeTemplate;
