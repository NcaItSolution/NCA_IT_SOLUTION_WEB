import React from 'react';

const CSharp = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent(
    "Hi, I'm interested in the C# course. Please share the details!"
  );

  return (
  <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="data:image/png;base64,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"
          alt="C#"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
  <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-4">C# Course</h2>
          <p className="mb-2">
            <span className="font-semibold">Duration:</span> 2 Months
          </p>
          <p className="mb-4">
            <span className="font-semibold">Cost:</span> ₹6,000
          </p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to C# and .NET</h4>
              <ul className="list-disc list-inside">
                <li>Overview of C# Language and .NET Ecosystem</li>
                <li>Installing and Setting Up Development Environment (Visual Studio)</li>
                <li>Writing Your First C# Console Application</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Fundamentals of C# Programming</h4>
              <ul className="list-disc list-inside">
                <li>Data Types, Variables, and Constants</li>
                <li>Operators and Expressions</li>
                <li>Control Flow Statements (if, switch, loops)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Object-Oriented Programming in C#</h4>
              <ul className="list-disc list-inside">
                <li>Classes and Objects</li>
                <li>Encapsulation, Inheritance, and Polymorphism</li>
                <li>Interfaces and Abstract Classes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Exception Handling and Debugging</h4>
              <ul className="list-disc list-inside">
                <li>Try-Catch-Finally Blocks</li>
                <li>Throwing Exceptions</li>
                <li>Debugging Techniques in Visual Studio</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Collections and Generics</h4>
              <ul className="list-disc list-inside">
                <li>Arrays and Lists</li>
                <li>Dictionaries and Sets</li>
                <li>Generic Collections and Methods</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. LINQ and Lambda Expressions</h4>
              <ul className="list-disc list-inside">
                <li>Introduction to LINQ</li>
                <li>Query Syntax and Method Syntax</li>
                <li>Using Lambda Expressions with LINQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Asynchronous Programming</h4>
              <ul className="list-disc list-inside">
                <li>Async and Await Keywords</li>
                <li>Tasks and Parallel Programming</li>
                <li>Cancellation and Progress Reporting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Introduction to .NET Core and ASP.NET Core</h4>
              <ul className="list-disc list-inside">
                <li>.NET Core Architecture</li>
                <li>Building Web Applications with ASP.NET Core MVC</li>
                <li>Razor Pages Overview</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Dependency Injection and Middleware</h4>
              <ul className="list-disc list-inside">
                <li>Understanding DI in .NET Core</li>
                <li>Middleware Pipeline</li>
                <li>Creating Custom Middleware</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Entity Framework Core</h4>
              <ul className="list-disc list-inside">
                <li>Introduction to ORM and EF Core</li>
                <li>Code First Approach with Migrations</li>
                <li>CRUD Operations and Database Context</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Security and Authentication</h4>
              <ul className="list-disc list-inside">
                <li>Authentication and Authorization Basics</li>
                <li>JWT and Role-based Security</li>
                <li>Secure API Development</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">12. Final Project</h4>
              <ul className="list-disc list-inside">
                <li>Develop a Complete .NET Core Web Application</li>
                <li>Implement CRUD, Authentication, and API Integration</li>
                <li>Deployment and Optimization</li>
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

export default CSharp;
