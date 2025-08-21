
import React, { useState } from 'react';

const Certificate = () => {
	// Form state for certificate request
	const [form, setForm] = useState({
		fullName: '',
		email: '',
		enrollmentNumber: ''
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	// State for download
	const [downloadEnrollment, setDownloadEnrollment] = useState('');
	const [downloadError, setDownloadError] = useState('');
	const [downloading, setDownloading] = useState(false);

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		setError('');
		setSuccess('');
		try {
			const res = await fetch('http://localhost:1234/api/user/certificate-request', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form)
			});
			const data = await res.json();
			if (res.ok) {
				setSuccess('Certificate request submitted!');
				setForm({ fullName: '', email: '', enrollmentNumber: '' });
			} else {
				setError(data.message || 'Request failed');
			}
		} catch (err) {
			setError('Network error');
		} finally {
			setLoading(false);
		}
	};

	const handleDownload = async e => {
		e.preventDefault();
		setDownloadError('');
		setDownloading(true);
		try {
			const res = await fetch(`http://localhost:1234/api/user/certificate/${downloadEnrollment}`);
			if (res.ok) {
				const disposition = res.headers.get('Content-Disposition');
				if (disposition && disposition.includes('attachment')) {
					// Download file
					const blob = await res.blob();
					const url = window.URL.createObjectURL(blob);
					const a = document.createElement('a');
					a.href = url;
					a.download = disposition.split('filename=')[1]?.replace(/"/g, '') || 'certificate.pdf';
					document.body.appendChild(a);
					a.click();
					a.remove();
					window.URL.revokeObjectURL(url);
				} else {
					// Not a file, show message
					const data = await res.json();
					setDownloadError(data.message || 'Certificate not available yet.');
				}
			} else {
				const data = await res.json();
				setDownloadError(data.message || 'Certificate not found.');
			}
		} catch (err) {
			setDownloadError('Network error');
		} finally {
			setDownloading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8 mt-16">
  <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
    
    {/* Left Section - Forms */}
    <div className="flex-1 flex flex-col gap-8">
      {/* Apply Certificate */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Apply for Certificate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border rounded px-3 py-2"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="enrollmentNumber"
            placeholder="Enrollment Number"
            className="w-full border rounded px-3 py-2"
            value={form.enrollmentNumber}
            onChange={handleChange}
            required
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Apply'}
          </button>
        </form>
      </div>

      {/* Download Certificate */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Download Certificate</h2>
        <form onSubmit={handleDownload} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Enrollment Number"
            className="w-full border rounded px-3 py-2"
            value={downloadEnrollment}
            onChange={e => setDownloadEnrollment(e.target.value)}
            required
          />
          {downloadError && <div className="text-red-600 text-sm">{downloadError}</div>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
            disabled={downloading}
          >
            {downloading ? 'Downloading...' : 'Download Certificate'}
          </button>
        </form>
      </div>
    </div>

    {/* Right Section - Sample Certificate */}
    <div className="flex-1 bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold mb-4">Sample Certificate</h2>
      <img
        src="/img/certificate.png" // 👉 replace with your actual image path
        alt="Sample Certificate"
        className="w-full h-auto max-h-[450px] object-contain rounded-lg shadow-md border"
      />
      <p className="text-gray-500 mt-4 text-sm">
        This is a preview of how your certificate will look after successful application.
      </p>
    </div>
  </div>
</div>

	);
};

export default Certificate;
