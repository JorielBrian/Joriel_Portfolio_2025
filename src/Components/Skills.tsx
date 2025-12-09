import { SKILLS } from "../data/skills";
import { motion } from "framer-motion";

const Skills = () =>{
    const skillrate = (proficiency: string) => {
        if (proficiency === "Advanced") {
            return"★★★★★"
        } else if (proficiency === "Proficient") {
            return "★★★★✩"
        } else if (proficiency === "Intermediate") {
            return "★★★✩✩"
        } else if (proficiency === "Functional") {
            return "★★✩✩✩"
        } else if (proficiency === "Beginner"){
            return "★✩✩✩✩"
        } else {
            return "✩✩✩✩✩"
        };
    }
    return (
        <>
        <div className="w-4/5 mx-auto my-5 content-center">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="m-5 text-4xl text-center font-bold" >Skills</motion.h1>
            <div className="flex flex-wrap p-5 rounded-2xl justify-center">
                {SKILLS && SKILLS.map(area => (
                    <div key={area.area} className="w-full">
                        <div className="flex flex-wrap relative justify-center my-10">
                            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="absolute text-4xl content-center text-white/30 w-full h-full text-center font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{area.area.toUpperCase()}</motion.h1>
                            {area.skills.map(skill => (
                                <div key={skill.skill}>
                                    <motion.div animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="relative p-3 justify-center">
                                        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}} src={skill.image} alt={skill.skill} className="size-12 sm:size-15 md:size-20 lg:size-22 xl:size-25 2xl:size-30 rounded-xl 2xl:p-3 bg-gray-500/75 2xl:rounded-4xl hover:animate-bounce m-auto"/>
                                        <h1 className="text-center font-bold text-amber-200 text-[11px] md:text-sm xl:text-lg">{skillrate(skill.proficiency)}</h1>
                                        <h1 className="text-center font-bold text-cyan-500 text-[11px] md:text-sm xl:text-lg">{skill.skill}</h1>
                                    </motion.div>   
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Skills;