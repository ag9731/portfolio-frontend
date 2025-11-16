import React from "react";

const ServicePageHeadSection = () => {
  return (
    <div className="mt-18">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          <div className="w-10 h-[5px] bg-[#fab42e]"></div>
          <p className="text-[22px] px-4 py-1">Services</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className=" text-4xl font-semibold">
              <span className="text-[#fab42e] font-normal text-4xl italic">
                Services
              </span>{" "}
              I Provide
            </h1>
          </div>
          <div>
            <button className="bg-[#344c36] text-white px-6 cursor-pointer py-3 rounded-full">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHeadSection;
