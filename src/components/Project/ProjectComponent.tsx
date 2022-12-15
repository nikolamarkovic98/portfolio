import { IProject } from "../../types";

interface IProjectProps {
    project: IProject;
    activeProject: number;
    index: number;
}

export const ProjectComponent: React.FC<IProjectProps> = (props) => {
    const { project, activeProject, index } = props;

    const className = `project p ${activeProject === index ? "active" : ""}`;

    return (
        <div className={className}>
            <div>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
            </div>
            <div className="links">
                {project.links.map(({ to, text }) => (
                    <a key={text} className="link" href={to} target="_blank">
                        {text}
                    </a>
                ))}
            </div>
        </div>
    );
};
