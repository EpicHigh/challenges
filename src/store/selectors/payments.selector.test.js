import { getPaymentsState } from './payments.selector';

describe('payments.selector', () => {
  const result = [
    {
      charitiesId: 2,
      amount: 10,
      currency: 'THB',
      id: 1,
    },
  ];

  const state = {
    payments: result,
  };

  it('should return charities state', () => {
    expect(getPaymentsState(state)).toEqual(result);
  });
});
