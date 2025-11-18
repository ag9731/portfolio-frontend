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
    <div className="mt-20 px-4">
      <div className="container mx-auto">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex 
                flex-col 
                items-start 
                rounded-3xl 
                p-6 
                sm:p-8 
                bg-[#f5f5f5] 
                gap-5
                hover:shadow-xl 
                transition-all 
                duration-300
              "
            >
              <div className="text-primary border border-[#fab42e] rounded-full p-4 bg-white">
                {service.serviceIcon}
              </div>

              <h1 className="uppercase font-semibold text-xl sm:text-2xl">
                {service.serviceName}
              </h1>

              <p className="text-[#5c5c5c] font-poppins text-[15px] sm:text-[16px]">
                {service.serviceDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection2;
