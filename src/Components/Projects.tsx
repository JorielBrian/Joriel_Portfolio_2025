import { PROJECTS } from "../data/projects"
import { motion } from "framer-motion";

const Projects = () => {
    window.scrollTo(0, 0);
  return (
    <div className="w-4/5 mx-auto my-5 p-2 bg-sky-900/50 rounded-2xl content-center">
        {PROJECTS && PROJECTS.map(project => (
            <div key={project.name} className="w-full p-2">
                <motion.h1 initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} transition={{ease:"easeInOut", duration:0.75}}  className="font-bold text-center lg:text-left text-3xl text-blue-600">{project.name}</motion.h1>
                <section className="lg:grid lg:grid-cols-2 lg:grid-rows-3">
                    <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{ease:"easeInOut", duration:0.75}}  className="lg:row-start-1 row-end-2 p-2">{project.description}</motion.p>
                    <motion.img initial={{opacity:0 , x: 100}} whileInView={{opacity: 1, x:0}} transition={{ease:"easeInOut", duration: 0.75}} src={project.image} alt={project.name} className="lg:row-start-1 lg:row-end-7 mx-auto rounded-xl"/>
                    <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{ease:"easeInOut", duration: 0.75}}  className="flex flex-wrap lg:row-start-2 lg:row-end-3 h-fit justify-start my-2">
                        {project.skills.map(skill => <p key={skill} className="w-fit m-1 min-w-5 p-1 rounded-xl text-center 2xl:px-3 bg-sky-900/50 2xl:rounded-2xl text-cyan-500">{skill}</p>)}
                    </motion.div>
                    {project.link && <motion.a href={project.link} target="_blank" initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ease:"easeInOut", duration: 0.75}}  className="lg:row-start-7 lg:row-end-8 lg:col-start-2 lg:col-end-3 text-center bg-cyan-500/50 p-1 px-3 h-fit rounded-2xl">Visit Site</motion.a>}
                </section>
            </div>
        ))}
    </div>
  )
}

export default Projects