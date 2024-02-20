import React from "react";
import arrow from "../images/arrow.png";
import Image from "next/image";
import Link from "next/link";
function HomeFooter() {
  return (
    <div className=" flex justify-between ">
      <div className=" bg-white w-[6.6rem] h-full border-2 border-black hidden xl:flex justify-center items-center "></div>
      <div className=" w-full">
        <Link href="/Services">
          <div className=" bg-black border-none text-white text-center flex justify-center items-center gap-4 p-[1.44rem] uppercase">
            <h3 className=" text-[18px] font-Syncopate font-bold">
              More Services
            </h3>
            <Image src={arrow} className=" w-4 h-4" alt="arrow" />
          </div>
        </Link>
      </div>

      <div className=" bg-white w-[6.6rem] h-full border-2 border-black hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default HomeFooter;
