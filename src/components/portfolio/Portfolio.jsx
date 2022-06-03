import { PortfoliosDiv, ProjectContainer, Description } from "./styled"

import projects from "./projects"
import Modal from "./Modal/Modal"

import { useProject } from "../../providers/projects/projects"

const Portfolio = () => {

    const { show } = useProject()

    return (
        <section id="portfolio">
            <h5>Conheça meus</h5>
            <h2>Projetos</h2>
            <Modal />
            <PortfoliosDiv>
                {projects.map((project, index) => {
                    return (
                        <ProjectContainer key={index}>
                            <figure>
                                <img src={project.image} alt={project.name} />
                                <figcaption>{project.name}</figcaption>
                            </figure>
                            <Description>
                                <div>
                                    <h3>{project.name}</h3>
                                    <span>{project.language}</span>
                                </div>

                                <button onClick={() => show(project)}>Informações</button>

                            </Description>
                        </ProjectContainer>
                    )
                })}
            </PortfoliosDiv>
        </section>
    )
}

export default Portfolio