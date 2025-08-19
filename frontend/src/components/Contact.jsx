import React, { useState } from 'react';

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // SUCCESS, ERROR, or ""
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setStatus("");
  };

  const validate = () => {
    const tempErr = {};
    if (!form.name.trim()) tempErr.name = "Name is required";
    if (!form.email.trim()) tempErr.email = "Email is required";
    else if (!validateEmail(form.email)) tempErr.email = "Email is invalid";
    if (!form.subject.trim()) tempErr.subject = "Subject is required";
    if (!form.message.trim()) tempErr.message = "Message is required";
    return tempErr;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      setStatus("");
      return;
    }

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:1234/api/user/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          emailAddress: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setForm(initialForm);
        setErrors({});
      } else {
        const data = await response.json();
        setStatus("ERROR");
        console.error("Error:", data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("ERROR");
      console.error("Network error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 px-4">
      <section
        id="contact-section"
        className=" mt-8 mb-8 w-full max-w-7xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 md:p-16"
        aria-label="Contact form section"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                disabled={submitting}
                className={`w-full rounded-xl border px-4 py-3 placeholder-gray-400 text-gray-900 transition focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
                  errors.name ? "border-red-500 focus:ring-red-300" : "border-gray-300"
                } shadow-sm`}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={handleChange}
                disabled={submitting}
                className={`w-full rounded-xl border px-4 py-3 placeholder-gray-400 text-gray-900 transition focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
                  errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300"
                } shadow-sm`}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What can we help you with?"
              value={form.subject}
              onChange={handleChange}
              disabled={submitting}
              className={`w-full rounded-xl border px-4 py-3 placeholder-gray-400 text-gray-900 transition focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
                errors.subject ? "border-red-500 focus:ring-red-300" : "border-gray-300"
              } shadow-sm`}
            />
            {errors.subject && (
              <p className="mt-1 text-red-500 text-xs italic">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project, goals, and how we can help..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              disabled={submitting}
              className={`w-full rounded-xl border px-4 py-3 placeholder-gray-400 text-gray-900 transition focus:outline-none focus:ring-4 focus:ring-cyan-300 resize-y min-h-[140px] ${
                errors.message ? "border-red-500 focus:ring-red-300" : "border-gray-300"
              } shadow-sm`}
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-xs italic">{errors.message}</p>
            )}
          </div>

          {/* Status Feedback */}
          {status === "SUCCESS" && (
            <p className="text-center text-green-600 font-semibold animate-fadeIn">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-center text-red-600 font-semibold animate-fadeIn">
              Something went wrong. Please try again.
            </p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-live="polite"
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
