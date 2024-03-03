"use client"
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Components/Header/header";

const Login = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost/api/users/all.php', formData);
        console.log('Login successful', response.data);
        // Redirect or do something after successful login
      } catch (error) {
        console.error('Login failed', error);
      }
    };


  return (
    
    <>
        
      <div className="p-10">
        <Header />
      </div>
        {/* <ul className="m-20">
            {records.map((list,index)=>(
                <li key ={index}>{list.id} | {list.name}</li>
            ))}
        </ul> */}
        <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2" />
      <button type="submit">Login</button>
    </form>

      <div className="block lg:flex justify-between">
        <div className="lg:px-[12rem] py-[5rem]">
          
          <h1 className="text-center text-[3rem] ">Welcome Back </h1>
          <p className="text-center py-1 text-[1.5rem]">Login your profile</p>
          <form  method="post" className="my-30 text-[#737373]" >
            <label htmlFor="" className="block text-[1.5rem] mt-10">
              Registration Number
            </label>
            <input
              type="text"
              className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2" 
            />
            <label htmlFor="" className="block text-[1.5rem] mt-10">
              Password
            </label>
            <input
              type="text"
              className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2" 
            />
            <Link href="/loginPage">
              <button
                type="submit"
                className="bg-[#518310] px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
        <div>
          <img
            src="./images/register.png"
            alt=""
            className="hidden lg:flex object-scale-down pr-[6rem] w-1/2 h-1/2"
          />
        </div>
      </div>
    </>
  );
};
export default Login;
