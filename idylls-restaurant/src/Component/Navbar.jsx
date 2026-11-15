import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Menu", "#menu"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"]
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        IDYLLS<span>.</span>
        <small>RESTAURANT</small>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map(([name, link]) => (
          <a
            key={name}
            href={link}
            onClick={() => setOpen(false)}
          >
            {name}
          </a>
        ))}

        <a
          href="#reservation"
          className="nav-book"
          onClick={() => setOpen(false)}
        >
          Reserve a Table
        </a>
      </div>
    </nav>
  );
}

export default Navbar;