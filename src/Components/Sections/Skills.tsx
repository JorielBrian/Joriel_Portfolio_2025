// import { SKILLS } from "../../data/skills";
import SkillCard from "../Cards/SkillCard";
import { motion } from "framer-motion";
import { Preference } from "../../data/enum";

const Skills = () =>{
    return (
        <div className="w-4/5 mx-auto my-5 content-center">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="m-5 text-4xl text-center font-bold" >Skills</motion.h1>
            <div className="relative flex flex-wrap p-1 rounded-2xl justify-center">
                <SkillCard preference = {Preference.CORE_SKILL}></SkillCard>
                <SkillCard preference = {Preference.SUB_SKILL}></SkillCard>
                <SkillCard preference = {Preference.HARDWARE}></SkillCard>
            </div>
        </div>
    );
}
export default Skills;