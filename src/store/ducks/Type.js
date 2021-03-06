import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadTypeRequest: null,
  loadTypeSuccess: ['data'],
});

export const typeTypes = Types;

export default Creators;

export const INITIAL_STATE = {
  data: [],
};

export const reducers = createReducer(INITIAL_STATE, {
  [Types.LOAD_TYPE_SUCCESS]: (state, { data }) => ({ data: [{ ...data }] }),
});
