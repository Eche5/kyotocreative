import Image from "next/image";
import React from "react";
import footer from "../../images/HomePageFooter.png";
import start from "../../images/Star7.png";
import star from "../../images/Star1.svg";
import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <Marquee>
      <div className=" flex justify-between w-full border-2 border-black items-center">
        <Image src={star} alt="star" />
        <Image src={footer} className=" w-[80%]" alt="footer" />
        <div className=" relative">
          <h2 className="absolute rotate-[-30.447deg] top-12 left-4 right-20 text-[0.7rem] font-Syncopate font-bold">
            Agency
          </h2>
          <Image src={start} className=" w-20 h-20 " alt="star" />
        </div>
      </div>
    </Marquee>
  );
}

export default Footer;
