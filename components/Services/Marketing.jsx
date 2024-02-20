import React from "react";
import speaker from "../../images/1F4E2.png";
import speakers from "../../images/Icon.svg";
import globe from "../../images/globe.svg";
import caser from "../../images/case.png";
import Image from "next/image";
function Marketing() {
  return (
    <div className=" flex justify-between">
      <div className=" w-[5.5rem] h-auto border-b-0 ten:flex  mac:flex border-2 border-black hidden xl:flex justify-center items-center relative ">
        <h1 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
          What We Can Do For You
        </h1>
      </div>
      <div className=" w-full  h-auto border-2 border-black border-b-0">
        <div className=" flex justify-center items-center xl:p-20 xl:py-20 py-6">
          <Image src={speaker} className=" xl:w-40 w-40" alt="speaker" />
          <div>
            <h1 className=" xl:text-[40px] font-Syncopate uppercase font-bold">
              Digital Marketing
            </h1>
          </div>
        </div>
        <div className=" xl:flex grid grid-cols-1 ">
          <hr className="border-b-4 xl:hidden text-black text-3xl border-black bg-black" />

          <h1 className=" xl:hidden ten:hidden mac:hidden  font-bold text-center py-8 font-Syncopate">
            What We Can Do For You
          </h1>
          <hr className="border-b-4 xl:hidden ten:hidden mac:hidden  text-black text-3xl border-black bg-black" />
          <div className=" w-full xl:flex ten:flex  mac:flex justify-center pb-20 border-l-2 border-r-2 border-black">
            <div className=" w-full xl:grid xl:grid-cols-3 ten:grid ten:grid-cols-3 mac:grid mac:grid-cols-3">
              <div className="border-black aspect-square bg-white border-4 flex justify-center items-center px-16 border-l-0 border-r-0 relative">
                <div>
                  <Image
                    src={speakers}
                    className=" absolute top-[-3rem] left-6"
                    alt="speakers"
                  />
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Comprehensive Digital Marketing
                  </h1>
                  <p className=" font-RobotoMono">
                    Maximizing online visibility and driving targeted traffic
                    for business growth.
                  </p>
                </div>
              </div>
              <div className="border-black border-4 aspect-square bg-white flex justify-center items-center px-16  relative  border-r-0">
                <div>
                  <div className=" bg-[#FFF969] w-[92px] h-[92px] absolute top-[-3rem] left-6 rounded-full border-l-4 border-black flex justify-center">
                    <Image src={globe} alt="globe" />
                  </div>
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Strategic Brand Development
                  </h1>
                  <p className=" font-RobotoMono">
                    Crafting compelling brand stories that resonate and leave a
                    lasting impact.
                  </p>
                </div>
              </div>
              <div className="border-black border-4 bg-white flex justify-center items-center px-16 aspect-square  relative border-r-0">
                <div>
                  <div className=" bg-white w-[92px] h-[92px] absolute top-[-3rem] items-center border-4 border-black left-6 rounded-full  flex justify-center">
                    <Image src={caser} alt="caser" />
                  </div>
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Data-Driven Marketing Insights
                  </h1>
                  <p className=" font-RobotoMono">
                    Turning data into actionable insights for optimized
                    marketing strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white w-[5.5rem] h-auto ten:flex  mac:flex border-2 border-b-0 border-black hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default Marketing;
