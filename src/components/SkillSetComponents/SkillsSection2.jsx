import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import css from "../../assets/Skills/CSS.png";
import js from "../../assets/Skills/Javascript.png";
import html from "../../assets/Skills/html.png";
import DM from "../../assets/Skills/DM.png";
import jquery from "../../assets/Skills/jquery.png";
import mailchimp from "../../assets/Skills/mailchimp.png";
import reactjs from "../../assets/Skills/ReactJS.png";
import nextjs from "../../assets/Skills/Next.png";
import tailwindcss from "../../assets/Skills/tailwindcss.png";
import mern from "../../assets/Skills/MERN.png";
import wordpress from "../../assets/Skills/wordpress.png";

const SkillsSection2 = () => {
  const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: reactjs, name: "ReactJS" },
    { img: nextjs, name: "NextJS" },
    { img: tailwindcss, name: "Tailwind CSS" },
    { img: jquery, name: "Jquery" },
    { img: wordpress, name: "WordPress" },
    { img: mailchimp, name: "Mailchimp" },
    { img: DM, name: "Digital Marketing" },
    { img: mern, name: "MERN Stack" },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full py-10 px-3 sm:px-4 overflow-hidden">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="px-2">
            <div
              className="flex flex-col justify-center items-center bg-white 
              shadow-md hover:shadow-xl rounded-xl p-5 sm:p-6 transition"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
              />
              <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-lg text-center">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSection2;
