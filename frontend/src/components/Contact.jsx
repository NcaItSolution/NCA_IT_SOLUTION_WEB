import React, { useState } from 'react';

// Optionally import your icons here
// import { User, Mail, MessageSquare, Send } from "lucide-react"; // Example

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "SUCCESS", "ERROR", or ""

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setStatus("");
  };

  const validate = () => {
    let tempErr = {};
    if (!form.name.trim()) tempErr.name = "Name is required";
    if (!form.email.trim()) tempErr.email = "Email is required";
    else if (!validateEmail(form.email)) tempErr.email = "Email is invalid";
    if (!form.subject.trim()) tempErr.subject = "Subject is required";
    if (!form.message.trim()) tempErr.message = "Message is required";
    return tempErr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      setStatus("");
      return;
    }
    // Simulate sending...
    setStatus("SUCCESS");
    setForm(initialForm);
    setErrors({});
  };

  return (
    <div>
      <section
        id="contact-section"
        className="py-12 sm:py-20 lg:py-32 px-2 sm:px-4 md:px-8 bg-black min-h-screen"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-zinc-900/70 border border-zinc-800 rounded-3xl p-4 sm:p-8 lg:p-16 shadow-2xl">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                Get In Touch
              </h2>
              <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>

            <div className="max-w-2xl sm:max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Name */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 mb-2 sm:mb-3 group-focus-within:text-purple-300 transition-colors"
                    >
                      {/* <User className="w-4 h-4" /> */}
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
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-zinc-800 border ${errors.name ? "border-red-500" : "border-zinc-700"} text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition-all duration-200`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-400 text-xs">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 mb-2 sm:mb-3 group-focus-within:text-purple-300 transition-colors"
                    >
                      {/* <Mail className="w-4 h-4" /> */}
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
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-zinc-800 border ${errors.email ? "border-red-500" : "border-zinc-700"} text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition-all duration-200`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 mb-2 sm:mb-3 group-focus-within:text-purple-300 transition-colors"
                  >
                    {/* <MessageSquare className="w-4 h-4" /> */}
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
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-zinc-800 border ${errors.subject ? "border-red-500" : "border-zinc-700"} text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition-all duration-200`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-400 text-xs">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 mb-2 sm:mb-3 group-focus-within:text-purple-300 transition-colors"
                  >
                    {/* <MessageSquare className="w-4 h-4" /> */}
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
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-zinc-800 border ${errors.message ? "border-red-500" : "border-zinc-700"} text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 transition-all duration-200 resize-vertical min-h-[120px] sm:min-h-[150px]`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-xs">{errors.message}</p>
                  )}
                </div>

                {/* Feedback */}
                {status === "SUCCESS" && (
                  <div className="text-center">
                    <p className="text-green-400 font-medium">
                      Thanks! Your message has been sent.
                    </p>
                  </div>
                )}
                {status === "ERROR" && (
                  <div className="text-center">
                    <p className="text-red-500 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full font-semibold text-white shadow-xl hover:shadow-purple-500/30 transition-all duration-200 hover:scale-105 hover:from-purple-800 hover:to-cyan-800"
                  >
                    <span className="relative z-10">Send Message</span>
                    {/* <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> */}
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

export default Contact;
