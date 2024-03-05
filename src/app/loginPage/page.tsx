"use client"
import Header from "../Components/Header/header";
import axios from "axios";
import React, { useState } from "react";
import { Router } from 'react-router-dom'

const Login = () => {
  const url ="http://localhost/api/users/login.php";
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  function handleInputChange(e) {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    axios.post(url, credentials)
      .then(response => {
        console.log(response);
        Router.push("/dashboard")
      })
      .catch(error => {
        console.error("Error logging in:", error);
        setError("Invalid email or password. Please try again.");
      });
  }

  return (
    <>
      <div>
        <div className="p-10">
          <Header />
        </div>
        <div className="flex lg:justify-between justify-center align-center lg:p-10">
          <div className="lg:px-[14rem] lg:py-[13rem]">
            <h1 className="text-center text-[3rem] ">Welcome Back!</h1>
            <p className="text-center py-1 text-[1.5rem]">Log in to your account</p>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="email" className="block text-[1.5rem] mt-10">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={credentials.email}
                onChange={handleInputChange}
                className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
              />
              <label htmlFor="password" className="block text-[1.5rem] mt-10">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
              />
              <button type="submit" className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg mt-10">Log In</button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          <div>
            <img
              src="./images/register.png"
              alt=""
              className="hidden lg:flex object-scale-down pr-[6rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
