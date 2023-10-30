export interface Tool {
    name: string,
    descr: string,
    color: string,
    experience: string,
    link: string
};

export interface Project {
    name: string,
    image: string,
    description: string,
    tools: string[],
    link: string,
    github: string,
    year: number
}