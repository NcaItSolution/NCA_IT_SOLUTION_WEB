import React, { useState } from "react";
import { BadgeDollarSign, UserRound, Lightbulb, ChevronLeft, ChevronRight, Mail, User, MessageSquare, Send } from "lucide-react";

const industries = [
  { id: 1, name: "Technology", icon: "💻" },
  { id: 2, name: "Healthcare", icon: "🏥" },
  { id: 3, name: "Finance", icon: "💰" },
  { id: 4, name: "Education", icon: "🎓" },
  { id: 5, name: "Retail", icon: "🛍️" },
  { id: 6, name: "Manufacturing", icon: "🏭" },
];

const Home = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      title: "Web Development",
      description: "Building responsive and modern web applications tailored to your business needs with cutting-edge technologies.",
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions that engage users and drive business growth.",
    },
    {
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=80",
      title: "Cloud Services",
      description: "Secure and scalable cloud architecture to power your business operations efficiently.",
    },
    {
      image: "https://images.unsplash.com/photo-1532619675605-1b3efad0561e?auto=format&fit=crop&w=600&q=80",
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that delight customers and drive conversions.",
    },
    {
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to grow your online presence and reach more customers.",
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      title: "Data Analytics",
      description: "Powerful data analytics solutions to provide actionable insights for informed business decisions.",
    },
  ];

  const [currentServicePage, setCurrentServicePage] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  
  const servicesPerPage = 3;
  const totalServicePages = Math.ceil(services.length / servicesPerPage);
  const visibleServices = services.slice(
    currentServicePage * servicesPerPage,
    (currentServicePage + 1) * servicesPerPage
  );

  const nextIndustry = () => {
    setActiveIndustry((prev) => (prev + 1) % industries.length);
  };

  const prevIndustry = () => {
    setActiveIndustry((prev) => (prev - 1 + industries.length) % industries.length);
  };
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your handle logic
    alert("Message sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black from-purple-800/10 to-cyan-800/10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-purple-300">#flexiblesolutions</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Flexible Solutions for Your{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Business
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Transform your business with cutting-edge technology solutions. We deliver innovative, 
                  scalable, and secure applications that drive growth and success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">Get Started Today</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Modern Technology Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl shadow-lg animate-bounce delay-500 hidden lg:block"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl shadow-lg animate-bounce delay-1000 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">ABOUT US</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are passionate innovators dedicated to transforming businesses through 
              cutting-edge technology solutions and exceptional user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            <div className="col-span-2 group">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                  alt="Creative Workspace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="col-span-1 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl h-48 border border-white/10 group hover:border-purple-500/30 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">Innovation</span>
              </div>
            </div>
            
            {[
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
            ].map((src, idx) => (
              <div key={idx} className="col-span-1 group">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                OUR VISION
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We envision a future where technology seamlessly integrates with human creativity, 
                empowering businesses to achieve unprecedented growth and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BadgeDollarSign,
                  title: "Future-Ready Technology",
                  description: "Leveraging cutting-edge technologies and emerging trends to keep your business ahead of the competition."
                },
                {
                  icon: UserRound,
                  title: "User-Centric Design",
                  description: "Creating intuitive, accessible, and engaging experiences that delight users and drive meaningful interactions."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Excellence",
                  description: "Fostering a culture of continuous innovation and creative problem-solving to deliver breakthrough solutions."
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your unique business challenges and objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleServices.map((service, idx) => (
              <div key={idx} className="group relative">
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white rounded-xl py-3 px-6 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCurrentServicePage(prev => Math.max(prev - 1, 0))}
              disabled={currentServicePage === 0}
              className="flex items-center gap-2 px-6 py-3 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalServicePages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentServicePage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentServicePage === i 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentServicePage(prev => Math.min(prev + 1, totalServicePages - 1))}
              disabled={currentServicePage === totalServicePages - 1}
              className="flex items-center gap-2 px-6 py-3 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse industries with deep domain expertise.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevIndustry}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-white/10 text-cyan-400 hover:border-cyan-500/30 hover:scale-110 transition-all duration-300 shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="relative overflow-hidden" style={{ width: '1000px', height: '280px' }}>
                <div
                  className="flex transition-transform duration-500 ease-out gap-4"
                  style={{
                    transform: `translateX(-${activeIndustry * 260}px)`,
                    width: `${industries.length * 260}px`,
                  }}
                >
                  {industries.map((industry, idx) => (
                    <div
                      key={industry.id}
                      className="flex-shrink-0 w-60 h-64 transition-all duration-500"
                    >
                      <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center p-6 shadow-2xl hover:scale-105 group">
                        <div className="text-5xl mb-4 group-hover:animate-bounce">{industry.icon}</div>
                        <h3 className="text-xl font-semibold text-cyan-400 text-center tracking-wide">
                          {industry.name}
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3 group-hover:w-16 transition-all duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={nextIndustry}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-white/10 text-cyan-400 hover:border-cyan-500/30 hover:scale-110 transition-all duration-300 shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              {industries.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndustry === idx 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setActiveIndustry(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
                    >
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30"
                    />
                  </div>
                </div>
                
                {/* Subject Field */}
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What can we help you with?"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30"
                  />
                </div>
                
                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, and how we can help..."
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30 resize-vertical min-h-[150px]"
                  />
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-cyan-700"
                  >
                    <span className="relative z-10">Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;