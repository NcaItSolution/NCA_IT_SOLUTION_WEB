import React from 'react'

const Python = () => {
    const whatsappNumber = '918287584509';
    const sampleMessage = encodeURIComponent("Hi, I'm interested in the .NET Full Stack course. Please share the details!");
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
          alt=".NET Full Stack"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">.NET Full Stack Developer Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 4–5 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹20,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Full Stack Development</h4>
              <ul className="list-disc list-inside">
                <li>Understanding Full Stack Development</li>
                <li>Overview of .NET Full Stack Technologies</li>
                <li>Setting Up Development Environment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. C# and .NET Core Fundamentals</h4>
              <ul className="list-disc list-inside">
                <li>Data Types, Variables, Control Statements</li>
                <li>OOP: Classes, Inheritance, Polymorphism</li>
                <li>LINQ, File Handling, Async Programming</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. .NET Core & ASP.NET Core</h4>
              <ul className="list-disc list-inside">
                <li>ASP.NET Core MVC, Razor Pages</li>
                <li>Routing, Middleware, DI, Blazor Overview</li>
                <li>EF Core: Code-First, Migrations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. API Development with ASP.NET Core</h4>
              <ul className="list-disc list-inside">
                <li>RESTful APIs, Model Binding</li>
                <li>JWT, OAuth 2.0, Identity Server</li>
                <li>Swagger, Versioning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Frontend Development</h4>
              <ul className="list-disc list-inside">
                <li>HTML5, CSS3, Bootstrap, Tailwind</li>
                <li>JS, ES6, Promises</li>
                <li>Angular: Components, NgRx, Forms</li>
                <li>React: Hooks, Router, Axios</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Database Management – SQL Server</h4>
              <ul className="list-disc list-inside">
                <li>Design, CRUD, Stored Procs, Triggers</li>
                <li>Indexing, Transactions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Authentication & Security</h4>
              <ul className="list-disc list-inside">
                <li>Role-Based Auth, Identity Framework</li>
                <li>JWT, Encryption, API Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Cloud Computing & Deployment</h4>
              <ul className="list-disc list-inside">
                <li>Azure/AWS Deployment</li>
                <li>CI/CD, Docker, Kubernetes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Microservices Architecture</h4>
              <ul className="list-disc list-inside">
                <li>API Gateway, gRPC, RabbitMQ</li>
                <li>Service Discovery</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. DevOps & Version Control</h4>
              <ul className="list-disc list-inside">
                <li>Git/GitHub, CI/CD Setup</li>
                <li>Quality Checks & Automation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Testing & Debugging</h4>
              <ul className="list-disc list-inside">
                <li>Unit/Integration Testing (xUnit, NUnit)</li>
                <li>Logging (Serilog), Monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">12. Real-World Project</h4>
              <ul className="list-disc list-inside">
                <li>Full Stack Application</li>
                <li>Deployment, Optimization</li>
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

export default Python