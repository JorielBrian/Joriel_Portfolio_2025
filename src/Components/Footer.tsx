import { CONTACTS, SOCIAL } from "../index";
import { motion } from "framer-motion";

const Footer = () =>{
    return (
        
        <motion.footer initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ease:"easeIn", duration:1}}  className="py-20 md:grid md:grid-cols-2">
            <div className="text-center">
                <h1 className="text-4xl font-bold p-2 m-3">Contact</h1>
                <div className="text-center">
                    {CONTACTS.map(contact => (
                        <div key={contact.type} className="m-auto my-5 flex w-1/2 justify-center">
                            <img src={contact.icon} alt={contact.type} className="size-5 2xl:size-7 m-2 rounded-sm" />
                            <p className="text-center my-auto">{contact.contact}</p>
                        </div>
                    ))}
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
            <p className="col-span-2 mt-15 text-center">This website portfolio is developed using React, Typescript, TailwindCSS</p>
        </motion.footer>
    );
}
export default Footer;