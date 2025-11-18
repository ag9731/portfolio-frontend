import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#344c36] text-white py-4 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm italic">
          "Building websites one bug at a time." 😄
        </p>

        <p className="text-xs mt-2 opacity-80">
          © {new Date().getFullYear()} Akash MG
        </p>
      </div>
    </footer>
  );
};

export default Footer;
