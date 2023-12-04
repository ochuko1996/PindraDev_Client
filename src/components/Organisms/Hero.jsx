import {Link} from 'react-router-dom'
import Button from "../Atom/Button"
import SplitScreen from "../Templates/SplitScreen"
import { HeroHeading, HeroTextWrapper, SpanRed, HeroWrapper, HeroSubText, HeroBanner } from "./Styles/StyledHero"

function Hero() {
  return (
    <HeroWrapper>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <HeroTextWrapper>
          <HeroHeading>
            Acquire expertise as a <SpanRed>proficient software engineer,</SpanRed> even without prior knowledge.
          </HeroHeading>
          <HeroSubText>
            Attain the skills and expertise necessary to pursue a career as a Software Engineer in today&apos;s global job market.
          </HeroSubText>
          <Link to={'/login'}>
            <Button primary>
              Apply Now
            </Button>
          </Link>
        </HeroTextWrapper>
        <HeroBanner/>
      </SplitScreen>
    </HeroWrapper>
  )
}

export default Hero