import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full h-screen bg flex items-center justify-center tracking-wider relative">
      <img
        src="/images/logo.png" 
        alt="Login Image"
        className="absolute top-8 w-80 h-35 object-cover drop-shadow-lg mt-5  "
      />

      <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm glass mt-12">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Login</h2>
        </div>

        <form className="my-2" onSubmit={handleSubmit}>
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Email Address"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className={`fa-${formData.email ? "solid" : "regular"} fa-envelope text-xl`}></i>
            </div>
          </div>
          {errors.email && <p className="text-red-500 text-xs mx-5">{errors.email}</p>}

          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Password"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className={`fa-solid ${formData.password ? "fa-lock" : "fa-lock-open"} text-xl`}></i>
            </div>
          </div>
          {errors.password && <p className="text-red-500 text-xs mx-5">{errors.password}</p>}

          <div className="mx-5 my-7 py-2">
            <button type="submit" className="bg-black w-full h-[35px] rounded-sm text-white">
              Login
            </button>
          </div>

          <div
            className="mx-5 my-3 py-2 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            <p className="text-sm">Don't have an account? / Register</p>
          </div>
        </form>
      </div>
    </div>
  );
}
