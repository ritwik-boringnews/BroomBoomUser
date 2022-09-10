import {
  getCurrentLocation,
  getRevGeoCoding,
} from "../../src/Services/GmapServices";
import metrics from "../../src/Utility/metrics";
import {
  SET_MAP_LOCATION_ORIGIN,
  SET_MAP_LOCATION_DESTINATION,
  SET_MAP_HOME_UI_TYPE,
  SET_LOC_INPUT_TYPE,
  RESET_MAP_LOC,
  SET_MAP_VISIBLE_MARKER_TYPE,
  BACK_TO_ORIGIN,
  BACK_TO_DESTINATION,
  SET_GMAP_HOME_BACK_BTN
} from "../actionTypes";
import {notify} from "./notificationActions";

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
  return async dispatch => {
    try {
      const currLocation = await getCurrentLocation();
      if (currLocation) {
        const text = await getRevGeoCoding({...currLocation});
        dispatch({
          type: RESET_MAP_LOC,
          payload: {
            latitude: currLocation.latitude,
            longitude: currLocation.longitude,
            text: text,
            latitudeDelta: metrics.LATITUDE_DELTA,
            longitudeDelta: metrics.LONGITUDE_DELTA,
          },
        });
      }
    } catch (error) {
      dispatch(
        notify({
          message: error.message || "Something went wrong",
          notifyType: "error",
        }),
      );
    }
  };
};

export const setMapVisibleMarkerType = payload => {
  return {
    type: SET_MAP_VISIBLE_MARKER_TYPE,
    payload,
  };
};

export const backToOrigin = () => {
  return {
    type: BACK_TO_ORIGIN,
  };
};

export const backToDestination = () => {
  return {
    type: BACK_TO_DESTINATION,
  };
};

export const setGmapHomeBackBtn = payload => {
  return {
    type: SET_GMAP_HOME_BACK_BTN,
    payload,
  };
};
