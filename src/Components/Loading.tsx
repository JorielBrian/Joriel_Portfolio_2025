// LoadingPage.tsx
import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl xl:text-8xl!!! font-semibold text-gray-400 mb-4">Loading Portfolio</h1>
      <div className="w-64 h-2 rounded-full overflow-hidden">
        <div 
          className="h-full w-1/2 bg-gradient-to-r from-blue-400 to-blue-800"
          style={{
            animation: 'slide 1.5s ease-in-out infinite',
          }}
        ></div>
      </div>
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}
      </style>
    </section>
  );
};

export default LoadingPage;