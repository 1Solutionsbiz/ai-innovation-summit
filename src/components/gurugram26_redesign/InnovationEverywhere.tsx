const gallery = [
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "IDEAS",
    text: "Where Ideas Turn Into Action",
    type: "image",
  },
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "NETWORK",
    text: "Connect With the People Shaping What's Next",
    type: "image",
  },
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "AUDIENCE",
    text: "Connect With the People Shaping What's Next",
    type: "image",
  },
  {
    image: "/videos/Promo-21-August.mp4",
    title: "AI INNOVATION SUMMIT",
    text: "Experience the conversations and ideas shaping the future",
    type: "video",
  },
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "LIVE EXPERIENCE",
    text: "See the energy, ideas, and action that define our summit.",
    type: "image",
  },
];

const InnovationEverywhere = () => {
  return (
    <section className="innovation-section">

      <div className="innovation-header">
        <h2>Innovation Everywhere</h2>
      </div>

      <div className="innovation-grid">

        {gallery.map((item, index) => (
          <div
            className={`innovation-item innovation-item-${index + 1}`}
            key={`${item.title}-${index}`}
          >

            {item.type === "video" ? (
              <video
                className="innovation-media"
                src={item.image}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                className="innovation-media"
                src={item.image}
                alt={item.title}
              />
            )}

            <div className="innovation-overlay" />

            <div className="innovation-caption">
              <small>{item.title}</small>
              <strong>{item.text}</strong>
            </div>

            {item.type === "video" && (
              <div className="innovation-play">
                <span>▶</span>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
};

export default InnovationEverywhere;