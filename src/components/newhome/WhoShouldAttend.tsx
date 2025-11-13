const WhoShouldAttend = () => {
  const attendees = [
    "CIOs / CTOs / CDOs and other C-suite executives",
    "Heads of Digital Transformation",
    "Heads of Emerging Technologies",
    "Heads of Innovation",
    "Enterprise / Solution Architects",
    "Cloud / Data / Analytics Executives",
    "Heads of AI / Automation / Labs",
    "Heads of Customer Experience / CX / IoT",
    "Strategic / Innovation / Technology Decision-Makers",
  ];

  return (
    <section id="who-should-attend" className="py-[150px] py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Who Should Attend
          </h2>
          <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Connecting visionaries and decision-makers across industries
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-slate-400 rounded-full"></div>
                <p className="text-foreground font-medium fs20">{attendee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
