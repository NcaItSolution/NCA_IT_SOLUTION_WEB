import React from 'react';

const WEBGPU_IMAGE =
  'https://web.dev/static/explore/webassembly/cover.png';

const JavaScriptBlog = () => {
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
            <h2 className="text-3xl font-bold text-white mb-4">The Promise of WebAssembly for JavaScript Devs: A New Era in WebAssembly for JavaScript Devs</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              As JavaScript developers, we’ve pushed the web to incredible limits — from SPAs and real-time apps to 3D games and machine learning in the browser. But when performance hits a wall, WebAssembly (Wasm) steps in.

              WebAssembly isn’t here to replace JavaScript — it’s here to supercharge it. Let’s dive into how JavaScript devs can embrace Wasm to unlock high-performance possibilities on the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptBlog;
