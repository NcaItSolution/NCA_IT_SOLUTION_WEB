import React from 'react'

const NodeD = () => {
    const whatsappNumber = '918287584509';
    const sampleMessage = encodeURIComponent("Hi, I'm interested in the Node JS Development course. Please share the details!");
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
    <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
      {/* Image Banner */}
      <img
        src="https://nodejs.org/static/images/logo.svg"
        alt="Node JS Development"
        className="w-full h-64 object-contain bg-gray-800 p-6"
      />

      {/* Content */}
      <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Node JS Development Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 2 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹8,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            {/* Add your syllabus content here — reused or updated per your structure */}
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Node.js</h4>
              <ul className="list-disc list-inside">
                <li>Environment Setup & NPM</li>
                <li>Event Loop & Modules</li>
                <li>Asynchronous Programming</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Express.js Framework</h4>
              <ul className="list-disc list-inside">
                <li>Routing, Middleware</li>
                <li>Template Engines</li>
                <li>REST API Development</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Database Integration</h4>
              <ul className="list-disc list-inside">
                <li>MongoDB CRUD</li>
                <li>Mongoose ODM</li>
                <li>MySQL/PostgreSQL (optional)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Authentication & Security</h4>
              <ul className="list-disc list-inside">
                <li>JWT & Passport.js</li>
                <li>Role-based Access</li>
                <li>Input Validation & Rate Limiting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Real-Time Communication</h4>
              <ul className="list-disc list-inside">
                <li>WebSockets with Socket.IO</li>
                <li>Chat App Integration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Deployment</h4>
              <ul className="list-disc list-inside">
                <li>Using PM2, Nginx</li>
                <li>Deployment to Heroku, Vercel or VPS</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Final Project</h4>
              <ul className="list-disc list-inside">
                <li>Build a Full-Stack Node.js App</li>
                <li>Deployment + Hosting</li>
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
  )
}

export default NodeD