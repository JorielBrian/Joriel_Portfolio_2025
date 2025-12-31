import SkillsUsed from "../SkillsUsed";
import { motion } from "framer-motion";
import { Qualification } from "../../data/types";

interface ExperiencCardProps {
    title: string,
    experiences: Qualification[]
}

function Experiences({title, experiences}: ExperiencCardProps) {
  return (
    <article className="card 2xl:p-3 rounded-sm">
        <section className="2xl:p-3 rounded-sm">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="text-4xl font-bold text-center">{title}</motion.h1>
            { experiences.map(experience => (
                <div key={experience.company} className="my-5 xl:flex">
                <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="w-full xl:w-1/2 2xl:p-2">
                    <h1 className="text-2xl 2xl:text-3xl font-bold motion">{experience.title}</h1>
                    <h3 className="text-xl 2xl:text-2xl animate-[fromLeft_1s_ease]">{experience.company}</h3>
                    <h4 className="text-sm 2xl:text-xl text-cyan-500">{experience.date}</h4>
                    <h4 className="text-sm 2xl:text-xl text-cyan-500">{experience.contract}</h4>
                </motion.div>
                {/* DESCRIPTIONS */}
                <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="w-full xl:w-1/2">
                    <span className="py-2">
                        {experience.description.map(task => (
                            <p key={task}>{task}</p>
                        ))}
                    </span>
                    {/* SKILLS USED */}
                    <SkillsUsed skills={experience.skills} />
                </motion.div>
            </div>    
            )) }
        </section>
    </article>
  )
}

export default Experiences