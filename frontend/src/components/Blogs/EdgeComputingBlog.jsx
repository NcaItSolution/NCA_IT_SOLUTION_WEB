import React from 'react';

const WEBGPU_IMAGE =
  'https://atpconnect.org/wp-content/uploads/2024/07/edge-computing-scaled-e1719842115793.jpeg';

const EdgeComputerBlog = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        <div
          className="group bg-gradient-to-br from-gray-800/90 to-gray-900/80 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden border border-gray-700 
          transform transition-all duration-300 hover:scale-105 hover:shadow-blue-600/30"
        >
          {/* Blog Image */}
          <div className="h-60 md:h-72 overflow-hidden">
            <img
              src={WEBGPU_IMAGE}
              alt="Visual representation of WebGPU, abstract futuristic graphics computing"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          {/* Blog Content */}
          <div className="p-7 md:p-10">
            <h2 className="text-3xl font-bold text-white mb-4">The Promise of The Rise of Edge Computing: A New Era in The Rise of Edge Computing</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              As data volumes explode and real-time responsiveness becomes non-negotiable, a new computing model has emerged to meet the demand: Edge Computing.

              Edge computing is redefining the way we process, store, and act on data — bringing computation closer to where it's generated. From smart factories to autonomous vehicles and immersive AR/VR experiences, edge computing is powering the future of fast, local intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeComputerBlog;
