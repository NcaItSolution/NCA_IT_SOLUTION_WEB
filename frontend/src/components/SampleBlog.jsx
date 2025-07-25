import React from 'react';

const WEBGPU_IMAGE =
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';

const SampleBlog = () => {
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
            <h2 className="text-3xl font-bold text-white mb-4">The Promise of WebGPU: A New Era in Web Graphics</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              The advent of <span className="text-blue-400 font-semibold">WebGPU</span> is reshaping the landscape of web graphics and compute. By unlocking near-native hardware acceleration directly within the browser, WebGPU enables developers to leverage modern GPU features for complex 3D visualizations, real-time simulations, and advanced machine learning—in ways never before possible on the web. This promise means richer interactive experiences, blazing-fast rendering speeds, and the ability to build immersive applications without the limitations of legacy APIs like WebGL. As adoption grows, expect a revolution in browser-based creativity: interactive games, scientific apps, and design tools powered by unprecedented GPU muscle, all with the cross-platform reach that only the web can deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleBlog;
