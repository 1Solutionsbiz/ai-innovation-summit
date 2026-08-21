const WhoShouldAttend = () => {
  const attendees = [
    "CIOs, CTOs, CDOs, and other C-suite executives",
    "Heads of Digital Transformation",
    "Heads of Emerging Technologies",
    "Heads of Innovation",
    "Enterprise / Solution Architects",
    "Cloud & Digital Technology Executives",
    "Chief Data & Analytics Officers (CDAO)",
    "Heads of AI, Automation, and Labs",
    "Heads of Customer Experience and IoT",
    "Enterprise Security / Cybersecurity Heads",
  ];

  return (
    <section id="who-should-attend" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Who Should Attend
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="flex justify-center items-start gap-3 text-center"
              >
                {/* <div className="w-2 h-2 mt-2 bg-slate-500 rounded-full"></div> */}
                <p className="text-foreground font-medium text-lg">{attendee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
