import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.spacing && `padding: ${props.spacing}rem;`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
`;

Row.propTypes = {
  justify: PropTypes.string,
  spacing: PropTypes.number,
  alignItems: PropTypes.string,
};

export default Row;
