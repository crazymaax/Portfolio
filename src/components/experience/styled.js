import styled from "styled-components"

export const SkillsDiv = styled.div`
    background-color: ${(props) => props.theme.secondary};
    padding: 1.2rem;
    border-radius: 8px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Figure = styled.figure`
    background-color: ${(props) => props.theme.quinternary};
    border: 0.5px solid ${(props) => props.theme.terciary};
    width: 100%;
    height: 75px;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    &:hover {
        box-shadow: 0px 0px 10px 6px rgba(255,255,255,0.4);
    }
    

    img {
        max-width: 50%;
        /* height: auto; */
        margin: 0 auto;
    }

    figcaption {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        color: white;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 8px;
        opacity: 0;
        &:hover {
            transition: all 400ms ease;
            opacity: 1;
        }
    }

    @media screen and (min-width: 350px) {
        width: 70px;
        height: 85px;
        
        img {
            max-width: 100%;
        }
    }
`