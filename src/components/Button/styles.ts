import styled, {css} from "styled-components";


export const ButtonContainer = styled.button`
    width: 100%;
    height: 4.2rem;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 2.1rem;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    ${({disabled}) => disabled === true && css`

    opacity: 0.3;
    
    &:hover {
        opacity: 0.2;
        cursor: not-allowed ;
    }

    `}
    `