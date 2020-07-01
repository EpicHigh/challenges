import { getDonateState } from './donate.selector';

describe('donate.selector', () => {
  const state = {
    donate: 1200,
  };

  it('should return charities state', () => {
    expect(getDonateState(state)).toEqual(1200);
  });
});
