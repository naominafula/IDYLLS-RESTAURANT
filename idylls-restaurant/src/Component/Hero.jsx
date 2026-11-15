import { ArrowRight, MapPin } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="eyebrow">
          WELCOME TO IDYLLS RESTAURANT
        </span>

        <h1>
          A Taste of <span>Elegance.</span>
          <br />
          A Moment to Remember.
        </h1>

        <p>
          Discover the art of dining through authentic flavours,
          fresh ingredients and unforgettable experiences.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="btn btn-gold">
            Explore Our Experience
            <ArrowRight size={18} />
          </a>

          <a href="#reservation" className="btn btn-outline">
            Book a Table
          </a>
        </div>

        <div className="hero-location">
          <MapPin size={17} />
          Karen, Nairobi, Kenya
        </div>
      </div>
    </section>
  );
}

export default Hero;