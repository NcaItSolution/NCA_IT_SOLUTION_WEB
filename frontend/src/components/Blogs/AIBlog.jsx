import React from 'react';

const WEBGPU_IMAGE =
  'https://guptadeepak.com/content/images/size/w1200/2024/07/The-Future-of-AI-and-Its-Impact-on-Humanity.webp';

const AIBlog = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Promise of AI: A New Era in AI</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Artificial Intelligence (AI) is no longer a futuristic concept — it’s the driving force behind a global technological revolution. From transforming healthcare to revolutionizing how we work, AI is redefining every industry it touches.
              Artificial Intelligence refers to the simulation of human intelligence in machines. These systems can perform tasks like learning, reasoning, problem-solving, understanding language, and even recognizing emotions — often with superhuman speed and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBlog;
