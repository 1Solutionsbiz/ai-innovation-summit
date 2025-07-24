import React from 'react';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const getYoutubeEmbedLink = (url: string) => {
  const match = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : '';
};

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  const embedUrl = getYoutubeEmbedLink(videoUrl);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if clicked outside the content (on the background)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
        onClick={handleBackgroundClick}
      />

      {/* Centered Modal */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-white rounded-lg shadow-lg w-[90%] max-w-3xl"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-red-600"
        >
          &times;
        </button>
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default VideoModal;
