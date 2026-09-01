const logos = [
  "Adobe",
  "AWS",
  "Atlassian",
  "IBM",
  "Microsoft",
  "Goldman Sachs",
  "Google",
  "Nokia",
  "PayU",
  "Yubi",
  "Airtel",
  "Cognizant",
  "EY",
  "Deloitte",
  "Capgemini",
  "Accenture",
];

const IndustryRepresentation = () => {
  return (
    <section className="industry-section">

      <div className="industry-heading">

        <span>INDUSTRY REPRESENTATION</span>

        <h2>
          Trusted by leaders
          <br />
          <strong>across industries</strong>
        </h2>

      </div>

      <div className="industry-logos">

        {logos.map((logo) => (
          <div
            key={logo}
            className="industry-logo"
          >
            {logo}
          </div>
        ))}

      </div>

    </section>
  );
};

export default IndustryRepresentation;