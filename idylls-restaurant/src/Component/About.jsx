import { Utensils, Star, ArrowRight } from "lucide-react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
          alt="Restaurant interior"
        />

        <div className="image-caption">
          <span>THE IDYLLS EXPERIENCE</span>
          <strong>Where food meets memories.</strong>
        </div>
      </div>

      <div className="about-content">
        <span className="section-label">OUR STORY</span>

        <h2>
          More Than Dining.
          <span> It's an Experience.</span>
        </h2>

        <p>
          Welcome to Idylls Restaurant, where every dining
          experience is an opportunity to discover something
          special.
        </p>

        <p>
          Explore distinctive Asian-inspired dining, including
          Chinese hot pot and Japanese-style barbecue.
          Enjoy fresh ingredients and memorable moments.
        </p>

        <div className="about-features">
          <div>
            <Utensils />
            <strong>Unique Dining</strong>
            <small>Interactive food experiences</small>
          </div>

          <div>
            <Star />
            <strong>Quality Experience</strong>
            <small>Fresh flavours and hospitality</small>
          </div>
        </div>

        <a href="#experience" className="text-link">
          Discover Our Experience
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default About;