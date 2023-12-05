import styled from "styled-components";

export const Reassuredheading = styled.h2`
    font-size: 1.5rem;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        font-size: 1.8rem;
    }
`
export const ReassuredMainWrapper = styled.section`
    height: 50dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        margin-top: 100px;
        width: 100%;
    }
`
export const ReassuredWrapper = styled.section`
    /* height: 50dvh; */
    display: flex;
    flex-direction: column;
    width: inherit;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        flex-direction: row;
        justify-content: space-between;
    }
`