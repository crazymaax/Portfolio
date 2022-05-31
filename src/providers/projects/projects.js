import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    const [currentProject, setCurrentProject] = useState({});
    const [visible, setVisible] = useState(false);

    const show = (project) => {
        setCurrentProject(project)
        setVisible(true)
    }

    const hide = () => {
        setVisible(false)
    }

    const windowWidth = () => {
        let windowWidth = window.innerWidth

        if(windowWidth > 768){
            return windowWidth - 400;
        }else {
            return windowWidth - 100;
        }
    }


    return (
        <ProjectContext.Provider value={{ currentProject, setCurrentProject, visible, show, hide, windowWidth }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => useContext(ProjectContext);
