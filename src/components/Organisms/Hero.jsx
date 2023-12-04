import Button from "../Atom/Button"
import SplitScreen from "../Templates/SplitScreen"
import { HeroWrapper } from "./Styles/NavBarStyled"
import { HeroHeading, HeroTextWrapper, SpanRed } from "./Styles/StyledHero"

function Hero() {
  return (
    <HeroWrapper>
        <SplitScreen leftWeight={1} rightWeight={1}>
          <HeroTextWrapper>
            <HeroHeading>
              Acquire expertise as a <SpanRed>proficient software engineer,</SpanRed> even without prior knowledge.
            </HeroHeading>
            <Button primary>
              Apply Now
            </Button>
          </HeroTextWrapper>
          <h1>right</h1>
        </SplitScreen>
    </HeroWrapper>
  )
}

export default Hero