import React from "react";
import settings from "../images/SettingIcon.svg";
import speaker from "../images/Icon.svg";
import footer from "../images/HomePageFooter.png";
import globe from "../images/globe.svg";
import caser from "../images/case.png";

import Image from "next/image";

function HomeBackground() {
  return (
    <>
      <div className=" flex justify-between">
        <div className=" w-[5.6rem] h-auto   border-2 border-black hidden xl:flex ten:flex  mac:flex justify-center items-center relative ">
          <h2 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
            What We Can Do For You
          </h2>
        </div>
        <div className=" w-full border-2 border-black">
          <div className="  xl:flex xl:justify-center ten:flex  mac:flex mac:justify-center ten:justify-center  flex justify-between xl:gap-8 items-center   text-center">
            <div className=" xl:m-20 ten:m-20 m-10 mac:m-20">
              <h2 className=" xl:text-[40px] font-bold font-Syncopate">
                we can help you with
              </h2>
            </div>

            <Image src={settings} alt="settings" className=" w-20 h-20" />
          </div>
          <div className=" w-full xl:grid ten:grid mac:grid grid-cols-3 pb-20">
            <div
              id="top2bottom"
              className="border-black border-4 aspect-square flex justify-center items-center px-16 border-l-0 border-r-0 relative"
            >
              <div>
                <Image
                  src={speaker}
                  className=" absolute top-[-3rem] left-6"
                  alt="speaker"
                />
                <h2 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Online Marketing
                </h2>
                <p className=" font-RobotoMono">
                  Dive into tech excellence with Kyoto Creative Co. We transform
                  ideas into groundbreaking realities, offering cutting-edge
                  apps and robust backend systems. Explore limitless
                  possibilities with our tech-savvy team.
                </p>
              </div>
            </div>
            <div
              id="bottom2top"
              className="border-black border-4 aspect-square flex justify-center items-center px-16 bg-[#FFE3CE] relative  border-r-0"
            >
              <div>
                <div className=" bg-[#FFF969] w-[92px] h-[92px] absolute top-[-3rem] left-6 rounded-full border-l-4 border-black flex justify-center items-center">
                  <Image src={globe} alt="globe" className=" w-16 h-16" />
                </div>
                <h3 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Technology
                </h3>
                <p className=" font-RobotoMono">
                  Elevate your brand with Kyoto Creative Co.&apos;s strategic
                  marketing. We&apos; re storytellers, amplifying your market
                  presence. From research to digital marketing, we guide your
                  brand through the dynamic landscape, ensuring it stands out.
                </p>
              </div>
            </div>

            <div
              id="top2bottom"
              className="border-black border-4 aspect-square flex justify-center items-center px-16  relative border-r-0"
            >
              <div>
                <div className=" bg-white w-[92px] h-[92px] absolute top-[-3rem] items-center left-6 rounded-full border-4 border-black flex justify-center">
                  <Image
                    src={caser}
                    className=" w-[40px] h-[36px]"
                    alt="photo"
                  />
                </div>
                <h3 className=" uppercase text-[20px] font-bold font-Syncopate">
                  Business
                </h3>
                <p className=" font-RobotoMono">
                  Kyoto Creative Co. offers comprehensive solutions, seamlessly
                  blending marketing strategies, innovative tech solutions, and
                  business acumen. Whether you&apos; re a startup or an
                  established business, let&apos;s transform your vision into a
                  success story.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[5.6rem] h-auto  border-2 border-black ten:flex  mac:flex hidden xl:flex justify-center items-center relative "></div>
      </div>
    </>
  );
}

export default HomeBackground;
