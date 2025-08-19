import React from 'react';

const C = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent(
    "Hi, I'm interested in the Programming in C course. Please share the details!"
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full overflow-hidden border border-gray-200">
        {/* Image Banner */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"
          alt="Programming in C"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
        <div className="p-8 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Programming in C Course</h2>
          <p className="mb-2">
            <span className="font-semibold">Duration:</span> 2 Months
          </p>
          <p className="mb-6">
            <span className="font-semibold">Cost:</span> ₹5,000
          </p>

          <h3 className="text-xl font-semibold mb-5">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to C Programming</h4>
              <ul className="list-disc list-inside">
                <li>History and Features of C</li>
                <li>Setting up Development Environment</li>
                <li>Basic Structure of a C Program</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Data Types, Variables, and Operators</h4>
              <ul className="list-disc list-inside">
                <li>Basic Data Types and Constants</li>
                <li>Variables and Scope</li>
                <li>Operators and Expressions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Control Flow Statements</h4>
              <ul className="list-disc list-inside">
                <li>Conditional Statements (if, else, switch)</li>
                <li>Loops (for, while, do-while)</li>
                <li>Break and Continue</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Functions and Recursion</h4>
              <ul className="list-disc list-inside">
                <li>Defining and Calling Functions</li>
                <li>Function Parameters and Return Types</li>
                <li>Recursive Functions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Arrays and Strings</h4>
              <ul className="list-disc list-inside">
                <li>One-dimensional and Multi-dimensional Arrays</li>
                <li>String Handling and Manipulation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Pointers and Dynamic Memory</h4>
              <ul className="list-disc list-inside">
                <li>Understanding Pointers</li>
                <li>Pointer Arithmetic</li>
                <li>Dynamic Memory Allocation (malloc, calloc, free)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Structures and Unions</h4>
              <ul className="list-disc list-inside">
                <li>Defining and Using Structures</li>
                <li>Nesting Structures</li>
                <li>Unions and Enumerations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. File Input/Output</h4>
              <ul className="list-disc list-inside">
                <li>Reading from and Writing to Files</li>
                <li>File Pointers and Modes</li>
                <li>Error Handling in File Operations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Preprocessor Directives and Macros</h4>
              <ul className="list-disc list-inside">
                <li>Macros and #define</li>
                <li>Conditional Compilation</li>
                <li>Include Guards and File Inclusion</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Debugging and Best Practices</h4>
              <ul className="list-disc list-inside">
                <li>Common Errors and Debugging Techniques</li>
                <li>Code Optimization and Style Guidelines</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Project</h4>
              <ul className="list-disc list-inside">
                <li>Build a Complete C Application</li>
                <li>Apply Learned Concepts to Solve Real-World Problems</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${sampleMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default C;
