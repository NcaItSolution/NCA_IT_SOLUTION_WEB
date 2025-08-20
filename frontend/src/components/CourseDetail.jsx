import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function deslugify(slug) {
  // Convert slug back to title (best effort)
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

const CourseDetail = () => {
  const { name } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      setError('');
      // Try with slug first, then with deslugified title if not found
      let res = await fetch(`http://localhost:1234/api/user/course/${name}`);
      let data = await res.json();
      if (res.ok && data && data._id) {
        setCourse(data);
        setLoading(false);
        return;
      }
      // Try with deslugified title
      const title = deslugify(name);
      res = await fetch(`http://localhost:1234/api/user/course/${encodeURIComponent(title)}`);
      data = await res.json();
      if (res.ok && data && data._id) {
        setCourse(data);
        setLoading(false);
        return;
      }
      setError(data.message || 'Course not found');
      setLoading(false);
    };
    fetchCourse();
  }, [name]);

  // Helper for image src
  const getImageSrc = (img) => {
    if (!img) return 'https://via.placeholder.com/300x200';
    if (img.startsWith('http')) return img;
    return `http://localhost:1234/upload/${img.replace(/^upload[\\\/]/, '')}`;
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  if (!course) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-20 mt-16">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <img
          src={getImageSrc(course.image)}
          alt={course.title}
          className="w-64 h-48 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-indigo-900 mb-4 text-center">{course.title}</h2>
        <p className="text-gray-700 mb-2 text-center">⏳ Duration: {course.duration}</p>
        <p className="text-gray-700 mb-2 text-center">💰 Cost: {course.cost}</p>
        <div className="w-full mt-6">
          <h3 className="text-xl font-semibold mb-2 text-indigo-800">Syllabus</h3>
          <div className="bg-gray-100 rounded-lg p-4 text-gray-800 whitespace-pre-line">
            {course.syllabus}
          </div>
        </div>
        <button
          className="mt-8 bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
          onClick={() => navigate(-1)}
        >
          Back to Courses
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
