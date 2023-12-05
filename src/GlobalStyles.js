import styled, { createGlobalStyle } from "styled-components";

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
        --gray3: rgb(30, 50, 63);
        --blue: #6096BA;
        --dark-blue: #5171A5;
    }
   
`
export const Container = styled.div`
    max-width: 100vw;
    margin: 0 auto;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        max-width: 1250px;
        
    }
`