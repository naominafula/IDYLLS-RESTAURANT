const gallery = [
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900",
    title: "Restaurant Experience"
  },
  {
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900",
    title: "Hot Pot"
  },
  {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900",
    title: "Grilled Food"
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
    title: "Restaurant Interior"
  },
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    title: "Food Presentation"
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900",
    title: "Fine Dining"
  }
];

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-heading">
        <span className="section-label">A GLIMPSE OF IDYLLS</span>
        <h2>Our Gallery</h2>
        <p>Food, atmosphere and moments worth sharing.</p>
      </div>

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <p className="menu-note">
        Replace sample images with actual restaurant photographs.
      </p>
    </section>
  );
}

export default Gallery;