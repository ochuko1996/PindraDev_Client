import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --brandRed : #e62e2d;
        --shadedRed : #fdf3f3;
        --gray1: rgb(71,88,99);
        --gray2: rgb(124,136,143);
        --blue: #6096BA;
        --dark-blue: #5171A5;
    }
   
`