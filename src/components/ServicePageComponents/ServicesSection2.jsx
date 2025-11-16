import React from "react";
import { FaCode, FaLaptopCode, FaSearch, FaBullhorn } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const ServicesSection2 = () => {
  const services = [
    {
      serviceIcon: <MdOutlineWeb size={40} />,
      serviceName: "Website Development",
      serviceDesc: "Lorem Ipsum dolor sit amet, consectur adipiscing",
    },
    {
      serviceIcon: <FaLaptopCode size={40} />,
      serviceName: "Frontend Developer",
      serviceDesc: "Lorem Ipsum dolor sit amet, consectur adipiscing",
    },
    {
      serviceIcon: <FaCode size={40} />,
      serviceName: "Fullstack Developer",
      serviceDesc: "Lorem Ipsum dolor sit amet, consectur adipiscing",
    },
    {
      serviceIcon: <FaBullhorn size={40} />,
      serviceName: "Digital Marketing",
      serviceDesc: "Lorem Ipsum dolor sit amet, consectur adipiscing",
    },
    {
      serviceIcon: <FaBullhorn size={40} />,
      serviceName: "UI/UX",
      serviceDesc: "Lorem Ipsum dolor sit amet, consectur adipiscing",
    },
    {
      serviceIcon: <FaSearch size={40} />,
      serviceName: "SEO",
      serviceDesc: "Lorem Ipsum dolor sit amet, consectur adipiscing",
    },
  ];

  return (
    <>
      {/* <div className="flex flex-col justify-center"> */}
      <div>
        <div className="grid grid-cols-3 mt-18 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-3xl p-8 bg-[#f5f5f5] gap-6"
            >
              <div className="text-primary border-1 border-[#fab42e]  rounded-full p-4 bg-white">
                {service.serviceIcon}
              </div>
              <h1 className="uppercase font-semibold text-2xl">
                {service.serviceName}
              </h1>
              <p className="text-[#5c5c5c] font-poppins">
                {service.serviceDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection2;
