import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const headerMenu = [
    { menuName: "Home", menuLink: "#" },
    { menuName: "About", menuLink: "#" },
    { menuName: "Skill", menuLink: "#" },
    { menuName: "Experience", menuLink: "#" },
    { menuName: "Projects", menuLink: "#" },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div className="container mx-auto flex bg-[#344c36] rounded-full px-4 py-3">
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <img src={logo} className="w-[80px]" alt="logo" />

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-12">
            {headerMenu.map((item, index) => (
              <li
                key={index}
                className="text-white text-[17px] cursor-pointer hover:text-yellow-300 duration-200"
              >
                {item.menuName}
              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTON */}
          <button className="hidden md:block bg-white px-6 py-2 rounded-full font-semibold">
            Contact Me
          </button>

          {/* MOBILE HAMBURGER ICON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {openMenu && (
        <div className="absolute top-[90px] w-[90%] bg-[#344c36] text-white rounded-xl p-6 md:hidden shadow-md">
          <ul className="flex flex-col gap-5 text-lg">
            {headerMenu.map((item, index) => (
              <li
                key={index}
                className="hover:text-yellow-300 duration-200 cursor-pointer"
                onClick={() => setOpenMenu(false)} // close on select
              >
                {item.menuName}
              </li>
            ))}
          </ul>

          <button className="w-full mt-5 bg-white text-black py-2 rounded-full font-semibold">
            Contact Me
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
