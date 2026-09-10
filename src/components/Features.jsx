import {
  FaEarthAsia,
  FaHeadset,
  FaShieldHeart,
  FaTags,
} from "react-icons/fa6";
import "./Features.css";

const features = [
  {
    id: 1,
    icon: <FaTags />,
    number: "01",
    title: "Best Price Guarantee",
    description:
      "Enjoy carefully selected travel packages at competitive prices without compromising on comfort.",
  },
  {
    id: 2,
    icon: <FaEarthAsia />,
    number: "02",
    title: "Handpicked Destinations",
    description:
      "Explore beautiful destinations selected to give you memorable and meaningful travel experiences.",
  },
  {
    id: 3,
    icon: <FaHeadset />,
    number: "03",
    title: "24/7 Travel Support",
    description:
      "Our support team is available throughout your journey to help you whenever you need assistance.",
  },
  {
    id: 4,
    icon: <FaShieldHeart />,
    number: "04",
    title: "Safe and Easy Booking",
    description:
      "Plan your holiday confidently with a simple booking experience and reliable travel assistance.",
  },
];

function Features() {
  return (
    <section className="features-section" id="about">
      <div className="container">
        <div className="features-heading">
          <span className="section-subtitle">Why choose WanderWay?</span>
          <h2>Travel With Confidence</h2>
          <p>
            From planning your journey to returning home, we make every step
            of your travel experience simple, comfortable and memorable.
          </p>
        </div>
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-12 col-sm-6 col-xl-3" key={feature.id}>
              <article className="feature-card">
                <span className="feature-number">{feature.number}</span>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </div>
          ))}
        </div>
        <div className="features-stats">
          <div className="feature-stat-item">
            <strong>10K+</strong>
            <span>Happy Travellers</span>
          </div>
          <div className="feature-stat-item">
            <strong>50+</strong>
            <span>Destinations</span>
          </div>
          <div className="feature-stat-item">
            <strong>200+</strong>
            <span>Tour Packages</span>
          </div>
          <div className="feature-stat-item">
            <strong>8+</strong>
            <span>Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;