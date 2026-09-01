const partners = [
  "ATLASSIAN",
  "AWS",
  "COHESITY",
  "COUCHBASE",
  "EQUATEME",
  "Salesforce",
];

const PoweredPartners = () => {
  return (
    <section
      id="partners"
      className="powered-partners"
    >

      <div className="powered-heading">

        <span>OUR PARTNERS</span>

        <h2>
          Partners Who
          <br />
          <strong>Powered the Journey</strong>
        </h2>

        <p>
          Collaborating with the world's most
          innovative technology companies.
        </p>

        <button>
          Become a Partner →
        </button>

      </div>

      <div className="partner-logo-row">

        {partners.map((partner) => (
          <div
            key={partner}
            className="partner-logo"
          >
            {partner}
          </div>
        ))}

      </div>

    </section>
  );
};

export default PoweredPartners;