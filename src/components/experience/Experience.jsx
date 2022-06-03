import { Figure, SkillsDiv } from "./styled"

import skills from "./skills"

const Experience = () => {

    return (
        <section id="experience">
            <h5>Saiba sobre minha</h5>
            <h2>Experiência</h2>

            <SkillsDiv>
                {skills.map((skill, index) => {
                    return (
                        <Figure key={index}>
                            <img src={skill.image} alt={skill.name} />
                            <figcaption>{skill.name}</figcaption>
                        </Figure>
                    )
                })}
            </SkillsDiv>
        </section>
    )
}

export default Experience