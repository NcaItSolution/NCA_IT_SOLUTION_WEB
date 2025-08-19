import React from "react";

import { Link } from 'react-router-dom';
// Database design/development related image — replace with your preferred image URL
const databaseImg =
  "data:image/jpeg;base64,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";

const DataD = () => (
  <div className="bg-white min-h-screen py-10 px-3 flex flex-col items-center">
    {/* Card 1: Image + Description */}
    <div
      className={`
        group
        bg-gradient-to-br from-white to-blue-50
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
          src={databaseImg}
          alt="Database Design & Development"
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
        />
  <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 via-transparent to-transparent" />
      </div>
      {/* Description */}
      <div className="md:w-1/2 p-6 lg:p-10 xl:p-14 flex flex-col justify-center h-full">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-blue-500">
          Robust Database Design & Development
        </h2>
  <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
          Design and implement scalable, secure, and efficient databases that empower your applications with reliable data management and performance.
        </p>
  <ul className="text-blue-500 space-y-1 text-sm md:text-base list-disc ml-4">
          <li>Relational & NoSQL Database Solutions</li>
          <li>Schema Design & Optimization</li>
          <li>Backup, Recovery & Security Best Practices</li>
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
        Database Design & Development Services
      </h3>
  <p className="text-gray-700 mb-5 text-base md:text-lg lg:text-xl">
        From conceptual schema to deployment, we deliver robust database solutions tailored to your business needs, ensuring data integrity, performance, and security.
      </p>
  <ul className="mb-6 flex flex-col gap-2 text-sm md:text-base text-gray-500">
        <li>✓ SQL & NoSQL Database Architecture</li>
        <li>✓ Performance Tuning & Query Optimization</li>
        <li>✓ Data Migration & Integration</li>
        <li>✓ Backup, Disaster Recovery, & Security</li>
      </ul>
      <Link to= '/contact'>
  <button className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-semibold shadow transition-all duration-200">
        Get Started
      </button>
      </Link>
    </div>
  </div>
);

export default DataD;
