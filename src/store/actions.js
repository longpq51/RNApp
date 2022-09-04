import {
  SET_AUDIO_PLAYING,
  SET_IS_SHOW_MINI_PLAYER,
  SET_IS_SHOW_MODAL_PLAYER,
  SET_MODAL_SEARCH_VISIBLE,
  SET_REPEAT,
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

export const setRepeat = data => ({
  type: SET_REPEAT,
  payload: data,
});

export const setIsShowMiniPlayer = data => ({
  type: SET_IS_SHOW_MINI_PLAYER,
  payload: data,
});

export const setIsShowModalPlayer = data => ({
  type: SET_IS_SHOW_MODAL_PLAYER,
  payload: data,
});

export const setAudioPlaying = data => ({
  type: SET_AUDIO_PLAYING,
  payload: data,
});
