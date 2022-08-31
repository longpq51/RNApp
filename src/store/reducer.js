import {
  SET_MODAL_SEARCH_VISIBLE,
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
};

const rootReducer = (state = initialState, action) => {
  console.log(state);
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
    default:
      return state;
  }
};

export default rootReducer;
