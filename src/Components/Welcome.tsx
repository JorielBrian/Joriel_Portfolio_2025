import { motion } from "framer-motion"
import { INTRODUCTION } from "../data/index";
import About from "./About";
import Skills from "./Skills";
import { Typewriter} from "react-simple-typewriter";
import { CORE_SKILLS } from "../data/core_skills";

const Welcome = () =>{
    window.scrollTo(0, 0);

    return (
        <div id="home" className="justify-center w-full m-10 ml-0">
            <div className="h-screen grid grid-cols-8 grid-rows-6 px-10 mb-20 xl:mb-0">
                <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}}  className="col-start-1 col-end-9 xl:col-end-6 row-start-1 row-end-3 lg:row-end-3 font-sans">
                    <h1 className="text-3xl sm:text-6xl md:text-7xl 2xl:text-8xl">Joriel Brian Sudario</h1>
                    <h2 className="text-xl pb-5 border-amber-50 sm:text-5xl 2xl:text-6xl bg-gradient-to-r from-neutral-400 via-cyan-500 to-blue-800 bg-clip-text text-transparent"><Typewriter 
                    words={['Web Developer', 'Full Stack Developer', 'System Engineer', 'Software Engineer', 'Computer Programmer', 'IT Specialist', 'Circuit Assembler', 'Information Technology']}
                    loop = {true}
                    cursor cursorStyle = {'|'} cursorBlinking = {true} cursorColor="white"
                    /></h2>
                    {  CORE_SKILLS && CORE_SKILLS.map(skill => (
                        <img key={skill.skill} src={skill.image} alt={skill.skill} className="inline size-8 p-2 sm:size-10 md:size-12 lg:size-14 xl:size-14 2xl:size-16 m-1 rounded-xl hover:animate-bounce"/>
                    )) }
                </motion.div>
                <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}} id="myImage" className="col-start-1 md:col-start-5 lg:col-start-6 col-end-9 row-start-2 md:row-start-2 lg:row-start-1 row-end-5 md:row-end-7 h-fit">
                    <img src="/Profile Picture.png" alt="My Image" className="m-auto my-5 size-80 sm:size-100 xl:size-115 2xl:size-120 rounded-full"/>
                </motion.div>
                <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}} className="col-start-1 col-end-9 py-4 md:col-end-5 xl:col-end-4 row-start-5 md:row-start-3 row-end-7 font-bold">
                        <div className="grid gap-2">
                            { INTRODUCTION && INTRODUCTION.map(intro => (
                                <p className="text-center text-sm sm:pt-15 md:p-0 sm:text-md md:text-start font-sans">{ intro }</p>
                            )) }
                        </div>
                </motion.div>
            </div>
            <About></About>
            <Skills></Skills>
        </div>
    );
}
export default Welcome;