import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "auto" : "hidden"; // lock scroll
  };

  return (
    <nav className="nav">
      <div className="logo">
        Madesh <sup>©</sup>
      </div>
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`links ${open ? "show" : ""}`}>
        <li><a href="#works" onClick={toggleMenu}>Work</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#works" onClick={toggleMenu}>Process</a></li>
        <li>
          <a href="#contact" className="cta" onClick={toggleMenu}>
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;