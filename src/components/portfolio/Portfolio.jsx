import { PortfolioSection, PortfoliosDiv, ProjectContainer, Description } from "./styled"

import projects from "./projects"

const Portfolio = () => {

    return (
        <PortfolioSection id="portfolio">
            <h5>Conheça meus</h5>
            <h2>Projetos</h2>

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

                                <button>Informações</button>
                                {/* <a href={project.github} target="_blank">github</a>
                                <a href={project.live} target="_blank">demo</a> */}
                            </Description>

                        </ProjectContainer>

                    )
                })}
            </PortfoliosDiv>
        </PortfolioSection>
    )
}

export default Portfolio