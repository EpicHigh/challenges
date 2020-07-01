import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makePayments } from '../../../store/actions';
import Card from '../../common/Card';
import Option from '../../common/Option';
import Name from '../../common/Name';
import Media from '../../common/Media';
import Row from '../../common/Row';
import Box from '../../common/Box';
import CancelButton from '../../common/CancelButton';
import Button from '../../common/Button';

const CardItem = (props) => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const payments = [10, 20, 50, 100, 500];

  const handlePayments = useCallback(
    (charitiesId, amount, currency) => () => dispatch(makePayments(charitiesId, amount, currency)),
    [dispatch],
  );

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setSelectedAmount(0);
  }, []);

  return (
    <Card relative spacing={1.5}>
      <Media url={`./images/${props?.charity?.image}`} />
      <Box alignItems="center" bottom={1.5} display="flex" justify="space-between" left={1} right={1} top={1.5}>
        <Name>{props?.charity?.name}</Name>
        <Button data-testid="donate" onClick={() => setIsOpen(true)}>
          Donate
        </Button>
      </Box>
      {isOpen && (
        <Option data-testid="option">
          <CancelButton data-testid="cancel" onClick={handleClose}>
            X
          </CancelButton>
          <Box fullWidth alignItems="center" direction="column" display="flex" justify="space-between">
            <Box bottom={1}>
              <Name data-testid="description">Select amount to date (USD)</Name>
            </Box>
            <Box bottom={1} display="flex" top={1}>
              {payments?.map((amount, j) => (
                <Row key={`payment-${j}`} alignItems="baseline" spacing={0.5}>
                  <input
                    data-testid={`${amount}-payment-${props?.index}${j}`}
                    id={`${amount}-payment-${props?.index}${j}`}
                    name="payment"
                    type="radio"
                    onClick={() => setSelectedAmount(amount)}
                  />
                  <label htmlFor={`${amount}-payment-${props?.index}${j}`}>{amount}</label>
                </Row>
              ))}
            </Box>
            <Box top={1}>
              <Button
                data-testid="pay"
                disabled={!selectedAmount}
                onClick={handlePayments(props?.charity?.id, selectedAmount, props?.charity?.currency)}
              >
                Pay
              </Button>
            </Box>
          </Box>
        </Option>
      )}
    </Card>
  );
};

CardItem.prototype = {
  charity: PropTypes.shape({ id: PropTypes.number, currency: PropTypes.string, name: PropTypes.string }).isRequired,
  index: PropTypes.number.isRequired,
};

CardItem.defaultProps = {
  charity: {},
};

export default CardItem;
