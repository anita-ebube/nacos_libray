"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Components/Header/header";
const Login = () => {
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/api/users/all.php")
      .then((response) => console.log(response.data?.email))
      .catch((err) => console.log(err));
    // console.log(data.name)
  }, []);
  return (
    <>
      <div>
        <div className="p-10">
          <Header />
        </div>
        {/* <div>
          {data?.map((item, index) => (
            <p key={index}> {item.name}</p>
          ))}
        </div> */}
        <div className="flex lg:justify-between justify-center align-center lg:p-10">
          <div className="lg:px-[14rem] lg:py-[13rem]">
            <h1 className="text-center text-[3rem] ">Welcome Back</h1>
            <p className="text-center py-1 text-[1.5rem]">
              Login into your profile
            </p>
            <form action="">
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
              <button
                type="submit"
                className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg mt-10"
              >
                Login
              </button>
            </form>
          </div>
          <div>
            <img
              src="./images/register.png"
              alt=""
              className=" hidden lg:flex object-scale-down pr-[6rem] w-11/12 h-10/12"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
