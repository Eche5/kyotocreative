import React from "react";
import arrow from "../../images/arrow.png";

import contact from "../../images/Contact.png";
import Image from "next/image";
import HubspotContactForm from "./HubspotContactForm";
function ContactForm() {
  return (
    <div className=" flex justify-between ">
      <div className=" bg-gradient-to-t from-[#e2bef8]  to-transparent w-[5.5rem] ten:flex  mac:flex h-auto border-2 border-black border-b-0 hidden xl:flex justify-center items-center "></div>
      <div className=" w-full border-2 border-black flex flex-col gap-20 ten:p-20 py-10">
        <div className=" flex justify-center">
          <div className=" xl:w-[968px] ten:w-[968px] mac:w-[968px] w-full h-[773px] bg-[#FFE3CE] border-2 border-black   p-4 gap-8">
            <HubspotContactForm
              region="na1"
              portalId="44999423"
              formId="ce574a60-d5f7-4dcb-89a4-88912702e578"
            />
          </div>
        </div>
        <div className=" xl:flex ten:flex  mac:flex justify-center grid grid-cols-1  xl:gap-20 ten:gap-20 mac:gap-20 gap-10 px-4 ">
          <div className="  relative border-2 border-l-8 border-b-8 border-black">
            <div className=" bg-white xl:p-8 p-4">
              <h1 className=" text-[40px] font-Syncopate font-bold">PHONE</h1>
              <p className=" font-Syncopate font-semibold xl:text-[20px] py-1 ">
                Our Line is open<br></br> from Mon-Fri, 10:00 am to<br></br>
                6:00pm
              </p>
              <p className="font-RobotoMono xl:text-[20px] border-2 border-black font-normal p-1 mb-4 uppercase">
                <a href="tel:+917031853012">
                  <span>India Office&nbsp;-&nbsp;</span>
                  <span>+91 7031853012</span>
                </a>
              </p>
              <p className="font-RobotoMono xl:text-[20px] border-2 border-black font-normal p-1 uppercase">
                <a href="tel:+13159617210">
                  <span>USA office&nbsp;-&nbsp;</span>
                  <span>+1 (315) 961-7210</span>
                </a>
              </p>
            </div>
          </div>
          <div className="  relative border-2 border-l-8 border-b-8 border-black">
            <div className=" bg-white xl:p-8 p-4">
              <h1 className=" text-[40px] font-Syncopate font-bold">E-MAIL</h1>
              <p className=" font-Syncopate font-semibold xl:text-[20px] py-1 ">
                Our Line is open<br></br> from Mon-Fri, 10:00 am to<br></br>
                6:00pm
              </p>
              <a
                href="mailto:business@kyotocreative.com"
                className="font-RobotoMono xl:text-[20px] border-2 border-black font-normal p-1 my-4 uppercase"
              >
                business@kyotocreative.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-[#C6E3FF] ten:flex  mac:flex to-transparent w-[5.55rem]  h-auto border-2 border-black border-b-0 hidden xl:flex justify-center items-center "></div>
    </div>
  );
}

export default ContactForm;
