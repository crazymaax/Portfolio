import styled from "styled-components"

export const ModalDiv = styled.div`
    color: black;
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
border-top: 2px solid var(--color-primary-2);

h5 {
    font-size: 1.6rem;
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
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--bg-color);

        &:hover {
            background-color: var(--bg-color);
            border-color: transparent;
            color: var(--color-secondary);
        }
    }
    
    a:last-child {
        /* color: var(--color-secondary); */
        color: var(--bg-color);
        margin-left: 15px;
        &:hover {
            color: var(--color-secondary);
        }
    }
`