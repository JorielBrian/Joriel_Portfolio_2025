import { QUALIFICATIONS } from "../qualifications";
import { motion } from "framer-motion"

const Qualifications = () =>{
    window.scrollTo(0, 0);
    return (
        <>
        <div className="w-4/5 mx-auto my-5 p-5 rounded-sm content-center overflow-">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="text-4xl font-bold text-center">Key Qualifications</motion.h1>
            <div className="2xl:p-3 rounded-sm">
                {QUALIFICATIONS && QUALIFICATIONS.map(qualification => (
                    <div key={qualification.company} className="my-5 xl:flex">
                        <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="w-full xl:w-1/2 2xl:p-2">
                            <h1 className="text-2xl 2xl:text-3xl font-bold motion">{qualification.title}</h1>
                            <h3 className="text-xl 2xl:text-2xl animate-[fromLeft_1s_ease]">{qualification.company}</h3>
                            <h4 className="text-sm 2xl:text-xl text-cyan-500">{qualification.date}</h4>
                            <h4 className="text-sm 2xl:text-xl text-cyan-500">{qualification.contract}</h4>
                        </motion.div>
                        {/* DESCRIPTIONS */}
                        <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="w-full xl:w-1/2">
                            <div className="py-2">
                                {qualification.description.map(task => (
                                    <p key={task}>{task}</p>
                                ))}
                            </div>
                            {/* SKILLS USED */}
                            <div className="flex flex-wrap items-center">
                                {qualification.skills.map(skill => (
                                    <p key={skill} className="w-fit m-1 min-w-5 px-3 rounded-xl text-center 2xl:px-3 bg-sky-900/50 2xl:rounded-2xl text-cyan-500">{skill}</p>
                                ))} 
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Qualifications;