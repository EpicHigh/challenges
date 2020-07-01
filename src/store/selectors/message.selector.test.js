import { getMessageState } from './message.selector';

describe('donate.selector', () => {
  const result = { success: 'Thank you for donation' };

  const state = {
    message: result,
  };

  it('should return charities state', () => {
    expect(getMessageState(state)).toEqual(result);
  });
});
