import { partners } from "./data";

const PastSponsors = () => (
  <section className="bg-slate-100 py-14">
    <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-red-500">Past Sponsors</p>
      <h2 className="mt-2 text-3xl font-black text-[#092a61] md:text-4xl">Partners Who Powered the Journey</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">Celebrating the organisations that came forward to support ideas, innovation, and industry connections.</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 text-lg font-black text-slate-500">
        {partners.map((p) => <span key={p}>{p}</span>)}
      </div>
    </div>
  </section>
);

export default PastSponsors;
