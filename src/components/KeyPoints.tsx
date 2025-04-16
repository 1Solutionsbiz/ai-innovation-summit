export const KeyPoints = () => {
  const points = [
    {
      title: "Industry Leading Speakers",
      description: "Hear designers and developers from the world's top companies share their valuable insights.",
      image: "https://framerusercontent.com/images/75T9rcOc5cHkP4CES5YuC1NJe6U.png?scale-down-to=1024"
    },
    {
      title: "Interactive Workshops",
      description: "Take part in interactive workshops and learn new skills to take away.",
      image: "https://framerusercontent.com/images/H8lRiIVEbvSwKmAaDSlO41VM0os.png?scale-down-to=1024"
    },
    {
      title: "Networking Opportunities",
      description: "Meet new people who love the same things you do!",
      image: "https://framerusercontent.com/images/VUo12f2txBzkA1naDkwvle2yPY.png?scale-down-to=1024"
    }
  ];

  return (
    <section className=" bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {points.map((point) => (
            <div
              key={point.title}
              className="relative bg-gray-900 p-6  shadow-lg border-l-4 border-r-4  border-neon-blue"
            >
              <h3 className="text-2xl font-orbitron text-white mb-4 mt-10">{point.title}</h3>
              <p className="text-gray-400 mb-4">{point.description}</p>
              <img
                src={point.image}
                alt={point.title}
                className="w-full h-[550px] object-cover rounded-md "
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
