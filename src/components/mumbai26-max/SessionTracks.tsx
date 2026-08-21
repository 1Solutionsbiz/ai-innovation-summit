const tracks = [
  "C-Suite AI Imperatives",
  "India's AI Leadership & Global Influence",
  "Industry Transformation",
  "Next-Gen Automation",
  "Resilient & Secure AI",
  "Scaling Enterprise Intelligence",
];

const SessionTracks = () => {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-inter font-black text-white text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1] tracking-[-1.44px]">
              Explore focus areas.
              <br />
              Discover what&apos;s possible.
            </h2>
            <p className="mt-6 text-slate-400 text-lg">
              Deep-dive into the themes shaping enterprise AI adoption across
              India.
            </p>

            <ul className="mt-8 space-y-3">
              {tracks.map((track) => (
                <li key={track} className="text-slate-200 text-lg">
                  {track}
                </li>
              ))}
            </ul>

            <a
              href="#agenda"
              className="mt-10 inline-flex items-center rounded-full bg-white text-slate-900 font-semibold px-6 py-3 text-sm hover:scale-105 transition-transform duration-300"
            >
              View all sessions
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[6/5]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionTracks;
