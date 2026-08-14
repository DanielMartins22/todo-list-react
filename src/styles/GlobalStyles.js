import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        margin: 0;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease;
    }
`;


