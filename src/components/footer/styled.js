import styled from "styled-components";

export const FooterStyled = styled.footer`
    @keyframes slide-in-top {
        0% {
            transform: translateY(-10px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.terciary};
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
        position: absolute;
        top: -5px;
    }

    a {
        font-size: 2.3rem;
        color: ${(props) => props.theme.terciary};
        &:hover {
            color: ${(props) => props.theme.primary};
        }
    }

    ul {
        display: flex;
        height: 100px;
        align-items: center;
        
        li {
            margin: 0 8px;
            background-color: ${(props) => props.theme.quinternary};
            border-radius: 3px;
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
                transition: all 0.3s;
                &:hover {
                    animation: slide-in-top 0.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
                    padding: 8px;
                }
            }
        }
    }

    span {
        color: ${(props) => props.theme.primary};
    }
`