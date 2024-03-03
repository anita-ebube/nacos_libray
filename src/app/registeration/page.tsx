"use client";
import Link from "next/link";
import Header from "../Components/Header/header";
import { useEffect, useState } from "react";
import axios from "axios";
const Registration = () => {
    const [data, setData] = useState([]);

    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/api/users/all.php");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call fetchData on component mount
    useEffect(() => {
      fetchData();
    }, []);
    const [formData, setFormData] = useState({
        username: "",
        regno: "",
        password:"",
      });
    
      // Function to handle form input changes
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Function to submit the form data using Axios
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost/api/users/add_user.php", formData);
          console.log("Post created:", response.data);
        } catch (error) {
          console.error("Error creating post:", error);
        }
      };
  return (
    <>
      <div className="p-10">
        <Header />
      </div>
      <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title"  onChange={handleChange} className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"/>
        <input type="text" name="title"  onChange={handleChange} className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"/>
        <input type="text" name="title"  onChange={handleChange} className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"/>
      </label>
      <br />
      <label>
        Body:
        <textarea name="body" value={formData.username} onChange={handleChange}></textarea>
        <textarea name="body" value={formData.regno} onChange={handleChange}></textarea>
      </label>
      <br />
        
      <button type="submit">Add Post</button>
    </form>
      <div>
      <h2>Posts:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
          
        ))}
      </ul>
    </div>
      <div className="flex justify-between">
        <div className="lg:px-[12rem] py-[5rem]">
          <h1 className="text-center text-[3rem] ">Hello</h1>
          <p className="text-center py-1 text-[1.5rem]">Create your account</p>
          <form
            onSubmit={handleSubmit}
            className="my-30 text-[#737373]"
          >
            <div className="block">
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                Full Name <i>(Surname first)</i>
              </label>
              <input
                type="text"
                className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
              />
            </div>
            <label htmlFor="" className="block text-[1.5rem] mt-10">
              Registration Number
            </label>
            <input
              type="text"
              className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
            />
            <label htmlFor="" className="block text-[1.5rem] mt-10">
              Email{" "}
            </label>
            <input
              type="text"
              className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
            />
            <label className="block text-[1.5rem] mt-10">
              Select Image File:
            </label>
            <input
              type="file"
              accept="image/png"
              name="image"
              className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
            />
            <label htmlFor="" className="block text-[1.5rem] mt-10">
              Password
            </label>
            <input
              type="text"
              className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
            />
            <input
              type="submit"
              className="bg-[#518310] px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg"
            />
          </form>
        </div>
        <div>
          <img
            src="./images/register.png"
            alt=""
            className="flex object-scale-down pr-[6rem]"
          />
        </div>
      </div>
    </>
  );
};
export default Registration;
