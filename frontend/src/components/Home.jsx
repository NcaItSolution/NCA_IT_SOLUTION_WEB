import React, { useState } from "react";
import {
  BadgeDollarSign,
  UserRound,
  Lightbulb,
  Mail,
  User,
  MessageSquare,
  Send,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const courses = [
  {
    title: "Full Stack Development",
    duration: "4-6 Months",
  img: "../Public/img/ncaitsolution7.jpg",
    desc: "Master React, Node.js, and MongoDB. Build real-world applications from scratch.",
  },
  {
    title: "Data Science & AI",
    duration: "3 Months",
    img: "../Public/img/ncaitsolution8.jpg",
    desc: "Learn Python, ML, and AI. Work with real datasets and intelligent systems.",
  },
  {
    title: "Mobile App Development",
    duration: "4-6 Months",
    img: "../Public/img/ncaitsolution9.jpg",
    desc: "Build cross-platform apps with React Native and Flutter.",
  },
];

const heroSlides = [
  {
    img: "../Public/img/ncaitsolution7.jpg",
    title: "Cyber Security And Ethical Hacking",
    desc: "Protect systems, networks and programs from digital attacks. Learn to secure the future.",
  },
  {
    img: "../Public/img/ncaitsolution8.jpg",
    title: "Full Stack Web Development",
    desc: "Master frontend & backend: HTML, CSS, JS, React, Node.js & MongoDB.",
  },
  {
    img: "../Public/img/ncaitsolution9.jpg",
    title: "Data Science & Analytics",
    desc: "Python, ML, statistics, Pandas, NumPy & Scikit-learn.",
  },
];

const Home = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [openPopup, setOpenPopup] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const response = await fetch(
        "http://localhost:1234/api/user/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: form.name,
            emailAddress: form.email,
            phone: form.phone,
            subject: form.subject,
            message: form.message,
          }),
        }
      );
      if (response.ok) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => {
          setSubmitting(false);
          setMessage(null);
        }, 3000);
      } else {
        const data = await response.json();
        setMessage({
          type: "error",
          text: data.error || "Failed to send message.",
        });
        setSubmitting(false);
      }
    } catch (err) {
      setMessage({ type: "error", text: "An error occurred. Try again." });
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen mt-24">
      {/* Hero Carousel */}
     <Carousel
  autoPlay
  infiniteLoop
  showThumbs={false}
  showStatus={false}
  interval={2200}
  className="relative"
>
  {heroSlides.map((slide, i) => (
    <div
      key={i}
      className="relative h-[500px] md:h-[700px] flex items-center justify-center"
    >
      <img
        src={slide.img}
        alt={slide.title}
        className="w-full h-full object-cover max-h-[900px]"
        style={{ filter: "brightness(0.65)" }} // slightly darker so text pops out
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
        {/* Bigger Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-5 tracking-wide leading-tight">
          {slide.title}
        </h2>

        {/* Larger Description */}
        <p className="text-xl md:text-3xl text-white max-w-3xl mx-auto drop-shadow-lg font-medium">
          {slide.desc}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <Link
            to="/courses"
            className="bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-3 font-bold rounded-xl text-xl shadow-xl transition-transform transform hover:scale-105"
          >
            Our Courses
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-3 font-bold rounded-xl text-xl hover:bg-white hover:text-indigo-700 shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  ))}
</Carousel>


      {/* Why Choose Us */}
     <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-800 text-white text-center">
  <h2 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
    Why Choose Us
  </h2>
  <p className="max-w-3xl mx-auto mb-16 text-lg sm:text-xl font-light tracking-wide leading-relaxed">
    Discover what makes us the premier choice for your career transformation.
  </p>
  <div className="flex justify-center">
    <div className="grid md:grid-cols-3 gap-10 max-w-7xl w-full px-0 sm:px-0">
      {/* Card 1 */}
      <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/30 hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mb-4 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L15 12l-5.25-5" />
        </svg>
        <h3 className="text-2xl font-semibold mb-3 tracking-wide">
          AI Based Training
        </h3>
        <p className="text-base max-w-xs text-white/90">
          Gain skills with AI-driven modules, hands-on projects & smart tools.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/30 hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mb-4 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0118 16.5c0 3.038-1.43 5.657-3.75 7.06" />
        </svg>
        <h3 className="text-2xl font-semibold mb-3 tracking-wide">
          Top-Class Mentors
        </h3>
        <p className="text-base max-w-xs text-white/90">
          Learn from industry experts with personalized insights.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/30 hover:bg-white/30 hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mb-4 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-semibold mb-3 tracking-wide">
          Career Opportunities
        </h3>
        <p className="text-base max-w-xs text-white/90">
          Access internships, job drives, and startup programs.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* About Us */}
      <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
      <img
        src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg"
        alt="About Us"
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105 rounded-3xl"
        loading="lazy"
      />
      {/* subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl pointer-events-none"></div>
    </div>
    <div className="px-4 sm:px-0">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-sm">
        Transform Your Career with <span className="text-indigo-600">NCA IT</span>
      </h2>
      <p className="mb-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
        At <strong>NCA IT NOIDA</strong>, we mentor, guide & inspire. From certified courses to mock interviews, we prepare you for success in MNCs.
      </p>
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
        Become part of a community where success is the norm. Build skills for today’s digital age.
      </p>
    </div>
  </div>
</section>

      {/* Courses Section */}
     <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-800 text-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-0">
    <h2 className="text-5xl font-extrabold text-center mb-14 drop-shadow-lg tracking-tight">
      Popular Courses
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {courses.map((c, idx) => (
        <div
          key={idx}
          className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <h3 className="font-extrabold text-2xl mb-3">{c.title}</h3>
            <p className="text-gray-700 mb-5 line-clamp-3">{c.desc}</p>
            <span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold shadow-sm">
              {c.duration}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 sm:px-0">
    <div className="max-w-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 drop-shadow-sm">
        Why Choose Us?
      </h1>
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900 drop-shadow-sm">
        Premier IT Training for You
      </h2>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-md">
        Step into the future with immersive hands-on programs.
      </p>
      <ul className="space-y-4 text-gray-800 font-semibold list-none max-w-md">
        <li className="flex items-center gap-3">
          <span className="inline-block bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
            &#10003;
          </span>
          Expert-Led Instruction
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
            &#10003;
          </span>
          Comprehensive Curriculum
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
            &#10003;
          </span>
          Hands-On Real Projects
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-block bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">
            &#10003;
          </span>
          Flexible Online/Offline Options
        </li>
      </ul>
    </div>
    <div className="h-96 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
      <img
        src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
        alt="Training"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
</section>


      {/* Contact Form */}
     <section id="contact-section" className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl px-10 py-16">
    <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 drop-shadow-sm">
      Get In Touch
    </h2>
    <form onSubmit={handleSubmit} className="grid gap-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <User className="absolute left-4 top-4 text-indigo-500" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="pl-12 pr-4 py-4 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-4 top-4 text-indigo-500" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="pl-12 pr-4 py-4 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          />
        </div>
      </div>
      <div className="relative">
        <Phone className="absolute left-4 top-4 text-indigo-500" />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="pl-12 pr-4 py-4 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 text-indigo-500" />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="pl-12 pr-4 py-4 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 text-indigo-500" />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
          rows={6}
          className="pl-12 pr-4 py-4 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-vertical min-h-[140px] transition"
        />
      </div>
      {message && (
        <div className="text-center">
          <span
            className={`font-semibold ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </span>
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-4 flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-4 rounded-xl text-lg font-extrabold shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-live="polite"
      >
        {submitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-6 h-6" /> Send Message
          </>
        )}
      </button>
    </form>
  </div>
</section>


      {/* Floating Popup Form (optional, unchanged) */}
      {openPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl p-8 relative w-96 shadow-xl">
            <button onClick={() => setOpenPopup(false)} className="absolute top-2 right-2 text-xl">
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
            <form className="space-y-4">
              <input className="w-full border p-2 rounded" placeholder="Name" />
              <input className="w-full border p-2 rounded" placeholder="Email" />
              <input className="w-full border p-2 rounded" placeholder="Phone" />
              <button className="w-full bg-indigo-600 text-white p-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}
      <button
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-14 h-14 rounded-full shadow-xl text-2xl"
        aria-label="Open Chat"
        onClick={() => setOpenPopup(true)}
      >
        💬
      </button>
    </div>
  );
};

export default Home;
