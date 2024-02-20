import Image from "next/image";
import React from "react";

import one from "../images/image16.png";
import two from "../images/image17.png";
import three from "../images/image18.png";
import arrow from "../images/arrow.png";
import Link from "next/link";

function HomeServices() {
  return (
    <div className=" flex justify-between h-full">
      <div className="  w-[5.6rem] bg-gradient-to-b from-[#C1FFDE] h-auto border-2 border-black hidden ten:flex  mac:flex xl:flex justify-center items-center ">
        <h2 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
          OUR TOP SERVICES
        </h2>
      </div>
      <div className=" h-full w-full border-2 border-black xl:p-20 mac:p-20 ten:p-20">
        <h3 className=" xl:hidden ten:hidden mac:hidden  font-bold text-center py-4 font-Syncopate">
          OUR TOP SERVICES
        </h3>
        <hr className="border-b-4 xl:hidden ten:hidden mac:hidden  text-black text-3xl border-black bg-black" />

        <div className="flex justify-between  xl:gap-20 ten:gap-20 mac:gap-20 gap-2 p-10">
          <div className=" relative xl:hidden ten:hidden mac:hidden  ">
            <div>
              <Image src={one} alt="one" />
            </div>
          </div>
          <div>
            <h3 className=" xl:text-[30px] font-bold font-Syncopate">
              WEB APPLICATION DEVELOPMENT
            </h3>
            <p className=" xl:text-[20px] font-normal font-RobotoMono">
              Branding, UIUX Design
            </p>
            <hr className="border-b-4 text-black text-3xl border-black bg-black" />
            <h3 className=" xl:text-[20px] font-normal font-RobotoMono">
              Crafting seamless web applications with a focus on branding and
              intuitive user experiences, setting new standards in the digital
              landscape.
            </h3>
          </div>
          <div className=" relative hidden ten:block mac:block xl:block">
            <div>
              <Image src={one} alt="one" />
            </div>
          </div>
        </div>
        <div className=" flex justify-between xl:items-center xl:gap-20 ten:gap-20 mac:gap-20 gap-2 p-10">
          <div className=" relative xl:hidden ten:hidden mac:hidden ">
            <div>
              <Image src={two} alt="two" />
            </div>
          </div>
          <div>
            <h3 className=" xl:text-[30px] font-bold font-Syncopate uppercase">
              Digital Marketing Strategy
            </h3>
            <p className=" xl:text-[20px] font-normal font-RobotoMono">
              Comprehensive Campaign Planning
            </p>
            <hr className="border-b-4 text-black text-3xl border-black bg-black" />
            <h3 className=" xl:text-[20px] font-normal font-RobotoMono">
              Unlock your brand&apos;s potential with a meticulously crafted
              digital marketing strategy. We delve deep into market dynamics,
              ensuring a holistic approach for maximum impact.
            </h3>
          </div>
          <div className=" relative hidden xl:block  ten:block mac:block">
            <div>
              <Image src={two} alt="two" />
            </div>
          </div>
        </div>
        <div className=" flex justify-between xl:items-center xl:gap-20 ten:gap-20 mac:gap-20 gap-2 p-10">
          <div className=" relative  xl:hidden ten:hidden mac:hidden ">
            <Image src={three} alt="three" />
          </div>
          <div>
            <h3 className=" xl:text-[30px] font-bold font-Syncopate uppercase">
              Tech Innovation Hub
            </h3>
            <p className=" xl:text-[20px] font-normal font-RobotoMono">
              Custom App Development
            </p>
            <hr className="border-b-4 text-black text-3xl border-black bg-black" />
            <h3 className=" xl:text-[20px] font-normal font-RobotoMono">
              Transform ideas into cutting-edge digital solutions. Our custom
              app development services guarantee tailored applications that
              define uniqueness and resonate with modern user expectations.
            </h3>
          </div>
          <div className=" relative hidden xl:block ten:block mac:block">
            <Image src={three} alt="three" />
          </div>
        </div>
        <div className=" flex justify-center p-4">
          <div className="w-[268px] h-[82.23px] relative">
            <div className="w-[257px] h-[72px] left-0 top-[10.23px] absolute bg-white border-2 border-zinc-800" />
            <Link href="/Services">
              <div className="w-64 h-[71px] px-[35px] py-[26px] left-[12px] top-0 hover:left-0 hover:top-3 transition-all absolute bg-zinc-800 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="justify-center items-center gap-[9px] inline-flex">
                  <h3 className="text-center text-white text-lg font-bold font-Syncopate uppercase leading-[19.10px] text-[14px] flex justify-between items-center gap-2">
                    Get Started
                    <Image src={arrow} className=" w-4 h-4" alt="arrow" />
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="  w-[5.6rem] bg-gradient-to-t from-[#e2bef8] ten:flex  mac:flex h-auto border-2 border-black hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default HomeServices;
