import { ABOUT } from "../index";
import { motion } from "framer-motion";

const About = () =>{
    return (
        <>
        <motion.h1 id="about" initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="text-4xl text-center font-bold">About Me</motion.h1>
        <div className="relative w-4/5 mx-auto my-5 p-5 bg-[url(/aboutmeimage.jpg)] bg-cover bg-center rounded-2xl place-content-start overflow-hidden">
            {/* <span className="absolute w-full">
                <motion.img 
                    src="/aboutmeimage.jpg" 
                    alt="aboutme" 
                    initial={{x:-100, opacity:0}} 
                    whileInView={{x:0, opacity:1}} 
                    transition={{ease:"easeIn", duration:0.5}} 
                    className=" rounded-2xl xl:w-120 2xl:w-full m-auto justify-self-start" 
                />
            </span> */}
            <div className="relative bg-sky-900/80 rounded-2xl">
                { ABOUT && ABOUT.map(about => (
                    <motion.p initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="p-3">{about}</motion.p>
                )) }
            </div>    
        </div>
        </>
    );
}
export default About;