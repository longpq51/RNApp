import {
  SET_AUDIO_PLAYING,
  SET_IS_SHOW_MINI_PLAYER,
  SET_IS_SHOW_MODAL_PLAYER,
  SET_MODAL_SEARCH_VISIBLE,
  SET_REPEAT,
  SET_SHOW_PASSWORD,
  SET_USER_INFO,
} from './constains';

const initialState = {
  showPassword: false,
  modalSearchVisible: false,
  userInfo: {
    name: 'Longpq',
    email: 'longpq@comartek.com',
    dob: '05/01/2001',
  },
  repeat: false,
  isShowMiniPlayer: false,
  isShowModalPlayer: false,
  audioPlaying: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload,
      };

    case SET_MODAL_SEARCH_VISIBLE:
      return {
        ...state,
        modalSearchVisible: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_REPEAT:
      return {
        ...state,
        repeat: action.payload,
      };
    case SET_IS_SHOW_MINI_PLAYER:
      return {
        ...state,
        isShowMiniPlayer: action.payload,
      };
    case SET_IS_SHOW_MODAL_PLAYER:
      return {
        ...state,
        isShowModalPlayer: action.payload,
      };
    case SET_AUDIO_PLAYING:
      return {
        ...state,
        audioPlaying: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
