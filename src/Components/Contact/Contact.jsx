import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Contact" id="contact">
      <div className="container">
        <div className="title" data-aos="fade-down">
          <h1>
            My <span>Contact</span>
          </h1>
        </div>
        <div className="main-hero">
          <div className="details" data-aos="fade-right">
            <ul>
              <li>
                <i class="fa fa-facebook-official">
                  <p> Christian kyle laguyo</p>
                </i>
              </li>

              <li>
                <i class="fa fa-github">
                  <p> github.com/Christiankyle15</p>
                </i>
              </li>

              <li>
                <i class="fa fa-linkedin-square">
                  <p> linkedin.com/in/laguyo-christian-kyle-b-2a3998262/</p>
                </i>
              </li>

              <li>
                <i class="fa fa-envelope icon">
                  <p> christianlaguyo5@gmail.com</p>
                </i>
              </li>

              <li>
                <i class="fa fa-mobile-phone">
                  <p> TM-09977601952 Smart-09614506598 </p>
                </i>
              </li>
            </ul>
          </div>
          <div className="box-Details" data-aos="fade-left">
            <form
              action="https://formsubmit.co/2f5364956f0b2893bf3e3d90ee34c35e"
              method="POST"
              className="form"
            >
              <input
                className="input1"
                name="Name"
                placeholder="Full Name"
                required
              />
              <input
                className="input2"
                name="Email"
                placeholder="Email"
                required
              />
              <input className="input3" name="Subject" placeholder="Subject" />
              <textarea
                className="input4"
                name="Message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
