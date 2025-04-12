import React, { useEffect } from 'react';
import Project_details from '../components/Cards/Project Card/project_details';
import useScrollFadeIn from '../Hooks/Scroll';
import backgroundImage from '/assets/Projects_Page/banner.png';
import projects_demodata from '../Data/projectsData';
import { useLocation } from 'react-router-dom';

function AllProjects() {
  const fadeRef = useScrollFadeIn({ fadeOnly: true, delay: 0.4 });
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Get the id from the hash
      const element = document.getElementById(id);
  
      // If the element is found, scroll to it with smooth behavior
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Offset by 100px (adjust as needed)
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return (
    <>  
      <div
        ref={fadeRef}
        className="mt-[92px] relative z-10 w-full py-24 text-white font-sans"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/40" />
        <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-white text-8xl font-medium font-['Poppins']">PROJECTS</h1>
          <div className="w-[360px] h-0 outline outline-2 outline-white"></div>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {projects_demodata.map((project, index) => (
          <div id={project.p_id} key={project.p_id}>
            <Project_details
              image={project.image}
              title={project.title}
              description={project.description}
              students={project.students}
              publications={project.publications}
              team={project.team}
              isEven={index % 2 === 0}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default AllProjects;