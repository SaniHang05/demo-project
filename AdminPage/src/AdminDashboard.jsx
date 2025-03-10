import React, { useState } from 'react';
import './AdminDashboard.css';

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
    dateApplied: '2025-03-0',
    status: 'Pending',
  },
  // Add more sample student data if needed
];

const AdminDashboard = () => {
  const [students, setStudents] = useState(sampleStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState('');
  const [currentStudentId, setCurrentStudentId] = useState('');
  const [remarks, setRemarks] = useState('');

  const openModal = (action, id) => {
    setCurrentAction(action);
    setCurrentStudentId(id);
    setRemarks('');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const submitAction = () => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === currentStudentId
          ? { ...student, status: currentAction === 'accept' ? 'Accepted' : 'Rejected' }
          : student
      )
    );
    alert(`Student ${currentStudentId} ${currentAction}ed with remarks: ${remarks}`);
    closeModal();
  };

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
            <li><a href="#registrations">Student Registrations</a></li>
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
                <th>Reg. ID</th>
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
                  <td>{student.id}</td>
                  <td>{student.course}</td>
                  <td>{student.dateApplied}</td>
                  <td>{student.status}</td>
                  <td>
                    {student.status === 'Pending' && (
                      <>
                        <button className="btn btn-accept" onClick={() => openModal('accept', student.id)}>
                          Accept
                        </button>
                        <button className="btn btn-reject" onClick={() => openModal('reject', student.id)}>
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>{currentAction === 'accept' ? 'Accept Application' : 'Reject Application'}</h3>
            <textarea
              rows="4"
              placeholder="Add remarks (optional)..."
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={submitAction}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
