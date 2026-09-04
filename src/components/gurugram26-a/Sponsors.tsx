const placeholderLogos = [
  "Acme", "Nova", "Orbit", "Lumen", "Vertex", "Solstice", "Cobalt", "Meridian",
];

const Sponsors = () => {
  const scrollingLogos = [...placeholderLogos, ...placeholderLogos];

  return (
    <section id="partners" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-base font-extrabold text-slate-500 mb-2">
          Sponsors
        </p>
        <h2 className="font-inter font-black text-slate-900 text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.44px]">
          Meet our amazing sponsors.
        </h2>
        <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
          Check out our sponsors — partners bringing the products and services
          that power the AI Innovation Summit.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#partners"
            className="inline-flex items-center rounded-full bg-slate-900 text-white font-semibold px-6 py-3 text-sm hover:bg-slate-800 transition-colors"
          >
            View all sponsors
          </a>
          <a
            href="mailto:partnership@guildlive.com"
            className="inline-flex items-center rounded-full border border-slate-300 text-slate-900 font-semibold px-6 py-3 text-sm hover:border-slate-900 transition-colors"
          >
            Become a sponsor
          </a>
        </div>
      </div>

      <div className="mt-16 overflow-hidden">
        <div className="sponsor-auto-scroll gap-16 md:gap-24 px-8">
          {scrollingLogos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-inter font-bold text-2xl md:text-3xl text-slate-400 tracking-tight"
            >
              {name}
            </span>
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
          animation: sponsor-scroll-horizontal 25s linear infinite;
        }
        .sponsor-auto-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
