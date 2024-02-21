import React from "react";
import photo from "../images/Photo.jpg";
import photo1 from "../images/Photo1.jpg";
import photo2 from "../images/gettyimages-476323574-612x612.jpg";
import fb from "../images/Fb.png";
import linkedin from "../images/icons8-linkedin-50.png";
import insta from "../images/Insta.png";
import Twitter from "../images/Twiter.png";
import circl from "../images/CircleIcon.png";
import arrow from "../images/arrow.png";

import Image from "next/image";
import Link from "next/link";
function Barner() {
  return (
    <div className=" flex justify-between bg-[#FFE3CE]">
      <div className=" w-[5.6rem] h-auto  border-2 bg-[#FFE3CE] border-black hidden xl:flex ten:flex  mac:flex justify-center items-center relative ">
        <div className=" flex flex-col items-center gap-4">
          <Link href="https://www.facebook.com/profile.php?id=61553632451913">
            <Image src={fb} alt="facebook" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/kyoto.creative.company"
          >
            <Image src={insta} alt="instagram" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/kyoto-creative-co/"
          >
            <Image src={linkedin} className=" w-8 h-8" alt="linkedIn" />
          </Link>
          {/* <Image src={Twitter} /> */}
        </div>
      </div>
      <div className=" flex justify-center w-full border-2 border-black relative xl:p-20 xl:pl-0 ten:py-10 mac:py-10">
        <div
          className="flex flex-col gap-10 p-10 xl:w-[616px] mac:w-[500px]"
          id="homepage"
        >
          <h2 className=" xl:text-[30px] text-2xl font-Syncopate font-bold uppercase">
            Crafting Tomorrow&apos;s Excellence in Marketing and Technology.
          </h2>
          <p className=" xl:text-[20px] font-RobotoMono font-normal  ">
            Apps & Campaigns can be made by anyone, but only we are capable of
            creating experiences that really use psychology and emotion.
          </p>
          <div className="w-[268px] h-[82.23px]  relative">
            <Link href="/Services">
              <div className="w-[257px] h-[72px] left-0 top-[10.23px] absolute bg-white border-2 border-zinc-800" />
              <div className="w-64 h-[71px] px-[35px] py-[26px] left-[12px] top-0 hover:left-0 hover:top-3 transition-all absolute bg-zinc-800 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="justify-center items-center gap-[9px] inline-flex">
                  <h2 className="text-center text-white text-lg font-bold text-nowrap font-Syncopate uppercase leading-[19.10px] text-[14px] flex justify-between items-center gap-2">
                    Get In Touch
                    <Image src={arrow} className=" w-4 h-4" alt="arrow" />
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="w-[522.08px] h-[533.78px] relative hidden xl:block ten:block mac:block"
          id="coursepage"
        >
          <div className="w-[472.08px] h-[481.78px] left-0 top-0 absolute">
            <Image className="w-[664px] h-[498px] " alt="photo" src={photo} />
          </div>
          <div className="w-[472.08px] h-[481.78px] left-4 top-4 absolute">
            <Image className="w-[664px] h-[498px]  " alt="photo" src={photo1} />
          </div>
          <div className="w-[472.08px] h-[481.78px] left-8 top-8 absolute">
            <Image className="w-[664px] h-[498px] " alt="photo" src={photo2} />
          </div>
        </div>
      </div>

      <div className=" w-[5.6rem] h-auto  border-2 bg-[#FFE3CE] border-black hidden xl:flex ten:flex mac:justify-center  mac:flex justify-center items-center relative ">
        <Image src={circl} className=" absolute right-10" alt="circle" />
      </div>
    </div>
  );
}

export default Barner;
