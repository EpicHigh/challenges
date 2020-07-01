import messageReducer from './message.reducer';

describe('message.reducer', () => {
  const initialState = {};
  it('should map error message correctly', () => {
    expect(
      messageReducer(initialState, { type: 'TAMBOON/GET_ERROR_MESSAGE', payload: 'Something went wrong' }),
    ).toEqual({ error: 'Something went wrong' });
  });

  it('should map success message correctly', () => {
    expect(
      messageReducer(initialState, { type: 'TAMBOON/GET_SUCCESS_MESSAGE', payload: 'Thank you for donation' }),
    ).toEqual({ success: 'Thank you for donation' });
  });

  it('should reset an error message', () => {
    expect(messageReducer({ error: 'Something went wrong' }, { type: 'TAMBOON/RESET_ERROR_MESSAGE' })).toEqual({
      error: '',
    });
  });

  it('should reset a success message', () => {
    expect(messageReducer({ success: 'Thank you for donation' }, { type: 'TAMBOON/RESET_SUCCESS_MESSAGE' })).toEqual({
      success: '',
    });
  });

  it('should reset the message state', () => {
    expect(messageReducer({ success: 'Thank you for donation' }, { type: 'TAMBOON/RESET_MESSAGE_STATE' })).toEqual(
      initialState,
    );
  });

  it('should return a state when given a random message', () => {
    expect(messageReducer({ success: 'Thank you for donation' }, { type: 'TAMBOON/RANDOM' })).toEqual({
      success: 'Thank you for donation',
    });
  });
});
