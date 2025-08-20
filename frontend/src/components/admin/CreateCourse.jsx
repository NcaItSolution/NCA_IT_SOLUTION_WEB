import React, { useState } from 'react';

const CreateCourse = ({ onCourseCreated }) => {
  const [form, setForm] = useState({
    title: '',
    duration: '',
    cost: '',
    syllabus: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      const res = await fetch('http://localhost:1234/api/admin/course', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Course created successfully!');
        setForm({ title: '', duration: '', cost: '', syllabus: '', image: null });
        if (onCourseCreated) onCourseCreated();
      } else {
        setError(data.message || 'Failed to create course');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Create Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" className="w-full border rounded px-3 py-2" value={form.title} onChange={handleChange} required />
        <input type="text" name="duration" placeholder="Duration" className="w-full border rounded px-3 py-2" value={form.duration} onChange={handleChange} required />
        <input type="number" name="cost" placeholder="Cost" className="w-full border rounded px-3 py-2" value={form.cost} onChange={handleChange} required />
        <input type="text" name="syllabus" placeholder="Syllabus" className="w-full border rounded px-3 py-2" value={form.syllabus} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" className="w-full" onChange={handleChange} required />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition" disabled={loading}>{loading ? 'Creating...' : 'Create Course'}</button>
      </form>
    </div>
  );
};

export default CreateCourse;
