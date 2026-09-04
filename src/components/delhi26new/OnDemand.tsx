import { onDemand } from "./data";

const OnDemand = () => (
  <section className="bg-[#020322] py-14 text-white">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-md">
        <p className="text-xs font-bold uppercase tracking-widest text-red-400">On-Demand Content</p>
        <h2 className="mt-2 text-4xl font-black">Ideas That Inspire. On Your Schedule.</h2>
        <a href="#content" className="mt-5 inline-block rounded-full bg-fuchsia-700 px-5 py-2 text-xs font-bold">Explore More</a>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {onDemand.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img src={item.image} alt="" className="aspect-video w-full object-cover" />
            <div className="p-5">
              <p className="text-sm font-bold leading-5">{item.title}</p>
              <button className="mt-4 text-xs font-bold text-fuchsia-400">Watch now →</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OnDemand;
