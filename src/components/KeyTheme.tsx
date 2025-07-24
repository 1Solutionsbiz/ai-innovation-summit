import React from 'react';

export default function KeyTheme() {
  const cardData = [
    {
      title: 'From AI Hype to Business Impact',
      description:
        'Debunking myths, aligning CXO expectations, and building real-world AI narratives rooted in outcomes—not buzzwords.',
      image: '/key/From-AI-Hype-to-Business-Impact.png',
    },
    {
      title: 'Agentic AI: The Next Enterprise Paradigm',
      description:
        'Exploring autonomous agents, their application in enterprise workflows, and how they’re reshaping decision-making.',
      image: '/key/Agentic-AI.png',
    },
    {
      title: 'From Pilot to Production: The Scaling Challenge',
      description:
        'Why 80% of AI pilots don’t scale—and how to build robust strategies around people, processes, and platforms.',
      image: '/key/From-Pilot-to-Production.png',
    },
    {
      title: 'AI + Data Strategy: Laying the Foundation for Scale',
      description:
        'Ensuring structured, enterprise-wide data readiness for Generative and Agentic AI applications.',
      image: '/key/AI-Data-Strategy.png',
    },
    {
      title: 'People Intelligence: AI-Powered Workforce',
      description:
        'Using GenAI to understand employee behavior, drive engagement, and influence strategic decisions.',
      image: '/key/People-Intelligence.png',
    },
    {
      title: 'Redefining ROI: Measuring Value in the AI Era',
      description:
        'Metrics, frameworks, and leadership mindsets required to define and track AI success across business units.',
      image: '/key/Redefining-ROI.png',
    },
    {
      title: 'Governance, Ethics & Regulation',
      description:
        'Evolving board-level frameworks, cybersecurity concerns, bias mitigation, and compliance in the AI age.',
      image: '/key/Governance.png',
    },
    {
      title: 'Industry Tracks',
      description:
        'Manufacturing, Construction, BFSI, Retail – deep dives into how AI is transforming each sector.',
      image: '/key/industry-icon.png',
    },
  ];

  return (
    <section className="bg-dark text-white py-12 sm:py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Main Heading */}
        <h2
          className="font-bold mb-6 text-center z-10 relative font-orbitron text-4xl sm:text-5xl md:text-6xl"
        >
          Key Themes
        </h2>

        {/* Subheading */}
        <div
          className="bg-purple-700 text-white font-semibold px-4 sm:px-6 py-3 sm:py-4 w-fit mx-auto shadow-lg relative font-orbitron text-base sm:text-lg sm:-rotate-4"
          style={{
            marginTop: '-40px',
            zIndex: 2,
          }}
        >
          Mastering AI and securing the future
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-md p-4 sm:p-6 border-2 border-white flex flex-col items-center text-center relative overflow-hidden transition-transform duration-500 lg:hover:scale-105"
            >
              <img
                src={card.image}
                alt={`${card.title} icon`}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 object-contain mix-blend-screen"
              />
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-neon-purple font-orbitron">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-white-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}