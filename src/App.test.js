import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import db from '../db.json';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App', () => {
  it('should show total donation', () => {
    const store = mockStore({
      charities: { charities: db.charities },
      payments: { payments: db.payments },
      donate: 0,
    });
    const { baseElement, getByText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(baseElement).toBeInTheDocument();
    expect(getByText('Omise Tamboon React')).toBeVisible();
    expect(getByTestId('donation')).toHaveTextContent('All donations: 0');
  });

  it('should show a success message', () => {
    const store = mockStore({
      charities: { charities: db.charities },
      payments: { payments: db.payments },
      donate: 20,
      message: { success: 'Thank you for your donation' },
    });
    const { baseElement, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(baseElement).toBeInTheDocument();
    expect(getByTestId('success')).toHaveTextContent('Thank you for your donation');
  });

  it('should show an error message', () => {
    const store = mockStore({
      charities: { charities: db.charities },
      payments: { payments: db.payments },
      donate: 20,
      message: { error: 'Something went wrong, please try again.' },
    });
    const { baseElement, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(baseElement).toBeInTheDocument();
    expect(getByTestId('error')).toHaveTextContent('Something went wrong, please try again.');
  });
});
