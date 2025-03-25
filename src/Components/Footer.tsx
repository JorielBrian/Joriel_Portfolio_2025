import { CONTACTS, SOCIAL } from "../index";
import { motion } from "framer-motion";

const Footer = () =>{
    return (
        
        <motion.footer initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1}}  className="2xl:grid 2xl:grid-cols-2 2xl:m-5 py-20">
            <div className="text-center">
                <h1 className="text-4xl font-bold p-2 m-3">Contact</h1>
                <div className="text-center">
                    {CONTACTS.map(contact => (
                        <div key={contact.type} className="m-auto my-5 flex w-1/2 justify-center">
                            <img src={contact.icon} alt={contact.type} className="size-7 m-2 rounded-sm" />
                            <p className="text-center my-auto">{contact.contact}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold p-2 m-3">Social Media</h1>
                <div className="flex justify-center">
                    {SOCIAL.map(media => (
                        <a href={media.link} key={media.social} className="size-15 m-2"><img src={media.image} alt={media.social} className="rounded-lg" /></a>
                    ))}
                </div>
            </div>
            <p className="col-span-2 text-center">This website portfolio is developed using React, Typescript, TailwindCSS</p>
        </motion.footer>
    );
}
export default Footer;