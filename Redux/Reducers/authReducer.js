import {
  ADD_TOKEN,
  LOGOUT,
  REFER_TOKEN_ADDED,
  UPDATE_USER,
} from "../actionTypes";

const INITIAL_STATE = {
  clientToken: "",
  user: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      console.log("authreducer page", action.payload);
      return {
        ...state,
        clientToken: action.payload.clientToken,
        user: action.payload.user,
      };
    case LOGOUT:
      return {...state, clientToken: "", user: ""};
    case UPDATE_USER:
      return {...state, user: action.user};
    case REFER_TOKEN_ADDED:
      return {...state, user: {...state.user, refer_token_added: 1}};
    default:
      return state;
  }
};

export default reducer;
