const HeroBanner = () => {
  return (
    <section
      className="relative flex min-h-[520px] items-end overflow-hidden bg-slate-950"
      style={{ backgroundImage: "linear-gradient(90deg, rgba(3,5,25,.94) 0%, rgba(3,5,25,.62) 52%, rgba(3,5,25,.35) 100%), url('/images/ai-summit/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-32 lg:px-8">
        <p className="mb-3 text-sm font-semibold text-fuchsia-400">AI Innovation Summit — Delhi 2026</p>
        <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-tight text-white md:text-7xl">
          From Assistance<br />to Autonomy.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 md:text-base">
          Where India's AI leaders, enterprise innovators and technology decision-makers come together to shape the next chapter of intelligent business.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#register" className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-bold text-white hover:bg-fuchsia-500">Attend AIIS 2026</a>
          <a href="#highlights" className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white">Explore More</a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
