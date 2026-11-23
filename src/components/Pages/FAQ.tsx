
import React, { useState } from "react";

const faqSections = [
  {
    title: "General Information",
    faqs: [
      {
        question: "What is the AI Innovation Summit?",
        answer:
          "AI Innovation Summit is a Business AI conference that brings together business leaders, technology experts and AI professionals to discuss emerging technologies, innovation and business transformation.",
      },
      {
        question: "What is the objective of the AI Innovation Summit?",
        answer:
          "The AI summit encourages knowledge-sharing, networking and discussions on how businesses can adopt and implement AI.",
      },
      {
        question: "Where is the AI Innovation Summit organised?",
        answer:
          "AI Innovation Summit is organised across selected cities in India as part of the growing ecosystem of AI events in India. Venue and location details are shared for each edition.",
      },
      {
        question: "Is AI Innovation Summit an annual event?",
        answer:
          "Yes, the AI Innovation Summit runs on an annual basis, with recurring editions and regional gatherings. It organises editions and industry gatherings at selected locations. Check out our website for announcements about upcoming editions and events.",
      },
      {
        question: "What topics are covered at AI Innovation Summit?",
        answer: (
          <>
            <p className="mb-3">
              The summit explores a range of enterprise and business-focused
              AI topics, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enterprise AI and AI transformation</li>
              <li>Generative AI and Large Language Models</li>
              <li>Agentic AI and intelligent automation</li>
              <li>AI infrastructure and cloud computing</li>
              <li>AI governance, security and responsible AI</li>
              <li>Data strategy and AI-ready infrastructure</li>
              <li>AI applications across industries</li>
              <li>Business innovation and AI-driven growth</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: "Attendees and Registration",
    faqs: [
      {
        question: "Who should attend the AI Innovation Summit?",
        answer:
          "The summit is ideal for CIOs, CTOs, CDOs, CISOs, AI professionals, business leaders, technology heads, entrepreneurs and decision-makers.",
      },
      {
        question: "How can I register for the AI Innovation Summit?",
        answer: (
          <>
            Registrations are accepted through the official website{" "}
            <a
              href="https://www.aiinnovationsummit.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-medium"
            >
              AI Innovation Summit
            </a>
            . Visit the official website, select the upcoming event and
            complete the AI conference registration process.
          </>
        ),
      },
      {
        question: "Is prior registration required to attend the AI summit?",
        answer:
          "Yes. Attendees are generally required to register in advance. Requirements may vary by edition.",
      },
      {
        question: "Is there a registration fee to attend the AI Innovation Summit?",
        answer:
          "Registration fees and participation options may vary. Check the respective event page for details.",
      },
      {
        question: "Can multiple employees from the same organisation attend?",
        answer:
          "Yes. Employees can register individually, subject to availability and event requirements.",
      },
      {
        question: "Will I receive a registration confirmation?",
        answer:
          "Yes. Registered attendees receive confirmation through their registered contact details.",
      },
    ],
  },
  {
    title: "Agenda, Speakers and Sessions",
    faqs: [
      {
        question: "What can I expect from the AI Innovation Summit agenda?",
        answer:
          "The agenda features keynote addresses, leadership panels and expert discussions on Enterprise AI, Agentic AI, AI adoption and business transformation. Key sessions cover scaling AI across enterprises, AI-driven automation, BFSI, manufacturing, customer experience, AI security and governance, and the future of autonomous enterprises.",
      },
      {
        question: "How can I view the event agenda?",
        answer: (
          <>
            You can explore the complete session schedule, topics, speakers
            and timings on the{" "}
            <a
              href="https://www.aiinnovationsummit.in/delhi-gurugram_edition-26-agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-medium"
            >
              AI Innovation Summit Delhi-Gurugram agenda page
            </a>
            .
          </>
        ),
      },
      {
        question: "Who speaks at the AI Innovation Summit?",
        answer:
          "The summit features CIOs, CTOs, CDOs, CISOs, Chief AI Officers, business leaders and technology experts from leading organisations. Speakers include senior executives and industry specialists from companies across BFSI, manufacturing, consulting, technology and other sectors.",
      },
      {
        question: "How can I become a speaker at AI Innovation Summit?",
        answer:
          "Industry leaders and AI professionals with relevant experience can contact the AI Innovation Summit team to express their interest in speaking. Speaker selection is subject to the event's requirements.",
      },
      {
        question: "Can I suggest a topic or speaker for the summit?",
        answer:
          "Yes. You can share relevant topic or speaker suggestions with the organising team through the email.",
      },
    ],
  },
  {
    title: "Networking and Business Opportunities",
    faqs: [
      {
        question: "Does AI Innovation Summit provide networking opportunities?",
        answer:
          "Yes. Attendees can connect with business leaders, technology experts and industry professionals through networking sessions and business meet ups.",
      },
      {
        question: "Can I connect with potential business partners and technology providers?",
        answer:
          "Yes. The AI Innovation Summit offers opportunities to meet potential partners, explore solutions and build professional connections.",
      },
      {
        question:
          "Is the AI Innovation Summit useful for business leaders exploring AI adoption?",
        answer:
          "Yes. It helps business leaders understand AI trends, explore solutions and learn about practical applications across industries.",
      },
      {
        question: "Is AI Innovation Summit a business-focused event?",
        answer: (
          <>
            Yes. It is an AI Business Conference focused on enterprise
            technology, business innovation, leadership and AI adoption. It
            also offers opportunities to connect through relevant Business
            Events or B2B Events.
          </>
        ),
      },
    ],
  },
  {
    title: "Sponsorship and Partnerships",
    faqs: [
      {
        question: "How can my organisation become a sponsor of the AI Innovation Summit?",
        answer:
          "Organisations interested in sponsoring the summit can contact the AI Innovation Summit team to explore AI conference sponsorship and available partnership opportunities. Sponsorship options and benefits may differ across editions.",
      },
      {
        question: "What are the benefits of sponsoring AI Innovation Summit?",
        answer:
          "Sponsorship offers opportunities to build brand visibility, showcase solutions and connect with business decision-makers.",
      },
      {
        question: "Which organisations can explore sponsorship opportunities?",
        answer:
          "Technology companies, AI solution providers, cloud and infrastructure companies, consulting firms, enterprise software providers and other organisations relevant to the AI ecosystem can explore sponsorship opportunities.",
      },
      {
        question: "Can a company showcase its AI products or solutions at the summit?",
        answer:
          "Yes. Companies can contact the AI Innovation Summit team to discuss product demonstrations and brand participation opportunities.",
      },
      {
        question: "How can organisations become event partners?",
        answer:
          "Organisations interested in strategic, media or knowledge partnerships can contact the AI Innovation Summit team with their proposals.",
      },
    ],
  },
  {
    title: "Media and General Enquiries",
    faqs: [
      {
        question: "How can media organisations collaborate with AI Innovation Summit?",
        answer:
          "Media organisations can contact our team to explore media coverage and collaboration opportunities.",
      },
      {
        question: "Where can I find updates about upcoming editions?",
        answer:
          "Visit our official website and social media pages for updates on upcoming summits and AI events in India.",
      },
      {
        question: "How can I contact the AI Innovation Summit team?",
        answer: (
          <>
            For registration assistance, speaking opportunities, sponsorship
            enquiries, partnerships or general information, please use the
            contact details provided on the official website{" "}
            <a
              href="mailto:guildconferences@guildlive.com"
              className="text-blue-700 hover:underline font-medium"
            >
              Contact Us
            </a>
            .
          </>
        ),
      },
      {
        question: "What should I do if my question is not answered here?",
        answer:
          "Reach out to the AI Innovation Summit team through the website for further assistance.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="zindex2 w-full bg-white py-36 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            FAQs About AI Innovation Summit
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-8 mb-4">
            Everything you need to know about attending, participating,
            speaking and partnering with the AI Innovation Summit.
          </p>

          <p className="text-gray-700 leading-8 mb-3">
            AI Innovation Summit brings together enterprise technology
            leaders, business decision-makers and AI professionals to explore
            the latest developments in artificial intelligence.
          </p>

          <p className="text-gray-700 leading-8">
            Whether you want to attend an AI conference, learn about
            Enterprise AI or explore business opportunities, find answers
            to your questions below.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-10">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">
                {section.title}
              </h2>

              <div className="space-y-3">
                {section.faqs.map((faq, faqIndex) => {
                  const id = `${sectionIndex}-${faqIndex}`;
                  const isOpen = activeFaq === id;

                  return (
                    <div
                      key={id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${id}`}
                        className="w-full flex items-center justify-between gap-4 text-left p-4 md:p-5 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800 text-base md:text-lg">
                          {faq.question}
                        </span>

                        <span
                          className={`flex-shrink-0 text-2xl text-gray-600 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-answer-${id}`}
                          className="px-4 md:px-5 pb-5 text-gray-600 leading-8 text-sm md:text-base"
                        >
                          {typeof faq.answer === "string" ? (
                            <p>{faq.answer}</p>
                          ) : (
                            faq.answer
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            Connect with our team to explore event agenda, participation,
            speaking, sponsorship and partnership opportunities.
          </p>

          <p className="text-gray-700 leading-8 mb-7">
            Explore the upcoming AI Innovation Summit edition and discover
            the conversations shaping the future of enterprise AI.
          </p>

          <a
            href="mailto:guildconferences@guildlive.com"
            className="inline-block bg-gray-900 text-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Contact Our Team
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
