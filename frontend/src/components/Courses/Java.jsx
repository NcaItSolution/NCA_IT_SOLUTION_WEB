import React from 'react';

const Java = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the Java Full Stack course. Please share the details!");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4">
      <div className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        <img
          src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
          alt="Java Logo"
          className="w-full h-64 object-contain bg-gray-800 p-6"
        />
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Java Full Stack Developer Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 4–5 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹20,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>
          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">1. Introduction to Full Stack</h4>
              <ul className="list-disc list-inside">
                <li>Overview of Full Stack Development</li>
                <li>Java ecosystem and tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">2. Core Java</h4>
              <ul className="list-disc list-inside">
                <li>OOP, Data Types, Collections</li>
                <li>Exception Handling, Multithreading</li>
                <li>JDBC and File I/O</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">3. Advanced Java</h4>
              <ul className="list-disc list-inside">
                <li>Servlets, JSP, JSTL</li>
                <li>Sessions, Cookies</li>
                <li>MVC and JDBC Integration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">4. Spring Framework</h4>
              <ul className="list-disc list-inside">
                <li>Spring Core, Spring MVC</li>
                <li>Spring Boot, REST APIs</li>
                <li>Spring Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">5. Frontend Development</h4>
              <ul className="list-disc list-inside">
                <li>HTML, CSS, JavaScript</li>
                <li>React Basics & Hooks</li>
                <li>Axios & Tailwind</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">6. Database</h4>
              <ul className="list-disc list-inside">
                <li>MySQL/PostgreSQL</li>
                <li>Hibernate ORM</li>
                <li>Database Design & Queries</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">7. Tools & Deployment</h4>
              <ul className="list-disc list-inside">
                <li>Git & GitHub</li>
                <li>Maven, Jenkins</li>
                <li>Deployment on Heroku/AWS</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">8. Final Project</h4>
              <ul className="list-disc list-inside">
                <li>Build a complete Java Full Stack App</li>
                <li>Frontend + Backend + DB Integration</li>
              </ul>
            </div>
          </div>

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

export default Java;
