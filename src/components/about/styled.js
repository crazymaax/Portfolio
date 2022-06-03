import styled from "styled-components"

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;

    a {
        width: max-content;
        display: inline-block;
        padding: 0.75rem 1.2rem;
        border-radius: 0.4rem;
        background-color: ${(props) => props.theme.secondary};
        color: white;
        &:hover {
            background-color: ${(props) => props.theme.quinternary};
        }
    }
`

export const HighlightInfos = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    
    h4 {
        color: ${(props) => props.theme.quaternary};
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
    border-radius: 3rem;
    background: linear-gradient(45deg, transparent, ${(props) => props.theme.quinternary}, transparent);
    margin-bottom: 20px;
    
    figure {
        display: flex;
        align-items: center;
        transform: rotate(10deg);
        transition: all 400ms ease;
        &:hover {
            transform: rotate(0);
        }
        
        img {
            border-radius: 3rem;
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
    gap: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Cards = styled.div`
    background-color: ${(props) => props.theme.secondary};
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 1.7rem;
    width: 100px;
    text-align: center;
    transition: all 400ms ease;
    &:hover {
        background-color: transparent;
        border-color: ${(props) => props.theme.secondary};
    }

    .icon {
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    h5 {
        font-size: 0.9rem;
    }

    small {
        font-size: 0.7rem;
        color: ${(props) => props.theme.quaternary};
    }
`

export const TextContainer = styled.div`
    p {
        margin: 5px;
    }
    
    p:last-child {
        margin-bottom: 30px;
    }
`