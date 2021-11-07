import styled from 'styled-components';

export const Select = styled.select`
    border: 1px solid var(--white);
    background-color: var(--black);
    color: var(--white);
    display: block;
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