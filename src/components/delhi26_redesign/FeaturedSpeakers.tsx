const featured = [
  {
    name: "Siddharth Sureka",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Kuldeep Tomar",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Suvodip Chatterjee",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Atul Rainman",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Jyoti Kodnani",
    image: "/delhi26_redesign/speakers/1.png",
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