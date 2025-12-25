import { motion } from "framer-motion"
import { SKILLS } from "../data/all_skills";

function Experience(experience: {company:string, title:string, date:string, contract:string, description:string[], skills:string[]}) {
  return (
    <section className="2xl:p-3 rounded-sm">
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
                <span className="flex flex-wrap items-center gap-3">
                    {experience.skills.map(skill => (
                        SKILLS.find(s => s.skill === skill) 
                            ? <img src={SKILLS.find(s => s.skill === skill)?.image} alt={skill} className="size-15 bg-white/30 p-2 rounded-xl" /> 
                            : <p key={skill} className="w-fit m-1 min-w-5 px-3 rounded-xl text-center 2xl:px-3 bg-sky-900/50 2xl:rounded-2xl text-cyan-500">{skill}</p>
                    ))} 
                </span>
            </motion.div>
        </div>    </section>
  )
}

export default Experience