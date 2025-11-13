import indiaAiImage from "@/assets/focus-india-ai.jpg";
import enterpriseImage from "@/assets/focus-enterprise.jpg";
import automationImage from "@/assets/focus-automation.jpg";
import csuiteImage from "@/assets/focus-csuite.jpg";
import transformationImage from "@/assets/focus-transformation.jpg";
import securityImage from "@/assets/focus-security.jpg";

const FocusAreas = () => {
  const focusAreas = [
    {
      title: "India's AI Leadership & Global Influence",
      image: indiaAiImage,
    },
    {
      title: "Scaling Enterprise Intelligence",
      image: enterpriseImage,
    },
    {
      title: "Next-Gen Automation",
      image: automationImage,
    },
    {
      title: "C-Suite AI Imperatives",
      image: csuiteImage,
    },
    {
      title: "Industry Transformation",
      image: transformationImage,
    },
    {
      title: "Resilient & Secure AI",
      image: securityImage,
    },
  ];

  return (
    <section id="focus-areas" className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent opacity-0 animate-fade-in-up">
          Focus Areas
        </h2>
        <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 text-center opacity-0 animate-fade-in-up animation-delay-200">
          Key themes shaping the future of AI innovation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {focusAreas.map((area, index) => {
            const delays = ['', 'animation-delay-200', 'animation-delay-400', 'animation-delay-600', 'animation-delay-800', 'animate-delay-1000'];
            return (
              <div
                key={index}
                onClick={() => {}}
                className={`group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 animate-scale-in active:scale-95 ${delays[index]}`}
              >
                {/* Background Image */}
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative h-full flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {area.title}
                  </h3>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-xl transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;