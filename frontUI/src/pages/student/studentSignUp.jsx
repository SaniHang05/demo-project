import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png"
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/signup",
        data
      );
      console.log("Signup Successful:", response.data);
      toast.success("Signup successful!");
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white/30 backdrop-blur-[4px] p-6 rounded-lg shadow-[0_25px_50px_-12px_rgb(222_39_39_/47%)] w-96">
      <img src={Logo} className="w-48 mx-auto"/>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("username", { required: "Name is required" })}
              className="w-full p-2 font-bold ring-2 ring-black outline-0 rounded-md focus:ring-2 focus:ring-blue-300"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full font-bold p-2 ring-2 ring-black outline-0 rounded-md focus:ring-2 focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full font-bold p-2 ring-2 ring-black outline-0 rounded-md focus:ring-2 focus:ring-blue-300"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="signup-btn w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
          <p className="mt-4 font-bold text-center text-sm black-gray-600">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default SignupForm;
