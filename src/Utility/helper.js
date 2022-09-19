import {GOOGLE_MAPS_REDIRECTION_URL} from "./config";

export const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const getTitleCaseText = text =>
  text[0].toUpperCase() + text.slice(1, text.length) || "";

export const getGmapsRedirectionUrl = ({
  origin,
  destination,
  mode = "driving",
  encoded = false,
}) => {
  const {latitude: originLat, longitude: originLng, text: originText} = origin;
  const {
    latitude: destinationLat,
    longitude: destinationLng,
    text: destinationText,
  } = destination;
  if (encoded) {
    return `${GOOGLE_MAPS_REDIRECTION_URL}&origin=${originLat},${originLng}&destination=${destinationLat},${destinationLng}&travelmode=${mode}`;
  } else {
    return `${GOOGLE_MAPS_REDIRECTION_URL}&origin=${originText}&destination=${destinationText}&travelmode=${mode}`;
  }
};
