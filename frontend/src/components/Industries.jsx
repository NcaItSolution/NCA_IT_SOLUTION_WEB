import React from "react";

const industries = [
  {
    name: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    description:
      "Empowering businesses with custom software, cloud solutions, and digital transformation. We help startups and enterprises leverage AI, automation, and secure infrastructure to innovate and scale in a connected world."
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description:
      "Delivering advanced digital health platforms, telemedicine, and data-driven solutions for hospitals, clinics, and research. We enhance diagnostics, patient engagement, and operational efficiency with secure, compliant technology."
  },
  {
    name: "Finance",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=800&q=80",
    description:
      "Transforming banks, fintechs, and insurers with secure payment systems, automation, and intelligent analytics. We enable next-gen financial services, fraud prevention, and seamless customer experiences."
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    description:
      "Revolutionizing learning with e-learning platforms, virtual classrooms, and interactive content. We empower educators and students with accessible, engaging, and scalable digital education solutions."
  },
  {
    name: "Retail",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    description:
      "Enhancing omnichannel retail, e-commerce, and customer experience with personalized shopping, smart supply chains, and real-time insights. We help brands connect with customers and grow sales."
  },
  {
    name: "Manufacturing",
    image: "https://www.shutterstock.com/image-photo/advanced-high-precision-robot-arms-260nw-2345860231.jpg", // Modern manufacturing factory
    description:
      "Streamlining operations with automation, IoT, and smart data. We build robust systems for predictive maintenance, quality control, and global supply chain management, giving manufacturers a competitive edge."
  }
];

const IndustryCard = ({ industry }) => (
  <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900/80 to-gray-800/90 rounded-3xl shadow-2xl hover:shadow-indigo-500/30 overflow-hidden transition-all duration-500 hover:scale-[1.03] w-full max-w-5xl mx-auto my-8 group border border-white/10 hover:border-indigo-400/30">
    <div className="relative w-full md:w-80 h-56 md:h-64 flex-shrink-0 overflow-hidden">
      <img
        src={industry.image}
        alt={industry.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
      <div className="absolute top-4 left-4 bg-indigo-500/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg tracking-wide group-hover:bg-indigo-400/90 transition-colors duration-300">
        {industry.name}
      </div>
    </div>
    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300 drop-shadow-lg">
        {industry.name}
      </h2>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2">
        {industry.description}
      </p>
      <div className="mt-4 flex gap-2">
        <span className="inline-block w-8 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-12 transition-all duration-300"></span>
        <span className="inline-block w-4 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:w-8 transition-all duration-300"></span>
      </div>
    </div>
  </div>
);

const Industries = () => (
  <div className="min-h-screen bg-black from-black via-gray-900 to-black py-14 px-2 sm:px-4 md:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-16 tracking-wide drop-shadow-xl">
      Industries We Serve
    </h1>
    <div className="space-y-10">
      {industries.map((industry, idx) => (
        <IndustryCard industry={industry} key={idx} />
      ))}
    </div>
  </div>
);

export default Industries;
