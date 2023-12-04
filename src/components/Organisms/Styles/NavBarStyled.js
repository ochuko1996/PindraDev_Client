    import styled from "styled-components";

export const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    width: 100vw;
    left: 0;
`
export const NavCenter = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    > a{
        text-decoration: none;
        text-transform: capitalize;
    }
    @media screen and (min-width: ${({theme}) => theme.screen.lg}){
        flex-direction: row;
        /* padding: 1.25rem; */
        background-color: ${props => props.scrollEffect ? "#fff": "transparent" };
        height: 8vh;
        align-items: center;
        padding: 1rem 5rem;
        align-items: center;
        justify-content: space-between;
    }
`
export const NavHeader = styled.div`
    display: flex;
    padding: 1.25rem;
    justify-content: space-between;
    > a{
        text-decoration: none;
        text-transform: capitalize;
    }
    align-items: center;
    @media screen and (min-width: ${({theme}) => theme.screen.lg}){
        padding: 0;
        width: 30vw;
    }
    
`
export const Brand = styled.img`
    width: 5rem;
    height: 1.5rem;
    @media screen and (min-width: ${({theme})=> theme.screen.lg}) {
        width: 7rem;
        height: 2rem;

    }
`
export const ToggleWrapper = styled.div`
    cursor: pointer;
    @media screen and (min-width: ${({theme}) => theme.screen.lg}){
        display: none;
    }
`
export const LinksContainer = styled.div`
    display: flex;
    height: ${props => (props.toggle ? "0": `${props.heightValue}px`)};
    position: relative;
    overflow: hidden;
    top: 0;
    z-index: 100;
    flex-direction: column;
    padding: 20px;
    @media screen and (min-width: ${({theme}) => theme.screen.lg}){
        width: 70vw;
        justify-content: space-between;
        height: auto;
        flex-direction: row;
        padding: 0;
    }
`
export const NavLinks = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    @media screen and (min-width: ${({theme}) => theme.screen.lg}){
        flex-direction: row;
        padding: 0;
        justify-content: center;
    }
`
export const NavItem = styled.li`
    position: relative;
    &:not(:last-child){
        margin-bottom: 36px;
    }
    > a{
        text-decoration: none;
        text-transform: capitalize;
        color: var(--gray1);
    }
    @media screen and (min-width: ${({theme}) => theme.screen.lg}){
        top: 0;
        &:not(:last-child){
            margin-right: 36px;
            margin-bottom: 0;
        }
        &::after{
            content: '';
            position: absolute;
            display: block;
            visibility: hidden;
            border: 1px solid var(--brandRed);
            width: 0%;
            bottom: -5px;
            transition: all .4s;
        }
        &:hover::after{
            visibility: visible;
            width: 100%;
        }
    }
`
export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top:; */
    > :first-child{
        margin-bottom: 1rem;
    }
    @media screen and (min-width: ${({theme}) => theme.screen.lg}){
        flex-direction: row;
        > :first-child{
            margin-right: 1rem;
        }
        /* width: 50%; */
        > :first-child{
            margin-bottom: 0;
        }
        justify-content: space-between;
    }
`
