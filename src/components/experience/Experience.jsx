import { ExperienceSection, Figure, SkillsDiv } from "./styled"
import skills from "./skills"
import { useState } from "react"

const Experience = () => {

    const [hover, setHover] = useState(false)

    return (
        <section id="experience">
            <h5>Saiba sobre minha</h5>
            <h2>Experiência</h2>

            <SkillsDiv>
            {skills.map((skill,index) => {
                return (
                <Figure key={index} onMouseOver={() => setHover(true)} hover={hover}>
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