const stats = [
  ["700+", "Attendees"],
  ["45+", "CXO Speakers & Moderators"],
  ["12+", "Industries"],
  ["10+", "Industry Sectors"],
  ["3+", "Parallel Tracks"],
];

const StatsStrip = () => (
  <section className="border-b bg-white py-8">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 md:grid-cols-5 lg:px-8">
      {stats.map(([number, label]) => (
        <div key={label} className="text-center">
          <div className="text-3xl font-black tracking-tight text-[#12336d]">{number}</div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">{label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsStrip;
