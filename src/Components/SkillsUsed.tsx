import { SKILLS } from "../data/all_skills"

function SkillsUsed({skills}: {skills:string[]}) {
  return (
    <span className="flex flex-wrap items-center gap-3">
        {skills.map(skill => (
            // <p>{skill}</p>
            SKILLS.find(s => s.skill === skill) 
                ? <img src={SKILLS.find(s => s.skill === skill)?.image} alt={skill} className="icons !size-15" /> 
                : <p key={skill} className="w-fit m-1 min-w-5 px-3 rounded-xl text-center 2xl:px-3 bg-sky-900/50 2xl:rounded-2xl text-cyan-500">{skill}</p>
        ))} 
    </span>
  )
}

export default SkillsUsed;