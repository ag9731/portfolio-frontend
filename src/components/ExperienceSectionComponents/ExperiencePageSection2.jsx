import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const ExperiencePageSection2 = () => {
  return (
    <div className="w-full py-10 px-4 md:px-10 grid md:grid-cols-2 gap-10">
      {/* ---------------------- Education ---------------------- */}
      <div className="bg-white shadow-md rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black text-2xl">
            <FaGraduationCap />
          </div>
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        {/* Education Item 1 */}
        <div className="border-l-4 border-gray-300 pl-4 mb-6">
          <p className="text-sm text-gray-500">SEPTEMBER 2019 – JULY 2022</p>
          <h3 className="text-lg font-semibold">
            KLE Technological University, Hubli
          </h3>
          <p className="text-gray-600">Master Of Computer Application</p>
        </div>

        {/* Education Item 2 */}
        <div className="border-l-4 border-gray-300 pl-4">
          <p className="text-sm text-gray-500">MARCH 2016 – JULY 2019</p>
          <h3 className="text-lg font-semibold">
            JSS SMI UG and PG Studies, Dharwad
          </h3>
          <p className="text-gray-600">Bachelor Of Computer Application</p>
        </div>
      </div>

      {/* ---------------------- Experience ---------------------- */}
      <div className="bg-white shadow-md rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black text-2xl">
            <FaBriefcase />
          </div>
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </div>

        {/* Experience Item 1 */}
        <div className="border-l-4 border-gray-300 pl-4 mb-6">
          <p className="text-sm text-gray-500">APR 2025 – PRESENT</p>
          <h3 className="text-lg font-semibold">
            Web Developer — Bolster Legal (Cox Town, Bangalore)
          </h3>
          <p className="text-gray-600">
            Built and deployed responsive websites using HTML, CSS, React JS,
            and WordPress. Managed hosting & cPanel, created Canva mockups, and
            performed SEO optimization.
          </p>
        </div>

        {/* Experience Item 2 */}
        <div className="border-l-4 border-gray-300 pl-4">
          <p className="text-sm text-gray-500">FEB 2024 – MARCH 2025</p>
          <h3 className="text-lg font-semibold">
            Web Developer — Innomatrics Technologies (BTM Layout 2nd Stage,
            Bangalore)
          </h3>
          <p className="text-gray-600">
            Built and deployed responsive websites using HTML, CSS, React JS,
            and WordPress. Managed hosting, created Canva mockups, and ensured
            SEO optimization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePageSection2;
