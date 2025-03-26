import { ABOUT } from "../index";
import { motion } from "framer-motion";

const About = () =>{
    return (
        <>
        <motion.h1 id="about" initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="text-4xl text-center font-bold">About Me</motion.h1>
        <div className="xl:flex w-4/5 mx-auto my-5 p-5 bg-sky-900/50 rounded-2xl content-center">
            <motion.img src="/aboutmeimage.jpg" alt="aboutme" initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}} className="rounded-2xl xl:w-120 2xl:w-150 m-auto"/>
            <motion.p initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="p-3">{ABOUT && ABOUT}</motion.p>
        </div>
        </>
    );
}
export default About;