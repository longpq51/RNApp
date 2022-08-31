import {
  SET_MODAL_SEARCH_VISIBLE,
  SET_SHOW_PASSWORD,
  SET_USER_INFO,
} from './constains';

export const setShowPassword = data => ({
  type: SET_SHOW_PASSWORD,
  payload: data,
});

export const setModalSearchVisible = data => ({
  type: SET_MODAL_SEARCH_VISIBLE,
  payload: data,
});

export const setUserInfo = data => ({
  type: SET_USER_INFO,
  payload: data,
});
