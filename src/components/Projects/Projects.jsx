import React from 'react'
import ProjectCard from '../Cards/Project Card/project_card'
import projects_demodata from '../../Data/projectsData';
import useScrollFadeIn from '../../Hooks/Scroll';

function Projects() {
  const titleRef = useScrollFadeIn({ direction: 'y' });
  const projectCardRef = useScrollFadeIn({ direction: 'y'}) 

  return (
    <>
        <div className="px-10 w-full">
          <div ref={projectCardRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-20 mt-28 px-36">
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