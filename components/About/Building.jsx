import React from "react";
function Building() {
  return (
    <div className=" flex justify-between bg-[#F4F4F4] w-full">
      <div className=" bg-gradient-to-t from-[#e2bef8] to-transparent ten:flex  mac:flex w-[5.6rem] h-auto border-2 border-black border-b-0 justify-center items-center hidden xl:flex">
        <h1 className="rotate-[270deg] text-nowrap whitespace-nowrap absolute  ten:absolute text-[20px] font-Syncopate font-bold">
          WHO WE ARE
        </h1>
      </div>
      <div className=" xl:flex ten:flex  mac:flex justify-between items-center gap-20 pt-28 p-2 xl:p-20 ten:p-20 border-2 border-black w-full">
        <hr className="border-b-4 xl:hidden ten:hidden mac:hidden  text-black text-3xl border-black bg-black" />

        <h1 className=" xl:hidden ten:hidden mac:hidden  font-bold text-center py-4 font-Syncopate">
          WHO WE ARE
        </h1>
        <hr className="border-b-4 xl:hidden ten:hidden mac:hidden  text-black mb-4 text-3xl border-black bg-black" />
        <div className=" w-full flex flex-col gap-20">
          <p className=" font-RobotoMono p-4 xl:text-[20px] font-normal">
            <span className=" font-bold">What Sets Us Apart: </span>
            Our holistic approach distinguishes us. From strategic business
            consulting and market research to web and app development, digital
            marketing, and creative media production, we offer a comprehensive
            suite of services. Each crafted with precision, executed with
            agility, and designed to elevate your brand to new heights.
          </p>
          <p className=" font-RobotoMono xl:text-[20px] p-4 font-normal">
            <span className=" font-bold">Our Vision:</span> To redefine success
            for businesses through a seamless integration of marketing
            strategies and cutting-edge technology, ensuring they not only
            thrive in the digital landscape but shape it.
          </p>
        </div>
        <div className=" p-4 w-full">
          <p className=" font-RobotoMono xl:text-[20px] font-normal">
            At Kyoto Creative Co., we transcend the conventional boundaries of
            business solutions, ushering in a new era of transformative
            excellence. Founded on the principles of innovation, collaboration,
            and a relentless pursuit of excellence, we stand as a dynamic force
            at the intersection of marketing brilliance and technological
            innovation.
          </p>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-[#C6E3FF] to-transparent w-[5.6rem] ten:flex  mac:flex  h-auto border-2 border-black border-b-0 justify-center items-center hidden xl:flex "></div>
    </div>
  );
}

export default Building;
