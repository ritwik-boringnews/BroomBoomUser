import {
  SET_MAP_LOCATION_ORIGIN,
  SET_MAP_LOCATION_DESTINATION,
  SET_MAP_HOME_UI_TYPE,
  SET_LOC_INPUT_TYPE,
  RESET_MAP_LOC
} from "../actionTypes";

export const setMapLocationOrigin = payload => {
  return {
    type: SET_MAP_LOCATION_ORIGIN,
    payload,
  };
};

export const setMapLocationDestination = payload => {
  return {
    type: SET_MAP_LOCATION_DESTINATION,
    payload,
  };
};

export const setLocInputType = payload => {
  return {
    type: SET_LOC_INPUT_TYPE,
    payload,
  };
};

export const setMapHomeUIType = payload => {
  return {
    type: SET_MAP_HOME_UI_TYPE,
    payload,
  };
};

export const resetOriginDestination = () => {
  return {
    type: RESET_MAP_LOC,
  };
}