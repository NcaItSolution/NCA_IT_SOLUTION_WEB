import React, { useState } from 'react';

const JOB_IMAGES = {
  1: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Developer
  2: 'data:image/jpeg;base64,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', // Intern
  3: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // Designer
};

const WHY_JOIN = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-2xl shadow-lg">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </span>
    ),
    title: 'Growth Opportunities',
    desc: "Tackle innovative projects and continuously develop new expertise with us.",
    bg: "from-purple-500 to-indigo-500"
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white text-2xl shadow-lg">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-2.5 2-4 4-4 .89 0 2 .45 2 1.7V10c0 1.11-1.45 2-2.5 2s-2.5-.89-2.5-2z"/><circle cx="12" cy="12" r="3" /></svg>
      </span>
    ),
    title: 'Remote & Flexible',
    desc: "Work from wherever you thrive, with flexibility to match your lifestyle.",
    bg: "from-green-400 to-blue-400"
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-white text-2xl shadow-lg">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0l-7-4m7 4l7-4" /></svg>
      </span>
    ),
    title: 'Mentorship & Learning',
    desc: "Access mentorship, resources, and a culture of learning at every step.",
    bg: "from-yellow-400 to-orange-500"
  }
];

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-Time',
      postedDate: 'July 20, 2025',
      applyNow: true,
    },
    {
      id: 2,
      title: 'MERN Stack Intern',
      location: 'Noida, UP',
      type: 'Internship',
      postedDate: 'July 18, 2025',
      applyNow: false,
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Part-Time',
      postedDate: 'July 19, 2025',
      applyNow: true,
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  // Add state for form fields
  const [form, setForm] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    coverLetter: '',
    resume: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [noOpeningMsg, setNoOpeningMsg] = useState(null);

  const openApplicationForm = (job) => {
    setSelectedJob(job);
    setForm({ fullName: '', emailAddress: '', phoneNumber: '', coverLetter: '', resume: null });
    setMessage(null);
  };
  const closeForm = () => {
    setSelectedJob(null);
    setMessage(null);
  };
  const closeNoOpeningMsg = () => setNoOpeningMsg(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const formData = new FormData();
      formData.append('fullName', form.fullName);
      formData.append('emailAddress', form.emailAddress);
      formData.append('phoneNumber', form.phoneNumber);
      formData.append('coverLetter', form.coverLetter);
      if (form.resume) formData.append('resume', form.resume);

      const response = await fetch('http://localhost:1234/api/user/apply-job', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setMessage({ type: 'success', text: 'Application submitted successfully!' });
        setTimeout(() => {
          setSubmitting(false);
          closeForm();
        }, 1500);
      } else {
        const data = await response.json();
        setMessage({type: 'error', text: data.error || 'Failed to submit application.'});
        setSubmitting(false);
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black from-gray-900 to-gray-800 text-white min-h-screen w-full px-4 py-12 relative">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Join Our Team</h1>
        <p className="text-gray-400 text-lg">
          Be part of a growing company that values creativity, collaboration, and career growth.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {WHY_JOIN.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.bg} p-6 rounded-2xl shadow-2xl text-center transition-transform duration-300 hover:scale-105 flex flex-col items-center`}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
            <p className="text-white/90 text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="relative group bg-white/10 border border-white/20 p-0 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-blue-700/40 hover:border-blue-500"
            >
              {/* Job Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={JOB_IMAGES[job.id]}
                  alt={job.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Gradient Overlay */}
              <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-t from-black/60 via-transparent opacity-70 pointer-events-none"></div>
              {/* Job Info */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{job.title}</h3>
                <p className="text-gray-300 text-sm mb-1">
                  <span className="font-medium text-white">Location:</span> {job.location}
                </p>
                <p className="text-gray-300 text-sm mb-1">
                  <span className="font-medium text-white">Type:</span> {job.type}
                </p>
                <p className="text-gray-400 text-xs italic mb-4">Posted on: {job.postedDate}</p>
                <button
                  onClick={() => {
                    if (job.applyNow) {
                      openApplicationForm(job);
                    } else {
                      setNoOpeningMsg('There is no current opening for this position. Try Later 😔');
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-transform duration-200 active:scale-95"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white/10 p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-white/20 backdrop-blur-xl animate-fade-in">
            <button
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
              onClick={closeForm}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Apply for {selectedJob.title}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full p-2 bg-white/20 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                value={form.emailAddress}
                onChange={handleChange}
                className="w-full p-2 bg-white/20 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 bg-white/20 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              {/* Upload Resume is now above the cover letter */}
              <div>
                <label className="block text-gray-100 mb-1 font-medium">Upload Resume</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="block w-full text-white file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100 transition"
                  required
                />
              </div>
              <textarea
                name="coverLetter"
                placeholder="Cover Letter (optional)"
                rows="4"
                value={form.coverLetter}
                onChange={handleChange}
                className="w-full p-2 bg-white/20 border border-white/20 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
              {message && (
                <div className={`text-center text-sm font-medium ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message.text}</div>
              )}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* No Opening Modal */}
      {noOpeningMsg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white/10 p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-white/20 backdrop-blur-xl animate-fade-in text-center">
            <button
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
              onClick={closeNoOpeningMsg}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Notice</h3>
            <p className="text-white text-lg mb-4">{noOpeningMsg}</p>
            <button
              onClick={closeNoOpeningMsg}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
