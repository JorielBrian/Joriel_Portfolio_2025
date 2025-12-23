import { motion } from "framer-motion"
import { INTRODUCTION } from "../data/index";
import About from "./About";
import Skills from "./Skills";
import { Typewriter} from "react-simple-typewriter";
import { CORE_SKILLS } from "../data/core_skills";

const Welcome = () =>{
    window.scrollTo(0, 0);

    return (
        <div id="home" className="w-full mt-30 ml-0">
            <div className="h-screen px-10 mb-20 xl:mb-0">
                <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}}  className="text-center font-sans">
                    <h1 className="text-3xl font-bold sm:text-6xl md:text-7xl 2xl:text-9xl">Joriel Brian Sudario</h1>
                    <h2 className="text-xl pb-5 border-amber-50 sm:text-5xl 2xl:text-8xl bg-gradient-to-r from-neutral-400 via-cyan-500 to-blue-800 bg-clip-text text-transparent"><Typewriter 
                    words={['Web Developer', 'Full Stack Developer', 'System Engineer', 'Software Engineer', 'Computer Programmer', 'IT Specialist', 'Circuit Assembler', 'Information Technology']}
                    loop = {true}
                    cursor cursorStyle = {'|'} cursorBlinking = {true} cursorColor="white"
                    /></h2>
                    {  CORE_SKILLS && CORE_SKILLS.map(skill => (
                        <img key={skill.skill} src={skill.image} alt={skill.skill} className="inline size-10 p-2 sm:size-12 md:size-14 lg:size-14 xl:size-16 2xl:size-25 m-1 rounded-xl hover:animate-bounce"/>
                    )) }
                </motion.div>
                <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}} className="py-4">
                        <div className="justify-items-center">
                            { INTRODUCTION && INTRODUCTION.map(intro => (
                                <p className="text-sm w-fit sm:pt-15 md:p-0 sm:text-xl md:text-start font-sans">{ intro }</p>
                            )) }
                        </div>
                </motion.div>
            </div>
            <Skills></Skills>
            <About></About>
        </div>
    );
}
export default Welcome;