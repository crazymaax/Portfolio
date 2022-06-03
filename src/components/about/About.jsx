import { AboutContainer, HighlightInfos, ImageContainer, CardsContainer, Cards, TextContainer } from "./styled"

import photo from "../../assets/images/photo/MaxAbout.png"

import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {

    return (
        <section id="about">
            <h5>Conheça</h5>
            <h2>Sobre mim</h2>

            <AboutContainer>
                <HighlightInfos>
                    <ImageContainer>
                        <figure>
                            <img src={photo} alt="Max Milan" />
                            <figcaption>Max Milan</figcaption>
                        </figure>
                    </ImageContainer>

                    <div>
                        <CardsContainer>
                            <Cards>
                                <FaAward className="icon" />
                                <h5>Experiência</h5>
                                <small>1+ Anos</small>
                            </Cards>
                            <Cards>
                                <VscFolderLibrary className="icon" />
                                <h5>Projetos</h5>
                                <small>10+</small>
                            </Cards>
                        </CardsContainer>

                        <h4>
                            Apaixonado por resolver problemas de forma criativa!
                        </h4>
                    </div>
                </HighlightInfos>

                <div>
                    <TextContainer>
                        <p>
                            Sempre me interessei pelo mundo que os computadores e videogames me proporcionavam. Quando criança, gostava muito de jogar e conversar com outras pessoas de forma on-line. Isso me fez apaixonar pela tecnologia e se tornar curioso para entender como este mundo tão maravilhoso funcionava.
                        </p>
                        <p>
                            Entretanto, acabei percorrendo outro caminho, decidi cursar Engenharia Mecânica devido a facilidade com lógica, matemática e física. Neste período produzi um artigo cientifico sobre a performance dos aços automobilísticos e como melhorar eles com a utilização de Laser a fibra ótica. Então, após 10 semestres, passei por experiências que me possibilitaram o desenvolvimento de uma boa resolução de problemas, comunicação assertiva e pensar de forma inovadora e estratégica.
                        </p>
                        <p>
                            Atualmente fiz um compromisso comigo de trazer soluções para o meio tecnológico, sendo um desenvolvedor Web Front End e futuramente Full Stack.
                        </p>

                    </TextContainer>

                    <a href="#contact">Vamos conversar</a>
                </div>
            </AboutContainer>
        </section>
    )
}

export default About