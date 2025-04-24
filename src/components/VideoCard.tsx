// VideoCard.tsx
import React from 'react';

interface VideoCardProps {
  videoUrl: string;
  imageSrc: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, imageSrc }) => {
  const handleClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full h-full border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
    >
      <img
        src={imageSrc}
        alt="Video Thumbnail"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoCard;
