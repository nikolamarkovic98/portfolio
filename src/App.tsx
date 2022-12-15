import { useState } from "react";
import projectsData from "./data/projects";
import { ProjectNamesComponent } from "./components/ProjectNames/ProjectNamesComponent";
import { NavigationComponent } from "./components/Navigation/NavigationComponent";
import { ProjectsComponent } from "./components/Projects/Projects";
import "./styles/_styles.scss";

function App() {
    const [project, setProject] = useState(-1);

    return (
        <div className="app">
            <NavigationComponent setProject={setProject} />
            <div className="container">
                <main>
                    <ProjectsComponent
                        projects={projectsData}
                        activeProject={project}
                    />
                </main>
                <ProjectNamesComponent
                    projects={projectsData}
                    currentProject={project}
                    setProject={setProject}
                />
            </div>
        </div>
    );
}

export default App;
