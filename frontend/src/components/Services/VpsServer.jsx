import React from "react";

import { Link } from 'react-router-dom';
// VPS Server related image — replace with your preferred image URL
const vpsServerImg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";

const VpsServer = () => (
  <div className="bg-black min-h-screen py-10 px-3 flex flex-col items-center">
    {/* Card 1: Image + Description */}
    <div
      className={`
        group
        bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
        rounded-3xl shadow-2xl overflow-hidden
        flex flex-col md:flex-row
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[480px]
        mb-12 transition-transform duration-300 hover:scale-105 hover:shadow-teal-800/30
      `}
    >
      {/* Image Side */}
      <div className="md:w-1/2 relative overflow-hidden flex-shrink-0 h-[180px] md:h-full">
        <img
          src={vpsServerImg}
          alt="VPS Server Solutions"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      {/* Description */}
      <div className="md:w-1/2 p-6 lg:p-10 xl:p-14 flex flex-col justify-center h-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 transition-colors group-hover:text-teal-400">
          Powerful VPS Server Solutions
        </h2>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-4">
          Experience reliable and scalable Virtual Private Server hosting with full root access, dedicated resources, and high-performance infrastructure customized for your business.
        </p>
        <ul className="text-teal-400 space-y-1 text-sm md:text-base list-disc ml-4">
          <li>Dedicated CPU & RAM Resources</li>
          <li>Full Root & SSH Access</li>
          <li>Flexible Configuration & Scalability</li>
          <li>Managed & Unmanaged VPS Options</li>
        </ul>
      </div>
    </div>
    {/* Card 2: Service Overview */}
    <div
      className={`
        bg-gradient-to-tr from-teal-900 via-zinc-900 to-purple-900
        rounded-3xl shadow-2xl
        p-8 lg:p-12 xl:p-16
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[420px]
        flex flex-col justify-center items-start
        transition-transform duration-300 hover:scale-105 hover:shadow-purple-800/30
      `}
    >
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-teal-400 mb-3">
        VPS Server Services
      </h3>
      <p className="text-gray-200 mb-5 text-base md:text-lg lg:text-xl">
        Get the perfect balance of power and control with our VPS hosting solutions, featuring customizable environments, high availability, and expert support.
      </p>
      <ul className="mb-6 flex flex-col gap-2 text-sm md:text-base text-gray-400">
        <li>✓ High Performance SSD Storage</li>
        <li>✓ 24/7 Monitoring & Support</li>
        <li>✓ Easy Scalability & Upgrades</li>
        <li>✓ DDoS Protection & Security</li>
      </ul>
      <Link to= '/contact'>
      <button className="px-8 py-3 bg-green-700 hover:bg-green-600 text-white rounded-full font-semibold shadow transition-all duration-200">
        Get Started
      </button>
      </Link>
    </div>
  </div>
);

export default VpsServer;
