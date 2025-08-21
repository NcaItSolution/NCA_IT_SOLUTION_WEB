
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateCourse from './admin/CreateCourse';
import CourseList from './admin/CourseList';
import CertificateRequests from './admin/CertificateRequests';
import StudentList from './admin/StudentList';

const AdminDash = ({ onLogout }) => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem('isAdmin');
		if (onLogout) onLogout();
		navigate('/');
	};
	return (
		<div className="min-h-screen bg-gray-50 p-8 flex flex-col justify-between mt-32">
			<div>
				<h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
				<CreateCourse onCourseCreated={() => {}} />
				<CourseList />
				<CertificateRequests />
				<StudentList />
			</div>
			<div className="flex justify-center mt-12">
				<button
					onClick={handleLogout}
					className="px-6 py-3 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition text-lg"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default AdminDash;
