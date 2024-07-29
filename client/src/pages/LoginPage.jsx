import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

// redux-toolkit
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/userSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);


  async function loginUser(e) {
    e.preventDefault();
    console.log(email, password);
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        dispatch(setUserInfo({ id: userInfo.id, email: userInfo.email, jwtoken: userInfo.token}));
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form onSubmit={loginUser}>
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="********"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-bold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sign In
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
              <span>Sign in with Google</span>
            </button>
          </form>
          <div className="mt-2 flex items-center gap-1">
            <p className="">Don't Have Account</p>
            <a href="/register" className="text-blue-400">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
