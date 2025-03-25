import { QUALIFICATIONS } from "../index";

const Qualifications = () =>{
    return (
        <>
        <div className="w-4/5 mx-auto my-5 p-5 rounded-sm content-center">
            <h1 className="text-4xl font-bold text-center">Key Qualifications</h1>
            <div className="p-3 rounded-sm">
                {QUALIFICATIONS && QUALIFICATIONS.map(qualification => (
                    <div key={qualification.title} className="flex my-10 justify-between">
                        <div className="w-1/2 p-2">
                            <h1 className="text-3xl font-bold">{qualification.title}</h1>
                            <h3 className="text-2xl">{qualification.company}</h3>
                            <h4 className="text-xl text-cyan-500">{qualification.date}</h4>
                        </div>
                        <div className="w-1/2 p-2">
                            {qualification.description.map(task => (
                                <p key={task}>{task}</p>
                            ))}
                            <div className="flex">
                                {qualification.skills.map(skill => (
                                    <p key={skill} className="w-fit px-3 py-1 m-1 bg-sky-900/50 rounded-2xl text-cyan-500">{skill}</p>
                                ))} 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Qualifications;