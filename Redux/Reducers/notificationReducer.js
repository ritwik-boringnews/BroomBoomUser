import {NOTIFY, HIDE} from "../actionTypes";

const INITIAL_STATE = {
  message: "",
  isVisible: false,
  type: "error",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFY:
      return {
        ...state,
        message: action.message,
        isVisible: true,
        type: action.notifyType || "error",
      };
    case HIDE:
      return {
        message: "",
        type: "",
        isVisible: false,
      };
    default:
      return state;
  }
};

export default reducer;
