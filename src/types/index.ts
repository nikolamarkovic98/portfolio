export interface ILink {
    to: string;
    text: string;
}

export interface IProject {
    title: string;
    text: string;
    technologies: string[];
    links: ILink[];
}
