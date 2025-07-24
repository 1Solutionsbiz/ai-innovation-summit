import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import VideoCard from './VideoCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface VideoSectionProps {
  city: string;
  imageName: string;
  videoLinks: string[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ city, imageName, videoLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div
      className={`mb-12 text-center z-10 transition-all duration-300 pb-40 pt-120 ${
        isScrolled ? 'bg-black bg-opacity-100' : ''
      }`}
      style={{ top: '25px' }} // No need for 100vh, let it adjust based on content
    >
      <h2 className="text-4xl font-bold py-10 text-white font-orbitron">
        Watch On Demand Session - {city}
      </h2>

      <div className="px-6 sm:px-12 max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {videoLinks.map((link, index) => (
            <div key={index} className="p-2">
              <div className="h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-center">
                <VideoCard
                  videoUrl={link}
                  imageSrc={`/edition/${index + 1}-${imageName}.png`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Ensure the button is always visible and centered */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="btn-gradient px-9 py-3 text-white rounded-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
