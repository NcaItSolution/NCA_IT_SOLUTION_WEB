import React from 'react';

const WEBGPU_IMAGE =
  'https://www.tenupsoft.com/images/blogs/Blog_Cloud%20Native.webp';

const CloudNativeBlog = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Promise of Cloud Native: A New Era in Cloud Native</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In today’s digital era, businesses need to build applications that are scalable, resilient, and fast to deploy. That’s where Cloud Native comes in — a modern approach to software development that leverages the full power of the cloud.
              Cloud Native is a way of designing, building, and running applications to take full advantage of cloud computing environments. It’s not about simply deploying code to the cloud — it's about building apps that are born in the cloud and thrive in its dynamic ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudNativeBlog;
