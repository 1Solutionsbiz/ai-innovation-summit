const RedesignFooter = () => {
  return (
    <footer className="redesign-footer">

      <div className="footer-grid">

        <div className="footer-brand">

          <img
            src="/delhi26_redesign/logo.png"
            alt="AI Innovation Summit"
          />

          <p>
            From Assistance to Autonomy.
          </p>

          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>

        </div>

        <div>
          <h4>QUICK LINKS</h4>

          <a href="#overview">Overview</a>
          <a href="#speakers">Speakers</a>
          <a href="#focus">Focus Areas</a>
          <a href="#partners">Partners</a>
        </div>

        <div>
          <h4>CONNECT WITH US</h4>

          <p>
            AI Innovation Summit
          </p>

          <p>
            The Leela Ambience Gurugram
            <br />
            Delhi NCR
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 AI Innovation Summit
        </span>

        <span>
          Privacy Policy &nbsp; | &nbsp; Terms
        </span>
      </div>

    </footer>
  );
};

export default RedesignFooter;