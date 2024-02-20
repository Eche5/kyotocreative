"use client";
import React from "react";
import arrow from "../images/arrow.png";
import { InlineWidget } from "react-calendly";
import Image from "next/image";
import Logo from "../images/LOGOMAIN1.png";
import star from "../images/Star1.png";
import { usePathname } from "next/navigation";

import Link from "next/link";
function HomePageFooter() {
  const pathname = usePathname();

  return (
    <div>
      <div className=" flex justify-between">
        <div className=" w-[5.6rem] h-auto bg-white  border-2 border-black hidden xl:flex ten:flex  mac:flex justify-center items-center relative "></div>
        <div className=" xl:p-20 ten:p-20 mac:p-20 pb-0 w-full border-2 border-black">
          <div className=" xl:flex ten:flex  mac:flex  gap-8">
            <div className=" w-full">
              <div className=" flex justify-around gap-8 items-center ">
                <Image src={star} alt="star" />
                <Image src={Logo} alt="logo" />
              </div>
              <div className=" flex flex-col gap-4">
                <h4 className=" font-RobotoMono xl:text-[20px] font-normal] py-1">
                  business@kyotocreative.com
                </h4>
                <p className="font-RobotoMono xl:text-[20px] font-normal py-1 uppercase">
                  <span>India Office&nbsp;-&nbsp;</span> +91 7031853012
                </p>
                <p className="font-RobotoMono xl:text-[20px] font-normal py-1 uppercase">
                  <span>USA office&nbsp;-&nbsp;</span>+1 (215) 714-8335
                </p>
              </div>
            </div>
            <div className=" w-full h-full">
              <InlineWidget url="https://calendly.com/akrulz2180/sprintmeet" />
            </div>
          </div>
        </div>
        <div className=" w-[5.6rem] h-auto bg-white  border-2 border-black hidden ten:flex  mac:flex xl:flex justify-center items-center relative "></div>
      </div>
      <div className=" border-4 bg-[#FFE3CE]  border-t-black border-b-black">
        <ul className=" xl:flex xl:justify-around  ten:flex  mac:flex mac:justify-around ten:justify-around flex justify-center  border-b-0    gap-8  border-r-black border-2  xl:item-center ten:items-center mac:p-6 ten:p-6 xl:p-6">
          <Link
            href="/"
            className={
              pathname == "/"
                ? "text-black font-black"
                : "text-stone-400 font-bold"
            }
          >
            Home
          </Link>
          <Link
            href="/Projects"
            className={
              pathname == "/Projects"
                ? "text-black font-black"
                : "text-stone-400 font-bold"
            }
          >
            Projects
          </Link>
          <Link
            href="/Contact"
            className={
              pathname == "/Contact"
                ? "text-black font-black"
                : "text-stone-400 font-bold"
            }
          >
            Contact
          </Link>
          <Link
            href="/Privacy"
            className={
              pathname == "/Privacy"
                ? "text-black font-black"
                : "text-stone-400 font-bold"
            }
          >
            Privacy
          </Link>
          <Link
            href="/Terms"
            className={
              pathname == "/Terms"
                ? "text-black hidden xl:block ten:block mac:block font-black"
                : "text-stone-400 hidden xl:block font-bold"
            }
          >
            Terms & Conditions
          </Link>
        </ul>
        <div className=" xl:hidden ten:hidden mac:hidden  flex justify-center">
          <Link
            href="/Terms"
            className={
              pathname == "/Terms"
                ? "text-black font-black"
                : "text-stone-400 font-bold"
            }
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePageFooter;
