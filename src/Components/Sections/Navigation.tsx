import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { House, BriefcaseBusiness, Folder } from "lucide-react";

const Navigation = () =>{
    const [scroll, setScroll] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        // Detect scroll direction
        if (currentScrollY > lastScrollY) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        
        // For sticky effect
        setScroll(currentScrollY > 50);
        
        setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
    
    return (
        <motion.section
        initial={{ opacity: 0, y: 0 }}
        animate={{ 
            opacity: scrollDirection === 'up' ? 1 : 0,
            y: scrollDirection === 'down' ? -100 : 0
        }}
        transition={{ 
            ease: "easeInOut",
            duration: 0.3
        }}
        className={scroll ? "bg-blue-900/60 sticky top-0 z-50 w-full" : "w-full"}
        >
            <div className="flex w-full !py-0 px-5 pb-3 rounded-sm justify-between">
                <div className="w-fit">
                    <img 
                        src="/logo.png" 
                        alt="JB logo" 
                        className="size-13 sm:size-15 md:size-18 lg:size-20 xl:size-23 2xl:size-26 p-2"
                    />
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
        </motion.section>
    );
}
export default Navigation;