import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { testimonials } from "../data/travelData";
import "./Testimonials.css";
function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <span className="section-subtitle">Traveller stories</span>
          <h2>What Our Travellers Say</h2>
          <p>
            Read about the experiences of travellers who explored beautiful
            destinations with WanderWay.
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div className="col-12 col-md-6 col-lg-4" key={testimonial.id}>
              <article className="testimonial-card">
                <div className="testimonial-top">
                  <div className="testimonial-stars">
                    {Array.from(
                      { length: testimonial.rating },
                      (_, index) => (
                        <FaStar key={index} />
                      )
                    )}
                  </div>
                  <div className="testimonial-quote">
                    <FaQuoteLeft />
                  </div>
                </div>
                <p className="testimonial-review">
                  “{testimonial.review}”
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.initials}
                  </div>
                  <div className="testimonial-user">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location}</p>
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
export default Testimonials;