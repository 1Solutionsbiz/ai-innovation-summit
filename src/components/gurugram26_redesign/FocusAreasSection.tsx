const focusAreas = [
  "Agentic AI",
  "Enterprise AI",
  "AI Infrastructure",
  "Responsible AI",
  "AI Transformation",
];

const FocusAreasSection = () => {
  return (
    <section id="focus" className="focus-section">

      <div className="focus-content">

        {/* <span>EXPLORE</span> */}

        <h2>
          EXPLORE
          <br />
          <strong>focus areas.</strong>
        </h2>

        <h4 className="">Discover what's possible.</h4>

		<br />
        <p className="text-white">Deep-dive into the themes shaping <br/> enterprise AI adoption across India.</p>

        {/* <div className="focus-list">
          {focusAreas.map((item) => (
            <div key={item}>
              <span>+</span>
              {item}
            </div>
          ))}
        </div> */}

        <button className="focus-button">
          View Full Agenda
        </button>

      </div>

      {/* <div className="focus-collage">

        <img src="/delhi26_redesign/focus/1.jpg" alt="" />
        <img src="/delhi26_redesign/focus/1.jpg" alt="" />
        <img src="/delhi26_redesign/focus/1.jpg" alt="" />
        <img src="/delhi26_redesign/focus/1.jpg" alt="" />
        <img src="/delhi26_redesign/focus/1.jpg" alt="" />

      </div> */}

    </section>
  );
};

export default FocusAreasSection;