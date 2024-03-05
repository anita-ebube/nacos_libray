"use client";
import Header from "../Components/Header/header";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";


const Registration = () => {
  const url ="http://localhost/api/users/add_user.php"
  const [data, setData] = useState({
    name:"",
    reg_no:"",
    email:"",
    password:""
  })
  function submit(e){
    e.preventDefault();
    axios.post(url,{
      name:data.name,
      reg_no:data.reg_no,
      email:data.email,
      password:data.password
    })
    .then(response =>{
      console.log(response)
    })
  }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    } 
  

   return (
    <>
      <div>
        <div className="p-10">
          <Header />
        </div>
        <div className="flex lg:justify-between justify-center align-center lg:p-10">
          <div className="lg:px-[14rem]">
            <h1 className="text-center text-[3rem] ">Hello</h1>
            <p className="text-center py-1 text-[1.5rem]">Create your account</p>
            <form action="" onSubmit={(e) =>submit(e)}>
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Full Name <i>(Surname first)</i>
                </label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => handle(e)}
                    value={data.name}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Registration Number
                </label>
                <input
                    type="text"
                    id="reg_no"
                    onChange={(e) => handle(e)}
                    value={data.reg_no}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    onChange={(e) => handle(e)}
                    value={data.email}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Select Image File:
                </label>
                {/* <input
                    type="file"
                    accept="image/png"
                    name="image"
                    id="profile"
                    onChange={(e) => handle(e)}
                    value={data.profile}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                /> */}
                
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => handle(e)}
                    value={data.password}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <button type="submit"  className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg mt-10">Register</button>
            </form>
          </div>
          <div>
            <img
              src="./images/register.png"
              alt=""
              className=" hidden lg:flex object-scale-down pr-[6rem]"
              />
          </div>
        </div>
      </div>
    </>
  );
  };
export default Registration;
