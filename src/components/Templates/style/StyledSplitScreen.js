import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${({theme})=> theme.screen.md}){
    flex-direction: row;
  }
`
export const Pane = styled.div`
  flex: ${props => props.weight}
`