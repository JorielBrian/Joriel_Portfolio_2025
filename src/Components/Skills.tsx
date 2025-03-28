import { SKILLS } from "../index";
import { motion } from "framer-motion";

const Skills = () =>{
    return (
        <>
        <div className="w-4/5 mx-auto my-5 content-center">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="m-5 text-4xl text-center font-bold" >Skills</motion.h1>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 p-5 rounded-2xl justify-center">
                {SKILLS && SKILLS.map(skill => (
                    <div key={skill.skill}>
                        <motion.div animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="2xl:p-5 justify-center">
                            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}} src={skill.image} alt={skill.skill} className="size-15 rounded-sm 2xl:size-30 2xl:p-5 bg-gray-700/75 2xl:rounded-xl hover:animate-bounce"/>
                            <h1 className="text-center font-bold text-cyan-600">{skill.skill}</h1>
                        </motion.div>   
                        
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Skills;