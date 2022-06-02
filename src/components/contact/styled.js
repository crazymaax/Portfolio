import styled from "styled-components"

export const ContactContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    /* align-items: center; */
    
    @media screen and (min-width: 768px) {
        justify-content: space-between;

    }
    `

export const ContactsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    width: 100%;
    margin-bottom: 1.2rem;
    
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        width: inherit;
    }
    `

export const ContactOption = styled.div`
    background-color: ${(props) => props.theme.secondary};
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: all 400ms ease;
    &:hover {
        background-color: transparent;
        border-color: ${(props) => props.theme.secondary};
    }

    span {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    h5 {
        color: ${(props) => props.theme.quaternary};
    }
    
    a {
        margin-top: 0.7rem;
        display: inline-block;
        font-size: 0.9rem;
        color: ${(props) => props.theme.terciary};
        &:hover {
            color: ${(props) => props.theme.quinternary};

        }
    }
    `

export const FormStyled = styled.form`
    display:flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    
    input, textarea {
        /* width: 100%; */
        padding: 1.5rem;
        border-radius: 0.5rem;
        background: transparent;
        border: 2px solid ${(props) => props.theme.secondary};
        resize: none;
        color: ${(props) => props.theme.terciary};
        &::placeholder {
            color: ${(props) => props.theme.terciary};
        }
    }
    
    button {
        width: max-content;
        display: inline-block;
        padding: 0.75rem 1.2rem;
        margin: 0 auto;
        border-radius: 0.4rem;
        border: 1px solid ${(props) => props.theme.secondary};
        background-color: ${(props) => props.theme.secondary};
        cursor: pointer;
        transition: all 0.3s;
        color: white;
        &:hover {
            background-color: ${(props) => props.theme.quinternary};
            border-color: transparent;
        }
    }
    
    @media screen and (min-width: 768px) {
        width: 55%;
        
        button {
            margin: 0;
        }
    }
`