import React, { useEffect, useRef } from "react";
import Pankaj from '../../Public/img/Pankaj.jpg'
import Jai from '../../Public/img/Jai.jpg'
const aboutUsImage =
  "https://media.istockphoto.com/id/2142026646/photo/downtown-at-night-manhattan-new-york-city.webp?a=1&s=612x612&w=0&k=20&c=8YzxE3FJm5UTQqArho76PqPqfVsg1y1fR4hFG454fWI=";

const whyCards = [
  {
    title: "🔧Custom Software Solutions",
    desc: "We don’t believe in one-size-fits-all. Our development team takes time to understand your business goals, workflow, and challenges to build customized software that perfectly fits your needs.",
  },
  {
    title: "💡Experienced & Passionate Team",
    desc: "Our team is our strength. With years of experience in software development and training, our professionals bring technical expertise, creativity, and a passion for innovation.",
  },
  {
    title: "🚀Focus on Innovation & Quality",
    desc: "We believe that technology should drive progress. That’s why we stay updated with the latest trends and tools in the IT industry to deliver high-quality, future-proof solutions.",
  },
];

const teamCards = [
  {
    name: "Jai Goyal",
    role: "Lead Software Developer Engineer",
    image: Jai,
  },
  {
    name: "Pankaj Vishwakarma",
    role: "Full-Stack Developer",
    image: Pankaj,
  },
  {
    name: "Ritesh Thakur",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

// Updated Card component with proper wrapping and layout
const Card = ({ title, desc }) => (
  <div
    className="
      min-w-[18rem] max-w-xs h-72 
      bg-gray-800 rounded-lg p-6 shadow-lg flex-shrink-0
      flex flex-col justify-between
    "
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 flex-grow overflow-auto break-words whitespace-normal">
      {desc}
    </p>
  </div>
);

const TeamCard = ({ name, role, image }) => (
  <div
    className="relative w-[300px] h-[250px] rounded-lg shadow-lg flex-shrink-0 overflow-auto group bg-center bg-cover"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
    <div className="absolute bottom-0 left-0 w-full p-4">
      <h3 className="text-xl font-semibold text-white drop-shadow">{name}</h3>
      <p className="text-gray-200">{role}</p>
    </div>
  </div>
);

const AutoScrollContainer = ({ children, speed = 0.7 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (container.children.length > 0) {
      const childrenArr = Array.from(container.children);
      childrenArr.forEach((child) => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });
    }

    let animationFrameId;
    let scrollX = 0;

    const step = () => {
      scrollX += speed;
      if (scrollX >= container.scrollWidth / 2) {
        scrollX = 0;
      }
      container.scrollLeft = scrollX;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="flex space-x-6 overflow-x-hidden select-none cursor-default scrollbar-hide"
    >
      {children}
    </div>
  );
};

const AboutPage = () => (
  <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto space-y-20">
      {/* About Us */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-800 rounded-lg p-8 md:p-12">
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full max-w-[400px] h-auto md:w-[400px] md:h-[300px] rounded-lg object-cover"
        />
        <div className="md:w-3/5">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 leading-relaxed">
            At NCA IT Solution, we are dedicated to transforming ideas into innovative software solutions and empowering individuals with essential IT skills. Established with a passion for excellence, we specialize in bespoke software development and comprehensive IT training services.
            <br />
            Our team of seasoned developers combines technical expertise with creativity to deliver tailored software solutions that meet the unique needs of our clients. From conceptualization to deployment, we ensure precision and efficiency in every project, leveraging cutting-edge technologies to drive business growth and success.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <AutoScrollContainer speed={0.7}>
          {whyCards.map((card, idx) => (
            <Card key={`why-${idx}`} title={card.title} desc={card.desc} />
          ))}
        </AutoScrollContainer>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <AutoScrollContainer speed={0.5}>
          {teamCards.map((member, idx) => (
            <TeamCard
              key={`team-${idx}`}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </AutoScrollContainer>
      </section>
    </div>
  </div>
);

export default AboutPage;

