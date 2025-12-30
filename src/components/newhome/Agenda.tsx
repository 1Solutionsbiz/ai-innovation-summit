import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AgendaNew = () => {
  const higlitbanner = "/delhi26/highlight.png";
  const adobelogo = "/partners/Adobe_Logo_Red.png";

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
      time: "10:00 – 10:15 AM  ",
      title: "Welcome Note & Opening Remarks  ",
      description: "",
    },
    {
      time: "10:15 – 10:30 AM  ",
      title: "Special Address: The AI Tipping Point: Navigating Seismic Shifts in Digital Experiences ",
      description: "AI is no longer a future promise—it’s a present reality reshaping how businesses create, deliver, and optimize experiences. Explore the magnitude of this shift, why data quality matters, and how organizations can harness AI to unlock creativity, accelerate productivity, and deliver personalized experiences at scale. ",
    },
    {
      time: "10:30 – 10:45 AM ",
      title: "Keynote Address: AI Made in India – Innovation for 1.4 billion and beyond ",
      description: "Explores how India is pioneering scalable, purpose-driven AI solutions for 1.4 billion people while creating models that can influence global industries and societies. ",
    },
    {
      time: "10:45 – 11:30 AM",
      title: "Session 1: Panel Discussion From Prompt to Impact – Scaling AI Across the Enterprise",
      description: "How leading enterprises are moving beyond experimentation into scaled AI adoption. Covers cultural shifts, cloud-native foundations, workforce readiness, and governance models.",
    },
    {
      time: "11:30 – 12:00 PM ",
      title: "Partner Innovation Showcase",
      description: "Technology partners share live case studies and enterprise AI deployments.",
    },
    {
      time: "12:00– 12:45 PM ",
      title: " Session 2: Panel Discussion Agentic AI: Beyond GenAI – Towards Self-Learning Workflows",
      description: "A deep dive into intelligent automation: from RPA to agentic automation. Industry leaders discuss how self-learning workflows boost decision velocity and reshape operations. ",
    },
    {
      time: "12:45 – 01:15 PM ",
      title: "Session 3: Fire-Side Chat CEO–CIO Leadership Dialogue: The AI Imperative ",
      description: "An exclusive fireside conversation on aligning AI investments with enterprise growth, resilience, and long-term transformation.",
    },
    {
      time: "01:15 – 02:15 PM",
      title: "Networking Lunch ",
      description: "",
    },
    {
      time: "02:15 – 03:00 PM (Parallel Track) ",
      title: "Delhi Spotlight Parallel Tracks",
      description: "Track A: AI in BFSI - Trust, Risk & Digital Transformation – How BFSI leaders are using AI for fraud detection, risk modelling, credit scoring, and customer engagement. \n Track B: AI in Manufacturing - Smart Factories & Predictive Supply Chains – Automotive and electronics giants discuss predictive maintenance, quality assurance, digital twins, and AI in supply chain optimization. \n Track C: AI in Customer Experience - Hyper-Personalization at Scale – FMCG, retail, and consumer goods leaders explore personalization, omnichannel strategies, demand forecasting, and AI-driven product innovation.",
    },
    {
      time: "03:00 – 03:45 PM (Parallel Track) ",
      title: "Partner Case Studies & Demos  ",
      description: "Focused showcases from partners on applied AI solutions for BFSI, manufacturing, and CX.  ",
    },
    {
      time: "03:45 – 04:30 PM ",
      title: "Session 4: Panel Discussion Fortifying the AI Enterprise – Risks & Defenses in the GenAI Era",
      description: "Examines AI-driven vulnerabilities — from generated code risks to data security. Panelists share frameworks for building secure, trustworthy AI ecosystems. ",
    },
        {
      time: "04:30 – 05:15 PM",
      title: "Session 5: Panel Discussion The India AI Playbook – Lessons from Industry Leaders  ",
      description: "CXOs from services, manufacturing, BFSI, and consumer goods share what’s working, what’s failing, and practical roadmaps for building AI maturity. ",
    },
        {
      time: "05:15 – 05:30 PM ",
      title: "Closing Note & Call to Action ",
      description: "",
    },
        {
      time: "06:00 – 09:00 PM",
      title: "Exclusive CIO/CTO Gala Dinner & Networking Cocktails (Invite-only, 50 Leaders)  ",
      description: "An intimate evening of dialogue with India’s top technology leaders on “Leading the AI-First Enterprise.” ",
    },
  ];
  return (
    <section
      className="relative py-16 bg-gradient-to-b from-[#0c1a2a] to-[#203a56]"
      id="agenda"
      style={{ backgroundImage: `url(${higlitbanner})` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Agenda
          </h2>
        </div>

        <div className="max-w-7xl mx-auto divide-y divide-gray-200 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          {agendaData.map((item, index) => {
            const hasDescription = item.description?.trim();
            const isParallelTracks =
              item.title === "Delhi Spotlight Parallel Tracks";
            const isActive = activeIndex === index;
            const isOpen = isParallelTracks || isActive;

            return (
              <div
                key={index}
                className="py-6 border-none"
                onClick={() =>
                  hasDescription &&
                  !isParallelTracks &&
                  toggleDescription(index)
                }
              >
                <div className="flex gap-6 flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <p className="text-lg font-semibold text-white">
                      {item.time}
                    </p>
                  </div>

                  <div className="md:w-3/4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      {/* Toggle only for non-parallel items */}
                      {hasDescription && !isParallelTracks && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription(index);
                          }}
                        >
                          {isActive ? (
                            <Minus className="w-5 h-5 text-white" />
                          ) : (
                            <Plus className="w-5 h-5 text-white" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Description */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isOpen
                          ? "max-h-[700px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {isParallelTracks ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {item.description.split("\n").map((track, i) => (
                            <div
                              key={i}
                              className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col justify-between"
                            >
                             <p className="text-white text-sm leading-relaxed mb-4">
                                <span className="font-semibold block">
                                  {track.split("–")[0]}
                                </span>
                                <br />
                                <span className="font-normal">
                                  {track.split("–")[1]}
                                </span>
                              </p>


                              {i === 2 && (
                                <div className="mt-auto">
                                  <p className="text-white/70 text-xs mb-2">
                                    Sponsored by:
                                  </p>
                                  <img
                                    src={adobelogo}
                                    alt="Adobe"
                                    className="h-8 object-contain"
                                  />
                                </div>
                              )}

                            </div>
                          ))}
                        </div>
                      ) : (
                        item.description
                          ?.split("\n")
                          .map((para, i) => (
                            <p
                              key={i}
                              className="text-white text-base leading-relaxed mb-3"
                            >
                              {para}
                            </p>
                          ))
                      )}
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
