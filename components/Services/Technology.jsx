import React from "react";
import rocket from "../../images/Rocket.png";
import phone from "../../images/Phone.png";
import globe from "../../images/BlueGlobe.svg";
import clients from "../../images/ClientLogo.png";
import VideoIcon from "../../images/VideoIcon.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
function Technology() {
  return (
    <div>
      <div className=" flex justify-between bg-[#FFCEF7]">
        <div className="w-[5.55rem] h-auto border-2 border-black border-b-0 hidden ten:flex  mac:flex xl:flex justify-center items-center ">
          <h1 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
            What We Can Do For You
          </h1>
        </div>
        <div className=" w-full border-2 border-black border-b-0">
          <div className=" flex justify-center items-center xl:p-20 pb-10">
            <div>
              <h1 className=" xl:text-[40px] text-2xl font-Syncopate uppercase font-bold">
                Technology
              </h1>
            </div>
            <Image src={globe} alt="globe" />
          </div>
          <div className=" w-full xl:flex justify-center pb-20 border-l-2 border-r-2 border-black">
            <div className=" w-full xl:grid xl:grid-cols-3 ten:grid ten:grid-cols-3 mac:grid mac:grid-cols-3">
              <div className="border-black  border-4 flex justify-center items-center px-16 aspect-square  border-l-0 border-r-0 relative">
                <div>
                  <Image
                    src={rocket}
                    className=" absolute top-[-3rem] left-6"
                    alt="rocket"
                  />
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Custom App Development
                  </h1>
                  <p className=" font-RobotoMono">
                    Crafting tailored apps that define your uniqueness in the
                    digital landscape.
                  </p>
                </div>
              </div>
              <div className="border-black border-4 flex justify-center items-center px-16 aspect-square    relative  border-r-0">
                <div>
                  <div className=" bg-[#FFF969] w-[92px] h-[92px] absolute top-[-3rem] left-6 rounded-full border-l-4 border-black flex justify-center">
                    <Image src={phone} alt="phone" />
                  </div>
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Next-Gen Technologies Integration
                  </h1>
                  <p className=" font-RobotoMono">
                    Elevating your business with seamless integration of
                    cutting-edge technologies.
                  </p>
                </div>
              </div>
              <div className="border-black border-4 flex justify-center items-center px-16 aspect-square   relative border-r-0">
                <div>
                  {" "}
                  <div className=" bg-white w-[92px] h-[92px] absolute top-[-3rem] items-center left-6 rounded-full  flex justify-center">
                    <Image src={VideoIcon} alt="video" />
                  </div>
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Responsive Web Development
                  </h1>
                  <p className=" font-RobotoMono">
                    Shaping immersive online experiences with visually stunning
                    and responsive websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[5.55rem] h-auto border-2 border-b-0 ten:flex  mac:flex border-black hidden xl:flex justify-center items-center "></div>
      </div>
      <Marquee>
        <Image src={clients} alt="clients" />
      </Marquee>
    </div>
  );
}

export default Technology;
