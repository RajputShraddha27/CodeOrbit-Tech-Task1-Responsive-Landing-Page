import {
  FaArrowRight,
  FaClock,
  FaLocationDot,
  FaStar,
  FaUserGroup,
} from "react-icons/fa6";
import { packages } from "../data/travelData";
import "./Packages.css";

function Packages() {
  return (
    <section className="packages-section" id="packages">
      <div className="container">
        <div className="packages-heading">
          <span className="section-subtitle">Best tour packages</span>
          <h2>Choose Your Perfect Journey</h2>
          <p>
            Explore our carefully planned travel packages designed to give you
            comfortable stays, exciting adventures and memorable experiences.
          </p>
        </div>
        <div className="row g-4">
          {packages.map((tourPackage) => (
            <div
              className="col-12 col-md-6 col-xl-3"
              key={tourPackage.id}
            >
              <article className="package-card">
                <div className="package-image-wrapper">
                  <img
                    src={tourPackage.image}
                    alt={tourPackage.title}
                    className="package-image"
                  />
                  <span className="package-badge">{tourPackage.badge}</span>
                </div>
                <div className="package-content">
                  <div className="package-location">
                    <FaLocationDot />
                    <span>{tourPackage.location}</span>
                  </div>
                  <h3>{tourPackage.title}</h3>
                  <div className="package-details">
                    <div className="package-detail">
                      <FaClock />
                      <span>{tourPackage.duration}</span>
                    </div>
                    <div className="package-detail">
                      <FaUserGroup />
                      <span>{tourPackage.groupSize}</span>
                    </div>
                  </div>
                  <div className="package-rating">
                    <div className="package-stars">
                      <FaStar />
                      <span>{tourPackage.rating}</span>
                    </div>
                    <span className="package-reviews">
                      ({tourPackage.reviews} reviews)
                    </span>
                  </div>
                  <div className="package-footer">
                    <div className="package-price">
                      <span className="old-price">
                        ₹{tourPackage.oldPrice.toLocaleString("en-IN")}
                      </span>
                      <div>
                        <strong>
                          ₹{tourPackage.price.toLocaleString("en-IN")}
                        </strong>
                        <span className="per-person"> / person</span>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="package-book-btn"
                      aria-label={`Book ${tourPackage.title}`}
                    >
                      Book Now
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;