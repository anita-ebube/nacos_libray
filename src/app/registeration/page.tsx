"use client";
import Link from "next/link";
import Header from "../Components/Header/header";
import { useState } from "react";
import axios from "axios";
const Registration = () => {
    const [username , setUsername] = useState("")
    const [regno,setRegno] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    // const handleInput = (event) =>{
    //     setPost({...post,[event.target.name]: event.target.value});
    //     // console.log(post)
    // }
    let form = {}
    function handleSubmit(event){
        event.preventDefault()
        form = {username:username , regno:regno ,
        email:email , password:password}
        setUsername("")
        setRegno("")
        setEmail("")
        setPassword("")
        console.log(form)
        // console.log(post)
        // axios.post("http://localhost/api/users/all.php",{post})
        // .then(response => console.log(response))
        // .catch(err => console.log(err))
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
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Full Name <i>(Surname first)</i>
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Registration Number
                </label>
                <input
                    type="text"
                    value={regno}
                    onChange={(e) => setRegno(e.target.value)}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Email
                </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Select Image File:
                </label>
                <input
                    type="file"
                    accept="image/png"
                    name="image"
                    // onChange={(e) => setUsername(e.target.value)}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                    Password
                </label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <button type="submit" className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg mt-10">Register</button>
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
