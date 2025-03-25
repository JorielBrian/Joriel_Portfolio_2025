import { ABOUT } from "../index";
import { motion } from "framer-motion";

const About = () =>{
    return (
        <>
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="text-4xl text-center font-bold">About Me</motion.h1>
        <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-1 w-4/5 mx-auto my-5 p-5 bg-sky-900/50 rounded-2xl content-center">
            <motion.img src="/aboutmeimage.jpg" alt="aboutme" initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}} className="rounded-2xl"/>
            <motion.p initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="my-5 2xl:m-auto 2xl:pr-15">{ABOUT && ABOUT}</motion.p>
        </div>
        </>
    );
}
export default About;