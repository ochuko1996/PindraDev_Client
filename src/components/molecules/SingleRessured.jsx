import PropTypes from 'prop-types' 
import { FcCurrencyExchange, FcFactory, FcDonate } from 'react-icons/fc';
import { SingleReassuredWrapper, StyledReassuredContent, StyledReassuredIcon, StyledReassuredTitle } from "./Styles/StyledSingleReassured"

const iconComponents = {
    FcCurrencyExchange,
    FcFactory,
    FcDonate
};
function SingleRessured({icon, title, content}) {
  const IconComponent = iconComponents[icon]
  return (
    <SingleReassuredWrapper>
			<StyledReassuredIcon>
				<IconComponent/>
			</StyledReassuredIcon>
			<StyledReassuredTitle>
					{title}
			</StyledReassuredTitle>
			<StyledReassuredContent>
					{content}
			</StyledReassuredContent>
    </SingleReassuredWrapper>
  )
}
SingleRessured.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}
export default SingleRessured