import donateReducer from './donate.reducer';

describe('donate.reducer', () => {
  const initialState = 0;

  it('should return the payload', () => {
    expect(donateReducer(initialState, { type: 'TAMBOON/UPDATE_TOTAL_DONATE', payload: 10 })).toBe(10);
  });

  it('should return an initial state', () => {
    expect(donateReducer(initialState, { type: 'TAMBOON/RESET_TOTAL_DONATE' })).toBe(initialState);
  });

  it('should return state when given a random type', () => {
    expect(
      donateReducer(initialState, {
        type: 'TAMBOON/RANDOM',
      }),
    ).toEqual(initialState);
  });
});
