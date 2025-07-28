import React from 'react';

const WEBGPU_IMAGE =
  'https://www.meetri.in/assets/img/our-blogs/qc.webp';

const QuantumBlog = () => {
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
            <h2 className="text-3xl font-bold text-white mb-4">The Promise of Quantum Computing Basics: A New Era in Quantum Computing Basics</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Quantum computing is no longer just science fiction. It’s a rapidly advancing field that promises to redefine how we solve complex problems — from cryptography and drug discovery to AI and financial modeling.

              But what exactly is quantum computing? How does it differ from classical computing? And why should you care?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumBlog;
