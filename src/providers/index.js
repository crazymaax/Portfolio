import { ProjectProvider } from "./projects/projects";
import { UIProvider } from "./UI/ui";


const Providers = ({ children }) => {
    return (
        <UIProvider>
            <ProjectProvider>
                {children}
            </ProjectProvider>
        </UIProvider>
    );
};
export default Providers;
