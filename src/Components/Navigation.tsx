import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { House, BriefcaseBusiness, Folder } from "lucide-react";

const Navigation = () =>{
    const [scroll, setScroll] = useState(false);
    const scrolled = () => window.scrollY >= 50 ? setScroll(true) : setScroll(false);

    window.addEventListener('scroll', scrolled);

    return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:1}} className={scroll ? "bg-blue-900/60 sticky top-0 z-1 w-full" : "pt-10 w-full"}>
        <div className="flex w-full px-5 pb-3 rounded-sm justify-between">
            <div className="w-fit">
                <img src="/logo.png" alt="JB logo" className="m-auto lg:m-1 size-25"/>
            </div>
            {/* MOBILE VIEW */}
            <ul className="flex lg:hidden relative py-auto items-center text-md md:text-lg xl:text-xl *:w-fit *:h-10 *:m-1 *:p-3 *:text-center *:rounded-xl *:hover:scale-110 *:active:bg-blue-950 *:active:scale-90">
                <li><Link to='/'><House /></Link></li>
                <li><Link to='/experience'><BriefcaseBusiness /></Link></li>
                <li><Link to='/project'><Folder /></Link></li>
            </ul>
            {/* DESKTOP VIEW */}
            <ul className="hidden lg:flex relative py-auto items-center text-md md:text-lg xl:text-xl *:w-fit *:h-10 *:m-1 *:p-3 *:text-center *:rounded-xl *:hover:scale-110 *:active:bg-blue-950 *:active:scale-90">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/experience'>Experiences</Link></li>
                <li><Link to='/project'>Projects</Link></li>
            </ul>
        </div>
    </motion.div>
    );
}
export default Navigation;