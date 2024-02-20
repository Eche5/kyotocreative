import Image from "next/image";
import React from "react";
import poke from "../../images/pokemon.png";
import verify from "../../images/Verified.png";
import speed from "../../images/Speed.png";
import idea from "../../images/Idea.png";
import diamond from "../../images/Diamond.png";
import App from "../../images/Application.png";

function BusinessDevelopment() {
  return (
    <div className=" flex justify-between bg-[#FEFFCC]">
      <div className="w-[5.55rem] h-auto border-2 border-black border-b-0 hidden ten:flex  mac:flex xl:flex justify-center items-center ">
        <h1 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
          What We Can Do For You
        </h1>
      </div>
      <div className=" w-full">
        <div className="h-auto border-2 w-full border-black border-b-0">
          <div className=" flex justify-center gap-20 items-center xl:p-20 ten:p-20 mac:p-20 py-10">
            <Image src={poke} alt="poke" />
            <div>
              <h1 className=" xl:text-[40px] font-Syncopate uppercase font-bold">
                Business & Development
              </h1>
            </div>
          </div>
          {/* { <p></p> */}
          <div className=" w-full xl:grid h-auto grid-cols-3 ten:grid ten:grid-cols-3 mac:grid mac:grid-cols-3 pb-20">
            <div className="border-black bg-white border-4 flex justify-center items-center px-16 aspect-square  border-l-0 border-r-0 relative">
              <div>
                <Image
                  src={diamond}
                  className=" absolute top-[-3rem] left-6"
                  alt="diamond"
                />
                <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Strategic Business Consulting
                </h1>
                <p className=" font-RobotoMono">
                  Providing insights and strategies that align with your
                  business goals for sustainable growth.
                </p>
              </div>
            </div>
            <div className="border-black border-4 flex justify-center items-center px-16 aspect-square   bg-[#FFE3CE] relative  border-r-0">
              <div>
                <div className=" bg-[#FFF969] w-[92px] h-[92px] absolute top-[-3rem] left-6 rounded-full border-l-4 border-black flex justify-center">
                  <Image src={poke} alt="poke" />
                </div>
                <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Market Research and Analysis
                </h1>
                <p className=" font-RobotoMono">
                  Staying ahead with in-depth market insights, customer
                  behavior, and competitive landscapes.
                </p>
              </div>
            </div>
            <div className="border-black bg-white border-4 flex justify-center items-center px-16 aspect-square   relative border-r-0">
              <div>
                {" "}
                <div className=" bg-white w-[92px] h-[92px] absolute top-[-3rem] items-center left-6 rounded-full  flex justify-center">
                  <Image src={verify} alt="verify" />
                </div>
                <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Integrated Marketing and Technology Solutions
                </h1>
                <p className=" font-RobotoMono">
                  Seamlessly blending marketing and technology for holistic
                  business success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full xl:flex ten:flex  mac:flex justify-center pb-20 border-l-2 border-r-2 border-black">
          <div className=" w-full xl:grid grid-cols-3 ten:grid ten:grid-cols-3 mac:grid mac:grid-cols-3">
            <div className="border-black bg-white border-4 flex justify-center items-center px-16 aspect-square  border-l-0 border-r-0 relative">
              <div>
                <Image
                  src={App}
                  className=" absolute top-[-3rem] left-6"
                  alt="App"
                />
                <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Staff Augmentation Services
                </h1>
                <p className=" font-RobotoMono">
                  Accessing skilled professionals to augment your team for
                  project success.
                </p>
              </div>
            </div>
            <div className="border-black border-4 bg-white flex justify-center items-center px-16 aspect-square relative  border-r-0">
              <div>
                <div className=" bg-[#FFF969] w-[92px] h-[92px] absolute top-[-3rem] left-6 rounded-full border-l-4 border-black flex justify-center">
                  <Image src={speed} alt="speed" />
                </div>
                <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Business Process Optimization
                </h1>
                <p className=" font-RobotoMono">
                  Enhancing efficiency and productivity through streamlined
                  workflows.
                </p>
              </div>
            </div>
            <div className="border-black border-4 bg-white flex justify-center items-center px-16 aspect-square   relative border-r-0">
              <div>
                <div className=" bg-white w-[92px] h-[92px] absolute top-[-3rem] items-center left-6 rounded-full  flex justify-center">
                  <Image src={idea} alt="idea" />
                </div>
                <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Growth Strategy and Implementation
                </h1>
                <p className=" font-RobotoMono">
                  Developing and implementing strategies for sustained business
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[5.55rem] h-auto border-2 ten:flex  mac:flex border-black border-b-0 hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default BusinessDevelopment;
