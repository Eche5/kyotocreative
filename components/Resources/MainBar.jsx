import React from "react";
import string from "../../images/String.png";
import star from "../../images/ContactStar.png";
import circl from "../../images/CircleIcon.png";

import Pattern from "../../images/Pattern.svg";

import Image from "next/image";
function MainBar() {
  return (
    <div className=" flex justify-between h-auto bg-[#CFE8FF]">
      <div className="  relative w-[5.6rem] h-auto border-2 border-black  hidden xl:flex ten:flex  mac:flex justify-center items-center ">
        <h1 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
          E-BOOKS
        </h1>
      </div>
      <div className=" w-full xl:p-20 ten:p-20 mac:p-20 p-20  relative border-2 border-black flex justify-center items-center">
        <Image
          src={star}
          className=" absolute xl:left-20 xl:top-40 left-0 bottom-0"
          alt="star"
        />
        <Image
          src={Pattern}
          className=" absolute xl:right-8 right-0"
          alt="pattern"
        />

        <h1 className=" xl:text-[35px] font-Syncopate font-bold text-center uppercase">
          Get an E-Book now
        </h1>
        <Image
          src={circl}
          className=" absolute right-10 xl:w-40 w-20 ten:w-40 mac:w-40 mac:bottom-[-4rem]  xl:bottom-[-4rem] ten:bottom-[-4rem] bottom-[-2rem]"
          alt="circle"
        />
      </div>
      <div className="  w-[5.6rem] ten:flex  mac:flex h-auto  border-2 border-black hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default MainBar;
