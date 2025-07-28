import React from 'react';

const Angular = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent(
    "Hi, I'm interested in the Angular Development course. Please share the details!"
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://angular.io/assets/images/logos/angular/angular.svg"
          alt="Angular Development"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />

        {/* Content */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Angular Development Course</h2>
          <p className="mb-2">
            <span className="font-semibold">Duration:</span> 2 Months
          </p>
          <p className="mb-4">
            <span className="font-semibold">Cost:</span> ₹8,000
          </p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Angular</h4>
              <ul className="list-disc list-inside">
                <li>What is Angular? SPA & MVC Architecture</li>
                <li>Angular CLI and Development Environment Setup</li>
                <li>TypeScript Basics for Angular</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Components and Templates</h4>
              <ul className="list-disc list-inside">
                <li>Component Architecture & Metadata</li>
                <li>Template Syntax, Data Binding</li>
                <li>Directives (Structural & Attribute)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Services and Dependency Injection</h4>
              <ul className="list-disc list-inside">
                <li>Creating and Providing Services</li>
                <li>Dependency Injection in Angular</li>
                <li>Singleton Services and Hierarchical Injectors</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Angular Routing and Navigation</h4>
              <ul className="list-disc list-inside">
                <li>Router Module & Router Outlet</li>
                <li>Route Guards and Lazy Loading</li>
                <li>Query Params and Route Parameters</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Forms in Angular</h4>
              <ul className="list-disc list-inside">
                <li>Template-driven Forms</li>
                <li>Reactive Forms and Form Validation</li>
                <li>Custom Validators</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. HTTP Client & Observables</h4>
              <ul className="list-disc list-inside">
                <li>HTTP Requests & REST API Integration</li>
                <li>RxJS Observables and Operators</li>
                <li>Error Handling & Interceptors</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. State Management with NgRx</h4>
              <ul className="list-disc list-inside">
                <li>Introduction to Redux Pattern</li>
                <li>Actions, Reducers, and Store</li>
                <li>Effects and Selectors</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Angular Material and Styling</h4>
              <ul className="list-disc list-inside">
                <li>Angular Material Components</li>
                <li>Theming and Custom Styles</li>
                <li>Responsive Design with Flex Layout</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">9. Testing Angular Applications</h4>
              <ul className="list-disc list-inside">
                <li>Unit Testing with Jasmine and Karma</li>
                <li>End-to-End Testing with Protractor</li>
                <li>Debugging Angular Apps</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">10. Deployment & Best Practices</h4>
              <ul className="list-disc list-inside">
                <li>Building for Production</li>
                <li>Performance Optimization</li>
                <li>Security Considerations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">11. Real-World Project</h4>
              <ul className="list-disc list-inside">
                <li>Develop a Complete Angular SPA</li>
                <li>Integrate API and State Management</li>
                <li>Deploy to a Cloud Platform</li>
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

export default Angular;
