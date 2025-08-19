import React from 'react';

const MEAN = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the MEAN Full Stack course. Please share the details!");

  return (
  <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/blogs/Blog-133/mean-stack-image1.png"
          alt="MEAN Stack"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
  <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-4">MEAN Full Stack Developer Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 4–5 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹20,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to MEAN Stack</h4>
              <ul className="list-disc list-inside">
                <li>Overview of Full Stack Development</li>
                <li>Understanding MEAN Architecture</li>
                <li>Setup: Node, MongoDB, Angular CLI</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. MongoDB (Database Layer)</h4>
              <ul className="list-disc list-inside">
                <li>NoSQL Concepts & Schema Design</li>
                <li>CRUD Operations</li>
                <li>Mongoose ODM</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Express.js (Backend Framework)</h4>
              <ul className="list-disc list-inside">
                <li>Routing, Middleware</li>
                <li>RESTful API Development</li>
                <li>Authentication using JWT</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Angular (Frontend Framework)</h4>
              <ul className="list-disc list-inside">
                <li>Components, Modules, Services</li>
                <li>Forms, Reactive Forms</li>
                <li>HTTP Client, Observables</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Node.js (Runtime Environment)</h4>
              <ul className="list-disc list-inside">
                <li>Core Modules & NPM</li>
                <li>File System, Events, Buffers</li>
                <li>Environment Config, Dotenv</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Authentication & Security</h4>
              <ul className="list-disc list-inside">
                <li>JWT, Bcrypt for Password Hashing</li>
                <li>Role-Based Access Control</li>
                <li>Helmet, CORS, Rate Limiting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Deployment & DevOps Basics</h4>
              <ul className="list-disc list-inside">
                <li>Deploying on Heroku / Render / Vercel</li>
                <li>Docker Basics & CI/CD Intro</li>
                <li>PM2 & Nginx Setup</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Real-World Project</h4>
              <ul className="list-disc list-inside">
                <li>Design & Build a Full Stack Web App</li>
                <li>Authentication, CRUD, Deployment</li>
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

export default MEAN;
