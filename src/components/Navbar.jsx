import { useState } from "react";
import { FaPlaneDeparture, FaBars, FaXmark } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container travel-navbar">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <FaPlaneDeparture />
          </span>

          <span>
            Wander<span className="logo-highlight">Way</span>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav
          className={`navbar-menu ${isMenuOpen ? "menu-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" className="nav-link active-link" onClick={closeMenu}>
            Home
          </a>

          <a href="#destinations" className="nav-link" onClick={closeMenu}>
            Destinations
          </a>

          <a href="#packages" className="nav-link" onClick={closeMenu}>
            Packages
          </a>

          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>

          <a href="#packages" className="book-trip-btn" onClick={closeMenu}>
            Book a Trip
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;