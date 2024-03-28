"use client";
import { useState } from "react";
import Link from "next/link";
import navLinksData from "./menuData";
import NavigationDesktop from "./nav";

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <header>
        <div>
          <NavigationDesktop navLinksData={navLinksData} />
        </div>
      </header> */}
      <nav className="flex max-xl:flex-col justify-between m-10">
        <div className="flex justify-between">
          <div>
            <Link href="/home"><img src="./images/logo.png" alt="Logo" /></Link>
          </div>
          <div className="block lg:hidden px-2 pt-1 ">
            <img
              src="/images/menu.png"
              alt=""
              className="w-7 h-auto lg:hidden"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div>
          <nav className={`${isOpen ? "block" : "hidden"} lg:flex`}>
            <div className="nav">
              <ol className="nav lg:flex lg:text-[2rem] gap-10 cursor-pointer ">
                <li>Home</li>
                <div className="dropdown">
                  <li className="dropdown-btn">Courses</li>
                  <div className="dropdown-content">
                    <Link href="/login"><li>100 Level</li></Link>
                    <Link href="/login"><li>200 Level</li></Link>
                    <Link href="/login"><li>300 Level</li></Link>
                    <Link href="/login"><li>400 Level</li></Link>
                    
                  </div>
                </div>
                {/* <div className="lg:flex gap-1">
                  <form className="">
                    <img src="/images/search.svg" alt="" width={18} />
                    <input type="text" name="search" placeholder="Search.." />
                  </form>
                </div> */}
              </ol>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};
export default Header;
