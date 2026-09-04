import { partners } from "./data";

const IndustryLogos = () => (
  <section className="border-b bg-white py-10">
    <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">7 Editions</p>
      <h2 className="mt-2 text-3xl font-black text-[#092a61]">A Glimpse of Participating Enterprises</h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm font-black text-slate-400">
        {partners.map((p) => <span key={p}>{p}</span>)}
        <span>IBM</span><span>Microsoft</span><span>Google</span><span>Oracle</span>
      </div>
    </div>
  </section>
);

export default IndustryLogos;
