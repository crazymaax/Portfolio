import { NavStyled } from "./styled"

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { useState } from "react"


const NavBar = () => {

    const [active, setActive] = useState("#")

    return (
        <NavStyled>
            <a href="#"
            onClick={() => setActive("#")}
            className={active === "#" ? "active" : ""}>
                <AiOutlineHome/>
            </a>
            <a href="#about"
            onClick={() => setActive("#about")}
            className={active === "#about" ? "active" : ""}>
                <AiOutlineUser/>
            </a>
            <a href="#experience"
            onClick={() => setActive("#experience")}
            className={active === "#experience" ? "active" : ""}>
                <BiBook/>
                </a>
            <a href="#portfolio"
            onClick={() => setActive("#portfolio")}
            className={active === "#portfolio" ? "active" : ""}>
                <RiServiceLine/>
            </a>
            <a href="#contact"
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}>
                <BiMessageSquareDetail/>
            </a>
        </NavStyled>
    )
}

export default NavBar