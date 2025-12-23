import { ABOUT } from "../data/index";
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
            <div className="relative p-5 grid 2xl:grid-cols-3 align-middle bg-sky-900/80 rounded-2xl">
                <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}} id="myImage" className="hidden 2xl:block h-fit">
                    <img src="/Profile Picture.png" alt="My Image" className="m-auto my-5 rounded-full"/>
                </motion.div>
                <div className="2xl:col-span-2 content-center">
                    <div className="p-5 text-white font-sans">
                        { ABOUT && ABOUT.map(about => (
                            <motion.p initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="p-3 text-xl">{about}</motion.p>
                        )) }
                    </div>
                </div>
            </div>    
        </div>
        </>
    );
}
export default About;