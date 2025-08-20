import React, { useEffect, useState } from 'react';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', duration: '', cost: '', syllabus: '' });

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:1234/api/admin/courses');
      const data = await res.json();
      if (res.ok) setCourses(data);
      else setError('Failed to fetch courses');
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleDelete = async id => {
    if (!window.confirm('Delete this course?')) return;
    try {
      const res = await fetch(`http://localhost:1234/api/admin/course/${id}`, { method: 'DELETE' });
      if (res.ok) fetchCourses();
      else setError('Failed to delete');
    } catch {
      setError('Network error');
    }
  };

  const handleEdit = course => {
    setEditId(course._id);
    setEditForm({ title: course.title, duration: course.duration, cost: course.cost, syllabus: course.syllabus });
  };

  const handleEditChange = e => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:1234/api/admin/course/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });
      if (res.ok) {
        setEditId(null);
        fetchCourses();
      } else {
        setError('Failed to update');
      }
    } catch {
      setError('Network error');
    }
  };

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">All Courses</h2>
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course._id} className="border-b pb-2">
            {editId === course._id ? (
              <form onSubmit={handleEditSubmit} className="space-x-2">
                <input name="title" value={editForm.title} onChange={handleEditChange} className="border rounded px-2 py-1" required />
                <input name="duration" value={editForm.duration} onChange={handleEditChange} className="border rounded px-2 py-1" required />
                <input name="cost" type="number" value={editForm.cost} onChange={handleEditChange} className="border rounded px-2 py-1" required />
                <input name="syllabus" value={editForm.syllabus} onChange={handleEditChange} className="border rounded px-2 py-1" required />
                <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
                <button type="button" onClick={() => setEditId(null)} className="ml-2 px-3 py-1 rounded bg-gray-300">Cancel</button>
              </form>
            ) : (
              <>
                <span className="font-semibold">{course.title}</span> | {course.duration} | ₹{course.cost} <br />
                <span className="text-sm text-gray-600">Syllabus: {course.syllabus}</span>
                <div className="mt-2">
                  <button onClick={() => handleEdit(course)} className="bg-blue-600 text-white px-3 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(course._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
