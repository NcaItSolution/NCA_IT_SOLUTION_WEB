import React, { useState } from "react";
import {
  BadgeDollarSign,
  UserRound,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Mail,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

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
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      title: "Web Development",
      description:
        "Building responsive and modern web applications tailored to your business needs with cutting-edge technologies.",
      link: "/services/web-app",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile solutions that engage users and drive business growth.",
      link: "/services/mobile-app",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      title: "E-commerce Solution",
      description:
        "Bespoke e-commerce platforms to accelerate your digital sales and build seamless shopping experiences.",
      link: "/services/ecommerce",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
      title: "iOS App Development",
      description:
        "Designing and launching high-quality iOS apps for Apple devices, focusing on user experience and innovation.",
      link: "/services/ios",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      title: "Shared Hosting Solutions",
      description:
        "Reliable, scalable, and secure shared hosting for hassle-free website management and uptime.",
      link: "/services/shared-hosting",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=80",
      title: "AWS Azure Solution",
      description:
        "Cloud infrastructure on AWS and Azure. Optimize, migrate, and scale with leading cloud platforms.",
      link: "/services/aws-azure",
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
    // Your handle logic here
    alert("Message sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-2 sm:px-4 md:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black from-purple-800/10 to-cyan-800/10"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
                  <span className="text-xs sm:text-sm font-semibold text-purple-300">
                    #flexiblesolutions
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Flexible Solutions for Your{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Business
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform your business with cutting-edge technology solutions. We
                  deliver innovative, scalable, and secure applications that drive
                  growth and success.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                    onClick={handleScrollToContact}
                  >
                    <span className="relative z-10">Get Started Today</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button className="px-6 py-3 sm:px-8 sm:py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative w-full h-56 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Modern Technology Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl shadow-lg animate-bounce delay-500 hidden md:block"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl shadow-lg animate-bounce delay-1000 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-20 lg:py-32 px-2 sm:px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
                ABOUT US
              </h2>
            </div>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are passionate innovators dedicated to transforming businesses
              through cutting-edge technology solutions and exceptional user
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            <div className="col-span-1 sm:col-span-2 group">
              <div className="relative h-32 sm:h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                  alt="Creative Workspace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="col-span-1 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl h-32 sm:h-48 border border-white/10 group hover:border-purple-500/30 transition-all duration-300">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  Innovation
                </span>
              </div>
            </div>

            {[
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
            ].map((src, idx) => (
              <div key={idx} className="col-span-1 group">
                <div className="relative h-32 sm:h-48 rounded-2xl overflow-hidden shadow-lg">
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
      <section className="py-12 sm:py-20 lg:py-32 px-2 sm:px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-16 shadow-2xl">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                OUR VISION
              </h2>
              <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We envision a future where technology seamlessly integrates with
                human creativity, empowering businesses to achieve unprecedented
                growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: BadgeDollarSign,
                  title: "Future-Ready Technology",
                  description:
                    "Leveraging cutting-edge technologies and emerging trends to keep your business ahead of the competition.",
                },
                {
                  icon: UserRound,
                  title: "User-Centric Design",
                  description:
                    "Creating intuitive, accessible, and engaging experiences that delight users and drive meaningful interactions.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Excellence",
                  description:
                    "Fostering a culture of continuous innovation and creative problem-solving to deliver breakthrough solutions.",
                },
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon
                          className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-20 lg:py-32 px-2 sm:px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Our Services</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your unique business challenges and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {visibleServices.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group relative block h-full"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 shadow-xl">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                      {service.description}
                    </p>

                    <button className="w-full bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white rounded-xl py-2 sm:py-3 px-4 sm:px-6 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                      Learn More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <button
              onClick={() => setCurrentServicePage((prev) => Math.max(prev - 1, 0))}
              disabled={currentServicePage === 0}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalServicePages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentServicePage(i)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentServicePage === i ? "bg-cyan-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentServicePage((prev) => Math.min(prev + 1, totalServicePages - 1))}
              disabled={currentServicePage === totalServicePages - 1}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-12 sm:py-20 lg:py-32 px-2 sm:px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Industries We Serve</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse industries with deep domain expertise.
            </p>
          </div>
          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href="/industries"
                className="block h-full focus:outline-none"
                tabIndex={0}
                aria-label={`Learn more about ${industry.name}`}
              >
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-6 shadow-2xl hover:scale-105 group">
                  <div className="text-3xl sm:text-5xl mb-2 sm:mb-4 group-hover:animate-bounce">
                    {industry.icon}
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold text-cyan-400 text-center tracking-wide">
                    {industry.name}
                  </h3>
                  <div className="w-8 h-1 sm:w-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 sm:mt-3 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-12 sm:py-20 lg:py-32 px-2 sm:px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-16 shadow-2xl">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                Get In Touch
              </h2>
              <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>

            <div className="max-w-2xl sm:max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Name Field */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-cyan-400 mb-2 sm:mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
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
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-cyan-400 mb-2 sm:mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
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
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-cyan-400 mb-2 sm:mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
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
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-cyan-400 mb-2 sm:mb-3 group-focus-within:text-purple-400 transition-colors duration-300"
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
                    rows={5}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-cyan-500/30 resize-vertical min-h-[120px] sm:min-h-[150px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-cyan-700"
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
