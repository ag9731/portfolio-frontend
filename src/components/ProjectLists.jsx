import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayAllProjects } from '../features/projects/projectsSlice';

const ProjectLists = () => {

    const {loading, error, projects} = useSelector((state)=>state.projects);
    const dispatch = useDispatch();
    
    // fetch all the projects
    useEffect(()=>{
        dispatch(displayAllProjects());
    }, [dispatch]);

    // handle loading and error status
    if(loading){
        return <p>Loading Projects</p>
    }

    if (error) {
      return <p className="text-red-500 text-center">Error: {error}</p>;
    }

  return (
    <div>
      <h1>projets list</h1>
      {projects && projects.length > 0 ? (
        projects.map((project)=>{
            return(
                <>
                <h1>{project.projectName}</h1>
                {/* <img src={project.image} alt={project.projectName} /> */}
                { project.image.map((img) => (
                    <img key={img._id} src={img.url} alt={project.projectName} />
                )) }
                </>
            ) 
        })
      ):(
        <h1>No Projects Found</h1>
      )}

    </div>
  )
}

export default ProjectLists
