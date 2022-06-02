import styled from "styled-components"

export const ModalDiv = styled.div`
    color: #424242;
    border-radius: 3px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    figure {
        /* width: 100%; */
        /* height: 50%; */
        height: 100%;
        /* overflow: hidden; */
        
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            /* min-width: 100%; */
            /* min-height: 100%; */
        }
        
        figcaption {
            display: none;
        }
    }

@media screen and (min-width: 768px) {

    figure {
        height: 320px
    }
}
`

export const ProjectInfo = styled.div`
margin-top: 10px;
border-top: 2px solid ${(props) => props.theme.quinternary};

h5 {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 10px;
}

    p {
        margin-bottom: 20px;
    }

    a {
        width: max-content;
        display: inline-block;
        padding: 0.2rem 1rem;
        border-radius: 0.4rem;
        border: 1px solid ${(props) => props.theme.secondary};
        background-color: ${(props) => props.theme.secondary};
        color: white;

        &:hover {
            background-color: ${(props) => props.theme.quinternary};
            border-color: transparent;
            color: white;
        }
    }
    
    a:last-child {
        margin-left: 15px;
    }
`