import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharities, getPayments } from './store/actions';
import { getMessageState, getDonateState } from './store/selectors';
import Error from './components/common/Error';
import Success from './components/common/Success';
import Header from './components/common/Header';
import Container from './components/common/Container';
import Donation from './components/common/Donation';
import Box from './components/common/Box';
import { HomePage } from './components/pages/HomePage';

const App = () => {
  const dispatch = useDispatch();

  const message = useSelector(getMessageState);
  const donate = useSelector(getDonateState);

  useEffect(() => {
    dispatch(getCharities());
    dispatch(getPayments());
  }, [dispatch]);

  return (
    <Container>
      <Box top={4}>
        <Header>Omise Tamboon React</Header>
        <Donation>All donations: {donate}</Donation>
        {message.success && <Success>{message.success}</Success>}
        {message.error && <Error>{message.error}</Error>}
        <HomePage />
      </Box>
    </Container>
  );
};

export default App;
