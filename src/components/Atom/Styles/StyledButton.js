import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({primary, secondary})=> primary ? 'var(--brandRed)' : secondary ? 'var(--shadedRed)' : "#fff"};
    color: ${({primary, secondary})=> primary ? '#fff' : secondary ? 'var(--brandRed)' : "var(--brandRed)"};
    padding: 12px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 700;
    @media screen and (min-width: ${({theme})=> theme.screen.md}){
        padding: 12px 32px;
    }
`
export const StyledHeadingOne = styled.h1`
    
`