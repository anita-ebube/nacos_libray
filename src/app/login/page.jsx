"use client";
import { useRouter } from "next/navigation";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import axios from "axios";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import cors from 'cors';

const Login = () => {
  const router = useRouter();
  const url = "http://anita.metrochem.com.ng/public/api/auth/login";
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [error, setError] = useState("");

  function handleInputChange(e) {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post(url, credentials)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("auth", response.data.message);
        router.push("/dashboard");
      })

      .catch((error) => {
        console.error("Error logging in:", error);
        setError("Invalid name or password. Please try again.");
      });
  }
  if (typeof window !== "undefined" && sessionStorage.getItem("auth")) {
    router.push("/dashboard");
  }

  return (
    <>
      <div>
        <div className="p-10">
          <Header />
        </div>
        <div className="flex lg:justify-between justify-center align-center lg:p-10">
          <div className="lg:px-[14rem] lg:py-[13rem] w-[50%]">
            <h1 className="text-center text-[3rem] ">Welcome Back!</h1>
            <p className="text-center py-1 text-[1.5rem]">
              Log in to your account
            </p>
            <form onSubmit={handleFormSubmit} className="relative">
              <label htmlFor="username" className="block text-[1.5rem] mt-10">
                Full Name
              </label>
              <input
                type="text"
                id="username"
                value={credentials.username}
                onChange={handleInputChange}
                className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
              />
              <label htmlFor="password" className="block text-[1.5rem] mt-10">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2"
                />
                <div className="absolute top-[15px] right-5">
                  {showPassword ? (
                    <BsEye onClick={togglePasswordVisibility} size={15} />
                  ) : (
                    <BsEyeSlash onClick={togglePasswordVisibility} size={15} />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg mt-10"
              >
                Log In
              </button>
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
      <Footer />
    </>
  );
};

export default Login;
