import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const LeadersReflect = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -620, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 620, behavior: "smooth" });
    }
  };
  const testimonials = [
    {
      quote: "Moderating the session on GCC leaders was a privilege. The conversations clearly showed how India's GCCs are now driving end-to-end AI-led transformations, embedding responsible practices while combining cost efficiency with innovation. The bold ideas and real use cases shared reflected India's growing role in shaping global AI delivery.",
      name: "Pragati (Kushwah) Chakraborty",
      title: "Partner, Deloitte",
    },
    {
      quote: "The panel at AI Innovation Summit was a great platform to reflect on how enterprise architecture must evolve to be truly AI-ready. We explored how cloud-native infrastructure and data pipelines foster a culture of innovation, and why AI must move from being a standalone tool to becoming a core business enabler.",
      name: "Shashwat Singh",
      title: "CIO, boAt",
    },
    {
      quote: "It was inspiring to join the discussion on 'Agentic Automation – Beyond GenAI to Self-Driving Workflows'. The session highlighted real business impact — from sales and customer service to financial workflows — while addressing the challenges of scaling from pilots to production with the right governance and skills in place.",
      name: "Raman Srinivasan",
      title: "Chief Digital Officer, InMobi Group",
    },
    {
      quote: "The way tons of data is getting created in the last 3-4 years, the amount of data which is getting generated is humongous, so what we need is an infrastructure which can basically manage on-demand situation, and the infrastructure which is a secure infrastructure and has a lot of inbuilt facilities.",
      name: "Vinod Bhat",
      title: "CIO, Vistara",
    },
    {
      quote: "Over the next 5 years, Gen AI will eliminate the repetitive aspects. While all manual tasks will be automated, the creative aspect will remain untouched.",
      name: "Mohit Malik",
      title: "CIO, Chaayos",
    },
  ];

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden leders-reflect-section">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Leaders Reflect
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-center">
          Perspectives from industry pioneers
        </p>
      </div>

      {/* Animated Horizontal Scroll */}
      <div className="relative lrsection">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90vw] md:w-[600px] mx-4"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200 h-full hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-red-600 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-slate-300 pt-4">
                  <p className="font-bold text-slate-900 text-lg">
                    – {testimonial.name}
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={scrollLeft}
          className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default LeadersReflect;
