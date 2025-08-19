import React from 'react';

const MERN = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the MERN Full Stack course. Please share the details!");

  return (
  <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://www.developerguru.in/images/courses/mern_stack.gif"
          alt="MERN Stack Architecture Diagram"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
  <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-4">MERN Full Stack Developer Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 4–5 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹20,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to MERN Stack</h4>
              <ul className="list-disc list-inside">
                <li>What is MERN? Why MERN?</li>
                <li>Project Setup: Node, MongoDB, React, Express</li>
                <li>Development Tools & Architecture</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. MongoDB (Database Layer)</h4>
              <ul className="list-disc list-inside">
                <li>NoSQL & Document-Based Databases</li>
                <li>CRUD, Aggregations, Indexing</li>
                <li>Mongoose ODM & Validation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Express.js (Backend Framework)</h4>
              <ul className="list-disc list-inside">
                <li>Routing, Middleware, REST APIs</li>
                <li>Express Validator, Multer (File Uploads)</li>
                <li>JWT, Authentication, API Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. React.js (Frontend Library)</h4>
              <ul className="list-disc list-inside">
                <li>JSX, Components, State & Props</li>
                <li>Hooks (useState, useEffect, etc.)</li>
                <li>Routing, Axios, Form Handling</li>
                <li>Context API & Redux (Basics)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Node.js (Runtime Environment)</h4>
              <ul className="list-disc list-inside">
                <li>Core Modules, Events, Buffers</li>
                <li>Creating Servers, Handling Requests</li>
                <li>Environment Variables, Dotenv</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Authentication & Authorization</h4>
              <ul className="list-disc list-inside">
                <li>Login/Signup Flow (Frontend & Backend)</li>
                <li>JWT Token Storage & Handling</li>
                <li>Role-Based Access Control</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Deployment & DevOps Basics</h4>
              <ul className="list-disc list-inside">
                <li>Deploy to Render / Vercel / Netlify</li>
                <li>Build Scripts, Environment Setup</li>
                <li>PM2, Nginx (Intro to Docker)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Real-World Capstone Project</h4>
              <ul className="list-disc list-inside">
                <li>End-to-End Full Stack App</li>
                <li>Authentication, CRUD, Deployment</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${sampleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="mt-6 block text-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MERN;
