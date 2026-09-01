const sponsors = [
  {
    name: "PRESENTING PARTNER",
    logo: "/partners/salesforce.png",
    alt: "Salesforce",
  },
  {
    name: "CO-POWERED BY",
    logo: "/partners/atlassian-white.png",
    alt: "Atlassian",
  },
  {
    name: "CYBER RESILIENCE PARTNER",
    logo: "/partners/cohesity.png",
    alt: "Cohesity",
  },
  {
    name: "AI DATA CLOUD PARTNER",
    logo: "/partners/Snowflake-white.png",
    alt: "Snowflake",
  },
  {
    name: "ENGAGEMENT PARTNER",
    logo: "/partners/EquateMe-white.png",
    alt: "Equateme",
  },
];

const SponsorsSection = () => {
  return (
    <section className="sponsors-section">

      <div className="sponsors-heading">
        <h4 className="sponsors-heading-span">
          OUR VALUED SPONSORS
        </h4>

        <h2>
          Meet our amazing sponsors
        </h2>

        <p>
          Check out these Diamond sponsors they have creative products and
          services to make your work life easier.
        </p>
      </div>

      <div className="sponsor-card">
        {sponsors.map((sponsor) => (
          <div className="sponsor-logo" key={sponsor.name}>

            <div className="sponsor-heading">
              {sponsor.name}
            </div>

            <img
              src={sponsor.logo}
              alt={sponsor.alt}
              className={`sponsor-logo-img ${sponsor.alt
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            />

          </div>
        ))}
      </div>

    </section>
  );
};

export default SponsorsSection;