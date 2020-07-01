import charitiesReducer from './charities.reducer';

describe('charities.reducer', () => {
  const initialState = {};
  const payload = [
    {
      id: 1,
      name: 'Baan Kru Noi',
      image: 'baan-kru-noi.jpg',
      currency: 'THB',
    },
  ];

  it('should map payload to charities', () => {
    expect(
      charitiesReducer(initialState, {
        type: 'TAMBOON/GET_CHARITIES',
        payload,
      }),
    ).toEqual({ charities: payload });
  });

  it('should return an initial state', () => {
    expect(
      charitiesReducer(initialState, {
        type: 'TAMBOON/RESET_CHARITIES',
      }),
    ).toEqual(initialState);
  });

  it('should return state when given a random type', () => {
    expect(
      charitiesReducer(initialState, {
        type: 'TAMBOON/RANDOM',
      }),
    ).toEqual(initialState);
  });
});
