import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");

    try {
      const response = await axios.post("http://localhost:8000/login", data, {
        withCredentials: true, // Ensures JWT or session is stored
      });

      console.log("Login Success:", response.data);
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setServerError(error.response?.data?.message || "Invalid credentials!");
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-screen bg flex items-center justify-center tracking-wider relative">
      <img
        src="/images/logo.png"
        alt="Login Image"
        className="absolute top-8 w-80 h-35 object-cover drop-shadow-lg mt-5"
      />

      <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm glass mt-12">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Login</h2>
        </div>

        <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
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
          {errors.email && <p className="text-red-500 text-xs mx-5">{errors.email.message}</p>}

          {/* Password Field */}
          <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              {...register("adminpassword", {
                required: "Password is required",
              })}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Password"
            />
            <div className="w-2/12 flex items-center justify-center">
              <i className="fa-solid fa-lock text-xl"></i>
            </div>
          </div>
          {errors.password && <p className="text-red-500 text-xs mx-5">{errors.password.message}</p>}

          {/* Server Error */}
          {serverError && <p className="text-red-500 text-xs mx-5">{serverError}</p>}

          {/* Submit Button */}
          <div className="mx-5 my-7">
            <button
              type="submit"
              className="bg-black w-full h-[35px] rounded-sm text-white"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {/* Link to Signup Page */}
          <div
            className="mx-5 my-3 py-2 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/adminsignup")}
          >
            <p className="text-sm">Don't have an account? / Register</p>
          </div>
        </form>
      </div>
    </div>
  );
}
