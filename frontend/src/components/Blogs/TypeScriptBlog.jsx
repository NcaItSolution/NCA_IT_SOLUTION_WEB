import React from 'react';

const WEBGPU_IMAGE =
  'https://miro.medium.com/v2/resize:fit:1400/0*AzTOcqSdgMK4XF12';

const TypeScriptBlog = () => {
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
            <h2 className="text-3xl font-bold text-white mb-4">The Promise of TypeScript in 2025: A New Era in TypeScript in 2025</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Since its release in 2012, TypeScript has grown from a niche superset of JavaScript into the de facto standard for large-scale web development. Fast forward to 2025, and TypeScript continues to dominate — powering everything from startups to enterprise-grade systems.

              Let’s explore the state of TypeScript in 2025, how it's evolved, and why it's more essential than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeScriptBlog;
