import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:1234/api/user/courses");
        const data = await res.json();
        if (res.ok) {
          setCourses(data);
        } else {
          setError(data.message || "Failed to fetch courses");
        }
      } catch (err) {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Helper to create a URL-friendly slug from course title
  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  const whatsappNumber = "918287584509";
  const sampleMessage = `Hi, I'm interested in taking admission in your course. Please share the details!`;

  return (
    <div className="min-h-screen bg-gray-50 py-20 mt-16">
      <div className="max-w-7xl mx-auto px-6 mt-5">
        {/* Top Section Box */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600">
            Explore industry-ready courses designed by experts to help you gain
            practical skills and accelerate your career growth. Learn, practice,
            and become job-ready!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => {
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              sampleMessage.replace("{courseName}", course.title)
            )}`;
            return (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-6 transition transform hover:-translate-y-2 hover:shadow-2xl h-full"
              >
                {/* Course Image */}
                <img
                  src={
                    course.image
                      ? course.image.startsWith("http")
                        ? course.image
                        : `http://localhost:1234/upload/${course.image.replace(
                            /^upload[\\\/]/,
                            ""
                          )}`
                      : "https://via.placeholder.com/300x200"
                  }
                  alt={course.title}
                  className="w-56 h-44 object-cover rounded-lg mb-6"
                />

                {/* Course Title & Info */}
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  ⏳ Duration: {course.duration}
                </p>
                <p className="text-gray-600 mb-4">💰 Cost: {course.cost}</p>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 w-full">
                  <button
                    className="flex-1 bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
                    onClick={() =>
                      navigate(`/courses/${slugify(course.title)}`)
                    }
                  >
                    View Details
                  </button>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-green-600 transition text-center"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
