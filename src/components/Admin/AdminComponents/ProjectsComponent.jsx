import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../../features/projects/projectsSlice";

const ProjectsComponent = () => {
  const [projectName, setProjectName] = useState(null);
  const [projectImage, setProjectImages] = useState([]);
  const [projectLink, setProjectLink] = useState(null);
  const [projectCategory, setProjectCategory] = useState(null);

  const { loading, error, projects , success} = useSelector(
    (state) => state.projects
  );
  // const loading = useSelector((state) => state.projects.loading);
  // const error = useSelector((state) => state.projects.error);
  const dispatch = useDispatch();


  const handleSubmit = () => {
  const formData = new FormData();
  formData.append("projectName", projectName);
  formData.append("projectLink",projectLink);
  formData.append("projectCategory", projectCategory);
  projectImage.forEach((file) => formData.append("image", file));
  dispatch(createProject(formData));
  }

  const handleSelectFiles = (e) => {
    const files = Array.from(e.target.files);
    setProjectImages(files);
  }

  const categories = ["ReactJS", "Wordpress", "NextJS", "Other"];

  return (
    <>
      <div className="flex flex-col  items-center gap-4">
        <label>Project Name</label>
        <input
          type="text"
          className="border-2 p-2"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        {/* Projefct Link */}
        <label>Project Link</label>
        <input
          type="text"
          className="border-2 p-2"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

         {/* Project Category - Radio Buttons */}
        <label className="mt-3">Project Category</label>
        <fieldset className="border p-3 w-64">
          <legend>Select Category</legend>

          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <input
                type="radio"
                id={cat}
                name="projectCategory"
                value={cat}
                checked={projectCategory === cat}
                onChange={(e) => setProjectCategory(e.target.value)}
              />
              <label htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </fieldset>

        <label>Project Image</label>
        <input
          type="file"
          className="border-2 p-2"
          id="file"
          onChange={handleSelectFiles}
          multiple={true}
        />
        <button className="border-2" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default ProjectsComponent;
