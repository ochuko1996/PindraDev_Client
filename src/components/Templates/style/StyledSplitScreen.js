import styled from "styled-components"

export const SplitScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  @media screen and (min-width: ${({theme})=> theme.screen.lg}){
    flex-direction: row;
  }
`
export const Pane = styled.div`
  flex: ${props => props.weight}
`