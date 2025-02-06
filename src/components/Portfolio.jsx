import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState } from "react";
import "../componentStyling/Portfolio.css";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "light" : "dark"} id="portfolio-container">
      <Navbar darkMode={darkMode} onClick={handleDarkMode} />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
