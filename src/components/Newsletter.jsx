import { useState } from "react";
import {
  FaCircleCheck,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa6";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage("Please enter your email address.");
      setMessageType("error");
      return;
    }

    setMessage("Thank you! You have successfully subscribed.");
    setMessageType("success");
    setEmail("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-decoration newsletter-circle-one"></div>
          <div className="newsletter-decoration newsletter-circle-two"></div>
          <div className="row align-items-center g-4 newsletter-row">
            <div className="col-12 col-lg-6">
              <div className="newsletter-content">
                <div className="newsletter-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="newsletter-label">
                    Travel inspiration
                  </span>
                  <h2>Get Exclusive Travel Deals</h2>
                  <p>
                    Subscribe to receive special offers, destination ideas and
                    useful travel tips directly in your inbox.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="newsletter-form-wrapper">
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <label htmlFor="newsletter-email" className="visually-hidden">
                    Email address
                  </label>
                  <div className="newsletter-input-group">
                    <FaEnvelope className="newsletter-input-icon" />
                    <input
                      type="email"
                      id="newsletter-email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email address"
                      autoComplete="email"
                    />
                    <button type="submit">
                      <span>Subscribe</span>
                      <FaPaperPlane />
                    </button>
                  </div>
                </form>
                {message && (
                  <div
                    className={`newsletter-message ${messageType}`}
                    role="status"
                    aria-live="polite"
                  >
                    {messageType === "success" && <FaCircleCheck />}
                    <span>{message}</span>
                  </div>
                )}
                <p className="newsletter-privacy">
                  No spam. Unsubscribe whenever you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;