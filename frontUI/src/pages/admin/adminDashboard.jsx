import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './adminDashboard.css';

const sampleStudents = [
  {
    id: '22IT102021',
    name: 'Tashi Dawa Lepcha',
    course: 'Computer Science',
    dateApplied: '2025-03-01',
    status: 'Pending',
  },
  {
    id: '22IT102008',
    name: 'Sonihang Subba',
    course: 'Bachelor in Compute Application',
    dateApplied: '2025-03-02',
    status: 'Pending',
  },
  {
    id: '22IT102041',
    name: 'Nima Norbu Sherpa',
    course: 'Bachelor in Compute Application',
    dateApplied: '2025-03-03',
    status: 'Pending',
  },
  // Add more sample student data if needed
];

const AdminDashboard = () => {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:8000/applications', {
        });
        console.log('Applications data:', response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    }
    getData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const [students] = useState(sampleStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Filter students based on search term and status
  const filteredStudents = students.filter(student => {
    const matchesName = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? student.status === filterStatus : true;
    return matchesName && matchesStatus;
  });

  return (
    <div className="admin-dashboard">
      <header className="flex justify-around py-4 bg-blue-500 text-white">
        <div className="logo text-2xl font-medium">Admin Dashboard</div>
        <div className="user-info text-xl font-medium">
          Tashi Dawa Lepcha | <Link to="/" className='noUnderLine text-white hover:underline'>Logout</Link>
        </div>
      </header>
      <div className="flex flex-col md:flex-row min-h-screen">
  <span className="bg-blue-600 p-5 w-full md:w-1/4 lg:w-1/5 text-white">
    <ul>
      <li className="py-3">
        <a href="#dashboard" className="text-xl hover:text-amber-200 transition-all duration-300 noUnderLine text-white">Dashboard</a>
      </li>
      <li className="py-3">
        <a href="#reports" className="text-xl hover:text-amber-200 transition-all duration-300 noUnderLine text-white">Reports</a>
      </li>
      <li className="py-3">
        <a href="#settings" className="text-xl hover:text-amber-200 transition-all duration-300 noUnderLine text-white">Settings</a>
      </li>
    </ul>
  </span>

  <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student Registrations</h2>

    <div className="flex justify-between items-center mb-4 space-x-4">
      <input
        type="text"
        placeholder="Search by student name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 w-full md:w-1/2 lg:w-1/3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:blue-amber-500 px-5"
      >
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>

    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full text-left">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Course</th>
            <th className="py-3 px-4">Date Applied</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {filteredStudents.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="py-3 px-4">{student.name}</td>
              <td className="py-3 px-4">{student.course}</td>
              <td className="py-3 px-4">{student.dateApplied}</td>
              <td className="py-3 px-4">{student.status}</td>
              <td className="py-3 px-4">
                <Link to={`/student/${student.id}`}>
                  <button className="btn btn-primary text-white p-2 px-4 rounded-md hover:bg-amber-700 transition duration-300">
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
</div>

    </div>
  );
};

export default AdminDashboard;
