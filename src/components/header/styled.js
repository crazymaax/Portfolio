import styled from "styled-components"

export const HeaderStyled = styled.header`
    height: 98vh;
    padding-top: 40px;
    overflow: hidden;

/*     @media screen and (max-width: 1024px) {
        height: 68vh;
    } */

/*     @media screen and (min-width: 768px) {
        height: 100vh;
    } */
`

export const HeaderContainer = styled.div`
    width: 75%;
    margin: 0 auto;
    text-align: center;
    height: 100%;
    position: relative;

    h1{
        color: var(--color-secondary);
        font-weight: 600;
	    font-size: 2.5rem;
    }

`

export const Buttons = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;

    a {
        width: max-content;
        display: inline-block;
        padding: 0.75rem 1.2rem;
        border-radius: 0.4rem;
        border: 1px solid var(--color-primary);

        &:hover {
            background-color: var(--color-secondary);
            border-color: transparent;
            color: var(--bg-color)
        }
    }

    a:last-child {
        background-color: var(--color-primary);
        color: var(--bg-color);
    }

`

export const Socials = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
        position: absolute;
        left: 0;
        bottom: 3rem;
        &::after {
            content: "";
            width: 1px;
            height: 2rem;
            background-color: var(--color-primary);
        }
    }
`

export const Image = styled.figure`
    background-color: linear-gradient(var(--color-primary));
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    /* margin-top: 4rem; */
    /* border-radius: 5rem 5rem 0 0; */
    /* overflow: hidden; */
    /* padding: 2rem 0rem 1.5rem 0rem; */
    padding-top: 40px;

    img {
        width: 100%;
        min-width: 200px;
        /* border-radius: 12rem 12rem 0 0; */
        /* object-fit: cover; */
    }
    
    figcaption {
        display: none;
    }
    
    @media screen and (min-width: 768px) {
        width: 22rem;
        height: 30rem;
        /* border-radius: 12rem 12rem 0 0; */
        /* padding: 5rem 1rem 1.5rem 1rem; */

        img {
            /* border-radius: 0; */

        }
        
    }
`

export const ScrollDown = styled.a`
    display: none;
    
    @media screen and (min-width: 768px) {
        display: inline-block;
        position: absolute;
        right: -2.3rem;
        bottom: 5rem;
        transform: rotate(90deg);
        font-weight: 300;
        font-size: 0.9rem;
    }
`