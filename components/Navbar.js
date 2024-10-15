import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full mx-0">
      <nav className="w-full flex flex-wrap items-center justify-between px-8 mx-auto shadow-md sticky text-sm md:text-lg h-12 align-middle md:px-20 lg:px-56 xl:px-64">
        {/* Left */}
        <Link href="/">
          <div className="flex items-center align-middle">
            <div className="flex ml-2 items-center rounded-full font-black">
              <h1 className="text-2xl text-blue-600">KS.</h1>
            </div>
          </div>
        </Link>
        {/* Center */}
        <div className="flex justify-center flex-grow align-middle">
          <div className="flex space-x-2 md:space-x-2"></div>
        </div>

        {/* Right */}
        <div className="flex items-center sm:space-x-2 justify-end sm:text-sm align-middle mr-2 sm:mr-4">
          <div className="flex items-center lg:mr-12 space-x-4">
            <Link href="/about">
              <button className="btn px-1 flex items-center cursor-pointer md:px-2 align-middle">
                <h3 className="h-5 text-center text-gray-600 mx-auto hover:text-blue-500 ">
                  About
                </h3>
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn px-1 flex items-center cursor-pointer md:px-2 align-middle">
                <h3 className="h-5 text-center text-gray-600 mx-auto hover:text-blue-500">
                  Contact
                </h3>
              </button>
            </Link>
            <Link href="/blog">
              <button className="btn px-1 flex items-center cursor-pointer md:px-2 ">
                <h3 className="h-5 text-center text-gray-600 mx-auto hover:text-blue-500">
                  Blog
                </h3>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
