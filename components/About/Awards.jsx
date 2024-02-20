import React from "react";
import Image from "next/image";
import Video from "../../images/Video.png";

function Awards() {
  return (
    <div className=" xl:flex justify-between h-screen bg-[#F2E5FF]">
      <div className="  w-[5.6rem] h-screen border-2 border-black border-b-0 border-t-0  hidden xl:flex justify-center items-center ">
        <h1 className="rotate-[270deg] absolute text-nowrap text-[20px] font-Syncopate font-bold">
          AWARDS
        </h1>
      </div>
      <div className=" xl:flex justify-between xl:p-20 p-4 w-full border-2 border-black border-t-0  border-b-0 h-screen ">
        <div>
          <div className="flex flex-col xl:w-[462px] items-start gap-[14px] ">
            <div className="flex flex-col xl:w-[429px] items-start gap-[17px]  ">
              <div className=" h-[31.96px] mt-[-1.00px] font-RobotoMono font-bold text-[#3d3d3d] text-[22px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                2018
              </div>
              <div className="  font-Syncopate font-bold text-[#2d2d2d] xl:text-[30px] tracking-[0] leading-[35.7px] whitespace-nowrap">
                DESIGNERS MEETING
              </div>
            </div>
            <p className=" xl:w-[462px] font-RobotoMono font-normal text-[#3d3d3d] xl:text-[20px]  tracking-[0] leading-[29.1px]">
              It is a long established fact that&nbsp;&nbsp;reader will be
              distracted readable content of when looking.
            </p>
          </div>
          <div>
            <div className="flex flex-col xl:w-[462px] items-start gap-[14px] ">
              <div className="flex flex-col xl:w-[429px] items-start gap-[17px]  flex-[0_0_auto]">
                <div className=" w-[53px] h-[31.96px] mt-[-1.00px] font-RobotoMono font-bold text-[#3d3d3d] text-[22px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                  2020
                </div>
                <div className="  font-Syncopate  font-bold text-[#2d2d2d] xl:text-[30px] tracking-[0] leading-[35.7px] uppercase whitespace-nowrap">
                  Service design
                </div>
              </div>
              <p className=" xl:w-[462px]  font-RobotoMono font-normal text-[#3d3d3d] xl:text-[20px]  tracking-[0] leading-[29.1px]">
                It is a long established fact that&nbsp;&nbsp;reader will be
                distracted readable content of when looking.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col xl:w-[462px] items-start gap-[14px] relative">
              <div className="flex flex-col xl:w-[429px] items-start gap-[17px] relative flex-[0_0_auto]">
                <div className="relative xl:w-[53px] h-[31.96px] mt-[-1.00px] font-RobotoMono font-bold text-[#3d3d3d] text-[22px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                  2021
                </div>
                <div className="relative xl: font-Syncopate  font-bold text-[#2d2d2d] xl:text-[30px] tracking-[0] leading-[35.7px] whitespace-nowrap">
                  Packaging
                </div>
              </div>
              <p className="relative xl:w-[462px] font-RobotoMono font-normal text-[#3d3d3d] xl:text-[20px]  tracking-[0] leading-[29.1px]">
                It is a long established fact that&nbsp;&nbsp;reader will be
                distracted readable content of when looking.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex">
          <Image src={Video} className=" h-[620px]" alt="video" />
        </div>
      </div>
      <div className="  w-[5.6rem]  h-screen border-2 border-black border-b-0 border-t-0  hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default Awards;
