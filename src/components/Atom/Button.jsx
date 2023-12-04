import { StyledButton } from './Styles/StyledButton'
import PropTypes from 'prop-types'
function Button({primary, secondary, neutral, children}) {
  return (
    <StyledButton primary={primary} secondary={secondary} neutral={neutral}>
        {children}
    </StyledButton>
  )
}
Button.propTypes ={
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
export default Button