import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { House, BriefcaseBusiness, Folder } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () =>{
    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {
            const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            
            // For sticky effect
            setScroll(currentScrollY > 50);
            
            };
    
            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <motion.section className={scroll ? "navbar" : "flex w-full sm:w-2/3 justify-center"}>
            <div className="flex w-full !py-2 px-5 rounded-sm justify-between">
                <div className="w-fit !py-0">
                    <img 
                        src="/logo.png" 
                        alt="JB logo" 
                        className="size-14 md:size-16 lg:size-18 xl:size-20 2xl:size-22 lg:p-2"
                    />
                </div>

                <div className="flex items-center !py-0">
                    {/* MOBILE VIEW */}
                    <ul className="flex lg:hidden relative py-auto items-center text-md md:text-lg xl:text-xl *:w-fit *:h-10 *:m-1 *:p-3 *:text-center *:rounded-xl *:hover:scale-110 *:active:bg-blue-950 *:active:scale-90">
                        <li><Link to='/'><House /></Link></li>
                        <li><Link to='/experience'><BriefcaseBusiness /></Link></li>
                        <li><Link to='/project'><Folder /></Link></li>
                    </ul>
                    {/* DESKTOP VIEW */}
                    <ul className="hidden lg:flex relative py-auto items-center text-md md:text-lg xl:text-md *:w-fit *:h-10 *:m-1 *:p-3 *:text-center *:rounded-xl *:hover:scale-110 *:active:bg-blue-950 *:active:scale-90">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/experience'>Experiences</Link></li>
                        <li><Link to='/project'>Projects</Link></li>
                    </ul>
                </div>
                <div className="flex items-center !py-0">
                    <a href="Joriel Brian Sudario - CV.pdf" target="_blank"><button className="px-3 py-1 bg-blue-700/60 rounded-full border-2 border-blue-600/80">Resume</button></a>
                </div>
            </div>
        </motion.section>
    );
}
export default Navigation;