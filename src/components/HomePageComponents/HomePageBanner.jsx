import React from "react";
import akashBanner from "../../assets/akashbanner.webp";
import HomePageSliderBelowBanner from "./HomePageSliderBelowBanner";

const HomePageBanner = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto mt-20 flex flex-col-reverse md:flex-row px-4 justify-between items-center md:items-start gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-start text-center md:text-left">
          <p className="text-[18px] md:text-[22px] border-2 px-4 py-1 rounded-lg mx-auto md:mx-0">
            Hello There!
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px]">
            I'm{" "}
            <span className="underline text-[#fab42e] italic">Akash MG</span>,
            Web Developer Based in India
          </h1>

          <p className="text-[#5c5c5c] font-poppins text-[16px] md:text-[18px]">
            Web Developer with 2+ years of experience in Frontend, Full-Stack,
            and WordPress development.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-3">
            <button className="bg-[#344c36] text-white px-6 py-3 rounded-full w-full md:w-auto">
              Download Resume
            </button>
            <button className="px-6 py-3 rounded-full border border-black w-full md:w-auto">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={akashBanner}
            className="w-[260px] sm:w-[300px] md:w-[380px] lg:w-[420px]"
            alt="banner-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
