import styled from "styled-components"

export const PortfoliosDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${(props) => props.theme.secondary};
    border-radius: 8px;
    padding: 15px 0;
    `

export const ProjectContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0.3rem;
    position: relative;
    transition: all 0.3s ease-in-out;
    height: 160px;
    width: 95%;
    
    figure {
        width: 100%;
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
        width: inherit;
        height: 255px;
        
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
    color: white;

    z-index: 1;
    transition: opacity 0.5s;
    &:hover {
        z-index: 2;
        opacity: 1;
    }

    div {
        margin-top: 10px;

        h3 {
            font-weight: 700;
        }

        span {
            font-size: 10px;
            color: #62FFFF;
        }
    }
    
    button {
        margin-bottom: 10px;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        border-radius: 3px;
        padding: 6px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
            padding: 7px;
            background-color: #1A93CD;
            color: #1F1F38;
        }
    } 

    @media screen and (min-width: 768px) {
        div {
            margin-top: 50px;
            
            h3 {
                font-size: 22px;
            }
            
            span {
                font-size: 14px;
            }
        }

        button {
            margin-bottom: 50px;
        } 
    }
`