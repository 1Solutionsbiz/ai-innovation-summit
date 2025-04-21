// src/components/VideoCard.tsx
import React, { useState } from 'react';
import VideoModal from './VideoModal';

interface VideoCardProps {
  imageSrc: string;
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ imageSrc, videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 w-full max-w-xs mx-auto"
        onClick={() => setIsOpen(true)}
      >
        <img src={imageSrc} alt="Thumbnail" className="w-full h-100 object-cover" />
      </div>

      {isOpen && (
        <VideoModal videoUrl={videoUrl} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default VideoCard;
