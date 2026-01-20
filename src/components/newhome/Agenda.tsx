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
      time: "08:30 – 09:45 AM",
      title: "Registration & Networking Breakfast ",
      description: "",
    },
    {
      time: "10:00 – 10:15 AM ",
      title: "Welcome Note & Opening Remarks ",
      description: "Speaker: · Anushruti Singh, Associate Editor, SME Futures and The Guild",
    },
    {
      time: "10:15 – 10:30 AM ",
      title: "Special Address: The AI Tipping Point: Navigating Seismic Shifts in Digital Experiences ",
      description: "AI is no longer a future promise—it’s a present reality reshaping how businesses create, deliver, and optimize experiences. Explore the magnitude of this shift, why data quality matters, and how organizations can harness AI to unlock creativity, accelerate productivity, and deliver personalized experiences at scale. Speaker: · Vyshak Venugopalan, Senior Director, Solution Consulting, India & JAPAC Partner Solutions Leader, Adobe",
    },
    {
      time: "10:30 – 11:00 AM",
      title: "Keynote Address: AI Made in India – Innovation for 1.4 billion and beyond",
      description: "Explores how India is pioneering scalable, purpose-driven AI solutions for 1.4 billion people while creating models that can influence global industries and societies. Speaker: · Raghav Aggarwal, Co-Founder, Fluid AI ",
    },
    {
      time: "11:00 – 11:45 AM",
      title: "Session 1: Panel Discussion From Prompt to Impact – Scaling AI Across the Enterprise",
      description: "How leading enterprises are moving beyond experimentation into scaled AI adoption. Covers cultural shifts, cloud-native foundations, workforce readiness, and governance models. Moderator: Ritesh Jain, Partner- Agentic Automation, PwC India Panelists: · Ranganathan Vaidyanathan Iyer, Group CIO, DPO, Sr. EVP ICTS JBM Group · Kapil Mahajan, Global Chief Information & Technology Officer, Allcargo Logistics · Manish Chandegara, Group CIO, Simpolo Ceramics",
    },
    {
      time: "11:45 – 12:45 PM ",
      title: "Session 2: Panel Discussion Agentic AI: Beyond GenAI – Towards Self-Learning Workflows",
      description: "A deep dive into intelligent automation: from RPA to agentic automation. Industry leaders discuss how self-learning workflows boost decision velocity and reshape operations. Moderator: Siddharth Gupta, Partner- Digital Platforms, KPMG India Panelists: · Mukul Jain, CTO, Axis Max Life Insurance · Tarun Aggarwal, Group Chief Technology Officer, Capri Global Capital · Mohit Malik, CTO, Chaayos · Harsh Vardhan, Global Head- Digital Innovation, Apollo Tyres · Siddharth Sikand, Customer Transformation Advisor (Distinguished Enterprise Architect), Salesforce",
    },
    {
      time: "12:45 – 01:15 PM",
      title: " Session 3: Fireside Chat CEO–CIO Leadership Dialogue: The AI Imperative",
      description: "An exclusive fireside conversation on aligning AI investments with enterprise growth, resilience, and long-term transformation. Speakers: · Ved Goel, CEO International Business & Group CFO, Dr. Lal PathLabs · Narottam Sharma, CIO, Jubilant Foodworks",
    },
    {
      time: "01:15 – 02:15 PM",
      title: "Networking Lunch ",
      description: "",
    },
    
    {
      time: "02:15 – 03:00 PM(Parallel Track) ",
      title: "Spotlight Parallel Tracks",
      description: "Track A: AI in BFSI Trust, Risk & Digital Transformation – How BFSI leaders are using AI for fraud detection, risk modelling, credit scoring, and customer engagement. Moderator: Ankit Garg, Partner, PwC Panelists: · Mukesh Sharma, CTO, Paisabazaar · Amit Sharma, Sr. Vice President - Enterprise Information Management and Analytics, Canara HSBC Life Insurance · Rajat Wadhwa, Head- Customer Applications, Hero FinCorp \n Track B: AI in Manufacturing Smart Factories & Predictive Supply Chains – Time Automotive and electronics giants discuss predictive maintenance, quality assurance, digital twins, and AI in supply chain optimization. Moderator: Vinod Kumar Pathak, Senior Partner & Leader - Manufacturing, PwC India Panelists: · Pankaj Gupta, Chief AI Officer, Jindal Stainless · Manish Chandegara, Group CIO, SImpolo Ceramics · Animesh Srivastava, Senior Vice President of Technology, Moglix\n Track C: AI in Customer Experience Hyper-Personalization at Scale – FMCG, retail, and consumer goods leaders explore personalization, omnichannel strategies, demand forecasting, and AI-driven product innovation. Moderator: Ayush Gupta, Partner, KPMG Panelists: · Sunil Kumar, CTO, Shiprocket · Anil Sharma, Senior Director, Chief Technology Officer - AMESA, PepsiCo · Gowthamram C. Nallan, Solutions Consulting Lead, Adobe India · Anjali Dutta, Head of Experience Design & Digital Studio, BORN Service Line, Tech Mahindra ",
    },
    {
      time: "03:15 – 03:30 PM (Parallel Track) ",
      title: "Partner Session Shaping the future of CX with AI",
      description: "How enterprises are leveraging AI to reimagine customer experience and drive measurable business impact. From applied innovation to enterprise-ready solutions, this session offers a clear view into how AI is being operationalized across modern digital experiences. Speaker: Rachit Bhatnagar, Solutions Consulting Practice Lead, Adobe",
    },
    {
      time: "03:45 – 04:30 PM ",
      title: "Session 4: Panel Discussion Fortifying the AI Enterprise – Risks & Defenses in the GenAI Era  ",
      description: "Examines AI-driven vulnerabilities — from generated code risks to data security. Panelists share frameworks for building secure, trustworthy AI ecosystems. Moderator: Abhishek Das, Partner – Consulting, EY Panelists: · Dr. Jagannath Sahoo, Chief Information Security Officer, Gujarat Fluorochemicals Limited · Vivek Shankar, CITSO & Vice President, Axis Max Life Insurance· Mukesh Sharma, CTO, Paisabazaar ",
    },
    {
      time: "04:30 – 05:30 PM ",
      title: "Session 5: Panel Discussion The India AI Playbook – Lessons from Industry Leaders",
      description: "CXOs from services, manufacturing, BFSI, and consumer goods share what’s working, what’s failing, and practical roadmaps for building AI maturity. Moderator: Manpreet Singh Ahuja, Partner, Chief Client and Alliance & TMT Sector Leader, PwC India Panelists: · Anurag Jain, Chief Digital & Technology Officer- KFC India and Partner Countries, Yum Brands · Atul Govil, Chief Transformation Officer & Head (SAP & IT) - Corporate, India Glycols Limited · Varun Bansal, Vice President, Head of IT, Bata India · Amit Sharma, Sr. Vice President - Enterprise Information Management and Analytics, Canara HSBC Life Insurance ",
    },
    {
      time: "05:30 – 05:45 PM",
      title: "Closing Note & Networking over Hi-Tea ",
      description: " ",
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
              item.title === "Spotlight Parallel Tracks";
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
                      className={`transition-all duration-500 overflow-hidden ${isOpen
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
                                {/* <span className="font-normal">
                                  {track.split("–")[1]}
                                </span> */}
                                <span className="font-normal text-white/90 text-sm leading-relaxed block">
                                        {(() => {
                                            const content = track.split("–")[1] || "";

                                            const moderatorMatch = content.match(/Moderator:(.*?)(Panelists:|$)/);
                                            const panelistsMatch = content.match(/Panelists:(.*)$/);

                                            const descriptionText = content
                                            .replace(/Moderator:.*$/s, "")
                                            .trim();

                                            const moderatorText = moderatorMatch
                                            ? moderatorMatch[1].trim()
                                            : "";

                                            const panelistsText = panelistsMatch
                                            ? panelistsMatch[1]
                                                .split("·")
                                                .map(p => p.trim())
                                                .filter(Boolean)
                                            : [];

                                            return (
                                            <>
                                                {/* Description */}
                                                {descriptionText && (
                                                <p className="mb-4">
                                                    {descriptionText}
                                                </p>
                                                )}

                                                {/* Moderator */}
                                                {moderatorText && (
                                                <div className="mb-4">
                                                    <p className="font-semibold mb-1">Moderator:</p>
                                                    <p>{moderatorText}</p>
                                                </div>
                                                )}

                                                {/* Panelists */}
                                                {panelistsText.length > 0 && (
                                                <div>
                                                    <p className="font-semibold mb-2">Panelists:</p>
                                                    <ul className="list-disc list-inside space-y-1">
                                                    {panelistsText.map((p, i) => (
                                                        <li key={i}>{p}</li>
                                                    ))}
                                                    </ul>
                                                </div>
                                                )}
                                            </>
                                            );
                                        })()}
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
                            // <p
                            //   key={i}
                            //   className="text-white text-base leading-relaxed mb-3"
                            // >
                            //   {para}
                            // </p>
                            <div
                              key={i}
                              className="text-white text-base leading-relaxed mb-4"
                            >
                              {(() => {
                                const content = para || "";

                                // Matches
                                const moderatorMatch = content.match(
                                  /Moderator:(.*?)(Panelists:|Speaker:|Speakers:|$)/
                                );

                                const panelistsMatch = content.match(
                                  /Panelists:(.*?)(Speaker:|Speakers:|$)/
                                );

                                const speakersMatch = content.match(
                                  /(Speaker|Speakers):(.*)$/
                                );

                                // Clean description (remove all role-based lines)
                                const descriptionText = content
                                  .replace(/(Moderator|Panelists|Speaker|Speakers):.*$/s, "")
                                  .trim();

                                // Extract values
                                const moderatorText = moderatorMatch
                                  ? moderatorMatch[1].trim()
                                  : "";

                                const panelistsText = panelistsMatch
                                  ? panelistsMatch[1]
                                      .split("·")
                                      .map(p => p.trim())
                                      .filter(Boolean)
                                  : [];

                                const speakerLabel = speakersMatch
                                  ? speakersMatch[1] // Speaker OR Speakers
                                  : "";

                                const speakersText = speakersMatch
                                  ? speakersMatch[2]
                                      .split("·")
                                      .map(s => s.trim())
                                      .filter(Boolean)
                                  : [];

                                return (
                                  <>
                                    {/* Description */}
                                    {descriptionText && (
                                      <p className="mb-4">
                                        {descriptionText}
                                      </p>
                                    )}

                                    {/* Moderator */}
                                    {moderatorText && (
                                      <div className="mb-4">
                                        <p className="font-semibold mb-1">Moderator:</p>
                                        <p>{moderatorText}</p>
                                      </div>
                                    )}

                                    {/* Panelists */}
                                    {panelistsText.length > 0 && (
                                      <div className="mb-4">
                                        <p className="font-semibold mb-2">Panelists:</p>
                                        <ul className="list-disc list-inside space-y-1">
                                          {panelistsText.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Speaker / Speakers (label preserved exactly) */}
                                    {speakersText.length > 0 && (
                                      <div>
                                        <p className="font-semibold mb-2">
                                          {speakerLabel}:
                                        </p>
                                        <ul className="list-disc list-inside space-y-1">
                                          {speakersText.map((s, idx) => (
                                            <li key={idx}>{s}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </>
                                );
                              })()}
                            </div>


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
