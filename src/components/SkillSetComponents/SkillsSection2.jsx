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
    speed: 6000,
    cssEase: "linear", // smooth continuous scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      {/* <h1 className="text-center text-4xl font-bold font-poppins mb-10">
        My Skills
      </h1> */}

      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="px-4">
            <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 object-contain"
              />
              <p className="mt-4 font-semibold text-lg">{skill.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSection2;
