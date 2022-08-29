import {SET_MODAL_SEARCH_VISIBLE, SET_SHOW_PASSWORD} from './constains';

const initialState = {
  showPassword: false,
  modalSearchVisible: false,
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
    default:
      return state;
  }
};

export default rootReducer;
