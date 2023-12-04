import styled from "styled-components";
import { StyledButton } from "../../Atom/Styles/StyledButton";
import Banner from '../../../assets/Image 2.jpg'
export const HeroWrapper = styled.section`
    height: 100dvh;
    /* background-color: black; */
`
export const HeroTextWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${StyledButton}{
        width: 200px;
    }
    padding: 20px;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        align-items: flex-start;
        ${StyledButton}{
            width: auto;
        }
        margin: 0 0 0 10rem;
        padding: 0;
    }
    `
export const HeroBanner = styled.section`
    display: none;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        background-image: url('${Banner}');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        display: block;
    }
`
export const HeroHeading = styled.h1`
    margin: 180px 0px 0px;
    font-size: 1.5rem;
    color: var(--gray3);
    text-align: center;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        text-align: left;
        margin: 250px 0 0px;
        width: calc(80% - 30px);
        line-height: 50px;
        font-weight: 600px;
        font-size: 3rem;
    }
`
export const SpanRed = styled.span`
    color: var(--brandRed);
    text-transform: capitalize;
`
export const HeroSubText = styled.p`
    color: var(--gray1);
    line-height: 24px;
    font-weight: 400;
    margin: 2.2rem 0;
    text-align: center;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        text-align: left;
        font-size: 1.2rem;
        margin: 2.5rem 0;
        width: calc(70% - 70px) ;
    }
`