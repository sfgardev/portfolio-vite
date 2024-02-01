import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* 
    font-family: 'DM Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
     */

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 1.125rem;
        color: #666;
        line-height: 1.44
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
