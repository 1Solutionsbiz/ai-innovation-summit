import guildLogo from "@/assets/guild-logo.png";

const AboutTheGuild = () => {
  return (

          <section className="py-16 md:py-24 bg-gray-100 from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            About The Guild
          </h2>
          {/* <p className="text-slate-600 text-center text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
            Building platforms that unite leaders and innovators
          </p> */}

          <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed text-center">
            <p>
              The Guild continues to build platforms that unite leaders, enterprises, and innovators to
              accelerate technology-driven transformation. By enabling ideas to move from vision to
              impact, it helps shape the future of enterprises in India and beyond. More than a business
              media platform, The Guild is a vibrant community that champions creativity, insight, and
              transformative thinking.
            </p>
            
            <p>
              At the heart of The Guild is a belief in the power of collaboration and shared learning. We
              provide high-quality content, thought leadership, and perspectives that help professionals
              navigate a fast-changing business landscape, while fostering connections, sparking
              conversations, and celebrating the ideas that drive meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheGuild;
