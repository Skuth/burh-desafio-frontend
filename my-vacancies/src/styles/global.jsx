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
        --color-light-pink: #e6cff2;
        --color-light-yellow: #FFE5A0;
        --color-dark-yellow: #ebbe47;
        --color-light-blue: #BFE1F6;
        --color-ciano: #215A6C;
        --color-green: #27AE60;
        --color-red: #EB5757;

        --color-white-fixed: #FFF;
    }
`;
