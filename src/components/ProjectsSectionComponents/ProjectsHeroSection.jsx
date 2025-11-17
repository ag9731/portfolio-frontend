import React from "react";

const ProjectsHeroSection = () => {
  return (
    <div className="mt-18">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          <div className="w-10 h-[5px] bg-[#fab42e]"></div>
          <p className="text-[22px] px-4 py-1">My Portfolio</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className=" text-4xl font-semibold">
              My Latest
              <span className="text-[#fab42e] font-normal text-4xl italic">
                {" "}Projects
              </span>
            </h1>
          </div>
          <div>
            <button className="bg-[#344c36] text-white px-6 cursor-pointer py-3 rounded-full">
             View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeroSection;
