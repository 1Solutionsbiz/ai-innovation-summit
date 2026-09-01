const gallery = [
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "Ideas",
    text: "New possibilities",
  },
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "Networking",
    text: "Connect with the community",
  },
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "Audience",
    text: "Engage with industry leaders",
  },
  {
    image: "/delhi26_redesign/gallery/1.jpg",
    title: "Live Experience",
    text: "Experience AI Innovation Summit",
  },
];

const InnovationEverywhere = () => {
  return (
    <section className="innovation-section">

      <div className="innovation-header">

        <span>THE SUMMIT EXPERIENCE</span>

        <h2>
          Innovation
          <br />
          <strong>Everywhere</strong>
        </h2>

      </div>

      <div className="innovation-grid">

        {gallery.map((item, index) => (
          <div
            className={`innovation-item item-${index + 1}`}
            key={item.image}
          >
            <img src={item.image} alt="" />

            <div className="innovation-caption">
              <small>{item.title}</small>
              <strong>{item.text}</strong>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default InnovationEverywhere;