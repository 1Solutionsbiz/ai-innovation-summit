import { Play } from "lucide-react";

const CreativityEverywhere = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 md:pt-24 pb-8 md:pb-10 text-center">
        <h2 className="font-inter font-black text-slate-900 text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.44px]">
          Innovation everywhere.
        </h2>
      </div>

      {/*
        Matches the reference's exact grid: 4 equal columns, 3 explicit rows
        at a 2.56 : 1 : 2.56 ratio (measured 295px : 115px : 295px), 8px gap.
      */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-[2.56fr_1fr_2.56fr] gap-1 md:gap-2 md:h-[705px]">
          <a
            href="#agenda"
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2"
          >
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/10" />
            <div className="absolute inset-0 p-6 flex items-start">
              <p className="text-white font-bold text-xl leading-snug">
                Explore the agenda for the day.
              </p>
            </div>
          </a>

          <a
            href="#speakers"
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2"
          >
            <img
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/10" />
            <div className="absolute inset-0 p-6 flex items-start">
              <p className="text-white font-bold text-xl leading-snug">
                Meet the voices shaping enterprise AI.
              </p>
            </div>
          </a>

          <a
            href="/watch-on-demand"
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto col-span-2 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3 bg-slate-950"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              src="/videos/Yt_promo_10_sept.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
            <div className="absolute inset-0 p-6 flex items-start">
              <p className="text-white font-bold text-xl leading-snug">
                Watch highlights from past editions.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-slate-900 ml-0.5" />
              </span>
            </div>
          </a>

          <a
            href="#contact-us"
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto col-span-2 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-4"
          >
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/10" />
            <div className="absolute inset-0 p-6 flex items-start">
              <p className="text-white font-bold text-xl leading-snug">
                Network and celebrate community at evening events.
              </p>
            </div>
          </a>

          <a
            href="mailto:partnership@guildlive.com"
            className="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-auto col-span-2 md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-4"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/10" />
            <div className="absolute inset-0 p-6 flex items-start">
              <p className="text-white font-bold text-xl leading-snug">
                Bring your team and save.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreativityEverywhere;
