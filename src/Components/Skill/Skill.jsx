import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import icon6 from "../image/bootstrap.png";
import icon2 from "../image/css.png";
import icon1 from "../image/html.png";
import icon3 from "../image/js.png";
import prog2 from "../image/portfolio.jpg";
import prog1 from "../image/prog1.jpg";
import icon5 from "../image/react.png";
import icon4 from "../image/sass.png";
import img from "../image/webdev.png";
import "./Skill.css";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Skill" id="Skill">
      <div className="title" data-aos="fade-down">
        <h1>
          My <span>Skills</span>
        </h1>
      </div>

      <div className="container">
        <div className="container-img" data-aos="fade-right">
          <div className="title1">
            <h1>Front end Developer</h1>
          </div>
          <div className="img">
            <img src={img} alt="graphic.png" />
          </div>
          <div className="title2">
            <h1>Technology :</h1>
          </div>
          <div className="technology">
            <img className="icon1" src={icon1} alt="html.png" />
            <img className="icon2" src={icon2} alt="css.png" />
            <img className="icon3" src={icon3} alt="js.png" />
            <img className="icon4" src={icon4} alt="sass.png" />
            <img className="icon5" src={icon5} alt="react.png" />
            <img className="icon6" src={icon6} alt="bootstrap.png" />
          </div>
        </div>
        <div className="container-project">
          <div className="prog1" data-aos="zoom-in">
            <div className="img">
              <a href="https://ckshoes.netlify.app/" target="_blank">
                <img src={prog1} alt="prog1.png" />
              </a>
            </div>
            <div className="pag">
              <h1>Basic Responsive Website</h1>
              <div className="icon">
                <img className="icon1" src={icon1} alt="html.png" />
                <img className="icon2" src={icon2} alt="css.png" />
                <img className="icon3" src={icon3} alt="js.png" />
              </div>
            </div>
          </div>

          <div className="prog2" data-aos="zoom-in">
            <div className="img">
              <a href="#" target="_blank">
                <img src={prog2} alt="prog1.png" />
              </a>
            </div>
            <div className="pag">
              <h1>Portfolio</h1>
              <div className="icon">
                <img className="icon5" src={icon5} alt="html.png" />
                <img className="icon4" src={icon4} alt="css.png" />
              </div>
            </div>
          </div>

          <div className="pag1">
            <p>Kindly press each image to view my project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
