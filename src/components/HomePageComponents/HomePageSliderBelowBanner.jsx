import React from "react";
import Slider from "react-slick";

const HomePageSliderBelowBanner = () => {
  const skillsSlider = [
    {
      skillName: "Website Designing",
    },
    {
      skillName: "Frontend Developer",
    },
    {
      skillName: "Fullstack Developer",
    },
    {
      skillName: "Website Developments",
    },
    {
      skillName: "Canva Editor",
    },
    {
      skillName: "Photoshop",
    },
  ];
  var settings = {
    // dots: true,
    autoplaySpeed:0,
    centerMode:true,
    autoplay:true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    easing:'',
    arrows:false,
  };
  return (
    <>
      <div className="bg-[]"></div>
      <div className="bg-[#fab42e] py-6 font-poppins flex justify-center">
        <div className="container mx auto">
          <Slider {...settings}>
            {skillsSlider.map((skills, index) => {
              return (
                <>
                  <div className="">
                    <h1 className="text-3xl font-semibold">
                      {skills.skillName}
                    </h1>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomePageSliderBelowBanner;
