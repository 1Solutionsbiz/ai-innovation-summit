import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import VideoSection from './VideoSection';

gsap.registerPlugin(ScrollTrigger);

const StickyWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      city: 'Mumbai',
      imageName: 'mumbai',
      videoLinks: [
        'https://www.youtube.com/watch?v=glzVZO7u7rY',
          'https://www.youtube.com/watch?v=udD6TSasVGE',
          'https://www.youtube.com/watch?v=PZ3mbxs4Mx4',
          'https://youtu.be/Ob8fN8ox0aQ?list=TLGGKAfd5aznV9AyMzA0MjAyNQ',
          'https://youtu.be/QDXYOeRKOa0?list=TLGGZudhCP6fE98yMzA0MjAyNQ',
          'https://youtu.be/RA3ujjieS5U?list=TLGGLWh9HrQ4t_cyMzA0MjAyNQ',
          'https://youtu.be/VmpLIrGSooo?list=TLGGIlODjU8dzfQyMzA0MjAyNQ',
          'https://youtu.be/2LMzP3kCzqQ?list=TLGGM4JUFuMnrOEyMzA0MjAyNQ',
          'https://youtu.be/5lJ0Y8xHfX8?list=TLGGG55aGMO-tewyMzA0MjAyNQ',
          'https://youtu.be/enCwuw4Az8g?list=TLGGLTlYnhS6D7cyMzA0MjAyNQ',
          'https://youtu.be/x6l9CRqgdoY?list=TLGGusPJqiJvaqMyMzA0MjAyNQ',
          'https://youtu.be/yru8hzRPU6k?list=TLGGXh6w5rapJssyMzA0MjAyNQ',
          'https://youtu.be/ekCyjZq0q7U?list=TLGGjqw6Kye3KkQyMzA0MjAyNQ',
          'https://youtu.be/f9FT0ffJujo?list=TLGGIkZHhJ5aZ9MyMzA0MjAyNQ',
          'https://youtu.be/kTa_Gn0rUqk?list=TLGGTdqBnjuXu0MyMzA0MjAyNQ',
          'https://youtu.be/VTQiS82jPwc?list=TLGGNN2ez95RcPUyMzA0MjAyNQ',
          'https://youtu.be/lVCjTm5sSKI?list=TLGGGUkzoIINyAQyMzA0MjAyNQ',

      ],
    },
    {
      city: 'Gurugram',
      imageName: 'gurugram',
      videoLinks: [
        'https://www.youtube.com/watch?v=nNL8q-FzTJY',
          'https://youtu.be/8xY2-fVdkMc',
          'https://www.youtube.com/watch?v=gz5LfjyRBM0',
          'https://www.youtube.com/watch?v=oWnCSnK35kU&list=TLGG2hVAM1ls04YyMzA0MjAyNQ'
      ],
    },
    {
      city: 'Bengaluru',
      imageName: 'bangaluru',
      videoLinks: [
       'https://www.youtube.com/watch?v=wBaEOg_21bM',
          'https://www.youtube.com/watch?v=UozBEohA7Qg',
          'https://www.youtube.com/watch?v=hY7Axj-B7jo',
          'https://www.youtube.com/watch?v=WVaRQYI-ROI',
          'https://www.youtube.com/watch?v=hQlpZrvsdZ4',
          'https://www.youtube.com/watch?v=3lvxHZ4TG0Y',
          'https://www.youtube.com/watch?v=twjvz-eNo-8',

      ],
    },
  ];

  useEffect(() => {
    const sections = gsap.utils.toArray('.video-card') as HTMLElement[];
  
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true, // Pinning still true
        // pinSpacing: false, // Pin spacing ko false karte hain taki bottom se pin ho
        scrub: 1,
        start: "top top", // Start will trigger when top of wrapper hits the top of viewport
        end: () => `+=${window.innerWidth * (sections.length - 1)}`, // End scroll after all sections scroll
      },
    });
  }, []);
  
  

  return (
    <div ref={wrapperRef} className="relative h-100 overflow-hidden bg-black pb-10">
      <div className="flex w-[300vw] h-100 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className="video-card w-screen  flex-shrink-0 bg-black  "
          >
            <VideoSection
              city={section.city}
              imageName={section.imageName}
              videoLinks={section.videoLinks}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyWrapper;
