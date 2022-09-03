import {
  POP_REQUEST,
  PUSH_REQUEST,
  SET_MAP_LOCATION_DESTINATION,
  SET_MAP_LOCATION_ORIGIN,
  SET_MODULE_ACTIVE,
} from "../actionTypes";
import {store} from "../store";

export const pushRequest = request => {
  const spinner = store.getState().config.spinner;
  spinner.push(request);
  return {
    type: PUSH_REQUEST,
    request: spinner,
  };
};

export const popRequest = () => {
  const spinner = [...store.getState().config.spinner];
  spinner.pop();

  return {
    type: POP_REQUEST,
    request: spinner,
  };
};

export const setMapLocationsOrigin = locations => {
  return {
    type: SET_MAP_LOCATION_ORIGIN,
    locations,
  };
};

export const setMapLocationsDestination = locations => {
  return {
    type: SET_MAP_LOCATION_DESTINATION,
    locations,
  };
};

export const setModuleActive = moduleActive => {
  return {
    type: SET_MODULE_ACTIVE,
    moduleActive,
  };
};
