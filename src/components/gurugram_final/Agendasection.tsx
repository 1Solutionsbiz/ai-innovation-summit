import { useState } from "react";

// ---------- Types ----------
type Speaker = {
  name: string;
  role: string; // can include \n for multi-line via array below instead
  roleLines?: string[]; // optional multi-line role/company breakup
  image: string;
};

type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type AgendaItem = {
  time: string;
  title: string;
  description?: string | DescriptionBlock[];
  speakers?: Speaker[];
  isTrack?: boolean;
};

type DescriptionParts = {
  summary: string;
  details: DescriptionBlock[];
};

type Track = {
  id: string;
  label: string;
  items: AgendaItem[];
};

type DayData = {
  id: string;
  label: string;
  tracks: Track[];
};

const getDescriptionBlocks = (
  description: string | DescriptionBlock[],
): DescriptionBlock[] => {
  if (Array.isArray(description)) return description;

  return description
    .replace(/\\n/g, "\n")
    .split(/\n+/)
    .flatMap((paragraph) => {
      const parts = paragraph
        .split(/\s+-\s+/)
        .map((part) => part.trim())
        .filter(Boolean);

      if (parts.length <= 1) {
        return [{ type: "paragraph", text: paragraph.trim() }];
      }

      return [
        { type: "paragraph", text: parts[0] },
        { type: "list", items: parts.slice(1) },
      ];
    });
};

const getDescriptionParts = (
  description: string | DescriptionBlock[],
): DescriptionParts => {
  const blocks = getDescriptionBlocks(description);
  const firstParagraph = blocks.find((block) => block.type === "paragraph");

  if (!firstParagraph || firstParagraph.type !== "paragraph") {
    return { summary: "", details: blocks };
  }

  const sentenceMatch = firstParagraph.text.match(/^(.+?[.!?])(?:\s|$)/);
  const summary = sentenceMatch?.[1] ?? firstParagraph.text;
  const remainingText = firstParagraph.text.slice(summary.length).trim();
  const details = [
    ...(remainingText ? [{ type: "paragraph" as const, text: remainingText }] : []),
    ...blocks.slice(blocks.indexOf(firstParagraph) + 1),
  ];

  return { summary, details };
};

type AgendaGroup = {
  time: string;
  items: AgendaItem[];
};

const normalizeTime = (time: string) =>
  time.trim().replace(/\s+/g, " ").replace(/\s*[-–—]\s*/g, "-");

const getAgendaGroups = (items: AgendaItem[]): AgendaGroup[] =>
  items.reduce<AgendaGroup[]>((groups, item) => {
    const lastGroup = groups[groups.length - 1];
    const normalizedTime = normalizeTime(item.time);

    if (
      lastGroup &&
      normalizeTime(lastGroup.time) === normalizedTime &&
      Boolean(lastGroup.items[0].isTrack) === Boolean(item.isTrack)
    ) {
      lastGroup.items.push(item);
      return groups;
    }

    groups.push({ time: item.time, items: [item] });
    return groups;
  }, []);

