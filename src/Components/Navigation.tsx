import { motion } from "framer-motion";

const Navigation = () =>{
    return (
        <>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1}}  className="xl:flex w-full px-20 pt-10 rounded-sm justify-between">
            <div>
                <img src="/logo.png" alt="JB logo" className="m-auto lg:m-1 size-40"/>
            </div>
            {/* <ul className="flex sticky top-0 py-auto">
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center"><a href="#Home">Home</a></li>
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center"><a href="#About">About</a></li>
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center"><a href="#Contact">Contact</a></li>
            </ul> */}
        </motion.div>
        </>
    );
}
export default Navigation;