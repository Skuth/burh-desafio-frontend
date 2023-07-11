import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-blue: #5865F2;
        --color-light-gray: #e4e6d8;
        --color-medium-gray: #b8b4d1;
        --color-dark-gray: #7e868d;

        --color-white-fixed: #FFF;
    }
`