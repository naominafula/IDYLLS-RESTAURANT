function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <a href="#home" className="logo footer-logo">
            IDYLLS<span>.</span>
            <small>RESTAURANT</small>
          </a>

          <p>
            Exceptional flavours. Beautiful moments.
            Memorable dining experiences.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="#about">About Us</a>
          <a href="#experience">Experience</a>
          <a href="#menu">Our Menu</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div>
          <h4>Visit Us</h4>
          <a href="#contact">Location</a>
          <a href="#hours">Opening Hours</a>
          <a href="#reservation">Reservations</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="tel:+254143284816">Call Us</a>
          <a
            href="https://wa.me/254143284816"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Idylls Restaurant.
          All rights reserved.
        </p>

        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;