import { FooterStyled } from "./styled";

import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {

    return (
        <FooterStyled>
            <a href="#" className="arrow"><BsArrowUpCircle /></a>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/maxmilan/"><ImLinkedin2 /></a>
                </li>
                <li>
                    <a href="https://github.com/crazymaax"><FaGithub /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/maax.miilan/"><ImFacebook /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/crazy_maax/"><FaInstagram /></a>
                </li>
            </ul>

            <h5>Max Milan <span>©2022</span></h5>
        </FooterStyled>
    )
}

export default Footer