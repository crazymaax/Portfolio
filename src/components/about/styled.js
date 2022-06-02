import styled from "styled-components"

export const AboutSection = styled.section`
    width: 75%;
    margin: 8rem auto;
    display: flex;
    flex-direction: column;
    text-align: justify;

    h5, h2 {
        text-align: center;
    }

    h2 {
        margin-bottom: 30px;
        color: var(--color-primary);
        font-weight: 700;
        font-size: 1.6rem;
    }

`

export const AboutContainer = styled.div`
    /* display: grid;
    grid-template-columns: 35% 50%;
    gap: 35%; */
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;

    a {
        width: max-content;
        display: inline-block;
        padding: 0.75rem 1.2rem;
        border-radius: 0.4rem;
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--bg-color);
    }
`

export const HighlightInfos = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    
    h4 {
        color: var(--color-primary);
        margin-top: 20px;
        font-size: 1.3rem;
        font-weight: 500;
        padding: 1rem;
    }
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`

export const ImageContainer = styled.div`
    /* width: 100%; */
    /* width: 80%; */
    /* height: 95%; */
    /* margin-right: 50px; */
    /* aspect-ratio: 1/1; */
    border-radius: 3rem;
    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
    /* display: grid; */
    /* place-items: center; */
    margin-bottom: 20px;
    
    figure {
        border-radius: 3rem;
        overflow: hidden;
        transform: rotate(10deg);
        transition: all 400ms ease;
        &:hover {
            transform: rotate(0);
        }

        img {
            /* width: 100%; */
            height: 188px;
        }

        figcaption {
            display: none;
        }
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`

export const CardsContainer = styled.div`
    /* display: grid; */
    /* grid-template-columns: repeat(3, 1fr); */
    gap: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Cards = styled.div`
    background-color: var(--bg-color-2);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 1.7rem;
    /* height: 100px; */
    width: 100px;
    text-align: center;
    transition: all 400ms ease;
    &:hover {
        background-color: transparent;
        border-color: var(--color-primary-2);
    }

    .icon {
        color: var(--color-primary);
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 0.9rem;
    }

    small {
        font-size: 0.7rem;
        color: var(--color-secondary);
    }
`

export const TextContainer = styled.div`

    p {
        /* margin: 2rem 0 2.6rem; */
        margin: 5px;
        color: var(--color-secondary);
    }
    
    p:last-child {
        /* margin: 2rem 0 2.6rem; */
        margin-bottom: 30px;
    }


`