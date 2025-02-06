import "../componentStyling/Navbar.css";
// import "../componentStyling/Button.css";
import Button from "./Button";
import { useState } from "react";

const Navbar = ({ darkMode, onClick }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar-container">
      <div className="light-switch">
        <Button
          buttonText={darkMode ? "Lights Off" : "Lights On"}
          onClick={onClick}
        />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Button
            buttonText="About Me"
            buttonHref="#about-me"
            onClick={closeMobileMenu}
          />
        </li>
        <li className="nav-item">
          <Button
            buttonText="Projects"
            buttonHref="#projects"
            onClick={closeMobileMenu}
          />
        </li>
        <li className="nav-item">
          <Button
            buttonText="Contact"
            buttonHref="#contact"
            onClick={closeMobileMenu}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
