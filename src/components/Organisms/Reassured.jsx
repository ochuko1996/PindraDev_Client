import { Container } from "../../GlobalStyles"
import { ReassuredContent } from "../../constant"
import SingleRessured from "../molecules/SingleRessured"
import { ReassuredMainWrapper, ReassuredWrapper, Reassuredheading } from "./Styles/StyledReassured"

function Reassured() {
  return (
    <Container>
        <ReassuredMainWrapper>
            <Reassuredheading>We&apos;ve got you taken care of!</Reassuredheading>
            <ReassuredWrapper>
                {
                    ReassuredContent.map(item => {
                        return <SingleRessured key={item.id} {...item}/>
                    })
                }
            </ReassuredWrapper>
        </ReassuredMainWrapper>
    </Container>
  )
}

export default Reassured