import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './adminDashboard.css';

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
      <header className="header">
        <div className="logo">Admin Dashboard</div>
        <div className="user-info">
          Tashi Dawa Lepcha | <a href="#logout">Logout</a>
        </div>
      </header>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </aside>
        <main className="content">
          <h2>Student Registrations</h2>
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search by student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.dateApplied}</td>
                  <td>{student.status}</td>
                  <td>
                    {/* "View" button navigates to the detailed student page */}
                    <Link to={`/student/${student.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
