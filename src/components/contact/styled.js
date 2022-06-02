import styled from "styled-components"

export const ContactSection = styled.section`
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
    background-color: var(--bg-color-2);
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: all 400ms ease;
    &:hover {
        background-color: transparent;
        border-color: var(--color-primary-2);
    }

    span {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    h5 {
        color: var(--color-secondary);
    }
    
    a {
        margin-top: 0.7rem;
        display: inline-block;
        font-size: 0.9rem;
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
        border: 2px solid var(--color-primary-2);
        resize: none;
        color: var(--color-secondary);
    }
    
    button {
        width: max-content;
        display: inline-block;
        padding: 0.75rem 1.2rem;
        margin: 0 auto;
        border-radius: 0.4rem;
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--bg-color);
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background-color: var(--color-secondary);
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