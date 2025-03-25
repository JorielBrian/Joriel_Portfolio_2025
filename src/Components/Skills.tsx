import { SKILLS } from "../index";

const Skills = () =>{
    return (
        <>
        <div className="w-4/5 mx-auto my-5 content-center">
            <h1 className="m-5 text-4xl text-center font-bold">Skills</h1>
            <div className="flex p-5 rounded-2xl justify-center">
                {SKILLS && SKILLS.map(skill => (
                    <div key={skill.skill} className="flex p-5 justify-between">
                        {/* <h1  className="text-start font-bold">{skill.skill}</h1> */}
                        <img className="size-30 p-5 bg-gray-600 rounded-xl" src={skill.image} alt={skill.skill} />
                        {/* <p>{skill.proficiency}</p> */}
                    </div>
                ))}
            </div>
            
        </div>
        </>
    );
}
export default Skills;