const videos = [
  {
    title: "The AI Revolution is Here",
    image: "/delhi26_redesign/videos/1.jpg",
  },
  {
    title: "The Future of AI & Enterprise",
    image: "/delhi26_redesign/videos/1.jpg",
  },
  {
    title: "The Autonomous Enterprise",
    image: "/delhi26_redesign/videos/1.jpg",
  },
  {
    title: "AI Leadership",
    image: "/delhi26_redesign/videos/1.jpg",
  },
  {
    title: "Enterprise Transformation",
    image: "/delhi26_redesign/videos/1.jpg",
  },
  {
    title: "Building with AI",
    image: "/delhi26_redesign/videos/1.jpg",
  },
];

const OnDemandVideos = () => {
  return (
    <section className="videos-section">

      <div className="section-heading">

        <span>WATCH ON-DEMAND</span>

        <h2>
          Watch On-Demand
          <br />
          <strong>Videos</strong>
        </h2>

      </div>

      <div className="video-grid">

        {videos.map((video) => (
          <article
            className="video-card"
            key={video.title}
          >

            <div className="video-thumbnail">

              <img
                src={video.image}
                alt={video.title}
              />

              <div className="play-button">
                ▶
              </div>

            </div>

            <h3>{video.title}</h3>

          </article>
        ))}

      </div>

    </section>
  );
};

export default OnDemandVideos;