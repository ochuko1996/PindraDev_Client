import PropTypes from 'prop-types';
import React from "react";
import { Container, Pane } from "./style/StyledSplitScreen";

function SplitScreen({children, leftWeight=1, rightWeight=1}) {
  const [left, right] = React.Children.toArray(children)
  return (
      <Container>
        <Pane weight={leftWeight}>
          {left}
        </Pane>
        <Pane weight={rightWeight}>
          {right}
        </Pane>
      </Container>
  )
}
SplitScreen.propTypes = {
  children: PropTypes.node.isRequired,
  leftWeight: PropTypes.number.isRequired,
  rightWeight: PropTypes.number.isRequired
}
export default SplitScreen