import React from "react";
import "./App.css";
import About from "./Components/About/About";

import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Graphic from "./Components/Graphic/Graphic";
import Homee from "./Components/Homee/Homee";
import Navbar from "./Components/Navbar/Navbar";
import Skill from "./Components/Skill/Skill";

const App = () => {
  return (
    <>
      <Navbar />
      <Homee />
      <About />
      <Skill />
      <Graphic />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
