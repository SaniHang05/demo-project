import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminSignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/signup", data, {
        withCredentials: true, // Ensures cookies (like JWT) are set
      });

      console.log("Response:", data);
      console.log(response.data);

      //  alert("Registration Successful!");
      //  navigate("/login"); // Redirect after successful signup
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="w-full h-screen bg flex items-center justify-center tracking-wider relative">
      <img
        src="\images\logo.png"
        alt="Login Image"
        className="absolute top-8 w-80 h-35 object-cover drop-shadow-lg mt-5"
      />

      <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm glass mt-20">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Register</h2>
        </div>

        <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              {...register("adminname", { required: "Name is required" })}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Name"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-user text-xl"></i>
            </div>
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mx-5">{errors.name.message}</p>
          )}

          {/* Email Field */}
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="email"
              {...register("adminemail", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Email Address"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-envelope text-xl"></i>
            </div>
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mx-5">{errors.email.message}</p>
          )}

          {/* Password Field */}
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              {...register("adminpassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Password"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-lock text-xl"></i>
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mx-5">
              {errors.password.message}
            </p>
          )}

          <div className="mx-5 my-7 py-2">
            <button
              type="submit"
              className="bg-black w-full h-[35px] rounded-sm text-white"
            >
              Register
            </button>
          </div>

          {/* Link to Login Page */}
          <div
            className="mx-5 my-3 py-2 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/adminlogin")}
          >
            <p className="text-sm">Already have an account? / Login</p>
          </div>
        </form>
      </div>
    </div>
  );
}
