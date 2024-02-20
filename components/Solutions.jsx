import React from "react";
import solution from "../images/Solutions.png";
import Image from "next/image";
import arrow from "../images/arrow.png";
import Link from "next/link";

function Solutions() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" w-[5.6rem] h-auto  bg-white border-2 border-black hidden ten:flex  mac:flex xl:flex justify-center items-center relative ">
          <h4 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
            WHY US
          </h4>
        </div>
        <div className=" xl:flex xl:justify-between ten:flex  mac:flex ten:justify-between  grid grid-cols-1 w-full border-2 border-black">
          <div className=" h-auto w-full">
            <Image
              src={solution}
              className=" hidden h-full xl:block ten:block mac:block"
              alt="solution"
            />
          </div>
          <div>
            <h4 className=" xl:hidden ten:hidden mac:hidden  font-bold text-center py-4 font-Syncopate">
              WHY US?
            </h4>
            <hr className="border-b-4 xl:hidden text-black text-3xl border-black bg-black" />

            <div className=" p-4 pt-20 ">
              <h4 className=" xl:text-[30px] font-bold font-Syncopate uppercase">
                Expertise Beyond Measure, Success Beyond Limits
              </h4>
              <p className=" font-RobotoMono">
                At Kyoto Creative Co., we transcend the conventional boundaries
                of business solutions, ushering in a new era of transformative
                excellence. Founded on the principles of innovation,
                collaboration, and a relentless pursuit of excellence, we stand
                as a dynamic force at the intersection of marketing brilliance
                and technological innovation.
              </p>
            </div>
            <div className=" p-4 pt-20 ">
              <h4 className=" xl:text-[30px] font-bold font-Syncopate uppercase">
                Tailored Excellence Across Tech and Marketing Spectrums
              </h4>
              <p className=" font-RobotoMono">
                Experience tailored solutions that resonate with your unique
                vision. From cutting-edge tech to strategic marketing, we craft
                bespoke solutions for maximum impact and sustainable growth.
              </p>
            </div>
            <div className=" p-4 pt-20 ">
              <h4 className=" xl:text-[30px] font-bold font-Syncopate uppercase">
                Client-Centric Precision: Your Success, Our Priority
              </h4>
              <p className=" font-RobotoMono">
                At Kyoto Creative Co., we&apos;re more than service
                providers—we&apos;re dedicated partners in your success. Benefit
                from our client-centric approach, ensuring personalized
                strategies that lead to unparalleled achievement.
              </p>
            </div>
            <div className=" flex justify-center xl:pt-20 p-4">
              <div className="w-[268px] h-[82.23px] relative">
                <div className="w-[257px] h-[72px] left-0 top-[10.23px] absolute bg-white border-2 border-zinc-800" />
                <Link href="/About">
                  <div className="w-64 h-[71px] px-[35px] py-[26px] hover:left-0 hover:top-3 transition-all left-[12px] top-0 absolute bg-zinc-800 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="justify-center items-center gap-[9px] inline-flex">
                      <h4 className="text-center text-white text-lg font-bold font-Syncopate uppercase leading-[19.10px] text-[14px] flex justify-between items-center gap-2">
                        ABOUT AGENCY
                        <Image src={arrow} className=" w-4 h-4" alt="arrow" />
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[5.6rem] h-auto  bg-white border-2 ten:flex  mac:flex border-black hidden xl:flex justify-center items-center relative "></div>
      </div>
    </div>
  );
}

export default Solutions;
