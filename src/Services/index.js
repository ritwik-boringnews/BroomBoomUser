import API from "./ApiServices";

export const localIps = {
  asish: "192.168.0.102",
  mainak: "192.168.29.78",
  mainLocal: "43.205.135.42",
};
const PILOT_PORT = 7000;
const USER_PORT = 8000;

export const baseUrlUser = `http://${localIps.mainLocal}:${USER_PORT}/api/v1`;
export const baseUrlPilot = `http://${localIps.mainLocal}:${PILOT_PORT}/api/v1`;
// export const baseUrl = "http://43.205.135.42:8000/api/v1";

const Api = new API({
  baseUrl: baseUrlUser,
});

export const ApiPilot = new API({
  baseUrl: baseUrlPilot,
});

export default Api;

export const API_ENDPOINTS = {
  PILOT: {
    getGeoLocationText: "map/reverse-geo-code/:latitude/:longitude",
  },
};

export const IS_LOCAL = false;
