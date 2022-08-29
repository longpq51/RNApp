import {SET_MODAL_SEARCH_VISIBLE, SET_SHOW_PASSWORD} from './constains';

export const setShowPassword = data => ({
  type: SET_SHOW_PASSWORD,
  payload: data,
});

export const setModalSearchVisible = data => ({
  type: SET_MODAL_SEARCH_VISIBLE,
  payload: data,
});
