const featured = [
  {
    name: "Siddharth Sureka",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    image: "/delhi26_redesign/speakers/a.png",
  },
  {
    name: "Siddharth Sureka",
    image: "/delhi26_redesign/speakers/a.png",
  },
];

const FeaturedSpeakers = () => {
  return (
    <section className="featured-section">

      <div className="featured-heading">

        <span>RETROSPECTIVE</span>

        <h2>
          Featured
          <br />
          <strong>Speakers</strong>
        </h2>

        <button>
          View all speakers →
        </button>

      </div>

      <div className="featured-grid">

        {featured.map((speaker) => (
          <article
            key={speaker.name}
            className="featured-card"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
            />

            <div>
              <strong>{speaker.name}</strong>
              <small>AI Innovation Summit</small>
            </div>
          </article>
        ))}

      </div>

    </section>
  );
};

export default FeaturedSpeakers;