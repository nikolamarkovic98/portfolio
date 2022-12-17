import { IProject } from "../../types";
import { AboutMe } from "../AboutMe/AboutMe";
import { ProjectComponent } from "../Project/ProjectComponent";

interface IProjectsProps {
    projects: IProject[];
    activeProject: number;
}

export const ProjectsComponent: React.FC<IProjectsProps> = ({
    projects,
    activeProject,
}) => {
    return (
        <main className="projects">
            <AboutMe activeIndex={activeProject} />
            {projects.map((project, index) => (
                <ProjectComponent
                    key={project.title}
                    index={index}
                    activeProject={activeProject}
                    project={project}
                />
            ))}
        </main>
    );
};
