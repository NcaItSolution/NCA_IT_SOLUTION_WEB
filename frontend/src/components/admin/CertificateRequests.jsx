import React, { useEffect, useState } from 'react';

const CertificateRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uploadingId, setUploadingId] = useState(null);
  const [formStates, setFormStates] = useState({});
  const [uploadMsg, setUploadMsg] = useState('');

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:1234/api/admin/certificates');
      const data = await res.json();
      if (res.ok) setRequests(data);
      else setError('Failed to fetch requests');
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRequests(); }, []);

  // Initialize form state for each request
  useEffect(() => {
    const initial = {};
    requests.forEach(req => {
      initial[req._id] = {
        fullName: req.fullName || '',
        email: req.email || '',
        enrollmentNumber: req.enrollmentNumber || '',
        subject: req.subject || '',
        from: req.from ? req.from.substring(0, 10) : '',
        to: req.to ? req.to.substring(0, 10) : '',
        type: req.type || 'Internship',
        file: null
      };
    });
    setFormStates(initial);
  }, [requests]);

  const handleChange = (id, e) => {
    const { name, value, files } = e.target;
    setFormStates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [name]: files ? files[0] : value
      }
    }));
  };

  // Generate certificate PDF by filling fields in the template
  const handleGenerate = async (id) => {
    const form = formStates[id];
    if (!form) return;
    setUploadingId(id);
    setUploadMsg('');
    try {
      const res = await fetch(`http://localhost:1234/api/admin/certificate/fill/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          subject: form.subject,
          from: form.from,
          to: form.to,
          enrollmentId: form.enrollmentNumber,
          type: form.type
        })
      });
      const data = await res.json();
      if (res.ok) {
        setUploadMsg('Certificate generated!');
        fetchRequests();
      } else {
        setUploadMsg(data.message || 'Generation failed');
      }
    } catch {
      setUploadMsg('Network error');
    } finally {
      setUploadingId(null);
    }
  };

  if (loading) return <div>Loading certificate requests...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Certificate Requests</h2>
      <ul className="space-y-8">
        {requests.map(req => (
          <li key={req._id} className="border-b pb-4">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
              onSubmit={e => {
                e.preventDefault();
                handleUpload(req._id, req.enrollmentNumber);
              }}
            >
              <input
                type="text"
                name="fullName"
                value={formStates[req._id]?.fullName || ''}
                onChange={e => handleChange(req._id, e)}
                placeholder="Full Name"
                className="border rounded px-3 py-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formStates[req._id]?.email || ''}
                onChange={e => handleChange(req._id, e)}
                placeholder="Email"
                className="border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                name="enrollmentNumber"
                value={formStates[req._id]?.enrollmentNumber || ''}
                onChange={e => handleChange(req._id, e)}
                placeholder="Enrollment Number"
                className="border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                name="subject"
                value={formStates[req._id]?.subject || ''}
                onChange={e => handleChange(req._id, e)}
                placeholder="Subject"
                className="border rounded px-3 py-2"
                required
              />
              <input
                type="date"
                name="from"
                value={formStates[req._id]?.from || ''}
                onChange={e => handleChange(req._id, e)}
                className="border rounded px-3 py-2"
                required
              />
              <input
                type="date"
                name="to"
                value={formStates[req._id]?.to || ''}
                onChange={e => handleChange(req._id, e)}
                className="border rounded px-3 py-2"
                required
              />
              <select
                name="type"
                value={formStates[req._id]?.type || 'Internship'}
                onChange={e => handleChange(req._id, e)}
                className="border rounded px-3 py-2"
                required
              >
                <option value="Internship">Internship</option>
                <option value="Training">Training</option>
              </select>
              <div className="col-span-1 md:col-span-2 flex items-center gap-2 mt-2">
                <button
                  type="button"
                  disabled={uploadingId === req._id}
                  className="bg-indigo-600 text-white px-3 py-1 rounded"
                  onClick={() => handleGenerate(req._id)}
                >
                  {uploadingId === req._id ? 'Generating...' : req.certificateFile ? 'Regenerate Certificate' : 'Generate Certificate'}
                </button>
                {req.certificateFile && (
                  <span className="text-green-600 font-semibold ml-2">Certificate Generated</span>
                )}
              </div>
              {uploadMsg && uploadingId === req._id && <div className="text-green-600 text-sm mt-1 col-span-2">{uploadMsg}</div>}
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateRequests;
