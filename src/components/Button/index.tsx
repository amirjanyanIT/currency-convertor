import styled from 'styled-components';
import { ButtonInterface } from '../../types'

export const Button = styled.button<ButtonInterface>`
    border: 1px solid var(--white);
    border-radius: 5px;
    padding: 5px;
    outline: 0;
    cursor: pointer;
    transition: background-color .3s ease-in-out, color .3s ease-in-out;
    font-weight: bold;
    ${({active}) => `
        background-color: var(${active ? "--white" : "--black"});
        color: var(${active ? "--black" : "--white"});
    `}
`