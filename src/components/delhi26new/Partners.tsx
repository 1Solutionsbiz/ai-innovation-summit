import { partners } from "./data";

const Partners = () => (
  <section id="partners" className="bg-white py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_320px] lg:px-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-red-500">Our Partners</p>
        <h2 className="mt-2 max-w-xl text-4xl font-black leading-tight text-[#092a61] md:text-5xl">
          The partners<br />powering the summit
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">Meet the partners shaping how enterprises think, deploy, and scale AI.</p>
        <a href="#be-partner" className="mt-5 inline-block rounded-full border border-[#12336d] px-4 py-2 text-xs font-semibold text-[#12336d]">Become a Partner</a>
      </div>

      <div className="rounded-2xl border border-fuchsia-500 bg-[#062c70] p-8 text-center shadow-xl">
        <div className="text-3xl font-black text-white">AIIS</div>
        <div className="mt-6 space-y-5 text-sm font-bold text-white/85">
          {partners.slice(0, 4).map((p) => <div key={p}>{p}</div>)}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
