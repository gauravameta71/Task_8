"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isClick, setisClick] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setisClick(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-transparent m-4" ref={navRef} >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 p-4 pt-4 ">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-bold text-2xl text-center pb-2 sm:pb-0 text-blackish text-black pl-[-2rem] fixed">
                <Link href="/">
                  <h1 className=" text-black dark:text-white">CANNYWORX</h1>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="ml-4 flex items-center space-x-4 justify-center pr-[350px]">
                <Link
                  href="/"
                  className="text-white hover:text-gray-500 font-bold rounded-lg p-2 dark:text-white  text-xs mt-2"
                >
                  HOME
                </Link>

                <Link
                  href="/sample"
                  className="text-white hover:text-gray-500 font-bold rounded-lg p-2 dark:text-white text-xs mt-2"
                >
                  CAPABILITIES
                </Link>
                <Link
                  href="/pricing"
                  className="text-white hover:text-gray-500 font-bold rounded-lg p-2 dark:text-white text-xs mt-2"
                >
                  WORK
                </Link>

                <Link
                  href="/contact"
                  className="text-white hover:text-gray-500 font-bold rounded-lg p-2 dark:text-white text-xs mt-2"
                >
                  Contact
                </Link>
              </div>
              <Link href="/signin">
                <button className="text-white bg-orange-600 hover:bg-orange-800 px-6 rounded-full p-2 m-2 sm:text-xs md:text-sm lg:text-md">
                  Request a Quote
                </button>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <Link href="/signin">
                <button className="text-white bg-blue-600 hover:bg-blue-800 font-semibold rounded-lg p-1.5 m-2 sm:text-xs md:text-sm lg:text-md">
                  LogIn
                </button>
              </Link>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black   hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-0 space-y-1 sm:px-3 fixed w-full dark:text-white">
                <a
                  href="/"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2 dark:text-white dark:text-white "
                >
                  Home
                </a>

                {/*  */}

                <a
                  href="/sample"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2 dark:text-white"
                >
                  Sample
                </a>

                <a
                  href="/pricing"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2 dark:text-white"
                >
                  Pricing
                </a>

                <a
                  href="/contact"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2 dark:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div
        className="flex items-start justify-end h-screen bg-cover"
        style={{ backgroundImage: 'url("your-background-image-url.jpg")' }}
      >
        <div className="text-white text-right p-8 pr-[150px]">
          <h1 className="text-8xl font-bold pt-8">
            WEB DESIGN <br /> <span className="text-gray-400">AND</span> DIGITAL{" "}
            <br /> <span className="underline">M</span>{" "}
            <span className="pr-2"> ARKETING</span>
          </h1>
          <Link href="/signin">
            <button className="text-white bg-orange-600 hover:bg-orange-800 px-10 rounded-full p-2 m-2 sm:text-xs md:text-sm lg:text-md py-4 mt-16 flex ">
              VIEW PORTFOLIO
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
