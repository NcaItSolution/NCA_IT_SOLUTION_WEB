import React from 'react';

const Mongo = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the MongoDB Development course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png"
          alt="MongoDB Course"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">MongoDB Development Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 2–3 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹10,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to MongoDB</h4>
              <ul className="list-disc list-inside">
                <li>What is NoSQL?</li>
                <li>MongoDB Architecture & Core Concepts</li>
                <li>Installation & MongoDB Atlas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Basic MongoDB Operations</h4>
              <ul className="list-disc list-inside">
                <li>CRUD Operations: insert, find, update, delete</li>
                <li>Filtering, Sorting, Projections</li>
                <li>Working with BSON/JSON Documents</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Data Modeling & Schema Design</h4>
              <ul className="list-disc list-inside">
                <li>Embedded vs Referenced Documents</li>
                <li>One-to-One, One-to-Many, Many-to-Many</li>
                <li>Best Practices & Anti-patterns</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Aggregation Framework</h4>
              <ul className="list-disc list-inside">
                <li>Understanding Pipelines</li>
                <li>Stages: $match, $group, $project, $sort</li>
                <li>Real-World Examples</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Indexing & Performance Tuning</h4>
              <ul className="list-disc list-inside">
                <li>Types of Indexes</li>
                <li>Explain Plans & Query Optimization</li>
                <li>Sharding & Replication Overview</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. MongoDB Security</h4>
              <ul className="list-disc list-inside">
                <li>Authentication & Authorization (RBAC)</li>
                <li>SSL/TLS, IP Whitelisting</li>
                <li>Data Backup & Recovery</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. MongoDB with Mongoose (Optional)</h4>
              <ul className="list-disc list-inside">
                <li>Mongoose Schema & Models</li>
                <li>Validation, Population, Middleware</li>
                <li>Integration with Node.js</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Real-World Project</h4>
              <ul className="list-disc list-inside">
                <li>Design & Build a MongoDB-backed API</li>
                <li>Deploy to Cloud (Render/Heroku/Atlas)</li>
                <li>Performance & Security Best Practices</li>
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

export default Mongo;
