import React from "react";

const SkillsHeadSection = () => {
  return (
    <div className="mt-10 md:mt-18">
      <div className="container mx-auto px-4">
        {/* Small title */}
        <div className="flex items-center justify-center">
          <div className="w-6 md:w-8 h-[4px] bg-[#fab42e]"></div>
          <p className="text-[18px] md:text-[22px] px-4 py-1">Skills</p>
        </div>

        {/* Main Headings */}
        <div className="flex flex-col justify-center gap-4 mt-4 md:mt-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#fab42e] italic text-center font-semibold">
            Tools I Work With Everyday
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-poppins mb-10">
            My Tech Stack
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SkillsHeadSection;
