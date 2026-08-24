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
              The AI Innovation Summit is a premier platform that brings together CIOs, CTOs, IT Heads, and senior technology and business leaders for a high-impact, immersive deep dive into enterprise AI. Designed to foster leadership dialogue and practical innovation, the summit serves as a meeting ground for decision-makers shaping the future of AI-driven transformation across industries.
            </p>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-400">
              Previous editions have convened a diverse community of technology and business leaders through interactive panel discussions, expert-led sessions, live audience polling, sponsor booth engagements, and curated networking experiences, creating an environment rich in collaboration, insight, and meaningful connections.
            </p>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-600">
              With a forward-looking agenda, the summit highlights how enterprises are scaling AI adoption, advancing Agentic AI, driving intelligent automation, and deploying AI across key sectors. The program also emphasizes responsible AI, addressing governance, security, risk, and ethical frameworks essential for sustainable, enterprise-wide impact.
            </p>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-800">
              <strong>Join the AI Innovation Summit to engage with industry trailblazers, gain actionable strategies, and accelerate your organization’s journey toward an AI-first future.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
