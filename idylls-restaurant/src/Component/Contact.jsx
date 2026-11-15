import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const hours = [
  ["Monday", "10:00 AM – 10:00 PM"],
  ["Tuesday", "10:00 AM – 10:00 PM"],
  ["Wednesday", "10:00 AM – 10:00 PM"],
  ["Thursday", "10:00 AM – 10:00 PM"],
  ["Friday", "10:00 AM – 10:00 PM"],
  ["Saturday", "10:00 AM – 10:00 PM"],
  ["Sunday", "10:00 AM – 10:00 PM"]
];

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <span className="section-label">COME VISIT US</span>
        <h2>Find Your Way to Idylls</h2>
        <p>We look forward to welcoming you.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <MapPin />
          <h3>Our Location</h3>
          <p>Karen, Nairobi, Kenya</p>
          <a
            href="https://maps.app.goo.gl/ofxcJE7NmuERWVuw5"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <ArrowRight size={16} />
          </a>
        </div>

        <div className="contact-card">
          <Phone />
          <h3>Call Us</h3>
          <p>+254 143 284816</p>
          <a href="tel:+254143284816">
            Call Restaurant <ArrowRight size={16} />
          </a>
        </div>

        <div className="contact-card">
          <Clock />
          <h3>Opening Hours</h3>
          <p>Daily: 10 AM – 10 PM</p>
          <a href="#hours">
            View All Hours <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="hours-container" id="hours">
        <span className="section-label">PLAN YOUR VISIT</span>
        <h3>Opening Hours</h3>

        <div className="hours-list">
          {hours.map(([day, time]) => (
            <div className="hours-row" key={day}>
              <span>{day}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </div>

        <p className="menu-note">
          Confirm the opening hours with the restaurant.
        </p>
      </div>

      <div className="map-container">
        <iframe
          title="Idylls Restaurant Location"
          src="https://maps.google.com/maps?q=Idylls%20Restaurant%20Karen%20Nairobi&output=embed"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Contact;