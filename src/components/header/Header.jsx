import {HeaderStyled, HeaderContainer, Buttons, Socials, Image, ScrollDown} from "./styled.js"

import resume from "../../assets/Currículo de Max Milan Campos de Oliveira.pdf"
import photo from "../../assets/images/photo/Max.png"

import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const Header = () => {

    return (
        <HeaderStyled>
            <HeaderContainer>
                <h5>Eu sou</h5>
                <h1>Max Milan</h1>
                <h5>Desenvolvedor Front End</h5>
                <Buttons>
                    <a href={resume} download>Download Currículo</a>
                    <a href="#contact">Vamos Conversar</a>
                </Buttons>

                <Socials>
                    <a href="https://www.linkedin.com/in/maxmilan/" target="_blank">
                        <BsLinkedin/>
                    </a>
                    <a href="https://github.com/crazymaax" target="_blank">
                        <FaGithub/>
                    </a>
                </Socials>

                <Image>
                    <img src={photo} alt="Max Milan" />
                    <figcaption>Max Milan</figcaption>
                </Image>

                <ScrollDown href="#contact">Arraste até o fim</ScrollDown>
            
            </HeaderContainer>
        </HeaderStyled>
    )
}

export default Header