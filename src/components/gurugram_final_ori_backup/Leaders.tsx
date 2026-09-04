import React from "react";

const LeadersNumbers = () => {
  return (
    <section className="leaders-section-new">
      <div className="leaders-container-new">

        {/* LEFT CONTENT */}
        <div className="leaders-left">

          <span className="leaders-label">
            Reach
          </span>

          <h2>
            Most Influential
            <br />
            Enterprise AI
            <br />
            Leaders
          </h2>

          <a href="#become-partner" className="leaders-btn btn-bg">
            Become a Partner
          </a>

        </div>


        {/* DIVIDER */}
        <div className="leaders-divider"></div>


        {/* RIGHT CONTENT */}
        <div className="leaders-right">

          <p className="leaders-description">
            AI Innovation Summit brings together the decision-makers
            and change-makers shaping the future of enterprise AI
            across industries from the boardroom to the enterprise floor
          </p>


          {/* NUMBER */}
          <div className="leaders-stat">

            <div className="leaders-number">
              700+
            </div>

            <div className="leaders-stat-text">
              CXOs &amp; Senior Business &amp;
              <br />
              Technology Leaders from
              <br />
              Leading Enterprise Sectors
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .leaders-section-new {
          background-image: url('/gurugram/leaders_info_bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 90px 40px;
          color: #ffffff;
        }

        .leaders-container-new {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }

        .leaders-left {
          flex: 0 0 auto;
          max-width: 340px;
        }

        .leaders-label {
          display: block;
          font-size: 24px;
          letter-spacing: 1px;
          margin-bottom: 16px;
          color: #e0242c;
        }

        .leaders-left h2 {
          font-size: 48px;
          line-height: 1.15;
          font-weight: 700;
          margin: 0 0 28px 0;
        }

        .leaders-btn {
          display: inline-block;
          padding: 15px 30px;
          font-size: 18px;
        }

        .leaders-divider {
          width: 1px;
          align-self: stretch;
          background: #fff;
        }

        .leaders-right {
          flex: 1;
        }

        .leaders-description {
          font-size: 23px;
          line-height: 1.4;
          color: #fff;
          margin: 0 0 40px 0;
        }

        .leaders-stat {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .leaders-number {
          font-size: 64px;
          font-weight: 800;
          line-height: 1;
        }

        .leaders-stat-text {
          font-size: 23px;
          line-height: 1.2;
          color: #fff;
        }

        @media (max-width: 768px) {
          .leaders-container-new {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .leaders-divider {
            display: none;
          }
          .leaders-left h2 {
            font-size: 32px;
          }
          .leaders-number {
            font-size: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadersNumbers;