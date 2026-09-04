const CTA = () => (
  <section id="register" className="relative overflow-hidden bg-[#080819] py-16 text-white">
    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 75% 45%, rgba(115,75,255,.45), transparent 35%)" }} />
    <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <h2 className="text-4xl font-black leading-tight md:text-5xl">The Future is<br />Intelligent. India<br />is Ready.</h2>
        <p className="mt-4 text-sm text-white/60">Be part of the movement shaping enterprise AI tomorrow.</p>
      </div>
      <div className="flex gap-3">
        <a href="#register" className="rounded-full bg-fuchsia-600 px-5 py-3 text-xs font-bold">Attend AIIS 2026</a>
        <a href="#contact" className="rounded-full border border-white/30 px-5 py-3 text-xs font-bold">Explore More</a>
      </div>
    </div>
  </section>
);

export default CTA;
