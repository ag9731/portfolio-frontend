import React from "react";

const ProjectsHeroSection = () => {
  return (
    <div className="mt-10 sm:mt-16 lg:mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Title Row */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* <div className="w-8 sm:w-12 h-[4px] bg-[#fab42e]"></div>
          <p className="text-[16px] sm:text-[20px] md:text-[22px] py-1">
            My Portfolio
          </p> */}
        </div>

        {/* Heading + Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-center sm:text-left">
            My Latest{" "}
            <span className="text-[#fab42e] font-normal italic">Projects</span>
          </h1>

          {/* <button className="bg-[#344c36] text-white px-6 py-3 rounded-full hover:opacity-90 transition w-full sm:w-auto text-center">
            View All Projects
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeroSection;
