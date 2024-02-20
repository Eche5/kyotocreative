import Image from "next/image";
import React from "react";
import content from "../../images/Content.png";
function Address() {
  return (
    <div className=" flex justify-between">
      <div className=" bg-white w-[5.55rem] h-[112vh] border-2 border-black border-b-0 hidden xl:flex justify-center items-center "></div>
      <div className=" p-20 w-full border-2 border-black ">
        <h1 className=" xl:text-[30px] font-Syncopate font-bold text-center uppercase">
          Our office
        </h1>

        <Image src={content} className=" xl:p-20" alt="content" />
      </div>
      <div className=" bg-white w-[5.55rem] h-[112vh] border-2 border-black border-b-0 hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default Address;
