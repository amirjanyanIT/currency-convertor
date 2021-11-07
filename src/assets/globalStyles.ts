import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Macondo&display=swap');
    :root {
        --black: #202124;
        --white: #e1e1e1;
    }
    body {
        background-color: var(--black);
        margin: 0;
        font-family: 'Macondo', cursive;
    }
    .app {
        max-width: 1000px;
        margin: 30px auto;
    }
`;
