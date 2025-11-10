import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../features/projects/projectsSlice";

const Projects = () => {
  const [projectName, setProjectName] = useState("");
  const [image, setProjectImages] = useState([]);

  const projects = useSelector((state) => state.projects.projects);
  const loading = useSelector((state) => state.projects.loading);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!projectName || image.length === 0) {
      alert("Please fill all fields");
      return;
    }

    // create the form data
    const formData = new FormData();
    formData.append("projectName", projectName);
    image.forEach((file) => formData.append("image",file));
    dispatch(createProject(formData));
  };

  // handle file selection
  const handleSelectFiles = (e) => {
    const files = Array.from(e.target.files);
    setProjectImages(files);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name : </label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label>Upload Image : </label>
          <input
            id="file"
            type="file"
            onChange={handleSelectFiles}
            multiple={true}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>

    
  );
};

export default Projects;
