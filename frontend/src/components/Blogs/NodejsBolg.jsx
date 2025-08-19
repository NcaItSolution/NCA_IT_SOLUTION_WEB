import React from 'react';

const WEBGPU_IMAGE =
  'https://alxolr-images-bk328.s3.eu-central-1.amazonaws.com/how-to-process-a-csv-file-five-times-faster-in-node-js-with-rust-and-napi-rs.png';

const NodejsBlog = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Promise of Rust for Node.js Developers: A New Era in Rust for Node.js Developers</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              As a Node.js developer, you’ve likely hit the limits of JavaScript when it comes to performance, memory efficiency, or system-level access. That’s where Rust shines.

              Rust is a systems programming language that’s fast, memory-safe, and increasingly loved by the web and backend community — and it pairs beautifully with Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodejsBlog;
