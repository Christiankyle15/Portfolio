import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import img from "../image/pic2.png";
import "./About.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="About" id="About">
      <div className="title" data-aos="fade-down">
        <h1>
          <span>About</span> My Self
        </h1>
      </div>

      <div className="container">
        <div className="container-text" data-aos="fade-right">
          <div className="text">
            <p>
              I am Christian Kyle B. Laguyo, from Bagong Barrio, Caloocan City.
              I graduate with a Bachelor of Science in Information Technology
              BSIT from Global Reciprocal Colleges in August 2023, I am
              passionate about front end developer and graphic designer and i am
              willing to learn and undergo training to expand my knowledge in my
              skills ,
            </p>
          </div>
        </div>
        <div className="container-img" data-aos="fade-left">
          <img className="img" src={img} alt="PIC2" />
        </div>
      </div>
    </div>
  );
};

export default About;
