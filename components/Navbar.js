import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md h-20 align-middle">
      {/* Left */}
      <Link href="/">
        <div className="flex items-center">
          <div className="flex ml-2 items-center rounded-full font-black">
            <h1 className="text-2xl text-blue-600">KS.</h1>
          </div>
        </div>
      </Link>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-2 md:space-x-2"></div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end sm:text-sm align-middle mr-2 sm:mr-4">
        <div className="flex items-center lg:mr-12 space-x-4">
          <Link href="/about">
            <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
              <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500 ">
                About
              </h3>
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
              <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500">
                Contact
              </h3>
            </button>
          </Link>
          <Link href="/blog">
            <button className="btn flex items-center cursor-pointer md:px-2 lg:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
              <h3 className="h-5 text-center text-gray-600 sm:h-7 mx-auto group-hover:text-blue-500">
                Blog
              </h3>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
