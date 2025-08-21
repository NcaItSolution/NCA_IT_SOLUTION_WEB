import React, { useState, useEffect } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    qualification: '',
    gender: '',
    course: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:1234/api/user/courses');
        const data = await res.json();
        if (res.ok) setCourses(data);
      } catch {}
      setCoursesLoading(false);
    };
    fetchCourses();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:1234/api/user/register-student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Registration successful!');
        setForm({
          fullName: '',
          contactNumber: '',
          email: '',
          qualification: '',
          gender: '',
          course: '',
          address: ''
        });
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Registration</h2>
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
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full border rounded px-3 py-2"
          value={form.contactNumber}
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
          name="qualification"
          placeholder="Qualification"
          className="w-full border rounded px-3 py-2"
          value={form.qualification}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          className="w-full border rounded px-3 py-2"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select
          name="course"
          className="w-full border rounded px-3 py-2"
          value={form.course}
          onChange={handleChange}
          required
          disabled={coursesLoading}
        >
          <option value="">{coursesLoading ? 'Loading courses...' : 'Select Course'}</option>
          {courses.map((c) => (
            <option key={c._id} value={c.title}>{c.title}</option>
          ))}
        </select>
        <textarea
          name="address"
          placeholder="Address"
          className="w-full border rounded px-3 py-2"
          value={form.address}
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
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
