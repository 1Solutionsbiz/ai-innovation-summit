// src/components/VideoSection.tsx
import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';

interface VideoSectionProps {
  city: string;
  imageName: string;
  videoLinks: string[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ city, imageName, videoLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to track scroll
  const handleScroll = () => {
    if (window.scrollY > 100) { // Adjust scroll threshold as per your requirement
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Adding scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`mb-12 text-center sticky z-10 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 bg-opacity-100' : ''
      }`}
      style={{ top: '30px' }}
    >
      <h2 className="text-4xl font-bold py-20 text-white">
        Watch On Demand Session - {city}
      </h2>
  
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
        {videoLinks.map((link, index) => (
          <VideoCard
            key={index}
            videoUrl={link}
            imageSrc={`/edition/${index + 1}-${imageName}.png`}
          />
        ))}
      </div>
  
      {/* View All Button */}
      <button className="btn-gradient px-9 py-3 text-white rounded-full mt-4">
        View All
      </button>
    </div>
  );
  
};

export default VideoSection;
