import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiDownload, 
  FiFileText,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiInstagram 
} from "react-icons/fi";
import { SiReact, SiTypescript, SiTailwindcss, SiVercel, SiVite } from "react-icons/si";

const Footer = () =>{
    const contactInfo = [
        { icon: <FiMail />, text: "jorielsudario@gmail.com", href: "mailto:jorielsudario@gmail.com" },
        { icon: <FiPhone />, text: "+63 965 447 5177", href: "tel:+639654475177" }
    ];

    const cvLinks = [
        { icon: <FiFileText />, text: "View CV", href: "Joriel Brian Sudario - CV.pdf", variant: "outline" },
        { icon: <FiDownload />, text: "Download CV", href: "Joriel Brian Sudario - CV.pdf", download: true, variant: "primary" }
    ];

    const socialMedia = [
        { icon: <FiFacebook />, href: "https://www.facebook.com/jorielbrian.sudario?mibextid=ZbWKwL", label: "Facebook" },
        { icon: <FiGithub />, href: "https://github.com/JorielBrian", label: "GitHub" },
        { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/joriel-brian-sudario-b14728265", label: "LinkedIn" },
        // { icon: <FiTiktok />, href: "https://www.tiktok.com/@joriel91011?_t=8dVw1EU01J9&_r=1", label: "Twitter" },
        { icon: <FiInstagram />, href: "https://instagram.com/jorielbrian?igshid=MzNlNGNkZWQ4Mg==", label: "Instagram" }
    ];

    const techStack = [
        { icon: <SiReact />, label: "React" },
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
        { icon: <SiVercel />, label: "Vercel"},
        { icon: <SiVite/>, label: "Vite"}
    ];
    
    return (
        
        <motion.footer initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1}}  className="py-20">
            <div className="flex flex-wrap justify-evenly p-5">
                {/* Contact Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold p-2 m-3">Contact</h1>
                    <div className="w-fit m-auto   *:w-fit *:m-auto *:my-5 *:flex *:justify-center *:gap-3">
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center gap-3 group hover:text-cyan-400 transition-colors duration-300"
                            >
                            <span className="text-cyan-500 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </span>
                            <span>{item.text}</span>
                            </a>
                        ))}
                    </div>
                </section>
                
                {/* Curriculum Vitae Section */}
                <section className="text-center bg-[url('/cv.png')] bg-cover rounded-2xl">
                    <div className="justify-center h-full bg-black/65 rounded-2xl">
                        <h1 className="text-4xl font-bold p-2 m-3">Curriculum Vitae</h1>
                        <div className="flex flex-wrap h-full justify-center p-5 gap-2">
                            {cvLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    download={link.download}
                                    target="_blank"
                                    className={`flex w-45 h-10 items-center justify-center lg:gap-2 p-2 lg:px-6 lg:py-3 rounded-lg font-medium transition-all duration-300 ${
                                        link.variant === "primary"
                                        ? "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white hover:from-cyn-700 hover:to-cyan-800 shadow-lg hover:shadow-cyan-500/25"
                                        : "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                                    }`}
                                >
                                {link.icon}
                                {link.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold p-2 m-3">Social Media</h1>
                    <div className="flex justify-center gap-3">
                        {socialMedia.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="p-3 bg-gradient-to-b from-blue-900 to-blue-950 border-2 border-blue-700/80 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            >
                            <span className="text-xl">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
            <div className="border-t border-gray-800 pt-8">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Tech Stack */}
                    <div className="flex w-full xl:w-1/2 justify-center items-center gap-4">
                        <span className="text-gray-400">Built with:</span>
                        <div className="flex gap-3">
                            {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg"
                            >
                                <span className="text-lg">{tech.icon}</span>
                                <span className="text-sm font-medium">{tech.label}</span>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col w-full xl:w-1/2 text-center xl:text-right justify-center items-center xl:items-end">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Joriel Sudario. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            This portfolio is developed using React, TypeScript, Tailwind CSS, Vite, and Vercel
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
export default Footer;