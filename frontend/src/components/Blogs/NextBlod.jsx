import React from 'react';

const WEBGPU_IMAGE =
  'https://h8dxkfmaphn8o0p3.public.blob.vercel-storage.com/static/blog/next-14/twitter-card.png';

const NextBlog = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full">
        <div
          className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl overflow-hidden border border-blue-100 
          transform transition-all duration-300 hover:scale-105 hover:shadow-blue-200/30"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Promise of Next.js 14 Released: A New Era in Next.js 14 Released</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Next.js 14 release is here — and it’s packed with performance boosts, DX improvements, and production-grade features that reinforce its position as the go-to React framework for building modern web applications.

              From faster builds to more powerful routing and intelligent caching, Next.js 14 is focused on speed, scale, and simplicity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextBlog;
