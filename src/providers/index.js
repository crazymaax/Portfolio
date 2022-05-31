import { ProjectProvider } from "./projects/projects";


const Providers = ({ children }) => {
    return (
        <ProjectProvider>
            { children }
        </ProjectProvider>
    );
};
export default Providers;
