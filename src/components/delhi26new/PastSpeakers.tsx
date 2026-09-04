import { speakers } from "./data";

const PastSpeakers = () => (
  <section className="bg-white py-14">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-red-500">Retrospective</p>
      <div className="flex items-end justify-between">
        <h2 className="mt-2 text-4xl font-black text-[#092a61]">Featured Speakers</h2>
        <a href="#speakers" className="hidden rounded-full border border-[#12336d] px-4 py-2 text-xs md:block">View all speakers</a>
      </div>
      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[...speakers, ...speakers].map((s, i) => (
          <div key={`${s.name}-${i}`} className="min-w-[150px] text-center">
            <img src={s.image} alt={s.name} className="mx-auto h-28 w-28 rounded-full object-cover object-top" />
            <h3 className="mt-3 text-sm font-bold text-slate-900">{s.name}</h3>
            <p className="mt-1 text-[10px] text-slate-500">{s.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PastSpeakers;
