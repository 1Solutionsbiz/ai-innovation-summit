export const KeyPoints = () => {
  const points = [
    {
      title: "Industry Leading Speakers",
      description:
        "Hear CIOs, CTOs, and AI Chiefs from the top enterprises of the country making an impact in the world with AI.",
      image:
        "/networking/1.png",
    },
    {
      title: "Keynote Addresses and Workshops",
      description:
        "Gear up for the valuable takeaways including the focused Industry insights, trending enterprise use-cases.",
      image:
        "/networking/2.png",
    },
    {
      title: "Networking Opportunities",
      description:
        "Meet the who’s who from the tech fraternity, the tech leaders from across the industry sectors including Manufacturing, Health & Pharma, BFSI & FinTech, and many more.",
      image:
        "/networking/3.png",
    },
  ];

  return (
    <section className="bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="relative bg-gray-900 p-6 shadow-lg border-l-4 border-r-4 border-neon-blue"
            >
              <h3 className="text-2xl font-orbitron text-white mb-4 mt-10">
                {point.title}
              </h3>
              <p className="text-gray-400 mb-4">{point.description}</p>
              <img
                src={point.image}
                alt={point.title}
                className="w-full h-[400px] object-cover rounded-md"
              />
              <div className="absolute -z-10 top-0 right-0 w-24 h-24 opacity-20">
                <div className="w-full h-full bg-neon-purple rotate-45 transform origin-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
