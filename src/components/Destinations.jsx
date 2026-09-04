import {
  FaArrowRight,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { destinations } from "../data/travelData";
import "./Destinations.css";

function Destinations() {
  return (
    <section className="destinations-section" id="destinations">
      <div className="container">

        <div className="section-heading destinations-heading">
          <div>
            <span className="section-subtitle">Popular destinations</span>

            <h2>Explore Beautiful Places</h2>

            <p>
              Discover handpicked destinations offering unforgettable
              experiences, beautiful views and exciting adventures.
            </p>
          </div>

          <a href="#packages" className="view-all-link">
            View All Packages
            <FaArrowRight />
          </a>
        </div>

        <div className="row g-4">
          {destinations.map((destination) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={destination.id}
            >
              <article className="destination-card">

                <div className="destination-image-wrapper">
                  <img
                    src={destination.image}
                    alt={`${destination.name} travel destination`}
                    className="destination-image"
                  />

                  <div className="destination-rating">
                    <FaStar />
                    <span>{destination.rating}</span>
                  </div>
                </div>

                <div className="destination-content">
                  <div className="destination-location">
                    <FaLocationDot />
                    <span>{destination.state}</span>
                  </div>

                  <h3>{destination.name}</h3>

                  <div className="destination-footer">
                    <div className="destination-price">
                      <span>Starting from</span>

                      <strong>
                        ₹{destination.price.toLocaleString("en-IN")}
                      </strong>
                    </div>

                    <a
                      href="#packages"
                      className="destination-arrow"
                      aria-label={`View ${destination.name} packages`}
                    >
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

export default Destinations;