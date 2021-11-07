import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid var(--white);
    background-color: var(--black);
    color: var(--white);
    border-radius: 5px;
    padding: 5px;
    outline: 0;
    cursor: pointer;
    transition: background-color .3s ease-in-out, color .3s ease-in-out;
    font-weight: bold;
    &::placeholder {
        color: var(--white)
    }
`