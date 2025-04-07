import { CONTACTS, SOCIAL } from "../index";
import { motion } from "framer-motion";

const Footer = () =>{
    return (
        
        <motion.footer initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1}}  className="py-20">
            <div className="md:grid md:grid-cols-3 p-5">
                <div className="text-center">
                    <h1 className="text-4xl font-bold p-2 m-3">Contact</h1>
                    <div className="text-center w-fit m-auto">
                        {CONTACTS.map(contact => (
                            <div key={contact.type} className="m-auto my-5 flex justify-center md:justify-start">
                                <img src={contact.icon} alt={contact.type} className="size-5 2xl:size-7 m-2 rounded-sm" />
                                <p className="text-start my-auto">{contact.contact}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold p-2 m-3">Curriculum Vitae</h1>
                    <div className="justify-center bg-[url('/cv.png')] bg-cover h-full rounded-2xl overflow-hidden">
                        <div className="bg-black/50 h-full content-center">
                            <a href="Joriel Brian Sudario - CV.pdf" target="_blank"><button className="bg-cyan-50 text-black p-2 rounded-lg w-50 m-1 hover:scale-105">View CV</button></a>
                            <a href="Joriel Brian Sudario - CV.pdf" download="Joriel Brian Sudario - CV.pdf"><button className="bg-cyan-600 p-2 rounded-lg w-50 m-1 hover:scale-105">Download CV</button></a>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold p-2 m-3">Social Media</h1>
                    <div className="flex justify-center">
                        {SOCIAL.map(media => (
                            <a href={media.link} key={media.social} target="_blank"  className="size-10 2xl:size-15 m-2 hover:scale-130"><img src={media.image} alt={media.social} className="rounded-lg" /></a>
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-15 md:mt-40 text-center">This website portfolio is developed using React, Typescript, TailwindCSS</p>
        </motion.footer>
    );
}
export default Footer;