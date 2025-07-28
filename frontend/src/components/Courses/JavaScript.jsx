import React from 'react';

const JavaScript = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the JavaScript Full Stack course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="JavaScript Full Stack"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">JavaScript Full Stack Developer Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 4–5 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹20,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Full Stack</h4>
              <ul className="list-disc list-inside">
                <li>Understanding Web Architecture</li>
                <li>Overview of JavaScript Ecosystem</li>
                <li>Setting Up Dev Environment (VS Code, Node.js)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. HTML, CSS & JavaScript</h4>
              <ul className="list-disc list-inside">
                <li>HTML5, CSS3, Flexbox, Grid</li>
                <li>Vanilla JavaScript, DOM, Events</li>
                <li>ES6+, Fetch API, JSON</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Frontend Framework – React</h4>
              <ul className="list-disc list-inside">
                <li>React Basics, Hooks, Router</li>
                <li>Axios, Forms, Component Lifecycle</li>
                <li>State Management (Context/Redux)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Backend Development – Node.js & Express</h4>
              <ul className="list-disc list-inside">
                <li>Node.js Core Modules, NPM</li>
                <li>Express Routing & Middleware</li>
                <li>Building RESTful APIs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Database – MongoDB</h4>
              <ul className="list-disc list-inside">
                <li>MongoDB Basics & Atlas</li>
                <li>Mongoose ORM, CRUD Operations</li>
                <li>Data Modeling & Indexing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Authentication & Security</h4>
              <ul className="list-disc list-inside">
                <li>JWT, OAuth, Cookies & Sessions</li>
                <li>Password Hashing, Role-Based Auth</li>
                <li>Helmet, CORS, Input Sanitization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. DevOps & Deployment</h4>
              <ul className="list-disc list-inside">
                <li>Git/GitHub, Git Workflow</li>
                <li>CI/CD, Deployment on Render/Vercel</li>
                <li>Environment Variables & Logs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Advanced Topics</h4>
              <ul className="list-disc list-inside">
                <li>WebSockets, Real-time with Socket.IO</li>
                <li>GraphQL Basics</li>
                <li>Unit Testing with Jest</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Final Project</h4>
              <ul className="list-disc list-inside">
                <li>Full Stack MERN Application</li>
                <li>Authentication, APIs, CRUD</li>
                <li>Frontend + Backend + DB Integration</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${sampleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
