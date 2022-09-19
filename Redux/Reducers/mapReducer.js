import {
  SET_MAP_LOCATION_ORIGIN,
  SET_MAP_LOCATION_DESTINATION,
  SET_MAP_HOME_UI_TYPE,
  SET_LOC_INPUT_TYPE,
  RESET_MAP_LOC,
  SET_MAP_VISIBLE_MARKER_TYPE,
  BACK_TO_ORIGIN,
  BACK_TO_DESTINATION,
  SET_GMAP_HOME_BACK_BTN,
} from "../actionTypes";
import metrics from "../../src/Utility/metrics";
import {
  REDUX_HOME_MAP_TYPE_OPTIONS,
  REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS,
} from "../../src/Utility/optionTypes";

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
    text: "", // geolocation in text
  },
  homeMapUIType: REDUX_HOME_MAP_TYPE_OPTIONS.PICKUP_LOCATION,
  // homeMapUIType: REDUX_HOME_MAP_TYPE_OPTIONS.CHOOSE_VEHICLE_TYPE,
  locInputType: "origin", // origin/destination
  visibleMarkerType: REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.ORIGIN, // origin/destination/both
  isShowHomeMapBackBtn: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MAP_LOCATION_ORIGIN:
      return {
        ...state,
        origin: {...state.origin, ...action.payload},
      };
    case SET_MAP_LOCATION_DESTINATION:
      return {
        ...state,
        destination: {...state.destination, ...action.payload},
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
        ...INITIAL_STATE,
        origin: {
          ...action.payload,
        },
      };
    case BACK_TO_ORIGIN:
      return {
        ...state,
        destination: INITIAL_STATE.destination,
        homeMapUIType: INITIAL_STATE.homeMapUIType,
        locInputType: INITIAL_STATE.locInputType,
        visibleMarkerType: INITIAL_STATE.visibleMarkerType,
        isShowHomeMapBackBtn: INITIAL_STATE.isShowHomeMapBackBtn,
      };
    case BACK_TO_DESTINATION:
      return {
        ...state,
        homeMapUIType: INITIAL_STATE.homeMapUIType,
        locInputType: "destination",
        visibleMarkerType:
          REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.DESTINATION,
      };
    case SET_GMAP_HOME_BACK_BTN:
      return {
        ...state,
        isShowHomeMapBackBtn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
