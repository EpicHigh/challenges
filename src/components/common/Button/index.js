import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  ${(props) =>
    props.disabled
      ? css`
          background-color: grey;
          border-radius: 2px;
          color: white;
          font-weight: bold;
          padding: 8px;
          text-align: center;
        `
      : css`
          background-color: transparent;
          border: 2px solid #215cec;
          border-radius: 2px;
          color: #215cec;
          cursor: pointer;
          font-weight: bold;
          padding: 8px;
          text-align: center;
          transition: all linear 250ms;
          &:hover {
            background-color: #215cec;
            color: white;
          }
        `}
`;

Button.propTypes = {
  disabled: PropTypes.bool,
};

export default Button;
