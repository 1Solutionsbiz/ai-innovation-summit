import { speakers } from "./data";

const Speakers = () => (
  <section id="speakers" className="bg-white py-14">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-red-500">AIIS 2026 Speakers</p>
          <h2 className="mt-2 max-w-xl text-3xl font-black leading-tight text-[#092a61] md:text-5xl">
            Voices Leading<br />India&apos;s AI Future
          </h2>
        </div>
        <a href="#all-speakers" className="hidden rounded-full border border-[#12336d] px-4 py-2 text-xs font-semibold text-[#12336d] md:block">View all speakers</a>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {speakers.map((speaker) => (
          <article key={speaker.name} className="min-w-[220px] overflow-hidden rounded-xl bg-[#082d72] text-white md:min-w-[245px]">
            <img src={speaker.image} alt={speaker.name} className="h-56 w-full object-cover object-top" />
            <div className="p-4">
              <h3 className="font-bold">{speaker.name}</h3>
              <p className="mt-1 text-xs text-white/70">{speaker.role}</p>
              <p className="text-xs text-white/70">{speaker.company}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Speakers;
