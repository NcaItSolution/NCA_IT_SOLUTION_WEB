import React from 'react';

const WEBGPU_IMAGE =
  'https://www.nilebits.com/wp-content/uploads/2024/02/Content-Security-Policy-Best-Practices-for-Web-Developers-1140x445.png';

const CSPBlog = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Promise of Secure Frontend with CSP: A New Era in Secure Frontend with CSP</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Web apps are more dynamic than ever — but with that comes growing exposure to security threats like Cross-Site Scripting (XSS) and data injection attacks. One of the most effective tools in your frontend security toolkit is Content Security Policy (CSP).
              Content Security Policy (CSP) is a browser security feature that helps prevent malicious content from being executed on your website. It acts as a gatekeeper, telling the browser which sources are allowed to load content such as scripts, styles, images, fonts, and more.

              Instead of relying solely on escaping input and sanitizing output, CSP adds a powerful defense-in-depth layer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSPBlog;
