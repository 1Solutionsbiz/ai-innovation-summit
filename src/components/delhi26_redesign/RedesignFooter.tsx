const RedesignFooter = () => {
  return (
    <footer className="redesign-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand-wordmark">
            <span className="brand-ai">AI</span>
            <span className="brand-innovation">Innovation</span>
            <span className="brand-summit">SUMMIT</span>
          </div>

          <p>
            From prompt to impact — the premier summit for artificial intelligence leaders and enthusiasts, making it the most impactful AI Summit.
          </p>

          <div className="guild-badge">
            <span>the guild</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#speakers">Speakers</a>
          <a href="#partners">Partners</a>
        </div>

        <div className="footer-connect">
          <h4>Connect With Us</h4>

          <div className="social-row">
            <span className="social-icon">in</span>
          </div>

          <a href="mailto:guildconferences@guildlive.com">guildconferences@guildlive.com</a>

          <p>
            Smartworks Corporate Park Tower A, Second Floor
            <br />
            Sector 125, Noida, Uttar Pradesh 201303
          </p>

          <p className="contact-note">
            <strong>For Speakership Opportunity,</strong>
            <br />
            <a href="mailto:nishant.batra@guildlive.com">Email at nishant.batra@guildlive.com</a>
            <br />
            <a href="mailto:aditi.malik@guildlive.com">aditi.malik@guildlive.com</a>
          </p>

          <p className="contact-note">
            <strong>For Partnerships,</strong>
            <br />
            <a href="mailto:partnership@guildlive.com">Email at partnership@guildlive.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© Copyright 2025, The Guild</span>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms &amp; Conditions</a>
          <span>|</span>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
};

export default RedesignFooter;