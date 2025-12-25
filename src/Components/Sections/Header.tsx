import Navigation from './Navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Header() {
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

            className={scroll ? "flex sticky top-0 z-50 w-full justify-center" : "flex w-full justify-center"}
        >
            <Navigation />
        </motion.section>
    )
}

export default Header