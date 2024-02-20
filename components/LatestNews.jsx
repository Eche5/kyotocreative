"use client";
import React, { useEffect, useState } from "react";
import arrow from "../images/arrow.png";
import arrows from "../images/Vector (Stroke).png";
import buttons from "../images/Button.png";

import calender from "../images/icons8-calender-64.png";
import { compareDesc, format, parseISO } from "date-fns";

import Image from "next/image";
import Link from "next/link";
function LatestNews() {
  const [blog, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBlogs = async () => {
    try {
      const response = await fetch("/api/Blogs");
      const data = await response.json();
      if (response.ok) {
        setAllBlogs(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);
  const allBlogs = blog
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.created_at), parseISO(b.created_at))
    );

  const getDate = (created) => {
    const date = String(created);
    const newDate = parseISO(date);
    return newDate;
  };
  return (
    <div className=" flex justify-between bg-[#FED6A2] border-t-0 border-black">
      <div className=" w-[5.6rem] h-auto bg-[#FED6A2]  border-2 border-black hidden ten:flex  mac:flex xl:flex justify-center items-center relative ">
        <h4 className="rotate-[270deg] absolute text-nowrap text-[20px] font-Syncopate font-bold">
          NEWS
        </h4>
      </div>

      <div className=" w-full ten:p-20 mac:p-20  p-4 border-2 flex flex-col gap-20 border-black">
        <div className="flex flex-col text-center ">
          <h4 className=" font-Syncopate font-bold text-[#2d2d2d] xl:text-[40px] tracking-[0] leading-[47.6px] whitespace-nowrap">
            LATEST NEWS
          </h4>
          <p className="  font-RobotoMono text-center font-normal text-[#3d3d3d] xl:text-[20px]  tracking-[0] leading-[29.1px]">
            It is a long established fact that a reader
            <br className=" hidden xl:block"></br> will be distracted by the
            readable.
          </p>
        </div>

        <div className=" xl:flex justify-between ten:flex  mac:flex grid grid-cols-1 gap-8 items-center ">
          {loading && (
            <div
              id="blog"
              className=" xl:w-[30vw] ten:w-[30vw] mac:w-[30vw] h-[70vh]"
            ></div>
          )}{" "}
          {loading && (
            <div
              id="blog"
              className=" xl:w-[30vw] ten:w-[30vw] mac:w-[30vw]  h-[70vh]"
            ></div>
          )}{" "}
          {!loading && (
            <div className=" xl:w-[30vw] ten:w-[30vw] mac:w-[30vw]  border-8 border-t-0 border-r-0 border-black">
              <Image
                width={200}
                height={200}
                src={allBlogs[0]?.image}
                alt={allBlogs[0]?.title}
                className=" xl:w-[30vw] ten:w-[30vw] mac:w-[30vw] w-full h-[40vh] border-[#8DBAB6]  border-[40px]"
              />
              <div className=" bg-white h-[30vh] w-full">
                <div className=" grid grid-cols-2 items-center border-4 border-t-0 border-l-0 border-black px-10">
                  <Image src={calender} alt="calender" className=" h-8 w-8" />
                  {blog.length > 1 && (
                    <time className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
                      {format(
                        getDate(allBlogs[0]?.created_at),
                        "MMMM dd, yyyy"
                      )}
                    </time>
                  )}
                </div>
                <h3 className=" text-[25px] font-bold font-Syncopate p-2">
                  {allBlogs[0]?.title}
                </h3>
                <Link
                  target="_blank"
                  href={`https://kyotoblog.vercel.app/blogs/${blog[0]?.slug}`}
                >
                  <Image
                    src={buttons}
                    alt="button"
                    className=" float-right p-2 hover:scale-105 transition-all ease-in-out duration-150"
                  />
                </Link>
              </div>
            </div>
          )}
          {!loading && (
            <div className=" xl:w-[30vw] ten:w-[30vw]  mac:w-[30vw]">
              <Image
                width={200}
                height={200}
                src={allBlogs[1]?.image}
                alt={allBlogs[1]?.title}
                className=" xl:w-[30vw] mac:w-[30vw] w-full h-[40vh] border-[#8DBAB6]  border-[40px]"
              />
              <div className=" bg-white h-[40vh] w-full">
                <div className=" grid grid-cols-2 items-center border-4 border-t-0 border-l-0 border-black px-10">
                  <Image src={calender} alt="calender" className=" h-8 w-8" />
                  {blog.length > 1 && (
                    <time className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
                      {format(
                        getDate(allBlogs[1]?.created_at),
                        "MMMM dd, yyyy"
                      )}
                    </time>
                  )}
                </div>
                <h3 className=" text-[25px] font-bold font-Syncopate p-2">
                  {allBlogs[1]?.title}
                </h3>
                <Link
                  target="_blank"
                  href={`https://kyotoblog.vercel.app/blogs/${blog[0]?.slug}`}
                >
                  <Image
                    src={arrows}
                    alt="arrow"
                    className=" float-right p-2 hover:scale-105 transition-all ease-in-out duration-150"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link target="_blank" href="https://kyotoblog.vercel.app">
          <div className=" flex justify-center pt-20">
            <div className="w-[268px] h-[82.23px] relative">
              <div className="w-[257px] h-[72px] left-0 top-[10.23px] absolute bg-white border-2 border-zinc-800" />
              <div className="w-64 h-[71px] px-[35px] py-[26px] left-[12px] top-0 hover:left-0 hover:top-3 transition-all absolute bg-zinc-800 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="justify-center items-center gap-[9px] inline-flex">
                  <h4 className="text-center text-white text-lg font-bold font-Syncopate uppercase leading-[19.10px] text-[15px] flex justify-between items-center gap-2">
                    MORE BLOG
                    <Image src={arrow} className=" w-4 h-4" alt="arrow" />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" w-[5.6rem] h-auto bg-[#FED6A2]  border-2 ten:flex  mac:flex border-black hidden xl:flex justify-center items-center relative "></div>
    </div>
  );
}

export default LatestNews;
