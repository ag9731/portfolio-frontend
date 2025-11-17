import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayAllProjects } from "../../features/projects/projectsSlice";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectsSection2 = () => {
  const { loading, error, success, projects } = useSelector(
    (state) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayAllProjects());
  }, [dispatch]);

  return (
    <div className="w-full mt-18">
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {projects.map((project, index) => {
          return (
            <div className="">
              {project.image.map((img) => (
                <img
                  className="w-[100%] max-w-[450px] border-2"
                  key={img._id}
                  src={img.url}
                  alt={project.projectName}
                />
              ))}
              <div className="flex mt-10 items-center gap-20">
                <h1 className="font-semibold text-[#fab42e] font-[19px]">
                  {project.projectName}
                </h1>
                <a href={project.projectLink}>
                  <button className="bg-[#344c36] text-white px-6 cursor-pointer py-3 rounded-full">
                    <div className="flex items-center gap-4">
                      <div>
                        <p>Visit Site</p>
                      </div>
                      <div>
                        <FaArrowRight className="rotate-[320deg]" />
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection2;
