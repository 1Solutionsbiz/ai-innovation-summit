
export const KeyPoints = () => {
  const points = [
    {
      title: "Industry Leading Speakers",
      description: "Hear designers and developers from the world's top companies share their valuable insights.",
      image: "photo-1573496359142-b8d87734a5a2"
    },
    {
      title: "Interactive Workshops",
      description: "Take part in interactive workshops and learn new skills to take away.",
      image: "photo-1560250097-0b93528c311a"
    },
    {
      title: "Networking Opportunities",
      description: "Meet new people who love the same things you do!",
      image: "photo-1494790108377-be9c29b29330"
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point) => (
            <div key={point.title} className="relative">
              <h3 className="text-2xl font-orbitron text-white mb-4">{point.title}</h3>
              <p className="text-gray-400 mb-6">{point.description}</p>
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
