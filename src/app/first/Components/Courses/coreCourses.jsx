"use client";
import Download from "../Downloade/download";
import Link from "next/link";
import { useEffect, useState } from "react";
const CoreCourses = () => {
  const notes = [
    {
      href: "/",
      image: "/images/notes/5.png",
      title: "Cos 101: Artificail Intelligence",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
    {
      href: "/",
      image: "/images/notes/2.png",
      title: "Cos 101: Data management",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
    {
      href: "/",
      image: "/images/notes/3.png",
      title: "Cos 101: Data Structures",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
    {
      href: "/",
      image: "/images/notes/6.png",
      title: "Cos 101: Artificail Intelligence",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
    {
      href: "/",
      image: "/images/notes/1.png",
      title: "Cos 101: Artificail Intelligence",
      hint: "Explore the world of database",
      author: "/images/notes/author.png",
      name: "Dr M.C Okoronkwo ",
      pages: "122",
    },
  ];
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Fetch user data after successful login
      const fetchUserData = async () => {
        try {
          const response = await axios.get('/api/userdata');
          setUserData(response.data);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      };
  
      fetchUserData();
    }, []);
  
  return (
    <div className="m-5">
      <h1 className="text-[2rem] font-medium pt-5">Core Courses</h1>
      <div>
      <h2>Welcome to the Dashboard</h2>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          {/* Display other user data */}
        </div>
      )}
    </div>
      <div className="block lg:grid lg:grid-cols-4 gap-10">
        {notes.map(({ href, image, title, hint, author, name, pages }) => (
          <div className="mt-10">
            <Link href={href} className=" items-center">
              <div className="p-[3rem] sm:p-[5rem] bg-white w-full shadow-xl hover:shadow-none">
                <img src={image} alt="" className="w-full" />
                <h1 className="text-[2rem] font-medium pt-5 truncate">
                  {title}
                </h1>
                <p className="text-xl py-3 "> {hint}</p>
                <div className="flex justify-between items-center pt-7 text-[#737373] text-xl">
                  <div className="flex items-center gap-3">
                    <img src={author} alt="" />
                    {name}
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        downloadFileAtURL(COS232);
                      }}
                    >
                      Download File
                    </button>
                  </div>
                  <div>{pages}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CoreCourses;
