import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Poppins:wght@300;400;500;600;700&display=swap');

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
        line-height: 1.44
    }
`;

export default GlobalStyle;
