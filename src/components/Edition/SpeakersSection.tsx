import React from 'react';

type Speaker = {
  name: string;
  designation: string;
  company: string;
  image: string;
};

const SpeakersSection = ({ speakers }: { speakers: Speaker[] }) => {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-neon-purple leading-tight">
            Speakers
          </h2>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md border border-white transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border border-white">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-neon-purple mb-1">
                {speaker.name}
              </h3>

              {/* Designation */}
              <p className="text-sm sm:text-base text-black">{speaker.designation}</p>
              <p className="text-sm sm:text-base text-black">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
