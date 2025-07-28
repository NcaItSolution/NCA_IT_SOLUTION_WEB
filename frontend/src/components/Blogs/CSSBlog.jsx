import React from 'react';

const WEBGPU_IMAGE =
  'https://external-preview.redd.it/state-of-css-preprocessors-and-postprocessors-in-2025-a-v0-J6xDtZFpMAi3sO2kfM5MvGWmAyhjoqM74Y-gp1U5OWY.png?auto=webp&s=99be88592e7df8b30898560f74b08c83be42320e';

const CSSBlog = () => {
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
            <h2 className="text-3xl font-bold text-white mb-4">The Promise of State of CSS 2025: A New Era in State of CSS 2025</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              The world of CSS has never been more powerful, expressive, and efficient than it is in 2025. What once started as a simple styling language has evolved into a robust design engine for modern web applications.

              Whether you’re a frontend pro or just entering the field, here’s everything you need to know about CSS in 2025 — the trends, tools, and features shaping the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSBlog;
