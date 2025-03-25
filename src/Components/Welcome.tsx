import { motion } from "framer-motion"

const Welcome = () =>{
    return (
        <div id="home" className="justify-center  2xl:flex 2xl:justify-between w-full m-10 2xl:px-20 ml-0 h-screen">
            <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}}  className="justify-items-start m-5 font-sans">
                <h1 className="text-4xl 2xl:text-8xl">Joriel Brian Sudario</h1>
                <h2 className="text-2xl 2xl:text-6xl bg-gradient-to-r from-neutral-400 via-cyan-500 to-blue-800 bg-clip-text text-transparent">Junior Developer</h2>
                {/* <p className="text-md 2xl:text-2xl">React, Typescript, TailwindCSS</p> */}
            </motion.div>
            <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}} id="myImage">
                <img src="/Profile Picture.jpg" alt="My Image" className="m-auto size-50 my-5 2xl:size-120 rounded-full"/>
            </motion.div>
        </div>
    );
}
export default Welcome;