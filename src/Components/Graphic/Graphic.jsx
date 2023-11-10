import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Ads1 from "../image/Ads1.jpg";
import Brochure1 from "../image/Brochure1.jpg";
import Tarp2 from "../image/Tarp2.jpg";
import icon2 from "../image/canva.png";
import icon4 from "../image/capcut.png";
import icon3 from "../image/filmora.png";
import img from "../image/graphic.png";
import logo1 from "../image/logo1.png";
import icon1 from "../image/photoshop.png";
import "./Graphic.css";

const Graphic = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Graphic">
      <div className="container">
        <div className="container-img" data-aos="fade-right">
          <div className="title1">
            <h1>Graphic Designer</h1>
          </div>
          <div className="img">
            <img src={img} alt="graphic.png" />
          </div>
          <div className="title2">
            <h1>Application :</h1>
          </div>

          <div className="technology">
            <img className="icon1" src={icon1} alt="html.png" />
            <img className="icon2" src={icon2} alt="css.png" />
            <img className="icon3" src={icon3} alt="js.png" />
            <img className="icon4" src={icon4} alt="sass.png" />
          </div>
        </div>
        <div className="container-project">
          <div className="button" data-aos="zoom-in">
            <a
              href="https://drive.google.com/drive/folders/1YL4gBkBbYqzM4NnG-sFgKOhSPw04rZc8?usp=sharing"
              target="_blank"
              className="bottom1"
            >
              <div className="img">
                <img src={logo1} alt="logo1.png" />
              </div>
              <div className="name">
                <p>LOGO</p>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1JcMSOMoU_AtN6iyZu3vJVihM3RxQfz5S?usp=sharing"
              target="_blank"
              className="bottom2"
            >
              <div className="img">
                <img src={Ads1} alt="Ads1.jpg" />
              </div>
              <div className="name">
                <p>Advertising poster</p>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1N1h1KrzPLoKeG3M-KSy6dNXaMQ5NpptT?usp=sharing"
              className="bottom3"
              target="_blank"
            >
              <div className="img">
                <img src={Tarp2} alt="Tarp2.jpg" />
              </div>
              <div className="name">
                <p>Tarpaulin</p>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/14eCAaX2yEj96ALxzRv_UkkmHvWJIi2Ob?usp=sharing"
              target="_blank"
              className="bottom4"
            >
              <div className="img">
                <img src={Brochure1} alt="Video1.jpg" />
              </div>
              <div className="name">
                <p>Brochure</p>
              </div>
            </a>
          </div>
          <div className="pag">
            <p>Kindly press each image to view my project. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
