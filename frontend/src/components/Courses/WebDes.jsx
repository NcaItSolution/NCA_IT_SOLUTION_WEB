import React from 'react';

const WebDes = () => {
  const whatsappNumber = '918287584509';
  const sampleMessage = encodeURIComponent("Hi, I'm interested in the Web Designing course. Please share the details!");

  return (
  <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
  <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-7xl w-full overflow-hidden">
        {/* Image Banner */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
          alt="Web Designing Course"
          className="w-full h-64 object-contain bg-gray-100 p-6"
        />

        {/* Content */}
  <div className="p-6 text-gray-900">
          <h2 className="text-3xl font-bold mb-4">Web Designing Course</h2>
          <p className="mb-2"><span className="font-semibold">Duration:</span> 4 Months</p>
          <p className="mb-4"><span className="font-semibold">Cost:</span> ₹18,000</p>

          <h3 className="text-xl font-semibold mb-3">Syllabus</h3>

          <div className="max-h-[400px] overflow-y-scroll pr-2 text-sm leading-relaxed space-y-6">
            {[
              {
                title: "1. Introduction to Web Design",
                items: [
                  "What is Web Designing?",
                  "Difference Between Web Design & Web Development",
                  "Types of Websites (Static vs Dynamic)",
                  "Tools for Web Designing (VS Code, Figma, Adobe XD)"
                ]
              },
              {
                title: "2. HTML (HyperText Markup Language)",
                items: [
                  "Introduction to HTML5",
                  "HTML Page Structure & Elements",
                  "Forms & Input Elements",
                  "Semantic HTML",
                  "HTML5 Multimedia (Audio, Video)",
                  "SEO-friendly HTML"
                ]
              },
              {
                title: "3. CSS (Cascading Style Sheets)",
                items: [
                  "Introduction to CSS3",
                  "Selectors & Properties",
                  "Box Model & Positioning",
                  "Flexbox & Grid Layout",
                  "CSS Animations & Transitions",
                  "Responsive Design with Media Queries",
                  "CSS Preprocessors (SASS, LESS)"
                ]
              },
              {
                title: "4. JavaScript for Web Designers",
                items: [
                  "Introduction to JavaScript",
                  "Variables, Data Types & Operators",
                  "Functions & Events",
                  "DOM Manipulation",
                  "JavaScript ES6+ Features",
                  "jQuery Basics (Optional)",
                  "JSON & Fetch API for Dynamic Content"
                ]
              },
              {
                title: "5. UI/UX Design Fundamentals",
                items: [
                  "Understanding User Experience (UX)",
                  "UI Design Principles & Best Practices",
                  "Color Theory & Typography",
                  "Wireframing & Prototyping (Figma, Adobe XD)",
                  "Usability Testing"
                ]
              },
              {
                title: "6. Responsive Web Design (RWD)",
                items: [
                  "Mobile-First Design Approach",
                  "Using CSS Grid & Flexbox for Responsive Layouts",
                  "Bootstrap 5 Framework",
                  "Testing Responsive Design (Chrome DevTools, Lighthouse)"
                ]
              },
              {
                title: "7. Web Animation & Interactivity",
                items: [
                  "CSS Animations & Transitions",
                  "JavaScript Animations (GSAP)",
                  "Parallax Scrolling Effects"
                ]
              },
              {
                title: "8. Web Design Tools & Frameworks",
                items: [
                  "Bootstrap & Tailwind CSS",
                  "Material UI for Web Design",
                  "Webflow & No-Code Web Builders (Optional)"
                ]
              },
              {
                title: "9. Web Performance Optimization",
                items: [
                  "Image Optimization for Web",
                  "Minification & Compression (CSS, JS)",
                  "Lazy Loading & Caching",
                  "SEO Best Practices"
                ]
              },
              {
                title: "10. Website Hosting & Deployment",
                items: [
                  "Web Hosting & Domain Names",
                  "FTP & cPanel Basics",
                  "Deploying Websites on GitHub Pages, Netlify, Vercel",
                  "WordPress Basics (Optional)"
                ]
              },
              {
                title: "11. Web Security Basics",
                items: [
                  "SSL & HTTPS Implementation",
                  "Preventing Common Attacks (XSS, CSRF)",
                  "Secure Form Validation"
                ]
              },
              {
                title: "12. Real-World Web Design Project",
                items: [
                  "Designing & Developing a Portfolio Website",
                  "Creating an E-Commerce or Blog UI",
                  "Implementing SEO Best Practices",
                  "Testing & Launching the Website"
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg mb-2">{section.title}</h4>
                <ul className="list-disc list-inside">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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

export default WebDes;
