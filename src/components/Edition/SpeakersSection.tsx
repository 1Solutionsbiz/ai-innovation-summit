type Speaker = {
  name: string;
  designation: string;
  company: string;
  image: string;
};

const SpeakersSection = ({ speakers }: { speakers: Speaker[] }) => {
  return (
    <div className="bg-black py-16 px-6 md:px-12 pb-40 ">
      <div className="container">

  
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="lg:text-6xl md:text-4xl font-orbitron font-bold text-neon-purple">
          Speakers
        </h2>
      </div>

      {/* Speaker Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="speaker-card bg-white rounded-lg p-6 text-center shadow-md border border-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border border-white">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl  font-bold text-neon-purple mb-2">
              {speaker.name}
            </h3>

            {/* Designation */}
            <p className="text-lg text-black">{speaker.designation}</p>
            <p className="text-black">{speaker.company}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
