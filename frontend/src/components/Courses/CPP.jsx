import React from 'react';

const CPP = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent(
    "Hi, I'm interested in the Programming in C++ course. Please share the details!"
  );

  return (
  <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          alt="Programming in C++"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
  <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Programming in C++ Course</h2>
          <p className="mb-2">
            <span className="font-semibold">Duration:</span> 2 Months
          </p>
          <p className="mb-4">
            <span className="font-semibold">Cost:</span> ₹5,000
          </p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to C++</h4>
              <ul className="list-disc list-inside">
                <li>History and Features of C++</li>
                <li>Setting Up the Development Environment</li>
                <li>Basic Syntax and Structure of a C++ Program</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Data Types, Variables, and Operators</h4>
              <ul className="list-disc list-inside">
                <li>Primitive Data Types and Constants</li>
                <li>Variables, Scope, and Storage Classes</li>
                <li>Operators and Expressions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Control Flow and Loops</h4>
              <ul className="list-disc list-inside">
                <li>Conditional Statements (if, else, switch)</li>
                <li>Loops (for, while, do-while)</li>
                <li>Break, Continue, and goto Statements</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Functions and Function Overloading</h4>
              <ul className="list-disc list-inside">
                <li>Function Declaration and Definition</li>
                <li>Pass-by-Value and Pass-by-Reference</li>
                <li>Function Overloading and Default Arguments</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Object-Oriented Programming Basics</h4>
              <ul className="list-disc list-inside">
                <li>Classes and Objects</li>
                <li>Constructors and Destructors</li>
                <li>Encapsulation and Access Specifiers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Inheritance and Polymorphism</h4>
              <ul className="list-disc list-inside">
                <li>Types of Inheritance</li>
                <li>Base and Derived Classes</li>
                <li>Virtual Functions and Runtime Polymorphism</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Operator Overloading and Templates</h4>
              <ul className="list-disc list-inside">
                <li>Overloading Operators</li>
                <li>Function and Class Templates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Exception Handling and File I/O</h4>
              <ul className="list-disc list-inside">
                <li>Try, Catch, and Throw Statements</li>
                <li>Standard Exception Classes</li>
                <li>File Streams: Reading and Writing Files</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. The Standard Template Library (STL)</h4>
              <ul className="list-disc list-inside">
                <li>Containers (vector, list, map)</li>
                <li>Iterators and Algorithms</li>
                <li>Function Objects and Lambdas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Advanced Concepts</h4>
              <ul className="list-disc list-inside">
                <li>Smart Pointers and Memory Management</li>
                <li>Move Semantics and Rvalue References</li>
                <li>Multithreading Basics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Debugging and Best Practices</h4>
              <ul className="list-disc list-inside">
                <li>Common Errors and Debugging Techniques</li>
                <li>Code Optimization and Style Guidelines</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">12. Final Project</h4>
              <ul className="list-disc list-inside">
                <li>Develop a Complete C++ Application</li>
                <li>Apply Object-Oriented Concepts and STL</li>
                <li>Testing and Deployment</li>
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

export default CPP;
