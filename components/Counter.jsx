import React from "react";
import caste from "../images/Caste.svg";
import Image from "next/image";
function Counter() {
  return (
    <div className=" bg-[#2E2E2E] text-[#FFFFFF] flex flex-col gap-11 relative xl:p-20 ten:p-20 mac:p-20">
      <div className=" text-center flex justify-center items-center gap-20">
        <Image src={caste} alt="photo" />
        <h3 className=" xl:text-[40px] font-bold font-Syncopate uppercase">
          What makes us special?
        </h3>
      </div>
      <div className=" xl:flex xl:justify-center ten:flex  mac:flex mac:justify-center ten:justify-center">
        <div className=" xl:grid xl:grid-cols-4 ten:grid ten:grid-cols-4 mac:grid mac:grid-cols-4 grid grid-cols-2 border-4  border-white xl:items-center font-Syncopatey">
          <div className=" xl:border-r-2 border-r-2  border-b-2 xl:border-b-0 border-white flex flex-col items-center xl:gap-4 p-10">
            <h3 className=" xl:text-[60px] text-2xl font-bold font-Syncopate">
              8+
            </h3>
            <p className=" font-RobotoMono text-xl">YEARS IN BUSINESS</p>
          </div>
          <div className=" xl:border-r-2 border-b-2 xl:border-b-0 border-white flex flex-col items-center xl:gap-4 p-10">
            <h3 className=" xl:text-[60px] text-xl font-bold font-Syncopate">
              150+
            </h3>
            <p className=" font-RobotoMono text-2xl">CUSTOMERS</p>
          </div>
          <div className="  text-center xl:border-b-0   border-b-2 border-white xl:p-4 text-black ">
            <div className=" bg-yellow-300 flex flex-col items-center xl:gap-4 xl:p-4 p-10 ">
              <h3 className=" xl:text-[60px] text-2xl font-bold font-Syncopate">
                250+
              </h3>
              <p className=" font-RobotoMono text-xl">PROJECTS DELIVERED</p>
            </div>
          </div>
          <div className=" xl:border-r-2 border-l-2  border-white flex flex-col  items-center xl:gap-4 p-10">
            <h3 className=" xl:text-[60px] text-2xl text-center font-bold font-Syncopate">
              $200M+
            </h3>
            <p className=" font-RobotoMono text-xl text-center">
              CLIENTELE REVENUE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
