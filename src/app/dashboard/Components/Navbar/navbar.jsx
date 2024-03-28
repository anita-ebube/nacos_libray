"use client"
import { useState, useEffect } from "react";
import axios from 'axios';

const Navbar = () => {
  const [getUsers, setGetUsers] = useState([]);

  return (
    <>
      <nav className="fixed flex justify-between items-center gap-10 p-10 bg-white drop-shadow w-full">
        {getUsers.map((user) => (
          <div key={user.id} className="lg:ml-[24rem] ml-[10rem]">
            <p className="lg:text-2xl text-[10px] ">
              <span className="lg:text-2xl text-[10px] font-medium">
                Courses
              </span>{" "}
              / {user.department}-100 Level
            </p>
          </div>
        ))}
        <div></div>
        <div className="lg:flex justify-between items-center gap-10 hidden">
          <img src="/icons/notification.svg" alt="" />
          {getUsers.map((user) => (
            <p key={user.id}>
              {user.profile}
            </p>
          ))}
          
          {/* <img src="/images/notes/profile.png" alt="" height={1 / 2} />/ */}
          {getUsers.map((user) => (
            <p key={user.id} className="text-center lg:text-2xl text-[10px]">
              {user.full_name}
            </p>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
