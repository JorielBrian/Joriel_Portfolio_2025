import { motion } from "framer-motion";
import { SKILLS } from "../../data/all_skills"
import { Preference, Proficiency } from "../../data/enum";

interface SkillCardProps {
  preference: Preference;
}

function SkillCard({ preference }: SkillCardProps) {
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
        <div className="flex flex-wrap relative justify-center my-5 items-center">
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="absolute content-center text-white/30 w-full h-full text-center font-bold ">{preference}</motion.h2>
            { SKILLS && SKILLS.filter(skill => skill.preference === preference).map(skill => (
                <span key={skill.skill}>
                    <motion.div animate={{y:[10, -10]}} transition={{ease:"linear", duration:2, repeat: Infinity, repeatType:"reverse"}}  className="relative p-3 justify-center">
                        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1.5}} src={skill.image} alt={skill.skill} title={skill.skill} className="icons hover:animate-bounce m-auto"/>
                        <h5 className="text-center font-bold text-amber-200 text-[11px] md:text-sm xl:text-lg">{skillrate(skill.proficiency)}</h5>
                        <h5 className="text-center font-bold text-cyan-500 text-[11px] md:text-sm xl:text-lg">{skill.skill}</h5>
                    </motion.div>
                </span>
            ))}
        </div>
    )
}

export default SkillCard