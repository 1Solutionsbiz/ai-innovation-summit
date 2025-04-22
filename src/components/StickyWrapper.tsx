// src/components/StickyWrapper.tsx
import React from 'react';
import VideoSection from './VideoSection';

const StickyWrapper = () => {
  return (
    <div className="p-6 bg-dark">
      <VideoSection
        city="Mumbai"
        imageName="mumbai"
        videoLinks={[
          'https://www.youtube.com/watch?v=glzVZO7u7rY',
          'https://www.youtube.com/watch?v=udD6TSasVGE',
          'https://www.youtube.com/watch?v=PZ3mbxs4Mx4'
        ]}
      />

      <VideoSection
        city="Gurugram"
        imageName="gurugram"
        videoLinks={[
          'https://www.youtube.com/watch?v=nNL8q-FzTJY',
          'https://youtu.be/8xY2-fVdkMc',
          'https://www.youtube.com/watch?v=gz5LfjyRBM0'
        ]}
      />

      <VideoSection
        city="Bengaluru"
        imageName="bangaluru"
        videoLinks={[
          'https://www.youtube.com/watch?v=wBaEOg_21bM',
          'https://www.youtube.com/watch?v=UozBEohA7Qg',
          'https://www.youtube.com/watch?v=hY7Axj-B7jo'
        ]}
      />
    </div>
  );
};

export default StickyWrapper;
