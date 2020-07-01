import styled from 'styled-components';
import PropTypes from 'prop-types';

const Col = styled.div`
  flex-basis: ${(props) => (100 / 12) * props.xs}%;
  flex-grow: 0;
  max-width: ${(props) => (100 / 12) * props.xs}%;
  ${(props) =>
    props.sm &&
    `@media (min-width: 576px) {
      flex-basis: ${(100 / 12) * props.sm}%;
      flex-grow: 0;
      max-width: ${(100 / 12) * props.sm}%;
  }`}
  ${(props) =>
    props.md &&
    `@media (min-width: 768px) {
      flex-basis: ${(100 / 12) * props.md}%;
      flex-grow: 0;
      max-width: ${(100 / 12) * props.md}%;
  }`}
  ${(props) =>
    props.lg &&
    `@media (min-width: 992px) {
      flex-basis: ${(100 / 12) * props.lg}%;
      flex-grow: 0;
      max-width: ${(100 / 12) * props.lg}%;
  }`}
  ${(props) =>
    props.xl &&
    `@media (min-width: 992px) {
      flex-basis: ${(100 / 12) * props.xl}%;
      flex-grow: 0;
      max-width: ${(100 / 12) * props.xl}%;
  }`}
`;

Col.propTypes = {
  xs: PropTypes.number.isRequired,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Col;
