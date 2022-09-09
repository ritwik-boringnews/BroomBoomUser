import {
  SET_MAP_LOCATION_ORIGIN,
  SET_MAP_LOCATION_DESTINATION,
  SET_MAP_HOME_UI_TYPE,
  SET_LOC_INPUT_TYPE,
  RESET_MAP_LOC,
  SET_MAP_VISIBLE_MARKER_TYPE,
  BACK_TO_ORIGIN,
  BACK_TO_DESTINATION
} from "../actionTypes";
import metrics from "../../src/Utility/metrics";

const INITIAL_STATE = {
  origin: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: metrics.LATITUDE_DELTA,
    longitudeDelta: metrics.LONGITUDE_DELTA,
    text: "",
  },
  destination: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: metrics.LATITUDE_DELTA,
    longitudeDelta: metrics.LONGITUDE_DELTA,
    text: "",
  },
  homeMapUIType: "PICKUP_LOCATION",
  locInputType: "origin", // origin/destination
  visibleMarkerType: "origin", // origin/destination/both
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MAP_LOCATION_ORIGIN:
      return {
        ...state,
        origin: {...state.origin, ...action.payload},
        // locInputType:'destination'
      };
    case SET_MAP_LOCATION_DESTINATION:
      return {
        ...state,
        destination: {...state.destination, ...action.payload},
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
    case SET_MAP_VISIBLE_MARKER_TYPE:
      return {
        ...state,
        visibleMarkerType: action.payload,
      };
    case RESET_MAP_LOC:
      return {
        // ...state,
        ...INITIAL_STATE,
      };
    case BACK_TO_ORIGIN:
      return {
        ...state,
        destination: INITIAL_STATE.destination,
        homeMapUIType: INITIAL_STATE.homeMapUIType,
        locInputType: INITIAL_STATE.locInputType,
        visibleMarkerType: INITIAL_STATE.visibleMarkerType,
      };
    case BACK_TO_DESTINATION:
      return {
        ...state,
        // destination: INITIAL_STATE.destination,
        homeMapUIType: INITIAL_STATE.homeMapUIType,
        locInputType: "destination",
        visibleMarkerType: "destination",
      };
    default:
      return state;
  }
};

export default reducer;
