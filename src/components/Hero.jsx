import {
  FaArrowRight,
  FaLocationDot,
  FaSuitcaseRolling,
} from "react-icons/fa6";
import heroImage from "../assets/hero-travel.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <FaLocationDot />
            <span>Explore the world with WanderWay</span>
          </div>
          <h1 className="hero-title">
            Discover Your Next
            <span> Great Adventure</span>
          </h1>
          <p className="hero-description">
            Explore breathtaking destinations, thoughtfully designed tour
            packages and unforgettable travel experiences around the world.
          </p>
          <div className="hero-actions">
            <a href="#destinations" className="hero-primary-btn">
              Explore Destinations
              <FaArrowRight />
            </a>
            <a href="#packages" className="hero-secondary-btn">
              <FaSuitcaseRolling />
              View Packages
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>50+</strong>
              <span>Destinations</span>
            </div>
            <div className="hero-stat">
              <strong>10K+</strong>
              <span>Happy Travellers</span>
            </div>
            <div className="hero-stat">
              <strong>4.9</strong>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;