import {
  ADD_PLAYLIST,
  ADD_TO_PLAYLIST,
  ADD_TO_WISHLIST,
  DELETE_FROM_PLAYLIST,
  DELETE_FROM_WISHLIST,
  DELETE_PLAYLIST,
  SET_ALBUM,
  SET_AUDIO,
  SET_AUDIO_PLAYING,
  SET_IS_SHOW_MINI_PLAYER,
  SET_IS_SHOW_MODAL_PLAYER,
  SET_MODAL_SEARCH_VISIBLE,
  SET_PLAYLIST,
  SET_PLAY_PLAYLIST,
  SET_REPEAT,
  SET_SHOW_PASSWORD,
  SET_SPIN_VALUE,
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

export const setSpinValue = data => ({
  type: SET_SPIN_VALUE,
  payload: data,
});

export const setPlayist = data => ({
  type: SET_PLAYLIST,
  payload: data,
});

export const addPlaylist = data => ({
  type: ADD_PLAYLIST,
  payload: data,
});

export const deletePlaylist = data => ({
  type: DELETE_PLAYLIST,
  payload: data,
});

export const addToPlaylist = data => ({
  type: ADD_TO_PLAYLIST,
  payload: data,
});

export const deleteFromPlaylist = data => ({
  type: DELETE_FROM_PLAYLIST,
  payload: data,
});

export const setPlayPlaylist = data => ({
  type: SET_PLAY_PLAYLIST,
  payload: data,
});

export const setAudio = data => ({
  type: SET_AUDIO,
  payload: data,
});

export const addToWishlist = data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const deleteFromWishlist = data => ({
  type: DELETE_FROM_WISHLIST,
  payload: data,
});

export const setAlbum = data => ({
  type: SET_ALBUM,
  payload: data,
});
