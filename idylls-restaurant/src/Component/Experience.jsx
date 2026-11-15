import { ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Chinese Hot Pot",
    tag: "HOT POT EXPERIENCE",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900",
    description:
      "Enjoy an interactive dining experience with fresh ingredients and rich flavours."
  },
  {
    title: "Japanese Barbecue",
    tag: "JAPANESE BBQ",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900",
    description:
      "Discover tabletop grilling and Japanese-inspired dining."
  },
  {
    title: "Beautiful Dining",
    tag: "DINE WITH US",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900",
    description:
      "Enjoy good food, conversations and memorable dining moments."
  }
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading">
        <span className="section-label">DISCOVER IDYLLS</span>
        <h2>Our Dining Experience</h2>
        <p>Something special is always waiting at your table.</p>
      </div>

      <div className="experience-grid">
        {experiences.map((item) => (
          <article className="experience-card" key={item.title}>
            <div className="experience-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="experience-info">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <a href="#reservation">
                Experience It <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;