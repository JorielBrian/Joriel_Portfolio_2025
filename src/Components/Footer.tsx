import { CONTACTS, SOCIAL } from "../data/index";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Footer = () =>{
    return (
        
        <motion.footer initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1}}  className="py-20">
            <div className="flex flex-wrap justify-evenly p-5">
                {/* Contact Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold p-2 m-3">Contact</h1>
                    <div className="w-fit m-auto   *:w-fit *:m-auto *:my-5 *:flex *:justify-center *:gap-3">
                        <div className="md:justify-start">
                            <Mail className="m-auto size-7 2xl:size-9"/>
                            <p>{CONTACTS[0].contact}</p>
                        </div>
                        <div className="md:justify-start">
                            <Phone className="m-auto size-7 2xl:size-9"/>
                            <p className="text-start">{CONTACTS[1].contact}</p>
                        </div>
                    </div>
                </section>
                
                {/* Curriculum Vitae Section */}
                <section className="text-center bg-[url('/cv.png')] bg-cover rounded-2xl">
                    <div className="justify-center h-full bg-black/65 rounded-2xl">
                        <h1 className="text-4xl font-bold p-2 m-3">Curriculum Vitae</h1>
                        <div className="h-full content-center">
                            <a href="Joriel Brian Sudario - CV.pdf" target="_blank"><button className="bg-cyan-50 text-black p-2 rounded-lg w-50 m-1 hover:scale-105">View CV</button></a>
                            <a href="Joriel Brian Sudario - CV.pdf" download="Joriel Brian Sudario - CV.pdf"><button className="bg-cyan-600 p-2 rounded-lg w-50 m-1 hover:scale-105">Download CV</button></a>
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold p-2 m-3">Social Media</h1>
                    <div className="flex justify-center">
                        {SOCIAL.map(media => (
                            <a href={media.link} key={media.social} target="_blank"  className="size-10 2xl:size-15 m-2 hover:scale-130"><img src={media.image} alt={media.social} className="rounded-lg" /></a>
                        ))}
                    </div>
                </section>
            </div>
            <p className="mt-15 md:mt-40 text-center">This website portfolio is developed using React, Typescript, TailwindCSS</p>
        </motion.footer>
    );
}
export default Footer;