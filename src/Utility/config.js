const API_UPLOAD_BASE_URL = "http://43.205.135.42:7000/api/v1";
const GOOGLE_MAPS_API_KEY = "AIzaSyAlPDyJCgB8lzI15C3vsiLZMicn3ZRisUE";
const GOOGLE_PLACES_AUTO_COMPLETE_REQUEST_URL_OBJECT = {
  url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
  useOnPlatform: "web",
};
const GOOGLE_PLACES_AUTO_COMPLETE_QUERY_OBJECT = {
  key: GOOGLE_MAPS_API_KEY,
  language: "en", // language of the results
};
const GOOGLE_PLACES_AUTO_COMPLETE_DETAILS_QUERY_OBJECT = {fields: "geometry"};
const GOOGLE_MAPS_REDIRECTION_URL = "https://www.google.com/maps/dir/?api=1";

export {
  API_UPLOAD_BASE_URL,
  GOOGLE_MAPS_API_KEY,
  GOOGLE_PLACES_AUTO_COMPLETE_REQUEST_URL_OBJECT,
  GOOGLE_PLACES_AUTO_COMPLETE_DETAILS_QUERY_OBJECT,
  GOOGLE_PLACES_AUTO_COMPLETE_QUERY_OBJECT,
  GOOGLE_MAPS_REDIRECTION_URL,
};
