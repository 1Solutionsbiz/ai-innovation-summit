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
      quote: "Great to see so many minds coming together to discuss how we can collectively shape the future of AI in India. The AI Innovation Summit provides a strong platform for meaningful dialogue and collaboration across the ecosystem.",
      name: "Amit Atri",
      title: "Global CIO, Tata Consumer Products",
    },
    {
      quote: "It’s energising to be at the AI Innovation Summit and witness the intensity of conversations across the room. Engaging with industry stalwarts and CXO leaders makes this platform truly valuable. The quality of discussions and idea exchange clearly sets the summit apart.",
      name: "Vyshak Venugopalan",
      title: "Sr. Director, Solution Consulting – India & JAPAC Partner Solutions Leader, Adobe",
    },
    {
      quote: "This is a thoughtfully curated event with a strong mix of thought leadership and real-world practitioners. The balance between frameworks and on-ground execution truly differentiates the summit. It offers both strategic perspective and practical insight.",
      name: "Raghav Aggarwal",
      title: "Co-founder, Fluid AI",
    },
    {
      quote: "The AI Innovation Summit is an excellent forum for practitioners and leaders to interact and exchange ideas. It enables learning around emerging technologies, challenges, and best practices. The discussions here go beyond pilots and focus on meaningful scale.",
      name: "Ritesh Jain",
      title: "Ritesh Jain, Partner- Agentic Automation, PwC India",
    },
    {
      quote: "This summit serves as a strong platform for leaders to come together and exchange perspectives. Conversations around current challenges, technology trends, and what lies ahead make it highly relevant for decision-makers.",
      name: "Siddharth Gupta",
      title: "Siddharth Gupta, Partner- Digital Platforms, KPMG India",
    },
    {
      quote: "Summits like these are critical to understanding what’s happening across the industry. With brands and solution providers in one room, it creates a safe space for honest conversations on what’s working and what’s not. For me, this is truly an enlightenment platform.",
      name: "Ajit Belani",
      title: "Ajit Belani",
    },
    {
      quote: "It’s great to see leaders come together on a common platform. The emphasis on collaboration and shared learning made this a valuable experience.",
      name: "Vinod Kumar",
      title: "Vinod Kumar Pathak, Senior Partner & Leader – Manufacturing, PwC India",
    },
    {
      quote: "Platforms like this help leaders gain clarity on what’s working, where investments are flowing, and what needs rethinking. These are complex decisions for CEOs, CIOs, and CDOs. Learning from peers and success stories builds confidence and conviction.",
      name: "Manpreet Ahuja",
      title: "Partner, Chief Client & Alliance Officer and TMT Sector Leader, PwC",
    },
    {
      quote: "Bringing together leaders from diverse industries offers powerful perspectives and shared learning. Beyond networking, it enables exposure to real-world use cases and practical insights. This makes the summit a valuable informal learning platform.",
      name: "Amit Sharma",
      title: "Senior Vice President – Enterprise Information Management & Analytics, Canara HSBC Life Insurance",
    },
    {
      quote: "Summits like these help uncover unknowns around how organisations are using AI and managing risk. They enable meaningful peer interactions and awareness of emerging use cases. More importantly, they prepare leaders for what lies ahead.",
      name: "Abhishek Das",
      title: "Partner – Consulting, EY",
    },
    {
      quote: "The AI Innovation Summit highlights how AI extends far beyond consumer use cases into B2B and core sectors. This perspective is critical as the country scales its economic ambitions. Such forums drive awareness and encourage valuable exchange of ideas.",
      name: "Animesh Srivastava",
      title: "Chief Information Officer, Moglix",
    },
    // {
    //   quote: "Moderating the session on GCC leaders was a privilege. The conversations clearly showed how India’s GCCs are now driving end-to-end AI-led transformations, embedding responsible practices while combining cost efficiency with innovation. The bold ideas and real use cases shared reflected India’s growing role in shaping global AI delivery.",
    //   name: "Pragati (Kushwah) Chakraborty",
    //   title: "Partner, Deloitte",
    // },
    // {
    //   quote: "The panel at AI Innovation Summit was a great platform to reflect on how enterprise architecture must evolve to be truly AI-ready. We explored how cloud-native infrastructure and data pipelines foster a culture of innovation, and why AI must move from being a standalone tool to becoming a core business enabler.",
    //   name: "Shashwat Singh",
    //   title: "CIO, boAt",
    // },
    // {
    //   quote: "It was inspiring to join the discussion on ‘Agentic Automation – Beyond GenAI to Self-Driving Workflows’. The session highlighted real business impact — from sales and customer service to financial workflows — while addressing the challenges of scaling from pilots to production with the right governance and skills in place.",
    //   name: "Raman Srinivasan",
    //   title: "Chief Digital Officer, InMobi Group",
    // },
    // {
    //   quote: "The way tons of data is getting created in the last 3-4 years, the amount of data which is getting generated is humongous, so what we need is an infrastructure which can basically manage on-demand situation, and the infrastructure which is a secure infrastructure and has a lot of inbuilt facilities.",
    //   name: "Vinod Bhat",
    //   title: "CIO, Vistara",
    // },
    // {
    //   quote: "Over the next 5 years, Gen AI will eliminate the repetitive aspects. While all manual tasks will be automated, the creative aspect will remain untouched.",
    //   name: "Mohit Malik",
    //   title: "CIO, Chaayos",
    // },
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
