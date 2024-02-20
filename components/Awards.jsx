import Image from "next/image";
import React from "react";
import Video from "../images/Video.png";

function Awards() {
  return (
    <div className=" flex justify-between">
      <div className=" w-[5.6rem] h-auto  bg-white border-2 border-black hidden xl:flex justify-center items-center relative ">
        <h1 className="rotate-[270deg] absolute text-nowrap text-[20px] font-Syncopate font-bold">
          Awards
        </h1>
      </div>
      <div className=" flex justify-between p-20 w-full border-2 border-black ">
        <div>
          <div className="flex flex-col w-[462px] items-start gap-[14px] relative">
            <div className="flex flex-col w-[429px] items-start gap-[17px] relative flex-[0_0_auto]">
              <div className="relative w-[53px] h-[31.96px] mt-[-1.00px] [font-family:'Roboto_Mono-Bold',Helvetica] font-bold text-[#3d3d3d] text-[22px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                2018
              </div>
              <div className="relative w-[429px] h-[35.95px] font-Syncopate font-bold text-[#2d2d2d] text-[30px] tracking-[0] leading-[35.7px] whitespace-nowrap">
                DESIGNERS MEETING
              </div>
            </div>
            <p className="relative w-[462px] font-RobotoMono font-normal text-[#3d3d3d] text-[20px] tracking-[0] leading-[29.1px]">
              It is a long established fact that&nbsp;&nbsp;reader will be
              distracted readable content of when looking.
            </p>
          </div>
          <div>
            <div className="flex flex-col w-[462px] items-start gap-[14px] relative">
              <div className="flex flex-col w-[429px] items-start gap-[17px] relative flex-[0_0_auto]">
                <div className="relative w-[53px] h-[31.96px] mt-[-1.00px] font-RobotoMono font-bold text-[#3d3d3d] text-[22px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                  2020
                </div>
                <div className="relative w-[429px] h-[35.95px] font-Syncopate  font-bold text-[#2d2d2d] text-[30px] tracking-[0] leading-[35.7px] uppercase whitespace-nowrap">
                  Service design
                </div>
              </div>
              <p className="relative w-[462px]  font-RobotoMono font-normal text-[#3d3d3d] text-[20px] tracking-[0] leading-[29.1px]">
                It is a long established fact that&nbsp;&nbsp;reader will be
                distracted readable content of when looking.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col w-[462px] items-start gap-[14px] relative">
              <div className="flex flex-col w-[429px] items-start gap-[17px] relative flex-[0_0_auto]">
                <div className="relative w-[53px] h-[31.96px] mt-[-1.00px] font-RobotoMono font-bold text-[#3d3d3d] text-[22px] tracking-[0] leading-[32.0px] whitespace-nowrap">
                  2021
                </div>
                <div className="relative w-[429px] h-[35.95px] font-Syncopate  font-bold text-[#2d2d2d] text-[30px] tracking-[0] leading-[35.7px] whitespace-nowrap">
                  Packaging
                </div>
              </div>
              <p className="relative w-[462px] font-RobotoMono font-normal text-[#3d3d3d] text-[20px] tracking-[0] leading-[29.1px]">
                It is a long established fact that&nbsp;&nbsp;reader will be
                distracted readable content of when looking.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image src={Video} alt="video" />
        </div>
      </div>
      <div className=" w-[5.6rem] h-auto  bg-white border-2 border-black flex justify-center items-center relative "></div>
    </div>
  );
}

export default Awards;
