import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0px 3px 4px 2px rgba(0, 0, 0, 0.2);
  ${(props) => props.spacing && `margin: ${props.spacing}rem;`}
  ${(props) => props.relative && 'position: relative;'}
`;

Card.propTypes = {
  spacing: PropTypes.number,
  relative: PropTypes.bool,
};

export default Card;
