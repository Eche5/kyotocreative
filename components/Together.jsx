import React from "react";
import arrow from "../images/arrow.png";

import smiley from "../images/Icon.png";
import Image from "next/image";
import Link from "next/link";
function Together() {
  return (
    <div className=" bg-black  p-10">
      <div className="xl:flex ten:flex  mac:flex justify-around items-center">
        <Image src={smiley} className=" w-40 h-40 " alt="smiley" />
        <div className=" text-center">
          <h5 className="  w-fit mt-[-1.00px] text-center font-RobotoMono font-normal text-white xl:text-[20px] tracking-[0] leading-[29.1px] whitespace-nowrap">
            Need a successful project?
          </h5>
          <h5 className=" w-fit font-Syncopate font-bold text-white xl:text-[40px] tracking-[0] leading-[47.6px] whitespace-nowrap">
            LETS WORK TOGETHER
          </h5>
        </div>
      </div>
      <div className=" flex justify-center pt-10">
        <div className="w-[268px] h-[82.23px] relative">
          <div className="w-[257px] h-[72px] left-0 top-[10.23px] absolute bg-black border-2 border-white" />
          <Link href="/Contact">
            <div className="w-64 h-[71px] px-[35px] py-[26px] left-[12px] hover:left-0 hover:top-3 transition-all top-0 absolute bg-white text-black flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-[9px] inline-flex">
                <h5 className="text-center text-black text-lg font-bold font-Syncopate uppercase leading-[19.10px] text-[12.3px] flex justify-between items-center gap-2">
                  Contact us
                  <Image
                    src={arrow}
                    className=" text-black w-4 h-4"
                    alt="arrow"
                  />
                </h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Together;
