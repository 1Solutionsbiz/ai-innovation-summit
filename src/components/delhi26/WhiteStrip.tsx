const WhiteStrip = () => {
  return (
    <section className="bg-background  py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#64E0E4] via-[#BF1C88] via-[#5343FF] to-[#2200e8] bg-clip-text text-transparent mb-6">
            When strategy meets intelligence, enterprises unlock scale, speed, and resilience.
          </h2>
          <div className="mt-6">
            <span className="text-primary text-[27px] md:text-[31px] font-semibold tracking-wider">
              #YesAICan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteStrip;
