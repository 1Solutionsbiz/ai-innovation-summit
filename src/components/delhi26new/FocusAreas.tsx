import { focusAreas } from "./data";

const FocusAreas = () => (
  <section id="focus-areas" className="bg-[#020322] py-16 text-white">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="mb-10 max-w-xl">
        <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">Discover what&apos;s possible</p>
        <h2 className="mt-2 text-4xl font-black leading-none md:text-6xl">Explore<br />focus areas</h2>
        <p className="mt-4 text-sm leading-6 text-white/60">Deep-dive into the themes shaping enterprise AI adoption across India.</p>
        <a href="#agenda" className="mt-5 inline-block rounded-full bg-fuchsia-700 px-5 py-2 text-xs font-bold">View Full Agenda</a>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {focusAreas.map((item) => (
          <article
            key={item.title}
            className="group relative min-h-[330px] overflow-hidden rounded-xl bg-slate-900"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(4,4,35,.12), rgba(4,4,35,.92)), url('${item.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[10px] font-bold tracking-widest text-fuchsia-300">{item.eyebrow}</p>
              <h3 className="mt-2 text-2xl font-black leading-tight">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-white/65">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreas;
