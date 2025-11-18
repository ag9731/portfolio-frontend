import React from "react";

const ServicePageHeadSection = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-4">
        {/* Top Small Title */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-[5px] bg-[#fab42e]"></div>
          <p className="text-[18px] md:text-[22px] px-2 py-1">Services</p>
        </div>

        {/* Heading + Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mt-4">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            <span className="text-[#fab42e] italic font-normal">Services</span>{" "}
            I Provide
          </h1>

          {/* Button */}
          <button className="bg-[#344c36] text-white px-6 py-3 rounded-full w-full md:w-auto text-center">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHeadSection;
