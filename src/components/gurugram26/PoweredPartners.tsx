import seriesPartnersBg from "@/assets/series-partners-bg.jpg";

const partnersData = [
  {
    tier: "",
    logos: [{ name: "Slack", url: "/sponsers/slack-logo.webp" }],
    isCoPartner: true,
  },
  {
    tier: "",
    logos: [{ name: "Adobe", url: "/sponsers/adobe.png" }],
    isCoPartner: true,
  },
  {
    tier: "",
    logos: [{ name: "Atlassian", url: "/sponsers/atlassian-1.png" }],
    isCoPartner: true,
  },
  {
    tier: "",
    logos: [{ name: "Salesforce", url: "/sponsers/salesforce.png" }],
    isCoPartner: false,
  },
  {
    tier: "",
    logos: [{ name: "Microsoft", url: "/sponsers/microsoft-1.png" }],
    isCoPartner: false,
  },
  {
    tier: "",
    logos: [{ name: "Xboom", url: "/sponsers/xboom-1.png" }],
    isCoPartner: false,
  },
  {
    tier: "",
    logos: [{ name: "Aws", url: "/sponsers/aws.png" }],
    isCoPartner: false,
  },
  {
    tier: "",
    logos: [{ name: "Snowflake", url: "/sponsers/snowflake-black.png" }],
    isCoPartner: false,
  },
];

const SeriesPartners = () => {
  // duplicate data for smooth infinite scroll
  const scrollingPartners = [...partnersData, ...partnersData];

  return (
    <section className="py-16 md:py-24 bg-[#eee] relative overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0">
        <img
          src={seriesPartnersBg}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div> */}




      <div className="container mx-auto px-4 relative z-10">


        <div className="powered-heading text-center mb-12 md:mb-16">

          <span>Past Sponsors</span>

          <h2><strong>
            Partners Who Powered the Journey
          </strong></h2>

          <p>
            Celebrating the organisations that came on board to support ideas, innovation, and industry connections
          </p>

          <button>
            View All Sponsors
          </button>

        </div>




        {/* HORIZONTAL AUTO SCROLL */}
        <div className="overflow-hidden">
          <div className="auto-scroll gap-20 px-10">
            {scrollingPartners.map((partner, index) =>
              partner.logos.map((logo, i) => (
                <div
                  key={`${index}-${i}`}
                  className="flex flex-col items-center justify-center"
                >
                  <p className="text-xs font-semibold mb-3 uppercase text-gray-600">
                    {partner.tier}
                  </p>

                  <img
                    src={logo.url}
                    alt={logo.name}
                    className={`object-contain h-10 sm:h-16 md:h-18 
                        w-auto object-contain 
                        transition-all duration-300 
                        grayscale opacity-70 
                        hover:grayscale-70 hover:opacity-100 hover:scale-105${partner.isCoPartner ? "h-20" : "h-16"
                      } ${logo.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    loading="lazy"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesPartners;