// ---------- Sample data (swap with real data) ----------
const AGENDA_DATA: DayData[] = [
  {
    id: "day1",
    label: "Day 1",
    tracks: [
      {
        id: "Detailed-Agenda",
        label: "Detailed Agenda",
        items: [
          {
            time: "08:30 AM - 09:15 AM",
            title: "Registration & Networking Breakfast ",
            description: "Delegates arrive and collect registration kits. Lucky Draw QR codes active. Engagement Zone open in pre-function area. Sponsor booths open. ",
            // speakers: [
            //   {
            //     name: "Charu Lamba",
            //     role: "Deputy Editor",
            //     roleLines: ["Deputy", "Editor", "ETRetail"],
            //     image: "/speakers/charu-lamba.jpg",
            //   },
            // ],
          },
          {
            time: "08:30 AM – 09:15 AM",
            title: "Registration & Networking Breakfast ",
            description: "Delegates arrive and collect registration kits. Lucky Draw QR codes active. Engagement Zone open in pre-function area. Sponsor booths open."
          },
          {
            time: "09:15 AM – 09:20 AM",
            title: "Welcome Address",
            description: "Welcome note by The Guild and Guild Live. Context setting for the day.. "
          },
          {
            time: "09:20 AM – 09:40 AM ",
            title: "Opening Keynote From Assistance to Autonomy: The Enterprise AI Mandate for 2026",
            description: "What enterprise AI leadership actually looks like when the boardroom demands ROI, the regulators demand governance, and the technology moves faster than either can keep up with. Where enterprise AI stands in India in 2026, the state of AI adoption across sectors  Why the shift from AI assistance to AI autonomy is a leadership decision, not just a technology decision  The structural choices, architectural, economic and cultural, that separate enduring AI deployments from those that stall  What the intelligent enterprise looks like from the inside and what leaders need to rethink "
          },
          {
            time: "09:40 AM – 09:55 AM ",
            title: "Partner Keynote Address",
            description: " "
          },
          {
            time: "09:55 AM – 10:10 AM",
            title: "Partner Keynote Address ",
            description: ""
          },
          {
            time: "10:10 AM – 10:25 AM ",
            title: "Inaugural / Dignitary Address",
            description: "[Guest of Honour, Government of Delhi NCT / MeitY]"
          },
          {
            time: "10:25 AM – 10:45 AM",
            title: "Tea & Coffee Break",
            description: "Sponsor booths and engagement zone."
          },
          {
            time: "10:45 AM – 11:30 AM",
            title: "Session 1: Leadership Panel The Technology Mandate: Scaling AI Where the Board Is Watching",
            description: "The role of Technology CXOs has been permanently rewritten. From technology custodians to enterprise intelligence architects. Accountable to boards for AI ROI. Accountable to regulators for AI governance. Accountable to the workforce for how AI reshapes their jobs. This panel brings together India's most senior Tech-CXOs from manufacturing, BFSI, pharma, FMCG, and cross-industry enterprises for a frank conversation on how they are navigating the most consequential mandate transformation in a generation.  Turning AI investment into a board-level ROI narrative  Governing GPU costs, model lifecycles and AI infrastructure at scale  Solving legacy integration, architecture debt and vendor lock-in  Redrawing AI accountability across the C-suite  Building the intelligent enterprise operating model  Leading the workforce through AI-driven change, trust and capability"
          },
          {
            time: "11:30 AM – 11:40 AM ",
            title: "Partner Keynote Address",
            description: ""
          },
          {
            time: "11:40 AM – 12:25 PM",
            title: "Session 2: Agents at Work: From Pilot to Production",
            description: "Agentic AI is the most consequential shift in enterprise technology since cloud. The question in 2026 is no longer what it can do, it is whether enterprises have the architecture, governance, and leadership conviction to let it run. This session brings together India's most senior AI and technology leaders from across industries for the most execution-focused conversation of the day. The conversation will explore: Moving agentic AI from pilots to production at enterprise scale  Building production-grade agents through orchestration, memory and human-in-the-loop design  Defining ownership and governance for agentic AI across the enterprise  Scaling real-world use cases across quality, customer service, procurement, fraud and supply chains  Measuring agentic AI ROI through cycle time, error reduction and workforce leverage  Building leadership conviction, cross-functional alignment and workforce readiness for autonomous AI "
          },
          {
            time: "12:25 PM – 12:55 PM ",
            title: "Session 3: Fireside Chat The CEO x CIO Dialogue: When the Machine Takes the Wheel",
            description: "The most honest conversation of the day. A CEO and a CIO, unscripted, sitting across from each other, on what building an autonomous enterprise actually feels like from the inside. The governance moments that tested everything. The board conversations that changed the mandate. The architectural bets that defined where the enterprise stands today. How the CEO-CIO relationship permanently changes when AI systems make decisions that used to require a committee Governing AI that moves faster than your audit cycle, and what happens when it does not The uncomfortable moment most enterprises discover they are not as AI-ready as they thought The one structural decision each leader would reverse, knowing everything they now know "
          },
          {
            time: "12:55 PM – 01:40 PM ",
            title: "Session 4: Data as Destiny: Building the Foundation Autonomous AI Runs On",
            description: "The most sophisticated AI model cannot outperform the data that feeds it. This panel brings together India's most senior data and AI leaders from across the country's most data-intensive sectors for a session on what it actually takes to build data infrastructure that can carry the weight of autonomous AI. Lakehouse architecture, federated platforms and unified data fabrics replacing legacy warehouses The India Stack advantage: DPI, Account Aggregator and ONDC reshaping enterprise data access Turning data governance into a competitive advantage for faster, more confident AI deployment Strengthening observability, lineage and explainability for boards, regulators and risk teams Building AI-ready data infrastructure across manufacturing, pharma and supply chains Making data ownership a shared, cross-functional responsibility for autonomous AI "
          },
          {
            time: "01:40 PM – 02:20 PM",
            title: "Networking Lunch ",
            description: "Open networking. Sponsor exhibition and engagement zone active."
          },
          {
            time: "02:20 PM – 03:35 PM",
            title: "Track 1: AI Security Security • Governance • Trust The Trust Layer: Securing, Governing, and Scaling AI Enterprises Can Actually Rely On",
            description: "The dedicated AI security, governance, and trust track, where the enterprises deploying AI at scale are being forced to confront a hard truth: innovation without trust does not survive contact with the boardroom, the regulator, or the customer. This track brings together India's most senior CISOs, Heads of AI Governance, Chief Risk Officers, and security architects for a practitioner-level deep dive on what it takes to make enterprise AI safe, defensible, and durable in 2026. Treating agent access as the new privileged access Building AI inventories across models, datasets, APIs, agents and vector databases Moving from responsible AI principles to enforceable runtime guardrails and continuous testing Managing parallel AI compliance requirements across regulators and sectors Aligning the board on acceptable AI risk and making security a business enabler Building trust infrastructure through audit trails, access governance and zero-trust agents "
            
          },
          {
            time: "02:20 PM  – 03:35 PM",
            title: "Track 2: Autonomous Industry Manufacturing • Robotics • Industrial AI The Autonomous Factory: Where Agentic AI, Robotics, and Industrial Intelligence Are Rewriting How India Makes Things",
            description: "The dedicated autonomous industry track, and the most operationally grounded conversation of the day. India’s manufacturing sector is undergoing its most consequential transformation in a generation, moving from cost-led production to intelligence-led manufacturing. Agentic AI, advanced robotics, digital twins, and industrial IoT are converging to create factories where machines can plan, coordinate, and execute autonomously. This track brings together senior technology, AI, engineering, and operations leaders from enterprise manufacturing industry sectors , and industrial automation. From automation to autonomy: intelligent production systems that adapt with less retooling  Physical AI on the factory floor: cloud robotics, software-defined automation and intelligent systems  Predictive maintenance and quality inspection: scaling proven AI use cases beyond pilots  Digital twins as live operational intelligence: optimising energy, output and quality in real time  AI-driven supply chain orchestration: autonomous forecasting, procurement and logistics  PLI-scheme readiness: using AI-driven process control to strengthen manufacturing competitiveness  The workforce shift: managing the human impact as AI takes on repetitive decisions "
          },
          {
            time: "02:20 PM – 03:35 PM",
            title: "Track 3: Enterprise AI in Action Agents • Automation • Enterprise Applications Agents in Production: How Enterprise AI Is Rewiring Work, Not Just Augmenting It",
            description: "The dedicated enterprise AI in action track, where the theoretical becomes the operational. 79% of enterprises say AI agents are already being adopted; 66% report measurable productivity gains. Yet 88% of agent pilots never reach production. This track brings together the enterprise technology, AI, and business leaders who have crossed that gap, deploying agents that are actually shipping work across customer service, finance, procurement, engineering, and internal operations. Practical, in-production, with real ROI data. Proven ROI zones: customer service, finance, document processing, engineering and internal operations  Multi-agent orchestration: architecture, memory and hand-offs for production-scale deployments  The observability mandate: tracing, cost, quality and human feedback across agent workflows  From workflows to agent-native design: redesigning processes around agent capabilities  Measuring agentic AI ROI: cycle time, error reduction and workforce leverage  Choosing enterprise agent platforms: application-layer and infrastructure-layer approaches  Governance before scale: agent registries, least-privilege access and human-in-the-loop controls "
          },
          {
            time: "03:35 PM – 03:50 PM",
            title: "Transition Break",
            description: "Delegates reconvene in main ballroom for afternoon plenary sessions."
          },
          {
            time: "03:50 PM– 04:00 PM ",
            title: "Partner Keynote Address",
            description: ""
          },
          {
            time: "04:00 PM – 04:45 PM",
            title: "Session 5: Securing the Autonomous Enterprise: When AI Becomes the Attack Surface ",
            description: "As AI agents move from assistants to autonomous actors across enterprise workflows, the attack surface expands in ways traditional security architecture was not built to handle. Simultaneously, AI-native security is becoming the only viable defence against AI-powered adversaries. India's most senior CISOs across sectors. Live AI threats: model poisoning, prompt injection, adversarial inputs, shadow AI and LLM-driven data exfiltration  Securing the connected factory: protecting OT/IT convergence as AI expands the industrial attack surface  AI-native threat detection: autonomous incident response at the speed of AI-powered attacks, with human oversight  Zero-trust for AI agents: model access governance and AI-specific audit trails  Preparing for AI compliance: how CISOs are shaping security and compliance investments for the AI era "
          },
          {
            time: "04:45 PM – 05:30 PM ",
            title: "Session 6: Cross-Industry Power Conversation From Assistance to Autonomy: What India's Enterprise AI Leaders Are Building Next ",
            description: "The closing session of the 8th Edition, and the most forward-looking. Leaders from the major enterprise industry sectors in one room for a candid conversation that converges the day's insights into a declaration. The frontier of enterprise AI in India: sectors and organisations pushing the boundaries  AI ambition vs. architecture: what the gap looks like inside enterprises today  Decisions with hindsight: the one structural AI decision leaders would make differently  Leadership responsibility: shaping how India’s enterprises deploy, govern and trust AI "
          },
          {
            time: "05:30 PM – 05:45 PM ",
            title: "Closing Address & Vote of Thanks",
            description: "Closing address by The Guild and Guild Live. Acknowledgement of partners, speakers, and delegates. Lucky Draw prize reveal."
          },
          {
            time: "05:45 PM onwards ",
            title: "Hi-Tea & Networking",
            description: "Open networking. Delegates collect attendee gift on submission of feedback form."
          },
          {
            time: "Evening — By Invitation Only",
            title: "AI Leadership Exchange | Gala Dinner",
            description: "An exclusive CXO sundowner for a select group of technology leaders. Cocktails, keynote, fireside conversation, and a chef-curated dining experience. Brought to you by The Guild & Guild Live"
          },

            
            
            
            
            
            
            
            
            
            
            
            
          
        ]
      },
      // {
      //   id: "Detailed-Agenda-2",
      //   label: "Detailed Agenda 2",
      //   items: [
      //     {
      //       time: "Time",
      //       title: "Soon",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   id: "day2",
  //   label: "Day 2",
  //   tracks: [
  //     {
  //       id: "day2-track",
  //       label: "Main Stage",
  //       items: [
  //         {
  //           time: "10:00 AM - 10:15 AM",
  //           title: "Day 2 Welcome",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// ---------- Component ----------
const AgendaSection = () => {
  const [activeDayId, setActiveDayId] = useState(AGENDA_DATA[0].id);
  const activeDay = AGENDA_DATA.find((d) => d.id === activeDayId) ?? AGENDA_DATA[0];

  const [activeTrackId, setActiveTrackId] = useState(activeDay.tracks[0].id);
  const activeTrack =
    activeDay.tracks.find((t) => t.id === activeTrackId) ?? activeDay.tracks[0];
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const handleDayChange = (dayId: string) => {
    setActiveDayId(dayId);
    const newDay = AGENDA_DATA.find((d) => d.id === dayId);
    if (newDay) setActiveTrackId(newDay.tracks[0].id);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-[1080px] mx-auto">
        {/* Heading */}
        <h2 className="mt-10 text-center text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
          <span className="agendatitle">Agenda</span>
        </h2>

        {/* Day tabs */}
        {/* <div className="mt-10 flex justify-center gap-10">
          {AGENDA_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => handleDayChange(day.id)}
              className={`pb-2 text-lg font-semibold transition-colors border-b-2 ${
                activeDayId === day.id
                  ? "text-fuchsia-500 border-fuchsia-500"
                  : "text-white/30 border-transparent hover:text-white/50"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div> */}

        {/* Track pills */}
        <div className="mt-10 flex justify-center">
          <div className="flex max-w-full overflow-x-auto rounded-full bg-white/10 p-1">
            {activeDay.tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold transition-colors sm:px-6 ${
                  activeTrackId === track.id
                    ? "bg-color text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          {getAgendaGroups(activeTrack.items).map((group, idx) => (
            <div
              key={idx}
              className="grid min-w-0 grid-cols-[78px_minmax(0,1fr)] gap-x-3 border-t border-white/15 py-8 first:border-t-0 sm:gap-x-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-10"
            >
              {/* Time column */}
              <div className="w-[78px] pt-1 text-sm font-semibold text-white sm:w-[110px] md:w-[190px] md:text-base">
                {group.time}
              </div>

              {/* Content column */}
              <div
                className={`min-w-0 border-l-2 border-fuchsia-600 pl-3 sm:pl-5 md:pl-8 ${
                  group.items.length > 1
                    ? "grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
                    : ""
                }`}
              >
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`min-w-0 ${
                      item.isTrack
                        ? "rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4"
                        : ""
                    }`}
                  >
                    <h3 className="break-words text-base font-bold text-white md:text-lg">
                      {item.title}
                    </h3>

                    {item.description && (
                      (() => {
                        const descriptionParts = getDescriptionParts(item.description);
                        const itemKey = `${idx}-${itemIdx}`;
                        const isExpanded = Boolean(expandedItems[itemKey]);

                        return (
                          <div className="mt-2 max-w-3xl break-words text-sm leading-relaxed text-white/65">
                            {descriptionParts.summary && <p>{descriptionParts.summary}</p>}

                            {descriptionParts.details.length > 0 && (
                              <>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedItems((current) => ({
                                      ...current,
                                      [itemKey]: !current[itemKey],
                                    }))
                                  }
                                  className="mt-3 font-semibold text-fuchsia-300 transition-colors hover:text-fuchsia-200"
                                  aria-expanded={isExpanded}
                                >
                                  {isExpanded ? "Read Less" : "Read More"}
                                </button>

                                {isExpanded && (
                                  <div className="mt-3 space-y-4">
                                    {descriptionParts.details.map((block, blockIdx) =>
                                      block.type === "paragraph" ? (
                                        <p key={blockIdx}>{block.text}</p>
                                      ) : (
                                        <ul key={blockIdx} className="list-disc space-y-2 pl-5">
                                          {block.items.map((itemText, detailIdx) => (
                                            <li key={detailIdx}>{itemText}</li>
                                          ))}
                                        </ul>
                                      ),
                                    )}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        );
                      })()
                    )}

                    {item.speakers && item.speakers.length > 0 && (
                      <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                        {item.speakers.map((speaker, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-3">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-12 h-12 rounded-md object-cover flex-shrink-0 bg-white/10"
                            />
                            <div className="text-sm">
                              <p className="text-white font-semibold">{speaker.name}</p>
                              {(speaker.roleLines ?? [speaker.role]).map((line, lIdx) => (
                                <p key={lIdx} className="text-white/60 leading-tight">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;