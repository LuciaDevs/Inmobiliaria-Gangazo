import React, { useState } from "react";
import "./HomeTemplate.css";
import NavBar from "../../molecules/NavBar/NavBar";

const HomeTemplate: React.FC = () => {
  const frames = 3;
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [nextFrame, setNextFrame] = useState<number>(2);
  const [prevFrame, setPrevFrame] = useState<number>(1);

  const scrollToNextFrame = () => {
    let current_frame = currentFrame + 1;
    let next_frame = nextFrame + 1;
    if (current_frame > 3) {
      setCurrentFrame(3);
    } else {
      setCurrentFrame(current_frame);
    }
    if (next_frame > 3) {
      setNextFrame(3);
    } else {
      setNextFrame(next_frame);
    }
  };

  const scrollToPrevFrame = () => {
    let current_frame = currentFrame - 1;
    let prev_frame = nextFrame - 1;
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
            <h1>Casa2</h1>
            <div className="home__frame-image">
              <img src="/images/casa.png" alt="House" />
              <span className="house--offer">
                <i className="bx bxs-offer"></i>
              </span>
            </div>
          </div>
        </section>
        <section id="frame3">
          <div className="home__frame-01">
            <h1>Cas3</h1>
            <div className="home__frame-image">
              <img src="/images/casa.png" alt="House" />
              <span className="house--offer">
                <i className="bx bxs-offer"></i>
              </span>
            </div>
          </div>
        </section>
      </div>
      <a href={"#frame" + prevFrame} onClick={() => scrollToPrevFrame()}>
        <span className="arrow--up">
          <i className="bx bx-chevron-up"></i>
        </span>
      </a>
      <a href={"#frame" + nextFrame} onClick={() => scrollToNextFrame()}>
        <span className="arrow--down">
          <i className="bx bx-chevron-down"></i>
        </span>
      </a>
    </div>
  );
};

export default HomeTemplate;
