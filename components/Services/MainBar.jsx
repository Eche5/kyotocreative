import React from "react";
import string from "../../images/String.png";
import star from "../../images/Vector.svg";
import circl from "../../images/CircleIcon.png";

import Image from "next/image";
function MainBar() {
  return (
    <div className=" flex justify-between">
      <div className=" w-[5.6rem] h-auto  border-2 bg-[#FFD9F9] border-black hidden xl:flex ten:flex  mac:flex justify-center items-center relative ">
        <h1 className="rotate-[270deg] text-nowrap absolute text-[20px] font-Syncopate font-bold">
          SERVICES
        </h1>
      </div>
      <div className=" w-full full p-20 bg-[#FFD9F9] relative border-2 border-black">
        <Image
          src={string}
          className=" absolute xl:top-40 xl:left-4  ten:top-40 ten:left-4 mac:top-40 mac:left-4  left-[-3rem] "
          alt="string"
        />
        <Image src={star} className=" absolute right-8" alt="star" />
        <h1 className=" xl:text-[35px] font-Syncopate font-bold text-center">
          We&apos;re a full-service<br></br> digital agency.
        </h1>
        <Image
          src={circl}
          className=" absolute right-10 xl:w-40 w-20  xl:bottom-[-4rem] ten:w-40   ten:bottom-[-4rem] mac:w-40   mac:bottom-[-4rem] bottom-[-2rem]"
          alt="circle"
        />
      </div>
      <div className=" bg-[#FFD9F9] w-[5.6rem] h-auto border-2 ten:flex  mac:flex border-black hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default MainBar;
