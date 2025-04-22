import React from 'react';

export default function WhoShouldSponsor() {
  const cardData = [
    {
      title: "Technology companies offering AI solutions.",
    },
    {
      title: "Institutions investing in AI-driven innovations.",
    },
    {
      title: "Consulting firms providing AI integration services.",
    },
  ];

  return (
    <section className="bg-dark text-white py-20 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Heading */}
        <h2
          className="font-bold mb-6 text-center z-10 relative font-orbitron"
          style={{ fontSize: '5rem' }}
        >
          Who Should Sponsor?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-md p-6 border-2 border-white flex flex-col items-center text-center relative overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
             
              <h3 className="text-lg font-semibold mb-2 text-neon-blue font-orbitron">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
