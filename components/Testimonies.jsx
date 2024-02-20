"use client";

import Image from "next/image";
import React from "react";
import Book from "../images/Book.svg";
import avatar from "../images/avatar.png";
import emoji from "../images/emoji-97.svg";
import rating from "../images/Rating.svg";
import education from "../images/Education.png";
import codemaster from "../images/2-removebg-preview.png";
import kibidi from "../images/Screenshot_43 1.png";
import househat from "../images/logo-white-new.png";
import man from "../images/photo-1472099645785-5658abf4ff4e-fotor-20240129133529.png";
import houselogo from "../images/logo1.png";
import minimalistic from "../images/Minimalist Modern Digital Marketing Logo.png";
import trans from "../images/Backgroundtrans.png";
import jane from "../images/fotor-2024012913293.png";
import whitebackground from "../images/Backgroundwhite.png";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Testimonies() {
  return (
    <div className=" relative">
      <div className=" flex justify-between bg-[#FFB9DB] ">
        <div className=" w-[5.6rem] h-auto  bg-[#C2F4FF] border-b-0  border-2 border-black hidden xl:flex ten:flex  mac:flex justify-center items-center relative ">
          <h4 className="rotate-[270deg] absolute text-nowrap text-[20px] font-Syncopate font-bold">
            Testimonials
          </h4>
        </div>
        <div className=" w-full flex flex-col   border-2 border-b-0 relative border-black py-10">
          <div className=" ">
            <div className=" flex justify-around md:gap-80">
              <Image src={Book} alt="book" />
              <Image src={emoji} alt="emoji" />
            </div>
          </div>
          <Carousel
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            emulateTouch={false}
            swipeable={false}
            preventMovementUntilSwipeScrollTolerance={true}
          >
            <div className=" xl:relative ten:relative ten:flex mac:relative  mac:flex xl:flex justify-center  md:h-96 ">
              <div className=" absolute top-8 sm:right-36 xl:right-[17rem] ten:right-[14rem] big:right-[25rem] mac:right-[9rem] xl:block ten:block mac:block hidden ">
                <Image
                  src={trans}
                  className=" md:w-[747px] md:h-[286px]"
                  alt="trans"
                />
              </div>
              <div className=" absolute top-4 sm:right-40 xl:right-72 ten:right-[15rem] mac:right-[10rem] big:right-[26rem] ten:block mac:block xl:block hidden  ">
                <Image
                  src={whitebackground}
                  className=" md:w-[747px] md:h-[286px]  "
                  alt="white"
                />
              </div>

              <div className=" xl:w-[747px] xl:h-[286px] w-full ten:w-[747px] ten:h-[286px] mac:w-[747px] mac:h-[286px] xl:absolute ten:absolute mac:absolute big:absolute   bg-black text-white xl:flex justify-center  items-center p-10 ">
                <div className=" xl:flex justify-between  ">
                  <div>
                    <div className=" xl:flex justify-between ten:flex  mac:flex ten:items-center ">
                      <div className=" flex gap-8 w-full">
                        <div className=" flex items-center gap-8">
                          <Image
                            src={avatar}
                            alt="avatar"
                            className=" md:w-8 md:h-8 w-12 h-12 "
                          />
                        </div>

                        <div className=" flex flex-col items-center">
                          <div className=" ">
                            <h4 className=" xl:text-[15px] ten:text-[15px] font-Syncopate uppercase ten:text-nowrap text-start">
                              Huilin Lee
                            </h4>
                            <p className=" xl:text-[14px] ten:text-[15px] font-normal text-nowrap">
                              CEO, Educare Taiwan
                            </p>
                          </div>

                          <div className=" md:hidden">
                            <Image
                              src={rating}
                              className=" w-4 h-8"
                              alt="rating"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" md:block hidden">
                        <Image
                          src={rating}
                          alt="rating"
                          className="  w-4 h-8"
                        />
                      </div>
                    </div>
                    <hr className="border-b-4 border-white my-4" />
                    <h4>
                      &quot; Working with Kyoto Creative Co. has been a
                      game-changer for our startup. Their tech-savvy team not
                      only delivered a flawless app but also brought innovative
                      ideas to the table. The tailored strategies and agile
                      development approach exceeded our expectations. Kyoto
                      Creative Co. isn&apos;t just a service provider;
                      they&apos; re an integral part of our success story&quot;
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* <p></p> */}
            <div className=" relative md:h-96 flex justify-center  ">
              <div className=" absolute top-8 sm:right-36 xl:right-[17rem] ten:right-[14rem] big:right-[25rem] mac:right-[9rem] xl:block ten:block mac:block hidden ">
                <Image
                  src={trans}
                  className=" md:w-[747px] md:h-[286px]"
                  alt="trans"
                />
              </div>
              <div className=" absolute top-4 sm:right-40 xl:right-72 ten:right-[15rem] mac:right-[10rem] big:right-[26rem] ten:block mac:block xl:block hidden  ">
                <Image
                  src={whitebackground}
                  className=" md:w-[747px] md:h-[286px]  "
                  alt="white"
                />
              </div>

              <div className=" xl:w-[747px] xl:h-[286px] ten:w-[747px] big:absolute ten:h-[286px] mac:w-[747px] mac:h-[286px] xl:absolute ten:absolute mac:absolute   bg-black text-white flex justify-center  items-center p-10 ">
                <div className=" flex justify-between  ">
                  <div>
                    <div className=" md:flex justify-between ten:flex  mac:flex ten:items-center  w-full">
                      <div className=" flex gap-8 w-full">
                        <div className=" flex items-center gap-8">
                          <Image
                            src={jane}
                            alt="avatar"
                            className=" md:w-8 md:h-8 w-12 h-12 "
                          />
                        </div>

                        <div className=" flex flex-col items-center">
                          <div className=" ">
                            <h4 className=" xl:text-[15px] ten:text-[15px] font-Syncopate uppercase ten:text-nowrap text-start">
                              JANE SMITH{" "}
                            </h4>
                            <p className=" xl:text-[14px] ten:text-[15px] font-normal text-nowrap">
                              InnovateTech Solutions{" "}
                            </p>
                          </div>

                          <div className=" md:hidden">
                            <Image
                              src={rating}
                              className=" w-4 h-8"
                              alt="rating"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" md:block hidden">
                        <Image
                          src={rating}
                          alt="rating"
                          className="  w-4 h-8"
                        />
                      </div>
                    </div>
                    <hr className="border-b-4 border-white my-4" />
                    <h4>
                      &quot;Kyoto Creative Co. is a beacon of excellence in the
                      tech world. Their attention to detail, commitment to
                      innovation, and user-centric approach set them apart. Our
                      collaboration resulted in a cutting-edge web platform that
                      not only meets but exceeds industry standards. Kudos to
                      the Kyoto Creative Co. team for their professionalism and
                      expertise!&quot;
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* <p></p> */}
            <div className=" relative md:h-96 flex justify-center  ">
              <div className=" absolute top-8 sm:right-36 xl:right-[17rem] ten:right-[14rem] mac:right-[9rem] big:right-[25rem] xl:block ten:block mac:block hidden ">
                <Image
                  src={trans}
                  className=" md:w-[747px] md:h-[286px]"
                  alt="trans"
                />
              </div>
              <div className=" absolute top-4 sm:right-40 xl:right-72 ten:right-[15rem] mac:right-[10rem] ten:block big:right-[26rem] mac:block xl:block hidden  ">
                <Image
                  src={whitebackground}
                  className=" md:w-[747px] md:h-[286px]  "
                  alt="white"
                />
              </div>

              <div className=" xl:w-[747px] xl:h-[286px] ten:w-[747px] ten:h-[286px] mac:w-[747px] mac:h-[286px] mac:absolute xl:absolute ten:absolute    bg-black text-white flex justify-center  items-center p-10 ">
                <div className=" flex justify-between  ">
                  <div>
                    <div className=" flex justify-between ten:flex  mac:flex ten:items-center  w-full">
                      <div className=" flex gap-8 w-full">
                        <div className=" flex items-center gap-8">
                          <Image
                            src={man}
                            alt="avatar"
                            className=" md:w-8 md:h-8 w-12 h-12 "
                          />
                        </div>

                        <div className=" flex flex-col items-center">
                          <div className=" ">
                            <h4 className=" xl:text-[15px] ten:text-[15px] font-Syncopate uppercase ten:text-nowrap text-start">
                              MICHAEL JOHNSON{" "}
                            </h4>
                            <p className=" xl:text-[14px] ten:text-[15px] font-normal text-nowrap">
                              CTO, DigitalInnovators Co.
                            </p>
                          </div>

                          <div className=" md:hidden">
                            <Image
                              src={rating}
                              className=" w-4 h-8"
                              alt="rating"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" md:block hidden">
                        <Image
                          src={rating}
                          alt="rating"
                          className="  w-4 h-8"
                        />
                      </div>
                    </div>
                    <hr className="border-b-4 border-white my-4" />
                    <h4>
                      &quot; Choosing Kyoto Creative Co. was the best decision
                      for our tech venture. Their proficiency in both marketing
                      and technology brought a holistic approach to our project
                      From the initial strategy sessions to the final product
                      launch, the Kyoto Creative Co. team demonstrated
                      unparalleled dedication and skill. We couldn&apos;t be
                      happier with the results.&quot;
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className=" w-[5.6rem] h-auto  bg-[#C2F4FF]  border-2 border-b-0 border-black hidden xl:flex ten:flex  mac:flex justify-center items-center relative "></div>
      </div>
      <Marquee>
        <div className=" flex h-40 w-full">
          <Image src={kibidi} className="  h-40 w-full" alt="kibidi" />
          <Image src={househat} className="  h-40 w-full" alt="househat" />
          <Image src={education} className="  h-40 w-full" alt="edu" />
          <Image src={codemaster} className="  h-40 w-full" alt="codemaster" />
          <Image src={minimalistic} className="  h-40 w-full" alt="minimal" />
          <Image src={houselogo} className="  h-40 w-full" alt="househat" />
        </div>
      </Marquee>
    </div>
  );
}

export default Testimonies;
