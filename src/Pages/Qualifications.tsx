import { QUALIFICATIONS, QUALIFICATIONS_PROJECTS } from "../data/qualifications";
import Experience from "../Components/Experience";
import { motion } from "framer-motion"

const Qualifications = () =>{
    window.scrollTo(0, 0);
    return (
        <>
        <div className="w-4/5 mx-auto my-5 p-5 rounded-sm content-center overflow-">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="text-4xl font-bold text-center">Key Qualifications</motion.h1>
            <section className="2xl:p-3 rounded-sm">
                {QUALIFICATIONS && QUALIFICATIONS.map(qualification => (
                    <Experience 
                        key={qualification.company}
                        company={qualification.company}
                        title={qualification.title}
                        date={qualification.date}
                        contract={qualification.contract}
                        description={qualification.description}
                        skills={qualification.skills}
                    />
                ))}
            </section>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease:"easeIn", duration:0.5}}  className="mt-10 text-4xl font-bold text-center">Contractual Projects</motion.h1>
            <section className="2xl:p-3 rounded-sm">
                {QUALIFICATIONS_PROJECTS && QUALIFICATIONS_PROJECTS.map(projects => (
                    <Experience 
                        key={projects.company}
                        company={projects.company} 
                        title={projects.title}
                        date={projects.date}
                        contract={projects.contract}
                        description={projects.description}
                        skills={projects.skills}
                    />
                ))}
            </section>
        </div>
        </>
    );
}
export default Qualifications;