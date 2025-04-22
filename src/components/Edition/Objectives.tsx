import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const objectives = [
  {
    title: 'Explore Synergies',
    content:
      'Unravel how the convergence of these two transformative technologies creates synergies that drive comprehensive digital transformations, redefine business strategies, and foster innovation.',
  },
  {
    title: 'Real-world Insights',
    content:
      'Attendees will gain tangible and actionable insights from organizations that have successfully implemented advanced technologies, providing a valuable resource for informed decision-making and strategy development.',
  },
  {
    title: 'Security in Focus',
    content:
      'The summit emphasizes the importance of a secure cloud infrastructure, exploring zero-trust models, continuous authentication, and adaptive access controls to mitigate evolving cyber threats.',
  },
  {
    title: 'Future of Work',
    content:
      'By exploring AI-driven collaboration, virtual workspaces, and remote productivity, the summit seeks to prepare attendees for the evolving nature of work environments and the integration of intelligent technologies.',
  },
  {
    title: 'Ethical AI and Responsible Practices',
    content:
      'With a focus on responsible AI, the summit aims to guide organizations in implementing ethical AI frameworks, mitigating bias, ensuring fairness, and fostering transparency in AI development and deployment.',
  },
  {
    title: 'Innovations in Cloud-Native AI',
    content:
      'The summit provides a platform for exploring containerization, Kubernetes orchestration, and micro-services architectures, enabling organizations to deploy scalable and efficient AI applications.',
  },
];

const Objective: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('.animate-fadeup');
      if (items) {
        items.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white px-6 py-12 space-y-12"
    >
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gradient text-center animate-fadeup font-orbitron leading-[1.6]">
        Navigating the Confluence: Cloud and AI in the Era of Digital Transformation and Intelligent Workspaces
      </h1>

      <p className="max-w-4xl mx-auto text-lg text-white text-center animate-fadeup">
        In the ever-evolving landscape of technology, the synergy between Cloud Computing and Artificial Intelligence stands as a transformative force reshaping industries, fostering innovation, and redefining the future of work. The Cloud & AI Innovation Summit is a convergence point for thought leaders, industry experts, and innovators to explore cutting-edge advancements, share insights, and chart the course for the future.
      </p>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#c084fc] text-center mb-8 animate-fadeup font-orbitron">
          Objectives
        </h2>

        <div className="space-y-6">
          {objectives.map((obj, index) => (
            <div key={index} className="animate-fadeup">
              <h3 className="text-xl font-semibold mb-1 font-orbitron text-gradient">{obj.title}</h3>
              <hr className='my-2' />
              <p className="text-white text-base leading-relaxed">{obj.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objective;
