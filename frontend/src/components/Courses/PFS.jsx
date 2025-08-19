import React from 'react';

const PFS = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the Python Full Stack course. Please share the details!");

  return (
  <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          alt="Python Full Stack"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
  <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Python Full Stack Developer Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 6 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹28,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Full Stack & Python</h4>
              <ul className="list-disc list-inside">
                <li>Understanding Full Stack Development</li>
                <li>Setting up Development Environment</li>
                <li>Introduction to Python & its applications</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Core Python</h4>
              <ul className="list-disc list-inside">
                <li>Variables, Data Types, Operators</li>
                <li>Loops, Conditions, Functions</li>
                <li>OOP Concepts: Classes, Objects, Inheritance</li>
                <li>Exception Handling, File I/O</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Advanced Python</h4>
              <ul className="list-disc list-inside">
                <li>Decorators, Generators, Lambda</li>
                <li>Working with Modules & Packages</li>
                <li>Multithreading, Regular Expressions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Web Development with Django</h4>
              <ul className="list-disc list-inside">
                <li>Django Architecture</li>
                <li>Models, Views, Templates (MVT)</li>
                <li>URL Routing, Forms, Admin Panel</li>
                <li>Authentication & Middleware</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. REST API with Django REST Framework</h4>
              <ul className="list-disc list-inside">
                <li>Introduction to REST APIs</li>
                <li>Serializers, ViewSets, Routers</li>
                <li>Token-Based Authentication (JWT)</li>
                <li>Postman Testing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Frontend Development</h4>
              <ul className="list-disc list-inside">
                <li>HTML5, CSS3, Bootstrap</li>
                <li>JavaScript (ES6), DOM Manipulation</li>
                <li>React.js: Components, Props, Hooks</li>
                <li>State Management, React Router</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Database Integration</h4>
              <ul className="list-disc list-inside">
                <li>MySQL/PostgreSQL with Django ORM</li>
                <li>Creating Models & Relationships</li>
                <li>CRUD Operations, Query Optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Deployment & DevOps</h4>
              <ul className="list-disc list-inside">
                <li>Deploying on Heroku, AWS, PythonAnywhere</li>
                <li>Gunicorn, Nginx, Supervisor</li>
                <li>CI/CD Basics (GitHub Actions)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Security & Authentication</h4>
              <ul className="list-disc list-inside">
                <li>OAuth2, JWT, Role-Based Access</li>
                <li>Django Security Practices</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Real-World Project</h4>
              <ul className="list-disc list-inside">
                <li>Build a full-stack web app with Django & React</li>
                <li>Deployment, Performance Tuning</li>
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

export default PFS;
