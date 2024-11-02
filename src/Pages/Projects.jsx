import ProjectCard from "../components/Cards/Project Card/project_card";
import projects_demodata from "../Data/projects_demodata";

export default function Projects() {
  return (
    <div className="pt-36 lg:pt-28 ">
      <div className="flex items-center justify-center mb-6">
        <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
        <h2 className="text-2xl md:text-3xl text-center text-black font-medium font-['Inter'] mx-4">
          PROJECTS
        </h2>
        <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
      </div>

      {/* Projects Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {projects_demodata.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            completetag={project.completetag}
          />
        ))}
      </div>
    </div>
  );
}
