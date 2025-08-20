import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch('http://localhost:1234/api/admin/students');
        const data = await res.json();
        if (res.ok) {
          setStudents(data);
        } else {
          setError(data.message || 'Failed to fetch students');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <div className="my-8 text-center">Loading students...</div>;
  if (error) return <div className="my-8 text-center text-red-600">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-2xl font-bold mb-4">Registered Students</h2>
      {students.length === 0 ? (
        <div className="text-gray-500">No students registered yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Full Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Contact</th>
                <th className="py-2 px-4 border">Qualification</th>
                <th className="py-2 px-4 border">Gender</th>
                <th className="py-2 px-4 border">Course</th>
                <th className="py-2 px-4 border">Address</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 border">{student.fullName}</td>
                  <td className="py-2 px-4 border">{student.email}</td>
                  <td className="py-2 px-4 border">{student.contactNumber}</td>
                  <td className="py-2 px-4 border">{student.qualification}</td>
                  <td className="py-2 px-4 border">{student.gender}</td>
                  <td className="py-2 px-4 border">{student.course}</td>
                  <td className="py-2 px-4 border">{student.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;
