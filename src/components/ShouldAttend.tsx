import React from 'react';

export default function ShouldAttend() {
  const cardData = [
   
    {
      title: "Business leaders seeking to understand AI's impact on their industries.",
     
    },
    {
      title: 'Government officials interested in AI policy and regulation.',
     
    },
    {
      title: 'Start-ups and developers exploring innovative AI applications.',
      
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
        Who Should Attend ?
        </h2>

       

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {cardData.map((card, index) => (
          <div
          key={index}
          className="bg-gray-900 rounded-2xl shadow-md p-6 border-2 border-white flex flex-col items-center text-center relative overflow-hidden transform transition-transform duration-500 hover:scale-105"
        >
              <img
                src={`/key/${index + 1}.png`}
                alt={`Icon ${index + 1}`}
                className="w-16 h-16 mb-4 object-contain mix-blend-screen"
              />
              <h3 className="text-lg font-semibold mb-2 text-neon-purple font-orbitron">
                {card.title}
              </h3>
              {/* <p className="text-sm text-white-300">{card.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
