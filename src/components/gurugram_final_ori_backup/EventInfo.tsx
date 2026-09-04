import React from "react";

const EventInfo: React.FC = () => {
  return (
    <section className="event-info-section">
      <div className="event-info-container">

        {/* LEFT CONTENT */}
        <div className="event-info-left">
          <h1>
            The Future is
            <br />
            Intelligent. India
            <br />
            is Ready.
          </h1>

          <p className="event-info-subtext">
            Be part of the movement shaping
            <br />
            Enterprise AI tomorrow
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="event-info-right">
          <div className="event-info-meta">
            <span className="event-info-date">December 2, 2026</span>
            <span className="event-info-venue">
              The Leela Ambience Gurugram, Delhi-NCR
            </span>
          </div>

          <div className="event-info-actions">
            <a href="#attend" className="event-info-btn-primary btn-bg">
              Attend AIIS 2026
            </a>
            <a href="#explore" className="event-info-btn-secondary btn-bg-hover">
              Explore More
            </a>
          </div>
        </div>

      </div>

      <style>{`
        
      `}</style>
    </section>
  );
};

export default EventInfo;