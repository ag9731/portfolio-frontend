import React from "react";

const ProjectsHeroSection = () => {
  return (
    <div className="mt-18">
      <div className="container mx-auto px-4">
        {/* Top Title Row */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="w-8 sm:w-10 h-[5px] bg-[#fab42e]"></div>
          <p className="text-[18px] sm:text-[22px] px-2 sm:px-4 py-1">
            My Portfolio
          </p>
        </div>

        {/* Heading + Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug text-center sm:text-left">
            My Latest
            <span className="text-[#fab42e] font-normal italic ml-2">
              Projects
            </span>
          </h1>

          <button className="bg-[#344c36] text-white px-6 py-3 rounded-full hover:opacity-90 transition text-center w-full sm:w-auto">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeroSection;
