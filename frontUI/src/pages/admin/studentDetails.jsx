// // src/components/StudentDetails.jsx
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './StudentDetails.css';

// const sampleStudents = [
//   {
//     id: '22IT102021',
//     name: 'Tashi Dawa Lepcha',
//     course: 'Computer Science',
//     dateApplied: '2025-03-01',
//     status: 'Pending',
//   },
//   {
//     id: '22IT102008',
//     name: 'Sonihang Subba',
//     course: 'Bachelor in Compute Application',
//     dateApplied: '2025-03-02',
//     status: 'Pending',
//   },
//   {
//     id: '22IT102041',
//     name: 'Nima Norbu Sherpa',
//     course: 'Bachelor in Compute Application',
//     dateApplied: '2025-03-03',
//     status: 'Pending',
//   },
//   // Add more sample student data if needed
// ];

// const StudentDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Find the student by id from the sample data
//   const student = sampleStudents.find((s) => s.id === id);
  
//   const [remarks, setRemarks] = useState('');
//   const [status, setStatus] = useState(student ? student.status : '');

//   if (!student) {
//     return <div>Student not found.</div>;
//   }

//   const handleAction = (action) => {
//     setStatus(action);
//     alert(`Student ${student.id} ${action} with remarks: ${remarks}`);
//     // In a real app, you would update the data store here.
//     navigate('/'); // Go back to the dashboard
//   };

//   return (
//     <div className="student-details">
//       <header className="header">
//         <div className="logo">Student Details</div>
//         <div className="user-info">
//           Tashi Dawa Lepcha | <a href="#logout">Logout</a>
//         </div>
//       </header>
//       <div className="container">
//         <h2>{student.name}</h2>
//         <p><strong>Reg. ID:</strong> {student.id}</p>
//         <p><strong>Course:</strong> {student.course}</p>
//         <p><strong>Date Applied:</strong> {student.dateApplied}</p>
//         <p><strong>Status:</strong> {status}</p>
//         <textarea
//           rows="4"
//           placeholder="Add remarks (optional)..."
//           value={remarks}
//           onChange={(e) => setRemarks(e.target.value)}
//         />
//         <div className="actions">
//           {status === 'Pending' && (
//             <>
//               <button className="btn btn-accept" onClick={() => handleAction('Accepted')}>
//                 Accept
//               </button>
//               <button className="btn btn-reject" onClick={() => handleAction('Rejected')}>
//                 Reject
//               </button>
//             </>
//           )}
//           <button className="btn btn-back" onClick={() => navigate(-1)}>
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDetails;

//====> Try
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './studentDetails.css';

const sampleStudents = [
  {
    id: '22IT102021',
    name: 'Tashi Dawa Lepcha',
    course: 'Computer Science',
    dateApplied: '2025-03-01',
    status: 'Pending',
    email: 'tashi@example.com',
    phone: '123-456-7890',
    dob: '2000-01-01',
    photo: 'https://via.placeholder.com/150',
    gender: 'Male',
    state: 'State1',
    city: 'City1',
    address: '123 Main St, City1, State1',
  },
  {
    id: '22IT102008',
    name: 'Sonihang Subba',
    course: 'Bachelor in Compute Application',
    dateApplied: '2025-03-02',
    status: 'Pending',
    email: 'sonihang@example.com',
    phone: '234-567-8901',
    dob: '2000-02-02',
    photo: 'https://via.placeholder.com/150',
    gender: 'Female',
    state: 'State2',
    city: 'City2',
    address: '456 Side St, City2, State2',
  },
  {
    id: '22IT102041',
    name: 'Nima Norbu Sherpa',
    course: 'Bachelor in Compute Application',
    dateApplied: '2025-03-03',
    status: 'Pending',
    email: 'nima@example.com',
    phone: '345-678-9012',
    dob: '2000-03-03',
    photo: 'https://via.placeholder.com/150',
    gender: 'Male',
    state: 'State3',
    city: 'City3',
    address: '789 Another Rd, City3, State3',
  },
  // Add more sample student data if needed
];

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the student by id from the sample data
  const student = sampleStudents.find((s) => s.id === id);

  const [status, setStatus] = useState(student ? student.status : '');

  if (!student) {
    return <div>Student not found.</div>;
  }

  const handleAccept = () => {
    setStatus('Accepted');
    alert(`Student ${student.id} has been accepted.`);
    // In a real app, update the data store here.
    navigate('/'); // Return to the dashboard
  };

  const handleReject = () => {
    const remarks = window.prompt("Please enter remarks for rejection:");
    if (remarks !== null && remarks.trim() !== "") {
      setStatus('Rejected');
      alert(`Student ${student.id} has been rejected with remarks: ${remarks}`);
      // In a real app, update the data store here.
      navigate('/'); // Return to the dashboard
    } else {
      alert("Rejection cancelled. Remarks are required.");
    }
  };

  return (
    <div className="student-details">
      <header className="header">
        <div className="logo">Student Details</div>
        <div className="user-info">
          Tashi Dawa Lepcha | <a href="#logout">Logout</a>
        </div>
      </header>
      <div className="container">
        <h2>{student.name}</h2>
        <img src={student.photo} alt={`${student.name}'s photo`} className="student-photo" />
        <p><strong>Application_Id:</strong> {student.id}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Date Applied:</strong> {student.dateApplied}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Date of Birth:</strong> {student.dob}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>State:</strong> {student.state}</p>
        <p><strong>City:</strong> {student.city}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <div className="actions">
          {status === 'Pending' && (
            <>
              <button className="btn btn-accept" onClick={handleAccept}>
                Accept
              </button>
              <button className="btn btn-reject" onClick={handleReject}>
                Reject
              </button>
            </>
          )}
          <button className="btn btn-back" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
