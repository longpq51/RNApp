import {Animated} from 'react-native';
import {
  ADD_PLAYLIST,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
  DELETE_PLAYLIST,
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
  SET_UPDATE,
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
  audioPlaying: [],
  spinValue: new Animated.Value(0),
  playlist: [],
  playPlaylist: {
    name: '',
    type: false,
  },
  audio: {},
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
    case SET_SPIN_VALUE:
      return {
        ...state,
        spinValue: action.payload,
      };
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
      };
    case ADD_PLAYLIST:
      console.log({playlist: state.playlist, payload: action.payload});
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.filter(item => item.name === action.payload),
      };
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: [
          state.playlist[0][0] === undefined
            ? state.playlist.map(item => {
                if (item.name === action.payload.namePlaylist)
                  return {
                    name: item.name,
                    data: [...item.data, action.payload.data],
                  };
                return item;
              })
            : state.playlist[0].map(item => {
                if (item.name === action.payload.namePlaylist)
                  return {
                    name: item.name,
                    data: [...item.data, action.payload.data],
                  };
                return item;
              }),
        ],
      };
    case DELETE_FROM_PLAYLIST:
      return {
        ...state,
        playlist: [
          state.playlist[0].map(item => {
            if (item.name === action.payload.namePlaylist)
              return {
                name: item.name,
                data: item.data.filter(i => i.id !== action.payload.data.id),
              };
            return item;
          }),
        ],
      };
    case SET_PLAY_PLAYLIST:
      return {
        ...state,
        playPlaylist: action.payload,
      };
    case SET_AUDIO:
      return {
        ...state,
        audio: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
