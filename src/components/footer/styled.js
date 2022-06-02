import styled from "styled-components";

export const FooterStyled = styled.footer`
background-color: var(--color-primary);
color: var(--bg-color);
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
height: 150px;
padding: 1rem;
padding-top: 4rem;
position: relative;
z-index: 4;

.arrow {
    /* margin-bottom: 2rem; */
    position: absolute;
    top: -5px;
    /* left: 50%; */
    /* background-color: var(--color-primary-2); */
    /* z-index:5; */
}

a {
    font-size: 2.3rem;
    color: var(--bg-color);
    &:hover {
        color: var(--color-secondary);
    }
}

ul {
    display: flex;
    height: 100px;
    align-items: center;

    li {
        margin: 0 8px;
        background-color: gray;
        transition: box-shadow 0.3s;
        &:hover {
            box-shadow: 0px 11px 25px 4px rgba(0,0,0,0.3);
        }
        
        a {
            width: 100%;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            font-size: 2rem;
            padding: 5px;
            transition: padding 0.3s, color 0.3s, transform 0.3s;
            &:hover {
                color: var(--color-secondary);
                padding: 8px;
            }
        }
    }
}

span {
    color: var(--color-terciary);
}
`