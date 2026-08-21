const Overview = () => {
  return (
    <section id="overview" className="bg-gradient-to-br from-white via-gray-50 to-slate-100 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight opacity-0 animate-fade-in-up">
            Overview
          </h2>
          
          <div className="space-y-6 text-foreground/80 text-base leading-relaxed">
            <p className="opacity-0 animate-fade-in-up animation-delay-200">
              The AI Innovation Summit 2026 is back with unmatched energy and scale, bringing together CIOs, 
              CTOs, IT Heads, and Technology & Business industry leaders for a truly immersive AI experience. 
              Building on the momentum of the Cloud + AI Innovation Summit 2024 in Delhi, Mumbai, and 
              Bengaluru and the AI Innovation Summit 2025 in Mumbai and Bengaluru, this flagship event is 
              India's premier stage for leadership, innovation, and enterprise transformation powered by AI.
            </p>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-400">
              Previous editions welcomed 750+ technology and business leaders and 2,100+ registrations, 
              featuring interactive panels, dynamic sessions, Digital Sling Shot challenges, live polls, Sponsor 
              booth engagements, and vibrant networking activities that sparked enthusiasm, collaboration, and 
              meaningful connections throughout the day.
            </p>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-600">
              With a forward-looking agenda, the 2026 summit will showcase how enterprises are scaling AI, 
              advancing intelligent automation, applying AI across BFSI, manufacturing, and customer 
              experience, and fortifying AI systems with governance, security, and ethical frameworks. 
              Insight-driven sessions led by industry trailblazers will share practical strategies to drive growth, 
              resilience, and long-term transformation.
            </p>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-800">
              <strong>Join the movement and be part of the AI Innovation Summit 2026—engage with the brightest 
              minds, unlock transformative AI strategies, and propel your organization into the AI-first era.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
