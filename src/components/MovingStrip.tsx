
const MovingStrip = () => {
  return (
    <div className="bg-neon-purple overflow-hidden py-2">
      <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        <div className="inline-block">
          <span className="mx-4 text-white">🎯 50+ Expert Speakers</span>
          <span className="mx-4 text-white">💡 Interactive Workshops</span>
          <span className="mx-4 text-white">🌐 Global Networking</span>
          <span className="mx-4 text-white">🚀 Startup Showcase</span>
          <span className="mx-4 text-white">🎓 Industry Insights</span>
        </div>
      </div>
    </div>
  );
};

export default MovingStrip;
