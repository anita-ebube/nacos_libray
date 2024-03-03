"use client";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const sidebarLinks = [
    {
      href: "/",
      link: "Courses",
      image: "/images/sidebar/icons/courses.svg",
      
    },
    {
      href: "/",
      link: "Downloads",
      image: "/images/sidebar/icons/settings.svg",
    },
    {
      href: "/",
      link: "Settings",
      image: "/images/sidebar/icons/download.svg",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className={`fixed bg-white min-h-screen drop-shadow p-10 ${isOpen ? 'w-72' : 'w-28'} transition-width duration-500 cursor-pointer`}>
      <div className="flex items-center sm:gap-5  pb-[7rem] ">
      <img
          src="/images/logo2.png"
          alt="NotePlug"
          className="w-[80%] h-1/2 hidden"
        />
        <img src="/images/menu.png" alt=""  onClick={() => setIsOpen(!isOpen)} className="w-7 h-9"/>
      </div>
      {sidebarLinks.map(({ href, link, image }) => (
        <div className="mt-10">
          <Link
            href={href}
            className="sidebar flex gap-5 items-center text-xl font-medium"
          >
            <img src={image} alt="" width={30} height={30} />
            <h2 className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>{link}</h2>
          </Link>
        </div>
      ))}
      <img
        src="/images/sidebar/bottom.png"
        alt=""
        className="absolute bottom-0 left-1"
      />
    </nav>
  );
};
export default Sidebar;
