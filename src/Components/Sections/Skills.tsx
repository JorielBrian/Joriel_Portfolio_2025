// import { SKILLS } from "../../data/skills";
import { motion } from "framer-motion";
import { SKILLS } from "../../data/all_skills"
import { Preference, Proficiency } from "../../data/enum";

const Skills = () =>{
    const skillrate = (proficiency: Proficiency) => {
        if (proficiency === Proficiency.ADVANCE) {
            return"★★★★★"
        } else if (proficiency === Proficiency.PROFICIENT) {
            return "★★★★✩"
        } else if (proficiency === Proficiency.INTERMEDIATE) {
            return "★★★✩✩"
        } else if (proficiency === Proficiency.FUNCTIONAL) {
            return "★★✩✩✩"
        } else if (proficiency === Proficiency.BEGINNER){
            return "★✩✩✩✩"
        } else {
            return "✩✩✩✩✩"
        };
    }
    return (
        <>
        <div className="w-4/5 mx-auto my-5 content-center">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="m-5 text-4xl text-center font-bold" >Skills</motion.h1>
            <div className="relative flex flex-wrap p-1 rounded-2xl justify-center">
                {/* {SKILLS && SKILLS.map(area => (
                    <div key={area.area} className="w-full">
                        <section className="flex flex-wrap relative justify-center my-5">
                            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="absolute content-center text-white/30 w-full h-full text-center font-bold ">{area.area.toUpperCase()}</motion.h2>
                            {area.skills.map(skill => (
                                <span key={skill.skill}>
                                    <motion.div animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="relative p-3 justify-center">
                                        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}} src={skill.image} alt={skill.skill} title={skill.skill} className="icons hover:animate-bounce m-auto"/>
                                        <h5 className="text-center font-bold text-amber-200 text-[11px] md:text-sm xl:text-lg">{skillrate(skill.proficiency)}</h5>
                                        <h5 className="text-center font-bold text-cyan-500 text-[11px] md:text-sm xl:text-lg">{skill.skill}</h5>
                                    </motion.div>
                                </span>
                            ))}
                        </section>
                    </div>
                ))} */}

                {/* CORE SKILLS */}
                <div className="flex flex-wrap relative justify-center my-5">
                    <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="absolute content-center text-white/30 w-full h-full text-center font-bold ">CORE SKILLS</motion.h2>
                    { SKILLS && SKILLS.filter(skill => skill.preference === Preference.CORE_SKILL).map(skill => (
                        <span key={skill.skill}>
                            <motion.div animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="relative p-3 justify-center">
                                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}} src={skill.image} alt={skill.skill} title={skill.skill} className="icons hover:animate-bounce m-auto"/>
                                <h5 className="text-center font-bold text-amber-200 text-[11px] md:text-sm xl:text-lg">{skillrate(skill.proficiency)}</h5>
                                <h5 className="text-center font-bold text-cyan-500 text-[11px] md:text-sm xl:text-lg">{skill.skill}</h5>
                            </motion.div>
                        </span>
                    ))}
                </div>

                {/* SUB SKILLS */}
                <div className="flex flex-wrap relative justify-center my-5">
                    <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="absolute content-center text-white/30 w-full h-full text-center font-bold ">SUB SKILLS</motion.h2>
                    { SKILLS && SKILLS.filter(skill => skill.preference === Preference.SUB_SKILL).map(skill => (
                        <span key={skill.skill}>
                            <motion.div animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="relative p-3 justify-center">
                                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}} src={skill.image} alt={skill.skill} title={skill.skill} className="icons hover:animate-bounce m-auto"/>
                                <h5 className="text-center font-bold text-amber-200 text-[11px] md:text-sm xl:text-lg">{skillrate(skill.proficiency)}</h5>
                                <h5 className="text-center font-bold text-cyan-500 text-[11px] md:text-sm xl:text-lg">{skill.skill}</h5>
                            </motion.div>
                        </span>
                    ))}
                </div>

                {/* HARDWARE */}
                <div className="flex flex-wrap relative justify-center my-5">
                    <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="absolute content-center text-white/30 w-full h-full text-center font-bold ">HARDWARE</motion.h2>
                    { SKILLS && SKILLS.filter(skill => skill.preference === Preference.HARDWARE).map(skill => (
                        <span key={skill.skill}>
                            <motion.div animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="relative p-3 justify-center">
                                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}} src={skill.image} alt={skill.skill} title={skill.skill} className="icons hover:animate-bounce m-auto"/>
                                <h5 className="text-center font-bold text-amber-200 text-[11px] md:text-sm xl:text-lg">{skillrate(skill.proficiency)}</h5>
                                <h5 className="text-center font-bold text-cyan-500 text-[11px] md:text-sm xl:text-lg">{skill.skill}</h5>
                            </motion.div>
                        </span>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}
export default Skills;