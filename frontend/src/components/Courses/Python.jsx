import React from 'react';

const Python = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the Python programming course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          alt="Python Programming"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Python Programming Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 2 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹6,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Python Basics</h4>
              <ul className="list-disc list-inside">
                <li>Variables, Data Types, Operators</li>
                <li>Input/Output, Type Casting</li>
                <li>Conditional Statements & Loops</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Functions & Modules</h4>
              <ul className="list-disc list-inside">
                <li>Defining & Calling Functions</li>
                <li>Arguments, Return Values</li>
                <li>Lambda, Modules, Packages</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Data Structures</h4>
              <ul className="list-disc list-inside">
                <li>Lists, Tuples, Dictionaries, Sets</li>
                <li>Comprehensions</li>
                <li>String Manipulation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Object-Oriented Programming</h4>
              <ul className="list-disc list-inside">
                <li>Classes & Objects</li>
                <li>Inheritance & Polymorphism</li>
                <li>Encapsulation & Abstraction</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. File Handling & Exceptions</h4>
              <ul className="list-disc list-inside">
                <li>Reading/Writing Files</li>
                <li>Handling Exceptions</li>
                <li>Custom Exceptions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Libraries & Modules</h4>
              <ul className="list-disc list-inside">
                <li>math, datetime, os, sys</li>
                <li>Regular Expressions</li>
                <li>External Packages with pip</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Working with Databases</h4>
              <ul className="list-disc list-inside">
                <li>SQLite & MySQL Connectivity</li>
                <li>CRUD Operations with Python</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. GUI Development (Tkinter)</h4>
              <ul className="list-disc list-inside">
                <li>Creating Windows & Widgets</li>
                <li>Event Handling</li>
                <li>Simple GUI Projects</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Introduction to Web Development</h4>
              <ul className="list-disc list-inside">
                <li>Flask Framework Basics</li>
                <li>Routing, Forms, Templates</li>
                <li>Simple Web App</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Real-World Projects</h4>
              <ul className="list-disc list-inside">
                <li>Console-based & GUI Applications</li>
                <li>Database & Web Projects</li>
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

export default Python;
