import paymentsReducer from './payments.reducer';

describe('payments.reducer', () => {
  const initialState = {};
  const payload = [
    {
      charitiesId: 2,
      amount: 10,
      currency: 'THB',
      id: 1,
    },
  ];

  it('should map payload to payments ', () => {
    expect(
      paymentsReducer(initialState, {
        type: 'TAMBOON/GET_PAYMENTS',
        payload,
      }),
    ).toEqual({ payments: payload });
  });

  it('should return an initial state', () => {
    expect(
      paymentsReducer(
        { payment: payload },
        {
          type: 'TAMBOON/RESET_PAYMENTS',
        },
      ),
    ).toEqual(initialState);
  });

  it('should return state when given a random type', () => {
    expect(
      paymentsReducer(
        { payment: payload },
        {
          type: 'TAMBOON/RANDOM',
        },
      ),
    ).toEqual({ payment: payload });
  });
});
