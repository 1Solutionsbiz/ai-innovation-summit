import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AgendaNew = () => {
  const higlitbanner = "/delhi26/highlight.png";
  const salesforcelogo = "/partners/salesforce.png";

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };








  


  const agendaData = [
    {
      time: "09:00 – 09:45 AM",
      title: "Registration & Networking Breakfast ",
      description: "",
    },
    {
      time: "09:45 – 10:00 AM",
      title: "Welcome Address ",
      description: "",
    },
    {
      time: "10:00 – 10:15 AM ",
      title: "Opening Address: The Autonomous Enterprise: Engineering the Shift ",
      description: " <ul> <li>Enterprise AI is entering its third wave — from experimentation and copilots to autonomous systems executing workflows and decisions.</li> <li>While 70%+ CIOs run AI pilots, fewer than 25% have scaled AI into mission-critical production.</li><li>The real challenge now is architecture, governance, and economic viability.</li><li>This opening address explores the shift from AI augmentation to AI autonomy—and what it takes to build AI-native enterprises.</li></ul>   ",
    },
    {
      time: "10:15 – 10:30 AM ",
      title: "Keynote Address: Build and Govern the Agentic Enterprise ",
      description: "<ul><li>Agentic AI enables goal-driven systems that interact dynamically with data, applications, and workflows.</li><li>As autonomy grows, so does complexity in orchestration, monitoring, transparency, and governance.</li><li>Enterprises must address multi-agent management, model drift, and auditability of AI-driven decisions.</li><li>This keynote explores the architecture and governance frameworks required to build safe, enterprise-grade agentic systems.</li></ul>",
    },
    {
      time: "10:30 – 11:15 AM ",

      title: "Session 1: Panel Discussion From Prototype to Production: The Economics of Enterprise AI ",
      description: "<ul><li>Enterprise AI success depends on economics, not just innovation.</li><li>80%+ of AI initiatives stall due to GPU costs, infrastructure complexity, integration challenges, unclear ROI, and vendor lock-in.</li><li>Poorly architected AI workloads can raise cloud costs by 20–40%.</li><li>This panel explores AI FinOps, infrastructure optimization, model lifecycle management, and scaling AI sustainably.</li></ul> ",
    },
    {
      time: "11:15 – 11:45 AM  ",
      title: "Technology Deep Dive Session",
      description: "Enabling the Autonomous Enterprise",
    },
    {
      time: "11:45 – 12:00 PM  ",
      title: "Networking Break ",
      description: "",
    },
    {
      time: "12:00 – 12:45 PM",
      title: " Session 2: Panel Discussion AI × The Future of Work ",
      description: "Redesigning the Engineering Organization.\n <ul><li>AI copilots can boost developer productivity by 20–55% and reduce enterprise workflow handling time by up to 30%.</li><li>As AI becomes embedded in daily work, organizations must rethink decision layers, oversight, and accountability.</li><li>Engineering and operational models will evolve as humans increasingly collaborate with AI systems.</li><li>This session explores how enterprises must redesign operating models for effective human–AI collaboration.</li></ul>",
    },
    {
      time: "12:45 – 01:15 PM ",
      title: "Session 3: Fire-Side Chat CEO × CIO Leadership Dialogue",
      description: "<ul><li>Autonomous systems reshape budget allocation, risk exposure, compliance, talent models, and competitive positioning.</li><li>Leaders must determine the right balance between human oversight and AI-driven decisions.</li><li>Key questions include acceptable autonomy levels and measuring AI-driven performance.</li><li>This dialogue explores how leadership aligns AI strategy with enterprise value creation.</li></ul>",
    },
    {
      time: "01:15 – 02:00 PM ",
      title: "Networking Lunch",
      description: "",
    },
    {
      time: "02:00 – 03:30 PM ",
      title: "Spotlight Parallel Tracks",
      description: "<strong>Track A: BFSI / FinTech</strong> <br><br> <p>Autonomous Financial Systems</p> <br> <ul><li>Financial services is one of the most AI-intensive sectors, powering use cases from fraud detection to credit risk modelling.</li><li>While AI improves fraud detection by 20–40%, regulatory scrutiny and legacy system integration remain key challenges.</li><li>This track explores AI in regulated environments, small language models, risk and compliance automation, and AI-enabled core banking modernization.</li><li>Focus on building financial AI systems that balance innovation with governance and auditability.</li></ul>\n <strong>Track B: Customer Experience</strong> <br><br> <p>Autonomous Customer Platforms</p><br><ul><li>AI-powered agents are transforming customer experience by handling interactions, generating content, and predicting intent in real time.</li><li>AI-driven contact centers can reduce operational costs by 25–30% while improving speed and personalization.</li><li>Scaling AI in CX requires solving data fragmentation, omni-channel orchestration, bias, and ROI measurement.</li><li>This track focuses on building scalable, secure, and measurable AI-driven customer platforms.</li></ul><br>  \n <strong>Track C: Manufacturing / Digital Twins</strong> <br><br> <p>Autonomous Industrial Systems</p><br><ul><li>Manufacturing is adopting AI-driven digital twins and predictive systems to optimize operations.</li><li>AI-powered predictive maintenance can reduce downtime by up to 30% and maintenance costs by 10–20%</li><li>Industrial AI requires edge computing, secure IoT infrastructure, and cross-system interoperability.</li><li>This track explores how AI is embedded into industrial systems and supply chains to enable autonomous production environments.</li></ul> ",
    },
    {
      time: "03:30 – 03:45 PM",
      title: "Executive Transition Break ",
      description: "",
    },
    {
      time: "03:45 – 04:15 PM ",
      title: "Session 4: Panel Discussion Cyber Security in the Autonomous Enterprise ",
      description: "<p>Defending the AI-Native Enterpris</p> <br> <ul><li>As AI becomes embedded in enterprise workflows, new security risks are emerging.</li><li>Key threats include model poisoning, prompt injection, data leakage via LLMs, and manipulation of autonomous systems.</li><li>Security leaders are seeing a rise in AI-related threat vectors across organizations.</li><li>This session explores how to design AI systems that are secure by architecture, not by afterthought.</li></ul>",
    },
    {
      time: "04:15 – 04:45 PM ",
      title: "Session 5: Panel Discussion ",
      description: " <strong> Data + AI Architecture</strong> <br> Turning Enterprise Data into Strategic Infrastructure \n <ul><li>AI performance depends on strong data foundations.</li><li>Over 60% of AI project failures are linked to poor data quality or fragmented data architecture.</li><li>Enterprises are moving toward lakehouse models, unified data platforms, and interoperable AI stacks.</li><li>This session explores data architecture, governance, model observability, and infrastructure readiness for AI at scale.</li></ul> ",
    },
    {
      time: "04:45 – 05:15 PM ",
      title: "Session 6: Panel Discussion  ",
      description: " <strong> Cross Industry Power Conversation</strong> <br> Engineering Competitive Advantage Through AI \n <ul><li>Enterprises that scale AI effectively are achieving faster decision cycles, higher efficiency, and deeper customer personalization.</li><li>However, scaling AI autonomy requires strong governance, engineering maturity, economic discipline, and leadership alignment.</li><li>This closing conversation reflects the day’s insights and what distinguishes AI adopters from true AI leaders.</li></ul> ",
    },
    {
      time: "05:15 – 05:30 PM ",
      title: "Closing & End of the Summit  ",
      description: "",
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
                          ? "max-h-[2000px] opacity-100 mt-4"
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
                             <div
                              className="text-white text-sm leading-relaxed mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1"
                              dangerouslySetInnerHTML={{
                                __html: track.replace(/^Track [A-C]:/, "<strong>$&</strong>")
                              }}
                            ></div>


                              {i === 1 && (
                                <div className="mt-auto">
                                  <p className="text-white/70 text-xs mb-2">
                                    Powered by:
                                  </p>
                                  <img
                                    src={salesforcelogo}
                                    alt="salesforce"
                                    className="h-12 object-contain"
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
                                      <div
                                        className="mb-4 text-white [&_ul]:list-disc [&_ul]:pl-6 "
                                        dangerouslySetInnerHTML={{ __html: descriptionText }}
                                      ></div>

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
