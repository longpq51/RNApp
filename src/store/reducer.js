import {Animated} from 'react-native';
import {images} from '../assets/images';
import {
  ADD_PLAYLIST,
  ADD_TO_PLAYLIST,
  ADD_TO_WISHLIST,
  ADD_WISHLIST_ALBUM,
  DELETE_FROM_PLAYLIST,
  DELETE_FROM_WISHLIST,
  DELETE_PLAYLIST,
  DELETE_WISHLIST_ALBUM,
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

const initialState = {
  showPassword: false,
  modalSearchVisible: false,
  userInfo: {
    name: 'longpq@comartek',
    email: 'longpq@comartek.com',
    phone: '0942559573',
    dob: '05/01/2001',
    avatar: images.accDefault,
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
  wishlist: [],
  album: [],
  wishlistAlbum: [],
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
      return {
        ...state,
        playlist:
          state.playlist.length === 0 || state.playlist[0][0] === undefined
            ? [...state.playlist, action.payload]
            : [...state.playlist[0], action.payload],
      };
    case DELETE_PLAYLIST:
      console.log({playlist: state.playlist, data: action.payload});
      return {
        ...state,
        playlist:
          state.playlist[0][0] === undefined
            ? state.playlist.filter(item => item.name !== action.payload.name)
            : state.playlist[0].filter(
                item => item.name !== action.payload.name,
              ),
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
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
      };
    case SET_ALBUM:
      return {
        ...state,
        album: action.payload,
      };
    case ADD_WISHLIST_ALBUM:
      return {
        ...state,
        wishlistAlbum: [...state.wishlistAlbum, action.payload],
      };
    case DELETE_WISHLIST_ALBUM:
      return {
        ...state,
        wishlistAlbum: state.wishlistAlbum.filter(
          item => item.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
