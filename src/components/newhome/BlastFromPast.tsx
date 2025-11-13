const BlastFromPast = () => {
  const videoSrc = "videos/Delhi-2026_banner.mp4";
  const videoTitle = "AI Innovation Summit 2024 Highlights";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Blast From the Past  
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          Relive the Summit Moments 
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={videoSrc}
                title={videoTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlastFromPast;
