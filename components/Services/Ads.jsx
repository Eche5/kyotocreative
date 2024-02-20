import React from "react";
import Image from "next/image";
import cash from "../../images/cash.svg";
import gallery from "../../images/Gallery.png";

import display from "../../images/display.svg";
import settings from "../../images/ServiceSettings.svg";
import Marquee from "react-fast-marquee";
function Ads() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" w-[5.5rem] h-auto border-t-0  border-2 border-black border-b-0  hidden xl:flex ten:flex  mac:flex justify-center items-center relative "></div>
        <div className=" w-full xl:flex ten:flex  mac:flex h-auto  border-2  border-b-0  border-black border-t-0">
          <div className=" w-full xl:flex justify-center pb-20 border-l-2 border-r-2 border-black">
            <div className=" w-full xl:grid xl:grid-cols-3 ten:grid ten:grid-cols-3 mac:grid mac:grid-cols-3">
              <div className="border-black bg-white border-4 flex justify-center items-center px-16 aspect-square  border-l-0 border-r-0 relative">
                <div>
                  <div className=" bg-white w-[92px] h-[92px] absolute top-[-3rem] items-center border-4 border-black left-6 rounded-full  flex justify-center">
                    <Image src={cash} alt="cash" />
                  </div>
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Creative Media Production
                  </h1>
                  <p className=" font-RobotoMono">
                    Engaging audiences with visually stunning and compelling
                    media content.
                  </p>
                </div>
              </div>
              <div className="border-black border-4 bg-white aspect-square flex justify-center items-center px-16  relative  border-r-0">
                <div>
                  <div className=" w-[92px] h-[92px] bg-white absolute top-[-3rem] left-6 rounded-full border-4 border-black flex justify-center">
                    <Image src={display} alt="display" />
                  </div>
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Social Media Management
                  </h1>
                  <p className=" font-RobotoMono">
                    Building and managing a strong social media presence to
                    enhance brand visibility.
                  </p>
                </div>
              </div>
              <div className="border-black border-4 bg-white flex justify-center items-center px-16 aspect-square  relative border-r-0">
                <div>
                  {" "}
                  <div className=" bg-white w-[92px] h-[92px] absolute top-[-3rem] items-center border-4 border-black left-6 rounded-full  flex justify-center">
                    <Image src={settings} alt="settings" />
                  </div>
                  <h1 className=" uppercase text-[20px] font-bold font-Syncopate">
                    Campaign Optimization and Analytics
                  </h1>
                  <p className=" font-RobotoMono">
                    Fine-tuning marketing campaigns for optimal performance
                    backed by analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[5.5rem] h-auto border-t-0 ten:flex  mac:flex border-2 border-b-0  border-black hidden xl:flex justify-center items-center relative "></div>
      </div>
      <Marquee>
        <Image src={gallery} alt="gallery" />
      </Marquee>
    </div>
  );
}

export default Ads;
