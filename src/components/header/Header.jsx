import { HeaderStyled, HeaderContainer, Buttons, Socials, Image } from "./styled.js"

import Resume from "../../assets/Currículo de Max Milan Campos de Oliveira.pdf"
import Photo from "../../assets/images/photo/Max.jpg"

import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

const Header = () => {

    return (
        <HeaderStyled>
            <HeaderContainer>
                <h5>Eu sou</h5>
                <h1>Max Milan</h1>
                <h5>Desenvolvedor Front End</h5>
                <Buttons>
                    <a href={Resume} download>Download Currículo</a>
                    <a href="#contact">Vamos Conversar</a>
                </Buttons>

                <Socials>
                    <a href="https://www.linkedin.com/in/maxmilan/" target="_blank">
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/crazymaax" target="_blank">
                        <FaGithub />
                    </a>
                </Socials>

                <Image>
                    <img src={Photo} alt="Max Milan" />
                    <figcaption>Max Milan</figcaption>
                </Image>

            </HeaderContainer>
        </HeaderStyled>
    )
}

export default Header