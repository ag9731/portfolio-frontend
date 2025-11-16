import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const headerMenu = [
    {
      menuName: "Home",
      menuLink: "#",
    },
    {
      menuName: "About",
      menuLink: "#",
    },
    {
      menuName: "Skill",
      menuLink: "#",
    },
    {
      menuName: "Experience",
      menuLink: "#",
    },
    {
      menuName: "Projects",
      menuLink: "#",
    },
  ];
  return (
    <div className="flex justify-center mt-6">
      <div className="container mx-auto flex bg-[#344c36] rounded-full px-4">
        {/* menu */}
        <div className="flex items-center justify-between w-full">
          <img src={logo} className="w-[90px]" alt="logo" />

          <ul className="flex gap-20 cursor-pointer">
            {headerMenu.map((item, index) => {
              return <li className="gap-6 text-white text-[17px ]">{item.menuName}</li>;
            })}
          </ul>
          <button className="bg-white px-6 py-3  rounded-full">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
