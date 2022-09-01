import {
  SET_MAP_LOCATION_ORIGIN,
  SET_MAP_LOCATION_DESTINATION,
  SET_MAP_HOME_UI_TYPE,
  SET_LOC_INPUT_TYPE,
  RESET_MAP_LOC,
} from "../actionTypes";

const INITIAL_STATE = {
  origin: "",
  destination: "",
  homeMapUIType: "PICKUP_LOCATION",
  locInputType: "origin", // origin/destination
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MAP_LOCATION_ORIGIN:
      return {
        ...state,
        origin: action.payload,
        // locInputType:'destination'
      };
    case SET_MAP_LOCATION_DESTINATION:
      return {
        ...state,
        destination: action.payload,
        // locInputType:'destination'
      };
    case SET_MAP_HOME_UI_TYPE:
      return {
        ...state,
        homeMapUIType: action.payload,
      };
    case SET_LOC_INPUT_TYPE:
      return {
        ...state,
        locInputType: action.payload,
      };
    case RESET_MAP_LOC:
      return {
        ...state,
        locInputType: "origin",
        origin: "",
        destination: "",
        homeMapUIType: "PICKUP_LOCATION",
      };
    default:
      return state;
  }
};

export default reducer;
