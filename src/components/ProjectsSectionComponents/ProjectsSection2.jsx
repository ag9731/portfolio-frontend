import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayAllProjects } from "../../features/projects/projectsSlice";
import { FaArrowRight } from "react-icons/fa";

const ProjectsSection2 = () => {
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("ReactJS");
  const categories = ["ReactJS", "Wordpress"];

  useEffect(() => {
    dispatch(displayAllProjects());
  }, [dispatch]);

  return (
    <div className="w-full mt-18 px-4">
      {/* Category Buttons */}
      <div className="container mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-3 rounded-full cursor-pointer text-center text-white transition-all duration-300 
              ${
                activeTab === cat
                  ? "bg-[#344c36]"
                  : "bg-gray-500 hover:bg-[#344c36]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-18">
        {projects
          ?.filter((project) => project.projectCategory === activeTab)
          .map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 transition-all duration-500 
              transform hover:-translate-y-2 animate-fadeIn"
            >
              {/* Project Image */}
              {project.image.map((img) => (
                <img
                  key={img._id}
                  src={img.url}
                  alt={project.projectName}
                  className="w-full rounded-lg border-2 object-cover max-h-[250px]"
                />
              ))}

              {/* Bottom Section */}
              <div className="flex flex-col sm:flex-row mt-6 items-start sm:items-center justify-between gap-4">
                <h1 className="font-semibold text-[#344c36] text-xl">
                  {project.projectName}
                </h1>

                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <button className="bg-[#344c36] text-white px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:opacity-90">
                    <div className="flex items-center gap-2">
                      <p>Visit Site</p>
                      <FaArrowRight className="rotate-[320deg] transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsSection2;
