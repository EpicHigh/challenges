import { getCharityList } from './charities.selector';

describe('charities.selector', () => {
  const result = [
    {
      id: 1,
      name: 'Baan Kru Noi',
      image: 'baan-kru-noi.jpg',
      currency: 'THB',
    },
  ];

  const state = {
    charities: { charities: result },
  };

  it('should return charities state', () => {
    expect(getCharityList(state)).toEqual(result);
  });
});
