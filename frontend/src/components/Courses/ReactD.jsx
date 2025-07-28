import React from 'react';

const ReactD = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the React Development course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Development"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">React Development Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 1.5 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹9,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to React</h4>
              <ul className="list-disc list-inside">
                <li>What is React & Why React?</li>
                <li>SPA vs MPA</li>
                <li>Environment Setup (Node.js, VSCode)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. JSX & Components</h4>
              <ul className="list-disc list-inside">
                <li>JSX Syntax & Expressions</li>
                <li>Functional vs Class Components</li>
                <li>Props, Children, and Composition</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. State Management</h4>
              <ul className="list-disc list-inside">
                <li>useState Hook</li>
                <li>Lifting State Up</li>
                <li>Conditional Rendering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. React Hooks</h4>
              <ul className="list-disc list-inside">
                <li>useEffect, useRef</li>
                <li>useContext, useReducer</li>
                <li>Custom Hooks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. React Router</h4>
              <ul className="list-disc list-inside">
                <li>Routing Basics (v6)</li>
                <li>Link, Navigate, useParams</li>
                <li>Nested Routes & Protected Routes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Forms & Validation</h4>
              <ul className="list-disc list-inside">
                <li>Controlled vs Uncontrolled Components</li>
                <li>Handling Inputs, Selects</li>
                <li>Form Libraries: Formik, React Hook Form</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. HTTP & APIs</h4>
              <ul className="list-disc list-inside">
                <li>Fetch API & Axios</li>
                <li>GET, POST, PUT, DELETE operations</li>
                <li>Error Handling & Loading States</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. State Management Libraries</h4>
              <ul className="list-disc list-inside">
                <li>Context API</li>
                <li>Redux Toolkit: Slice, Store, Actions</li>
                <li>DevTools & Middleware</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Styling in React</h4>
              <ul className="list-disc list-inside">
                <li>CSS Modules, Tailwind CSS</li>
                <li>Styled Components</li>
                <li>Responsive UI</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Deployment</h4>
              <ul className="list-disc list-inside">
                <li>Build Optimization</li>
                <li>Deployment on Netlify, Vercel</li>
                <li>Custom Domains & Environment Variables</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Real-World Project</h4>
              <ul className="list-disc list-inside">
                <li>Build a complete React Web App</li>
                <li>Integrate REST APIs</li>
                <li>Authentication & Hosting</li>
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

export default ReactD;
