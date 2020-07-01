import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import db from '../../../../db.json';
import HomePage from './HomePage';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('HomePage', () => {
  const store = mockStore({
    charities: { charities: db.charities },
    payments: { payments: db.payments },
    donate: 0,
  });

  it('should be in the document', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    expect(baseElement).toBeInTheDocument();
  });

  it('should map number of the cards equal number of charities', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const col = getAllByTestId('col');
    expect(col.length).toBe(db.charities.length);
  });
});
