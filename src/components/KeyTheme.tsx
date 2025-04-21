import React from 'react';

export default function KeyTheme() {
  const cardData = [
    {
      title: 'ROI on AI investments:',
      description:
        'Pinpointing AI use cases that deliver tangible value is a 2025 CIO priority. Success requires identifying initiatives that impact the bottom line.',
    },
    {
      title: 'Scaling AI implementation',
      description:
        'Choosing where and how to apply AI is key. Shadow GenAI use brings major risks of data leakage.',
    },
    {
      title: 'Proactive cyberthreat intelligence:',
      description:
        'With threat actors growing more sophisticated, protecting IT ecosystems is tougher than ever.',
    },
    {
      title: 'Agentic AI: Redefining the future of work',
      description:
        'Beyond GenAI, agentic AI is rising. Are enterprises ready for autonomous tools?',
    },
  ];

  return (
    <section className="bg-dark text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Heading */}
        <h2
          className="font-bold mb-6 text-center z-10 relative"
          style={{ fontSize: '5rem' }}
        >
          Key Themes
        </h2>

        {/* Subheading */}
        <div
          className="bg-purple-700 text-white font-semibold px-6 py-4 w-fit mx-auto shadow-lg relative"
          style={{
            transform: 'rotate(-4deg)',
            marginTop: '-60px',
            zIndex: 2,
            fontSize: '1.25rem',
          }}
        >
          Mastering AI and securing the future
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-md p-6 border-2 border-white flex flex-col items-center text-center"
            >
              <img
                src={`/key/${index + 1}.png`}
                alt={`Icon ${index + 1}`}
                className="w-16 h-16 mb-4 object-contain mix-blend-screen"
              />
              <h3 className="text-lg font-semibold mb-2 text-neon-purple">
                {card.title}
              </h3>
              <p className="text-sm text-white-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
