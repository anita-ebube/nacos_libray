"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RegistrationsPage = () => {
  const [getUsers, setGetUsers] = useState([]);

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const response = await axios.get(
          "https://anita.metrochem.com.ng/public/api/registrations"
        );
        const data = response.data;
        console.log(data);
        setGetUsers(data.records);
      } catch (error) {
        console.error("display error", error);
      }
    };
    fetchRegisteredUsers();
  }, []);

  return (
    <div>
      <h1>Registrations</h1>
      <>
        {/* {registrations.map((list, id) => (
          <li key={id}>{list.full_name}</li>
        ))} */}

        {getUsers.map((user, index) => (
          <div key={index}>
          <p>{user.full_name}</p>
          <p>{user.reg_no}</p>
          <p>{user.profile}</p></div>
          
        ))}
      </>
    </div>
  );
};

export default RegistrationsPage;
