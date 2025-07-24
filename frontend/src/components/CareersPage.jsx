import React, { useState } from 'react';

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-Time',
      postedDate: 'July 20, 2025',
    },
    {
      id: 2,
      title: 'MERN Stack Intern',
      location: 'Noida, UP',
      type: 'Internship',
      postedDate: 'July 18, 2025',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Part-Time',
      postedDate: 'July 10, 2025',
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  const openApplicationForm = (job) => setSelectedJob(job);
  const closeForm = () => setSelectedJob(null);

  return (
    <div className="bg-black text-white min-h-screen w-full px-4 py-12 relative">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Join Our Team</h1>
        <p className="text-gray-400 text-lg">
          Be part of a growing company that values creativity, collaboration, and career growth.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">🚀 Growth Opportunities</h3>
          <p className="text-gray-400 text-sm">Work on challenging projects and expand your skill set.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">🌐 Remote Friendly</h3>
          <p className="text-gray-400 text-sm">Enjoy the flexibility to work from anywhere.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">🎓 Learn & Grow</h3>
          <p className="text-gray-400 text-sm">Gain access to learning resources and mentorship.</p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-gray-400 text-sm mb-1">
                <strong className="text-white">Location:</strong> {job.location}
              </p>
              <p className="text-gray-400 text-sm mb-1">
                <strong className="text-white">Type:</strong> {job.type}
              </p>
              <p className="text-gray-500 text-xs italic mb-4">Posted on: {job.postedDate}</p>

              <button
                onClick={() => openApplicationForm(job)}
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
              onClick={closeForm}
              aria-label="Close"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4">Apply for {selectedJob.title}</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              />
              <textarea
                placeholder="Cover Letter (optional)"
                rows="4"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              ></textarea>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}





