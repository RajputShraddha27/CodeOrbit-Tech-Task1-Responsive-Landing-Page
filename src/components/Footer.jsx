import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaPlaneDeparture,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="row g-5 footer-main">
          <div className="col-12 col-lg-4">
            <div className="footer-about">
              <a href="#home" className="footer-logo">
                <span className="footer-logo-icon">
                  <FaPlaneDeparture />
                </span>
                <span>
                  Wander<span>Way</span>
                </span>
              </a>
              <p>
                We create thoughtfully planned travel experiences that help
                you explore beautiful destinations comfortably and confidently.
              </p>
              <div className="footer-socials">
                <button type="button" aria-label="Facebook">
                  <FaFacebookF />
                </button>
                <button type="button" aria-label="Instagram">
                  <FaInstagram />
                </button>
                <button type="button" aria-label="Twitter">
                  <FaXTwitter />
                </button>
                <button type="button" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#destinations">Destinations</a>
              <a href="#packages">Tour Packages</a>
              <a href="#about">About Us</a>
              <a href="#testimonials">Reviews</a>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="footer-links">
              <h3>Destinations</h3>
              <a href="#destinations">Goa</a>
              <a href="#destinations">Manali</a>
              <a href="#destinations">Jaipur</a>
              <a href="#destinations">Kerala</a>
              <a href="#packages">View All Tours</a>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <FaLocationDot />
                </span>
                <div>
                  <strong>Our Location</strong>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <FaPhone />
                </span>
                <div>
                  <strong>Phone Number</strong>
                  <p>+91 12345 67890</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <FaEnvelope />
                </span>
                <div>
                  <strong>Email Address</strong>
                  <p>hello@wanderway.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {currentYear} WanderWay. All rights reserved.{" "}
            <span className="creator-name">Rajput Shraddha</span>
          </p>
          <div className="footer-bottom-links">
            <button type="button">Privacy Policy</button>
            <button type="button">Terms & Conditions</button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;