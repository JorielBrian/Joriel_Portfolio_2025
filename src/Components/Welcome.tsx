import { motion } from "framer-motion"

const Welcome = () =>{
    return (
        <div id="home" className="h-screen justify-center w-full m-10 ml-0">
            <div className="grid grid-cols-8 grid-rows-6 px-10">
                <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}}  className="col-start-1 col-end-9 xl:col-end-6 row-start-1 row-end-3 lg:row-end-3 font-sans">
                    <h1 className="text-3xl sm:text-6xl md:text-7xl 2xl:text-8xl">Joriel Brian Sudario</h1>
                    <h2 className="text-xl sm:text-5xl 2xl:text-6xl bg-gradient-to-r from-neutral-400 via-cyan-500 to-blue-800 bg-clip-text text-transparent">Junior Developer</h2>
                </motion.div>
                <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}} id="myImage" className="col-start-1 md:col-start-5 lg:col-start-6 col-end-9 row-start-2 md:row-start-2 lg:row-start-1 row-end-5 md:row-end-7 h-fit">
                    <img src="/Profile Picture.jpg" alt="My Image" className="m-auto my-5 size-80 sm:size-100 xl:size-115 2xl:size-120 rounded-full"/>
                </motion.div>
                <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1.5}} className="col-start-1 col-end-9 md:col-end-5 xl:col-end-4 row-start-5 md:row-start-3 row-end-7">
                    <p className="text-center text-sm sm:text-md md:text-start font-sans">
                        I am a Junior Developer that is eager to learn all the things that I need to improve and to be the best version of me as a Full Stack Web Developer
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
export default Welcome;