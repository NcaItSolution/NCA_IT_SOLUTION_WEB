import React from "react";

const industries = [
  {
    name: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    description:
      "Empowering businesses with custom software, cloud solutions, and digital transformation. We help startups and enterprises leverage AI, automation, and secure infrastructure to innovate and scale in a connected world.",
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description:
      "Delivering advanced digital health platforms, telemedicine, and data-driven solutions for hospitals, clinics, and research. We enhance diagnostics, patient engagement, and operational efficiency with secure, compliant technology.",
  },
  {
    name: "Finance",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=800&q=80",
    description:
      "Transforming banks, fintechs, and insurers with secure payment systems, automation, and intelligent analytics. We enable next-gen financial services, fraud prevention, and seamless customer experiences.",
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    description:
      "Revolutionizing learning with e-learning platforms, virtual classrooms, and interactive content. We empower educators and students with accessible, engaging, and scalable digital education solutions.",
  },
  {
    name: "Retail",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    description:
      "Enhancing omnichannel retail, e-commerce, and customer experience with personalized shopping, smart supply chains, and real-time insights. We help brands connect with customers and grow sales.",
  },
  {
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1516707576330-d2f5b84b06f3?auto=format&fit=crop&w=800&q=80",
    description:
      "Streamlining operations with automation, IoT, and smart data. We build robust systems for predictive maintenance, quality control, and global supply chain management, giving manufacturers a competitive edge.",
  },
];

const IndustryCard = ({ industry }) => (
  <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl hover:shadow-blue-200/30 overflow-hidden transition-transform duration-500 hover:scale-[1.04] border border-gray-200 hover:border-blue-400/30 max-w-7xl mx-auto group">
    <div className="relative w-full md:w-96 h-60 md:h-72 flex-shrink-0 overflow-hidden rounded-l-3xl md:rounded-l-3xl md:rounded-r-none">
      <img
        src={industry.image}
        alt={industry.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 rounded-l-3xl md:rounded-l-3xl md:rounded-r-none"></div>
      <div className="absolute top-5 left-5 bg-blue-600/90 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wide group-hover:bg-blue-500/95 transition-colors duration-300 select-none">
        {industry.name}
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col justify-center rounded-r-3xl md:rounded-r-3xl md:rounded-l-none">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 drop-shadow-lg">
        {industry.name}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        {industry.description}
      </p>
      <div className="mt-6 flex gap-3">
        <span className="inline-block w-12 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-16 transition-all duration-300"></span>
        <span className="inline-block w-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-12 transition-all duration-300"></span>
      </div>
    </div>
  </div>
);

const Industries = () => (
  <div className="min-h-screen bg-white py-24 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 text-center mb-20 tracking-wide drop-shadow-xl max-w-5xl mx-auto">
      Industries We Serve
    </h1>
    <div className="space-y-20 max-w-[1400px] mx-auto">
      {industries.map((industry, idx) => (
        <IndustryCard industry={industry} key={idx} />
      ))}
    </div>
  </div>
);

export default Industries;
