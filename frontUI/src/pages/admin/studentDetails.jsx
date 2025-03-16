import React, { useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
// import DocFile from "../../../../backend/public/temp/Aadharcardfrontpage.png";
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
  const [comment,setComment] = useState(false);
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
    navigate('/admindashboard'); // Return to the dashboard
  };

  const handleReject = () => {

      setStatus('Rejected');
      //alert(`Student ${student.id} has been rejected with remarks: ${remarks}`);
      setComment(true)
      // navigate('/admindashboard'); // Return to the dashboard
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
    {/* Header Section */}
    <header className="w-full bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="text-3xl font-semibold">Student Details</div>
      <div className="text-lg">
        Tashi Dawa Lepcha | <Link to="/" className="text-white noUnderLine hover:underline">Logout</Link>
      </div>
    </header>

    {/* Main Content Container */}
    <div className="container max-w-4xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-lg">
      {/* Student Information */}
      <div className='flex justify-around'>
      <div className="space-y-4 text-lg text-gray-700">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{student.name}</h2>
        <p><strong>Application Id:</strong> {student.id}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Date Applied:</strong> {student.dateApplied}</p>
        <p><strong>Status:</strong> <span className={`font-semibold ${status === 'Accepted' ? 'text-green-600' : status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>{status}</span></p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Date of Birth:</strong> {student.dob}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>State:</strong> {student.state}</p>
        {
          comment ?(
<input type="text" placeholder="Enter The Comment" className='ring-2 ring-blue-600 px-3 p-2  rounded-md' />
          ):(
            <input type="text" placeholder="Enter The Comment" className=' bg-gray-200 ring-black-600 px-3 p-2  rounded-md' disabled/>
          )
        }
        
      </div>
      <div>
        <img src="/public/images/Aadharcardfrontpage.PNG" className='w-96 my-auto'/>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4 justify-center">
        {status === 'Pending' && (
          <>
            <button 
              className="px-10 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button 
              className="px-10 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
              onClick={handleReject}
            >
              Reject
            </button>
          </>
        )}
        <button 
          className="px-10 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  </div>
  );
};

export default StudentDetails;
