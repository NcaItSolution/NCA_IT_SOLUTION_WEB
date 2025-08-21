import React from "react";

import { Link } from 'react-router-dom';
const webDevImg =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80";

const WebD = () => (
  <div className="bg-white min-h-screen py-10 px-3 flex flex-col items-center mt-36">
    {/* Card 1: Image + Description */}
    <div
      className={`
        group
        bg-gradient-to-br from-white to-gray-100
        rounded-3xl shadow-2xl overflow-hidden
        flex flex-col md:flex-row
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[480px]
        mb-12 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200/30
      `}
    >
      {/* Image Side */}
      <div className="md:w-1/2 relative overflow-hidden flex-shrink-0 h-[180px] md:h-full">
        <img
          src={webDevImg}
          alt="Web Development"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
        />
  <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 via-transparent to-transparent" />
      </div>
      {/* Description */}
      <div className="md:w-1/2 p-6 lg:p-10 xl:p-14 flex flex-col justify-center h-full">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-blue-500">
          Elevate Your Digital Presence
        </h2>
  <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
          Modern, scalable, and visually stunning websites for your business. Our team merges creativity with code to deliver seamless digital experiences.
        </p>
  <ul className="text-blue-500 space-y-1 text-sm md:text-base list-disc ml-4">
          <li>Custom Responsive Design</li>
          <li>Performance & Accessibility</li>
          <li>Modern Tech Stack</li>
        </ul>
      </div>
    </div>
    {/* Card 2: Service Overview */}
    <div
      className={`
        bg-gradient-to-tr from-blue-100 via-white to-cyan-100
        rounded-3xl shadow-2xl
        p-8 lg:p-12 xl:p-16
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[420px]
        flex flex-col justify-center items-start
        transition-transform duration-300 hover:scale-105 hover:shadow-blue-200/30
      `}
    >
  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-500 mb-3">
        Web Development Services
      </h3>
  <p className="text-gray-700 mb-5 text-base md:text-lg lg:text-xl">
        Unlock your brand’s power online with tailored solutions from static sites to complex apps, SEO and performance, plus ongoing support.
      </p>
  <ul className="mb-6 flex flex-col gap-2 text-sm md:text-base text-gray-500">
        <li>✓ React, Tailwind, Next.js</li>
        <li>✓ Node.js, API Integration</li>
        <li>✓ E-Commerce, CMS</li>
      </ul>
      <Link to= '/contact'>
  <button className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-semibold shadow transition-all duration-200">
        Get Started
      </button>
      </Link>
    </div>
  </div>
);

export default WebD;
