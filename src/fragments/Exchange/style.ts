import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    align-items: center;
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
    .exchange-svg-button {
        margin: 0 auto;
        cursor: pointer;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        background-color: transparent;
        border: 1px solid white;
        &:hover {
            border-color: var(--black);
            background-color: var(--white);
            svg {
                filter: invert(0);
            }
        }
        svg {
            height: 80px;
            filter: invert(1);
        }
    }   
`