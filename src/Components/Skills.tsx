import { SKILLS } from "../index";
import { animate, motion } from "framer-motion";

const Skills = () =>{
    return (
        <>
        <div className="w-4/5 mx-auto my-5 content-center">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="m-5 text-4xl text-center font-bold" >Skills</motion.h1>
            <div className="flex p-5 rounded-2xl justify-center">
                {SKILLS && SKILLS.map(skill => (
                    <motion.div key={skill.skill} animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="flex p-5 justify-between hover:animate-bounce">
                        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}}  className="size-30 p-5 bg-gray-600 rounded-xl" src={skill.image} alt={skill.skill} />
                    </motion.div>
                ))}
            </div>
            
        </div>
        </>
    );
}
export default Skills;