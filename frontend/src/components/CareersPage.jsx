import React, { useState } from 'react';

const JOB_IMAGES = {
  1: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600', // Developer
  2: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600', // Intern
  3: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600', // Designer
};

const WHY_JOIN = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </span>
    ),
    title: 'Growth Opportunities',
    desc: "Tackle innovative projects and continuously develop new expertise with us.",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-200"
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    ),
    title: 'Remote & Flexible',
    desc: "Work from wherever you thrive, with flexibility to match your lifestyle.",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200"
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0l-7-4m7 4l7-4" />
        </svg>
      </span>
    ),
    title: 'Mentorship & Learning',
    desc: "Access mentorship, resources, and a culture of learning at every step.",
    bg: "from-yellow-50 to-orange-50",
    border: "border-yellow-200"
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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

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
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen w-full px-4 py-12 relative mt-28">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
            Be part of a growing company that values creativity, collaboration, and career growth.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {WHY_JOIN.map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${item.bg} ${item.border} border-2 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex flex-col items-center text-center group`}
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Open Positions</h2>
            <p className="text-gray-600 text-lg">Discover exciting opportunities to grow your career with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group border border-gray-100"
              >
                {/* Job Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={JOB_IMAGES[job.id]}
                    alt={job.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      job.type === 'Full-Time' ? 'bg-blue-100 text-blue-800' :
                      job.type === 'Part-Time' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Job Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {job.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-9 8h10a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (job.applyNow) {
                        openApplicationForm(job);
                      } else {
                        setNoOpeningMsg('There is no current opening for this position. Try Later 😔');
                      }
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform active:scale-95 ${
                      job.applyNow
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!job.applyNow}
                  >
                    {job.applyNow ? 'Apply Now' : 'Coming Soon'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-gray-100 animate-fade-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-3xl relative">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                onClick={closeForm}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold pr-8">Apply for {selectedJob.title}</h3>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Enter your email"
                    value={form.emailAddress}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Upload Resume</label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Cover Letter (Optional)</label>
                  <textarea
                    name="coverLetter"
                    placeholder="Tell us why you're interested in this position..."
                    rows="4"
                    value={form.coverLetter}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {message && (
                  <div className={`p-3 rounded-xl text-center font-medium ${
                    message.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {message.text}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-medium transition-colors"
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform active:scale-95"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* No Opening Modal */}
      {noOpeningMsg && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-gray-100 animate-fade-in">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Notice</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{noOpeningMsg}</p>
              <button
                onClick={closeNoOpeningMsg}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform active:scale-95"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}