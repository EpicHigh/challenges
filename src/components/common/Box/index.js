import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  ${(props) => props.fullWidth && 'width: 100%;'}
  ${(props) => props.top && `padding-top: ${props.top}rem;`}
  ${(props) => props.bottom && `padding-bottom: ${props.bottom}rem;`}
  ${(props) => props.left && `padding-left: ${props.left}rem;`}
  ${(props) => props.right && `padding-right: ${props.right}rem;`}
  ${(props) => props.display && `display: ${props.display};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.direction && `flex-direction: ${props.direction};`}
`;

Box.propTypes = {
  fullWidth: PropTypes.bool,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  display: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
  direction: PropTypes.string,
};

export default Box;
