import React from "react";

import { Link } from 'react-router-dom';
// iOS app development related image — replace with your preferred URL
const iosDevImg =
  "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80";

const Ios = () => (
  <div className="bg-white min-h-screen py-10 px-3 flex flex-col items-center">
    {/* Card 1: Image + Description */}
    <div
      className={`
        group
        bg-gradient-to-br from-white to-red-50
        rounded-3xl shadow-2xl overflow-hidden
        flex flex-col md:flex-row
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[480px]
        mb-12 transition-transform duration-300 hover:scale-105 hover:shadow-red-200/30
      `}
    >
      {/* Image Side */}
      <div className="md:w-1/2 relative overflow-hidden flex-shrink-0 h-[180px] md:h-full">
        <img
          src={iosDevImg}
          alt="iOS Application Development"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
        />
  <div className="absolute inset-0 bg-gradient-to-t from-red-100/60 via-transparent to-transparent" />
      </div>
      {/* Description */}
      <div className="md:w-1/2 p-6 lg:p-10 xl:p-14 flex flex-col justify-center h-full">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-red-500">
          Expert iOS App Development
        </h2>
  <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
          Crafting high-quality, user-friendly iOS applications optimized for performance, design, and seamless integration within the Apple ecosystem.
        </p>
  <ul className="text-red-500 space-y-1 text-sm md:text-base list-disc ml-4">
          <li>Native Swift & Objective-C Development</li>
          <li>App Store Optimization & Deployment</li>
          <li>Custom UI/UX Design & Animation</li>
        </ul>
      </div>
    </div>
    {/* Card 2: Service Overview */}
    <div
      className={`
        bg-gradient-to-tr from-red-100 via-white to-blue-100
        rounded-3xl shadow-2xl
        p-8 lg:p-12 xl:p-16
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[420px]
        flex flex-col justify-center items-start
        transition-transform duration-300 hover:scale-105 hover:shadow-red-200/30
      `}
    >
  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-red-500 mb-3">
        iOS Application Development Services
      </h3>
  <p className="text-gray-700 mb-5 text-base md:text-lg lg:text-xl">
        Delivering scalable and innovative iOS applications tailored to your business goals with ongoing support and maintenance for optimal performance.
      </p>
  <ul className="mb-6 flex flex-col gap-2 text-sm md:text-base text-gray-500">
        <li>✓ Swift & Objective-C Expertise</li>
        <li>✓ Integration with Apple Services (HealthKit, ARKit, etc.)</li>
        <li>✓ App Store Submission & Compliance</li>
        <li>✓ UI/UX Design & Prototyping</li>
        <li>✓ Maintenance & Support</li>
      </ul>
      <Link to= '/contact'>
  <button className="px-8 py-3 bg-red-500 hover:bg-red-400 text-white rounded-full font-semibold shadow transition-all duration-200">
        Get Started
      </button>
      </Link>
    </div>
  </div>
);

export default Ios;
