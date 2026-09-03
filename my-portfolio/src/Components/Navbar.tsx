import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  /* Lock body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <nav className="site-header__bar">
        <a href="#home" className="site-header__brand" onClick={closeMenu}>
          Madesh <sup>©</sup>
        </a>

        <button
          type="button"
          className={`site-header__toggle ${menuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
        </button>

        <div className={`site-header__panel ${menuOpen ? "is-open" : ""}`}>
          <ul className="site-header__menu">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="site-header__menu-item">
                <a
                  href={item.href}
                  className="site-header__menu-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="site-header__cta"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;