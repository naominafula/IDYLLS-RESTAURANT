import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Menu from "./Component/Menu";
import Gallery from "./Component/Gallery";
import Reservation from "./Component/Reservation";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

import { Phone } from "lucide-react";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Menu />
        <Gallery />
        <Reservation />
        <Contact />
      </main>

      <Footer />

      <a
        className="floating-call"
        href="tel:+254143284816"
        aria-label="Call restaurant"
      >
        <Phone size={22} />
      </a>
    </>
  );
}

export default App;