  const videos = [
  { title: "Video 1", image: "/edition/1-mumbai26.jpg", link: "https://youtu.be/CXRwxHSrpYw?si=KinB_I6Fz_8HAsxe" },
  { title: "Video 2", image: "/edition/2-mumbai26.jpg", link: "https://youtu.be/1H6zUN-oz_U?si=uX-TnryJPy1bdapT" },
  { title: "Video 3", image: "/edition/3-mumbai26.jpg", link: "https://youtu.be/JMqQtsNfVnI?si=oMuHUgWdUhwwoU8E" },
  { title: "Video 4", image: "/edition/4-mumbai26.jpg", link: "https://www.youtube.com/watch?v=5Lw9q1ILh6w" },
  { title: "Video 5", image: "/edition/5-mumbai26.jpg", link: "https://youtu.be/zGFZ0zij4gk?si=M_iF0CpXlu5Jd9Pr" },
  { title: "Video 6", image: "/edition/6-mumbai26.jpg", link: "https://youtu.be/KsrDwXjq2AQ?si=5TA66XcDpUapyyQ9" },
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
          <a
            className="video-card"
            key={video.title}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${video.title}`}
          >
            <div className="video-thumbnail">
              <img src={video.image} alt={video.title} />
              <div className="play-button">▶</div>
            </div>

            <h3>{video.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OnDemandVideos;