import React from 'react';

const JFS = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl shadow-lg max-w-3xl w-full overflow-hidden">
        {/* Image section */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/226/226777.png" // Replace with your Java Full Stack image path
          alt="Java Full Stack"
          className="w-full h-60 object-cover"
        />

        {/* Syllabus Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-white mb-4">Java Full Stack Development</h2>

          <div className="space-y-2 text-sm text-gray-300 max-h-[400px] overflow-y-auto pr-2">
            <p>1. Introduction to Full Stack Development</p>
            <ul className="list-disc list-inside ml-4">
              <li>What is Full Stack Development?</li>
              <li>Overview of Java Full Stack Technologies</li>
              <li>Development Environment, Agile & SDLC</li>
            </ul>

            <p>2. Core Java Programming</p>
            <ul className="list-disc list-inside ml-4">
              <li>Data Types, Loops, OOP (Classes, Inheritance, etc.)</li>
              <li>Exception Handling, Collections, Java 8+, Multithreading</li>
            </ul>

            <p>3. Advanced Java & Java EE</p>
            <ul className="list-disc list-inside ml-4">
              <li>Servlets, JSP, JavaBeans, JDBC, Java Mail API</li>
            </ul>

            <p>4. Spring & Spring Boot</p>
            <ul className="list-disc list-inside ml-4">
              <li>Spring MVC, Thymeleaf, JPA, Hibernate</li>
              <li>JWT Auth, Microservices, Eureka, Feign</li>
            </ul>

            <p>5. REST APIs & Web Services</p>
            <ul className="list-disc list-inside ml-4">
              <li>Building & Testing REST APIs, Swagger, GraphQL</li>
            </ul>

            <p>6. Frontend Development</p>
            <ul className="list-disc list-inside ml-4">
              <li>HTML, CSS, JavaScript (ES6+), Bootstrap/Tailwind</li>
              <li>React or Angular Framework</li>
            </ul>

            <p>7. Database Management</p>
            <ul className="list-disc list-inside ml-4">
              <li>MySQL/PostgreSQL (CRUD, Joins, Triggers)</li>
              <li>MongoDB with Spring Data</li>
            </ul>

            <p>8. Authentication & Security</p>
            <ul className="list-disc list-inside ml-4">
              <li>JWT, OAuth2, CORS, CSRF, Spring Security</li>
            </ul>

            <p>9. Cloud & Deployment</p>
            <ul className="list-disc list-inside ml-4">
              <li>AWS (EC2, Elastic Beanstalk), Docker, CI/CD</li>
            </ul>

            <p>10. Microservices Architecture</p>
            <ul className="list-disc list-inside ml-4">
              <li>Spring Cloud, Eureka, Kafka, Hystrix</li>
            </ul>

            <p>11. DevOps & Version Control</p>
            <ul className="list-disc list-inside ml-4">
              <li>Git, Jenkins, GitHub Actions, Monitoring</li>
            </ul>

            <p>12. Testing & Debugging</p>
            <ul className="list-disc list-inside ml-4">
              <li>JUnit, Mockito, ELK Stack</li>
            </ul>

            <p>13. Real-World Project</p>
            <ul className="list-disc list-inside ml-4">
              <li>Full Stack App, Deployment, Optimization</li>
            </ul>
          </div>

          {/* Enroll Now Button */}
          <div className="pt-4 text-center">
            <a
              href="https://wa.me/918287584509?text=Hi%2C%20I%27m%20interested%20in%20the%20Java%20Full%20Stack%20course.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-green-600 transition"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JFS;
