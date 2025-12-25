import { PROJECTS } from "../data/projects"
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
    window.scrollTo(0, 0);
  return (
    <div className="w-4/5 mx-auto my-5 p-2 bg-sky-900/50 rounded-2xl content-center">
        {PROJECTS && PROJECTS.map(project => (
            <ProjectCard name={project.name} description={ project.description} image={project.image} skills={project.skills} link={project.link} />
        ))}
    </div>
  )
}

export default Projects