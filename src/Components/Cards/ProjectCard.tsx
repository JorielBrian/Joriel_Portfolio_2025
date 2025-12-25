import { motion } from "framer-motion";
import SkillsUsed from "../SkillsUsed";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  skills: string[];
  link?: string;
}

function ProjectCard({name, description, image, skills, link}: ProjectCardProps) {
  return (
    <article key={name} className="w-full p-2">
        <motion.h1 initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} transition={{ease:"easeInOut", duration:0.75}}  className="font-bold text-center lg:text-left text-3xl text-blue-600">{name}</motion.h1>
        <section className="lg:grid lg:grid-cols-2 lg:grid-rows-3">
            <motion.p 
                initial={{opacity: 0, x: -100}} 
                whileInView={{opacity: 1, x: 0}} 
                transition={{ease:"easeInOut", duration:0.75}}  
                className="lg:row-start-1 row-end-2 p-2"
            >
                {description}
            </motion.p>
            <motion.img 
                initial={{opacity:0 , x: 100}} 
                whileInView={{opacity: 1, x:0}} 
                transition={{ease:"easeInOut", duration: 0.75}} 
                src={image} 
                alt={name} 
                className="lg:row-start-1 lg:row-end-7 mx-auto rounded-xl"
            />
            <motion.span 
                initial={{opacity: 0, x: -100}} 
                whileInView={{opacity: 1, x: 0}} 
                transition={{ease:"easeInOut", duration: 0.75}}  
                className="flex flex-wrap lg:row-start-2 lg:row-end-3 h-fit justify-start my-2 gap-3"
            >
                <SkillsUsed skills={skills} />
            </motion.span>
            {link && <motion.a href={link} target="_blank" initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{ease:"easeInOut", duration: 0.75}}  className="lg:row-start-7 lg:row-end-8 lg:col-start-2 lg:col-end-3 text-center bg-cyan-500/50 p-1 px-3 h-fit rounded-2xl">Visit Site</motion.a>}
        </section>
    </article>
  )
}

export default ProjectCard