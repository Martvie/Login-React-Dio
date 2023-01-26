import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 4.2ewm;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 2.1ewm;
    overflow: hidden;
    padding: 0 1rem;
    
    & input {
        width: 100%;
        height: 4.2rem;
        border-radius: 2.1rem;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 1.2rem;
    margin-top: 0.8rem;
    margin-left: 1rem;
`