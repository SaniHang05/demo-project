import { useState } from "react";
import "../../styles/StudentDashboard.css";
import Logo from "../../../public/images/logo.png"
function StudentDashboard() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    contact: '',
    gender: '',
    course: '',
    resume: '',
    about: '',
    state: ''
  });

  const handleChange = (e) => {
    if (e.target.type === "radio") {
      setValues({ ...values, [e.target.name]: e.target.value });
    } else if (e.target.type === "file") {
      setValues({ ...values, [e.target.name]: e.target.files[0] });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const ResetFun = () => {
    setValues({
      name: '',
      email: '',
      contact: '',
      gender: '',
      course: '',
      resume: '',
      about: '',
      state: ''
    });
  };

  return (
    <div className="container p-4 border-2 rounded-2xl">
      <img src={Logo} className="w-44 mx-auto"/>
      <h3 className="text-center roboto">Student Registration</h3>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center w-[36rem] mx-auto">
        <label htmlFor="name" className="text-2xl font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
          required
          value={values.name}
          className="ring-2 ring-blue-400 rounded-md p-2 mb-2"
        />

        <label htmlFor="email" className="text-2xl font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          required
          value={values.email}
          className="ring-2 ring-blue-400 rounded-md p-2 mb-2"
        />

        <label htmlFor="contact" className="text-2xl font-medium">Contact</label>
        <input
          type="text"
          placeholder="Enter phone no."
          name="contact"
          onChange={handleChange}
          required
          value={values.contact}
          className="ring-2 ring-blue-400 rounded-md p-2 mb-2"
        />

        <label htmlFor="state" className="text-2xl font-medium">State</label>
        <input
          type="text"
          placeholder="Enter state."
          name="state"
          onChange={handleChange}
          className="ring-2 ring-blue-400 rounded-md p-2 mb-2"
          required
          value={values.state}
        />
       <span className="flex my-1">
        <label className="text-2xl font-medium mx-2">Gender</label>
        <div className="gender-options mx-2">
          <label className="text-2xl font-medium mx-1 px-1">Male<input
              type="radio"
              name="gender"
              value="Male"
              className="mx-2"
              onChange={handleChange}
            />      
          </label>
          <label className="text-2xl font-medium mx-1 px-1"> Female
            <input
              type="radio"
              name="gender"
              value="Female"
              className="mx-2"
              onChange={handleChange}
            />
           
          </label>
        </div>
        </span>
        <label htmlFor="course" className="text-2xl font-medium">Course</label>
        <select
          name="course"
          id="course"
          onChange={handleChange}
          className="ring-2 ring-blue-400 rounded-md p-2 mb-2 bg-[#08121f]"
          required
          value={values.course}
        >
          
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="MCA">MCA</option>
          <option value="MBA">MBA</option>
          <option value="B.tech">B.tech</option>
          <option value="M.tech">M.tech</option>
        </select>

        <label htmlFor="resume" className="text-2xl font-medium">Document</label>
        <input
          type="file"
          placeholder="Select resume"
          name="resume"
          onChange={handleChange}
          className="ring-2 ring-blue-400 rounded-md p-2 mb-2"
        />

        <button type="button" onClick={ResetFun} className="btn btn-success my-2">Reset</button>
        <button type="submit" className="btn btn-primary my-2 py-1">Submit</button>
      </form>
    </div>
  );
}

export default StudentDashboard;
