// import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from "../components/HeroImg2.js";
import AboutContent from "../components/AboutContent.js";

const About = () => {
//   render();

  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT."
        text="I am currently doing an internship at IIT-Bombay as a developer operations engineer ."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
