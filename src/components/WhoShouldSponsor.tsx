export const WhoShouldSponsor = () => {
  const points = [
    {
      title: "Technology companies offering AI solutions.",
      image: "/networking/1.png",
    },
    {
      title: "Institutions investing in AI-driven innovations.",
      image: "/networking/2.png",
    },
    {
      title: "Consulting firms providing AI integration services.",
      image: "/networking/3.png",
    },
  ];

  return (
    <section className="bg-neon-blue pb-16">
      {/* Heading */}
      <h2
        className="font-bold text-center py-16 font-orbitron text-black"
        style={{ fontSize: '3rem' }}
      >
        Who Should Partner?
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="relative bg-gray-900 p-6 shadow-lg border-l-4 border-r-4 border-neon-blue transform transition-transform duration-300 hover:scale-105 "
            >
              <h3 className="text-2xl font-orbitron text-white mb-4 mt-4 text-center">
                {point.title}
              </h3>

              {/* Optional image (currently commented out) */}
              {/* <img
                src={point.image}
                alt={point.title}
                className="w-full h-[400px] object-cover rounded-md"
              /> */}

              <div className="absolute -z-10 top-5 right-5 w-24 h-24 opacity-20">
                <div className="w-full h-full bg-neon-purple rotate-45 transform origin-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
