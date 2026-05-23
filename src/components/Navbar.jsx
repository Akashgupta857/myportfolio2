import "./Navbar.css";
import { useContext, useState } from "react";
import { Contect } from "../context/Context";
import ResumeLink from "./ResumeLink";
import { scrollToSection } from "../utils/scrollToSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const { value, handleClick } = useContext(Contect);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onSectionNav = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    handleClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="mainNav">
      <div className="nav">
        <div
          className="hamburger"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        >
          &#9776;
        </div>

        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => onSectionNav(e, id)}
              className={value === id ? "linkHover" : "link"}
            >
              <div className="logo">{label}</div>
            </a>
          ))}
          <ResumeLink
            className={value === "resume" ? "linkHover" : "link"}
            onClick={() => {
              handleClick("resume");
              setIsMenuOpen(false);
            }}
          >
            <div className="logo">Resume</div>
          </ResumeLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
