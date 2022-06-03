import { ModalDiv, ProjectInfo } from "./styled"

import { BiLinkExternal } from "react-icons/bi"

import { useProject } from '../../../providers/projects/projects';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Modal = () => {

    const { hide, visible, currentProject, windowWidth } = useProject()

    const { name, image, description, github, live } = currentProject

    return (
        <Rodal visible={visible} width={windowWidth()} height="550" onClose={() => hide()}>
            <ModalDiv>
                <figure>
                    <img src={image} alt={name} />
                    <figcaption>{name}</figcaption>
                </figure>
                <ProjectInfo>
                    <h5>{name}</h5>
                    <p>{description}</p>

                    <div>
                        <a href={github} target="_blank">
                            Github <BiLinkExternal size="10" />
                        </a>
                        <a href={live} target="_blank">
                            Vá ao site <BiLinkExternal size="10" />
                        </a>
                    </div>
                </ProjectInfo>
            </ModalDiv>
        </Rodal>

    )
}

export default Modal;
