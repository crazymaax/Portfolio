import styled from "styled-components";

export const NavStyled = styled.nav`
    background-color: rgba(0, 0, 0, 0.3);
    /* width: max-content; */
    /* display: block; */
    /* padding: 0.7rem 1.7rem; */
    padding: 12px;
    /* z-index: 2; */
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
        color: var(--color-terciary);
        font-size: 1.1rem;
        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
            color: var(--color-primary);
        }
    }
    
    a.active {
        background-color: var(--bg-color);
        color: var(--color-primary);
    }
`