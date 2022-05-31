import styled from "styled-components"

export const PortfolioSection = styled.section`
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

export const PortfoliosDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--color-primary-2);
    border-radius: 8px;
    
`

export const ProjectContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: var(--color-primary-2); */
    margin: 0.3rem;
    position: relative;
    transition: all 0.3s ease-in-out;
    
    figure {
        width: 225px;
        height: 100%;
        transition: opacity 0.5s;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        z-index: 2;
        &:hover {
            z-index: 1;
            opacity: 0;
        }
    }

    img {
        object-fit: cover;
        min-width: 100%;
        min-height: 100%
    }

    figcaption {
        display: none;
    }

    @media screen and (min-width: 768px) {
        figure {
            width: 450px;
        }
    }
`

export const Description = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
    opacity: 0;
    background-color: rgb(50 91 136 / 85%);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    z-index: 1;
    transition: opacity 0.5s;
    &:hover {
        z-index: 2;
        opacity: 1;
    }

    div {
        margin-top: 10px;
        color: var(--bg-color);
        h3 {
            font-weight: 700;
        }
    }

    button {
        margin-bottom: 10px;
        background-color: transparent;
        border: 1px solid var(--bg-color);
        border-radius: 3px;
        padding: 5px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
            border-color: var(--color-primary);
            color: var(--color-primary);
        }
    } 

    @media screen and (min-width: 768px) {

        div {
            margin-top: 50px;

            h3 {
                font-size: 22px;
            }

            span {
                font-size: 16px;
                color: var(--color-primary);
            }
        }

        button {
            margin-bottom: 50px;
        } 
    }
`