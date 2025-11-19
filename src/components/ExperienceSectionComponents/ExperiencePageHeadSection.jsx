import React from 'react'

const ExperiencePageHeadSection = () => {
  return (
    <div className="mt-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-4 h-[5px] bg-[#fab42e]"></div>
          <p className="text-[22px] px-4 py-1">Experience</p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <h1 className=" text-4xl text-center font-semibold">
            My <span className="text-[#fab42e] italic">Academic And Profesional</span>{" "}
            Journey
          </h1>
          {/* <h1 className="text-center text-4xl font-bold font-poppins mb-10">
            My Tech Stack
          </h1> */}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePageHeadSection
