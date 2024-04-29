import "./AboutMe.css";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <section className="about section bd-container" id="about">
          <span className="section-subtitle">My history</span>
          <h2 className="section-title">About me</h2>

          <div className="about__container bd-grid">
            <div className="about__data bd-grid">
              <p className="about__description">
                <span>
                  Hello, I am <br />
                </span>
                Freelance frontend developer, I am passionate about creating and
                developing web interfaces. With years of experience in web
                design and development.
              </p>

              <div>
                <span className="about__number">05</span>
                <span className="about__achievement">Years of Experience</span>
              </div>

              <div>
                <span className="about__number">29+</span>
                <span className="about__achievement">Projects completed</span>
              </div>

              <div>
                <span className="about__number">07</span>
                <span className="about__achievement">Best work awards</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1579591919791-0e3737ae3808?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzY1NzZ8&ixlib=rb-4.0.3&q=85"
          alt=""
          className="about__img"
        />
      </div>
    </div>
  );
};

export default AboutMe;
