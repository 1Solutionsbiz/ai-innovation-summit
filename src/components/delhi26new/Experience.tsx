const Experience = () => (
  <section className="bg-white py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-red-500">Innovation Everywhere</p>
        <h2 className="mt-2 text-4xl font-black leading-tight text-[#092a61] md:text-5xl">More Than<br />A Conference.<br />An Experience.</h2>
        <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">Ideas, conversations, networking and experiences designed to move enterprise AI forward.</p>
        <a href="#gallery" className="mt-5 inline-block rounded-full border border-[#12336d] px-4 py-2 text-xs font-semibold text-[#12336d]">Explore All Content</a>
      </div>

      <div className="overflow-hidden rounded-xl bg-slate-950">
        <img src="/images/ai-summit/experience.jpg" alt="AI Innovation Summit experience" className="aspect-[4/3] w-full object-cover" />
      </div>
    </div>
  </section>
);

export default Experience;
