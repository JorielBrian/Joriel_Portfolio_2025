import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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
            <div className="flex w-full !py-0 px-5 rounded-sm justify-between">
                {/* Logo */}
                <div className="w-fit !py-0">
                    <img 
                        src="/logo.png" 
                        alt="JB logo" 
                        className="size-14 md:size-16 p-1"
                    />
                </div>

                {/* Navigation */}
                <div className="flex items-center !py-0">
                    {/* MOBILE VIEW */}
                    <ul className="flex lg:hidden">
                        <li>
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => 
                                    `button ${isActive ? 'active' : ''}`
                                }
                            >
                                <House />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/experience' 
                                className={({ isActive }) => 
                                    `button ${isActive ? 'active' : ''}`
                                }
                            >
                                <BriefcaseBusiness />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/project' 
                                className={({ isActive }) => 
                                    `button ${isActive ? 'active' : ''}`
                                }
                            >
                                <Folder />
                            </NavLink>
                        </li>
                    </ul>
                    {/* DESKTOP VIEW */}
                    <ul className="hidden lg:flex">
                        <li>
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => 
                                    `button ${isActive ? 'active' : ''}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/experience' 
                                className={({ isActive }) => 
                                    `button ${isActive ? 'active' : ''}`
                                }
                            >
                                Experiences
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/project' 
                                className={({ isActive }) => 
                                    `button ${isActive ? 'active' : ''}`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* CV Button */}
                <div className="flex items-center !py-0">
                    <a href="Joriel Brian Sudario - CV.pdf" target="_blank"><button className="navbarCV flex lg:hidden">CV</button></a>
                    <a href="Joriel Brian Sudario - CV.pdf" target="_blank"><button className="navbarCV hidden lg:flex">Resume</button></a>
                </div>
            </div>
        </motion.section>
    );
}
export default Navigation;