"use client";

import React from "react";
import mail from "../images/Vector.png";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const pathname = usePathname();
  const toggleNavbar = () => {
    const navbar = document.getElementById("navbar-default");
    navbar.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="hidden xl:block ten:block mac:block h-[10vh]   ">
        <div className="flex justify-between items-center border-2 border-black bg-white">
          <div className=" bg-[#FFE3CE] w-[5.45rem] h-[10vh] border-2 border-black flex justify-center items-center "></div>
          <div className=" flex justify-between w-full ">
            <div className=" border-black border-l-2 px-4 xl:w-[34rem] mac:w-full whitespace-nowrap ten:w-96 flex justify-start items-center">
              <h1 className=" xl:text-5xl mac:text-2xl font-Yeseva font-semi-bold text-[#020917] mac:text-nowrap">
                <span className=" text-[#FF0F0F] ">Kyoto</span> Creative
                <span className=" text-2xl"> Co.</span>
              </h1>
            </div>
            <ul className="w-full h-[10vh] px-4 uppercase font-Syncopate bg-lime-100 border-2 border-black text-stone-400 justify-between items-center gap-8 inline-flex">
              <Link
                href="/Services"
                className={
                  pathname == "/Services"
                    ? "text-black font-black"
                    : "text-stone-400 font-bold"
                }
              >
                Services
              </Link>
              <Link
                target="_blank"
                href="https://kyotoblog.vercel.app"
                className={
                  pathname == "/Blog"
                    ? "text-black font-black"
                    : "text-stone-400 font-bold"
                }
              >
                Blog
              </Link>
              <Link
                href="/Resources"
                className={
                  pathname == "/Resources"
                    ? "text-black font-black"
                    : "text-stone-400 font-bold"
                }
              >
                Resources
              </Link>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/10WE9EgvzOiMWqj38mApibpFdxOOidHAl/view"
                className={
                  pathname == "/Project"
                    ? "text-black font-black"
                    : "text-stone-400 font-bold"
                }
              >
                PORTFOLIO
              </Link>
              <Link
                href="/AboutUs"
                className={
                  pathname == "/AboutUs"
                    ? "text-black font-black"
                    : "text-stone-400 font-bold"
                }
              >
                About
              </Link>
              <Link
                href="/Contact"
                className={
                  pathname == "/Contact"
                    ? "text-black font-bold"
                    : "text-stone-400 font-bold"
                }
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className=" bg-[#FFE3CE] w-[5.45rem] h-[10vh] border-2 border-black  flex justify-center items-center ">
            <Image src={mail} alt="mail" />
          </div>
        </div>
      </nav>
      <nav className="bg-transparent xl:hidden mac:hidden ten:hidden mac:hidden ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="  flex justify-center bg-transparent pt-2 ">
            <h2 className=" text-3xl font-Yeseva font-semi-bold text-[#020917]">
              <span className=" text-[#FF0F0F] ">Kyoto</span> Creative
              <span className=" text-2xl"> Co.</span>
            </h2>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="absolute hidden z-50 transition ease-in-out duration-300 top-12 right-0 w-[270px] xl:block xl:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 xl:bg-white ">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/10WE9EgvzOiMWqj38mApibpFdxOOidHAl/view"
                className={
                  pathname == "/Project"
                    ? "text-black font-black py-4 "
                    : "text-stone-400 py-4 border-b-2 border-b-black "
                }
              >
                Project
              </Link>
              <Link
                href="/AboutUs"
                className={
                  pathname == "/AboutUs"
                    ? "text-black font-black py-4 "
                    : "text-stone-400 py-4 border-b-2 border-b-black "
                }
              >
                About
              </Link>
              <Link
                href="/Services"
                className={
                  pathname == "/Services"
                    ? "text-black font-black py-4 "
                    : "text-stone-400 py-4 border-b-2 border-b-black "
                }
              >
                Services
              </Link>
              <Link
                target="_blank"
                href="https://kyotoblog.vercel.app"
                className={
                  pathname == "/Blog"
                    ? "text-black font-black py-4 "
                    : "text-stone-400 py-4 border-b-2 border-b-black "
                }
              >
                Blog
              </Link>
              <Link
                href="/Contact"
                className={
                  pathname == "/Contact"
                    ? "text-black font-black py-4 "
                    : "text-stone-400 py-4 "
                }
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
