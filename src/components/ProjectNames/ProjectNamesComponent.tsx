import { IProject } from "../../types";

interface IProjctsListProps {
    projects: IProject[];
    currentProject: number;
    setProject: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectNamesComponent: React.FC<IProjctsListProps> = ({
    projects,
    currentProject,
    setProject,
}) => {
    return (
        <div className="project-list p">
            <h2>Projects:</h2>
            {projects.map((project, index) => {
                const className = `project-name ${
                    currentProject === index ? "active" : ""
                }`;

                return (
                    <p
                        key={project.title}
                        className={className}
                        onClick={() =>
                            setProject((prevProject) =>
                                prevProject === index ? -1 : index
                            )
                        }
                    >
                        {project.title}
                    </p>
                );
            })}
        </div>
    );
};
