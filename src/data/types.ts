import { Proficiency, Preference, Category } from "./enum";

export interface Skill {
    skill: string,
    focus?: boolean,
    image: string,
    proficiency: Proficiency,
    preference: Preference,
    category: Category
}

export interface Skills {
    area: string,
    skills: Skill[]
}

export interface Qualification {
    title: string,
    company: string,
    date: string,
    contract: string,
    description: string[],
    skills: string[]
};

export type Project = {
    name: string,
    image: string,
    description: string,
    skills: string[],
    link?: string
}[]