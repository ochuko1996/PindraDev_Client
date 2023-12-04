import styled from "styled-components";

export const HeroWrapper = styled.section`
    height: 100dvh;
    /* background-color: black; */
`
export const HeroTextWrapper = styled.section`
    
`
export const HeroHeading = styled.h1`
    margin: 70px 0 15px;
    color: var(--gray1);
    @media screen and (min-width: ${({theme})=> theme.screen.md}){
        margin: 250px 0 30px;
        width: calc(70% - 30px);
        line-height: 50px;
        font-weight: 600px;
        font-size: 3rem;
    }
`
export const SpanRed = styled.span`
    color: var(--brandRed);
    text-transform: capitalize;
`