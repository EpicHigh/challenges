import styled from 'styled-components';
import PropTypes from 'prop-types';

const Media = styled.div`
  background-image: ${(props) => `url('${props.url}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 45%;
`;

Media.propTypes = {
  url: PropTypes.string,
};

export default Media;
