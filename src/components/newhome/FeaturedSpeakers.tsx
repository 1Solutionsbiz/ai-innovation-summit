const FeaturedSpeakers = () => {
  // Placeholder speaker data - replace with actual speakers later
  const speakers = [
    {
      name: "Bhargab Dutta",
      title: "Chief Digital Officer",
      company: "Century Plyboards",
      image: "speakers/delhi26/bhargab.png"
    },
    {
      name: "Debashis Singh",
      title: "Chief Information Officer",
      company: "Persistent Systems",
      image: "speakers/delhi26/debashis.png"
    },
    {
      name: "Rejin Surendran",
      title: "Global CIO",
      company: "Wipro Enterprises Limited",
      image: "speakers/delhi26/rejin.png"
    },
    {
      name: "Anand V",
      title: "Chief Information Officer",
      company: "APAC - Randstad",
      image: "speakers/delhi26/anand.png"
    },
    {
      name: "Nandkishor Dhomne",
      title: "CIO",
      company: "Manipal Hospitals",
      image: "speakers/delhi26/nandkishor.png"
    },
    {
      name: "Pragati (Kushwah) Chakraborty",
      title: "Partner",
      company: "Deloitte",
      image: "speakers/delhi26/pragati.png"
    }
  ];

  return (
    <section id="speakers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Featured Speakers: Past Editions
        </h2>
        <p className="text-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          Industry leaders who have shared their insights
        </p>
        
        {/* Grid layout: 5 speakers per row, no boxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-7 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circular Image - no box */}
              <div className="relative w-full aspect-square speakerimgradis overflow-hidden mb-4 bg-gradient-to-b from-[#b72fd5] to-[#b70b76] hover:shadow-xl duration-300">
                <img 
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content - clean, no background */}
              <div className="space-y-1">
                <h4 className="text-base md:text-lg font-bold text-foreground">
                  {speaker.name}
                </h4>
                <p className="text-sm text-foreground/70">
                  {speaker.title}
                </p>
                <p className="text-sm text-foreground/60">
                  {speaker.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
