import { NavStyled } from "./styled"

import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai"
import { BiStar } from "react-icons/bi"
import { MdWorkOutline } from "react-icons/md"
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
                <BiStar/>
                </a>
            <a href="#portfolio"
            onClick={() => setActive("#portfolio")}
            className={active === "#portfolio" ? "active" : ""}>
                <MdWorkOutline/>
            </a>
            <a href="#contact"
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}>
                <AiOutlineMessage/>
            </a>
        </NavStyled>
    )
}

export default NavBar