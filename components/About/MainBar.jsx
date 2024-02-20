import React from "react";
import star from "../../images/ContactStar.png";
import circl from "../../images/CircleIcon.png";
import string from "../../images/String.png";

import Image from "next/image";
function MainBar() {
  return (
    <div className=" flex justify-between  bg-[#DAF6CC]">
      <div className="  w-[5.6rem] h-auto border-2 border-black ten:flex  mac:flex justify-center relative items-center hidden xl:flex ">
        <h1 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
          ABOUT US
        </h1>
      </div>
      <div className=" w-full full p-20 relative border-2 border-black">
        <Image
          src={string}
          className=" absolute xl:top-40 xl:left-4 ten:top-40 ten:left-4 mac:top-40 mac:left-4 left-[-3rem]"
          alt="string"
        />
        <Image src={star} className=" absolute right-8 top-0" alt="star" />

        <h1 className=" xl:text-[35px] font-Syncopate font-bold text-center uppercase">
          One of the fastest<br></br> growing agency
        </h1>
        <Image
          src={circl}
          className=" absolute right-10 xl:w-40 w-20 ten:w-40 mac:w-40 mac:bottom-[-4rem]  xl:bottom-[-4rem] ten:bottom-[-4rem] bottom-[-2rem]"
          alt="circle"
        />
      </div>

      <div className="  w-[5.6rem] h-auto  border-2 ten:flex  mac:flex border-black justify-center items-cente hidden xl:flex "></div>
    </div>
  );
}

export default MainBar;
