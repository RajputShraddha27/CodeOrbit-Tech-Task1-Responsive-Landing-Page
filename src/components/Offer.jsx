import {
  FaArrowRight,
  FaCalendarCheck,
  FaCircleCheck,
  FaPlane,
  FaShieldHeart,
  FaTags,
} from "react-icons/fa6";
import "./Offer.css";

function Offer() {
  return (
    <section className="offer-section" id="offers">
      <div className="container">
        <div className="offer-card">
          <div className="offer-decoration offer-circle-one"></div>
          <div className="offer-decoration offer-circle-two"></div>
          <FaPlane className="offer-plane-icon" />
          <div className="row align-items-center g-5 offer-row">
            <div className="col-12 col-lg-8">
              <div className="offer-content">
                <div className="offer-label">
                  <FaTags />
                  <span>Limited Time Offer</span>
                </div>
                <h2>
                  Save Up To <span>30% Off</span> On Your Next Adventure
                </h2>
                <p>
                  Book your dream holiday today and enjoy exclusive discounts
                  on selected destinations and travel packages.
                </p>
                <div className="offer-features">
                  <div className="offer-feature">
                    <FaCircleCheck />
                    <span>Best price guarantee</span>
                  </div>
                  <div className="offer-feature">
                    <FaCalendarCheck />
                    <span>Flexible travel dates</span>
                  </div>
                  <div className="offer-feature">
                    <FaShieldHeart />
                    <span>Safe and secure booking</span>
                  </div>
                </div>
                <a href="#packages" className="offer-button">
                  Explore Deals
                  <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="offer-discount-wrapper">
                <div className="offer-discount-circle">
                  <span>UP TO</span>
                  <strong>30%</strong>
                  <span>OFF</span>
                </div>
                <p>On selected tour packages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;