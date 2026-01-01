import { Skill } from "./types";
import { Proficiency, Preference, Category } from "./enum";

export const SKILLS: Skill[] = [
    // T3 Stack
    {skill:"T3 Stack", focus: true, image: "/t3.svg", proficiency:Proficiency.INTERMEDIATE, preference:Preference.CORE_SKILL, category:Category.STACK},
    {skill:"Next.js", focus: true, image: "/next.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.CORE_SKILL, category:Category.FRAMEWORK},
    {skill:"TypeScript", focus:true, image: "/typescript.png", proficiency:Proficiency.PROFICIENT, preference:Preference.CORE_SKILL, category:Category.LANGUAGE},
    {skill:"Tailwind CSS", focus:true, image: "/tailwind.png", proficiency:Proficiency.PROFICIENT, preference:Preference.CORE_SKILL, category:Category.FRAMEWORK},
    {skill:"tRPC", focus: true, image: "/trpc.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.CORE_SKILL, category:Category.BACKEND},
    {skill:"Prisma", focus:true, image: "/prisma.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.CORE_SKILL, category:Category.ORM},
    {skill:"Vercel", focus:true, image: "/vercel.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.CORE_SKILL, category:Category.VERSION_CONTROL},

    // TALL Stack
    {skill:"TALL Stack", image: "/tall.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.SUB_SKILL, category:Category.STACK},
    {skill:"Laravel", image: "/laravel.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.SUB_SKILL, category:Category.FRAMEWORK},
    {skill:"Livewire", image: "/livewire.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.SUB_SKILL, category:Category.FRAMEWORK},
    {skill:"Eloquent", image: "/eloquent.png", proficiency:Proficiency.FUNCTIONAL, preference:Preference.OTHER, category:Category.ORM},

    // Fundamental Skills
    {skill:"PHP", image: "/php.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.SUB_SKILL, category:Category.FUNDAMENTAL },
    {skill:"HTML", image: "/html.png", proficiency:Proficiency.ADVANCE, preference:Preference.OTHER, category:Category.FUNDAMENTAL},
    {skill:"CSS", image: "/css.png", proficiency:Proficiency.ADVANCE, preference:Preference.OTHER, category:Category.FUNDAMENTAL},

    // Languages
    {skill:"JavaScript", image: "/javascript.png", proficiency:Proficiency.PROFICIENT, preference:Preference.CORE_SKILL, category:Category.LANGUAGE},
    {skill:"Python", image: "/python.png", proficiency:Proficiency.BEGINNER, preference:Preference.OTHER, category:Category.LANGUAGE},
    {skill:"R", image: "/r.png", proficiency:Proficiency.FUNCTIONAL, preference:Preference.OTHER, category:Category.LANGUAGE},

    // Frameworks and CLIs
    {skill:"React", image: "/react.png", proficiency:Proficiency.PROFICIENT, preference:Preference.CORE_SKILL, category:Category.FRAMEWORK},
    {skill:"Bootstrap", image: "/bootstrap.png", proficiency:Proficiency.PROFICIENT, preference:Preference.OTHER, category:Category.FRAMEWORK},
    {skill:"WordPress", image: "/wordpress.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.CORE_SKILL, category:Category.CLI},
    {skill:"Express.js", image: "/expressjs.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.SUB_SKILL, category:Category.FRAMEWORK},
    {skill:"Ubuntu Linux", image: "/ubuntu.png", proficiency:Proficiency.FUNCTIONAL, preference:Preference.OTHER, category:Category.OS},

    // Backend 
    {skill:"SQL", image: "/sql.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.CORE_SKILL, category:Category.BACKEND},
    {skill:"Node.js", image: "/nodejs.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.OTHER, category:Category.BACKEND},

    // Databases
    {skill:"PostgreSQL", image: "/postgresql.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.OTHER, category:Category.DATABASE},
    {skill:"MySQL", image: "/mysql.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.OTHER, category:Category.DATABASE},
    {skill:"SQLite", image: "/sqlite.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.OTHER, category:Category.DATABASE},
    {skill:"Firebase", image: "/firebase.png", proficiency:Proficiency.FUNCTIONAL, preference:Preference.OTHER, category:Category.DATABASE},

    // ORMs
    {skill:"GraphQL", image: "/graphql.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.OTHER, category:Category.ORM},

    // Tools
    {skill:"GIT", focus:true, image: "/git.png", proficiency:Proficiency.PROFICIENT, preference:Preference.CORE_SKILL, category:Category.VERSION_CONTROL},
    {skill:"GitHub", image: "/github.png", proficiency:Proficiency.PROFICIENT, preference:Preference.CORE_SKILL, category:Category.VERSION_CONTROL},
    {skill:"Vite", image: "/vite.svg", proficiency:Proficiency.PROFICIENT, preference:Preference.OTHER, category:Category.OTHER},
    {skill:"Hostinger", image: "/hostinger.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.SUB_SKILL, category:Category.VERSION_CONTROL},
    {skill:"Flux UI", image: "/flux.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.OTHER, category:Category.TOOLS},
    {skill:"FileZilla", image: "/filezilla.png", proficiency:Proficiency.FUNCTIONAL, preference:Preference.OTHER, category:Category.VERSION_CONTROL},
    {skill:"Shiny", image: "/shiny.png", proficiency:Proficiency.BEGINNER, preference:Preference.OTHER, category:Category.TOOLS},
    {skill:"Sketchup", image: "/sketchup.png", proficiency:Proficiency.BEGINNER, preference:Preference.OTHER, category:Category.GRAPHICS},
    {skill:"Cube Dynasm", image: "/cube_dynasm.png", proficiency:Proficiency.FUNCTIONAL, preference:Preference.OTHER, category:Category.TOOLS},
    
    // Hardware Skills
    {skill:"Computer Assembling", image: "/computerassembling.png", proficiency:Proficiency.PROFICIENT, preference:Preference.HARDWARE, category:Category.HARDWARE},
    {skill:"Circuit Assembling", image: "/circuitassembling.png", proficiency:Proficiency.PROFICIENT, preference:Preference.HARDWARE, category:Category.HARDWARE},
    {skill:"Troubleshooting", image: "/troubleshooting.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.HARDWARE, category:Category.HARDWARE},
    {skill:"Soldering", image: "/soldering.png", proficiency:Proficiency.PROFICIENT, preference:Preference.HARDWARE, category:Category.HARDWARE},

    // Microsoft Skills
    {skill:"Word", image: "/word.png", proficiency:Proficiency.PROFICIENT, preference:Preference.SOFT_SKILLS, category:Category.TOOLS},
    {skill:"Powerpoint", image: "/powerpoint.png", proficiency:Proficiency.PROFICIENT, preference:Preference.SOFT_SKILLS, category:Category.TOOLS},
    {skill:"Excel", image: "/excel.png", proficiency:Proficiency.PROFICIENT, preference:Preference.SOFT_SKILLS, category:Category.TOOLS},

    // Design Skills
    {skill:"Canva", image: "/canva.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.DESIGN, category:Category.GRAPHICS},
    {skill:"Capcut", image: "/capcut.png", proficiency:Proficiency.INTERMEDIATE, preference:Preference.DESIGN, category:Category.GRAPHICS},
    {skill:"Powerdirector", image: "/powerdirector.png", proficiency:Proficiency.FUNCTIONAL, preference:Preference.DESIGN, category:Category.GRAPHICS},

    // Other Skills
    {skill:"Facebook", image: "/facebook.png", proficiency:Proficiency.PROFICIENT, preference:Preference.OTHER, category:Category.SOCIAL_MEDIA},
];