import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () =>{
    const [scroll, setScroll] = useState(false);
    const scrolled = () => window.scrollY >= 50 ? setScroll(true) : setScroll(false);

    window.addEventListener('scroll', scrolled);

    return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1}} className={scroll ? "bg-blue-950/90 sticky top-0 z-1 w-full" : "pt-10 w-full"}>
        <div className="flex w-full px-5 pb-3 rounded-sm justify-between">
            <div className="w-fit">
                <img src="/logo.png" alt="JB logo" className="m-auto lg:m-1 size-25"/>
            </div>
            <ul className="flex relative py-auto">
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center align-bottom"><Link to='/'>Home</Link></li>
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center align-bottom"><Link to='/experience'>Experiences</Link></li>
                <li className="h-10 w-20 m-1 p-1 rounded-2xl hover:underline text-center align-bottom"><Link to='/project'>Project</Link></li>
            </ul>
        </div>
    </motion.div>
    );
}
export default Navigation;