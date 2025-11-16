import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../../features/projects/projectsSlice";

const ProjectsComponent = () => {
  const [projectName, setProjectName] = useState(null);
  const [projectImage, setProjectImages] = useState(null);

  const { loading, error, projects, success } = useSelector(
    (state) => state.project
  );
  const dispatch = useDispatch();

  const formData = new FormData();
  formData.append("projectName", projectName);
  projectImage.forEach((file) => formData.append("image", file));
  dispatch(createProject(formData));

  const handleSelectFiles = (e) => {
    const files = Array.from(e.target.files);
    setProjectImages(files);
  }

  return (
    <>
      <div className="flex flex-col  items-center gap-4">
        <label>Project Name</label>
        <input
          type="text"
          className="border-2 p-2"
          value={projectName}
          onChange={(e) => e.target.value}
        />
        <label>Project Image</label>
        <input
          type="file"
          className="border-2 p-2"
          id="file"
          onChange={handleSelectFiles}
          multiple={true}
        />
        <button className="border-2">Submit</button>
      </div>
    </>
  );
};

export default ProjectsComponent;
