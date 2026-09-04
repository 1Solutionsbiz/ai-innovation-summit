const speakers = [
  {
    name: "Siddharth Sureka",
    role: "Technology Leader",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Kuldeep Tomar",
    role: "AI & Digital Transformation",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Suvodip Chatterjee",
    role: "Technology Executive",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Atul Rainman",
    role: "Business & Technology",
    image: "/delhi26_redesign/speakers/1.png",
  },
  {
    name: "Jyoti Kodnani",
    role: "Technology Leader",
    image: "/delhi26_redesign/speakers/1.png",
  },
];

const VisionarySpeakers = () => {
  return (
    <section id="speakers" className="white-section speakers-section">

      <div className="section-heading">
        <span>FEATURED VOICES</span>

        <h2>
          Our Visionary
          <br />
          <strong>Speakers</strong>
        </h2>

        <button>View all speakers →</button>
      </div>

      <div className="speaker-scroll">

        {speakers.map((speaker) => (
          <article className="speaker-card reveal" key={speaker.name}>

            <div className="speaker-image">
              <img
                src={speaker.image}
                alt={speaker.name}
              />
            </div>

            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p>{speaker.role}</p>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
};

export default VisionarySpeakers;