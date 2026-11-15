import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Chinese Hot Pot",
    icon: "🍲",
    description:
      "An interactive dining experience with fresh ingredients and hot pot cooking."
  },
  {
    name: "Japanese BBQ",
    icon: "🔥",
    description:
      "A tabletop grilling experience inspired by Japanese dining traditions."
  },
  {
    name: "Dining & Refreshments",
    icon: "🍽️",
    description:
      "Ask our restaurant team about available food and drinks."
  }
];

function Menu() {
  return (
    <section className="menu-section section" id="menu">
      <div className="section-heading">
        <span className="section-label">TASTE THE DIFFERENCE</span>
        <h2>Explore Our Menu</h2>
        <p>
          Discover our signature dining experiences.
        </p>
      </div>

      <div className="menu-grid">
        {categories.map((item) => (
          <article className="menu-card" key={item.name}>
            <div className="menu-icon">{item.icon}</div>

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <a href="#reservation">
              Make an Enquiry
              <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>

      <p className="menu-note">
        Contact the restaurant for the latest menu and prices.
      </p>
    </section>
  );
}

export default Menu;