import React from "react";
import akashBanner from "../../assets/akashbanner.webp";
import HomePageSliderBelowBanner from "./HomePageSliderBelowBanner";

const HomePageBanner = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto mt-24 flex px-4 justify-center items-start ">
        {/* LEft Section */}
        <div className="w-[35%] flex flex-col gap-7 items-start">
          <div>
            <p className="text-[22px] border-2 px-4 py-1">Hello There!</p>
          </div>
          <div>
            <h1 className="text-5xl font-semibold leading-16">
              I'm{" "}
              <span className="underline text-[#fab42e] italic">Akash MG</span>,
              Web Developer Based in India
            </h1>
          </div>
          <div>
            <p className="text-[#5c5c5c] font-poppins">
              Web Developer with 2+ years of experience in Frontend, Full-Stack,
              and WordPress development.
            </p>
          </div>
          <div className="flex gap-6">
            <button className="bg-[#344c36] text-white px-6 cursor-pointer py-3 rounded-full">
              Download Resume
            </button>
            <button className="px-6 py-3 rounded-full border-1 cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-[75%] flex justify-center items-start">
          <img src={akashBanner} className="w-full max-w-[380px]" alt="" />
        </div>
        <div>
          {/* <HomePageSliderBelowBanner/> */}
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
