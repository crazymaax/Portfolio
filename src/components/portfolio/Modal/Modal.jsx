import Rodal from 'rodal';

import { ModalDiv, ProjectInfo } from "./styled"
import 'rodal/lib/rodal.css';

import { useProject } from '../../../providers/projects/projects';


const Modal = () => {

    const { hide, visible, currentProject, windowWidth } = useProject()
    console.log(currentProject)

    const { name, image, language, description, github, live } = currentProject

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
                        <a href={github} target="_blank">Github</a>
                        <a href={live} target="_blank">Live</a>
                    </div>
                </ProjectInfo>
            </ModalDiv>
        </Rodal>

    )
}

export default Modal;
