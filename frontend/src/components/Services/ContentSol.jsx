import React from "react";

import { Link } from 'react-router-dom';
// CMS-related image — replace with your preferred image URL
const cmsImg =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

const ContentSol = () => (
  <div className="bg-white min-h-screen py-10 px-3 flex flex-col items-center mt-36">
    {/* Card 1: Image + Description */}
    <div
      className={`
        group
        bg-gradient-to-br from-white to-indigo-50
        rounded-3xl shadow-2xl overflow-hidden
        flex flex-col md:flex-row
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[480px]
        mb-12 transition-transform duration-300 hover:scale-105 hover:shadow-indigo-200/30
      `}
    >
      {/* Image Side */}
      <div className="md:w-1/2 relative overflow-hidden flex-shrink-0 h-[180px] md:h-full">
        <img
          src={cmsImg}
          alt="Content Management System"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
        />
  <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/60 via-transparent to-transparent" />
      </div>
      {/* Description */}
      <div className="md:w-1/2 p-6 lg:p-10 xl:p-14 flex flex-col justify-center h-full">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-indigo-500">
          Streamline Your Content Management
        </h2>
  <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
          Build flexible, efficient, and scalable CMS solutions that let you manage your digital content effortlessly, enabling an engaging user experience.
        </p>
  <ul className="text-indigo-500 space-y-1 text-sm md:text-base list-disc ml-4">
          <li>Custom CMS Design & Development</li>
          <li>Easy Content Editing & Publishing</li>
          <li>Integration with Third-Party Services</li>
        </ul>
      </div>
    </div>
    {/* Card 2: Service Overview */}
    <div
      className={`
        bg-gradient-to-tr from-indigo-100 via-white to-purple-100
        rounded-3xl shadow-2xl
        p-8 lg:p-12 xl:p-16
        w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl
        h-auto md:h-[320px] lg:h-[400px] xl:h-[420px]
        flex flex-col justify-center items-start
        transition-transform duration-300 hover:scale-105 hover:shadow-indigo-200/30
      `}
    >
  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-500 mb-3">
        Content Management System Services
      </h3>
  <p className="text-gray-700 mb-5 text-base md:text-lg lg:text-xl">
        Empower your team with powerful CMS platforms designed for usability, customization, and scalability, enabling seamless content workflows and digital growth.
      </p>
  <ul className="mb-6 flex flex-col gap-2 text-sm md:text-base text-gray-500">
        <li>✓ Headless & Traditional CMS Solutions</li>
        <li>✓ User-Friendly Admin Dashboards</li>
        <li>✓ API Integrations & Automation</li>
        <li>✓ Content Migration & Support</li>
      </ul>
      <Link to= '/contact'>
  <button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full font-semibold shadow transition-all duration-200">
        Get Started
      </button>
      </Link>
    </div>
  </div>
);

export default ContentSol;
