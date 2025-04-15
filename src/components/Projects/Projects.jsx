import React from 'react'
import ProjectCard from '../Cards/Project Card/project_card'
import projects_demodata from '../../Data/projectsData';
import useScrollFadeIn from '../../Hooks/Scroll';

function Projects() {
  const projectCardRef = useScrollFadeIn({ direction: 'y'}) 
  

  return (
    <>
        <div className="px-[2.78vw] w-full">
          <div ref={projectCardRef} className="grid grid-cols-2 px-[15vw] gap-x-[15vw] gap-y-[7vw] lg:grid-cols-3 lg:gap-x-[3.89vw] lg:gap-y-[5.56vw] mt-[7.78vw] lg:px-[10vw]">
              {projects_demodata.map((project, index) => (
                  <ProjectCard
                  key={index}
                  p_id={project.p_id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  completetag={project.completetag}
                  />
              ))}
          </div>
        </div>
    </>
    
  );
}

export default Projects