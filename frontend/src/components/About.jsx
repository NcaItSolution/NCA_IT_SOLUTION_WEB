
import React, { useEffect, useRef } from "react";
import Pankaj from '../../Public/img/Pankaj.jpg';
import Jai from '../../Public/img/Jai.jpg';
const aboutUsImage =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80";

const whyCards = [
  {
    title: "🔧 Custom Software Solutions",
    desc: "We don’t believe in one-size-fits-all. Our development team takes time to understand your business goals, workflow, and challenges to build customized software that perfectly fits your needs.",
  },
  {
    title: "💡 Experienced & Passionate Team",
    desc: "Our team is our strength. With years of experience in software development and training, our professionals bring technical expertise, creativity, and a passion for innovation.",
  },
  {
    title: "🚀 Focus on Innovation & Quality",
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

// Elegant Card with animation and glassmorphism
const Card = ({ title, desc }) => (
  <div
    className="min-w-[18rem] max-w-xs h-72 bg-white/80 backdrop-blur-md rounded-2xl p-7 shadow-2xl flex-shrink-0 flex flex-col justify-between border border-gray-100 hover:scale-105 hover:shadow-blue-200 transition-all duration-300"
  >
    <h3 className="text-2xl font-bold mb-2 text-blue-700 drop-shadow-sm">{title}</h3>
    <p className="text-gray-700 flex-grow overflow-auto whitespace-normal leading-relaxed text-base">
      {desc}
    </p>
  </div>
);

// Elegant Team Card with hover effect
const TeamCard = ({ name, role, image }) => (
  <div
    className="relative w-[260px] h-[240px] rounded-2xl shadow-xl flex-shrink-0 overflow-hidden group bg-center bg-cover border border-gray-100 hover:scale-105 hover:shadow-blue-200 transition-all duration-300"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-blue-900/60 group-hover:via-blue-400/20 transition duration-300" />
    <div className="absolute bottom-0 left-0 w-full p-4">
      <h3 className="text-xl font-bold text-white drop-shadow-lg">{name}</h3>
      <p className="text-blue-100 font-medium">{role}</p>
    </div>
  </div>
);

// Elegant auto-scroll container with fade edges
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
    <div className="relative mt-24">
      <div
        ref={containerRef}
        className="flex space-x-8 overflow-x-hidden select-none cursor-default scrollbar-hide py-2 "
      >
        {children}
      </div>
      {/* Fade edges */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white/90 to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white/90 to-transparent z-10" />
    </div>
  );
};


const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 py-0 px-0">
    {/* Hero Section */}
    <section className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden">
  <img
    src={aboutUsImage}
    alt="About Us Hero"
    className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-[2px] brightness-80"
    draggable="false"
  />

  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-500/40 to-white/0" />

  <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
    <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-5 animate-fade-in-up tracking-tight">
      NCA IT Solution
    </h1>
    <p className="text-2xl md:text-4xl text-blue-50 font-semibold drop-shadow-xl mb-8 animate-fade-in-up delay-100">
      Transforming ideas into innovative software & empowering IT skills for the future.
    </p>
    <span className="inline-block px-8 py-3 rounded-full bg-white/90 text-blue-800 font-bold shadow-xl animate-fade-in-up delay-200 text-xl md:text-2xl">
      Excellence | Innovation | Growth
    </span>
  </div>
</section>


    <div className="max-w-8xl mx-auto space-y-24 px-4 sm:px-6 lg:px-8 py-12">
      {/* About Us */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white/90 rounded-3xl shadow-xl p-8 md:p-14 border border-blue-100">
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full max-w-[400px] h-auto md:w-[400px] md:h-[320px] rounded-2xl object-cover shadow-lg border border-blue-100"
        />
        <div className="md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">About Us</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At <span className="font-bold text-blue-700">NCA IT Solution</span>, we are dedicated to transforming ideas into innovative software solutions and empowering individuals with essential IT skills. Established with a passion for excellence, we specialize in bespoke software development and comprehensive IT training services.
            <br className="my-2" />
            Our team of seasoned developers combines technical expertise with creativity to deliver tailored software solutions that meet the unique needs of our clients. From conceptualization to deployment, we ensure precision and efficiency in every project, leveraging cutting-edge technologies to drive business growth and success.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 text-center">Why Choose Us</h2>
        <AutoScrollContainer speed={0.7}>
          {whyCards.map((card, idx) => (
            <Card key={`why-${idx}`} title={card.title} desc={card.desc} />
          ))}
        </AutoScrollContainer>
      </section>

     
    </div>
  </div>
);

export default AboutPage;
