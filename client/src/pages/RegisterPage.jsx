import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(e){
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successfull");
      navigate("/login");
    } else {
      alert("Registration failed");
    }
    console.log(response);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Register
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-600">or</span>
            <hr className="flex-1" />
          </div>
          <button
            disabled
            type="button"
            className="w-full py-2 px-4 bg-orange-400 text-white font-bold rounded-md flex items-center justify-center space-x-2 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
          >
            <FaGoogle />
            <span>Sign up with Google</span>
          </button>
        </form>
        <div className="mt-2 flex items-center gap-1">
            <p className="">Have an Account?? Then</p>
            <a href="/login" className="text-blue-400">
              Login
            </a>
          </div>
      </div>
    </div>
  );
};

export default RegisterPage;
