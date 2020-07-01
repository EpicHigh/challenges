import '@testing-library/jest-dom';
import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as payments from '../../../store/actions/payments.action';
import db from '../../../../db.json';
import CardItem from './CardItem';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('CardItem', () => {
  const store = mockStore({
    charities: { charities: db.charities },
    payments: { payments: db.payments },
    donate: 0,
  });

  it('should be in the document', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <CardItem />
      </Provider>,
    );

    expect(baseElement).toBeInTheDocument();
  });

  it('should open options', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CardItem />
      </Provider>,
    );

    act(() => {
      fireEvent.click(getByTestId('donate'));
    });

    expect(getByTestId('option')).toBeInTheDocument();
  });

  it('should close options', async () => {
    const { getByTestId, queryByTestId, findByTestId } = render(
      <Provider store={store}>
        <CardItem charity={db.charities[0]} index={1} />
      </Provider>,
    );

    await act(async () => {
      await fireEvent.click(getByTestId('donate'));
      const cancel = await findByTestId('cancel');
      fireEvent.click(cancel);
    });

    const option = queryByTestId('option');
    expect(option).toBe(null);
  });

  it('should the option description', async () => {
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <CardItem charity={db.charities[0]} index={1} />
      </Provider>,
    );

    await act(async () => {
      await fireEvent.click(getByTestId('donate'));
    });

    const description = queryByTestId('description');
    expect(description).toHaveTextContent('Select amount to date (USD)');
  });

  it('should make a payment with given arguments', async () => {
    const makePayment = jest.spyOn(payments, 'makePayments');

    const { getByTestId, findByTestId, findAllByRole } = render(
      <Provider store={store}>
        <CardItem charity={db.charities[0]} index={1} />
      </Provider>,
    );

    await act(async () => {
      await fireEvent.click(getByTestId('donate'));
    });

    const description = await findAllByRole('radio');
    const pay = await findByTestId('pay');

    await act(async () => {
      await fireEvent.click(description[0]);
      await fireEvent.click(pay);
    });

    expect(makePayment).toHaveBeenCalledWith(db.charities[0].id, 10, db.charities[0].currency);
  });
});
