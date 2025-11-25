import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // for icons

const AgendaNew = () => {

  const higlitbanner = "/delhi26/highlight.png"; // background image path

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const agendaData = [
    {
      time: "08:30 – 09:45 AM ",
      title: "Registration & Networking Breakfast ",
      description: "",
    },
    {
      time: "10:00 – 10:10 AM  ",
      title: "Welcome Note & Opening Remarks  ",
      description: "",
    },
    {
      time: "10:10 – 10:30 AM  ",
      title: "Keynote Address: AI Made in India – Innovation for 1.4 billion and beyond",
      description: "Explores how India is pioneering scalable, purpose-driven AI solutions for 1.4 billion people while creating models that can influence global industries and societies.",
    },
    {
      time: "10:30– 11:15 AM ",
      title: "Session 1: Panel Discussion From Prompt to Impact – Scaling AI Across the Enterprise",
      description: "How leading enterprises are moving beyond experimentation into scaled AI adoption. Covers cultural shifts, cloud-native foundations, workforce readiness, and governance models.  ",
    },
    {
      time: "11:15 – 11:45 AM",
      title: "Partner Innovation Showcase",
      description: "Technology partners share live case studies and enterprise AI deployments.",
    },
    {
      time: "11:45 – 12:30 PM ",
      title: "Session 2: Panel Discussion Beyond GenAI – Towards Self-Learning Workflows",
      description: "A deep dive into intelligent automation: from RPA to agentic automation. Industry leaders discuss how self-learning workflows boost decision velocity and reshape operations. ",
    },
    {
      time: "12:30 – 01:00 PM  ",
      title: " Session 3: Fire-Side Chat CEO–CIO Leadership Dialogue: The AI Imperative ",
      description: "An exclusive fireside conversation on aligning AI investments with enterprise growth, resilience, and long-term transformation. ",
    },
    {
      time: "01:00 – 02:00 PM  ",
      title: "Networking Lunch  ",
      description: "",
    },
    {
      time: "02:00 – 02:45 PM (Parallel Track) ",
      title: "Delhi Spotlight Parallel Tracks",
      description: "Track A: AI in BFSI – Trust, Risk & Digital Transformation How BFSI leaders are using AI for fraud detection, risk modelling, credit scoring, and customer engagement. \n Track B: AI in Manufacturing – Smart Factories & Predictive Supply Chains Automotive and electronics giants discuss predictive maintenance, quality assurance, digital twins, and AI in supply chain optimization. \n Track C: AI in Customer Experience – Hyper-Personalization at Scale FMCG, retail, and consumer goods leaders explore personalization, omnichannel strategies, demand forecasting, and AI-driven product innovation.",
    },
    {
      time: "02:45 – 03:30 PM (Parallel Track)",
      title: "Partner Case Studies & Demos ",
      description: "Focused showcases from partners on applied AI solutions for BFSI, manufacturing, and CX.  ",
    },
    {
      time: "03:30 – 04:15 PM  ",
      title: "Session 4: Panel Discussion Fortifying the AI Enterprise – Risks & Defenses in the GenAI Era ",
      description: "Examines AI-driven vulnerabilities — from generated code risks to data security. Panelists share frameworks for building secure, trustworthy AI ecosystems. ",
    },
        {
      time: "04:15 – 05:00 PM ",
      title: "Session 5: Panel Discussion  The India AI Playbook – Lessons from Industry Leaders ",
      description: "CXOs from services, manufacturing, BFSI, and consumer goods share what’s working, what’s failing, and practical roadmaps for building AI maturity.",
    },
        {
      time: "05:00 – 05:15 PM  ",
      title: "Closing Note & Call to Action ",
      description: "",
    },
        {
      time: "06:00 – 09:00 PM  ",
      title: "Exclusive CIO/CTO Gala Dinner & Networking Cocktails (Invite-only, 50 Leaders)  ",
      description: "An intimate evening of dialogue with India’s top technology leaders on “Leading the AI-First Enterprise.” ",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0c1a2a] to-[#203a56]" id="agenda"
    style={{ backgroundImage: `url(${higlitbanner})` }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Agenda
          </h2>
        </div>

        {/* Agenda List */}
        <div className="max-w-7xl mx-auto divide-y divide-gray-200 
        backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8
        ">
          {agendaData.map((item, index) => {
            const hasDescription = item.description && item.description.trim() !== "";
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="py-6 cursor-pointer transition-all duration-300"
                onClick={() => hasDescription && toggleDescription(index)}
              >
                <div className="flex justify-between items-start gap-6 flex-col-mobile-reverse">
                  {/* Time */}
                  <div className="w-1/4 mw100p">
                    <p className="text-lg font-semibold text-white whitespace-pre-line">
                      {item.time}
                    </p>
                  </div>

                  {/* Title + Icon */}
                  <div className="w-3/4 mw100p">
                    <div className="flex justify-between items-start flex-col-mobile">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      {/* + / - Icon only if description exists */}
                      {hasDescription && (
                        <button
                          className="text-white hover:text-white transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription(index);
                          }}
                        >
                          {isActive ? (
                            <Minus className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Description (toggle) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-50 opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      {/* <p className="text-white text-base leading-relaxed">
                        {item.description}
                      </p> */}
                      {item.description.split("\n").map((para, i) => (
                        <p key={i} className="text-white text-base leading-relaxed mb-3">
                          {para.trim()}
                        </p>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaNew;
