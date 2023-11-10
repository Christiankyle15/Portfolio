import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import doc from "../doc/Resume.pdf";
import img from "../image/pic1.png";
import "./Homee.css";

const Homee = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer", "Graphic Designer", "Technical Support"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="Homee" id="Homee">
      <div className="container">
        <div className="container-text" data-aos="fade-right">
          <div className="text">
            <h1>
              Hello, <span>I'm</span>
            </h1>
            <h1>
              <span>Christian Kyle B. Laguyo</span>
            </h1>
            <p>
              And I'm a <span>{typeEffect}</span>
            </p>
          </div>
          <div className="button">
            <a className="download" href={doc} download>
              Dowload CV
              <i className="fa fa-download"></i>
            </a>

            <a className="contact" href="#contact">
              Contact me
            </a>

            <a
              className="box1"
              href="https://github.com/Christiankyle15?tab=repositories"
              target="_blank"
            >
              <i className="icon1 fa fa-github"></i>
            </a>

            <a
              className="box3"
              href="https://www.linkedin.com/in/laguyo-christian-kyle-b-2a3998262/"
              target="_blank"
            >
              <i className="icon3 fa fa-linkedin-square"></i>
            </a>
          </div>
        </div>
        <div className="container-image" data-aos="fade-left">
          <img className="img" src={img} alt="PIC1" />
        </div>
      </div>
    </div>
  );
};

export default Homee;
