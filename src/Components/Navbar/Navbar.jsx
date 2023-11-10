import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuIfWideScreen = () => {
      if (window.innerWidth > 992 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuIfWideScreen);

    return () => {
      window.removeEventListener("resize", closeMenuIfWideScreen);
    };
  }, [isMenuOpen]);

  return (
    <BrowserRouter>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv flex" data-aos="fade-down">
            <a href="#Homee">
              <h1>
                <span>C</span>k
              </h1>
            </a>
          </div>

          <div className={`menu ${isMenuOpen ? "navBar show" : "navBar  "}`}>
            <ul id="menu" className="navLists flex" data-aos="fade-down">
              <li className="navItem">
                <Link to="#Homee">Home</Link>
              </li>

              <li className="navItem">
                <Link to="#About">About</Link>
              </li>

              <li className="navItem">
                <Link to="#Skill">Skills</Link>
              </li>

              <li className="navItem">
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="menu-icon">
            <i
              onClick={toggleMenu}
              className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}
            />
          </div>
        </header>
      </section>
    </BrowserRouter>
  );
};

export default Navbar;
