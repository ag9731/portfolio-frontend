import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayAllProjects } from '../../../features/projects/projectsSlice';

const ViewProjects = () => {

    const { loading, error, projects, success } = useSelector((state)=>state.projects)
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(displayAllProjects());
  }, [dispatch]);

  return (
    <div className='grid grid-cols-3'>
        {projects.map((project,index)=>{
            return(
                <div className='flex flex-col items-center gap-5 border-2 m-3'>
                <h1>All Projects</h1>
                <h1>{project.projectName}</h1>
                { project.image.map((img) => (
                    <img className='w-[100%] max-w-[150px]' key={img._id} src={img.url} alt={project.projectName} />
                )) }
              </div>
            )
        })}
    </div>
  )
}

export default ViewProjects