
import styled from 'styled-components';
import { RowInterface } from '../../models';

export const Grid = {
    container: styled.div`
        width: 100%;
        border: 1px solid var(--white);
        border-radius: 5px;
        color: var(--white);
    `,
    row: styled.div<RowInterface>`
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        ${({ heading }) => (`
            font-weight: ${heading ? 'bold' : 'light'};
            text-decoration: ${heading ? 'underline' : 'none'};
        `)}
    `,
    col: styled.div`
        flex: 1;
        padding-left: 10px;
        padding: 6px;
        &:not(:first-child) {
            border-left: 1px solid var(--white);
        }
    `
}