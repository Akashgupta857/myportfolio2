import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Contect } from "../Context/Context";

function Navbar() {
  const { value, handleClick } = useContext(Contect);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/closed
  };

  return (
    <div className="mainNav">
      <div className="nav">
        {/* Hamburger Button for mobile screens */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        {/* Menu Links - hide on smaller screens when hamburger is not clicked */}
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link
            onClick={() => {
              handleClick("home");
              setIsMenuOpen(false); // Close menu on link click
            }}
            className={value === "home" ? "linkHover" : "link"}
            to="/"
          >
            <div className="logo">Home</div>
          </Link>
          <Link
            onClick={() => {
              handleClick("skills");
              setIsMenuOpen(false); // Close menu on link click
            }}
            className={value === "skills" ? "linkHover" : "link"}
            to="/skills"
          >
            <div className="logo">Skills</div>
          </Link>
          <Link
            onClick={() => {
              handleClick("projects");
              setIsMenuOpen(false); // Close menu on link click
            }}
            className={value === "projects" ? "linkHover" : "link"}
            to="/projects"
          >
            <div className="logo">Projects</div>
          </Link>
          <Link
            onClick={() => {
              handleClick("contact");
              setIsMenuOpen(false); // Close menu on link click
            }}
            className={value === "contact" ? "linkHover" : "link"}
            to="/contact"
          >
            <div className="logo">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
