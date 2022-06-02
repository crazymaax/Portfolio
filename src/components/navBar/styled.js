import styled from "styled-components";

export const NavStyled = styled.nav`
    background-color: rgba(0, 0, 0, 0.3);
    /* width: max-content; */
    /* display: block; */
    /* padding: 0.7rem 1.7rem; */
    padding: 12px;
    z-index: 3;
    position: fixed;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    display: flex;
    /* gap: 0.8rem; */
    gap: 12px;
    border-radius: 3rem;
    backdrop-filter: blur(3px);

    a{
        background: transparent;
        padding: 0.9rem;
        border-radius: 50%;
        display: flex;
        color: ${(props) => props.theme.terciary};
        font-size: 1.1rem;
        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
            color: ${(props) => props.theme.quinternary};
        }
    }
    
    a.active {
        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.quaternary};
    }
`

export const ChangeMode = styled.button`
    position: fixed;
    top: 15px;
    left: 90%;
    z-index: 3;
    padding: 5px;
    line-height: 5px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.primary};
    border-radius: 3px;
    border: transparent;
    background-color: ${(props) => props.theme.terciary};
`