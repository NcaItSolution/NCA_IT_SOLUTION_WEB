import React from "react";

import { Link } from 'react-router-dom';
// Android-related image (replace with your preferred image URL)
const androidDevImg =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80";

const Android = () => (
  <div className="bg-white min-h-screen py-10 px-3 flex flex-col items-center mt-36">
    {/* Card 1: Image + Description */}
    <div
      className={`
        group
        bg-white
        rounded-3xl shadow-2xl overflow-hidden
        flex flex-col md:flex-row
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[480px]
        mb-12 transition-transform duration-300 hover:scale-105 hover:shadow-green-200/30
      `}
    >
      {/* Image Side */}
      <div className="md:w-1/2 relative overflow-hidden flex-shrink-0 h-[180px] md:h-full">
        <img
          src={androidDevImg}
          alt="Android Development"
          className="object-cover w-full h-full transition duration-500"
        />
        {/* No dark overlay for light theme */}
      </div>
      {/* Description */}
      <div className="md:w-1/2 p-6 lg:p-10 xl:p-14 flex flex-col justify-center h-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-green-700">
          Build Impactful Android Apps
        </h2>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
          We create robust, intuitive, and performant Android applications tailored to your business needs, delivering seamless mobile experiences that engage users worldwide.
        </p>
        <ul className="text-green-700 space-y-1 text-sm md:text-base list-disc ml-4">
          <li>Native & Cross-Platform Solutions</li>
          <li>Optimized Performance & UI/UX</li>
          <li>Integration with Backend Services</li>
        </ul>
      </div>
    </div>
    {/* Card 2: Service Overview */}
    <div
      className={`
        bg-white
        rounded-3xl shadow-2xl
        p-8 lg:p-12 xl:p-16
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[420px]
        flex flex-col justify-center items-start
        transition-transform duration-300 hover:scale-105 hover:shadow-green-200/30
      `}
    >
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-700 mb-3">
        Android App Development Services
      </h3>
      <p className="text-gray-700 mb-5 text-base md:text-lg lg:text-xl">
        Transform your ideas into powerful Android applications featuring modern designs, scalable architectures, and seamless integrations for outstanding user experiences.
      </p>
      <ul className="mb-6 flex flex-col gap-2 text-sm md:text-base text-gray-600">
        <li>✓ Native Java & Kotlin Development</li>
        <li>✓ Flutter & React Native Cross-Platform</li>
        <li>✓ API Integration & Cloud Services</li>
        <li>✓ Google Play Store Submission & Support</li>
      </ul>
      <Link to= '/contact'>
      <button className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold shadow transition-all duration-200">
        Get Started
      </button>
      </Link>
    </div>
  </div>
);

export default Android;
