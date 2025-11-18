import React from "react";
import Slider from "react-slick";

const HomePageSliderBelowBanner = () => {
  const skillsSlider = [
    { skillName: "Website Designing" },
    { skillName: "Frontend Developer" },
    { skillName: "Fullstack Developer" },
    { skillName: "Website Developments" },
    { skillName: "Canva Editor" },
    { skillName: "Photoshop" },
  ];

  const settings = {
    autoplaySpeed: 0,
    centerMode: true,
    autoplay: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    // RESPONSIVE
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#fab42e] py-6 font-poppins flex justify-center">
      <div className="container mx-auto px-3">
        <Slider {...settings}>
          {skillsSlider.map((skills, index) => (
            <div key={index} className="text-center py-3">
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {skills.skillName}
              </h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageSliderBelowBanner;
