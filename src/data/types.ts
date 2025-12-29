export type Skill = {
    skill: string,
    image: string,
    proficiency: string
}[]

export type Skills = {
    area: string,
    skills: Skill
}[]

export type Qualification = {
    title: string,
    company: string,
    date: string,
    contract: string,
    description: string[],
    skills: string[]
}[];

export type Project = {
    name: string,
    image: string,
    description: string,
    skills: string[],
    link?: string
}[]