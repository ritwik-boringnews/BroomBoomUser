import {HIDE, NOTIFY} from "../actionTypes";

export const notify = payload => {
  return {
    type: NOTIFY,
    message: payload.message,
    notifyType: payload.notifyType,
  };
};

export const hide = () => {
  return {
    type: HIDE,
  };
};
