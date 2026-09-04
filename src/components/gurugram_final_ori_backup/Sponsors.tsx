const placeholderLogos = [
  { src: "/gurugram/pastsponsers/Atlassian.png", alt: "" },
  { src: "/gurugram/pastsponsers/aws.png", alt: "" },
  { src: "/gurugram/pastsponsers/cohesity.png", alt: "" },
  { src: "/gurugram/pastsponsers/Couchbase.png", alt: "" },
  { src: "/gurugram/pastsponsers/Equateme.png", alt: "" },
  { src: "/gurugram/pastsponsers/salesforce.png", alt: "" },
];

// Scroll speed in seconds — lower number = faster scroll, higher = slower.
const SCROLL_DURATION_SECONDS = 20;

const Sponsors = () => {
  const scrollingLogos = [...placeholderLogos, ...placeholderLogos];

  return (
    <section id="partners" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="font-extrabold text-[20px] text-[#e92630] mb-2">
          Past Sponsors
        </p>
        <h2 className="font-black text-[#022158]  text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.44px]">
          Partners Who Powered the Journey
        </h2>
        <p className="mt-6 sponser-description  mx-auto">
          Celebrating the organisations that came on board to support ideas, innovation, and industry connections
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#partners"
            className="view-all-speakers"
          >
            View all sponsors
          </a>
        </div>
      </div>

      <div className="mt-16 overflow-hidden">
        <div
          className="sponsor-auto-scroll gap-16 md:gap-24 px-8"
          style={{ animationDuration: `${SCROLL_DURATION_SECONDS}s` }}
        >
          {scrollingLogos.map((logo, i) => (
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="shrink-0 h-8 md:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sponsor-scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sponsor-auto-scroll {
          display: flex;
          align-items: center;
          width: max-content;
          animation-name: sponsor-scroll-horizontal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .sponsor-auto-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;

