import { createReducer, createActions } from 'reduxsauce';
// import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loginRequest: ['credentials', 'next'],
  loginSuccess: ['data'],
  loginFailure: null,
  logout: null,
});

export const authTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  token: '',
  id: '',
  name: '',
  email: '',
  error: false,
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: (state, { data }) => ({
    token: data.token,
    id: data.user.id,
    name: data.user.name,
    email: data.user.email,
    error: false,
  }),
  [Types.LOGOUT]: () => ({
    token: '',
    id: '',
    name: '',
    email: '',
    error: false,
  }),
  [Types.LOGIN_FAILURE]: (state) => ({ ...state, error: true }),
});
