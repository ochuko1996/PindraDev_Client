import styled from "styled-components";

export const SingleReassuredWrapper = styled.article`
    width: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledReassuredIcon = styled.div`
    font-size: 2.3rem;
`
export const StyledReassuredTitle = styled.h3`
    color: var(--gray1);
    font-size: 1.1rem;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        font-size: 1.5rem;
    }
    `
export const StyledReassuredContent = styled.p`
    font-size: .9rem;
    line-height: 20px;
    color: var(--gray2);
    text-align: center;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}){
        line-height: 30px;
        font-size: 1rem;
        
    }
`