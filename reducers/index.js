import { combineReducers } from "redux";

const initialState = null;

const toggleMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MENU":
      return action.payload;
    case "OPEN_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  toggleMenuReducer
});
