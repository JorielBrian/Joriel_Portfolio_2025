import { CONTACTS, SOCIAL } from "../index";

const Footer = () =>{
    return (
        
        <footer className="grid grid-cols-2 m-5 py-20">
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
        </footer>
    );
}
export default Footer;