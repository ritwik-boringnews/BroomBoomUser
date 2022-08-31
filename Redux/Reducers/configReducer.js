import {
  POP_REQUEST,
  PUSH_REQUEST,
  SET_MAP_LOCATION_DESTINATION,
  SET_MAP_LOCATION_ORIGIN,
  SET_MODULE_ACTIVE,
} from "../actionTypes";

const INITIAL_STATE = {
  spinner: [],
  origin: "",
  destination: "",
  active: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUSH_REQUEST:
      return {
        ...state,
        spinner: action.request,
      };
    case POP_REQUEST:
      return {
        ...state,
        spinner: action.request,
      };
    case SET_MAP_LOCATION_ORIGIN:
      return {
        ...state,
        origin: action.locations,
      };
    case SET_MAP_LOCATION_DESTINATION:
      return {
        ...state,
        destination: action.locations,
      };
    case SET_MODULE_ACTIVE:
      return {
        ...state,
        active: action.moduleActive,
      };
    default:
      return state;
  }
};

export default reducer;
